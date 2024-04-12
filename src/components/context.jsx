import React, {useState,useContext,useReducer,useEffect} from 'react'

const m = 'magarita'
const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()
const reducer=(state,action)=>{
	switch(action.type){
	case 'LOADING':
		return{...state,isLoading:true,isError:false}
		break;
	case 'DISPLAY':
		return {...state,isLoading:false,cocktailList:action.payload,}
		break;
	case 'VALUE':
		return {...state,value:action.payload}
		break;
	case 'ERROR':
		return {...state ,isLoading:false, isError:true}
	default :
	return state;

	}


}
const initialState = {
	navList: [
		{id:1,page:'Home', url : '/'},
		{id:2,page:'About', url : '/about'},
		],
	isLoading:true,
	isError:false,
	value: '',
	cocktailList:[]
}
const AppProvider =({children})=>{
	const [state,dispatch]= useReducer(reducer,initialState)

	const fetchCocktails= async ()=>{
		try{

		dispatch({type:'LOADING'})
		const response = await fetch(`${url}${state.value}`)
		const data = await response.json()
		const {drinks} = data
		dispatch({type:'DISPLAY', payload:drinks})
			console.log(data)
		}catch(err){
			dispatch({type:'ERROR'})
		}
	}
	const setValue = (e)=>{
			dispatch({type:'VALUE',payload: e.value})
			console.log(state.value)
	}
	useEffect(()=>{
			fetchCocktails()
			console.log(state.value)
	},[state.value])

	return <AppContext.Provider value={{...state,setValue,fetchCocktails}} >
		{children}
	</AppContext.Provider>
}

const useGlobalContext=()=>{
	return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}