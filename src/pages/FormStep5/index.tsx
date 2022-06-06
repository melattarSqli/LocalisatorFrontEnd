import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {useHistory} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect} from 'react'

export const FormStep5 = () => {
    const {state,dispatch} = useForm()
    const history = useHistory()

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) =>{
        console.log("E Target Value : " + e.target.files?.[0])
        dispatch({
            type: FormActions.setFile,
            payload: e.target.files?.[0]
        })
    }

    const data = new FormData();
    data.append('file', state.file);
    
    const handleNextStep = () =>{
        history.push('/send')
        let data = new FormData();
    data.append('file', state.file);
    console.log("State : " + state.file);
    console.log("Data :  "); 
    console.log(data);
    fetch('http://localhost:8080/api/files', {
      method: 'POST',
      body: data
    }) 

        
             
    }
    useEffect(()=>{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
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