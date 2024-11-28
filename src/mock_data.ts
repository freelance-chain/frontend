import { FaMeta, FaMicrosoft, FaPaypal } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";
import { MdOutlineCategory,MdOutlinePriceCheck  } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export const trusted_by = [
    FaMeta,
    FaMicrosoft,
    RiNetflixFill, FaPaypal
]

export const services = [
    {
        id:"1",
        title:"Graphic Design",
        imageUrl:"https://d4l6e04z43qjx.cloudfront.net/images/benefits-graphic-designer.png"
    },
    {
        id:"2",
        title:"Social Media Marketing",
        imageUrl:"https://clictadigital.com/wp-content/uploads/2023/11/best-social-media-platforms.png"
    },
    {
        id:"3",
        title:"SEO",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNEPQbnBqWGgcHt1uHCrq6qsIDMLMNtEF1w&s"
    },
    {
        id:"4",
        title:"Video Editing",
        imageUrl:"https://cdn.mos.cms.futurecdn.net/BhVUQhEydRdaga5e9w5beG-1200-80.png"
    },
    {
        id:"5",
        title:"Copy Writing",
        imageUrl:"https://careertraining.morgan.edu/common/images/2/23106/Persuasive-Copywriting935x572.jpg"
    },
    {
        id:"6",
        title:"Software Development",
        imageUrl:"https://bairesdev.mo.cloudinary.net/blog/2023/08/Software-Development-Models.jpg?tx=w_1920,q_auto"
    }
]

export const features = [
    {
        id:1,
        icon: MdOutlineCategory,
        title:"Find talent in every category",
        desc:"Access talented freelancers worldwide for any task, tailored to your budget."
    },
    {
        id:2,
        icon: MdOutlinePriceCheck,
        title:"Simple, straightforward pricing",
        desc:"Only pay once the job has been completed to your satisfaction."
    },
    {
        id:3,
        icon: FaShippingFast,
        title:"Get work done quickly and easily",
        desc:"Under pressure to get something done? Filter for freelancers who can work now."
    },
    {
        id:4,
        icon: BiSupport,
        title:"Incredible customer support",
        desc:"Our team of dedicated support specialists is here to help you 24/7."
    },
]

export const popularFreelancers = [
    {
        id:1,
        profileImage:"https://randomuser.me/api/portraits/women/79.jpg",
        fullName:"Sara Gauff",
        title:"SEO Audit"
    },
    {
        id:2,
        profileImage:"https://randomuser.me/api/portraits/men/32.jpg",
        fullName:"Micheal Turin",
        title:"App Development"
    },
    {
        id:3,
        profileImage:"https://randomuser.me/api/portraits/men/45.jpg",
        fullName:"Yun Lie",
        title:"Web Development"
    },
    {
        id:4,
        profileImage:"https://randomuser.me/api/portraits/women/3.jpg",
        fullName:"Lara Devin",
        title:"Social Media Marketing"
    },
    {
        id:5,
        profileImage:"https://randomuser.me/api/portraits/men/9.jpg",
        fullName:"Matteo Draper",
        title:"Video Editor"
    },
]