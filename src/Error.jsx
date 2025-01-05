import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import { BiSolidError } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Error({width, limit, handleMobileOptions, showOptions}){
    return(
        <>

        <div className='ErrorLogo'>

            <BiSolidError></BiSolidError>
            <div className='ErrorText1'>
                <h1>This quiz seems to not exist.</h1>
            </div>
            <div className='ErrorText2'>
                <h1>Please return to our <Link className='Link-homepage' to={'/quiz-project/'}>homepage</Link></h1>
            </div>
            
        </div>

        

        </>
    )
}

export default Error