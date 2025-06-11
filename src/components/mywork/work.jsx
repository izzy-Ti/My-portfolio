import react from 'react'
import './work.css'
import proj from './../../assets/mywork.js'
import segment from './../../assets/segment.png'

function Work(){
    return(
        <div className='work'>
            <div className="work_title">
                <h1>My latest work</h1>
                <img src={segment} alt="" />
            </div>
            <div className="work_items">
                <div className="work_elements">
                    {proj.map((img, index) =>{
                        return <img key={index} src={img.p_img} alt="" />
                    })}
                </div>
            </div>
        </div>
    );
}
export default Work