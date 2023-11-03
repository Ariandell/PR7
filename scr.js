const Sphere = document.createElement('div');
Sphere.id = 'sphere';
const AnsBlock = document.createElement('div');
AnsBlock.id = 'dm';
const answer = document.createElement('p');
answer.id = 'answer';
const divblock = document.createElement('div');
divblock.id = 'block';
const image = document.createElement('img');
image.src = './img/yyy.png';
const video = document.createElement('video');
video.src = '../1122.mp4';
const MegaBlock = document.createElement('div');
MegaBlock.id = 'MegaBlock';


const h1 = document.createElement('h1');
h1.textContent = 'Безкоштовна магічна Куля';

const quest = document.createElement('input');
quest.setAttribute('type', 'text');
quest.setAttribute('placeholder', 'Вопроси?');
quest.id = 'question';
const sphereContainer = document.createElement('div');
sphereContainer.id = 'sphere-container';

const button = document.createElement('button');
button.textContent = '$5';
button.onclick = () => {
    ask();
    rot();
};
MegaBlock.appendChild(divblock)
divblock.appendChild(h1);
divblock.appendChild(quest);
divblock.appendChild(button);
MegaBlock.appendChild(divblock)
Sphere.appendChild(image);
AnsBlock.appendChild(answer);
sphereContainer.appendChild(Sphere);
document.body.appendChild(MegaBlock);
document.body.appendChild(sphereContainer);
document.body.appendChild(AnsBlock);
const useless = [
    "ТАК :)",
    "НІ :(",
    "ЩО?",
    "можливо",
    "..."
  ];
  function ask() {
    const randomValue = Math.random() * 100; 
    const answer = document.getElementById('answer');
    if (randomValue < 10) {
      const ans = useless[Math.floor(Math.random() * useless.length)];
      answer.innerHTML = `<strong>${ans}</strong>`;
    } else {
      answer.innerHTML = 'Спробуй ще раз :)';
    }
}

let rotated = false
function rot(){
    const currentRotation = getComputedStyle(Sphere).getPropertyValue("transform"); 
      if (currentRotation === "none" || rotated === false) {
        Sphere.style.transform = "rotate(360deg)";
        rotated = true;
    } else {
        Sphere.style.transform = "rotate(0deg)";
        rotated = false;
    }    
};
