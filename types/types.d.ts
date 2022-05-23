export declare type Shape =
  | 'line'
  | 'rect'
  | 'circle'
  | 'path'
  | 'text'
  | 'ring'
export interface Context {
  node: SVGElement
  group: SVGGElement
}
/**
 * 基础属性
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 * Aria Attributes/Styling Attributes/Presentation Attributes
 *
 */
export interface BaseAttributes {
  fill?: string
  stroke?: string
  strikeWidth?: number
}
export interface SVGLineAttribtes extends BaseAttributes {
  /**
   * 起始点x坐标
   */
  x1: number
  /**
   * 起始点y坐标
   */
  y1: number
  /**
   * 终止点x坐标
   */
  x2: number
  /**
   * 终止点y坐标
   */
  y2: number
  /**
   * 线条颜色
   */
  stroke: string
  /**
   * 线条宽度
   */
  strokeWidth: number
}
export interface SVGTextAttributes extends BaseAttributes {
  /**
   * text content
   */
  text: string
  /**
   * x coordinate
   */
  x: number
  /**
   * y: coordinate
   */
  y: number
}
export interface SVGCircleAttributes extends BaseAttributes {
  /**
   * 半径，映射r
   */
  radius: number
  /**
   * 中心点坐标，映射cx
   */
  x: number
  /**
   * 中心点坐标，映射cy
   */
  y: number
}
export interface SVGRectAttributes extends BaseAttributes {
  width: number
  height: number
  x?: number
  y?: number
  /**
   * round corner x
   */
  rx?: number
  /**
   * round corner y
   */
  ry?: number
}
export interface SVGPathAttributes extends BaseAttributes {
  d: string
}
/**
 * 圆环
 */
export interface SVGRingAttributes extends Omit<SVGCircleAttributes, 'radius'> {
  /**
   * 外圆半径
   */
  outerRadius: number
  outerFill: string
  outerStroke?: string
  outerStrokeWidth?: number
  /**
   * 内圆半径
   */
  innerRadius: number
  innerFill: string
  innerStroke?: string
  innerStrokeWidth?: number
}
