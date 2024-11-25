import axiosInstance from "@/utils/axiosInstance";

export const fetchCompany = async () => {
  const response = await axiosInstance.get("/company");
  return response.data;
};