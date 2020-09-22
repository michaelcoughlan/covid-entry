const Entry = require('../database/models').Entry;

module.exports = {
    create(req, res) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { email, name, phoneNumber, uid } = req.body;

        // Check the pub ID is correct
        if (uid !== process.env.PUB_UID) {
            return res.status(403).send('Unauthorized');
        }

        // Check if the email is valid
        if (!emailRegex.test(email)) {
            return res.status(400).send('Please provide a valid email address');
        }

        return Entry.create({
            email,
            name,
            phoneNumber,
        })
        .then((entry) => res.status(201).send(entry))
        .catch((error) => res.status(500).send(error));
    }
}