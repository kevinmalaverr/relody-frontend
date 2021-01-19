import React, { useEffect } from 'react'

// Ciclo de vida de un componente usando useEffect

const Component = () => {

  // useEffect recibe una funcion que por defecto
  // se ejecutará cada vez que se renderice el componente
  useEffect(() => {
    console.log('componente renderizado')
  })

  return <h1>Hola mundo</h1>
}


// use Effect tambien puede recibir un segundo parametro
// el cual debe ser un array con los valores de los que depende el efecto
// así solo se ejecura cuando estos cambien

const Component = ({messagge = 'Hola Mundo'}) => {

  useEffect(() => {
    console.log(messagge)
  },[message])

  return <h1>{messagge}</h1>
}

// El array tambien puede estar vacio, de esta forma solo
// se ejecura cuando se monte el componente

const Component = ({messagge = 'Hola Mundo'}) => {

  useEffect(() => {
    console.log(messagge)

    // tambien podemos retornar una funcion la cual se ejecutará
    // cuando se demonte el componente
    return () => {
      console.log('componente desmontado')
    }
  },[])

  return <h1>{messagge}</h1>
}