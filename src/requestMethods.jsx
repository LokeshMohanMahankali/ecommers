import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjcwMTliMGZkODlkYmJiMmVhYzUwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzY1MTI2MywiZXhwIjoxNzIzOTEwNDYzfQ.yKjNed8Aa7bOapvb4ouEj-eMp_ESBLqktTg0c0-NMe0";
const username = "admin";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
