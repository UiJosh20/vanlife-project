import { NavLink } from "react-router-dom"


const Hostlink = () => {
  const hostLink = [
    {
      path:'/host',
      title:'Dashboard'
    },
    {
      path:'/host/income',
      title:'Income'
    },
    {
      path:'/host/vans',
      title:'Vans'
    },
    {
      path:'/host/reviews',
      title:'Reviews'
    },
  ]
  return (
    <main>
      {
        hostLink.map((link)=>(
          <NavLink to={link.path} className={({isActive})=>(isActive?"border-b-2 border-black":"text-gray-500")}>
            {link.title}
          </NavLink>
        ))
      }

    </main>
  )
}

export default Hostlink