document.head.insertAdjacentHTML(
  "afterbegin",
  "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;\">"
);
setInterval(function () {
  // Basic image/text replacement
  let parrotImages = document.querySelectorAll('[src=""]');
  for (i = 0; i < parrotImages.length; i++) {
    let image = parrotImages[i];
    image.src = "";
  }

  let featherImages = document.querySelectorAll('[src=""]');
  for (i = 0; i < featherImages.length; i++) {
    let image = featherImages[i];
    image.src = "";
  }

  let birdNest = document.querySelectorAll('[innerHTML="Bird Nest"]');
  for (i = 0; i < birdNest.length; i++) {
    let text = birdNest[i];
    text.innerHTML = "AC-130 Gunship Base";
  }

  let birdNestDesc = document.querySelectorAll(
    '[innerHTML="Creates birds that fly around and throw feathers."]'
  );
  for (i = 0; i < birdNestDesc.length; i++) {
    let text = birdNestDesc[i];
    text.innerHTML =
      "Allows close air support by getting AC-130's in the air, firing 120mm Howitzer shells.  The night vision capabilities allow ghost detection.";
  }
  // Basic image/text replacement

  ///////////////////////////////////

  // Stat modification

  Object.values(
    document.querySelector("#app > div > div")
  )[1].children[0]._owner.stateNode.state.towers.forEach((tower) => {
    if (tower.type == "bird") {
      tower.birds.forEach((bird) => {
        // TODO:  Figure out how to load this image as blob or pregenerate it as a blob, otherwise figur eout how to spoof fetch request from the same domain
        fetch(
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d70657f-3b20-4cad-9f6b-63627fc690ce/d2n09gm-8e275865-1cf5-43b6-94c5-b1c4d66b0403.jpg/v1/fill/w_600,h_450,q_75,strp/ac_130_gunship_by_lemmonade_d2n09gm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDUwIiwicGF0aCI6IlwvZlwvOWQ3MDY1N2YtM2IyMC00Y2FkLTlmNmItNjM2MjdmYzY5MGNlXC9kMm4wOWdtLThlMjc1ODY1LTFjZjUtNDNiNi05NGM1LWIxYzRkNjZiMDQwMy5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.K1i3omtv0p6cCnmBrlezD_KW6VCvUqzQjQbD2TefonY"
        )
          .then(function (response) {
            return response.blob();
          })
          .then(function (blob) {
            bird.texture.source[0].source.src = blob;
          });
      });

      tower.stats.dmg = 150;
      tower.stats.fireRate = 7000;
      tower.stats.ghostDetect = true;
      tower.stats.maxTargets = 1;
      tower.stats.numProjectiles = 1;
      tower.stats.range = 2.5;
    }
  });

  // Stat modification
});
