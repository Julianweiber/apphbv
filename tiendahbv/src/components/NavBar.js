import './NavBar.css'


const NavBar = ()  => {
return (
<nav className='NavBar'>
<div className='LeftNav'> 
<div className='NavOptionsLeft'>
<button className='Option'>home</button>
<button className='Option'>about</button>
<button className='Option'>favoritos</button>
</div>

</div>
<div className='RightNav'>
 <div className='NavOptionsRight'>
     <button className='Option'>singin </button>
     <button className='Option'>singout </button>
</div>
</div>
</nav>
)
}
export default NavBar