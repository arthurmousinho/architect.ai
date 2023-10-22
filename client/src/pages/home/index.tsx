import { Button } from "@/components/ui/button";
import hero from "../../assets/hero.svg";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <main className="flex items-center justify-center mt-10">

            <div className="flex flex-col gap-10 w-[90vw] sm:w-[700px] lg:items-start items-center">
                <h1 className="sm:text-[2rem] text-[1.6rem] lg:text-[2.5rem] font-bold leading-relaxed text-gray-300 lg:text-left text-center">
                    Permita que a inteligência artificial se torne sua parceira na busca por ideias para projetos inovadoras
                </h1>
                <Link to={"/ideas"}>
                    <Button className="w-[200px] h-12 text-lg">
                        Vamos lá
                    </Button>
                </Link>
            </div>

            <a href="https://storyset.com/home" target="_blank" className="lg:block hidden">
                <img src={hero} className="w-[35vw]" />
            </a>
        </main>
    )
}