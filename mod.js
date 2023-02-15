document.head.insertAdjacentHTML(
  "afterbegin",
  "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;\">"
);

function getElementsByText(str, tag = 'div') {
  return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
}

setInterval(function () {
  // Basic text replacement

  let unicorns = getElementsByText('Unicorn', 'div');
  for (i = 0; i < unicorns.length; i++) {
    let text = unicorns[i];
    text.textContent = "TOW Missile Base";
  } 

  let unicornsDesc = getElementsByText('Launch long-range auto-targeting missiles.', 'div');
  for (i = 0; i < unicornsDesc.length; i++) {
    let text = unicornsDesc[i];
    text.textContent = "The TOW missile system destroys target with a HEAT warhead.";
  } 


  let nests = getElementsByText('Bird Nest', 'div');
  for (i = 0; i < nests.length; i++) {
    let text = nests[i];
    text.textContent = "AC-130 Gunship Base";
  } 

  let nestsDesc = getElementsByText('Creates birds that fly around and throw feathers.', 'div');
  for (i = 0; i < nestsDesc.length; i++) {
    let text = nestsDesc[i];
    text.textContent = "Allows CAS with AC-130s, firing 120mm Howitzer shells.";
  } 
  // Basic image/text replacement

  ///////////////////////////////////

  // Stat modification

  Object.values(
    document.querySelector("#app > div > div")
  )[1].children[0]._owner.stateNode.state.towers.forEach((tower) => {
    if (tower.type == "bird") {
      tower.birds.forEach((bird) => {

        //bird.projectileType = "pig"

        const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
          const byteCharacters = atob(b64Data);
          const byteArrays = [];
        
          for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
        
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }
        
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }
        
          const blob = new Blob(byteArrays, {type: contentType});
          return blob;
        }

        let blob = b64toBlob("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAXgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xAA+EAABAwMCAwQHBAcJAAAAAAABAAIDBAUREiEGEzFBYXGhBxQiUYGRsRUyUvAWIyRCwdHhJjM2Q1NUZHSD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIxEv/aAAwDAQACEQMRAD8AvFERAREQFwTgLlYl2mNPbKuYDeOF7h8AUGB+lFlLi0VzCWnc6XY+eMLcg5CpaHaEZ3x5q5oH8yGN+Mamg48QqsxkuvRERS0REQEREBERAWj4yqY4OH6tpkYHyMDGtJ3OTg4HhlbxQz0hUtHFbo6gUsIqnzgc7QNf3XdvVbPSoTF/d+OforcttVDPBGyJ2XNY3U0gtI+B3VSQD9W389isrhiy0VtooaqBsz6iaFpfJLM6R24BIGo4aM42GBsFXaeW+RY9vrILjQ09bSP109RE2WJ+CNTHAEHB7ishQoREQEyhOOqre1cQ1xukT5ap76eSUZY8kgNcf4BbJrNWQiIsaKDekybDKGHI3L34+QH1Km0rXPjc1ryxxBAcACR37qsONoqmG7CKqrpKvEQczUwN5YJO23h3KufWXxqYQdDQPgpVRU/GVTbYH081C2mlhaWNNQ4ODCNv8vrjvUXjHst8VO+F7fc44KWqqK+H1QwhzaeJj9wW7Bxc4gYznYDce7ZV0yO3oyiqo+CLT61NHI11Ox0AZGWaIi0aWnJ3Pft1+JlKwLDWUtwslBW0EfLpKinjkhjwBoYWghuBsMDbCz1zUIiIMO8Ter2qsmHWOB7h8GlVLTghpAPu3Vl8YzNisFUzI1ytDGsyMuyQDj4ZVaMywEOHjuunCeluWup9bt9NUf6sTXb94WUq9tfEdVRUUdLE+m0szu+NxIySex3f7l7u4nuDm4FXTNP4hFv5lT81up2qz4/H9oz/ANZn1ctl9vXfTkVkDh3RtUfvHrlbVvq6qUTPLQ0aWgYaOwYHiq55srLWGxoyTgeCkds4avFVa4Z4L5HFFJHqZDyX+yPdnmY8vgo6zOehWyY+4Q00XqV0q6ctGdIl1NA640uyMfBb1N8ZEs9G1LLS8FWkTTyScymjla2QAcprmghgx2Ae/fdSdQMX+8/7iEf+YXeK/wB5Ds8yCTH7rmDHkQVHzVanKKJW3jemlrTRXOlmop8nluILmSgdoI6KVQyxzRiSJ7XsPRzTkFTjUM9K9qFVwzPcYpZ4qqhbrjMUpaHNLhqDgOu2T4qixdLkBhtdPjveV9K8V0xrOGbrTAZMtHK0DfrpOOi+f+HLQKoet1Lf2du7W/j/AKKuWV7W+w3u7Q09fNDdJockwSQxufuDuds4/itoKe4xNL301/eAMlz45QPIBXVw/Sijs1HBp0lsTdQ7zufMrYYT6pigjW1oGllDcSD+Jkp+qyqepqZSS92nGxaQcg94PRXoqz4//wARkf8AGZ9XKuetrLGljce36qO1nEMNNNJTxTmVzCWuydwR2KRMIz1OVM7Ld7HS2qmEzGCpijy4in31e/OPNbbjIrL7QuWsn7Prx2Ecl2D5L0jrLvJkQ2u4PIGcNp3k+QVvcD3g3zhe31ss7JaowMbVFpG0waNQIHQ5Ocd63uFP3VYqmy8E8RXGsiqbzNHb4I92MZiSU58h5+Csmz22G1UQpoHSvGouc+V2XOJ7T07uxZyKbdbjq9gewtcMggghVFaqDmV8NAxpwJGxua1v3Wg4PgrfXgyipY5ObHTQsk3OtsYB370lxmPYADoFyiLGuksjIo3SSODWNGST0AVW8aV9DcL2+S31TKjlxNZKWEkNO5x8irUIyoF6SaZjJaKZrWgua9riAN8EEZ+ZVc+sviLRgbHfqpjZrZwrVU1LTzWyhdWyxAuLomOc9+nLjnffqd1DoSNLT+eikNl4o4ZtNBGyGmpWVQiDZpYjEDI7tJOcnJyVXTOUx4VtjrPw7brdLoMtPTsZKY/ul4A1Ed2craqOej26OuvCFsnmfLJUNgZHPJI0jXIGjLgT97PvG2c96ka5qEREBERAREQFEvSNHrs8Eg/cnHb72lS1RTjazxTW6auE1WJYcPDBUPMZ3wcszjofLK2elQOADls2/OFatqjp5rPSFrInh0DAcAYPshVVDswduP5KyeHbK63/ALVNXT1UssYHtNaxoHXo0bnpuc93Uqu08s7h+2/Y9joLbzOaaSnZCZMY1lrQCcdmTutgiKFCIiAiIgIiICwL7Dz7NWxAZLoHgDGcnSVnrq9oexzXDIIwUFMQ7x7ducfJXJTNcyniY4Yc1gB+Sh36A6Zf1Vy0w9jTB7Q+OrHkpqOirq6yTHKIiloiIgIiICIiAiIgIiICIiAiIg//2Q==", "image/jpeg");
        let blobUrl = URL.createObjectURL(blob);

        bird.texture.source[0].source.src = blobUrl;

        // TODO:  Figure out how to load this image as blob or pregenerate it as a blob, otherwise figur eout how to spoof fetch request from the same domain
        // fetch(
        //   "https://i.ibb.co/Tbj1cHV/images.jpg"
        // )
        //   .then(function (response) {
        //     return response.blob();
        //   })
        //   .then(function (blob) {

        //   });
      });

      tower.stats.dmg = 160;
      tower.stats.fireRate = 5000;
      tower.stats.ghostDetect = true;
      tower.stats.maxTargets = 1;
      tower.stats.numProjectiles = 1;
      tower.stats.range = 3;
    } else if (tower.type == "dragon") {
      //Dragon turns into flamethrower
      tower.stats.dmg = 0.5;
      tower.stats.fireRate = 1;
      tower.stats.ghostDetect = false;
      tower.stats.maxTargets = 1000;
      tower.stats.numProjectiles = 1;
      tower.stats.range = 2
    } else if (tower.type == "unicorn") {
      //Dragon turns into TOW missile launcher
      tower.stats.dmg = 140;
      tower.stats.fireRate = 4500;
      tower.stats.ghostDetect = true;
      tower.stats.maxTargets = 1;
      tower.stats.numProjectiles = 1;
      tower.stats.range = 7.5;
    }
  });

  // Stat modification
});