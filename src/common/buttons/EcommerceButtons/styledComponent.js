import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const Button =styled.div`${tw
`text-white  `};
background:${props=>props.backgroundColor};
padding:${props=>props.padding};
`;

export {Button}