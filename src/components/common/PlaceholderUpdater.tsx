import React from "react";

export function PlaceholderUpdater({ placeholders, setPlaceholder }) {
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [placeholders, setPlaceholder]);

  return null;
}