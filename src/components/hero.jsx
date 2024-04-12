import {useGlobalContext} from './context.jsx'
import Loading from './loading.jsx'
import Cocktail from './cocktail.jsx'
const Hero =()=>{
	const {isLoading, cocktailList,isError,fetchCocktails} = useGlobalContext()
	if(isLoading){
		return <Loading/>
	}
	if(!cocktailList){
		return <section className="section">	
			<p>	No matching cocktail </p>
		</section>	
	}
	if(isError){
		return <section className="section">	
			<p>	Something went wrong </p>
			<button onClick={fetchCocktails}>Retry</button>
		</section>	
	}
	return <section className="hero">
        <ul className="list">	
        	{cocktailList.map(item=>{
        		return <Cocktail {...item} key= {item.idDrink}/>

        	})}
        </ul>	

	</section>
}
export default Hero