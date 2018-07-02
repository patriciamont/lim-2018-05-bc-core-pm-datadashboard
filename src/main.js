/*const resultCohortElement = document.getElementById('resultado');
const buttonElement = document.getElementById('boton');
const resultUserElement=document.getElementById('tabla');

const showProcessedData = (resultProcessedData) => {


    for (objetUser of resultProcessedData) {
        const tabla = document.createElement("table");
        const tblBody = document.createElement("tbody");

        if (objetUser.role === 'student') {


            const fila = document.createElement('tr');

            const celda1 = document.createElement("td");
            const celda2 = document.createElement("td");
            const celda3 = document.createElement("td");
            const celda4 = document.createElement("td");
            const celda5 = document.createElement("td");


            const textoCelda1 = document.createTextNode(objetUser.name);
            celda1.appendChild(textoCelda1);

            const textoCelda2 = document.createTextNode(objetUser.stats.exercises.percent);
            celda2.appendChild(textoCelda2);

            const textoCelda3 = document.createTextNode(objetUser.stats.reads.percent);
            celda3.appendChild(textoCelda3);

            const textoCelda4 = document.createTextNode(objetUser.stats.quizzes.percent);
            celda4.appendChild(textoCelda4);

            const textoCelda5 = document.createTextNode(objetUser.stats.percent);
            celda5.appendChild(textoCelda5);


            tblBody.appendChild(celda1);
            tblBody.appendChild(celda2);
            tblBody.appendChild(celda3);
            tblBody.appendChild(celda4);
            tblBody.appendChild(celda5);
            tblBody.appendChild(fila);

            // fila.className('fileClass');
        }

        tabla.appendChild(tblBody);

        resultUserElement.appendChild(tabla);

        tabla.setAttribute("border", "1");
    }





};



const data = (idCohort) => {
    fetch('https://api.laboratoria.la/cohorts/').then(responseCohort => {

        fetch('https://api.laboratoria.la/cohorts/' + idCohort + '/users').then(responseUser => {

            fetch('https://api.laboratoria.la/cohorts/' + idCohort + '/progress').then(responseProgress => {

                Promise.all([responseCohort.json(), responseUser.json(), responseProgress.json()])
                    .then(value => {
                        const responseCohortValue = value[0];
                        const responseUserValue = value[1];
                        const responseProgressValue = value[2];


                        console.log(responseCohortValue);
                        console.log(responseUserValue);
                        console.log(responseProgressValue);

                        const dataCohortSelected = responseCohortValue.filter(cohort => cohort.id == idCohort)[0];
                        console.log(dataCohortSelected)


                        const options = {
                            cohort: dataCohortSelected,
                            cohortData: {
                                users: responseUserValue,
                                progress: responseProgressValue
                            },
                            orderBy: 'asc',
                            search: 'desc',
                            search: 'Margot'
                        };




                        const resultProcessedData = processCohortData(options);
                        console.log(resultProcessedData)

                        showProcessedData(resultProcessedData)



                        /*
                            const userStudent = user.filter(value => {
                                return value.role == 'student'
                            })


                        }*/

/*
                    })

            })
        })
    })
};




//Esto no se borra
let lista = document.getElementById('main');
let elementMain = lista;

let dataCohort = (sede) => {
    fetch('https://api.laboratoria.la/cohorts/')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohort = json;

            for (let i = 0; i < cohort.length; i++) {
                const cohortId = cohort[i].id;
                //console.log(cohort)
                const arrIdCohort = cohortId.split('-');

                if (arrIdCohort[0] === sede) {
                    const cohortContent = document.createElement('div');
                    const paragraphContent = document.createElement('div');
                    const buttonContent = document.createElement('div');
                    const paragraph = document.createElement('p');
                    const button = document.createElement('button');
                    const paragraphText = document.createTextNode(cohortId);
                    const buttonText = document.createTextNode('Entrar');
                    button.dataset.cohort = cohortId;
                    paragraph.appendChild(paragraphText);
                    paragraphContent.appendChild(paragraph);
                    cohortContent.appendChild(paragraphContent);

                    button.appendChild(buttonText);
                    buttonContent.appendChild(button);
                    cohortContent.appendChild(buttonContent);

                    elementMain.appendChild(cohortContent);
                    button.id=cohortId;


            }
        }})
    
}

buttonElement.addEventListener('click', () => { dataCohort(); });

resultCohortElement.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        console.log(event);
        const idCohort = event.target.id;
        console.log(event.target.id);
        resultCohortElement.style.display = 'none'
        data(idCohort);
    }
});



const btnLima = document.getElementById("botonlima");
const btnArequipa = document.getElementById("botonAqp");
const btnMexico = document.getElementById("botoncdm");
const btnChile = document.getElementById("botonsdc");
const btnSaoPaulo = document.getElementById("botonspl");

btnLima.addEventListener('click', () => {
    const valueBtnLima = btnLima.value;
    dataCohort(valueBtnLima)
    document.getElementById('btn-seat').style = 'display:none';
})
btnArequipa.addEventListener('click', () => {
    const valueBtnArequipa = btnArequipa.value;
    dataCohort(valueBtnArequipa)
    document.getElementById('btn-seat').style = 'display:none';
})

btnMexico.addEventListener('click', () => {
    const valueBtnMexico = btnMexico.value;
    dataCohort(valueBtnMexico)
    document.getElementById('btn-seat').style = 'display:none';
})
btnChile.addEventListener('click', () => {
    const valueBtnChile = btnChile.value;
    dataCohort(valueBtnChile)
    document.getElementById('btn-seat').style = 'display:none';
})
btnSaoPaulo.addEventListener('click', () => {
    const valueBtnSaoPaulo = btnSaoPaulo.value;
    dataCohort(valueBtnSaoPaulo)
    document.getElementById('btn-seat').style = 'display:none';
})
*/
elementMain.addEventListener('click', (e) => {
    console.log(e.target.dataset.cohort);
    if (e.target.dataset.cohort === 'lim-2018-03-pre-core-pw') {
        elementMain.innerHTML = `<div>Hola Mundo ${e.target.dataset.cohort}</div>`;
    }
})
