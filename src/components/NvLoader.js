import React from 'react';
import { Spin } from 'antd';


const NvLoader = ({active,text,inContainer})=>{
    console.log(inContainer,active,text);
   
        if(inContainer){
            return (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
                        <Spin spinning={active} tip={text} /> 
                    </div>
                    )
    }else{
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
                <Spin spinning={active} tip={text} /> 
            </div>
        )
    }
}

export default NvLoader;

