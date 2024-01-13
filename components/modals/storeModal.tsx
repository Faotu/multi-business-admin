"use client";

import { useStoreModal } from "@/hooks/userModal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  // To control the store

  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create a Store"
      description="Add new products and stores"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Create New store form
    </Modal>
  );
};
