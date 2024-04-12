import {useGlobalContext} from './context'
import {useParams,Link} from 'react-router-dom'
const CocktailPage =()=>{
	const {id} = useParams()
	const {cocktailList}= useGlobalContext()
	const current = cocktailList.find(item=>item.idDrink === id)
	console.log(current,cocktailList,id)
	if(!current){
		return <Link to='/'>Back</Link>
	}
	return <div className="cocktailpage">
		<img className='image' src={current.strDrinkThumb} alt=''/>
		<h5>{current.strDrink}</h5>
	</div>
}
export default CocktailPage