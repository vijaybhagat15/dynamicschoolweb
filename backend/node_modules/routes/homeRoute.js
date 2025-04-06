import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        title: "ddddddddd",
        content: "dddddddddddddddddd",
        category: "dddddddddd",
        author: "ddddddddd",
        date: "2025-03-09T05:10:38.489Z"
    });
});

export default router;
