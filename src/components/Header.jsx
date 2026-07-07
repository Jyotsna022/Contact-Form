// import React from 'react';
import Logo from "./logo";


// export default function Navbar() {
//   return (
//    <navbar className="bg-pink-50 flex sticky top-0 mx-auto  w-full items-center">



//    </navbar>
//   )
// }

const Header = () => {
    return(
        <header className="bg-pink-50 sticky top-0 z-0" >
         <Logo/>
         <h1>Header</h1>    
        </header>
    );
};

export default Header;

