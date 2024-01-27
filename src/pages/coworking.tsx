import { useParams } from "react-router-dom";
import Container from "../components/container";
import { useEffect, useState } from "react";

export default function Coworking() {
  const { id } = useParams();
  const [coworking, setCoworking] = useState()

  useEffect( ()=>{
    fetch(`/api/coworking/${id}`).then( (data)=>{
      setCoworking(data)
    })
  }, [id])

  return  (
    <Container>

    </Container>
    )
}