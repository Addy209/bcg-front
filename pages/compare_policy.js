import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Headr from '../components/header'
import Complete from '../components/body'
import AllPolicy from '../components/allpolicy'
import {api_urls} from '../components/constants'
import axios from 'axios'
import header from '../components/header'
import Counter from '../components/counter'


export const ComparePolicy=(props)=> {
  console.log("All policy",props.allpolicy)
  return (
    <>
    <Headr />
    <div id="search_box">
    <Complete/>
    </div>
    <div>
    <Counter />
    </div>
    <div className="allpolicy">
        <AllPolicy allpolicy={props.allpolicy} />
      </div>
    </>
  )
}

export const getServerSideProps=async(context)=>{
      let propsdata=null
      await axios.get(api_urls.get_all_objects).then(res=>{
        propsdata=res.data
      })

      return{
        props:{"allpolicy":propsdata

        }
      }
}

export default ComparePolicy