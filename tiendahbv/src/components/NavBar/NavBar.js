import './NavBar.css'


const NavBar = ()  => {
return (


<nav className='NavBar'>
<div className='LeftNav'> 
<div className='NavOptionsLeft'>
<button className="index">inicio</button>
<button className="tienda">tienda</button>
<button className="contacto">contacto</button>
</div>

</div>
<div className='RightNav'>
 <div className='NavOptionsRight'>
     <button className="nosotros">nosotros </button>
     <button className="comollegar">como llegar </button>
</div>
</div>
</nav>
)
}
export default NavBar



