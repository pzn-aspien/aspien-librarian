import dotenv from "dotenv";
dotenv.config();

export default {
    API_PORT: process.env['API_PORT'] || 7788
}