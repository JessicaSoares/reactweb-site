import React, { useState } from 'react';
import GraphFooter from "./GraphFooter"
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section top= "-40px" padding="50px 70px" inverse>
			

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
						<iframe src="https://app.powerbi.com/view?r=eyJrIjoiZTBiZGZkY2MtNTk1ZC00ZWU5LWEyOGMtMTczMDA2YmEzOWMwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9" width="270" height="200"></iframe>
						<GraphFooter/>
						</TextWrapper>
					
						
					</ImageWrapper>
				))}
			</ReviewSlider>
			<Row justify="center" margin="0.1rem" wrap="wrap">
				
				<ButtonContainer>
					<IconContext.Provider value={{ size: '2rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>
		</Section>
	);
};

export default Carousel;
