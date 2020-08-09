import {
  Switch,
  withRouter,
  Route,
} from 'react-router-dom';
import { withStyles, withWidth } from '@material-ui/core';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as React from 'react';
import { DashBoard, Spam, Draft, DeletedMail } from '../index';
import PrimarySearchAppBar from '../../components/appHeader/appHeader';
import Sidebar from '../../components/sidebar/sidebar';
import links from '../../routes/NavLinks';
import styles from './home.style';
import { fetchUserDetails } from '../dashboard/dashboard.action';
import { fetchUserDetailsInDraft } from '../draft/draft.action';
import { fetchUserDetailsInSpam } from '../spam/spam.action';
import inBoxEmail from '../dashboard/inbox .json';
import DraftEmail from '../draft/draft.json';
import spamEmail from '../spam/spam.json';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  componentDidMount() {
    this.props.fetchUserDetails(inBoxEmail);
    this.props.fetchUserDetailsInDraft(DraftEmail);
    this.props.fetchUserDetailsInSpam(spamEmail);
  }

  render() {
    const { classes } = this.props;
    const mainClassCss = classNames(
      classes.content,
      this.state.open ? classes.contentOpen : classes.contentClose,
    );
    return (
      <div style={{
        display: 'flex',
        flexGrow: 1,
        // height: '97vh',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <PrimarySearchAppBar />
        <Sidebar open={this.state.open}
          applicationName={'Kredifi Admin'}
          handleDrawer={this.handleDrawer}
          sidebarContent={links}
          handleSidebarClick={this.handleSidebarClick} />
        <main className={mainClassCss}>
          <div className={classes.toolbar} />
          <div style={{ marginTop: '50px' }}>
            <Switch>
              <Route exact path="/" component={DashBoard} key="AppHome" />
              <Route exact path="/spam" component={Spam} key="AppHome" />
              <Route exact path="/draft" component={Draft} key="AppHome" />
              <Route exact path="/deleted" component={DeletedMail} key="AppHome" />
            </Switch>
          </div>
        </main>
      </div >
    );
  }

}
const mapStateToProps = ({

}) => ({

});
export default withRouter(connect(mapStateToProps, { fetchUserDetails, fetchUserDetailsInDraft, fetchUserDetailsInSpam })(withWidth()(withStyles(styles)(HomePage))));
