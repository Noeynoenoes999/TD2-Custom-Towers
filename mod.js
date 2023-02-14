setInterval(function () {
    // Basic image/text replacement
    let parrotImages = document.querySelectorAll('[src=""]');
    for (i = 0; i < parrotImages.length; i++) {
        let image = parrotImages[i]
        image.src = "";
    }

    let featherImages = document.querySelectorAll('[src=""]');
    for (i = 0; i < featherImages.length; i++) {
        let image = featherImages[i]
        image.src = "";
    }

    let birdNest = document.querySelectorAll('[innerHTML="Bird Nest"]');
    for (i = 0; i < birdNest.length; i++) {
        let text = birdNest[i]
        text.innerHTML = "AC-130 Gunship Base";
    }

    let birdNestDesc = document.querySelectorAll('[innerHTML="Creates birds that fly around and throw feathers."]');
    for (i = 0; i < birdNestDesc.length; i++) {
        let text = birdNestDesc[i]
        text.innerHTML = "Allows close air support by getting AC-130's in the air, firing 120mm Howitzer shells.  The night vision capabilities allow ghost detection.";
    }
    // Basic image/text replacement

    ///////////////////////////////////

    // Stat modification

    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
        console.log(tower)
        
        tower.stats.dmg = 1e6;
        tower.stats.fireRate = 50;
        tower.stats.ghostDetect = true;
        tower.stats.maxTargets = 1e6;
        tower.stats.numProjectiles = 100;
        tower.stats.range = 100;
    });

    // Stat modification
})