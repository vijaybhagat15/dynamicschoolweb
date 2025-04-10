import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send({styles :{
            "bg-primary": "bg-white",
            "bg-secondary": "bg-teal-100",
            "bg-ternary": "bg-yellow-100",
            "bg-button": "bg-teal-700 hover:bg-teal-900 text-white",
            "text-primary": "text-teal-900 text-2xl font-bold",
            "text-secondary": "text-teal-700 text-lg",
            "bg-footer": "bg-teal-900",
            "border-primary": "border-gray-200 border-b-2",
            "border-secondary": "border-teal-600 border-2"
          }
          });
});
export default router;
