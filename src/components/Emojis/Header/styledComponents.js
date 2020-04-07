import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderPart = styled.div `${tw 
`flex justify-between items-center p-5 h-24`};
color:${props=>props.themeState!=="light"?"white":"black"};
background-color:${props=>props.themeState!=="light"?"#2d3748":"#fff"};
`
const LeftPart = styled.div `${tw
`text-2xl`
}`
const RightPart = styled.div `${tw
`flex justify-around items-center`
}`
const SelectTheme = styled.button `${tw `p-3`}
color:${props=>props.themeState!=="light"?"white":"black"};
border:${props=>props.themeState!=="light"?"1px solid white":"1px solid black"};
`
const BothScores=styled.h1`${tw
`pr-4`
}`
export {HeaderPart,LeftPart,RightPart,SelectTheme,BothScores}

