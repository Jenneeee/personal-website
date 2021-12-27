import React from "react"
import { Link } from 'gatsby'
import { 
    header,
    navbar,
    navlink,
    title
} from './header.module.css'

export default function Header() {
  return (
  <header className={header}>
    <h1><Link className={title} to="/">Jenne Cattoor</Link></h1>
    <nav>
        <ul className={navbar}>
            <li><Link className={navlink} to="/portfolio">Portfolio</Link></li>
            <li><Link className={navlink} to="/about">About</Link></li>
            <li><Link className={navlink} to="/contact">Contact</Link></li>
        </ul>
    </nav>
 </header>)
}