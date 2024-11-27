import { MdQuiz } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { FaPlusSquare } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { GiWizardFace } from "react-icons/gi";

function Header(){
    return(
        <header className="Header">

            <div className="Title_Logo">

                <h1 className="Title">Qwizly</h1>
                <GiWizardFace className="Logo"></GiWizardFace>

            </div>

            <div className="HeaderLinksItems">
                
                <div className="Link">

                    <h1>Create</h1>
                    <FaPlusSquare></FaPlusSquare>

                </div>

                <div className="Link">

                    <h1>My Quizes</h1>
                    <FaPlay></FaPlay>

                </div>

            </div>
           

        </header>
    )
}

export default Header