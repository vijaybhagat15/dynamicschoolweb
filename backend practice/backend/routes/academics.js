import express from "express";

const router = express.Router();

router.get("/academics", (req, res) => {
    res.send({ academicsData : {
        headerImage: {
          src: "/images/Academics/img1.jpg",
          alt: "Academic Programs",
        },
        introText:
          "Empowering students to understand themselves and navigate their own path is fundamental to a Khan Lab School education.",
        programLevels: ["TK-1", "2-5", "6-8", "9-12"],
        sections: [
          {
            title: "Our School",
            content:
              "KLS is a non-profit, mastery-based, independent school designed to implement the innovative educational ideas developed by Crestview Academy founder, nnn bbb...",
          },
          {
            title: "Our Students",
            content:
              "KLS believes that young people are capable of far more than society currently recognizes...",
          },
          {
            title: "Our Curriculum",
            content:
              "With Khan Lab School’s mastery-based learning model, students must demonstrate an understanding of content and skills...",
          },
        ],
      }});
});

export default router;
