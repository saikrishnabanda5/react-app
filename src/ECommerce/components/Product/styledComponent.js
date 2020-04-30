import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Items = styled.div `${tw 
` flex flex-wrap `
}`
const AddToCart = styled.button `${tw 
`bg-black text-white p-1 pl-12 pr-12`
}`
const EachProduct = styled.div `${tw 
`p-4 w-56 `}
`
const Content = styled.div `${tw 
`text-center`
}`
const Title = styled.div `${tw 
`h-12 `}
`
const Price = styled.div `${tw 
`flex justify-center items-center`
}`
const PriceType = styled.div `${tw 
`text-gray-700 pb-2`
}`
const CurrencyFormat = styled.div `${tw 
`text-xs pt-1 pr-1`
}`
const ImageTag = styled.div `${tw 
`flex`
}`
const FreeShipping = styled.div `${tw 
`text-white bg-black p-1 -ml-12 text-xs`
}`
export {Items,AddToCart,EachProduct,Content,ImageTag,FreeShipping,Price,PriceType,Title,CurrencyFormat}