import {useGlobalContext} from './context'
import {useParams,Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
const CocktailPage =()=>{
	const {id} = useParams()
	const {cocktailList}= useGlobalContext()
	const current = cocktailList.find(item=>item.idDrink === id)
	console.log(current)
	if(!current){
		return <Link to='/'>Back</Link>
	}
	const {
		strDrink:name,
		strDrinkThumb:image,
		strAlcoholic:tag,
		strCategory:category,
		strGlass:glass,
		strInstructions:instructions,
		strIngredient1,
      strIngredient2, 
      strIngredient3,
      strIngredient4,
      strIngredient5,
	}= current
	const ingredients =[	strIngredient1,
      strIngredient2, 
      strIngredient3,
      strIngredient4,
      strIngredient5,]
	return <div className="cocktailpage">
	 <Link to='/'><button className="back_arrow"><FaArrowLeft/></button></Link>
	 <h2>{name}</h2>
	 <div className="drink">
		<span >
			
		<img className='co_image' src={image} alt=''/>
		</span>
		<div className="drinkinfo">
			<p>
				<span className="drink_data">Name: </span>{name}
			</p>
			<p>
				<span className="drink_data">Category: </span>{category}
			</p>
			<p>
				<span className="drink_data">Tag: </span>{tag}
			</p>
			<p>
				<span className="drink_data">Glass: </span>{glass}
			</p>
			<p>
				<span className="drink_data">Instructions: </span>{instructions}
			</p>
			<p>
				<span className="drink_data">Ingredients: </span>{ingredients.map((item,index)=>{
					return item ?  <span key ={index}> {item} ,</span>: null
				})}
			</p>
		</div>

	 </div>
	</div>
}
export default CocktailPage