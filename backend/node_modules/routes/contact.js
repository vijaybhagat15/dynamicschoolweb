import express from "express";

const router = express.Router();

router.get("/contact", (req, res) => {
    res.send({   contactData : {
        introText:
          "At Crestview Academy, we believe in fostering strong communication with parents, students, and staff. Reach out to us for any inquiries, support, or feedback.",
      
        services: [
          {
            title: "Student Support",
            description:
              "We are here to support our students academically and emotionally. Our dedicated staff ensures every child gets the assistance they need.",
            image: "images/contact/img1.jpg",
            alt: "Student Support",
          },
          {
            title: "Parent Communication",
            description:
              "We keep parents informed with regular updates, newsletters, and meetings to ensure a collaborative approach to education.",
            image: "images/contact/img2.jpg",
            alt: "Parent Communication",
          },
        ],
      
        helpSections: [
          {
            title: "Call Us",
            icon: "FaPhoneAlt",
            text: "For admissions, queries, or concerns, call our support team.",
            iconColor: "text-primary",
          },
          {
            title: "Email Us",
            icon: "FaEnvelope",
            text: "Drop an email, and we'll get back to you within 24 hours.",
            iconColor: "text-yellow-500",
          },
          {
            title: "Give Feedback",
            icon: "FaPaperPlane",
            text: "Your feedback helps us improve our school experience.",
            iconColor: "text-red-500",
          },
        ],
      
        form: {
          title: "Send a Message",
          placeholders: {
            name: "Your Name",
            email: "Your Email",
            subject: "Subject",
            message: "Your Message",
          },
          button: "Send Message",
        },
      }});
});

export default router;
