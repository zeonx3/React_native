import { AuthState } from './AuthContex';


type AuthAction = 
    | {type:'signIn'}
    | {type:'logOut'}
    | {type:'changeFavIcon', payload : string}
    | {type:'changeUsername', payload : string};

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    
    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn:true,
                userName:'ño-usherñame-yet',
            }
            break;

        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload,
            }
            break;
        
        case 'changeUsername':
            return{
                ...state,
                userName: action.payload
            }
            break;
        case 'logOut':

            return{
                ...state,
                isLoggedIn:false,
                userName: undefined,
                favoriteIcon:undefined
            }
            break;
    
        default:
            return state;
            break;
    }
    
}
