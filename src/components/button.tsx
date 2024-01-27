import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
// import {twMerge}

type ButtonProps = HTMLAttributes<HTMLButtonElement> &{ 
 to?: string;
 children: ReactNode; /// buttonga atribut qoshish imkoniyati 
}

export default function Button({ to, ...props }: ButtonProps) {
    const classes= "text-center block py-4 px-6 bg-indigo-600 rounded-lg"
    const button =  <button className={classes} {...props}>Viev details</button>
    if (typeof to === "string") return <Link to={to}>{button}</Link>
    return button
}

