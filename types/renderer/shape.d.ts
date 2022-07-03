import type { Context, SVGCircleAttributes, SVGLineAttribtes, SVGPathAttributes, SVGRectAttributes, SVGRingAttributes, SVGTextAttributes } from '../types';
export declare const line: (context: Context, attributes: SVGLineAttribtes) => SVGLineElement;
export declare const circle: (context: Context, attributes: SVGCircleAttributes) => SVGCircleElement;
export declare const text: (context: Context, attributes: SVGTextAttributes) => SVGElement;
export declare const rect: (context: Context, attributes: SVGRectAttributes) => SVGElement;
/**
 * 圆环
 * 画法：两个同心圆
 * @param context
 * @param attributes
 * @returns
 */
export declare const ring: (context: Context, attributes: SVGRingAttributes) => void;
/**
 * 路径
 * @param context
 * @param attributes
 * @returns
 */
export declare const path: (context: Context, attributes: SVGPathAttributes) => SVGPathElement;
