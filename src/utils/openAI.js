import Groq from "groq-sdk";
import { OPEN_AI_API_KEY } from "./constants";

const groq = new Groq({ 
    apiKey: OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true
 });
export default groq;