import {observable,action} from 'mobx';
import { API_INITIAL, } from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
// import {create} from 'apisauce';
// import {networkCallWithApisauce} from '../../utils/APIUtils';
// import {apiMethods} from '../../constants/APIConstants'; 
import UserService from '../../services/UserService/index.api';
class UserStore {
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    constructor(UserService){
        this.userService=UserService;
        this.init();
    }
    @action
    init(){
        this.getUsersApiStatus=API_INITIAL;
        this.getUsersApiError=null;
        this.users=[];
    }
    @action.bound
    setUsersApiResponse(usersResponse){
        this.users=usersResponse.map((user)=>user.name);
    }
    @action.bound
    setUsersApiStatus(apiStatus){
        this.getUsersApiStatus=apiStatus;
    }
    @action.bound
    setUsersApiError(error){
        this.getUsersApiError=error;
    }
    @action.bound
    getUsersAPI(){
        const userPromise =this.userService.getUsersAPI();
        return bindPromiseWithOnSuccess(userPromise)
                .to(this.setUsersApiStatus,this.setUsersApiResponse)
                .catch(this.setUsersApiError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default UserStore;
  



 

// 1)fetch
// 2)apisauce
// 3)apisauce & bindPromiseWithOnSuccess -status
// 4)networkCallWithApisauce
    //--API sauce changes - return key
    // Checking no internet -
    // post type -json stringfy 2 times