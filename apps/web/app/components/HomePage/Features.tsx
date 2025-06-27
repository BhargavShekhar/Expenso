import { Bell, Calculator, Users } from 'lucide-react';
import React from 'react'

function Features() {
    const features = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Create Groups",
            description: "Start study groups, dorm squads, or travel crews and manage all expenses together"
        },
        {
            icon: <Calculator className="w-8 h-8" />,
            title: "Smart Distribution",
            description: "Add expenses manually and split them fairly among group members instantly"
        },
        {
            icon: <Bell className="w-8 h-8" />,
            title: "Friendly Reminders",
            description: "Gentle nudges for friends who forgot to settle up - no awkward conversations!"
        }
    ];


    return (
        <section id="features" className="px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Built for
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Student Groups
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Simple expense tracking designed by students, for students. No complicated features - just what you need.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-600/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10`}
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-500/25">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
