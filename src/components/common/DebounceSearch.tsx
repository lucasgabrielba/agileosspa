import React from "react";
import { debounce } from 'lodash';

export function useDebouncedSearch(initialValue = '', delay = 500) {
  const [value, setValue] = React.useState(initialValue);
  const [debouncedValue, setDebouncedValue] = React.useState(initialValue);

  const debouncedSetValue = debounce(setDebouncedValue, delay);

  React.useEffect(() => {
    debouncedSetValue(value);
    return () => {
      debouncedSetValue.cancel();
    };
  }, [value, debouncedSetValue]);

  return [value, setValue, debouncedValue] as const;
}