import { Link } from "react-router-dom";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { AlignJustifyIcon, Github, Home, Lightbulb, X } from "lucide-react";
import { useState } from "react";


export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
       
    }

    return (
        <Card className="w-full p-6 flex items-center justify-between lg:justify-around bg-transparent rounded-none ">
            <Logo />

            <nav 
                className="hidden lg:flex items-center justify-center gap-6 p-1 rounded-md bg-transparent border-yellow-default"
            >
                <Link to={"/"} className="flex items-center"> 
                    <Button variant={"link"} className="flex items-center gap-1 text-gray-400 text-base hover:text-gray-300">
                        <Home size={20} />
                        Home
                    </Button>
                </Link>

                <Link to={"/ideas"} className="flex items-center"> 
                    <Button variant={"link"} className="flex items-center gap-1 text-gray-400 text-base hover:text-gray-300">
                        <Lightbulb size={20} />
                        Ideias
                    </Button>
                </Link>

                <a href="https://github.com/arthurmousinho" target="_blank" className="flex items-center">
                    <Button variant={"link"} className="flex items-center gap-1 text-gray-400 text-base hover:text-gray-300">
                        <Github size={20} />
                        GitHub
                    </Button>
                </a>

            </nav>


            <AlignJustifyIcon size={30} className="lg:hidden cursor-pointer" onClick={toggle}/>
            
            {
                isOpen ? (
                    <nav 
                        className="flex fixed w-[50vw] h-[100vh] top-0 right-0 z-50 bg-gray-950 
                        flex-col items-center gap-10 pt-10 px-6rounded"
                    >
                        <X size={30} onClick={toggle} className="cursor-pointer"/>
                        <Link to={"/"} className="flex items-center gap-2"> 
                            <Button variant={"link"} className="flex items-center gap-1 text-gray-400 text-base hover:text-gray-300">
                                <Home size={20} />
                                 Home
                            </Button>
                        </Link>
                        <Link to={"/ideas"}> 
                            <Button variant={"link"} className="flex items-center gap-1 text-gray-400 text-base hover:text-gray-300">
                                <Lightbulb size={20} />
                                Ideias
                            </Button>
                        </Link>

                        <a href="https://github.com/arthurmousinho" target="_blank" >
                            <Button variant={"link"} className="flex items-center gap-1 text-gray-400 text-base hover:text-gray-300">
                                <Github size={20} />
                                Créditos
                            </Button>
                        </a>
                        
                    </nav>
                ): <></>
            }
           
        
        </Card>
    )
}