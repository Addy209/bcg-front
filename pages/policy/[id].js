import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Headr from '../../components/header'
import {api_urls} from '../../components/constants'
import axios from 'axios'
import Edit from '../../components/edit'


export const ComparePolicy=(props)=> {
  console.log("policy",props.policy)
  return (
    <>
    <Headr />
    <div className="editform" >
    <Edit val={props.policy} id={props.id} />
    </div>
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