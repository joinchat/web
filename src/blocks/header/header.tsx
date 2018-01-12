import * as React from "react";
import styled from "styled-components";
import FlatButton from "material-ui/FlatButton";
import SettingsPopOver from "../../components/settingsPopOver";
import SignInDialog from "../../components/signInDialog";
import SignUpDialog from "../../components/signUpDialog";

interface HeaderProps {
    user_type: string;
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
        const user_type = this.props.user_type;
        let block = null;
        if (user_type === "guest") {
            block = <SettingsPopOver/>;
        } else {
            block = <div><SignInDialog/>/<SignUpDialog/></div>;
        }
        return(
            <StyledHeader>
                {block}
            </StyledHeader>
        );
    }
}

export default Header;