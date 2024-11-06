const express = require('express')
const router = express.Router();


router.post('/add', async (req, res) => {
    try {
        //const newuser = new Users(req.body)
        const { name, email, phone, password } = req.body
        if (!name || !email || !phone || !password) {
            res.send(400).json({ message: "All fields required" })
        }

        //TODO : Add User Email & Phone Validation
        // const EmailCheck = await Users.findOne({ email: email })
        // if (EmailCheck) {
        //     res.send(500).json({ message: `User with ${email} already exists !` })
        // }
        await newuser.save()
        res.status(200).json(newuser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router