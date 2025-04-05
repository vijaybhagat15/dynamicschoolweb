import express from "express";

const router = express.Router();

router.get("/section1", (req, res) => {
    res.send({slides:[
        {
          image: "images/section1/img1.jpg",
          title: "Welcome to Crestview Academy",
          description: "Join a learning environment where students thrive and achieve their full potential.",
        },
        {
          image: "images/section1/img2.jpg",
          title: "Inspiring Young Minds!",
          description: "Our dedicated educators nurture curiosity, creativity, and lifelong learning.",
        },
        {
          image: "images/section1/img3.jpg",
          title: "Building a Bright Future!",
          description: "Empowering students with knowledge, skills, and values for success.",
        },
      ]});
});

export default router;
