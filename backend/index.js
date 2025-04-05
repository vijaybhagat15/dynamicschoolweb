import express from "express";
import cors from "cors";
import homeRoute from "./routes/homeRoute.js"; // Import the route
import aboutRoute from "./routes/aboutRoute.js";
import academicsRoute from "./routes/academics.js";
import contactRoute from "./routes/contact.js";
import schoolRoute from "./routes/school.js";
import section1Route from "./routes/homeroutes/section1.js";
import section2Route from "./routes/homeroutes/section2.js";
import section3Route from "./routes/homeroutes/section3.js";
import section4Route from "./routes/homeroutes/section4.js";
import section5Route from "./routes/homeroutes/section5.js";
import section6Route from "./routes/homeroutes/section6.js";
import headerRoute from "./routes/header.js";
import footerRoute from "./routes/footer.js";

const app = express();
const port = 8000;

app.use(cors());
app.use("/", homeRoute); // Use the route
app.use("/", aboutRoute);
app.use("/", academicsRoute);
app.use("/", contactRoute);
app.use("/", schoolRoute);
app.use("/", section1Route);
app.use("/", section2Route);
app.use("/", section3Route);
app.use("/", section4Route);
app.use("/", section5Route);
app.use("/", section6Route);
app.use("/", headerRoute);
app.use("/", footerRoute); 

app.listen(port, () => {
    console.log(`Server is started on ${port}`);
});
