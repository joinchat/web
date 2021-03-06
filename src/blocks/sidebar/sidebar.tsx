import * as React from "react";
import styled from "styled-components";
// import { ButtonComp } from "../../components/button/button";

interface SidebarProps {
    channelsNumbers?: number;
}

const StyledSidebar = styled.div`
    text-align: center;
    padding: 10px 20px;
    border: 1px solid #000;
    display: block;
    width: 100%;
    height: 100vh;
`;


export class Sidebar extends React.Component<SidebarProps> {
    constructor(props: SidebarProps) {
        super(props);
    }

    componentDidMount() {
        // GetVerificationCode("380638624707");
        // PostVerificationCode("380638624707", "VjVoMP");
    }

    render() {
        return(
            <StyledSidebar>
                <h1>Join.Chat</h1>
                {/* <ButtonComp text="test"></ButtonComp> */}
            </StyledSidebar>
        );
    }
}

export default Sidebar;