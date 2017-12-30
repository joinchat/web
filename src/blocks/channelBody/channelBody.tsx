import * as React from "react";
import styled from "styled-components";

interface ChannelBodyProps {
    channelsNumbers?: number;
}

const StyledMain = styled.div`
    text-align: center;
    padding: 10px 20px;
    display: block;
    border: 1px solid #000;
    display: block;
    width: 100%;
    height: 100vh;
`

export class ChannelBody extends React.Component<ChannelBodyProps> {
    constructor(props: ChannelBodyProps) {
        super(props);
    }

    render() {
        return(
            <StyledMain>
                Main
            </StyledMain>
        );
    }
}

export default ChannelBody;