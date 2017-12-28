import * as React from "react";
import styled from "styled-components";

interface AsideProps {
    channelsNumbers?: number;
}

export class Aside extends React.Component<AsideProps> {
    constructor(props: AsideProps) {
        super(props);
    }

    render() {
        return(
            <div>
                Aside
            </div>
        );
    }
}

export default Aside;