import { ArrowRight, Heart } from 'lucide-react'
import React from 'react'

function CallToAction() {
  return (
    <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-600/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
                  <Heart className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">Made by Students, For Students</span>
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Stop
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Awkward Money Talks?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students who've made group expenses simple with Expenso.
              </p>
              <button className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-bold text-xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
                <span>Start Your First Group</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-sm text-gray-400 mt-4">Free forever • No credit card required</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CallToAction
