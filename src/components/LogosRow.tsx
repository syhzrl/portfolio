import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import { ILogo } from 'entities/Logos';

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
    }
`;

export default LogosRow;
