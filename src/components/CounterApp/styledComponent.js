import styled from '@emotion/styled';
import tw from 'tailwind.macro'

const TagH1 =styled.div `${tw 
`text-5xl font-bold`}`
const Increment =styled.button `${tw 
`p-2 pl-4 pr-4 bg-blue-700 text-white text-xl`
}`
const Decrement =styled.button `${tw
`p-2 pl-4 pr-4 bg-blue-700 text-white text-xl`}
`
const Input =styled.input `${tw 
`border-solid border-orange-500 border-2 text-xl rounded-lg text-center h-12 ml-2 mr-2`
}`
const Bottom =styled.div ``
const CountApp=styled.div `${tw `flex flex-col items-center justify-center`}`
export {TagH1,Increment,Input,Decrement,Bottom,CountApp}