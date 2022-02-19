import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Head = styled.div`
	background-image: url("/images/image9.jpeg");
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
`;



const Middle = styled.div``;

const Texts = styled.div``;

const Text = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	font-weight: 500;
	margin: 12px 0px;
	color: white;
`;

const Butt = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Explore = styled.button`
	margin: 32px 0px;
	font-size: 18px;
	font-weight: 500;
	padding: 10px 50px;
	border: none;
	border-radius: 24px;
	background: white;
	color: #ffc60;
`;

const About = () => {
	return (
		<Container>
			<Head>
				
				<Middle>
					<Texts>
						<Text>Taji Suites</Text>
						<Text>Regal And Breathtaking.</Text>
						<Butt>
							<Explore>EXPLORE</Explore>
						</Butt>
					</Texts>
				</Middle>
			</Head>
		</Container>
	);
};

export default About;
