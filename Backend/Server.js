import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';    


const app = express();
app.use(cors());
app.use(express.json());


app.post('/send' , async(req , res)=>{
    const{user_email , user_name , message} = req.body;

    try{
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS // Use App Password if 2FA is enabled
            }
        })

        let mailOptions = {
            from: user_email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${user_name}: ${subject}`,
            text: message
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).send("Error sending email");
            }
            console.log("Email sent successfully:", info.response);
            res.status(200).send("Email sent successfully");
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});