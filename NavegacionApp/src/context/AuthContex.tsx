import React,{useReducer} from 'react';
import { AuthReducer } from './AuthReducer';


//informacion del context

export interface AuthState{
    isLoggedIn : boolean;
    userName?: string;
    favoriteIcon?:string;

}

//Estado inicial

export const authInicialState: AuthState = {
    isLoggedIn: false,
}
//como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
    logOut: () => void;
}


//Crear el contexto
export const AuthContext = React.createContext({} as AuthContextProps);

//Proveedor del estado

export const AuthProvider = ({children}: any) =>{

    const [authState, dispatch] = useReducer(AuthReducer,authInicialState)

    const signIn = () => {
        dispatch({type:'signIn'});
    }

    const logOut = () => {
        dispatch({type:'logOut'});
    }


    const changeFavoriteIcon = (iconName : string) => {
        dispatch({type:'changeFavIcon',payload: iconName})
    }

    const changeUsername = (username : string) => {
        dispatch({type:'changeUsername',payload: username})
    }


    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    
)
    
}

