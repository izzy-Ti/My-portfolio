import react from 'react'
import './work.css'
import Proj from './../../assets/mywork.js'
import segment from './../../assets/segment.png'

function Work(){
    const git = 'https://github.com/izzy-Ti'
    const github = () => {
        window.open(git, '_blank');
    };

    return(
        <div className='work' id='work'>
            <div className="work_title">
                <h1>My latest work</h1>
                <img src={segment} alt="" height="120" />
            </div>
            <div className="work_items">
                <div className="work_elements">
                    {Proj.map((img, index) =>{
                        return <img key={index} src={img.p_img} onClick={img.p_click} alt="" height="200"/>
                    })}
                </div>
            </div>
            <div className="work_showmore" onClick={github}>
                <p>Show More</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
}
export default Work