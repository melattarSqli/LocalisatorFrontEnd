import * as C from './styles'
import { ReactNode } from 'react'
import { Header } from '../Header'
import {SidebarItem} from '../SidebarItem'
import {useForm} from '../../context/FormContext'

type Props = {
    children: ReactNode
}



export const Theme = ({children}: Props) => {
    const {state} = useForm()
    return(
        <C.Container>
            <C.Area>
                
                <Header />

                <C.Steps>
                    <C.Sidebar>
                    <SidebarItem
                            title="Tree Node"
                            description=""
                            icon="one"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Field"
                            description=""
                            icon="two"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Field Translation"
                            description=""
                            icon="three"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="Languages and Market"
                            description=""
                            icon="four"
                            path="/step4"
                            active={state.currentStep === 4}
                        />
                        <SidebarItem
                            title="Download Template"
                            description=""
                            icon="check"
                            path="/step5"
                            active={state.currentStep === 5}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                    
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}