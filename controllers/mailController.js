module.exports = {
    sendMail: function (req, res)
    {
        let { message, first, last, email } = req.body

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'theredivogroupautomatedserver@gmail.com',
                pass: 'Vikings29'
            }

        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `'${first} ${last}' <email>`, // sender address
            to: "stephensimone@live.com",                // list of receivers
            subject: "New Inquirer", // Subject line
            text: message // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                return;
            }
            res.json(info);
        });
}