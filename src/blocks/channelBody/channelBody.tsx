import * as React from "react";
import styled from "styled-components";
import SentMessage from "../sentMessage/sentMessage";


interface ChannelBodyProps {
    channelsNumbers?: number;
}

const StyledMain = styled.div`
    position: relative;
    text-align: center;
    padding: 10px 0px;
    display: block;
    border: 1px solid #000;
    display: block;
    width: 100%;
    height: 100vh;
`;

export class ChannelBody extends React.Component<ChannelBodyProps> {
    constructor(props: ChannelBodyProps) {
        super(props);
    }

    render() {
        return(
            <div>
                <StyledMain>
                    <SentMessage></SentMessage>
                </StyledMain>
                
            </div>
        );
    }
}

export default ChannelBody;