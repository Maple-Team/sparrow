export const drawRedRect = (svg: SVGElement) => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rect.setAttribute('width', '400')
  rect.setAttribute('height', '400')
  rect.setAttribute('x', '0')
  rect.setAttribute('y', '0')
  svg.appendChild(rect)
}

export { line, createContext, rect, path, circle, ring, text } from './renderer'
