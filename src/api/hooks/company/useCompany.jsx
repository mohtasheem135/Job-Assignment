import { useState, useEffect, useCallback } from "react";
import { handleApiErrors } from "@/utils/handleErrors";
import { fetchCompany } from "../../services/companyService";

export const useCompany = () => {
  const [companys, setCompanys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCompanys = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchCompany();
      setCompanys(data);
    } catch (err) {
      const errorMessage = handleApiErrors(err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getCompanys();
  }, [getCompanys]);

  return { companys, isLoading, error, getCompanys};
};
