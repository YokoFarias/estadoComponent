/* 2. Hobby
Crie outro componente chamado HobbyList, este componente deve receber 
a prop hobbies (uma lista de hobbies do usuário), renderize uma lista 
(ul) que exiba cada hobby como um item (li).
*/

/*
Texto Controlado
Crie um campo de entrada que exiba em tempo real o texto digitado.
Use o useState para controlar o valor. */
/*Contador 
Crie um botão que, ao ser clicado, mostre quantas vezes ele foi clicado.
*/

function HobbyList({ hobbies }) {
    return(
        <div>
        <h1>Lista hobbies do usuário</h1>
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>

        </div>
    )
}
export default HobbyList;
