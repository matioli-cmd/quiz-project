import { MdQuiz } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { GiWizardFace } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";

function Header(){
    return(
        <header className="Header">
            
            <Link to='/quiz-project'>
            
            <div className="Title_Logo">

                <h1 className="Title">Qwizly</h1>
                <GiWizardFace className="Logo"></GiWizardFace>

            </div>
                        
            
            </Link>
           

            <div className="HeaderLinksItems">
                
                <Link className="linkDecoration" to='/quiz-project'>
                <div className="Link">
                
                    <RiHomeSmileFill></RiHomeSmileFill>
                    <h1>Home</h1>

                </div>
                </Link>


                <Link className="linkDecoration" to={'/quiz-project/create'}>
                <div className="Link">

                    <FaPlusSquare></FaPlusSquare>
                    <h1>Create</h1>

                </div>
                </Link>

                <Link className="linkDecoration"  to='/quiz-project/quizes'>
                <div className="Link">

                    <FaPlay></FaPlay>
                    <h1>My Quizes</h1>
                    
                </div>
                </Link>

            </div>
           

        </header>
    )
}

export default Header