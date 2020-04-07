import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Image = styled.img `${tw 
` w-64 `
}`
const ImageCard= styled.div `${tw
`flex justify-center flex-wrap`};
background-color:${props=>props.selectedTheme==="light"?"#e6f0ff":"#1a202c"};
`
const ImageName=styled.div `${tw
`ml-4 -mt-4 pb-8 `}
color:${props=>props.selectedTheme=="light"?"black":"white"};
`

const ImageCard1=styled.div `${tw
`border-0 flex justify-center items-center flex-col shadow-custom m-6 bg-blue-700`};
background-color:${props=>props.selectedTheme==="light"?"white":""};
`
const EmojiDashboard=styled.div`${tw
`flex  flex-col min-h-screen`
}`
export {Image,ImageCard,ImageName,ImageCard1,EmojiDashboard}