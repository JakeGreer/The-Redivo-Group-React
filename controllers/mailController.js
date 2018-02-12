const nodemailer = require('nodemailer')

module.exports = {
    sendMail: function (req, res) {
        let {message, first, last, email} = req.body

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'theredivogroupautomatedserver@gmail.com',
                pass: 'Vikings29'
            }

        });

        let text = message + "\n\n" + "From " + first + " " + last + "\nReturn Email: " + email;
        // setup email data with unicode symbols
        let mailOptions = {
            from: "'Automated Server' <theredivogroupautomatedserver@gmail.com>", // sender address
            to: "stephensimone@live.com",                // list of receivers
            subject: "New Inquirer", // Subject line
            text: text // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error)
                console.log(error)
            res.json(info);
        });

    }
}