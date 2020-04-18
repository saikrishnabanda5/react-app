import styled from '@emotion/styled';
const CellTheme=styled.button `
background:${props=>props.shouldShowHiddenCells?
(props.theme=="dark"?props.isHidden?"#4fd1c5":"#2c5282":
props.isHidden?"#48bb78":"#4a5568"):props.isClickedOnCell?
(props.theme=="dark"?props.isHidden?"#4fd1c5":"red":
props.isHidden?"#48bb78":"red"):(props.theme==="dark"?"#2c5282":"#4a5568")};
width:${props=>props.width}px; 
height:${props=>props.width}px;
margin:3px;
`;

export default CellTheme;