import {Link} from 'react-router-dom'

const ErrorPage=()=>{
	return <section>
		<h4>Ooops You seem to be lost </h4>
		<button className="btn"><Link to='/'>Back Home</Link> </button>
	</section>
}
export default ErrorPage