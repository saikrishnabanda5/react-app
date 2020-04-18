import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const GameFieldStyle=styled.div `${tw
`flex flex-row flex-wrap`};
width:${props=>props.width}px;
height:${props=>props.width}px;
`;
export default GameFieldStyle;
