import { useState } from 'react'
import Header from './Header'
import NavPannel from './NavPannel'
const Navbar = () => {
	const [open, setOpen] = useState(false)

  return (
	<div>
		<NavPannel open = {open} setOpen= {setOpen}/>
		<Header setOpen= {setOpen}/>
	</div>
  )
}

export default Navbar
