let Contact = require("../models/contacts").Contact;
let uniqid = require("uniqid");
let express = require("express");
let router = express.Router();
let authMiddleware = require("../middleware/auth");


router.get("/", authMiddleware, async(req, resp)=>{
    resp.send(await Contact.find());
});

router.post("/", async(req,resp)=>{
    let reqBody = req.body;
    let newContact = new Contact({
        id: uniqid(),
        name:reqBody.name,
        text: reqBody.text,
        email: reqBody.email,
        date: new Date()
    })

    await newContact.save();
    resp.send("Accepted");
});

router.delete("/:id", authMiddleware, async(req,resp)=>{
    await Contact.deleteOne({id: req.params.id});
    resp.send("Deleted");
});

module.exports = router;