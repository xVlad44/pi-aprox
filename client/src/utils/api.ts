import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const p1 = async () => {

    const response = await api.get("/");
    return response.data;
}


export const getPlot = async (n: number) => {
  const response = await api.get(`/plot?n=${n}`,{ responseType: 'blob' });
  return response.data;
}