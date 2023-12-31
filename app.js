import express from 'express'
import Lab5 from "./lab5.js";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import Hello from "./hello.js"
import cors from 'cors'
import "dotenv/config";
import session from 'express-session';
const app = express()
app.use(cors())
app.use(express.json());
Hello(app)
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);