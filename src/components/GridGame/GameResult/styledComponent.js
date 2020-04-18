import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ScoreCard=styled.div `${tw 
`pt-20 flex flex-col items-center justify-center`};
background-color:${props=>props.selectedTheme==="light"?"white":"#1a202c"};
`
const StatusOfGame=styled.p `${tw 
`text-green-500 text-3xl font-bold`}
`
const Score = styled.h1 `${tw 
`text-4xl font-bold`}
color:${props=>props.selectedTheme=="light"?"black":"white"};
`
const Button =styled.button `${tw
`bg-indigo-500 rounded p-3 text-xl text-white`
}`
export {ScoreCard,StatusOfGame,Score,Button}