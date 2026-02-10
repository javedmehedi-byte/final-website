'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'blur-in'
  delay?: number
  duration?: number
  threshold?: number
}

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out, filter ${duration}ms ease-out`
    
    const animations = {
      'fade-up': {
        hidden: { opacity: 0, transform: 'translateY(30px)', filter: 'blur(0px)' },
        visible: { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }
      },
      'fade-in': {
        hidden: { opacity: 0, transform: 'translateY(0)', filter: 'blur(0px)' },
        visible: { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }
      },
      'slide-left': {
        hidden: { opacity: 0, transform: 'translateX(50px)', filter: 'blur(0px)' },
        visible: { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' }
      },
      'slide-right': {
        hidden: { opacity: 0, transform: 'translateX(-50px)', filter: 'blur(0px)' },
        visible: { opacity: 1, transform: 'translateX(0)', filter: 'blur(0px)' }
      },
      'scale-up': {
        hidden: { opacity: 0, transform: 'scale(0.9)', filter: 'blur(0px)' },
        visible: { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' }
      },
      'blur-in': {
        hidden: { opacity: 0, transform: 'translateY(0)', filter: 'blur(10px)' },
        visible: { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }
      }
    }

    return {
      ...animations[animation][isVisible ? 'visible' : 'hidden'],
      transition: `${baseTransition} ${delay}ms`
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  )
}
