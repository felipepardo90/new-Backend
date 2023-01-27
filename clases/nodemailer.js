import { createTransport } from "nodemailer";

async function run() {
  const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "sorayapardo71@gmail.com",
      pass: "soraya22056",
    },
  });

  const opts = {
    from: "Servidor Node.js",
    to: "felipepardo90@hotmail.com",
    subject: "Mail de prueba desde Node.js",
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con NodeMailer</span></h1>',
  };

  try {
    const info = await transporter.sendMail(opts);
    console.log(info);
  } catch (error) {
    console.log(error);
  }
}

run();
