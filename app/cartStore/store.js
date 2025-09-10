import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create()(
  persist(
    (set, get) => ({
      // State
      items: [],

      // Actions
      addItem: (service) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === service.id);

        if (existingItem) {
          // Update quantity if item already exists
          const updatedItems = items.map((item) =>
            item.id === service.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updatedItems });
        } else {
          // Add new item
          const newItem = {
            ...service,
            quantity: 1,
            addedAt: new Date().toISOString(),
          };
          set({ items: [...items, newItem] });
        }
      },

      updateQuantity: (serviceId, newQuantity) => {
        if (newQuantity <= 0) {
          get().removeItem(serviceId);
          return;
        }

        const { items } = get();
        const updatedItems = items.map((item) =>
          item.id === serviceId ? { ...item, quantity: newQuantity } : item
        );
        set({ items: updatedItems });
      },

      incrementQuantity: (serviceId) => {
        const { items } = get();
        const updatedItems = items.map((item) =>
          item.id === serviceId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        set({ items: updatedItems });
      },

      decrementQuantity: (serviceId) => {
        const { items } = get();
        const updatedItems = items
          .map((item) =>
            item.id === serviceId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0); // remove if 0
        set({ items: updatedItems });
      },

      removeItem: (serviceId) => {
        const { items } = get();
        const updatedItems = items.filter((item) => item.id !== serviceId);
        set({ items: updatedItems });
      },

      clearCart: () => {
        set({ items: [] });
      },

      // Getters
      getItemCount: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getCartTotal: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      isInCart: (serviceId) => {
        const { items } = get();
        return items.some((item) => item.id === serviceId);
      },

      getItemQuantity: (serviceId) => {
        const { items } = get();
        const item = items.find((item) => item.id === serviceId);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);

export default useCartStore;
