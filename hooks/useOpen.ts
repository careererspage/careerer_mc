import React, { useCallback, useState } from "react";

export default function useOpen(initialState: any) {
  const [isOpen, setOpen] = useState(initialState);
  const toggle = useCallback(() => {
    setOpen((state: boolean) => !state);
  }, [setOpen]);
  return { isOpen, toggle };
}
