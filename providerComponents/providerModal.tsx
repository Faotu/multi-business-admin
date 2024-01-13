"use client";

import { StoreModal } from "@/components/modals/storeModal";
import { useEffect, useState } from "react";

export const ProviderModal = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
