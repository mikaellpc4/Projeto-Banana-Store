import { useParams } from "react-router-dom"

export function Profile(){
    let { username } = useParams();
    return <h1> Bem vindo, {username} </h1>
}