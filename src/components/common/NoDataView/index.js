import React from "react";

import { NoDataViewContainer, NoDataViewText } from "./styledComponents";

class NoDataView extends React.Component {
  render() {
    const {text,color}=this.props;
    return (
      <NoDataViewContainer>
        <NoDataViewText color={color}>{text}</NoDataViewText>
      </NoDataViewContainer>
    );
  }
}

export default NoDataView;
