import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {Link, useHistory} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect} from 'react'

export const FormStep3 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleNextStep = () =>{
        history.push('/step4')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ startCellFieldTranslationIndex : state.startCellFieldTranslationIndex , 
                stopCellFieldTranslationIndex : state.stopCellFieldTranslationIndex,
                cellFieldIndex : state.cellFieldIndex
            })
        };
         
        console.log(requestOptions.body);
        fetch('http://localhost:8090/api/fieldTranslation', requestOptions)
            .then(response => response.json())

        
             
    }

    const handleStartCellFieldTranslationIndexChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setStartCellFieldTranslationIndex,
            payload: e.target.value
        })
    }

    const handleStopCellFieldTranslationIndexChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setStopCellFieldTranslationIndex,
            payload: e.target.value
        })
    }

    useEffect(()=>{
        if(state.treeNodeRowIndex == 0){
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }    
    },[])

    return(
        <Theme>
            <C.Container>
                
                <h2>Field Translation Configuration</h2>
                
                <label>Start Index</label>
                <input  
                type="number" 
                onChange={handleStartCellFieldTranslationIndexChange}
                name="startCellFieldTranslationIndex"
                />

                <label>Stop Index</label>
                <input  
                type="number" 
                onChange={handleStopCellFieldTranslationIndexChange}
                name="stopCellFieldTranslationIndex"
                />

                 

                
                <div>
                    <Link to='/step2'>Previous</Link>
                    <button onClick={handleNextStep}>Next</button>
                </div>

            </C.Container>
        </Theme>
    )
}