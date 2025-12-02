import React, { useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon, SearchIcon, ShoppingCart, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, title: "Laptop", price: 999, image: "/assets/laptop.webp" },
  { id: 2, title: "Headphones", price: 199, image: "/assets/headphone.jpg" },
  { id: 3, title: "Smartphone", price: 799, image: "/assets/smartph.avif" },
];

export default function EcommerceDemo() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0) // remove if qty goes to 0
    );
  };
  const [searchTerm, setSearchTerm] = useState("");

const handleSearch = () => {
  if (!searchTerm.trim()) return;
  alert(`Searching for: ${searchTerm}`);
  // Later: filter products or navigate to a search results page
};

const [showProfile, setShowProfile] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="grid h-2">
        <Link to="/" className="text-teal-400">
          <HomeIcon />
        </Link>
      </div>

      {/* Navbar */}
      <nav className="bg-slate-800 px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">🛍️ Demo Store</h1>
        <div className="flex">
          <div className="flex mx-2 items-center gap-2 text-white">
  <input
    type="search"
    name="search_p"
    id="search_p"
    placeholder="Search Product"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="px-2 py-1 rounded text-white"
  />
  <button onClick={handleSearch} className="p-2 hover:text-teal-400">
    <SearchIcon />
  </button>
</div>

         <div>
  <button onClick={() => setShowProfile(true)} className="p-2 hover:text-teal-400">
    <UserCircle />
  </button>
</div>

       
        </div>
        <div className="flex items-center gap-2">
          <ShoppingCart size={20} />
          <span>{cart.reduce((sum, i) => sum + i.qty, 0)} items</span>
        </div>
      </nav>

      {/* Product Grid */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-slate-800 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img src={p.image} alt={p.title} className="w-32 h-32 object-cover mb-4" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-slate-400">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="p-8 bg-slate-800">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-slate-400">Cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center bg-slate-700 p-4 rounded"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>${item.price} × {item.qty}</p>
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-600 text-white px-2 rounded hover:bg-gray-700"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-600 text-white px-2 rounded hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </motion.div>
            ))}
            <div className="text-right font-bold text-lg">Total: ${total}</div>

            {/* Checkout Button */}
            <div className="text-right">
              <button
                onClick={() => setShowCheckout(true)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Back to Home */}
      <div className="text-center text-white m-3">
        <button className="bg-slate-800 my-3 p-2">
          <Link to="/">Back to Home</Link>
        </button>
      </div>

      {/* Checkout Popup */}
      {showCheckout && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="bg-white text-black rounded-lg shadow-lg w-96 p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Checkout</h2>

            <div className="space-y-3  max-h-60 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div className="">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      ${item.price} × {item.qty}
                    </p>
                    {/* Quantity Controls in Checkout */}
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold">${item.price * item.qty}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => alert("Proceeding to payment...")}
              className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}