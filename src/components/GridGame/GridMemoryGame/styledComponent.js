import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GridGame=styled.div `${tw
`flex flex-col items-center justify-center min-h-screen`};
background-color:${props=>props.theme==="light"?"white":"#1a202c"};
color:${props=>props.theme!=="light"?"white":"black"};
`;
export default GridGame;
