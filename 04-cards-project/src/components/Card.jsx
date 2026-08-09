import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
    // console.log(props.company);
    return (
        <div>
            <div className="card">
                <div>
                    <div className="top">
                        <img src={props.logo} alt="" />
                        <button>Save<Bookmark size={14} /></button>
                    </div>
                    <div className="centre">
                        <h3>{props.company}<span>{props.date}</span></h3>
                        <h2>{props.post}</h2>
                        <div className='tag'>
                            <h4>{props.tag1}</h4>
                            <h4>{props.tag2}</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{props.pay}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card


// initial card structure
/* return (
    <div>
        <div className="card">
            <div>
                <div className="top">
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" />
                    <button>Save<Bookmark size={14} /></button>
                </div>
                <div className="centre">
                    <h3>Amazon<span>2 days ago</span></h3>
                    <h2>UI/UX Designer</h2>
                    <div className='tag'>
                        <h4>Part Time</h4>
                        <h4>Senior Level</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    </div>
)*/