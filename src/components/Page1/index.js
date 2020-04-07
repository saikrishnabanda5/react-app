import React from "react";
import styled from '@emotion/styled';
import logo from "../../logo.svg";
import {PageContent} from '../Countries/styledComponents.js'

function Page1() {
  return(
      <PageContent >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Page 12</h1>
      </PageContent>
      )
}

export default Page1;


// ${tw `tailwind-classes`}  

// <Page1Cont >

// </Page1Cont>
// <div className="bg-gray-900 flex justify-center items-center">