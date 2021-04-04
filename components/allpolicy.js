import { Table } from 'antd';
import React, {useState} from 'react'
import {EditOutlined,CheckCircleTwoTone, CloseCircleTwoTone} from '@ant-design/icons'
import {Button} from 'antd'
import axios from 'axios'

const AllPolicy=(props)=>{
    const [data,setData]=useState(props.allpolicy.results)
    const [paginationdata, setPaginationData]=useState([props.allpolicy.count,props.allpolicy.next, props.allpolicy.previous,1])
    const fetchandset=async(url)=>{
        await axios.get(url).then(res=>{
            console.log(res.data)
            setData(res.data.results)
            let pagenum=1
            const next=res.data.next
            const prev=res.data.previous
            if(res.data.next){
                pagenum=next.substring(next.indexOf('?page='),next.length).match(/\d+/g)
                pagenum=pagenum-1
            }
            else{
                pagenum=prev.substring(prev.indexOf('?page='),prev.length).match(/\d+/g)
                pagenum=Number(pagenum)+1
            }
            setPaginationData([res.data.count,next,prev,pagenum])
        })
    }
    const handleClick=(val)=>{
        if(val===1){
            fetchandset(paginationdata[1])
        }
        if(val===-1){
            fetchandset(paginationdata[2])
        }
    }
return(
    <div id="allpolicydata">
        <div id="controlbtns">
            {paginationdata[1]?<Button onClick={()=>handleClick(1)}>Next</Button>:<Button disabled>Next</Button>}
            <h5>Page {paginationdata[3]} of {Math.ceil(paginationdata[0]/15)}</h5>
            {paginationdata[2]?<Button onClick={()=>handleClick(-1)}>Previous</Button>:<Button disabled>Previous</Button>}
        </div>
    <table id="allpolicydata">
        <thead>
            <tr>
          <th>Policy</th>
          <th>Body Injury Liability</th>
          <th>Collision</th>
          <th>Comprehensive</th>
          <th>Personal Injury Protection</th>
          <th>Property Damage Liability</th>
            </tr>
        </thead>
        <tbody id="allpolicydata">
            {data.map(val=>{
                return (
                    <tr key={val.id} id="allpolicydata">
            <td id="allpolicydata">{val.Policy_id}</td>
            <td id="allpolicydata" >{val.bodily_injury_liability?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="allpolicydata" >{val.collision?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="allpolicydata" >{val.comprehensive?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="allpolicydata" >{val.personal_injury_protection?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            <td id="allpolicydata" >{val.property_damage_liability?<CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#e07169" />}</td>
            
                    </tr>)
            })}
        </tbody>
    </table>
    </div>
    )

}

export default AllPolicy