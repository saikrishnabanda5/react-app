import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SignOut = styled.button `${tw 
`border border-gray-800 p-1 rounded text-xs`
}`
const HeaderPart = styled.div `${tw 
`flex`
}`
const Top = styled.div `${tw 
`flex justify-between`
}`
const CartLogo = styled.div `${tw 
`text-5xl text-white bg-black p-3`
}`
const ECommerce = styled.div `${tw 
`p-6`
}`

// const ImageCard= styled.div `${tw
// `flex justify-center flex-wrap`};
// background-color:${props=>props.selectedTheme==="light"?"#e6f0ff":"#1a202c"};
// `
// const ImageName=styled.div `${tw
// `ml-4 -mt-4 pb-8 `}
// color:${props=>props.selectedTheme=="light"?"black":"white"};
// `

// const ImageCard1=styled.div `${tw
// `border-0 flex justify-center items-center flex-col shadow-custom m-6 bg-blue-700`};
// background-color:${props=>props.selectedTheme==="light"?"white":""};
// `
// const EmojiDashboard=styled.div`${tw
// `flex  flex-col min-h-screen`
// }`
export {SignOut,HeaderPart,CartLogo,Top,ECommerce}