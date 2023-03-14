import React from 'react'
import {useEffect, useState} from 'react'

import Entity from '../components/Entity'

import useNavigation from "../hooks/use-navigation";

function EntityPage() {

  const { currentPath }  = useNavigation();
  const [pageTitle, setPageTitle] = useState('');

  let pageContent;

  useEffect(()=> {
    if(currentPath === '/'){
      setPageTitle("Employee")
    } else if(currentPath === '/products'){
      setPageTitle("Product")
    } else if(currentPath === '/tasks'){
      setPageTitle("Task")
    } else if (currentPath === '/orders'){
      setPageTitle("Order")
    }
  }, [currentPath])

  return (
    <div className=''>
      <Entity pageTitle={pageTitle} />
    </div>
  )
}

export default EntityPage
