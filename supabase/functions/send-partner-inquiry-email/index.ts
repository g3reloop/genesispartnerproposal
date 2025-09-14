import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const TO_EMAIL = 'warren@genesisreloop.com'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WebhookPayload {
  type: 'INSERT'
  table: string
  record: {
    id: string
    name: string
    business_name: string
    email: string
    phone: string
    message: string
    created_at: string
  }
  schema: 'public'
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload: WebhookPayload = await req.json()
    
    // Only process INSERT events for partner_inquiries table
    if (payload.type !== 'INSERT' || payload.table !== 'partner_inquiries') {
      return new Response('Not applicable', { status: 200 })
    }

    const { record } = payload
    
    // Send email using Resend API
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3f2a;">New Partner Inquiry - Genesis Route</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c7da0; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${record.name}</p>
          <p><strong>Business:</strong> ${record.business_name}</p>
          <p><strong>Email:</strong> <a href="mailto:${record.email}">${record.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${record.phone}">${record.phone}</a></p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c7da0; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${record.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #1e3f2a; color: white; border-radius: 8px;">
          <h3 style="margin-top: 0;">Next Steps</h3>
          <p>This waste carrier is interested in partnering. They're willing to pay the £600 service fee for the AI logistics tool.</p>
          <p><strong>Action Required:</strong> Contact them within 24 hours to discuss their operation and arrange the partnership.</p>
        </div>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">
          This notification was sent from the Genesis Route Partner Proposal website.<br>
          Inquiry received: ${new Date(record.created_at).toLocaleString()}
        </p>
      </div>
    `

    const emailText = `
New Partner Inquiry - Genesis Route

CONTACT DETAILS
Name: ${record.name}
Business: ${record.business_name}
Email: ${record.email}
Phone: ${record.phone}

MESSAGE
${record.message}

NEXT STEPS
This waste carrier is interested in partnering. They're willing to pay the £600 service fee for the AI logistics tool.

Action Required: Contact them within 24 hours to discuss their operation and arrange the partnership.

---
Inquiry received: ${new Date(record.created_at).toLocaleString()}
    `

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Genesis Route <notifications@genesisreloop.com>',
        to: [TO_EMAIL],
        subject: `🚀 New Partner Inquiry: ${record.business_name}`,
        html: emailHtml,
        text: emailText,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error(`Email send failed: ${emailResponse.statusText}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email notification sent' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
