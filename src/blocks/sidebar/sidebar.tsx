import * as React from "react";
import styled from "styled-components";

interface SidebarProps {
    channelsNumbers?: number;
}

const StyledSidebar = styled.div`
    text-align: center;
    padding: 10px 20px;
    display: inline-block;
    border: 1px solid #000;
    display: block;
    width: 100%;
    height: 100vh;
`;


export class Sidebar extends React.Component<SidebarProps> {
    constructor(props: SidebarProps) {
        super(props);
    }

    render() {
        return(
            <StyledSidebar>
                <h1>Join.Chat</h1>
            </StyledSidebar>
        );
    }
}

export default Sidebar;