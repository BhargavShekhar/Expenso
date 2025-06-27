import { DollarSign } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className="px-6 py-12 border-t border-slate-700">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Expenso
                            </span>
                            <p className="text-xs text-cyan-400 font-medium">For Students</p>
                        </div>
                    </div>
                    <div className="flex space-x-8 text-gray-400">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
                    <p>&copy; 2025 Expenso. Built with ❤️ by students, for students.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
