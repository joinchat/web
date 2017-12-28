import * as React from "react";
import styled from "styled-components";

interface MainProps {
    channelsNumbers?: number;
}

export class Main extends React.Component<MainProps> {
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return(
            <div>
                Main
            </div>
        );
    }
}

export default Main;