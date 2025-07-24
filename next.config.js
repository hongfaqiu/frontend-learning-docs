import nextra from 'nextra'

const withNextra = nextra({
  // Nextra 4.0 doesn't need theme and themeConfig here
})

export default withNextra({
  images: {
    unoptimized: true
  }
})
