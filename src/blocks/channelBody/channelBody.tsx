import * as React from "react";
import styled from "styled-components";
import SentMessage from "../sentMessage/sentMessage";


interface ChannelBodyProps {
    channelsNumbers?: number;
    user_type: string;
}

const StyledMain = styled.div`
    position: relative;
    text-align: center;
    padding: 0px;
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
        const { user_type } = this.props;
        let sendMessageBlock = null;

        if (user_type === "user") {
            sendMessageBlock =
                <StyledMain>
                    <SentMessage></SentMessage>
                </StyledMain>
        }
        return(
            <div>
                {sendMessageBlock}
            </div>
        );
    }
}

export default ChannelBody;