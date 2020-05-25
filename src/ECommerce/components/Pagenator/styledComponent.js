import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Pages = styled.div `${tw 
`flex text-xl`}
`
const LeftArrow = styled.button `${tw 
`bg-black text-white p-4`
}`

const RightArrow = styled.button `${tw 
`bg-black text-white p-4`
}`

const CurrentPageNumber = styled.div `${tw 
`p-3`};
border:1px solid black;
`
const TotalNumberOfPages = styled.div `${tw 
`p-3`};
border:1px solid black;
`

export  {Pages,LeftArrow,CurrentPageNumber,TotalNumberOfPages,RightArrow}