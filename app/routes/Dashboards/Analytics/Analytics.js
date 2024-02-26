import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import _ from "lodash";
import {
  Container,
  ButtonToolbar,
  ButtonGroup,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FloatGrid as Grid,
  Card,
  Media,
  CardBody,
  ListGroup,
  ListGroupItem,
  Progress,
  Table,
  CardFooter,
  Button,
  CardHeader,
} from "./../../../components";
import { applyColumn } from "./../../../components/FloatGrid";

import { HeaderMain } from "../../components/HeaderMain";

import { MetricVsTarget } from "../../components/Analytics/MetricVsTarget";
import { WebsitePerformance } from "../../components/Analytics/WebsitePerformance";
import { AudienceMetricsChart } from "./components/AudienceMetricsChart";
import { TinyAreaChart } from "../../components/Analytics/TinyAreaChart";
import { SimpleLineChart } from "./../../Graphs/ReCharts/components/SimpleLineChart";

import classes from "./Analytics.scss";

const LAYOUT = {
  "metric-v-target-users": { h: 6, md: 4 },
  "metric-v-target-sessions": { h: 6, md: 4 },
  "metric-v-target-pageviews": { h: 6, md: 4 },
  "analytics-audience-metrics": { h: 9, minH: 7 },
  "traffic-channels": { md: 6, h: 6 },
  sessions: { md: 6, h: 6, maxH: 9, minW: 3 },
  spend: { md: 6, h: 7 },
  "website-performance": { md: 6, h: 11 },
  "organic-traffic": { md: 6, h: 10 },
};

const SessionByDevice = (props) => (
  <div className={classes["session"]}>
    <div className={classes["session__title"]}>{props.title}</div>
    <div className={classes["session__values"]}>
      <div className={`${classes["session__percentage"]} text-${props.color}`}>
        {props.valuePercent}%
      </div>
      <div className={`${classes["session__value"]} text-${props.color}`}>
        {props.value}
      </div>
    </div>
  </div>
);
SessionByDevice.propTypes = {
  title: PropTypes.node,
  color: PropTypes.string,
  valuePercent: PropTypes.string,
  value: PropTypes.string,
};

export class Analytics extends React.Component {
  state = {
    layouts: _.clone(LAYOUT),
  };

  _resetLayout = () => {
    this.setState({
      layouts: _.clone(LAYOUT),
    });
  };

