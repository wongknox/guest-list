import { useEffect, useState } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2502-PT";
const API = BASE_URL + COHORT;

export default function useQuery(resource) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = async () => {
      if (!resource) {
        setData(null);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API + resource);
        if (!response.ok) {
          const message = `Sorry! Something went wrong: ${response.status}`;
          const error = new Error(message);
          setError(error);
          return;
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    query();
  }, [resource]);

  return { data, loading, error };
}
