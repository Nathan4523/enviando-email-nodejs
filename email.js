//instance the library
const nodemailer = require("nodemailer");
const addressMail = "email1@gmail.com";
const addressMailTo = "email2@hotmail.com";
const passMail = "******";

//setting the email that send menssage 
let transporter = nodemailer.createTransport({
    //server
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, //only false when port different the 465
    auth: {
        user: addressMail,
        pass: passMail
    }
});

//create message
const msg = {
    from: addressMail,
    to: `${addressMailTo}, email3@gmail.com`, //for more, insert ',' and add new mail 
    subject: 'Esse é o meu primeiro e-mail usando NodeMailer!',
    text: 'Olá, tudo bem com você? vou dizer Hello World para não ser amaldiçoado',
    html: `<h2>Olá, agora eu sou html</h2>`,
    attachments: [
        {
            filename: 'text1.txt',
            content: 'hello world!'
        }
    ]
}

//Send mail
transporter.sendMail(msg, (ERROR, info) => {
    if (ERROR) return console.log(ERROR);

    console.log("Mensagem enviada com sucesso!");
});