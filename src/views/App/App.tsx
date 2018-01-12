import * as React from "react";
import Sidebar from "../../blocks/sidebar/sidebar";
import styled from "styled-components";
import ContentAdd from "material-ui/svg-icons/content/add";
import ChannelBody from "../../blocks/channelBody/channelBody";
import { Grid, Row, Col } from "react-bootstrap";
import Header from "../../blocks/header/header";
import { connect } from "react-redux";

export class App extends React.Component {

    render() {
        return(
            <div>
                <Row>
                    <Col xs={12}><Header/></Col>
                </Row>
                <Row>
                    <Col xs={3} lg={3} className="row-no-padding"><Sidebar/></Col>
                    <Col xs={9} lg={9} className="row-no-padding"><ChannelBody/></Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return{
        user: state.user
    };
}

export default connect(mapStateToProps)(App);