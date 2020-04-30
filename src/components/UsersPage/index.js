import React from 'react';
import {observer,inject} from 'mobx-react';
// import stores from '../../stores';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';
@inject("userStore")
@observer
class UsersPage extends React.Component {
    componentDidMount(){
        this.doNetworkCalls();
    }
    getProductStore=()=>{
        return this.props.userStore;
    }
    doNetworkCalls=()=>{
        alert(this.getProductStore().getUsersAPI())
        this.getProductStore().getUsersAPI();
    }
    renderUsersList=()=>{
        const {users}=this.getProductStore();
        if(users.length===0){
            return <NoDataView/>;
        }
        return users.map(userName=><div key={Math.random()}> {userName}</div>);
    }
    render(){
        console.log("-",this.props)
        const {getUsersApiStatus,getUsersApiError}=this.getProductStore();
        return(
            <div>
            <LoadingWrapperWithFailure
                apiStatus={getUsersApiStatus}
                apiError={getUsersApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderUsersList}
            />
            </div>);
    }
}
export default UsersPage;