import './index.css';
import vans from '../images/vans.jpg';
function LandingPage(){
    return(
        <div>
            <img src={vans} alt='Vans' className='shoes'/>
            <div className='navbar'>


<li><a>Home</a></li>
<li><a>Shop</a></li>
<li><a>Collection</a></li>
<li><a>Pages</a></li>
<li><a>Blog</a></li>
<li><a>Contact</a></li>


    </div>
        </div>

    )
}
export default LandingPage;