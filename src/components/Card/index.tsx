import { ReactNode } from 'react';
import styled from 'styled-components';

type Size = 'sm' | 'md';

const Container = styled.div<{ fit: boolean; $size: Size }>`
	display: flex;
	flex-direction: column;
	padding: ${({ $size }) => ($size === 'sm' ? '4px' : '4px')};
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	height: ${({ fit }) => (fit ? 'fit-content' : undefined)};
`;

type Props = {
	children: ReactNode;
	fit?: boolean;
	size?: Size;
};

const Card = ({ children, fit = true, size = 'md' }: Props) => {
	return (
		<Container fit={fit} $size={size}>
			{children}
		</Container>
	);
};

export default Card;
