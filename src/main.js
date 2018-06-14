const obtenerJson = () => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then((response) => {
            return response.json();
        }).then((jsonData) => {
            let cohort="";
            for (let i=0; i<jsonData.length; i++){
                cohort +=jsonData[i].id + "<br>";
        document.getElementById("mostrar").innerHTML=cohort;
            }
        })
};
document.getElementById('lista').addEventListener('click', obtenerJson);