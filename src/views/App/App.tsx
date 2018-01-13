import * as React from "react";
import Sidebar from "../../blocks/sidebar/sidebar";
import styled from "styled-components";
import ContentAdd from "material-ui/svg-icons/content/add";
import ChannelBody from "../../blocks/channelBody/channelBody";
import { Grid, Row, Col } from "react-bootstrap";
import Header from "../../blocks/header/header";
import { connect } from "react-redux";
import * as pageActions from "../../actions/pageAction";
import { bindActionCreators } from "redux";

export class App extends React.Component<any> {

    render() {
        const {error, login, user_type, fetching, data, data_user, succesGetCode } = this.props;
        const { setUser } = this.props.pageActions;

        return(
            <div>
                <Row>
                    <Col xs={12}><Header user_type={user_type} succesGetCode={succesGetCode} setUser={setUser}/></Col>
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
        error: state.error,
        login: state.login,
        user_type: state.user_type,
        fetching: state.fetching,
        data: state.data,
        data_user: state.data_user,
        succesGetCode: state.succesGetCode
    };
}

function mapDispatchProps(dispatch: any) {
    return{
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchProps)(App);