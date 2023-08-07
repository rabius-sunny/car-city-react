const themeConfig = {
  breakpoints: {
    xs: '500px',
    sm: '667px',
    md: '1200px',
    lg: '1340px',
    xl: '1620px'
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 500,
          sm: 667,
          md: 1200,
          lg: 1340,
          xl: 1620
        }
      }
    }
  }
}

export default themeConfig
