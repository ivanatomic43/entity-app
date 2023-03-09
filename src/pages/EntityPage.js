// ovo ce da se izlista u sidebar-u
// ovde izlistaj entitete dodatno stilizovano
import React from 'react'
import {useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Entity from '../components/Entity'
import useNavigation from "../hooks/use-navigation";

function EntityPage() {

  const { currentPath }  = useNavigation();
  const [pageTitle, setPageTitle] = useState('')

  useEffect(()=> {
    if(currentPath === '/'){
      setPageTitle("Employees")
    } else if(currentPath ==='/tasks'){
      setPageTitle("Tasks")
    }
  }, [currentPath])

  return (
    <div>
      <Entity pageTitle={pageTitle} />
    </div>
  )
}

export default EntityPage
