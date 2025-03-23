import * as C from './styles'
import {Theme} from '../../components/Theme/intex'
import {Link, useHistory} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect} from 'react'

export const FormStep4 = () => {
    const {state,dispatch} = useForm()
    const history = useHistory()
    const handleNextStep = () =>{
        history.push('/step5')
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ startLanguageMarketIndex : state.startLanguageMarketIndex , 
                                   stopLangauageMarketIndex : state.stopLanguageMarketIndex
            })
        };
         
        console.log(requestOptions.body);
        fetch('http://localhost:8090/api/languageMarket', requestOptions)
            .then(response => response.json())
    }

    const handleStartLanguageMarketIndexIndexChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setStartLanguageMarketIndex,
            payload: e.target.value
        })
    }

    const handleStopLanguageMarketIndexChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setStopLanguageMarketIndex,
            payload: e.target.value
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
        <h2>Language Market Configuration</h2>
                
                <label>Start Index</label>
                <input  
                type="number" 
                onChange={handleStartLanguageMarketIndexIndexChange}
                name="startLanguageMarketIndex"
                />

                <label>Stop Index</label>
                <input  
                type="number" 
                onChange={handleStopLanguageMarketIndexChange}
                name="stopLanguageMarketIndex"
                />
                
                <div>
                    <Link to='/step3'>Previous</Link>
                    <button onClick={handleNextStep}>Next</button>
                </div>
             

        </C.Container>
    </Theme>
    )
}