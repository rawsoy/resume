import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ fit: boolean }>`
	display: flex;
	flex-direction: column;
	padding: 4px;
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	flex: ${props => (props.fit ? 'unset' : 1)};
`;

type Props = {
	children: ReactNode;
	fit?: boolean;
};

const Card = ({ children, fit = true }: Props) => {
	return <Container fit={fit}>{children}</Container>;
};

export default Card;
