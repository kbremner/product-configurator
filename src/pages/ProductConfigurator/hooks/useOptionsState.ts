import { useEffect, useState } from "react";

/**
 * This hook handles storing state to track what
 * options are currently selected, as well as
 * defaulting options to the first value on load
 */
const useOptionsState = (options?: Record<string, Record<string, string>>) => {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!options) return;
    setValues(
      Object.entries(options).reduce((acc, [optionKey, vals]) => {
        acc[optionKey] = Object.keys(vals)[0];
        return acc;
      }, {} as Record<string, string>)
    );
  }, [options]);

  const onSelect = (id: string, value: string) => {
    setValues((existingValues) => ({ ...existingValues, [id]: value }));
  };

  return { values, onSelect };
};

export default useOptionsState;
