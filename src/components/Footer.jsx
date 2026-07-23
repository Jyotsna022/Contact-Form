import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-pink-50 border-t border-pink-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="/" className="hover:text-pink-600">Home</a></li>
              <li><a href="/about" className="hover:text-pink-600">About</a></li>
              <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-pink-600">Instagram</a></li>
              <li><a href="#" className="hover:text-pink-600">Facebook</a></li>
              <li><a href="#" className="hover:text-pink-600">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-pink-600">FAQs</a></li>
              <li><a href="#" className="hover:text-pink-600">Privacy</a></li>
              <li><a href="#" className="hover:text-pink-600">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-pink-100 mt-6 pt-6 text-center text-sm text-gray-600">
          <p>&copy; 2026 Beauty Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
