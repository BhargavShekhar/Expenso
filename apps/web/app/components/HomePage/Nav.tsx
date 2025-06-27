"use client"

import { DollarSign, Menu, X } from 'lucide-react';
import React, { useState } from 'react'

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 py-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Expenso
              </span>
              <p className="text-xs text-cyan-400 font-medium">For Students</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">How it Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Reviews</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="px-5 py-2 text-gray-300 hover:text-white transition-colors font-medium">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
              Start Free
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 md:hidden">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-cyan-400 font-medium">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-cyan-400 font-medium">How it Works</a>
              <a href="#testimonials" className="block text-gray-300 hover:text-cyan-400 font-medium">Reviews</a>
              <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold">
                Start Free
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Nav
