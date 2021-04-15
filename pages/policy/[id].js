import Head from 'next/head'
import React,{useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'
import Headr from '../../components/header'
import {api_urls} from '../../components/constants'
import axios from 'axios'
import Edit from '../../components/edit'
import { useRouter } from 'next/router'
import {Skeleton} from 'antd'


export const ComparePolicy=(props)=> {
  const router=useRouter()
  const [loading,setloading]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[props.policy])

  const refreshPage=()=> {
    setloading(true)
    router.replace(router.asPath)
  }



  console.log("policy",props.policy)
  return (
    <>
    <Headr />
    {loading?<div className="skelton" >
    <Skeleton active />
    </div>:<div className="editform" >
    <Edit val={props.policy} id={props.id} refresh={refreshPage}/>
    </div>}
    
    </>
  )
}

export const getServerSideProps=async({params})=>{
      let propsdata=null
      const {id}=params
      await axios.get(api_urls.get_put_single_object+id).then(res=>{
        propsdata=res.data
      })

      return{
        props:{"policy":propsdata,
                "id":id

        }
      }
}

export default ComparePolicy