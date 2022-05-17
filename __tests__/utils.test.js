describe('utils test cases', () => {
  it('kebabCaseKey', () => {
    const str = 'strokeWidth'
    expect(
      str.replace(/([a-z]+)([A-Z][a-z]+)/, (_, s2, s3) => {
        return `${s2}-${s3.toLowerCase()}`
      }),
    ).toBe('stroke-width')
  })
})
