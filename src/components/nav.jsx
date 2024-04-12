import {useGlobalContext} from './context.jsx'
import {NavLink} from 'react-router-dom'
import React from 'react'
import {FaTimes ,FaSearch} from 'react-icons/fa'
const Nav =()=>{
 const {navList,showList,value,setValue}= useGlobalContext()
 const [search,setSearch]=React.useState(false)
 const handleSubmit = (e)=>{
 	e.preventDefault
 }
 const showSearch=()=>{
   setSearch(!search)
 }
	return<nav className='nav'>

		<a href="/" className='logo'>Cocktails </a>
		<NavLink to='/'>
		<form action="" className={`${search && 'search_sm_screen'} searchform`} onSubmit={handleSubmit}>
			
			<input autoFocus placeholder = 'Search Cocktail' type="text"  value={value} onChange={(e)=>{
					setValue(e.target)
			} }/>
			<button className="search_btn" onClick={showSearch}>{search ? <FaTimes/>: <FaSearch/>}</button>
		</form>
		</NavLink>
			
		<ul className="navlist">
			{navList.map((item,index)=>{
				const {page,url,id} =item 
				return <NavLink key={id} to={url}>{page}</NavLink>
			})}
		</ul>
	</nav>
}
export default Nav