import { generateUserName, STORAGE_KEY } from "@/utils/helpers";
import { useEffect, useState } from "react";

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUsername(stored);
        return;
      }
      const generated = generateUserName();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };
    main();
  }, []);

  return { username };
};
