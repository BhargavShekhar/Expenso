import { BookOpen, Check, Coffee, Pizza, Play, Smartphone, Zap } from 'lucide-react'
import React from 'react'

function Hero() {
    return (
        <section className="px-6 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-8`}>
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
                                <Zap className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-400 text-sm font-medium">#1 Student Expense App</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                                Split Student
                                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Expenses Easy
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Create groups with your dorm mates, study buddies, or travel crew.
                                Add expenses manually and split them fairly - no receipt scanning needed!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                                <Smartphone className="w-5 h-5" />
                                <span>Get Started Free</span>
                            </button>
                            <button className="px-8 py-4 border-2 border-slate-600 rounded-2xl text-white font-semibold text-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all flex items-center justify-center space-x-2">
                                <Play className="w-5 h-5" />
                                <span>See Demo</span>
                            </button>
                        </div>

                        <div className="flex items-center space-x-8 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-cyan-400" />
                                <span>100% Free</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-cyan-400" />
                                <span>No Ads</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-cyan-400" />
                                <span>Student Built</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/30 shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                            <Pizza className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">Dorm Squad</h3>
                                            <p className="text-sm text-gray-400">4 members</p>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-bold text-cyan-400">$234.60</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-4 bg-slate-700/40 rounded-xl border border-slate-600/20">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-semibold text-white">A</div>
                                            <div>
                                                <span className="text-white font-medium">Alex</span>
                                                <p className="text-xs text-gray-400">Pizza Night</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-cyan-400 font-semibold">$58.65</span>
                                            <p className="text-xs text-green-400">Settled</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-700/40 rounded-xl border border-slate-600/20">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-sm font-semibold text-white">S</div>
                                            <div>
                                                <span className="text-white font-medium">Sarah</span>
                                                <p className="text-xs text-gray-400">Groceries</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-orange-400 font-semibold">$58.65</span>
                                            <p className="text-xs text-orange-400">Pending</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-slate-700/40 rounded-xl border border-slate-600/20">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold text-white">M</div>
                                            <div>
                                                <span className="text-white font-medium">Mike</span>
                                                <p className="text-xs text-gray-400">Netflix</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-cyan-400 font-semibold">$58.65</span>
                                            <p className="text-xs text-green-400">Settled</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                                    Add New Expense
                                </button>
                            </div>
                        </div>

                        {/* Student-themed floating elements */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-pulse flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse delay-1000 flex items-center justify-center">
                            <Coffee className="w-8 h-8 text-purple-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
