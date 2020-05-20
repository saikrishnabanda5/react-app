import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Heading =styled.div `${tw
`flex-none`};
font-size:20px;
font-weight:bold;
`;
const ToggleStyle =styled.div `
`;
const Button = styled.button `${tw 
`bg-blue-500 text-white p-2 `
}`;
const Value = styled.div `${tw 
`flex justify-between items-center`
}`;
const Input = styled.input `${tw 
`border-solid border-2 border-blue-600`
}`;
const ClickCancel = styled.div `${tw 
`flex`
}`;
const Editing = styled.div `${tw 
`flex`
}`;

export {ToggleStyle,Heading,Button,Value,Input,ClickCancel,Editing}