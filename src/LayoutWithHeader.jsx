import { Outlet } from 'react-router-dom';
import Header from './Header'; 
import MobileHeader from './MobileHeader';

function LayoutWithHeader({loggedIn, handleMobileOptions, showOptions, width, limit, handleLogOut, setOptions}) {
    return (
        <div>
             {width < limit ? 
                    <MobileHeader 
                    handleMobileOptions={handleMobileOptions}
                    showOptions={showOptions}
                    loggedIn={loggedIn}
                    handleLogOut={handleLogOut}
                    setOptions={setOptions}
                    /> : <Header loggedIn={loggedIn} handleLogOut={handleLogOut}/>}
            <Outlet />
        </div>
    );
}

export default LayoutWithHeader;
