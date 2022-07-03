import type { Context } from '../types'
import { createSVGElement, mount } from '@/renderer/utils'

export const createContext = (width: number, height: number): Context => {
  const svg = createSVGElement('svg')
  svg.setAttribute('width', `${width}`)
  svg.setAttribute('height', `${height}`)
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

  const g = createSVGElement('g') as SVGGElement
  mount(svg, g)

  return {
    node: svg, // 画布节点
    group: g, // 挂载节点
  }
}
