import express from "express";

const router = express.Router();

router.get("/about", (req, res) => {
    res.send({
        facultyMembers: [ 
            { id: 1, image: "images/About/Principal.jpg", name: "Dr. Emily Carter", subject: "Principal" },
            { id: 2, image: "images/About/Mathematics.jpg", name: "Mr. James Wilson", subject: "Mathematics" },
            { id: 3, image: "images/About/Science.jpg", name: "Ms. Olivia Roberts", subject: "Science" },
        ],
        text: {
            Journey1: "Crestview Academy was founded with a vision to provide quality education that nurtures young minds. Our school is committed to excellence in academics, character development, and innovation.",
            Journey2: "With a dedicated faculty and state-of-the-art facilities, we strive to create an environment where students can explore, learn, and grow into responsible global citizens.",
            Mission: "Our mission is to provide a nurturing and inclusive environment that fosters academic excellence, creativity, and personal growth. We aim to empower students with the skills and knowledge to succeed in a changing world.",
            headimg:"images/About/campus.jpg"
        }
    });
});

export default router;
