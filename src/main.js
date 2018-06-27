let lista = document.getElementById('main');
let elementMain = lista;

let dataCohort = () => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohort = json;

            for (let i = 0; i < cohort.length; i++) {

                const cohortContent = document.createElement('div');
                const paragraphContent = document.createElement('div');
                const buttonContent = document.createElement('div');
                const paragraph = document.createElement('p');
                const button = document.createElement('button');
                const paragraphText = document.createTextNode(cohort[i].id);
                const buttonText = document.createTextNode('Entrar')
                button.dataset.cohort = cohort[i].id;
                paragraph.appendChild(paragraphText);
                paragraphContent.appendChild(paragraph);
                cohortContent.appendChild(paragraphContent);

                button.appendChild(buttonText);
                buttonContent.appendChild(button);
                cohortContent.appendChild(buttonContent);

                elementMain.appendChild(cohortContent);


            }
        })

}
const cohorts = ['lim-2018-03', 'lim-2017-09', 'aqp-2017-01', 'gdl-2018-01'];
const sedesSelect = document.getElementById("sedes");




/*const populateSedesSelect = () => {
    cohorts.forEach(cohort => {
        console.log(cohort.split('-', 1));
        const optionSede=document.createElement('OPTION');
        optionSede.innerHTML=cohort;
        let attSedes=document.createAttribute("value");
        attSedes.value=cohort;
        optionSede.setAttributeNode(attSedes);
        sedes.appendChild(optionSede);
        console.log(cohort);
    })
}*/


/*
let btn = document.getElementById('btn-venues');
let btnSedes = btn;
 let btnCohort = () => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohort = json;

            for (let i = 0; i < cohort.length; i++) {

                const boxbtn = document.createElement('div');
                const btns = document.createElement('button');
                const btnText = document.createTextNode('click');
                btns.appendChild(btnText);
                boxbtn.appendChild(btns);
                btnSedes.appendChild(boxbtn);



            }
        })

}
*/






/*
const sedeLima=document.getElementById("lim");
const selectCohort='http://127.0.0.1:5500/data/cohorts.json'
const populateSedeLima=()=>{
    selectCohort.forEach(cohort=>{
        console.log(cohort.split('-',1));
    })

}*/

/*const btnLima = document.getElementById('botonlima');
btnLima.addEventListener('click', () => {dataCohort()
    document.getElementById('btn-venues').style = 'display:none';
   // document.getElementById('vacio').style = 'display:block';//
});
*/

/*elementMain.addEventListener('click', (e) => {
    console.log(e.target.dataset.cohort);
    if (e.target.dataset.cohort === 'lim-2018-03-pre-core-pw') {
        elementMain.innerHTML = `<div>Hola Mundo ${e.target.dataset.cohort}</div>`;
    }
})

*/


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
}

/*
botonUno = document.getElementById('click');
botonUno.addEventListener('click', () => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then((response) => {
            return response.json();

        })
        .then(json => {
            console.log

        })


})
*/