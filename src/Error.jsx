import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import { BiSolidError } from "react-icons/bi";

function Error({width, limit, handleMobileOptions, showOptions}){
    return(
        <>
        
        {width < limit ? 
        <MobileHeader 
        handleMobileOptions={handleMobileOptions}
        showOptions={showOptions}
        /> : <Header/>}

        <div className='ErrorLogo'>

            <BiSolidError></BiSolidError>
            <div className='ErrorText1'>
                <h1>This quiz seems to not exist.</h1>
            </div>
            <div className='ErrorText2'>
                <h1>Please return to our homepage</h1>
            </div>
            
        </div>

        

        </>
    )
}

export default Error