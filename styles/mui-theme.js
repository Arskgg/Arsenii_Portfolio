export const getDesignTokens = (mode) => ({
  
    typography: {
        fontFamily: "'Source Sans Pro','Roboto', 'Helvetica', 'Arial', sans-serif",
        body1: "'Source Code Pro','Roboto', 'Helvetica', 'Arial', sans-serif",
    },

    components: {
      MuiList: {
        styleOverrides: {
          root: {
            padding: '0px',
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 12,
        },
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 3,
              elevation: 12,
            }),
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            '&:last-child': {
              paddingBottom: 16,
            },
            paddingBottom: 0,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              backgroundColor: theme.palette.primary.main,
            }),
        },
      },
    },
  })