import * as React from "react";
// import { Button } from "../../components/button/button";
// import { ColorsPallet } from "../../blocks/colorspallet/colorspallete";
// import { ButtonsCollection } from "../../blocks/buttonscollection/buttonscollection";
import styled from "styled-components";
import ContentAdd from "material-ui/svg-icons/content/add";

export class App extends React.Component {

    render() {
        return(
            <div>
                <ContentAdd></ContentAdd>
                Hello!
            </div>
        );
    }
}

export default App;