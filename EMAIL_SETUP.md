# Email Notification Setup

This guide will help you set up automatic email notifications to warren@genesisreloop.com when someone submits the partner inquiry form.

## Option 1: Supabase Database Webhooks + Edge Function (Recommended)

### Step 1: Deploy the Edge Function

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref your-project-ref
   ```

4. Set up Resend API (for sending emails):
   - Go to [Resend.com](https://resend.com) and create an account
   - Get your API key
   - Add your domain (genesisreloop.com) and verify it

5. Set the environment variable:
   ```bash
   supabase secrets set RESEND_API_KEY=your-resend-api-key
   ```

6. Deploy the function:
   ```bash
   supabase functions deploy send-partner-inquiry-email
   ```

### Step 2: Create Database Webhook

1. Go to your Supabase Dashboard
2. Navigate to Database → Webhooks
3. Click "Create a new webhook"
4. Configure:
   - Name: `partner_inquiry_email`
   - Table: `partner_inquiries`
   - Events: Select only `INSERT`
   - Type: `HTTP Request`
   - URL: `https://your-project-ref.supabase.co/functions/v1/send-partner-inquiry-email`
   - HTTP Headers: Add
     ```
     Authorization: Bearer your-supabase-anon-key
     Content-Type: application/json
     ```

## Option 2: Using Supabase Triggers with PostgREST

If you prefer a simpler solution without Edge Functions:

1. Go to Supabase SQL Editor
2. Run this query to create a trigger that sends emails via pg_net:

```sql
-- Enable pg_net extension
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create email notification function
CREATE OR REPLACE FUNCTION notify_partner_inquiry()
RETURNS TRIGGER AS $$
BEGIN
  -- This sends a webhook to your preferred email service
  PERFORM net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || 'your-resend-api-key',
      'Content-Type', 'application/json'
    ),
    body := jsonb_build_object(
      'from', 'Genesis Route <notifications@genesisreloop.com>',
      'to', ARRAY['warren@genesisreloop.com'],
      'subject', '🚀 New Partner Inquiry: ' || NEW.business_name,
      'html', format(
        '<h2>New Partner Inquiry</h2>
        <p><strong>Name:</strong> %s</p>
        <p><strong>Business:</strong> %s</p>
        <p><strong>Email:</strong> %s</p>
        <p><strong>Phone:</strong> %s</p>
        <p><strong>Message:</strong><br>%s</p>',
        NEW.name, NEW.business_name, NEW.email, NEW.phone, NEW.message
      )
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER on_partner_inquiry_insert
AFTER INSERT ON partner_inquiries
FOR EACH ROW
EXECUTE FUNCTION notify_partner_inquiry();
```

## Option 3: Client-Side Email (Simplest, Less Secure)

For immediate setup without backend configuration, you can modify the ContactForm component to send emails directly:

1. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```

2. Set up EmailJS:
   - Go to [EmailJS.com](https://www.emailjs.com)
   - Create a free account
   - Add Gmail or another email service
   - Create an email template
   - Get your service ID, template ID, and public key

3. Update the ContactForm to include EmailJS (I can help with this if needed)

## Testing

After setting up any option:

1. Submit a test inquiry through the form
2. Check that warren@genesisreloop.com receives the notification
3. Verify all inquiry details are included in the email

## Current Setup

The site is configured to:
- Store all inquiries in the Supabase `partner_inquiries` table
- Display warren@genesisreloop.com as the direct contact email

Choose the option that best fits your technical requirements and timeline.
