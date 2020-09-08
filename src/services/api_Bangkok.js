import { imageUrl } from "./constants";
import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";

export const getBangkok = () => {
  return httpClient.get(server.Bangkok_URL);
};

export const getBangkokById = (id) => {
  return httpClient.get(server.Bangkok_URL + `/id/${id}`);
};

export const addBangkok = (data) => {
  return httpClient.post(server.Bangkok_URL, data);
};

export const deleteBangkok = (id) => {
  return httpClient.delete(server.Bangkok_URL + `/id/${id}`);
};

export const updateBangkok = (data) => {
  return httpClient.put(server.Bangkok_URL, data);
};
