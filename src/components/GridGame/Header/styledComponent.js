import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const MainHeader=styled.div`${tw
`ml-auto mr-auto w-4/12 border-solid border-4 border-gray-600`}
`
const TopLevel=styled.div`${tw
``
}`
const Middle=styled.div`${tw
`flex justify-between items-center`
}`
const Level=styled.div`${tw
``
}`
const Theme=styled.button`${tw
`p-2`}
border:${props=>props.theme!=="light"?"1px solid green":"1px solid black"};
`



export {MainHeader,TopLevel,Middle,Level,Theme}
