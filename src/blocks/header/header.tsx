import * as React from "react";
import styled from "styled-components";

interface HeaderProps {
    channelsNumbers?: number;
}

const StyledHeader = styled.div`
    text-align: center;
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
            <StyledHeader>Sign In/Sign Up</StyledHeader>
        );
    }
}

export default Header;