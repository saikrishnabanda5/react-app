import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ScoreCard=styled.div `${tw 
`flex flex-col items-center justify-center`};
flex-grow:1;
background-color:${props=>props.selectedTheme==="light"?"#e6f0ff":"#1a202c"};
`
const StatusOfGame=styled.p `${tw 
`text-2xl font-bold`}
color:${props=>props.gameState=="Won"?"green":"red "};
`
const Score = styled.h1 `${tw 
`text-4xl font-bold`}
color:${props=>props.selectedTheme=="light"?"black":"white"};
`
const Button =styled.button `${tw
`bg-indigo-500 rounded p-3 text-xl text-white`
}`
export {ScoreCard,StatusOfGame,Score,Button}