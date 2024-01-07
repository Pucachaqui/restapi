import {config} from "dotenv";

config();
console.log(process.env.PASSWORD);

export default{
    host: process.env.HOST ||"",
    database: process.env.DATABASE ||"",
    user: process.env.US || "root",
    password: process.env.PASSWORD||""
};