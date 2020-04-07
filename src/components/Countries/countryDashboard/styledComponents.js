import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderPart = styled.div `${tw 
`flex justify-between items-center mt-5 mb-1 p-5  shadow-xl`
}`
const SelectTheme = styled.div `
color:${props=>props.themeState!=="light"?"white":"black"};
background-color:${props=>props.themeState!=="light"?"#23323f":"#fff"};
transition-duration:${props=>props.themeState!=="light"?"1s":""}
`
const BodyPart =styled.div `
color:${props=>props.themeState!=="light"?"white":""};
background-color:${props=>props.themeState!=="light"?"#23323f":"#f2f2f2"};
transition-duration:${props=>props.themeState!=="light"?"1s":"1s"}
`
const SearchAndSelect=styled.div`${tw
`flex justify-between items-center p-5`
}`
const ShowCountries = styled.div`${tw
`flex justify-around flex-wrap`
}`

export {HeaderPart,SelectTheme,BodyPart,SearchAndSelect,ShowCountries}