const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require('dotenv').config(); // Membaca variabel lingkungan dari .env

const app = express();
const PORT = 3000;

// Middleware untuk parsing data form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Hosting folder "public" untuk frontend
app.use(express.static("public"));

// Route untuk menangani form submission
app.post("/send", (req, res) => {
    const { name, email, message } = req.body;
    
    // Konfigurasi transportasi email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Email penerima
        subject: `Pesan dari ${name}`,
        text: `Email: ${email}\n\nPesan: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Pesan gagal dikirim.");
        } else {
            console.log("Email terkirim: " + info.response);
            res.status(200).send("Pesan berhasil dikirim.");
        }
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
