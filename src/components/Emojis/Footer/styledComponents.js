import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const Instruction= styled.div `${tw
`p-2 h-24`};
color:${props=>props.themeState!=="light"?"white":"black"};
background-color:${props=>props.themeState!=="light"?"#23323f":"#fff"};
`
const Heading = styled.h1 `${tw
`text-2xl font-bold`
}`
const Paragraph=styled.h1 `${tw
`text-lg`
}`
export {Instruction,Paragraph,Heading}