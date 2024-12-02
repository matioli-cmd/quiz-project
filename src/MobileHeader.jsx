import { FaPlusSquare } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { GiWizardFace } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";

function MobileHeader({handleMobileOptions, showOptions}){
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
                        <Link className="linkDecoration" to={'/quiz-project/create'}>
                            <h1 className="MobileLink"><FaPlusSquare></FaPlusSquare>Create</h1>
                        </Link>
                        <Link className="linkDecoration"  to='/quiz-project/quizes'>
                            <h1 className="MobileLink"><FaPlay></FaPlay>My Quizes</h1>
                        </Link>
                       

                    </div>
                   

            </div>}
          

           

        </header>
    )
}

export default MobileHeader