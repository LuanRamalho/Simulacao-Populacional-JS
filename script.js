let j = 0;
let anos = [];
let t_Asia = [], t_Africa = [], t_America = [], t_Europa = [], t_Oceania = [];
let p_Asia = [], p_Africa = [], p_America = [], p_Europa = [], p_Oceania = [];

function calcularPopulacao() {
    const ano = parseInt(document.getElementById('ano').value);
    const asia = parseFloat(document.getElementById('asia').value);
    const africa = parseFloat(document.getElementById('africa').value);
    const america = parseFloat(document.getElementById('america').value);
    const europa = parseFloat(document.getElementById('europa').value);
    const oceania = parseFloat(document.getElementById('oceania').value);

    const pAsia = parseFloat(document.getElementById('p_asia').value);
    const pAfrica = parseFloat(document.getElementById('p_africa').value);
    const pAmerica = parseFloat(document.getElementById('p_america').value);
    const pEuropa = parseFloat(document.getElementById('p_europa').value);
    const pOceania = parseFloat(document.getElementById('p_oceania').value);

    anos[j] = ano;
    t_Asia[j] = asia + (asia * pAsia) / 100;
    t_Africa[j] = africa + (africa * pAfrica) / 100;
    t_America[j] = america + (america * pAmerica) / 100;
    t_Europa[j] = europa + (europa * pEuropa) / 100;
    t_Oceania[j] = oceania + (oceania * pOceania) / 100;

    p_Asia[j] = pAsia;
    p_Africa[j] = pAfrica;
    p_America[j] = pAmerica;
    p_Europa[j] = pEuropa;
    p_Oceania[j] = pOceania;

    document.getElementById('result').innerHTML = `
        <div class="resultado">
            <p class="ano">Ano: ${anos[j]}</p>
            <p class="asia">Popula��o do Continente da �sia: ${t_Asia[j].toFixed(0)}</p>
            <p class="asia">Aumento/Dimuniu��o da Popula��o da �sia: ${p_Asia[j].toFixed(2)}%</p>
            <p class="africa">Popula��o do Continente da �frica: ${t_Africa[j].toFixed(0)}</p>
            <p class="africa">Aumento/Dimuniu��o da Popula��o da �frica: ${p_Africa[j].toFixed(2)}%</p>
            <p class="america">Popula��o do Continente da Am�rica: ${t_America[j].toFixed(0)}</p>
            <p class="america">Aumento/Dimuniu��o da Popula��o da Am�rica: ${p_America[j].toFixed(2)}%</p>
            <p class="europa">Popula��o do Continente da Europa: ${t_Europa[j].toFixed(0)}</p>
            <p class="europa">Aumento/Dimuniu��o da Popula��o da Europa: ${p_Europa[j].toFixed(2)}%</p>
            <p class="oceania">Popula��o do Continente da Oceania: ${t_Oceania[j].toFixed(0)}</p>
            <p class="oceania">Aumento/Dimuniu��o da Popula��o da Oceania: ${p_Oceania[j].toFixed(2)}%</p>
        </div>
    `;

    j++;
    document.getElementById('ano').value = ano + 10;
}

function exibirHistorico() {
    let historicoHTML = '';
    for (let a = 0; a < j; a++) {
        historicoHTML += `
            <div class="resultado">
                <p class="ano">Ano: ${anos[a]}</p>
                <p class="asia">Popula��o do Continente da �sia: ${t_Asia[a].toFixed(0)}</p>
                <p class="asia">Aumento/Dimuniu��o da Popula��o da �sia: ${p_Asia[a].toFixed(2)}%</p>
                <p class="africa">Popula��o do Continente da �frica: ${t_Africa[a].toFixed(0)}</p>
                <p class="africa">Aumento/Dimuniu��o da Popula��o da �frica: ${p_Africa[a].toFixed(2)}%</p>
                <p class="america">Popula��o do Continente da Am�rica: ${t_America[a].toFixed(0)}</p>
                <p class="america">Aumento/Dimuniu��o da Popula��o da Am�rica: ${p_America[a].toFixed(2)}%</p>
                <p class="europa">Popula��o do Continente da Europa: ${t_Europa[a].toFixed(0)}</p>
                <p class="europa">Aumento/Dimuniu��o da Popula��o da Europa: ${p_Europa[a].toFixed(2)}%</p>
                <p class="oceania">Popula��o do Continente da Oceania: ${t_Oceania[a].toFixed(0)}</p>
                <p class="oceania">Aumento/Dimuniu��o da Popula��o da Oceania: ${p_Oceania[a].toFixed(2)}%</p>
            </div>
        `;
    }
    document.getElementById('historico').innerHTML = historicoHTML;
}
