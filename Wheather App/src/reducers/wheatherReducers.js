import {FETCH_CURRENT_SUCCESS,FETCH_FORECAST_SUCCESS,FETCH_WHEATHER_ERROR,FETCH_WHEATHER_PENDING,SET_CITY} from '../constants/wheatherConstans'
const initialState={
    city:'Delhi',
    current:null,
    forecast:null,
    loading:false,
    error:null
}
export const wheatherReducer=(state=initialState,action)=>{
   switch(action.type){
    case FETCH_WHEATHER_PENDING:return{...state,loading:true,error:null}
    case FETCH_CURRENT_SUCCESS:return{...state,loading:false,current:action.payload};
    case FETCH_FORECAST_SUCCESS:return{...state,loading:false,forecast:action.payload};
    case FETCH_WHEATHER_ERROR:return{...state,error:action.payload};
    case SET_CITY:return{...state,city:action.payload};
    default : return state;
   }
}