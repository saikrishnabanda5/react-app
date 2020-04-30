import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {AuthServiceEndpoint} from '../endpoint';
class AuthService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
     });
 }
 signInAPI(){
     return networkCallWithApisauce(
            this.api,
            AuthServiceEndpoint.endpoint, 
            {},       
            apiMethods.get
        );
 }
}

export default AuthService;