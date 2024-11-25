import { useState, useEffect, useCallback } from "react";
import { handleApiErrors } from "@/utils/handleErrors";
import { fetchUsers } from "../../services/usersService";

export const useUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      const errorMessage = handleApiErrors(err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, isLoading, error, getUsers };
};
