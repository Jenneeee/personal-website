import React from "react"
import { Link } from 'gatsby'
import { 
    header,
    navigation,
    navbar,
    navlink,
    title,
    hamburger,
    bar
} from './header.module.css'

export default function Header() {
  return (
  <header className={header}>
    <h1><Link className={title} to="/">Jenne Cattoor</Link></h1>
    <div className={navigation}>
        <nav>
            <ul className={navbar}>
                <li><Link className={navlink} to="/">Home</Link></li>
                <li><Link className={navlink} to="/portfolio">Portfolio</Link></li>
                <li><Link className={navlink} to="/about">About</Link></li>
                <li><Link className={navlink} to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className={hamburger}>
            <span className={bar}></span>
            <span className={bar}></span>
            <span className={bar}></span>
        </div>
    </div>
 </header>)
}