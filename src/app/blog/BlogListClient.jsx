"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutUsHero from "@/components/About-Us/AboutUsHero";

const BlogListClient = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Sync state with URL search params on first render or when they change
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();
        // Sort blogs by date (newest first)
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);
  const endIndex = startIndex + blogsPerPage;

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of blog section
    window.scrollTo({
      top: document.querySelector(".blog-grid")?.offsetTop - 100 || 0,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination
      if (currentPage <= 3) {
        // Show first 5 pages
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        if (totalPages > 5) {
          pages.push("...");
          pages.push(totalPages);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 5 pages
        pages.push(1);
        if (totalPages > 5) {
          pages.push("...");
        }
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current page
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1d4026]"></div>
          <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-4 border-blue-200 opacity-30"></div>
        </div>
      </div>
    );
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}

      <AboutUsHero
        title={"Blogs"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      {/* Blog Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold text-gray-800">
              Latest Blogs
            </h2>
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, blogs.length)} of{" "}
              {blogs.length} Blogs
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="blog-grid container mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white border-opacity-20"
            >
              <Link href={`/blog/${blog.slug}`} className="block relative">
                <div className="h-64 bg-gradient-to-br from-[#00d491] to-[#1d4026] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-30 to-transparent z-10"></div>
                  <Image
                    src={blog.image || "/images/placeholder.jpg"}
                    alt={blog.alt || blog.heading}
                    width={600} // A reasonable width for the blog card
                    height={400} // A reasonable height, maintaining a 3:2 aspect ratio
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-10 h-10 bg-white/10 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-7">
                <div className="flex items-center text-sm text-[#34ab49] mb-4">
                  <div className="w-23 h-18  rounded-full flex items-center justify-center mr-3">
                    <Image
                      src={"/images/skj-footer-logo.jpg"}
                      alt={"logo"}
                      width={800} // A reasonable width for the blog card
                      height={800} // A reasonable height, maintaining a 3:2 aspect ratio
                      className="w-full h-full object-cover transform scale-120  group-hover:scale-130 transition-transform rounded-full duration-700"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{blog.author}</div>
                    <div className="text-gray-500 text-xs">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                <Link href={`/blog/${blog.slug}`} className="block">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-[#339575]transition-colors duration-300 leading-tight group-hover:text-[#339545]">
                    {blog.heading}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags &&
                    blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-[#339545] px-3 py-1 rounded-full border border-blue-200 border-opacity-50 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center bg-gradient-to-r from-[#339745] to-[#1d4026] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#339745] hover:to-[#1d4026] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Read Full Article
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
              <nav className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {getPageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                      {page === "..." ? (
                        <span className="px-3 py-2 text-gray-400">...</span>
                      ) : (
                        <button
                          onClick={() => goToPage(page)}
                          className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${
                            currentPage === page
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          {page}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  Next
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListClient;
