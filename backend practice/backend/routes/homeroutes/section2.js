import express from "express";

const router = express.Router();

router.get("/section2", (req, res) => {
    res.send({
         sections:{
            Visit:{title: "Visit", description: "Schedule a visit.", buttonText: "SCHEDULE" },
            Learn:{title: "Learn More", description: "Discover our community.", buttonText: "LEARN MORE" },
            Apply:{title: "How to Apply", description: "About the application process.", buttonText: "HOW TO APPLY" },
            Giving:{title: "Giving", description: "Support our mission.", buttonText: "DONATE" },
          }
    });
});

export default router;
