import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {Badge, Card} from 'antd';
import {memo, useMemo} from 'react';

import {Link} from 'react-router-dom';

import modules, {Module} from '../../modules';

import useAccount from '@/store/account/account';

const Img = styled.img`
    width: 40px;
    height: 40px;
    margin: 12px;
    transition: transform 0.2s;
`;

const animationShowing = keyframes`
  from {
    opacity: 0;
    transform: scale(0.75);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const LinkStyled = styled(Link)<{delay: number}>`
    grid-column: 4 span;
    max-width: 100%;

    white-space: pre-wrap;

    animation-name: ${animationShowing};
    animation-delay: ${({delay}) => 50 + delay}ms;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: both;

    .ant-card-body {
        padding: 2rem 1.5rem;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        outline-offset: 4px;
    }

    &:hover {
        img {
            transform: scale(1.05);
        }

        .ant-card-body {
            outline: auto var(--color-primary);
        }
    }

    svg {
        height: 40px;
        width: 40px;
    }
`;

const List = memo((): JSX.Element => {
    const account = useAccount(state => state.account);

    const availableModules: Array<Module> = useMemo(() => {
        return modules.filter(({permissions}) => permissions.some(permission => permission === account?.user.role));
    }, [account]);

    return (
        <div className="grid grid-cols-12 gap-10">
            {availableModules.map(({name, title, image, isNew}, idx) => (
                <LinkStyled key={name} to={name} delay={idx * 100}>
                    <Badge.Ribbon
                        className={isNew ? undefined : 'hidden'}
                        text={isNew ? 'New' : undefined}
                        color="orange"
                    >
                        <Card className="relative bg-primary rounded text-white">
                            {!isNew && <span className="text-xs text-white-650 absolute top-2 right-2">Classic</span>}

                            {typeof image === 'string' ? (
                                <Img height={40} width={40} src={image} alt={title} loading="lazy" />
                            ) : (
                                image && image
                            )}

                            <h2 className="mt-3 text-xl">{title}</h2>
                        </Card>
                    </Badge.Ribbon>
                </LinkStyled>
            ))}
        </div>
    );
});

export default List;
