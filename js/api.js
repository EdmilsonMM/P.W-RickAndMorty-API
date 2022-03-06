/*const getNombre = (idPost)=>{
    fetch(url)
    .then(res => res.json())
    .then( data => console.log(data.))
}

getNombre(6)*/

/*
const getNombre = async (idPost)=>{
    const url = `https://jsonplaceholder.typicode.com/posts/${idPost}`
    try{
        const res = await axios(url)
        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)

        console.log(resUser.data.name)

    }catch(error){
        console.log(error)
    }
}

getNombre(80)
*/



let url1 ="https://rickandmortyapi.com/api/character"


const rick = async(url)=>{
    try{    
        const respu = await fetch(url)
        const data = await respu.json()
        const conten = data.results

        let personaje = ''
        const vivo = `<span class="vivo"></span>`
        const muerto = `<span class="muerto"></span>`
        const desconocido = `<span class="desconocido"></span>`

        for(let i = 0; i < conten.length ; i++){

            /*
            const ori = await fetch(`https://rickandmortyapi.com/api/location/${i}`)
            const dataOri = await ori.json()
            */

            if (conten[i].status == "Alive"){
                personaje += 
                `<div class="personajes">
                    <img src="${conten[i].image}">
                    <p>Nombre: ${conten[i].name}</p> 
                    <p>Especie : ${conten[i].species}</p>
                    <p>Estado : ${conten[i].status}  ${vivo}</p>
                    <p>Estado : ${conten[i].origin.name}</p>
                </div>
                `
                //console.log(dataOri[1].name)
            }else if(conten[i].status == "Dead") {
                personaje += 
                `<div class="personajes">
                    <img src="${conten[i].image}">
                    <p>Nombre: ${conten[i].name}</p> 
                    <p>Especie : ${conten[i].species}</p>
                    <p>Estado : ${conten[i].status}  ${muerto}</p>
                    <p>Estado : ${conten[i].origin.name}</p>
                </div>
                `
            }else if(conten[i].status == "unknown") {
                personaje += 
                `<div class="personajes">
                    <img src="${conten[i].image}">
                    <p>Nombre: ${conten[i].name}</p> 
                    <p>Especie : ${conten[i].species}</p>
                    <p>Estado : ${conten[i].status} ${desconocido}</p>
                    <p>Estado : ${conten[i].origin.name}</p>
                </div>
                `
            }
            
        }

        document.querySelector(".nombres").innerHTML = personaje

        console.log(conten)

    }catch(error){
        console.log(error)
    }
}

rick(url1)

const regresar = document.querySelector(".regresar")
const ver = document.querySelector(".vermas")

ver.addEventListener("click",()=>{
    let url2 = "https://rickandmortyapi.com/api/character?page=2"
    rick(url2)
    window.scrollTo({
        top:0
    })
})

regresar.addEventListener("click",()=>{
    let url2 = "https://rickandmortyapi.com/api/character?page=2"
    rick(url1)
    window.scrollTo({
        top:0
    })
    
})

