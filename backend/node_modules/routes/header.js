import express from "express";

const router = express.Router();

router.get("/header", (req, res) => {
    res.send({ header:{logo:"/logo.jpg",name:"Crestview Academy"}});
});

export default router;
