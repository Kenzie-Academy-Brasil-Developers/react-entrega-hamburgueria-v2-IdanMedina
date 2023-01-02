import axios from "axios";

export interface iProduct {
  id: string
  name: string
  category: string
  price: number
  img: string
}

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 3000,
});