  render() {
    const { layouts } = this.state;

    return (
      <React.Fragment>
        <Container fluid={false}>
          <div className="d-flex mt-3 mb-5">
            <HeaderMain title="Analytics" className="mt-0" />
            <ButtonToolbar className="ml-auto">
              <ButtonGroup className="align-self-start mr-2">
                <UncontrolledButtonDropdown className="ml-auto flex-column">
                  <DropdownToggle
                    color="link"
                    className="text-left pl-0 text-decoration-none mb-2"
                  >
                    <i className="fa fa-globe text-body mr-2"></i>
                    www.webkom.co
                    <i className="fa fa-angle-down text-body ml-2" />
                  </DropdownToggle>
                  <div className="small">Last 30 Days vs Previous Period</div>
                  <DropdownMenu>
                    <DropdownItem header>Select Site:</DropdownItem>
                    <DropdownItem active>www.webkom.co</DropdownItem>
                    <DropdownItem>www.spin.webkom.co</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <i className="fa fa-fw fa-plus mr-2"></i>
                      Add New
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </ButtonGroup>
              <ButtonGroup className="align-self-start mr-2">
                <UncontrolledButtonDropdown className="ml-auto flex-column">
                  <DropdownToggle
                    color="link"
                    className="text-left pl-0 text-decoration-none mb-2"
                  >
                    <i className="fa fa-calendar-o text-body mr-2"></i>
                    Last Month
                    <i className="fa fa-angle-down text-body ml-2" />
                  </DropdownToggle>
                  <div className="small">Jan 01, 2017 to Jan 31, 2017</div>
                  <DropdownMenu>
                    <DropdownItem header>Select Period:</DropdownItem>
                    <DropdownItem active>Last Month</DropdownItem>
                    <DropdownItem>Last 3 Months</DropdownItem>
                    <DropdownItem>Last 6 Months</DropdownItem>
                    <DropdownItem>Last Year</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Custom...</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </ButtonGroup>
              <ButtonGroup className="align-self-start mr-2">
                <UncontrolledButtonDropdown className="ml-auto flex-column">
                  <DropdownToggle
                    color="link"
                    className="text-left pl-0 text-decoration-none mb-2"
                  >
                    <i className="fa fa-calendar-o text-body mr-2"></i>
                    Previous Period
                    <i className="fa fa-angle-down text-body ml-2" />
                  </DropdownToggle>
                  <div className="small">Jan 01, 2017 to Jan 31, 2017</div>
                  <DropdownMenu>
                    <DropdownItem header>Select Period:</DropdownItem>
                    <DropdownItem active>Previous Period</DropdownItem>
                    <DropdownItem>Last 3 Months</DropdownItem>
                    <DropdownItem>Last 6 Months</DropdownItem>
                    <DropdownItem>Last Year</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Custom...</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </ButtonGroup>
              <ButtonGroup className="align-self-start">
                <Button color="primary" className="mb-2 mr-2 px-3">
                  Apply
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button
                  color="link"
                  className="mb-2 text-decoration-none align-self-start"
                  onClick={this._resetLayout}
                >
                  Reset
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </Container>

        <Grid>
          <Grid.Row
            onLayoutChange={(layouts) => this.setState({ layouts })}
            columnSizes={this.state.layouts}
            rowHeight={55}
          >
            <Grid.Col {...applyColumn("metric-v-target-users", layouts)}>
              <Card>
                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                  <i className="fa fa-ellipsis-v text-body mr-2"></i> Users
                </CardHeader>
                <CardBody className="pt-2">
                  <MetricVsTarget
                    title="Users"
                    value="168,793"
                    progressbarColor="danger"
                    targetValue="169,001"
                  />
                </CardBody>
                <CardFooter>
                  <Media className="small">
                    <Media left>
                      <i className="fa fa-fw fa-info-circle mr-2"></i>
                    </Media>
                    <Media body>
                      How do your users (visitors), sessions (visits) and
                      pageviews metrics for{" "}
                      <abbr title="attribute" className="text-dark">
                        www.webkom.com
                      </abbr>{" "}
                      compare to your targets over the last 30 days?
                    </Media>
                  </Media>
                </CardFooter>
              </Card>
            </Grid.Col>
            <Grid.Col {...applyColumn("metric-v-target-sessions", layouts)}>
              <Card>
                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                  <i className="fa fa-ellipsis-v text-body mr-2"></i> Sessions
                </CardHeader>
                <CardBody className="pt-2">
                  <MetricVsTarget
                    title="Sessions"
                    value="529,747"
                    progressbarValue="67"
                    progressbarColor="primary"
                    targetValue="782,957"
                  />
                </CardBody>
                <CardFooter>
                  <Media className="small">
                    <Media left>
                      <i className="fa fa-fw fa-info-circle mr-2"></i>
                    </Media>
                    <Media body>
                      How do your users (visitors), sessions (visits) and
                      pageviews metrics for{" "}
                      <abbr title="attribute" className="text-dark">
                        www.webkom.com
                      </abbr>{" "}
                      compare to your targets over the last 30 days?
                    </Media>
                  </Media>
                </CardFooter>
              </Card>
            </Grid.Col>
            <Grid.Col {...applyColumn("metric-v-target-pageviews", layouts)}>
              <Card>
                <CardHeader className="bb-0 pt-3 pb-0 bg-none" tag="h6">
                  <i className="fa fa-ellipsis-v text-body mr-2"></i> Pageviews
                </CardHeader>
                <CardBody className="pt-2">
                  <MetricVsTarget
                    title="Pageviews"
                    value="1,763,981"
                    progressbarValue="34"
                    progressbarColor="secondary"
                    targetValue="1,567,334"
                  />
                </CardBody>
                <CardFooter>
                  <Media className="small">
                    <Media left>
                      <i className="fa fa-fw fa-info-circle mr-2"></i>
                    </Media>
                    <Media body>
                      How do your users (visitors), sessions (visits) and
                      pageviews metrics for{" "}
                      <abbr title="attribute" className="text-dark">
                        www.webkom.com
                      </abbr>{" "}
                      compare to your targets over the last 30 days?
                    </Media>
                  </Media>
                </CardFooter>
              </Card>
            </Grid.Col>
   
  

  
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
