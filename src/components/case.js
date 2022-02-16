import React from "react"
import Arrow from '../icons/arrow'
import '../styles/components/case.scss'

export default function Case ({ caseNumber, title, description }) {
  return (
    <div className="case-wrapper">
      <div className="case-top-wrapper">
        <div className="case-left">
          <h5 className="case-number">Case {caseNumber}</h5>
        </div>
        <div className="case-right">
          <h4 className="">{description}</h4>
          <h2 className="case-title">{title}</h2>
          <p className="case-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="case-info">
            <div className="case-info-item">
              <h3>Platform</h3>
              <p>Web / Mobile</p>
            </div>
            <div className="case-info-item">
              <h3>Category</h3>
              <p>Design</p>
            </div>
            <div className="case-info-item">
              <h3>Designer</h3>
              <p>Jenne Cattoor</p>
            </div>
          </div>
          <div className="case-tools">
            <h3>Tools used</h3>
            <p>Adobe Illustrator / Adobe After Effects</p>
          </div>
          <div>
          <a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer" className="button"><div className="button-arrow"><Arrow /></div><span className="button-text">See on Dribbble</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}