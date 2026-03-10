import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validação dos campos
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    console.log('Tentando conectar com Gmail...')
    console.log('Email user:', process.env.EMAIL_USER ? 'Configurado' : 'Faltando')

    // Configuração do transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verificar configuração
    await transporter.verify()
    console.log('Conexão com Gmail verificada com sucesso!')

    // Conteúdo do email
    const mailOptions = {
      from: `"Site Robson Raphael" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `📧 Mensagem - ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; }
              .header { background: #0f172a; color: white; padding: 30px; text-align: center; }
              .content { padding: 30px; }
              .field { margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 5px; }
              .label { font-weight: bold; color: #0f172a; display: block; margin-bottom: 5px; }
              .message { background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #0f172a; }
              .footer { background: #0f172a; color: white; padding: 20px; text-align: center; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 Nova Mensagem do Site</h1>
                <p>Alguém entrou envio uma mensagem</p>
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
      `,
      text: `
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
    }

    // Enviar email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email enviado com sucesso! Message ID:', info.messageId)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado com sucesso!',
        messageId: info.messageId
      },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('❌ Erro ao enviar email:', error)
    
    let errorMessage = 'Erro interno do servidor'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Erro de autenticação. Verifique suas credenciais do Gmail.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Erro de conexão com o servidor do Gmail.'
    } else if (error.response) {
      errorMessage = `Erro do Gmail: ${error.response}`
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}