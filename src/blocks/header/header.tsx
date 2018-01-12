import * as React from "react";
import styled from "styled-components";
import FlatButton from "material-ui/FlatButton";
import SignPopOver from "../../components/settingsPopOver";

interface HeaderProps {
    channelsNumbers?: number;
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

        return(
            <StyledHeader>
                <SignPopOver></SignPopOver>
            </StyledHeader>
        );
    }
}

export default Header;