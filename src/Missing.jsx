import Header from '/src/Header.jsx'
import MobileHeader from '/src/MobileHeader.jsx'
import { BiSolidError } from "react-icons/bi";

function Missing({width, limit, handleMobileOptions, showOptions}){
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
                <h1>Oops, look like we hit a roadblock!</h1>
            </div>
            <div className='ErrorText2'>
                <h1>Please return to our homepage</h1>
            </div>
            
        </div>

        

        </>
    )
}

export default Missing