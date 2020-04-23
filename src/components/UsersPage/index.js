import React from 'react';
import {observer,inject} from 'mobx-react';
// import stores from '../../stores';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';
// const userStore = stores.userStore;
@inject("userStore")
@observer
class UsersPage extends React.Component {
    componentDidMount(){
        this.doNetworkCalls();
    }
    getUserStore=()=>{
        return this.props.userStore;
    }
    doNetworkCalls=()=>{
        this.getUserStore().getUsersAPI();
    }
    renderUsersList=()=>{
        const {users}=this.getUserStore();
        if(users.length===0){
            return <NoDataView/>;
        }
        return users.map(userName=><div key={Math.random()}> {userName}</div>);
    }
    render(){
        const {getUsersApiStatus,getUsersApiError}=this.getUserStore();
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