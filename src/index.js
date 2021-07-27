import './styles.scss';

import worlds from './data'



function returnedRandomIndex() {
    const lengthArrow = worlds.length
    const randomIndex = Math.floor(Math.random() * lengthArrow);
    return randomIndex
}

const randomIndex =  returnedRandomIndex()


function returdUkranianWorld() {
    const ua = worlds[randomIndex].uk
    return ua
}


function returdEnglishWorld() {
    const en = worlds[randomIndex].en
    return en
}


console.log(returdUkranianWorld());
console.log(returdEnglishWorld());


