// Section
var box = document.getElementById("chl-box");
var user = document.getElementById("user");
var progress = document.getElementById("progress");
var category = document.getElementById("category");
var btnDeNuevo = document.getElementById("empezar-de-nuevo");

var myChallengeList = []; 

const showUser = () => {
    // Get user name
    let name = localStorage.getItem("userName");
    let info = `<h3 class="">Hola ${name}!</h3>`;

    user.innerHTML = info;
}

const showChallengeList = () => {
    if (localStorage.getItem("myChallenge") != undefined && localStorage.getItem("category") != undefined) {
        // Set category
        var info = ``;
        var myCategory = parseInt(localStorage.getItem("category"));
        if (myCategory == 1) {
            info = `<i class="bi bi-droplet-fill text-white" style="font-size: 20pt;"></i>
                    <i class="bi bi-droplet-fill text-white" style="font-size: 20pt;"></i>
                    <i class="bi bi-droplet-fill text-white" style="font-size: 20pt;"></i>`;
        } else if (myCategory == 2) {
            info = `<i class="bi bi-droplet-fill text-white" style="font-size: 20pt;"></i>
                    <i class="bi bi-droplet-fill text-white" style="font-size: 20pt;"></i>
                    <i class="bi bi-droplet text-white" style="font-size: 20pt;"></i>`;
        } else {
            info = `<i class="bi bi-droplet-fill text-white" style="font-size: 20pt;"></i>
                    <i class="bi bi-droplet text-white" style="font-size: 20pt;"></i>
                    <i class="bi bi-droplet text-white" style="font-size: 20pt;"></i>`;
        }
        category.innerHTML = info;
        // parse JSON
        myChallengeList = JSON.parse(localStorage.getItem("myChallenge"));
        if (myChallengeList.length > 0) {
            displayProgress();
            myChallengeList.forEach(x => {
                var info = `
                <div id="${x.id}" class="col-lg-4 col-md-6 col-sm-12 slow-fade" style="padding: 10px;">
                    <div class="card br-15">
                        <div class="card-body">
                            <div class="row no-gutters btn-format">
                                <div class="col-4" style="justify-content: center;">
                                    <img src="${x.img}" class="img-semi-full">
                                </div>
                                <div class="col-8">
                                    <h4>${(x.challenge == null)?'':x.challenge}</h4>
                                    ${(x.detail == null)?'':'<p class="challenge-text">'+x.detail+'</p>'}`;
                                if (x.completed) {
                                    info += `<button class="btn-reto-success">
                                                <i class="bi bi-check"></i>
                                                Reto completado
                                            </button>`;
                                } else {
                                    info += `<button class="btn-reto" onclick="completeChallenge(${x.id})">
                                                <i class="bi bi-check"></i>
                                                Completar reto
                                            </button>`;
                                }
                                info += `
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                box.insertAdjacentHTML('beforeend', info);
            });
        } else {
            window.location.assign("index.html");
        }
    } else {
        window.location.assign("index.html");
    }
}

const completeChallenge = (challengeId) => {
    setTimeout(() => {
        // get element 
        let tmpChallenge = myChallengeList.find(x => x.id == challengeId);
        let index = myChallengeList.indexOf(tmpChallenge);
        // remove element
        document.getElementById(challengeId).remove();
        // update status in tmp var
        myChallengeList[index].completed = true;
        // add element
        addChallenge(challengeId);
        // order elements
        myChallengeList.splice(index, 1);
        myChallengeList.push(tmpChallenge);
        // calculate advance
        displayProgress();
        // update storage
        updateStorage();
    }, 200);
}

const displayProgress = () => {
    // Check progress
    let pro = 0;
    myChallengeList.forEach(x => {
        if (x.completed) {
            pro += 10;
        }
        if (pro == 100) {
            addAlert();
            btnDeNuevo.style.display = "inline";
        }
    });
    progress.innerHTML = `${pro}%`;
}

const addChallenge = (challengeId) => {
    let tmpChallengeList = myChallengeList.filter(x => x.id == challengeId);
    tmpChallengeList.forEach(x => {
        var info = `
        <div id="${x.id}" class="col-lg-4 col-md-6 col-sm-12 slow-fade" style="padding: 10px;">
            <div class="card br-15">
                <div class="card-body">
                    <div class="row no-gutters">
                        <div class="col-4" style="justify-content: center;">
                            <img src="${x.img}" class="img-semi-full">
                        </div>
                        <div class="col-8">
                            <h4>${(x.challenge == null)?'':x.challenge}</h4>
                            ${(x.detail == null)?'':'<p>'+x.detail+'</p>'}`;
                        if (x.completed) {
                            info += `<button class="btn-reto-success">
                                        <i class="bi bi-check"></i>
                                        Reto completado
                                    </button>`;
                        } else {
                            info += `<button class="btn-reto" onclick="completeChallenge(${x.id})">
                                        <i class="bi bi-check"></i>
                                        Completar reto
                                    </button>`;
                        }
                        info += `
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        box.insertAdjacentHTML('beforeend', info);
    });
}

const updateStorage = () => {
    // delete
    localStorage.removeItem("myChallenge");
    // save
    let myChallengeListString = JSON.stringify(myChallengeList);
    localStorage.setItem("myChallenge", myChallengeListString);
}

const share = (socialNetwork) => {
    // Share on social media
    var url = "https://smallactionsbigchanges.github.io/SmallActionsBigChanges/app/";   
    switch (socialNetwork) {
        case 1:
            window.open("https://api.whatsapp.com/send?text=He completado este increíble reto, ¿te animas a intentarlo? " + url);
            break;
        case 2:
            window.open("fb-messenger://share/?link=" + url);
            break;
        case 3:
            window.open("https://twitter.com/intent/tweet?text=He completado este increíble reto, ¿te animas a intentarlo?&url=" + url);
            break;
        default:
            break;
    }
}
