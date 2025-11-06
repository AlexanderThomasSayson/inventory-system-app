"use client";

import React, { useState } from "react";
import { Bell, Plus } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import AddProductModal, { Product } from "./AddProductModal"; // 👈 import the Product type
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Topbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProduct = (product: Product) => {
    console.log("New Product:", product);
    toast.success("Product added successfully", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2 w-full max-w-md bg-gray-100 border border-gray-200 rounded-lg px-3 py-2">
          <CiSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search products, SKU, or category..."
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="text-gray-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm"
          >
            <Plus size={16} /> Add Product
          </button>
        </div>
      </header>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
      />

      <ToastContainer />
    </>
  );
}
