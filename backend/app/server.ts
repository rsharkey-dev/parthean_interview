// server.ts
import express from "express";
import { defaultRoutes } from "./api/routes/routes";

const app = express();
const port = 8000;

app.use('', defaultRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



