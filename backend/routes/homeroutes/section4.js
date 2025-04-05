import express from "express";

const router = express.Router();

router.get("/section4", (req, res) => {
    res.send({
         sections:{
            p1: "We foster an environment of trust and collaboration, encouraging meaningful learning experiences where students and teachers grow together. Our approach emphasizes the effective use of time, space, and technology.",
            img1: "images/section4/img4.jpg",
            img2: "images/section4/img1.jpg",
            img3: "images/section4/img2.avif",
            img4: "images/section4/img3.jpg",
          }
    });
});

export default router;
