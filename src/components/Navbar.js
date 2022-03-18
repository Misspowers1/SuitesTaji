import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div``;

const Nav = styled.div`
	display: flex;
	height: 120px;
`;

const Logo = styled.div`
	display: flex;
	padding: 20px;
`;

const Image = styled.img`
	height: 200px;
	width: 200px;
	object-fit: contain;
	margin-top: -52px;
`;

const Center = styled.div`
	flex: 2;
	display: flex;
	text-align: center;
`;

const List = styled.ul`
	list-style: none;
	margin: 48px 40px;
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	color: white;
`;

const Right = styled.div``;

const Button = styled.button`
	margin: 32px 12px;
	padding: 8px 30px;
	font-size: 18px;
	color: white;
	border: none;
	background: #ffd500;

	&:hover {
		background: transparent;
		border: 1px solid white;
	}
`;

const Navbar = () => {
	return (
		<Container>
			<Nav>
				<Logo>
					<Image src="/images/Taji Suites.png" />
				</Logo>
				<Center>
					<Link to="/home">
						<List>Home</List>
					</Link>
					<Link to="/bookroom">
						<List>Rooms</List>
					</Link>
					<Link to="/gallery">
						<List>Gallery</List>
					</Link>
					<Link to="/about">
						<List>About</List>
					</Link>
					<Link to="/contact">
						<List>Contact us</List>
					</Link>
				</Center>
				<Right>
					<Button>Reservation</Button>
				</Right>
			</Nav>
			<Outlet />
		</Container>
	);
};

export default Navbar;
