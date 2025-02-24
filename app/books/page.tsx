"use client";

import { useLanguage } from "../../components/language-provider";
import { useState } from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";
interface Book {
  title: string;
  author: string;
  description: string;
  link: string;
  image: string;
}
export default function Books() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = Object.keys(t("books.categories"));
  const bookList = t("books.bookList");

  const filteredBooks =
    selectedCategory === "all"
      ? Object.values(bookList).flat()
      : bookList[selectedCategory] || [];

  return (
    <div className="space-y-12 mt-12">
      <div className="text-center space-y-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("books.title")}
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A curated collection of books that have shaped my knowledge and
          perspective in technology, business, and personal growth.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap gap-3 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === "all"
              ? "bg-purple-600 text-white"
              : "bg-purple-800/50 text-white hover:bg-purple-600/50 border border-purple-700/30"
          }`}
        >
          All Books
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-purple-800/50 text-white hover:bg-purple-600/50 border border-purple-700/30"
            }`}
          >
            {t(`books.categories.${category}`)}
          </button>
        ))}
      </motion.div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book: Book, index: number) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/50 rounded-lg p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all group hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
                <Book className="w-6 h-6 text-purple-400" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                  {book.title}
                </h3>
                <p className="text-gray-400 text-sm">by {book.author}</p>
                <p className="text-gray-400 text-base">{book.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
