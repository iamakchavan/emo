import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ComingSoon({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,#00000008_0.8%,#00000000_100%)]" />
      <div className="absolute inset-y-0 -right-[40%] w-[70%] bg-green-50/50 blur-3xl rounded-l-full" />
      <div className="absolute inset-y-0 -left-[40%] w-[70%] bg-green-50/30 blur-3xl rounded-r-full" />
      
      <div className="relative max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-magnetik tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-600 font-magnetik">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="h-[2px] w-full max-w-[120px] mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          
          <p className="text-gray-500 font-magnetik">
            We're crafting something amazing for you.
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-green-600 hover:text-green-700 transition-colors font-magnetik group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}