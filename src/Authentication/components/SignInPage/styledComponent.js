import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SignIn = styled.div `${tw 
`ml-auto mr-auto p-64 bg-gray-200 m-2`
}`

const Input = styled.input `${tw 
`p-2 border-solid border-2 border-gray-400 m-2`
}`

const Details = styled.div `${tw 
`flex flex-col bg-white p-8 m-2 `
}`

const ErrorMessage = styled.div `${tw 
`text-red-600`
}`

const SignInButton = styled.div `${tw 
`bg-black text-white text-center p-2 rounded`
}`
export {SignIn,Input,Details,ErrorMessage,SignInButton}