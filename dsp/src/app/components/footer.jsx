import React from "react";
import Link from "next/link";

export default function Footer({ contactEmail }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "History", path: "/history" },
    { name: "Veterans", path: "/veteran-stories" },
    { name: "Newsletters", path: "/newsletter-archive" },
    { name: "Donate", path: "/donate" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-nile-green flex items-center justify-center">
                <span className="text-white font-bold text-sm">ΔΣΦ</span>
              </div>
              <div>
                <p className="font-semibold">Delta Sigma Phi</p>
                <p className="text-xs text-gray-400">Gamma Iota Chapter</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Building Better Men since 1950 at the University of Idaho. Our
              brotherhood is built on the principles of Culture, Harmony, and
              Friendship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-gray-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>University of Idaho</li>
              <li>Moscow, Idaho 83843</li>
              {contactEmail && (
                <li className="pt-2">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="hover:text-white transition-colors"
                  >
                    {contactEmail}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Delta Sigma Phi - Gamma Iota Chapter.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">ACB - 82-0515756</p>
          <p className="text-gray-500 text-sm">Chapter - 82-0201535</p>
          <p className="text-gray-500 text-sm">Better Men. Better Lives.</p>
        </div>
      </div>
    </footer>
  );
}
