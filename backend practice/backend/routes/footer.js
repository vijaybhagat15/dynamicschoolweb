import express from "express";

const router = express.Router();

router.get("/footer", (req, res) => {
    res.send({footerData:{
        campuses: [
          {
            title: "MIDDLE & UPPER SCHOOL",
            subtitle: "(Grades 7-12)",
            addressLine1: "1200 aaaa Street",
            addressLine2: "Mountain View, CA 45624",
            phone: "000-111-2223",
          },
          {
            title: "LOWER SCHOOL",
            subtitle: "(Grades K-6)",
            addressLine1: "3233 bbbb Street",
            addressLine2: "aaaa Alto, CA 444505",
            phone: "000-111-2223",
          },
        ],
        affiliatedPrograms: [
          { name: "aaasss.org", link: "#" },
          { name: "aaaaddddd.org", link: "#" },
          { name: "dsdddllll Schools Network", link: "#" },
          { name: "Schoolhouse.world", link: "#" },
        ],
        socialLinks: [
          { name: "facebook", hoverColor: "hover:text-blue-500" },
          { name: "instagram", hoverColor: "hover:text-pink-500" },
          { name: "linkedin", hoverColor: "hover:text-blue-600" },
          { name: "twitter", hoverColor: "hover:text-blue-400" },
          { name: "youtube", hoverColor: "hover:text-red-500" },
          { name: "vimeo", hoverColor: "hover:text-blue-400" },
        ],
      }});
});

export default router;
