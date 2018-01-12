import * as React from "react";
import styled from "styled-components";
import FlatButton from "material-ui/FlatButton";
import SettingsPopOver from "../../components/settingsPopOver";

interface HeaderProps {
    channelsNumbers?: number;
}

interface HeaderState {
    isLoggedIn: boolean;
}

const StyledHeader = styled.div`
    text-align: right;
    padding: 10px 20px;
    display: inline-block;
    border: 1px solid #000;
    display: block;
    width: 100%;
`;


export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let block = null;

        if (!isLoggedIn) {
            block = <div><FlatButton label="Sign In"></FlatButton>/<FlatButton label="Sign Up"></FlatButton></div>
        } else {
            block = <div><SettingsPopOver></SettingsPopOver></div>
        }
        return(
            <StyledHeader>
                {block}
            </StyledHeader>
        );
    }
}

export default Header;