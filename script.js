const section = document.getElementById('section');
const galeria = document.getElementById('galeria');
const filtro = document.getElementById('filtro');
const boton = document.getElementById('boton').addEventListener('click', filtrarLista);

miGaleria = [
    {nombre: "playa1", 
    tamanio: 'grande',
    url: 'https://i.pinimg.com/564x/15/29/0b/15290bbc53d23acf89de16f6e8274473.jpg'},
    {nombre: "selva1", 
    tamanio: 'grande',
    url: 'https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg'},
    {nombre: "ciudad1", 
    tamanio: 'grande',
    url: 'https://www.trecebits.com/wp-content/uploads/2020/02/Google-Imagenes-manipuladas-1-800x445.jpg'},
    {nombre: "campo1", 
    tamanio: 'grande',
    url: 'https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg'},
    {nombre: "playa2", 
    tamanio: 'mediano',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfob4ojYVoLMuUn_CE8xlwMcVvGcKSlzqqFw&usqp=CAU'},
    {nombre: "selva2", 
    tamanio: 'mediano',
    url: 'https://www.muycomputer.com/wp-content/uploads/2021/02/android-12-1.jpg'},
    {nombre: "ciudad2", 
    tamanio: 'mediano',
    url: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_876/public/media/image/2019/05/more-details-android-q-googles-next-big-update-its-mobile-operating-system.jpg?itok=eot-UaIZ'},
    {nombre: "campo2", 
    tamanio: 'mediano',
    url: 'https://blog.movical.net/wp-content/uploads/2018/04/funciones-ocultas-de-Android-6.jpg'},
    {nombre: "playa3", 
    tamanio: 'pequeño',
    url: 'https://www.enter.co/wp-content/uploads/2015/08/Android-6.0-Marshmallow.jpg'},
    {nombre: "ciudad3", 
    tamanio: 'pequeño',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeHtCE29qqPM3_9BMPkEnzGPqMhniPclzzbtNbdfghceKGK6hrp7elPCr8RFqGfzDMqA&usqp=CAU'}
]


for(i=0;i<miGaleria.length;i++){
    let miUrl = miGaleria[i].url
    var nombre = 'imagen'+[i]
    var crearHijo = document.createElement('img')
    crearHijo.setAttribute('src', miUrl)
    crearHijo.setAttribute('id',nombre)
    section.appendChild(crearHijo)
    miGaleria[i].nombre = document.getElementById(nombre)
}


function filtrarLista(){
    for(i=0;i<miGaleria.length;i++){
        miGaleria[i].nombre.classList.remove('oculto')
    }
    let filtros = miGaleria.filter(x => x.tamanio != filtro.value)
    for(i=0;i<filtros.length;i++){
        filtros[i].nombre.classList.add('oculto')
    }
   filtro.value = '';
}