import * as C from './styles'
import {useHistory, Link} from 'react-router-dom'
import { Theme } from '../../components/Theme/intex'
import { useForm, FormActions } from '../../context/FormContext'
import { ChangeEvent, useEffect } from 'react'

export const FormStep2 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleFieldRowIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setFieldRowIndex,
            payload: e.target.value 

        })
    }
    const handleCellFieldIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCellFieldIndex,
            payload: e.target.value 

        })
    }
    const handleValueFieldIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setValueFieldIndex,
            payload: e.target.value 

        })
    }

    const handleNextStep = () => {
        history.push('/step3')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cellTreeIndex : state.cellTreeIndex , 
                fieldRowIndex : state.fieldRowIndex,
                cellFieldIndex : state.cellFieldIndex,
                valueFieldIndex : state.valueFieldIndex
            })
        };
         
        console.log(requestOptions.body);
        fetch('http://localhost:8080/api/field', requestOptions)
            .then(response => response.json())
    }

    useEffect(()=>{
        if(state.treeNodeRowIndex == 0){
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }    
    },[])

     

    return(
        <Theme>
            <C.Container>
            <h2>Field Configuration</h2>

            <label>Field Row Index </label>
                <input 
                    type="number" 
                    onChange={handleFieldRowIndexChange}
                    />
            <label>Cell Field Index </label>
                <input 
                     
                    type="number" 
                    onChange={handleCellFieldIndexChange} 
                    />
             
            <label>Suggested Value Index </label>
                <input  
                    type="number" 
                    onChange={handleValueFieldIndexChange}
                     />

            <div>
                <Link to='/'>Previous</Link>
                <button onClick={handleNextStep}>Next</button>
            </div>


            </C.Container>
        </Theme>
    )
}