import { createContext, useState } from "react";
import { getProductById } from "../data/product";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // {id: 2, quantity: 4}

  const addToCart = (productId) => {
    const existing = cartItems.find((item) => item.id === productId);

    if (existing) {
      const currentQuantity = existing.quantity;
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: productId,
          quantity: 1,
        },
      ]);
    }
  };

  const getCartItemsWithProducts = () => {
    return cartItems
      .map((item) => ({
        // LOOP SEMUA cartItems dan BUAT OBJECT BARU
        ...item, // copy semua isi item
        product: getProductById(item.id), // kemudian tambah property baru ini, hasilnya jadi object baru dibawah ini:
        //   {
        //   id: 2,
        //   quantity: 3,
        //   product: {
        //     id: 2,
        //     name: "Smart Watch",
        //     price: 250
        //   }
        // }
      }))
      .filter((item) => item.product); // Step akhir buang yang produknya sudah tidak ada, atau mungkin sudah dihapus
  };

  // Penjelasan function diatas:
  // carItems hanya berisi id & quantity, tidak ada nama produk, harga, image, dll. padahal di cart kita butuh itu
  // data lengkap ada di product.js dan bisa diambil lewat getProductById(id)
  // jadi function diatas gunanya gabungin cartItem dengan product asli.

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const getCartTotal = () => {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);

    return total;
  };

  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
