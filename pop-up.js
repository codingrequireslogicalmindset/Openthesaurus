function renderPopUp(i) {
    return `
    <div class="pop-up d-none" id="popUp${i}">
        <div class="card-box-total">
            <div class="pop-Up-Pic">
                <div id="boxColor${i}" class="card-box1">
                <h2 class="pokemon-Name-Main-Paige" id="pokename${i}">#${currentPokemon.id} ${capitalizeFirstLetter(currentPokemon.name)}</h2>
                <img class="card-box-poke-pic" id="pokePic${i}" src="${currentPokemon["sprites"]['other']['official-artwork']['front_default']}">
                ${checkType(i)}
            </div>
            <div class="card-box2">
                <div class="card-box2-nav">
                    <div id="nav-sections${i}" class="nav-sections">
                        <b><span onclick="about(${i})" class="nav-section">About</span></b>
                        <b><span onclick="baseStats(${i})" class="nav-section">Base Stats</span></b>
                        <b><span onclick="evolution()" class="nav-section">Evolution</span></b>
                        <b><span onclick="moves()" class="nav-section">Moves</span></b>
                    </div>
                    <div id="test(${i})">  
                    <div class="about" id="progressBarBox${i}">
                        <span>Weight in hg (hectograms)</span>
                        <span><b>${currentPokemon['weight']}</b></span>
                        <div>
                            <div id="progressBar${i}" style="width: 69%"></div>
                        </div>  
                    </div>
                    <div class="about" id="progressBarBox${i}">
                        <span>Height in dm (decimetres)</span>
                        <span><b>${currentPokemon['height']}</b></span>
                        <div>
                            <div id="progressBar${i}" style="width: 7%;"></div>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>HP</td>
                            <td><b>${currentPokemon['stats']['0']['base_stat']}</b></td>
                            <td style="width:100%;">
                                <div class="progress-bar-box">
                                    <div class="progress-bar" id="progressBar" style="width:${currentPokemon['stats']['0']['base_stat']}%;"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td><b>${currentPokemon['stats']['1']['base_stat']}</b></td>
                            <td style="width:100%;">
                                <div class="progress-bar-box">
                                    <div class="progress-bar" id="progressBar" style="width:${currentPokemon['stats']['1']['base_stat']}%;"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td><b>${currentPokemon['stats']['2']['base_stat']}</b></td>
                            <td style="width:100%;">
                                <div class="progress-bar-box">
                                    <div class="progress-bar" id="progressBar" style="width:${currentPokemon['stats']['2']['base_stat']}%;"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Sp.Attack</td>
                            <td><b>${currentPokemon['stats']['3']['base_stat']}</b></td>
                            <td style="width:100%;">
                                <div class="progress-bar-box">
                                    <div class="progress-bar" id="progressBar" style="width:${currentPokemon['stats']['3']['base_stat']}%;"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Sp.Defense</td>
                            <td><b>${currentPokemon['stats']['4']['base_stat']}</b></td>
                            <td style="width:100%;">
                                <div class="progress-bar-box">
                                    <div class="progress-bar" id="progressBar" style="width:${currentPokemon['stats']['4']['base_stat']}%;"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td><b>${currentPokemon['stats']['5']['base_stat']}</b></td>
                            <td style="width:100%;">
                                <div class="progress-bar-box">
                                    <div class="progress-bar" id="progressBar" style="width:${currentPokemon['stats']['5']['base_stat']}%;"></div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </div>
                </div>        
                <div class="btn_nav">
                    <button onclick="imgSlideBackwards(${i})"><img src="./img/arrow-left.png">
                    <button onclick="closePopUp(${i})" class="btn_style"><img class="close-btn" src="./img/close-window.png"></button>
                    <button onclick="imgSlide(${i})"><img src="./img/arrow-right.png"></button>
                </div>
            </div>
        </div>
   </div>`;
}

function about(i) {
    console.log("Test");
    // document.getElementById('container').innerHTML = openPopUp(i);
    document.getElementById(`test(${i})`).innerHTML = '';
    document.getElementById(`test(${i})`).innerHTML += `
    <div class="about" id="progressBarBox${i}">
        <span>Weight in hg (hectograms)</span>
        <span><b>${currentPokemon['weight']}</b></span>
        <div>
            <div id="progressBar${i}" style="width: 69%"></div>
        </div>  
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Height in dm (decimetres)</span>
        <span><b>${currentPokemon['height']}</b></span>
        <div>
            <div id="progressBar${i}" style="width: 7%;"></div>
        </div>
    </div>`;
}

function baseStats(i) {
    console.log("Test");
    document.getElementById(`test(${i})`).innerHTML = '';
    document.getElementById(`test(${i})`).innerHTML += `
    <table>
        <tr>
            <td>HP</td>
            <td><b>${currentPokemon['stats']['0']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemon['stats']['0']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Attack</td>
            <td><b>${currentPokemon['stats']['1']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemon['stats']['1']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Defense</td>
            <td><b>${currentPokemon['stats']['2']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemon['stats']['2']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Sp.Attack</td>
            <td><b>${currentPokemon['stats']['3']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemon['stats']['3']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Sp.Defense</td>
            <td><b>${currentPokemon['stats']['4']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemon['stats']['4']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Speed</td>
            <td><b>${currentPokemon['stats']['5']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemon['stats']['5']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
    </table>`;
}
