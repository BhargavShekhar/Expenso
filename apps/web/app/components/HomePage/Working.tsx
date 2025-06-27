import React from 'react'

function Working() {
    return (
        <section id="how-it-works" className="px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Super Simple
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Process</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-lg shadow-cyan-500/25">
                            1
                        </div>
                        <h3 className="text-2xl font-bold text-white">Create Group</h3>
                        <p className="text-gray-300">Invite your roommates, study group, or travel buddies</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-lg shadow-blue-500/25">
                            2
                        </div>
                        <h3 className="text-2xl font-bold text-white">Add Expenses</h3>
                        <p className="text-gray-300">Manually enter what you spent and who should split it</p>
                    </div>
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-lg shadow-indigo-500/25">
                            3
                        </div>
                        <h3 className="text-2xl font-bold text-white">Get Settled</h3>
                        <p className="text-gray-300">Track who owes what and send friendly payment reminders</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Working
