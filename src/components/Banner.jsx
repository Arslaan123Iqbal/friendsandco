import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
const Banner = () => {
  return (
    <section className="main">
        <div className="container">
            <div className="row">
                <h2>
                    <div className="line">
                        <span>
                            Creating Unique Brand is
                        </span>
                    </div>
                    <div className="line">
                        <span>What We do.</span>
                    </div>
                </h2>
                <div className="btn-row">
                    <a href="/">More About Us <RightArrow/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner