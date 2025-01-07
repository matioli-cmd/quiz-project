import { FaPlusSquare } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { GiWizardFace } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { MdPublic } from "react-icons/md";

function Header({loggedIn, handleLogOut}){

    return(
        <header className="Header">
            
            
            <div className="Title_Logo">

                <h1 className="Title">Qwizly</h1>
                <GiWizardFace className="Logo"></GiWizardFace>

            </div>
                        
           

            {loggedIn.Status && <div className="HeaderLinksItems">
                
           <Link className="linkDecoration" to={`/quiz-project`}>
                <div className="Link">
                
                    <RiHomeSmileFill></RiHomeSmileFill>
                    <h1>Home</h1>

                </div>
                </Link>


                {loggedIn.Status && <Link className="linkDecoration" to={'/quiz-project/create'}>
                <div className="Link">

                    <FaPlusSquare></FaPlusSquare>
                    <h1>Create</h1>

                </div>
                </Link>}

                {loggedIn.Status && <Link className="linkDecoration" to={'/quiz-project/public'}>
                <div className="Link">

                    <MdPublic></MdPublic>
                    <h1>Public Quizes</h1>

                </div>
                </Link>}

                {loggedIn.Status && <Link className="linkDecoration"  to='/quiz-project/quizes'>
                <div className="Link">

                    <FaPlay></FaPlay>
                    <h1>My Quizes</h1>
                    
                </div>
                </Link>}

                    {!loggedIn.Status ? 
                     <Link className="linkDecoration"  to='/quiz-project/login'>
                    <div className="Link">
                       
                        <CgLogIn></CgLogIn>
                        <h1>Login</h1>
                     </div>
                      </Link>
                       
                    :  <Link className="linkDecoration"  to='/quiz-project/login'>
                        <div className="Link" onClick={handleLogOut}> 
                        <CgLogOut></CgLogOut>
                        <h1>Logout</h1>
                        </div>
                        </Link>
                    }


                    
                
            </div>}
           

        </header>
    )
}

export default Header