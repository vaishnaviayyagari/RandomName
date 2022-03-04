const names =['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');
const section = document.querySelector('section');

function chooseName(){
    let random = Math.floor(Math.random()*names.length);
    console.log(names[random]);
}

section.innerHtml ='';
section.appendChild(para);

chooseName();
