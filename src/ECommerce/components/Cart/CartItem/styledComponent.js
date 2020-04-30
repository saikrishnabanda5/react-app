import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Item = styled.div `${tw 
`flex m-4 border-t border-white`};
`

const Image = styled.div `${tw 
`w-12 mr-4 pt-4`
}`
const Content = styled.div `${tw 
`flex justify-between flex-col pt-4`
}`

const Header = styled.div `${tw 
`flex justify-between items-end`
}`

const Title = styled.div `${tw 
`text-sm`
}`

const RemoveItem = styled.div `${tw 
`text-sm ml-4`
}`
//ml-4

const StyleAndPrice = styled.div `${tw 
`flex justify-between `
}`

const PrintStyle = styled.div `${tw 
`text-sm`
}`

const Price = styled.div `${tw 
`text-sm ml-4 text-orange-500 `
}`

const Quantity = styled.div `${tw 
`text-sm text-left`
}`

export {Item,Image,Content,Header,Title,RemoveItem,StyleAndPrice,
PrintStyle,Price,Quantity}