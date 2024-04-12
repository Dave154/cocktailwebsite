import {useGlobalContext} from './context.jsx'
import {Link} from 'react-router-dom'
const Nav =()=>{
 const {navList,showList,value,setValue}= useGlobalContext()
	return<nav className='nav'>
		<a href="#" className='logo'>Cocktails </a>
		<Link to='/'>
		<form action="" className='searchform'>
			
			<input autoFocus placeholder = 'Search Cocktail' type="search"  value={value} onChange={(e)=>{
					setValue(e.target)
			} }/>
		</form>
		</Link>
			
		<ul className="navlist">
			{navList.map((item,index)=>{
				const {page,url,id} =item 
				return <Link key={id} to={url}>{page}</Link>
			})}
		</ul>
	</nav>
}
export default Nav