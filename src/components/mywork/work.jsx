import react from 'react'
import './work.css'
import Proj from './../../assets/mywork.js'
import segment from './../../assets/segment.png'

function Work(){
    return(
        <div className='work'>
            <div className="work_title">
                <h1>My latest work</h1>
                <img src={segment} alt="" height="80" />
            </div>
            <div className="work_items">
                <div className="work_elements">
                    {Proj.map((img, index) =>{
                        return <img key={index} src={img.p_img} alt="" height="200"/>
                    })}
                </div>
            </div>
            <div className="work_showmore">
                <p>Show More</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
}
export default Work