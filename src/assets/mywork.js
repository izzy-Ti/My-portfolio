import proj_1 from './../assets/proj/proj_1.png'
import proj_2 from './../assets/proj/proj_2.png'
import proj_3 from './../assets/proj/proj_3.png'
import proj_4 from './../assets/proj/proj_4.png'
import proj_5 from './../assets/proj/proj_5.png'
import proj_6 from './../assets/proj/proj_6.png'

const git1 = 'https://github.com/izzy-Ti/Coffee-shop-web'
const git2 = 'https://github.com/izzy-Ti/Django-E-commerce-website'
const git3 = 'https://github.com/izzy-Ti/student-managment-website'
const git4 = 'https://github.com/izzy-Ti/portfolio-websites'
const git5 = 'https://github.com/izzy-Ti/Zema-website'
const git6 = 'https://github.com/izzy-Ti/Full-E-commerce-frontend/tree/main/products'

const click1 = () => {
    window.open(git1, '_blank');
};
const click2 = () => {
    window.open(git2, '_blank');
};
const click3 = () => {
    window.open(git3, '_blank');
};
const click4 = () => {
    window.open(git4, '_blank');
};
const click5 = () => {
    window.open(git5, '_blank');
};
const click6 = () => {
    window.open(git6, '_blank');
};

const Proj = [
    {
        p_no: 1,
        p_name:"Coffee Shop",
        p_img: proj_1,
        p_click: click1
    },
    {
        p_no: 2,
        p_name:"E-Commerce web",
        p_img: proj_2,
        p_click: click2
    },
    {
        p_no: 3,
        p_name:"Student managment web",
        p_img: proj_3,
        p_click: click3
    },
    {
        p_no: 4,
        p_name:"Portfolio web",
        p_img: proj_4,
        p_click: click4
    },
    {
        p_no: 5,
        p_name:"Zema Web",
        p_img: proj_5,
        p_click: click5
    },
    {
        p_no: 6,
        p_name:"Mini market",
        p_img: proj_6,
        p_click: click6
    }
]
export default Proj