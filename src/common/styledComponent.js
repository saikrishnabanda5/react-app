import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HocStyle = styled.div `${tw 
`flex justify-between
items-center flex-col `
}`;

const Heading =styled.div `
font-size:32px;
font-weight:bold;
`;
// const BodyPart =styled.div `
// color:${props=>props.themeState!=="light"?"white":""};
// background-color:${props=>props.themeState!=="light"?"#23323f":"#f2f2f2"};
// transition-duration:${props=>props.themeState!=="light"?"1s":"1s"}
// `;

export {HocStyle,Heading}