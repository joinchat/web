import * as React from "react";
import Sidebar from "../../blocks/sidebar/sidebar";
import styled from "styled-components";
import ContentAdd from "material-ui/svg-icons/content/add";
import ChannelBody from "../../blocks/channelBody/channelBody";
import { Grid, Row, Col } from "react-bootstrap";
import Header from "../../blocks/header/header";
import { connect } from "react-redux";
import * as pageActions from "../../actions/pageAction";
import * as getCode from "../../actions/getCode";
import * as verifyCode from "../../actions/verifyCode";
import * as signUpUser from "../../actions/signUp";
import { bindActionCreators } from "redux";

export class App extends React.Component<any> {

    render() {
        const {error, login, user_type, fetching, data, data_user, succesVerifyCode, type_of_input } = this.props;
        const { fetchGetCode } = this.props.getCode;
        const { fetchvVerifyCode } = this.props.verifyCode;
        const { fetchUserSignUp } = this.props.signUpUser;


        return(
            <div>
                <Row>
                    <Col xs={12}><Header user_type={user_type} succesVerifyCode={succesVerifyCode} fetchGetCode={fetchGetCode} type_of_input={type_of_input} fetchvVerifyCode={fetchvVerifyCode} fetchUserSignUp={fetchUserSignUp}/></Col>
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
        succesVerifyCode: state.succesVerifyCode,
        type_of_input: state.type_of_input
    };
}

function mapDispatchProps(dispatch: any) {
    return{
        getCode: bindActionCreators(getCode, dispatch),
        verifyCode: bindActionCreators(verifyCode, dispatch),
        signUpUser: bindActionCreators(signUpUser, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchProps)(App);