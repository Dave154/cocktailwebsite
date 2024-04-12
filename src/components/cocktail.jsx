import{Link} from 'react-router-dom'
const Cocktail =(item)=>{
	const {strDrink:name,strDrinkThumb:image,idDrink:id,strGlass:glass,strAlcoholic:tag}=item
	return <Link to={`./cocktail/${id}`}>
		
	<article className="cocktail">
		<span className='image_container'>	<img className='image' src={image} alt={name} loading='lazy'/></span>
		<div className='cocktail_deets'>	
		<h3>{name}</h3>
		<h4 className="glass">{glass}</h4>
		<span className='tag'>{tag}</span>
		</div>
	</article>
	</Link>
}
export default Cocktail