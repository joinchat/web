import * as React from "react";
import styled from "styled-components";
import FlatButton from "material-ui/FlatButton";
import SettingsPopOver from "../../components/settingsPopOver";
import SignInDialog from "../../components/signInDialog";
import SignUpDialog from "../../components/signUpDialog";

interface HeaderProps {
    user_type: string;
    succesGetCode: boolean;
    setUser: any;
    fetchGetCode: any;
    type_of_input: string;
}

const StyledHeader = styled.div`
    text-align: right;
    padding: 10px 20px;
    display: inline-block;
    border: 1px solid #000;
    display: block;
    width: 100%;
`;


export class Header extends React.Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        const { user_type, succesGetCode, setUser, fetchGetCode, type_of_input } = this.props;

        let block = null;
        if (user_type === "guest") {
            block = <div><SignInDialog/>/<SignUpDialog succesGetCode={succesGetCode} setUser={setUser} fetchGetCode={fetchGetCode} type_of_input={type_of_input}/></div>;
        } else {
            block = <SettingsPopOver/>;
        }
        return(
            <StyledHeader>
                {block}
            </StyledHeader>
        );
    }
}

export default Header;