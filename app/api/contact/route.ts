import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Inicializa o Resend com sua chave de API (idealmente via .env)
const resend = new Resend(process.env.RESEND_API_KEY);

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
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

<<<<<<< Updated upstream
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
      from: `"Portfólio RabsCode" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
=======
    // Enviar email via Resend
    const { data, error } = await resend.emails.send({
      // Como você está no plano gratuito, use o domínio 'onboarding@resend.dev'
      // Quando você validar seu domínio próprio, troque para: "Nome <contato@seudominio.com>"
      from: 'Site Robson Raphael <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'robsonraphael2001@gmail.com',
      replyTo: email, // Isso permite que você responda direto para quem preencheu o form
>>>>>>> Stashed changes
      subject: `📧 Mensagem - ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; }
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
<<<<<<< Updated upstream
                <h1>📧 Nova Mensagem do Portfólio</h1>
                <p>Alguém entrou envio uma mensagem</p>
=======
                <h1>📧 Nova Mensagem</h1>
>>>>>>> Stashed changes
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">👤 Nome:</span>
                  <div>${name}</div>
                </div>
                <div class="field">
                  <span class="label">📩 Email do Remetente:</span>
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
<<<<<<< Updated upstream
                <p>Esta mensagem foi enviada através do formulário de contato</p>
                <p>💻 RabsCode - Desenvolvedor</p>
=======
                <p>Enviado do seu site para você</p>
>>>>>>> Stashed changes
              </div>
            </div>
          </body>
        </html>
      `,
<<<<<<< Updated upstream
      text: `
        NOVA MENSAGEM DO PORTFÓLIO
        ==========================
        
        Nome: ${name}
        Email: ${email}
        Assunto: ${subject}
        
        Mensagem:
        ${message}
        
        ---
        Enviado através do formulário de contato do portfólio.
        Data: ${new Date().toLocaleString('pt-BR')}
      `
=======
    });

    if (error) {
      console.error('❌ Erro da Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
>>>>>>> Stashed changes
    }

    return NextResponse.json(
      { success: true, message: 'Email enviado!', id: data?.id },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('❌ Erro interno:', error)
    return NextResponse.json(
      { error: 'Erro ao processar sua requisição' },
      { status: 500 }
    )
  }
}