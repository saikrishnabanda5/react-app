import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const MainHeader=styled.div`${tw
`pb-4`};
width:${props=>props.width}px;
`
const TopLevel=styled.div`${tw
`text-center pb-10`
}`
const Middle=styled.div`${tw
`flex justify-between items-center`
}`
const Level=styled.div`${tw
``
}`
const Theme=styled.button`${tw
`p-2`}
border:${props=>props.theme!=="light"?"1px solid white":"1px solid black"};
`
export {MainHeader,TopLevel,Middle,Level,Theme}
