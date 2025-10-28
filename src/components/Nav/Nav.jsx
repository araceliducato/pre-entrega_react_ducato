import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>

                </li>
                
                <li>
                    <Link to={"/category/alimentos"}>Alimentos</Link>
                </li>
                <li>
                    <Link to={"/category/juguetes"}>Juguetes</Link>
                </li>
                
            </ul>
        </nav>
    );    
};