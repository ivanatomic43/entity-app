// objekat onoga sta cemo da kreiramo, prosledi mu ime i izlistaj kao rutu i u sidebar
// u zavisnosti od toga sta je entity, tako ce i izgledati stranica
// poenta je da bude reusable
// svaki sa strane sidebara ce da bude lista entiteta
// klikom na razlicit link, entitet ce primati razlicite propse i tako ce se stilizovati ova stranica
import React from 'react'

function Entity({pageTitle}) {
  return (
    <div>
      This is {pageTitle} page.
    </div>
  )
}

export default Entity
