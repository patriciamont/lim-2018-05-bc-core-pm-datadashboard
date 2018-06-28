const resultCohortElement = document.getElementById('resultado');
const buttonElement = document.getElementById('boton');


const data = (idCohort) => {
    const dataCohortUrl = 'https://api.laboratoria.la/cohorts/';
    const dataUserUrl = 'https://api.laboratoria.la/cohorts/' + idCohort + '/users';
    const dataProgressUrl = 'https://api.laboratoria.la/cohorts/' + idCohort + '/progress';

    fetch(dataCohortUrl).then(response => {
        const responseCohort = response.json()
        fetch(dataUserUrl).then(response => {
            const responseUser = response.json()
            fetch(dataProgressUrl).then(response => {
                const responseProgress = response.json()

                Promise.all([responseCohort, responseUser, responseProgress])
                    .then(value => {

                        const responseCohortValue = value[0];
                        const responseUserValue = value[1];
                        const responseProgressValue = value[2];

                        const option = {
                            cohort: responseCohortValue,
                            cohortData: {
                                users: responseUserValue,
                                progress: responseProgressValue
                            },
                            orderBy: 'asc',
                            search: 'desc'
                        }
                        console.log(responseCohortValue);
                        console.log(responseUserValue);
                        console.log(responseProgressValue);
                        
                        dataUserStudents =  responseUserValue.filter(value=>{
                            return value.role === 'student';
                        })
                        //for (let i in responseProgressValue){
                        //    i[dataUserStudents]
                        //}

                        console.log(dataUserStudents);

                      
                        /*  const exercisesTotal = 0;
                          const exercisesCompleted = 0;
                          const exercisesPercent = 0;
                          const exercisesReads = 'intro'*/
                       // const courses = ['intro']




                        

                    })

            })
        })
    })
};



//Esto no se borra
let lista = document.getElementById('main');
let elementMain = lista;

let dataCohort = () => {
    fetch('https://api.laboratoria.la/cohorts/')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohort = json;

            for (let i = 0; i < cohort.length; i++) {
                const cohortId = cohort[i].id;
                //console.log(cohort)
                //const arrIdCohort = cohortId.split('-');

                //if (arrIdCohort[0] === sede) {
                    const cohortContent = document.createElement('div');
                    const paragraphContent = document.createElement('div');
                    const buttonContent = document.createElement('div');
                    const paragraph = document.createElement('p');
                    const button = document.createElement('button');
                    const paragraphText = document.createTextNode(cohortId);
                    const buttonText = document.createTextNode('Entrar')
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
        })

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



/*const table = document.getElementById("tablename");
const tableUsers = table;
const dataUsers = () => {
    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
        .then(response => {
            return response.json();
        })
        .then(users => {
            console.log(users);

            for (let i of users){
                console.log(i);
            }
            for (let i = 0; i < users.length; i++) {
                const nameUsers = users[i].name;
                console.log(nameUsers);
               
               // const tablename = document.createElement('table');
                const tblBody = document.createElement('tbody');
                for (let c = 0; c < users.length; c++) {
                    const tbr = document.createElement('tr');
                    for (let t = 0; i < users.length; i++) {
                        const celda = document.createElement('td');
                        const textoc = document.createTextNode( nameUsers);
                        celda.appendChild(textoc);
                        tbr.appendChild(celda);
                        tblBody.appendChild(tbr);
                        //tablename.appendChild(tblBody);
                        tableUsers.appendChild(tblBody);
                        btntabla.setAttribute('border', '2');
                    }
                }
            }
        })
      

    
}

const btntabla = document.getElementById("tabla");
btntabla.addEventListener('click', () => {
    dataUsers()
})}*/


/*
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

elementMain.addEventListener('click', (e) => {
    console.log(e.target.dataset.cohort);
    if (e.target.dataset.cohort === 'lim-2018-03-pre-core-pw') {
        elementMain.innerHTML = `<div>Hola Mundo ${e.target.dataset.cohort}</div>`;
    }
})
*/

/*
const datadash = (dd) => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then(function (responseCohort) {
            fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
                .then(function (responseUsers) {
                    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
                        .then(function (responseProgress) {
                            Promise.all([responseCohort.json(), responseUsers.json(), responseProgress.json()])
                                .then(data => {

                                    const [cohorts, users, progress] = data;
                                    dd(cohorts, users, progress);


                                    const option = {
                                        cohort: 0,
                                        cohorData: {
                                            users: 0,
                                            progress: 0,
                                        },
                                        orderBy: 'asc',
                                        search: 'desc'

                                    }
                                });
                        });
                });
        });
};
*/
