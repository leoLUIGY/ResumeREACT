import React from 'react';
import '../App.css';

const Education = () =>{
    return(
        
        <div>
            <div>
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="sectionRightDiv">
                <h2>EDUCAÇÃO</h2>
                <hr/>
                <h3>TECNOLOGO</h3>
                <h3 className="h3">FATEC (FACULDADE DE TECNOLOGIA)</h3>
                <p> 
                Jogos Digitais na Fatec de Carapicuíba(6º Semestre atualmente) tem como foco
                    a programação voltada para jogos digitais, tanto para celular quanto para computadores, 
                além de incluir documentação (GDD), engenharia de software, inglês etc.
                </p>
                <p>
                A cada semestre é desenvolvido projetos (jogos) no qual é abordada uma 
                linguagem de programação especifica além da documentação e conteúdo das matérias 
                respectivas ao semestre. </p>
                <p>2017 - 2021</p>
            </div>
        </div>
    
    )
}
export default Education;