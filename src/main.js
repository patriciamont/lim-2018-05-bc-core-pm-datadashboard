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

let dataCohort = (sede) => {
    fetch('https://api.laboratoria.la/cohorts/')
        .then(response => {
            return response.json();
        })
        .then(json => {
            const cohort = json;
            console.log(cohort)
            for (let i = 0; i < cohort.length; i++) {
                const cohortId = cohort[i].id;
                const arrIdCohort = cohortId.split('-');
                console.log(arrIdCohort[0] === sede)

                if (arrIdCohort[0] === sede) {
                    const cohortContent = document.createElement('div');
                    const paragraphContent = document.createElement('div');
                    const paragraph = document.createElement('p');
                    const buttonContent = document.createElement('div');
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

                    cohortsSelectedElement.appendChild(cohortContent);

                    button.id = cohortId;
                    console.log(cohortId)
                }
            }
        })
}

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

                        const cohortSelected = responseCohortValue.filter(value => {
                            return value.id == idCohort
                        })
                        const dataCohortSelected = cohortSelected[0];

                        const courses = Object.keys(dataCohortSelected.coursesIndex);

                        console.log(courses)
                        const userStudent = user.filter(value => {
                            return value.role == 'student'
                        })


                        const option = {
                            cohort: courses,
                            cohortData: {
                                users: userStudent,
                                progress: responseProgressValue
                            },
                            orderBy: 'asc',
                            search: 'desc'
                        }
                        //console.log(responseCohortValue);
                        //console.log(responseUserValue);
                        //console.log(responseProgressValue);
                        //computeUserStats(responseUserValue,responseProgressValue,courses)
                        computeUserStats = (users, progress, courses) => {
                            const userStudent = user.filter(value => {
                                return value.role == 'student'
                            })

                            userStudent.map()

                        }
                    })
            })
        })
    })
};


btnLima.addEventListener('click', () => {
    const valueBtnLima = btnLima.value;

    dataCohort(valueBtnLima)
    document.getElementById('containersedes').style = 'display:none';
})

btnArequipa.addEventListener('click', () => {
    const valueBtnArequipa = btnArequipa.value;
    dataCohort(valueBtnArequipa)
    document.getElementById('containersedes').style = 'display:none';
})

btnMexico.addEventListener('click', () => {
    const valueBtnMexico = btnMexico.value;
    dataCohort(valueBtnMexico)
    document.getElementById('containersedes').style = 'display:none';
})
btnChile.addEventListener('click', () => {
    const valueBtnChile = btnChile.value;
    dataCohort(valueBtnChile)
    document.getElementById('containersedes').style = 'display:none';
})
btnSaoPaulo.addEventListener('click', () => {
    const valueBtnSaoPaulo = btnSaoPaulo.value;
    dataCohort(valueBtnSaoPaulo)
    document.getElementById('containersedes').style = 'display:none';
})

cohortsSelectedElement.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        const idCohort = event.target.id;
        console.log(event.target.id);
        resultCohortElement.style.display = 'none'
        data(idCohort);
    }
 });


//const redirection = document.getElementById('buttonenter');
//redirection.addEventListener('click', () => {
 //   window.location = "sedes.html";
//})

