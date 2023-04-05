"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callback_api_1 = __importDefault(require("amqplib/callback_api"));
const nodemailer_1 = require("nodemailer");
function listen() {
    callback_api_1.default.connect(`amqp://localhost`, (err, conn) => {
        console.log('mail connecting');
        conn.createChannel((err, ch) => {
            console.log('channel created');
            const queueName = 'mail';
            ch.assertQueue(queueName, { exclusive: false, durable: false });
            ch.consume(queueName, (msg) => {
                console.log(`Received request to mail ${msg.content.toString()}`);
                const details = JSON.parse(msg.content.toString());
                const mail = {
                    from: SERVICE.email,
                    to: String(details.email),
                    subject: SERVICE.title,
                    text: generateMailBody(String(details.email), String(details.token))
                };
                const transporter = nodemailer_1.createTransport({
                    port: 25,
                    host: 'localhost',
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                transporter.sendMail(mail);
            }, { noAck: false });
        });
    });
}
const SERVICE = {
    host: 'cloud.cloud.compas.cs.stonybrook.edu',
    email: 'smores.overflow@gmail.com',
    password: 'stanleythemanly',
    title: 'Verify your account at SMORES'
};
function generateMailBody(email, verificationToken) {
    return `validation key: <${verificationToken}>
        `;
}
listen();
