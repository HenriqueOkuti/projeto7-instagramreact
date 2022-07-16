import ReactDOM from 'react-dom';
import Navbar from './instagram-scripts/navbar/navbar';
import Corpo from './instagram-scripts/corpo/corpo';
import FundoMobile from './instagram-scripts/fundomobile/fundomobile';
import React from 'react';

function Content() {
    return (
        <React.Fragment>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </React.Fragment>
    );
}

const root = document.querySelector(".root");
const content = Content();
ReactDOM.render(content, root);