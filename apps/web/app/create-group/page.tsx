'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Plus, X, Check, Mail, Sparkles } from 'lucide-react'

interface Friend {
  id: string
  email: string
}

const CreateGroupPage: React.FC = () => {
  const [groupName, setGroupName] = useState('')
  const [friendEmail, setFriendEmail] = useState('')
  const [friends, setFriends] = useState<Friend[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState({ groupName: '', email: '' })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const addFriend = () => {
    if (!friendEmail.trim()) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }))
      return
    }

    if (!validateEmail(friendEmail)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }))
      return
    }

    if (friends.some(friend => friend.email === friendEmail)) {
      setErrors(prev => ({ ...prev, email: 'Friend already added' }))
      return
    }

    const newFriend: Friend = {
      id: Date.now().toString(),
      email: friendEmail
    }

    setFriends(prev => [...prev, newFriend])
    setFriendEmail('')
    setErrors(prev => ({ ...prev, email: '' }))
  }

  const removeFriend = (id: string) => {
    setFriends(prev => prev.filter(friend => friend.id !== id))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!groupName.trim()) {
      setErrors(prev => ({ ...prev, groupName: 'Group name is required' }))
      return
    }

    setIsCreating(true)
    setErrors({ groupName: '', email: '' })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSuccess(true)
    setIsCreating(false)

    // Reset form after success
    setTimeout(() => {
      setGroupName('')
      setFriends([])
      setIsSuccess(false)
    }, 3000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addFriend()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative w-20 h-20 mx-auto mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-60" />
              <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Create Group
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-sm font-medium"
            >
              Build your community together
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Group Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => {
                    setGroupName(e.target.value)
                    if (errors.groupName) setErrors(prev => ({ ...prev, groupName: '' }))
                  }}
                  placeholder="Group Name"
                  className={`w-full px-4 py-4 bg-white/5 border rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 font-medium ${
                    errors.groupName 
                      ? 'border-red-500/50 focus:border-red-400' 
                      : 'border-white/20 focus:border-blue-400 focus:bg-white/10'
                  }`}
                />
                {errors.groupName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 ml-1"
                  >
                    {errors.groupName}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Add Friends Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">Invite Friends</span>
              </div>
              
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    type="email"
                    value={friendEmail}
                    onChange={(e) => {
                      setFriendEmail(e.target.value)
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }))
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="friend@email.com"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-400' 
                        : 'border-white/20 focus:border-blue-400 focus:bg-white/10'
                    }`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 ml-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
                
                <motion.button
                  type="button"
                  onClick={addFriend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Plus className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Friends List */}
              <AnimatePresence>
                {friends.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 max-h-32 overflow-y-auto scrollbar-hide"
                  >
                    {friends.map((friend, index) => (
                      <motion.div
                        key={friend.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/10 group hover:bg-white/10 transition-all duration-300"
                      >
                        <span className="text-white text-sm font-medium">{friend.email}</span>
                        <motion.button
                          type="button"
                          onClick={() => removeFriend(friend.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-red-400 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isCreating || isSuccess}
              whileHover={{ scale: isCreating || isSuccess ? 1 : 1.02 }}
              whileTap={{ scale: isCreating || isSuccess ? 1 : 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
                isSuccess
                  ? 'bg-green-600 shadow-lg shadow-green-500/25'
                  : isCreating
                  ? 'bg-gray-600'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-blue-500/25'
              }`}
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Group Created Successfully!
                  </motion.div>
                ) : isCreating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Creating Group...
                  </motion.div>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Create Group
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-6"
          >
            <p className="text-gray-400 text-xs">
              {friends.length > 0 && `${friends.length} friend${friends.length === 1 ? '' : 's'} will be invited`}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default CreateGroupPage