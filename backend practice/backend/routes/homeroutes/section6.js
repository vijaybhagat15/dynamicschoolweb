import express from "express";

const router = express.Router();

router.get("/section6", (req, res) => {
    res.send({newsData : [
        {
          _id: "1",
          title: "Valor & Rise Kohyang High Schools Get AP Honor Roll",
          content:
            "Both schools receive AP School Honor Roll recognition for excellence.",
          date: "2024-12-05T00:00:00Z",
          imageUrl: "images/section6/img1.jpg",
          author: "Admin",
          category: "Education",
          link: "#",
        },
        {
          _id: "2",
          title: "Bright Star Grad Earns Triple Degrees",
          content:
            "Elias Cruz earns a high school diploma and two associate degrees in one week.",
          date: "2024-06-18T00:00:00Z",
          imageUrl: "images/section6/img2.jpg",
          author: "Admin",
          category: "Achievement",
          link: "#",
        },
        {
          _id: "3",
          title: "Student Earns Triple Degrees, Featured in La Opinión",
          content:
            "Elias Cruz earns a diploma and two associate degrees, gaining media attention.",
          date: "2024-06-12T00:00:00Z",
          imageUrl: "images/section6/img3.jpg",
          author: "Admin",
          category: "Recognition",
          link: "#",
        },
      ]
    });
});

export default router;
