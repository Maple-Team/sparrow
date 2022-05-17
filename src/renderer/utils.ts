export const mount = (parent: SVGElement, child: SVGElement) => {
  if (parent) {
    parent.appendChild(child)
  }
}

export const createSVGElement = (type: string) => {
  const el = document.createElementNS('http://www.w3.org/2000/svg', type)
  return el
}

export const applyAttributes = <T>(element: SVGElement, attributes: T) => {
  // FIXME
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(attributes)) {
    // strokeWidth -> stroke-width
    // 匹配到大写A的字母，然后转变为-a
    // const kebabCaseKey = key.replace(/[a-z]+([[\w]+])/, '')
    const kebabCaseKey = key.replace(
      /[A-Z]/g,
      (d) => `-${d.toLocaleLowerCase()}`,
    )

    element.setAttribute(kebabCaseKey, value)
  }
}
