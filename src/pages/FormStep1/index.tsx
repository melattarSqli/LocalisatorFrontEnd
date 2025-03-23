import * as C from './styles'
import {useHistory} from 'react-router-dom'
import { useForm, FormActions } from '../../context/FormContext'
import { Theme } from '../../components/Theme/intex'
import { ChangeEvent, useEffect } from 'react'


export const FormStep1 = () => {
    
    const history = useHistory()
    const { state, dispatch} = useForm()

    const handleTreeNodeRowIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTreeNodeRowIndex,
            payload: e.target.value 

        })
        
    }

    const handleCellTreeIndexChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCellTreeIndex,
            payload: e.target.value 

        })
    }


    
    const handleNextStep = () =>{
        if(state.treeNodeRowIndex !== 0 && state.cellTreeIndex !== 0) {
            history.push('/step2')
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ treeNodeRowIndex : state.treeNodeRowIndex ,
                                       cellTreeIndex : state.cellTreeIndex})
            };
             
            console.log(requestOptions.body);
            fetch('http://localhost:8090/api/treeNode', requestOptions)
                .then(response => response.json())
        } else{
            alert('fill in the data correctly')
        }

    }

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[])     
      
    return(
        <Theme>
            <C.Container>
                <h2>Tree Node Configuration</h2>
                <label>Tree Node Row Index </label>
                <input
                    type="number" 
                    onChange={handleTreeNodeRowIndexChange}
                    />

                <label>Cell Tree Node Index </label>
                <input 
                    type="number" 
                    onChange={handleCellTreeIndexChange}
                    />
                    
                <button onClick={handleNextStep}>Next</button>
                 
            </C.Container>
        </Theme>
    )
}
