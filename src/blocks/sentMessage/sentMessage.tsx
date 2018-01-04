import * as React from "react";
import styled from "styled-components";
import Send from "material-ui/svg-icons/content/send";
import TagFaces from "material-ui/svg-icons/image/tag-faces";

interface SentMessageProps {
    text?: string;
}

const StyledMessageBlock = styled.div`
    position: absolute;
    clear:both;
    height: 50px;
    // bottom: 0px;
    border: 1px solid grey;
    width: 100%;
    display: flex;
`;

const StylesForSendIcon = {
    width: 16,
    height: 16,
    fill: "red"
};


const StylesForTagFaces = {
    cursor: 'pointer',
    width: 16,
    height: 16
}

export class SentMessage extends React.Component<SentMessageProps> {
    constructor(props: SentMessageProps) {
        super(props);
    }

    render() {
        return(
            <StyledMessageBlock>
                <div>
                    <TagFaces style={StylesForTagFaces}/>
                </div>
                <form>
                    <input type="text"/>
                    <button><Send style={StylesForSendIcon}></Send></button>
                </form>
            </StyledMessageBlock>
        );
    }

}

export default SentMessage;