import { FaPlusSquare } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { GiWizardFace } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";

function MobileHeader({handleMobileOptions, showOptions, loggedIn, handleLogOut}){
    return(
        <header className="Header">

        <Link to='/quiz-project'>
            
            <div className="Title_Logo">

                <h1 className="Title">Qwizly</h1>
                <GiWizardFace className="Logo"></GiWizardFace>

            </div>
                        
            
        </Link>

            <div>

                <FaBars onClick={handleMobileOptions} className="MobileBars"></FaBars>

                
            </div>

            {showOptions &&  
            
            <div className="Links">
                    
                    <div>
                    <Link className="linkDecoration"  to={`/quiz-project`}>
                            <h1 className="MobileLink"><RiHomeSmileFill/>Home</h1>
                        </Link>
                        
                        {loggedIn.Status &&  
                        <Link className="linkDecoration" to={'/quiz-project/create'}>
                            <h1 className="MobileLink"><FaPlusSquare></FaPlusSquare>Create</h1>
                        </Link>}
                        
                        {loggedIn.Status && <Link className="linkDecoration"  to='/quiz-project/quizes'>
                            <h1 className="MobileLink"><FaPlay></FaPlay>My Quizes</h1>
                        </Link>}

                        {!loggedIn.Status ? 
                     <Link className="linkDecoration"  to='/quiz-project/login'>
                       
                        <h1 className="MobileLink"><CgLogIn></CgLogIn>Login</h1>
                      
                      </Link>
                       
                    :  <Link className="linkDecoration"  to='/quiz-project/'>

                        <h1 className="MobileLink" onClick={handleLogOut}><CgLogOut></CgLogOut>Logout</h1>
                   
                        </Link>
                    }
                       

                    </div>
                   

            </div>}
          

           

        </header>
    )
}

export default MobileHeader