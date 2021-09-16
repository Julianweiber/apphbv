import { useState,useEffect } from 'react'

const productos = [
{id:'01', name:'Chapa lisa', precio: 900, stock: 15 },
{id:'02', name:'Chapa negra', precio: 1200, stock:15},
{id:'03', name:'Chapa estampada', precio: 7000, stock:15},
{id:'04', name:'Caño redondo', precio:6000, stock:15},
{id:'05', name:'Caño cuadrado', precio:3000, stock:15},
{id:'06', name: 'Perfil cuadrado', precio:7600, stock:15},
{id:'07', name: 'Perfil angular', precio:1300, stock:15}

]

function getList () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => resolve(productos),2000)
    })
}
const ItemList = ()  => {
const [listProd, setListProd] = useState([])



useEffect(() => {
const list = getList()

list.then(list =>{
 setListProd(list)
})

}, [])

return (
    <div>
        <ul>
{ listProd.map(productos=><li key={productos.id}>{productos.name},Precio,{productos.precio},Stock,{productos.stock}</li>)}
        </ul>
    </div>
)

}

export default ItemList

