import React from 'react'
import { motion } from 'framer-motion'

const TransitionWrapper = ({children}) => {
  return (
    <>
          <motion.div
              initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.5,
                ease: "easeInOut",
                }}            
          >
            {children}
          </motion.div>
    </>
  )
}

export default TransitionWrapper
