import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Navbar = styled.div`
	display: flex;
	height: 60px;
	background: #ffd500;
`;

const Logo = styled.div`
	display: flex;
	padding: 0px;
	margin-bottom: 8px;
	margin-left: 24px;
`;

const Image = styled.img`
	height: 60px;
	width: 200px;
	object-fit: contain;
`;

const Center = styled.div`
	flex: 2;
	display: flex;
	text-align: center;
`;

const Link = styled.a`
	text-decoration: none;
`;

const List = styled.ul`
	list-style: none;
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	color: white;
	margin: 15px 40px;
`;

const Right = styled.div``;

const Button = styled.button`
	padding: 8px 30px;
	font-size: 18px;
	color: white;
	border: 1px solid white;
	background: transparent;
	margin-top: 8px;
	margin-right: 12px;
	cursor: pointer;
`;

const Header = () => {
	return (
		<Container>
			<Navbar>
				<Logo>
					<Image src="/images/Taji Suites.png" />
				</Logo>
				<Center>
					<Link href="/">
						<List>Home</List>
					</Link>
					<Link href="/">
						<List>Rooms</List>
					</Link>
					<Link href="/">
						<List>Gallery</List>
					</Link>
					<Link href="/">
						<List>About</List>
					</Link>
					<Link href="/">
						<List>Contact us</List>
					</Link>
				</Center>
				<Right>
					<Button>Reservation</Button>
				</Right>
			</Navbar>
		</Container>
	);
};

export default Header;
