import { createContext, ReactNode, useContext, useReducer } from 'react'

type State = {
    currentStep: number
    treeNodeRowIndex: number
    cellTreeIndex: number
    fieldRowIndex: number
    cellFieldIndex: number
    valueFieldIndex: number
    startCellFieldTranslationIndex: number
    stopCellFieldTranslationIndex : number
    startLanguageMarketIndex: number
    stopLanguageMarketIndex: number 
    file: any
}

type Action = {
    type: FormActions
    payload: any
}

type ContextType = {
    state: State 
    dispatch: (action: Action) => void

}

type FormProviderProps = {
     children: ReactNode
}

const initialData: State = {
    currentStep: 0,

    treeNodeRowIndex: 0,
    cellTreeIndex: 0,

    fieldRowIndex: 0,
    cellFieldIndex: 0,
    valueFieldIndex: 0,

    startCellFieldTranslationIndex: 0,
    stopCellFieldTranslationIndex: 0,

    startLanguageMarketIndex: 0,
    stopLanguageMarketIndex: 0,
    file: undefined
}

// Context API
const FormContext = createContext<ContextType | undefined>(undefined)

// Reducer

export enum FormActions {
    setCurrentStep,

    setTreeNodeRowIndex,
    setCellTreeIndex,

    setFieldRowIndex,
    setCellFieldIndex,
    setValueFieldIndex,

    setStartCellFieldTranslationIndex,
    setStopCellFieldTranslationIndex,

    setStartLanguageMarketIndex,
    setStopLanguageMarketIndex,
    setFile
}

const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep: 
            return {...state, 
                    currentStep: action.payload
                   }
        
        case FormActions.setTreeNodeRowIndex: 
            return {...state, treeNodeRowIndex: action.payload }
        case FormActions.setCellTreeIndex:
            return {...state, cellTreeIndex: action.payload}
        case FormActions.setFieldRowIndex: 
            return {...state, fieldRowIndex: action.payload}
        case FormActions.setCellFieldIndex:
            return {...state, cellFieldIndex: action.payload}
        case FormActions.setValueFieldIndex:
            return {...state, valueFieldIndex: action.payload }            
        case FormActions.setStartCellFieldTranslationIndex: 
            return {...state, startCellFieldTranslationIndex: action.payload}
        case FormActions.setStopCellFieldTranslationIndex:
            return {...state,stopCellFieldTranslationIndex: action.payload }
        case FormActions.setStartLanguageMarketIndex:
            return {...state,startLanguageMarketIndex: action.payload}
        case FormActions.setStopLanguageMarketIndex:
            return {...state,stopLanguageMarketIndex: action.payload}
        case FormActions.setFile:
            return {...state,file: action.payload}
        default:
            return state
        
    }

}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Hooks Context
export const useForm = () => {
    const context = useContext(FormContext)
    if(context === undefined) {
        throw new Error('useForm needs to be used inside the FormProvider')
    }
    return context
}