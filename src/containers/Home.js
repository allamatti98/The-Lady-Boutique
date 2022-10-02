import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Container, Divider, Header, Responsive, Segment, Sidebar, Visibility } from "semantic-ui-react";
import Partners from '../components/partners';
import ShoppingCards from "../components/row1";
import Row2 from "../components/Row2";
import Row6 from "../components/Row6";
import QualityControl from "../components/QualityControl";
import Row3 from "../components/row3";
import Row4 from "../components/row4";
import Trending from "../components/Card";
import NewsLetter from "../components/newsLetter";


const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <ShoppingCards />
      <Container style={{ margin: "0px", padding: "0px" }}>
        <Partners />
      </Container>


      <Row2 />

      <QualityControl />
      <Row3 />
      <Row4 />
      <ShoppingCards />
      <Row6 />
      

      <NewsLetter/>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
