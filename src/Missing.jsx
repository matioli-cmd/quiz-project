import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import { BiSolidError } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Missing(){
    return(
        <>

        <div className='ErrorLogo'>

            <BiSolidError></BiSolidError>
            <div className='ErrorText1'>
                <h1>Oops, look like we hit a roadblock!</h1>
            </div>
            <div className='ErrorText2'>
                <h1>Please return to our <Link className='Link-homepage' to={'/quiz-project/'}>homepage</Link></h1>
            </div>
            
        </div>

        

        </>
    )
}

export default Missing