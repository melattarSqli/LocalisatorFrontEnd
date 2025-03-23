import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {useHistory} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect, useState} from 'react'
import { FormStep6 } from '../FormStep6'


export const FormStep5 = () => {
    const {state,dispatch} = useForm()
    const history = useHistory()
    
    const [name , setName ] = useState()
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setFile,
            payload: e.target.files?.[0]
        })
        //setName(e.target.files?.[0].name);
        console.log("File Name : " + name);
     }
    const data = new FormData();
    data.append('file', state.file);
    
    const handleNextStep = () =>{
        history.push('/step6')
        let data = new FormData();
    data.append('file', state.file);
    fetch('http://localhost:8090/api/files', {
      method: 'POST',
      body: data
    }) 

        
             
    }
    useEffect(()=>{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5
            })
    },[])
    return(
    <Theme>
        <C.Container>            
         <h2>Download Template</h2>
                <label>Download Template</label>
                <input onChange={handleFileChange} type="file"/>
                <div>
                    <button onClick={handleNextStep}>Submit</button>
                </div>
        </C.Container>
    </Theme>
    )
}