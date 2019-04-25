import React, { Component } from 'react';
import {HorizontalTabs} from 'damco-components';



import './App.css';



class NavTabTop extends Component {


    render() {
        const SampleData = [
            {
                "id": 1,
                "title": "Commercial Invoice",
                "count" : "5",
            },
            {
                "id": 2,
                "title": "Bill of Lading",
                "count" : "13",
            },
        ];
        return (
            <div>
                <HorizontalTabs name={"horizontal-tabs"} count={false} tabData={SampleData}>


                </HorizontalTabs>
            </div>

        );
    }
}

export default NavTabTop;