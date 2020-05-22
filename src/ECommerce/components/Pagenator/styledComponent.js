import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Pages = styled.div `${tw 
`flex`
}`
const LeftArrow = styled.button `${tw 
`bg-black text-white`
}`
const RightArrow = styled.button `${tw 
`bg-black text-white`
}`

const CurrentPageNumber = styled.div `${tw 
`p-3 border-2`
}`
const TotalNumberOfPages = styled.div `${tw 
`p-3`
}`

export  {Pages,LeftArrow,CurrentPageNumber,TotalNumberOfPages,RightArrow}