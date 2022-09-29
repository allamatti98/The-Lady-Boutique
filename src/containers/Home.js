import PropTypes from "prop-types";
import React, { Component } from "react";
import {Button,Container,Divider,Grid,GridColumn,GridRow,Header,Image,Responsive,Segment,Sidebar,Visibility} from "semantic-ui-react";
import reddress from '../static/img/Model1.webp'
import GroupedImages from "../components/groupedimages";
import TabMenuButtons from "../components/tabmenubuttons";
import CardExampleCard from "../components/card";
import pic2 from '../static/img/Boutique1.jpg'
import HomeImagePair from "../components/homeimagepair";
import event8 from '../static/img/Event8.jpg'
import event7 from '../static/img/Event7.jpg'

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
      <Container text>
        <Header style = {{ fontSize: "2em",textAlign: "center", color: '#d05278'}}>
        Lady Bird
        </Header>
        <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
          Our Trending Stock
        </Header>
        <p style={{ fontSize: "1.33em", textAlign: "center" }}>
        Refresh your wardrobe with our cutting edge stylish outfits and stand out from the crowd.
        </p>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <i color='pink'>Quick Browse</i>
          <a href="#case-studies" >Quick Browse</a>
        </Divider>
        
        {/* <TabMenuButtons/> */}
        <CardExampleCard/>
        <GroupedImages/>
      </Container>
    </Segment>

    <Segment style={{ padding: "8em 0em"}} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "4em", color:'#d05278' }}>
              Discount
            </Header>
            <Header as="h3" style={{ fontSize: "5em" }}>
            Get a whooping
            </Header>
            <Header as="h3" style={{ fontSize: "5em", color: '#d05278' }}>
              40% Off
            </Header>
            <p style={{ fontSize: "2em" }}>
              Yes, that's right, you thought it was not real?
            </p>
            <p style={{ fontSize: "2em" }}>
              Well, it is!!!
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Image
              bordered
              rounded
              size="huge"
              src={pic2}
            />
          </Grid.Column>
        </Grid.Row>      
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge" color='pink'>Take a Look</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header style = {{ fontSize: "2em",textAlign: "center", color: '#d05278'}}>
        Lady Bird Blog.
        </Header>
        <Header as="h3" style={{ fontSize: "2em", textAlign: "center" }}>
          Latest Feed from the biggest Boutique in the country.
        </Header>
        <p style={{ fontSize: "1.33em", textAlign: "center" }}>
        Steal the show... The Lady Bird Wayyy!!!
        </p>
        <HomeImagePair/>
      </Container>
    
    </Segment>
    
    
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/avatar/large/nan.jpg" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#case-studies">Case Studies</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
