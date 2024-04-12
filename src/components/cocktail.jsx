import{Link} from 'react-router-dom'
const Cocktail =({strDrink,strDrinkThumb,idDrink})=>{
	return <Link to={`./cocktail/${idDrink}`}>
		
	<div className="cocktail">
		<span className='image_container'>	<img className='image' src={strDrinkThumb} alt={strDrink}/></span>
		<div className='cocktail_deets'>
			
		<h3>{strDrink}</h3>
		</div>
	</div>
	</Link>
}
export default Cocktail