"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface Product {
  name: string;
  sku: string;
  category: string;
  quantity: string;
  price: string;
  supplier?: string;
  reorderLevel?: string;
  description?: string;
}

const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Health & Beauty",
];

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
}

export default function AddProductModal({
  isOpen,
  onClose,
  onAdd,
}: AddProductModalProps) {
  const [product, setProduct] = useState<Product>({
    name: "",
    sku: "",
    category: "",
    quantity: "",
    price: "",
    supplier: "",
    reorderLevel: "",
    description: "",
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Handle smooth mount/unmount animation
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden"; // Prevent scroll
    } else {
      const timeout = setTimeout(() => setVisible(false), 200);
      document.body.style.overflow = "auto";
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, sku, category, quantity, price } = product;
    if (!name || !sku || !category || !quantity || !price) {
      toast.warn("Please fill in all required fields", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    onAdd(product);
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/40 z-50 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onMouseDown={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-xl w-full max-w-lg p-6 shadow-xl relative transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onMouseDown={(e) => e.stopPropagation()} // Prevent click inside from closing
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Add New Product
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Fill in the details below. Fields marked with{" "}
          <span className="text-red-500">*</span> are required.
        </p>

        <div className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              placeholder="e.g. Wireless Mouse"
              required
              value={product.name}
              onChange={handleChange}
              className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none"
            />
          </div>

          {/* SKU & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="sku"
                className="block text-sm font-medium text-gray-700"
              >
                SKU <span className="text-red-500">*</span>
              </label>
              <input
                id="sku"
                name="sku"
                placeholder="Enter SKU"
                value={product.sku}
                onChange={handleChange}
                className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <select
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none appearance-none pr-8"
                >
                  <option value="">Select Category *</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                {/* Custom arrow */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  <IoIosArrowDown size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Quantity & Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <input
                name="quantity"
                placeholder="e.g. 50"
                type="number"
                value={product.quantity}
                onChange={handleChange}
                className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                name="price"
                placeholder="e.g. 29.99"
                type="number"
                value={product.price}
                onChange={handleChange}
                className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none"
              />
            </div>
          </div>

          {/* Supplier & Reorder Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Supplier
              </label>
              <input
                name="supplier"
                placeholder="e.g. Tech Distributors Inc."
                value={product.supplier}
                onChange={handleChange}
                className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reorder Level
              </label>
              <input
                name="reorderLevel"
                type="number"
                placeholder="e.g. 10"
                value={product.reorderLevel}
                onChange={handleChange}
                className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter product description..."
              value={product.description}
              onChange={handleChange}
              rows={3}
              className="w-full border border-none bg-gray-100 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-black-100 focus:outline-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-900 transition-colors"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
