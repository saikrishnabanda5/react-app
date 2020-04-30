import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ShowCart = styled.div `${tw 
`p-3`}`;

const HideCart = styled.div `${tw 
` flex  flex-col text-center h-screen text-3xl
text-white bg-gray-800 fixed top-0 right-0`};
width:35%;
`
const Close = styled.button `${tw 
` -ml-24 text-white bg-gray-800 p-4`};
`
const CartLogo = styled.div `${tw 
`text-3xl  text-white bg-gray-800 pt-2 flex justify-center items-center text-center `};
`
const Cart = styled.div `${tw 
`flex justify-around`}
`
const CartContent = styled.div `${tw 
`text-xl font-bold pl-2`}
`
const Logo = styled.div `${tw 
`text-4xl relative`}
`
const ShowCartLogo = styled.div `${tw 
`flex text-4xl p-3 bg-gray-800 text-white -mr-3 -mt-3 border border-gray-800`}
`
const ItemsInCart = styled.div `${tw 
`text-xs absolute -ml-5 text-orange-500`}
`
const ShowItemsInCart = styled.div `${tw 
`text-xs absolute -mr-5 text-orange-500 pt-2`}
`


export {ShowCart,HideCart,Close,CartLogo,Cart,ItemsInCart,ShowItemsInCart,CartContent,Logo,ShowCartLogo}