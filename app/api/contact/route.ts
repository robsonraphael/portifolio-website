import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Configuração ausente: RESEND_API_KEY' },
        { status: 500 }
      )
    }

    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { error: 'Configuração ausente: CONTACT_EMAIL' },
        { status: 500 }
      )
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Site Robson Raphael <onboarding@resend.dev>'

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'DM Sans', sans-serif; line-height: 1.6; color: #d4cbb8; margin: 0; padding: 20px; background: #0a0f1e; }
            .container { max-width: 600px; margin: 0 auto; background: #111827; border-radius: 8px; overflow: hidden; border: 1px solid rgba(201, 168, 76, 0.2); }
            .header { background: #0d1526; color: #f5f0e8; padding: 28px; text-align: center; border-bottom: 1px solid rgba(201, 168, 76, 0.2); }
            .content { padding: 28px; }
            .field { margin-bottom: 16px; padding: 14px; background: #1a2540; border-radius: 6px; }
            .label { font-weight: 600; color: #e8c97a; display: block; margin-bottom: 5px; }
            .message { background: #0d1526; padding: 16px; border-radius: 6px; border-left: 3px solid #c9a84c; }
            .footer { background: #0d1526; color: #7a8499; padding: 18px; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nova Mensagem do Site</h1>
              <p>Alguém enviou uma mensagem</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Nome:</span>
                <div>${name}</div>
              </div>
              <div class="field">
                <span class="label">📩 Email:</span>
                <div>${email}</div>
              </div>
              <div class="field">
                <span class="label">📋 Assunto:</span>
                <div>${subject}</div>
              </div>
              <div class="field">
                <span class="label">💬 Mensagem:</span>
                <div class="message">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Esta mensagem foi enviada através do formulário de contato</p>
              <p>Robson Raphael | Tecnologia Jurídica</p>
            </div>
          </div>
        </body>
      </html>
    `

    const text = `
      NOVA MENSAGEM DO SITE
      ==========================

      Nome: ${name}
      Email: ${email}
      Assunto: ${subject}

      Mensagem:
      ${message}

      ---
      Enviado através do formulário de contato do site.
      Data: ${new Date().toLocaleString('pt-BR')}
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [process.env.CONTACT_EMAIL],
        reply_to: email,
        subject: `📧 Mensagem - ${subject}`,
        html,
        text,
      }),
    })

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text()
      console.error('❌ Erro Resend:', errorBody)
      return NextResponse.json(
        { error: 'Erro ao enviar email pelo Resend.' },
        { status: 500 }
      )
    }

    const resendData = await resendResponse.json()

    return NextResponse.json(
      {
        success: true,
        message: 'Email enviado com sucesso!',
        messageId: resendData?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error)

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
