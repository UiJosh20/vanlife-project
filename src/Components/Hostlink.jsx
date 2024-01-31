import { NavLink } from "react-router-dom"


const Hostlink = () => {
  const hostLink = [
    {
      path:'/host',
      title:'Dashboard'
    },
    {
      path:'/income',
      title:'Income'
    },
    {
      path:'/vans',
      title:'Vans'
    },
    {
      path:'/reviews',
      title:'Reviews'
    },
  ]
  return (
    <main>
      {
        hostLink.map((link)=>(
          <NavLink to={link.path} className={({isA})=>()}>
            {link.title}
          </NavLink>
        ))
      }

    </main>
  )
}

export default Hostlink