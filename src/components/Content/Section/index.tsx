import { ReactNode } from 'react';
import styled from 'styled-components';
import Typography from '../../Typography';

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
				<Typography variant='h2' weight='bold'>
					{title}
				</Typography>
			</TitleContainer>

			<CardsContainer direction={direction}>{children}</CardsContainer>
		</Container>
	);
};

export default Section;
