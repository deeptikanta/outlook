import {
  Collapse,
  Drawer,
  Fade,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  withStyles,
  withWidth
} from '@material-ui/core';
import cx from 'classnames';
import { connect } from 'react-redux';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { styles } from './sidebarstyle';
import { fetchLoginUser } from '../../conatiners/dashboard/dashboard.action';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstPath: true,
      sidebarList: props.sidebarContent.map((obj) => {
        return { ...obj, open: false };
      })
    };
  }

  componentDidMount() {
    this.props.fetchLoginUser('deeptikanta1234@gmail.com')
  }

  /**
   * Sidebar click button
   */
  handelSidebarClick = (navlink, submenuExists) => {
    const { handleSidebarClick = (nav) => null, width, handleDrawer } = this.props;
    if (width !== 'md' && width !== 'lg' && navlink.path !== '') {
      // for cloasing drawer after clikc on item (only in small devices)
      if (!submenuExists) {
        // if submenu dont exist then only close
        handleDrawer();
      }
    }

    // refresh the page
    if (navlink.refresh) {
      handleSidebarClick(navlink);
    }
    // push path to route
    return navlink.path && navlink.path !== '' && this.props.history.push(navlink.path);
  };
  /**
   * Render text
   */
  renderItemText = (label, classes) => {
    return (
      <ListItemText
        classes={{
          primary: classes.listItemTextFont,
          root: classes.listItemTextPadding
        }}
        inset={true}
        primary={label}
      />
    );
  };

  /**
   * Render item
   */
  renderitem = (
    data,
    path,
    classes,
    submenuExists,
    isSubmenu = false
  ) => {
    const {  type, } = data;
    const { inBoxEmailDetails, spamEmailDetails } = this.props;
    const unreadMsgInbox = inBoxEmailDetails.filter(x => x.unread === true).length;
    const unreadMsgSpam = spamEmailDetails.filter(x => x.unread === true).length;
    return (
      <React.Fragment >
        <Tooltip
          enterDelay={this.props.open ? 2000 : 50}
          TransitionComponent={Fade}
          placement={'right'}
          classes={{ tooltip: classes.tooltip }}
          TransitionProps={{ timeout: 400 }}
          title={data.label}
        >
          <ListItem
            button={true}
            classes={{
              gutters: classes.gutters,
              root: cx(path === (data.path && data.path.toLowerCase()) && classes.selected)
            }}
            id={data.id}
            className={isSubmenu && this.props.open && classes.submenuItem}
            onClick={this.handelSidebarClick.bind(this, data, submenuExists)}
          >
            {/* // only font awesome icons  */}
            {data.icon !== '' && type === 'mu' ? (
              <ListItemIcon classes={{ root: classes.sidebarIconRoot }}>

              </ListItemIcon>
            ) : (
                <ListItemIcon classes={{ root: classes.sidebarIconRoot }}>

                </ListItemIcon>
              )}

            {this.renderItemText(data.label, classes)}{data.label === 'Inbox' ? unreadMsgInbox === 0 ? '' : unreadMsgInbox : data.label === 'Junk Email' ? unreadMsgSpam === 0 ? '' : unreadMsgSpam : ''}
            {submenuExists && (
              <div style={{ fontSize: '0.9rem' }}>
                {/* <Icons
                  color={'white'}
                  fixedWidth={true}
                  type={'fa'}
                  size={'lg'}
                  classes={{ root: classes.sidebarIconRoot }}
                  onClick={this.handleCollapse.bind(this, data)}
                  name={data.open ? 'chervonUp' : 'chervonDown'}
                /> */}
              </div>
            )}
          </ListItem>
        </Tooltip>
      </React.Fragment>
    );
  };
  /**
   * Render list
   */
  renderList = (classes, path, sidebarList) => {
    const { isFirstPath } = this.state;
    return (
      <List
        component="nav"
        classes={{
          root: cx(classes.marginBottom, classes.scroll)
        }}
      >
        {sidebarList.map((data, key) => {
          const submenuExists = data.subMenu && data.subMenu.length > 0;
          if (data.hide && data.hide === true) {
            return null;
          }
          let isPathMatches = false;
          if (submenuExists && data.subMenu !== undefined) {
            data.subMenu.forEach((element) => {
              if ((element.path).toLowerCase() === path.toLowerCase()) {
                isPathMatches = true;
              }
            });
          }
          return (
            <div key={key}>
              {this.renderitem(data, path, classes, submenuExists)}
              {submenuExists && (
                <List component="nav" style={{ padding: '0' }}>
                  {data.subMenu !== undefined &&
                    data.subMenu.map((submenuData, subMenuKey) => {
                      const submenuL1 = submenuData.subMenu && submenuData.subMenu.length > 0;
                      if (submenuData.hide && submenuData.hide === true) {
                        return null;
                      }
                      return (
                        <Collapse
                          key={subMenuKey}
                          className={classes.submenuPadding}
                          in={(isFirstPath && isPathMatches) || data.open}
                          timeout="auto"
                        >
                          {this.renderitem(submenuData, path, classes, submenuL1, true)}
                        </Collapse>
                      );
                    })}
                </List>
              )}
            </div>
          );
        })}
      </List>
    );
  };

  render() {
    const { sidebarList } = this.state;
    const { applicationName, classes, drawerClasses, handleDrawer, open } = this
      .props;
    const path = this.props.location.pathname.toLowerCase();
    if (applicationName) {
      this.titleUpdater(sidebarList, path);
    }
    return (
      <React.Fragment style={{ backgroundColor: '#f5f5f5' }}>
        {/* small screens  */}
        <Hidden mdUp={true}>
          <Drawer
            disablePortal={true}
            open={open}
            onClose={handleDrawer}
            classes={{
              paper: cx(classes.swipablePaper, drawerClasses)
            }}
          >
            {this.renderList(classes, path, sidebarList)}
          </Drawer>
        </Hidden>
        {/* big screens  */}
        <Hidden smDown={true}>
          <Drawer
            disablePortal={true}
            variant="permanent"
            open={open}
            classes={{
              paper: cx(
                classes.drawerPaper,
                drawerClasses,
                !this.props.open && classes.drawerPaperClose
              )
            }}
          >
            {this.renderList(classes, path, sidebarList)}
          </Drawer>
        </Hidden>
      </React.Fragment>
    );
  }

  titleUpdater(sidebarList, path) {
    try {
      document.title = this.titleGenerator(sidebarList, path) || this.props.applicationName;
    } catch {
      document.title = this.props.applicationName;
    }
  }


  titleGenerator(subHeaderList, path) {
    return subHeaderList.reduce((acc, obj) => {
      if (path === (obj.path && obj.path.toLowerCase())) {
        return obj.label;
      } else if (obj.subMenu) {
        const val = this.titleGenerator(obj.subMenu, path);
        if (val) {
          return `${obj.label}-${val}`;
        }
      }
      return acc;
    }, '');
  }
}
const mapStateToProps = ({
  DashBoardReducer, SpamReducer
}) => ({
  inBoxEmailDetails: DashBoardReducer.emailDetails,
  spamEmailDetails: SpamReducer.emailDetails
});
export default withRouter(connect(mapStateToProps, {
  fetchLoginUser
})(withWidth()(withStyles(styles)((withRouter(Sidebar))))));