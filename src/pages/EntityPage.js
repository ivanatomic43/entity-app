import React from 'react'
import {useEffect, useState} from 'react'

import Entity from '../components/Entity'

import useNavigation from "../hooks/use-navigation";

function EntityPage() {

  const { currentPath }  = useNavigation();
  const [pageTitle, setPageTitle] = useState('')

  useEffect(()=> {
    if(currentPath === '/'){
      setPageTitle("Employee")
    } else if(currentPath ==='/tasks'){
      setPageTitle("Task")
    }
  }, [currentPath])

  return (
    <div>
      <Entity pageTitle={pageTitle} />
    </div>
  )
}

export default EntityPage
