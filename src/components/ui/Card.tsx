import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className = '', hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${hover ? 'hover:shadow-lg hover:border-primary/20' : ''} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
