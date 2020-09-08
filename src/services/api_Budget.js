import { imageUrl } from "./constants";
import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";

export const getBudget = () => {
  return httpClient.get(server.Budget_URL);
};

export const getBudgetById = (id) => {
  return httpClient.get(server.Budget_URL + `/id/${id}`);
};

export const addBudget = (data) => {
  return httpClient.post(server.Budget_URL, data);
};

export const deleteBudget = (id) => {
  return httpClient.delete(server.Budget_URL + `/id/${id}`);
};

export const updateBudget = (data) => {
  return httpClient.put(server.Budget_URL, data);
};
