export const styles = () => {
  return {
    dividerColor: {
    },
    drawerClose: {
      width: '3%'
    },
    drawerCloseMargin: {
      marginLeft: '3%',
    //   [theme.breakpoints.down('md')]: {
    //     padding: '0px'
    //   },
      padding: '0px 15px',
    //   transition: theme.transitions.create('margin', {
    //     duration: theme.transitions.duration.enteringScreen,
    //     easing: theme.transitions.easing.sharp
    //   })
    },
    drawerPaper: {
      boxSizing: 'border-box',
      marginTop: '73px',
      paddingTop: '8px',
      position: 'fixed',
    //   transition: theme.transitions.create('width', {
    //     duration: theme.transitions.duration.enteringScreen,
    //     easing: theme.transitions.easing.sharp
    //   }),
      whiteSpace: 'nowrap',
      width: '15%',
      zIndex: 4
    },
    drawerPaperClose: {
      overflowX: 'hidden',
    //   [theme.breakpoints.up('sm')]: {
    //     width: theme.spacing.unit * 6
    //   },
    //   transition: theme.transitions.create('width', {
    //     duration: theme.transitions.duration.leavingScreen,
    //     easing: theme.transitions.easing.sharp
    //   }),
    },
    fixedBar: {
      '&:hover': {
        backgroundColor:'blue'
      },
      bottom: 0,
      marginTop: '0',
      overflow: 'hidden',
      position: 'fixed',
    //   transition: theme.transitions.create('width', {
    //     duration: theme.transitions.duration.enteringScreen,
    //     easing: theme.transitions.easing.sharp
    //   })
    },
    gridMargin: {
      marginLeft: '15%',
    //   [theme.breakpoints.down('md')]: {
    //     marginLeft: 0
    //   }
    },
    gutters: {
      '&:hover': {
       backgroundColor:'#61dafb4d'  
      },
      '&:active': {
       backgroundColor:'#61dafb4d'  
      },
      padding: '7px 36px'
    }
    ,

    listItemTextFont: {
      fontFamily: 'inherit',
      fontSize:'13px',
      fontWeight: 500
    },
    listItemTextPadding: {
      padding: 0,
      whiteSpace: 'pre-line'
    },
    marginBottom: {
      paddingTop: 0
    },
    scroll: {
      backgroundColor: '#f2f5f5cc',
      height: 'calc(100% - 63px)',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    selected: {
      '& span': {
        fontWeight: '600'
      },
      '& svg': {
      },
      //  paddingLeft: '13px!important'
    },
    sidebarIconRoot: {
    //   color: overrides.sidebar.sidebarIconRootStyle.color
    },
    subHeader: {
      background: 'blue',
      padding: '0px 8px'
    },
    subheader: {
      '&:hover': {
        backgroundColor: 'blue'
      },
      backgroundColor: 'blue'
    },
    submenuItem: {
      paddingLeft: '25px'
    },
    submenuPadding: {
    },
    swipablePaper: {
      boxSizing: 'border-box',
      marginTop: '0px',
      paddingTop: '0px',
      position: 'fixed',
    //   transition: theme.transitions.create('width', {
    //     duration: theme.transitions.duration.enteringScreen,
    //     easing: theme.transitions.easing.sharp
    //   }),
      whiteSpace: 'nowrap',
      width: '60%',
    //   [theme.breakpoints.up('sm')]: {
    //     width: '40%'
    //   }
    },
    tooltip: {
    }
  };
};
