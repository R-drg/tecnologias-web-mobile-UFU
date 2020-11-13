import { useEffect, useState } from "react";

function Aluno(props) {

    const media = ((props.nota_1+props.nota_2+props.nota_3+props.nota_4)/4);

    const resultado = (media) => {
        if (media>60){
            return <td style={{color:"#62a388"}}>Aprovado</td>
        }
        return <td style={{color:"#ca3e47"}}>Reprovado</td>
    }

    return(


        <tr>
            <td>{props.nome}</td>
            <td>{props.nota_1}</td>
            <td>{props.nota_2}</td>
            <td>{props.nota_3}</td>
            <td>{props.nota_4}</td>
            <td>{media}</td>
            {resultado(media)}
        </tr>
    
    )

}

export default Aluno