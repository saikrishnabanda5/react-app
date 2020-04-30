import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Size = styled.button `${tw 
`rounded-full h-10 w-10 m-1`};
background-color:${props=>props.selectedFilter===false?"#edf2f7":"#1a202c"};
color:${props=>props.selectedFilter===false?"black":"white"};
`;

const EachSize = styled.div `${tw 
`flex flex-wrap pl-2`};
`

export {Size,EachSize}