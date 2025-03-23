import { Link } from 'react-router-dom';
import * as C from './styles';
import {ReactComponent as CheckIcon} from '../../svgs/check.svg';
import {ReactComponent as OneIcon} from '../../svgs/one.svg';
import {ReactComponent as TwoIcon} from '../../svgs/two.svg';
import {ReactComponent as ThreeIcon} from '../../svgs/three.svg';
import {ReactComponent as FourIcon} from '../../svgs/four.svg';


type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'one' &&
                        <OneIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'two' &&
                        <TwoIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'three' &&
                        <ThreeIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'four' &&
                        <FourIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'check' &&
                        <CheckIcon fill="white" width={24} height={24} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}