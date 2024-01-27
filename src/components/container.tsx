import { HTMLAttributes } from "react"

type ContainerProps = HTMLAttributes<HTMLDivElement> 

export default function Container(props : ContainerProps)  {
    return <div className="max-w-7xl w-11/12 mx-auto"  {...props}></div>
}