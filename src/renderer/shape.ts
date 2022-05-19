import { applyAttributes, createSVGElement, mount } from './utils'

/**
 *
 * @param type
 * @param context
 * @param attributes
 * @returns
 */
const shape = <T>(type: Shape, context: Context, attributes: T) => {
  const { group } = context
  const el = createSVGElement(type)
  applyAttributes(el, attributes)
  mount(group, el)
  return el
}

export const line = (context: Context, attributes: SVGLineAttribtes) => {
  const el = shape('line', context, attributes) as SVGLineElement
  return el
}

export const circle = (context: Context, attributes: SVGCircleAttributes) => {
  const { radius, x, y } = attributes
  const el = shape('circle', context, {
    ...attributes,
    r: radius,
    cx: x,
    cy: y,
  })
  return el as SVGCircleElement
}

export const text = (context: Context, attributes: SVGTextAttributes) => {
  const { text: textStr, ...rest } = attributes
  const el = shape('text', context, rest)
  el.textContent = textStr
  return el
}

export const rect = (context: Context, attributes: SVGRectAttributes) => {
  const { width, height } = attributes

  const el = shape('rect', context, {
    ...attributes,
    width: `${Math.abs(width)}`,
    height: `${Math.abs(height)}`,
  }) as SVGRectElement
  return el
}

/**
 * 圆环
 * 画法：两个同心圆
 * @param context
 * @param attributes
 * @returns
 */
export const ring = (context: Context, attributes: SVGRingAttributes) => {
  const {
    x,
    y,
    innerRadius,
    innerFill,
    innerStroke,
    innerStrokeWidth,
    outerRadius,
    outerFill,
    outerStroke,
    outerStrokeWidth,
    ...rest
  } = attributes
  shape('ring', context, {
    ...rest,
    cx: x,
    cy: y,
    r: outerRadius,
    fill: outerFill,
    stroke: outerStroke,
    strikeWidth: outerStrokeWidth,
  })
  shape('ring', context, {
    ...rest,
    cx: x,
    cy: y,
    r: innerRadius,
    fill: innerFill,
    stroke: innerStroke,
    strikeWidth: innerStrokeWidth,
  })
}

/**
 * 路径
 * @param context
 * @param attributes
 * @returns
 */
export const path = (context: Context, attributes: SVGPathAttributes) => {
  const el = shape('path', context, attributes) as SVGPathElement
  return el
}
