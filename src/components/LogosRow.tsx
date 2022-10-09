import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import { ILogo } from 'entities/Logos';
import icons from 'assets/icons';

interface LogosRowProps {
    data: ILogo[];
}

const LogosRow: FunctionComponent<LogosRowProps> = (props: LogosRowProps) => {
    const { data } = props;
    return (
        <LogosRowContainer>
            {data.map(item => {
                const { icon, isSaga = false } = item;

                return (
                    <SVG
                        key={Math.random()}
                        src={icon}
                        id={isSaga ? 'sagaIcon' : 'icon'}
                    />
                );
            })}
        </LogosRowContainer>
    );
};

const LogosRowContainer = styled.div`
    display: flex;
    gap: 15px;

    flex-wrap: wrap;

    #icon {
        height: 40px;
        width: 40px;
    }

    #sagaIcon {
        height: 40px;
        width: 60px;
    }

    @media (max-width: 550px) {
        justify-content: center;
        align-items: center;

        width: 80%;

        // #icon {
        //     height: 40px;
        //     width: 40px;
        //     flex: 0 1 25%;
        // }
    
        // #sagaIcon {
        //     height: 40px;
        //     width: 60px;
        //     flex: 0 1 25%;
        // }
    }
`;

export default LogosRow;
