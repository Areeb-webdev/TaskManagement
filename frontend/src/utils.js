import { toast } from "react-toastify";
export const notify = (message, type)=>{
 toast[type](message)
}
export const API_URL  = "https://task-management-api-tawny-iota.vercel.app";
