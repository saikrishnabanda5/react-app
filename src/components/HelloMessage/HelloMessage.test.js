import React,{Component} from 'react';
import {render} from '@testing-library/react'
import  {HelloMessage} from '.';
describe("Hello Message",()=>{
    it("should render given message",()=>{
        const {getByText,debug} =render((<HelloMessage message={"hello bsk"}/>))
        getByText(/world/i)
        debug(); 
    })
})