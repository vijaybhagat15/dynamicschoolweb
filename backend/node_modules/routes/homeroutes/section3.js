import express from "express";

const router = express.Router();

router.get("/section3", (req, res) => {
    res.send({ section3data:{
      GraduationCap:{
        value: "92%",
        text: "High School Graduation Rate (2023)",
      },
      University:{
        value: "100%",
        text: "Graduates Eligible for Cal State or UC Admissions",
      },
      School:{
        value: "88%",
        text: "Matriculation to 2- and 4-Year Colleges (2023)",
      },
      Users:{
        value: "1.7M",
        text: "Counseling Minutes Yearly to Support Students",
      },}});
});

export default router;
