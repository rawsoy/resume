import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

const TitleContainer = styled.div`
	display: flex;
	margin-bottom: 12px;
`;

const Text = styled.span`
	font-size: 2rem;
	font-weight: bold;
`;

const CardsContainer = styled.div<{ direction: Props['direction'] }>`
	display: flex;
	flex-direction: ${props => props.direction};
	gap: 8px;
`;

type Props = {
	title: string;
	direction?: 'row' | 'column';
	children: ReactNode;
};

const Section = ({ title, children, direction = 'column' }: Props) => {
	return (
		<Container>
			<TitleContainer>
				<Text>{title}</Text>
			</TitleContainer>

			<CardsContainer direction={direction}>{children}</CardsContainer>
		</Container>
	);
};

export default Section;
