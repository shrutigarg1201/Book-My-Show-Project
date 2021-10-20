//HOC -> Higher Order Components
//components -> transforms, whatever properties we pass, into user interface
//HOC -> tranforms all or a part of a component into another component
//these are for adding additional functionalities to the exiting components

import React from "react";
import {Route} from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC = ({ component: Component , ...rest }) => {
    //component
    //props -> path , exact
    return (
        <>
        <Route 
        {...rest}
        
        component = {
        (props) => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )
        }
        />
        </>
    )
};

export default DefaultHOC;