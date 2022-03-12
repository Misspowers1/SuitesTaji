import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div``;

const Image = styled.img`
	height: 90vh;
	width: 100%;
	object-fit: cover;
`;

const FormContainer = styled.form``;

const InfoContainer = styled.div``;

const Title = styled.h3``;

const Input = styled.input``;

const Contact = () => {
	return (
		<Container>
			<Header />
			<Image src="/images/image2.jpeg" />
			<FormContainer>
				<InfoContainer>
					<Title>Contact</Title>
					<Input placeholder="contact" />
				</InfoContainer>
				<InfoContainer>
					<Title>Contact</Title>
					<Input placeholder="contact" />
				</InfoContainer>
				<InfoContainer>
					<Title>Contact</Title>
					<Input placeholder="contact" />
				</InfoContainer>
				<InfoContainer>
					<Title>Contact</Title>
					<Input placeholder="contact" />
				</InfoContainer>
			</FormContainer>
		</Container>
	);
};

export default Contact;
