import { ReactNode } from 'react';
import styled from 'styled-components';

type Variant = 'h1' | 'h2' | 'h3' | 'paragraph';
type Weight = 'medium' | 'bold';

const getFontSize = (variant: Variant) => {
	let number = 1;

	switch (variant) {
		case 'h1': {
			number = 3.0;
			break;
		}
		case 'h2': {
			number = 1.7;
			break;
		}
		case 'h3': {
			number = 1.3;
			break;
		}
		case 'paragraph': {
			number = 1.1;
			break;
		}
	}

	return `${number}rem`;
};

const Text = styled.span<{
	$variant: Variant;
	$weight: Weight;
	$noWrap?: boolean;
}>`
	font-size: ${({ $variant }) => getFontSize($variant)};
	font-weight: ${({ $weight }) => ($weight === 'medium' ? 400 : 700)};
	line-height: 1;
	white-space: ${({ $noWrap }) => ($noWrap ? 'nowrap' : undefined)};
`;

type Props = {
	variant?: Variant;
	children: ReactNode;
	weight?: Weight;
	noWrap?: boolean;
};

const Typography = ({
	variant = 'paragraph',
	weight = 'medium',
	noWrap,
	children,
	...rest
}: Props) => {
	return (
		<Text $noWrap={noWrap} $variant={variant} $weight={weight} {...rest}>
			{children}
		</Text>
	);
};

export default Typography;
