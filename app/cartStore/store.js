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
        const existingItemIndex = items.findIndex(
          (item) => item.id === service.id
        );

        if (existingItemIndex !== -1) {
          // Update existing item quantity
          const updatedItems = [...items];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
          };
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
        const item = items.find((item) => item.id === serviceId);
        if (item) {
          get().updateQuantity(serviceId, item.quantity + 1);
        }
      },

      decrementQuantity: (serviceId) => {
        const { items } = get();
        const item = items.find((item) => item.id === serviceId);
        if (item) {
          get().updateQuantity(serviceId, item.quantity - 1);
        }
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
        return items.reduce((total, item) => {
          // Extract numeric value from price string (₦150,550 -> 150550)
          const price = Number.parseFloat(item.price.replace(/[₦,]/g, ""));
          return total + price * item.quantity;
        }, 0);
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
