import express from "express";

const router = express.Router();

router.get("/school", (req, res) => {
    res.send({  schoolsData : {
        Bangalore: [
          { name: "NovaStar Primary School", image: "/images/school1/PrimarySchool.avif" },
          { name: "NovaStar Middle School", image: "/images/school1/PrimarySchool.avif" },
          { name: "NovaStar High School", image: "/images/school1/s3.avif" },
        ],
        Mumbai: [
          { name: "NovaStar Public School", image: "/images/school1/PrimarySchool.avif" },
          { name: "NovaStar International School", image: "/images/school1/PrimarySchool.avif" },
          { name: "NovaStar Senior Secondary", image: "/images/school1/s3.avif" },
        ],
        Delhi: [
          { name: "NovaStar Academy Primary", image: "/images/school1/PrimarySchool.avif" },
          { name: "NovaStar Academy Middle", image: "/images/school1/PrimarySchool.avif" },
          { name: "NovaStar Academy High", image: "/images/school1/s3.avif" },
        ],
      }
      });
});

export default router;
