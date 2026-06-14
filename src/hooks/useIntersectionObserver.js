import { useEffect, useState, useRef } from 'react'

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        if (options.triggerOnce !== false) {
          observer.unobserve(element)
        }
      } else if (options.triggerOnce === false) {
        setIsIntersecting(false)
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    })

    observer.observe(element)

    return () => {
      if (element && options.triggerOnce !== false) {
        // already unobserved
      } else if (element) {
        observer.unobserve(element)
      }
    }
  }, [options.triggerOnce, options.threshold, options.rootMargin])

  return [ref, isIntersecting]
}
