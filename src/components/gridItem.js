'use client'
import { useRef, useEffect } from 'react'

const GridItem = ({ children, colSpan }) => {
  const ref = useRef(null)

 useEffect(() => {
  const el = ref.current
  if (!el) return

  const grid = el.parentElement
  if (!grid) return

  const getStyles = () => {
    const styles = window.getComputedStyle(grid)
    return {
      rowHeight: parseInt(styles.getPropertyValue('grid-auto-rows')),
      gap: parseInt(styles.getPropertyValue('gap')),
    }
  }

  const calculateSpan = () => {
    const { rowHeight, gap } = getStyles()
    const height = el.getBoundingClientRect().height

    const span = Math.ceil((height + gap) / (rowHeight + gap))
    el.style.gridRowEnd = `span ${span}`
  }

  const resizeObserver = new ResizeObserver(() => {
    calculateSpan()
  })

  //  observe inner content too
  if (el.firstElementChild) {
    resizeObserver.observe(el.firstElementChild)
  }

  resizeObserver.observe(el)

  // 🔁 multiple passes to stabilize layout
  requestAnimationFrame(calculateSpan)
  setTimeout(calculateSpan, 100)
  setTimeout(calculateSpan, 300)

  // 🪟 resize fallback
  window.addEventListener('resize', calculateSpan)

  return () => {
    resizeObserver.disconnect()
    window.removeEventListener('resize', calculateSpan)
  }
}, [])

  return (
    <div ref={ref} className={`col-span-1 md:${colSpan} h-fit`}>
      {children}
    </div>
  )
}

export default GridItem