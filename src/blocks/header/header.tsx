import * as React from "react";
import styled from "styled-components";

interface HeaderProps {
    channelsNumbers?: number;
}


export class Header extends React.Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {

        return(
            <div>Header</div>
        );
    }
}

export default Header;