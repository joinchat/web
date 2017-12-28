import * as React from "react";
// import { Button } from "../../components/button/button";
// import { ColorsPallet } from "../../blocks/colorspallet/colorspallete";
// import { ButtonsCollection } from "../../blocks/buttonscollection/buttonscollection";
import styled from "styled-components";
import ContentAdd from "material-ui/svg-icons/content/add";
import Aside from "../../blocks/aside/aside";
import Header from "../../blocks/header/header";
import Main from "../../blocks/main/main";

export class App extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <Aside/>
                <Main/>
            </div>
        );
    }
}

export default App;