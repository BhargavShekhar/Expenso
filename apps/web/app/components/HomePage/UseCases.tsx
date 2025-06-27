import { BookOpen, Home, Pizza, Plane } from 'lucide-react';
import React from 'react'

function UseCases() {
    const useCases = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Study Groups",
            description: "Split textbooks, supplies, and coffee runs",
            color: "from-blue-500 to-indigo-500"
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: "Dorm Life",
            description: "Share groceries, utilities, and room essentials",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Pizza className="w-6 h-6" />,
            title: "Food Runs",
            description: "Pizza parties, takeout orders, and dining out",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Plane className="w-6 h-6" />,
            title: "Adventures",
            description: "Spring break trips, weekend getaways, and events",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section className="px-6 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                        Perfect for
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Student Life</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                                {useCase.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">{useCase.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UseCases
