import { FaPlusSquare } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { GiWizardFace } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import { CgLogIn } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { useRef } from "react";
import { useEffect } from "react";
import { MdOutlinePublic } from "react-icons/md";

function MobileHeader({handleMobileOptions, showOptions, setOptions, loggedIn, handleLogOut}){

    const dropdownRef = useRef()

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOptions(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [])
    
    return(
        <header className="Header">

            
            <div className="Title_Logo">

                <h1 className="Title">Qwizly</h1>
                <GiWizardFace className="Logo"></GiWizardFace>

            </div>
                        

            {loggedIn.Status && <div ref={dropdownRef}>

                <FaBars onClick={handleMobileOptions} className="MobileBars"></FaBars>

                
            </div>}

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

                        {loggedIn.Status &&  
                        <Link className="linkDecoration" to={'/quiz-project/public'}>
                            <h1 className="MobileLink"><MdOutlinePublic></MdOutlinePublic>Public Quizes</h1>
                        </Link>}
                        
                        {loggedIn.Status && <Link className="linkDecoration"  to='/quiz-project/quizes'>
                            <h1 className="MobileLink"><FaPlay></FaPlay>My Quizes</h1>
                        </Link>}

                        {!loggedIn.Status ? 
                     <Link className="linkDecoration"  to='/quiz-project/login'>
                       
                        <h1 className="MobileLink"><CgLogIn></CgLogIn>Login</h1>
                      
                      </Link>
                       
                    :  <Link className="linkDecoration"  to='/quiz-project/login'>

                        <h1 className="MobileLink" onClick={handleLogOut}><CgLogOut></CgLogOut>Logout</h1>
                   
                        </Link>
                    }
                       

                    </div>
                   

            </div>}
          

           

        </header>
    )
}

export default MobileHeader