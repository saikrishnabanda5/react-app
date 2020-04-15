import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const GridGame=styled.div `${tw
`pt-32  border-solid border-4 border-green-600`};
background-color:${props=>props.theme==="light"?"white":"#1a202c"};
color:${props=>props.theme!=="light"?"white":"black"};
`;
export {GridGame}