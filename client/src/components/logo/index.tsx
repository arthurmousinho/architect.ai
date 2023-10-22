import { Link } from "react-router-dom";

export function Logo() {
    return (
        <Link to={"/"}>
            <h1 className="flex text-2xl lg:text-3xl text-gray-300 font-bold">
                architect.ai
            </h1>
        </Link>
    )
}