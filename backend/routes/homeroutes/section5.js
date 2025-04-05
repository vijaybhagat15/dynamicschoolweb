import express from "express";

const router = express.Router();

router.get("/section5", (req, res) => {
    res.send({ values : [
        {
          title: "Integridad",
          description: "means we need to be the best versions of ourselves",
          icon: "🎖️",
          bgColor: "bg-blue-500",
        },
        {
          title: "Ubuntu",
          description: "means our humanity is shared and we value kindness",
          icon: "🤲",
          bgColor: "bg-yellow-500",
        },
        {
          title: "Kohyang",
          description: "means hometown and encourages us to build meaningful connections",
          icon: "🏡",
          bgColor: "bg-red-400",
        },
        {
          title: "Growth",
          description: "means having a mindset that allows us to achieve excellence",
          icon: "🌱",
          bgColor: "bg-blue-400",
        },
      ]});
});

export default router;
