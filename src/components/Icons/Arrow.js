import React from 'react';
import styled from 'styled-components';

const Arrow = ({ direction = 'left' }) => {
	return (
		<Container direction={direction}>
			<svg width="11" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.172 7.854l3.182-3.182a.5.5 0 000-.708L7.172.782a.5.5 0 10-.708.708l2.329 2.328H.5a.5.5 0 000 1h8.293L6.464 7.146a.5.5 0 10.708.708z"
					fill="#CACAF1"
				/>
			</svg>
		</Container>
	);
};

const getDirectionAngle = (direction) => {
	switch (direction) {
		case 'up':
		default:
			return -Math.PI / 2;
		case 'left':
			return Math.PI;
		case 'down':
			return Math.PI / 2;
		case 'right':
			return 0;
	}
};

const Container = styled.div`
	width: 11px;
	height: 8px;
	display: flex;
	transform: ${(props) => 'rotate(' + getDirectionAngle(props.direction) + 'rad)'};
`;

export default Arrow;
