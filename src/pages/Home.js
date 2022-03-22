import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CheckAvailability from "../components/CheckAvailability";
import {
	AttachMoney,
	Hotel,
	LocalParkingOutlined,
	LocationOn,
	RoomService,
	Security,
	Visibility,
	Wifi,
} from "@material-ui/icons";
import { mobile } from "../responsive";

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

	${mobile({ fontSize: "30px" })}
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

	&:hover {
		background: #ffd500;
		color: white;
	}
`;

const Wrapper = styled.div`
	margin: 50px;
`;

const Title = styled.h1`
	display: flex;
	align-item: center;
	justify-content: center;
	font-size: 50px;
	font-weight: 500;
	color: #595959;
`;

const Rooms = styled.div`
width: 900px
background: grey;
display: flex;
flex-wrap: wrap;
margin: 30px 130px;
`;

const ImageContainer = styled.div`
	height: 200px;
	width: 300px;
	margin: 10px;
	position: relative;
`;

const Image1 = styled.img`
	height: 200px;
	width: 300px;
	object-fit: cover;
	margin: 10px;
`;

const Book = styled.button`
	position: absolute;
	top: 100px;
	right: 90px;
	padding: 6px 12px;
	font-family: inherit;
	border: none;
	background: #ffd500;
	color: white;
	font-size: 18px;
`;

const BestRoom = styled.div`
	margin: 48px 0px;
	background: #eff4f8;
	position: realtive;
	height: 110vh;
`;

const RoomImage = styled.img`
	height: 500px;
	width: 700px;
	object-fit: cover;
	margin: 100px 200px;
`;

const Info = styled.div`
	position: relative;
	bottom: 525px;
	left: 700px;
	color: #8d6700;
	width: 500px;
	height: 300px;
	background: white;
	padding: 10px;
`;

const Tittle = styled.h1`
	font-weight: 500;
	margin: 24px 48px;
`;

const Desc = styled.p`
	margin: 24px 48px;
`;

const BookNow = styled.button`
	margin-left: 58px;
	border: none;
	padding: 8px 32px;
	color: white;
	background: #ffb700;
	font-size: 18px;
`;

const Services = styled.div`
	margin-bottom: 48px;
`;

const Main = styled.h1`
	display: flex;
	align-item: center;
	justify-content: center;
	font-size: 50px;
	font-weight: 500;
	color: #595959;
	margin-bottom: 24px;
`;

const Service = styled.div`
	display: flex;
	margin-left: 100px;
`;

const Icons = styled.div`
	height: 200px;
	width: 400px;
`;

const Icon = styled.img`
	height: 60px;
	width: 60px;
	object-fit: contain;
	margin-left: 160px;
`;

const Rest = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	font-weight: 500;
	color: #8d6700;
`;

const Descript = styled.p`
	display: flex;
	text-align: center;
	justify-content: center;
	color: #595959;
`;

const MoreInfo = styled.div`
	display: flex;
	margin-bottom: 50px;
`;

const ImageDiv = styled.div`
	flex: 1;
`;

const Comfy = styled.img`
	height: 80vh;
	width: 700px;
	object-fit: contain;
`;

const InfoContainer = styled.div`
	flex: 1;
	background: #ffd500;
	color: white;
	height: 75vh;
	margin-top: 15px;
`;

const Heading = styled.h1`
	display: flex;
	flex-direction: flex-start;
	margin: 32px 70px;
	font-size: 50px;
	font-weight: 500;
`;

const InfoDesc = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 32px 70px;
`;

const InfoButton = styled.button`
	display: flex;
	margin: 32px 70px;
	border: none;
	padding: 8px 20px;
	font-size: 18px;
	color: #595959;
`;

const FacilitiesTitle = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	font-weight: 500;
	color: #595959;
	margin-bottom: 24px;
`;

const Facilities = styled.div`
	background: #eff4f8;
	display: flex;
	margin-bottom: 50px;
	flex-wrap: wrap;
	padding: 50px 0px;
`;
const IconInfo = styled.div`
	height: 100px;
	width: 300px;
	margin: 50px 0px;
`;

const IconTitle = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 10px 0px;
	font-weight: 500;
`;

const IconLabel = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffd500;
`;

const Testimonials = styled.div`
	margin-bottom: 50px;
`;

const GuestHeader = styled.h1`
	display: flex;
	align-item: center;
	justify-content: center;
	font-size: 50px;
	font-weight: 500;
	color: #595959;
	margin-bottom: 24px;
`;

const GuestSay = styled.p`
	display: flex;
	align-item: center;
	justify-content: center;
	color: #595959;
	margin: 0px 450px 12px 450px;
	width: 500px;
	padding: 24px;
	text-align: center;
	box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.1);
`;

const GuestDetail = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GuestDetails = styled.div``;

const GuestP = styled.div`
	border-radius: 100%;
	margin: 20px;
`;

const GuestPhoto = styled.img`
	height: 100px;
	width: 100px;
	object-fit: contain;
	border-radius: 50%;
`;

const GuestName = styled.h3`
	font-weight: 600;
	color: #595959;
	margin-bottom: 12px;
`;

const GuestLocation = styled.p`
	color: #595959;
`;

const Video = styled.div`
	border-top: 1px solid grey;
`;

const VideoImage = styled.img`
	height: 80vh;
	width: 100%;
	object-fit: cover;
`;

const VideoDesc = styled.h1`
	position: relative;
	bottom: 300px;
	left: 400px;
	width: 600px;
	color: white;
	font-size: 50px;
	font-weight: 500;
	text-align: center;
`;

const OrderFood = styled.div`
	width: 900px;
	display: flex;
	margin: 0px 160px 50px 160px;
`;

const FoodDetails = styled.div``;

const Food = styled.img`
	height: 300px;
	width: 300px;
	object-fit: contain;
	margin: 10px 24px;
`;

const FoodDesc = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	color: #b38300;
	margin-bottom: 16px;
`;

const OrderButton = styled.button`
	margin-left: 100px;
	border: none;
	color: white;
	background: #ffb700;
	padding: 6px 32px;
	font-size: 18px;
`;

const Home = () => {
	return (
		<Container>
			<Head>
				<Navbar />
				<Middle>
					<Texts>
						<Text>Taji Suites</Text>
						<Text>Regal And Breathtaking.</Text>
						<Butt>
							<Explore>EXPLORE</Explore>
						</Butt>
					</Texts>
				</Middle>
				<CheckAvailability />
			</Head>
			<Wrapper>
				<Title>Our Rooms</Title>
				<Rooms>
					<ImageContainer>
						<Image1 src="/images/image7.jpeg" />
						<Book>STANDARD ROOM </Book>
					</ImageContainer>
					<ImageContainer>
						<Image1 src="/images/image6.jpeg" />
						<Book>DELUXE ROOM </Book>
					</ImageContainer>
					<ImageContainer>
						<Image1 src="/images/image7.jpeg" />
						<Book>STANDARD ROOM </Book>
					</ImageContainer>
					<ImageContainer>
						<Image1 src="/images/image9.jpeg" />
						<Book>STANDARD ROOM </Book>
					</ImageContainer>
					<ImageContainer>
						<Image1 src="/images/image6.jpeg" />
						<Book>DELUXE ROOM </Book>
					</ImageContainer>
					<ImageContainer>
						<Image1 src="/images/image9.jpeg" />
						<Book>STANDARD ROOM </Book>
					</ImageContainer>
				</Rooms>
			</Wrapper>
			<BestRoom>
				<RoomImage src="/images/image9.jpeg" />
				<Info>
					<Tittle>
						Check out your
						<br /> Best Room.
					</Tittle>
					<Desc>
						TAJI Suites offers you affordable, elegant and comfortable
						accomodation with a unique blend of taste and ambience.
					</Desc>
					<BookNow>Book Now</BookNow>
				</Info>
			</BestRoom>
			<Services>
				<Main>Our Services</Main>
				<Service>
					<Icons>
						<Icon src="/images/restaurant.png" />
						<Rest>Restaurant</Rest>
						<Descript>
							Our retaurant delights in authentic African dishes cooked to
							perfection.
						</Descript>
					</Icons>
					<Icons>
						<Icon src="/images/acommodation.png" />
						<Rest>Accomodation</Rest>
						<Descript>
							TAJI Suites offers you affordable, elegant and comfortable
							accomodation with a unique blend of taste and ambience.
						</Descript>
					</Icons>
					<Icons>
						<Icon src="/images/conferenceroom.png" />
						<Rest>Conferencing</Rest>
						<Descript>
							TAJI Suites offers you affordable, elegant and comfortable
							accomodation with a unique blend of taste and ambience.
						</Descript>
					</Icons>
				</Service>
			</Services>
			<MoreInfo>
				<ImageDiv>
					<Comfy src="/images/image9.jpeg" />
				</ImageDiv>
				<InfoContainer>
					<Heading>
						Find Your Best
						<br /> Room Here
					</Heading>
					<InfoDesc>
						{" "}
						Enjoy all the luxury and comfort you have come to expect from TAJI
						Suites Rooms. Designed as an ideal space for work and relaxation
						alike, but equally useful for those evenings you'd rather relax in
						your comfortable room.
					</InfoDesc>
					<InfoDesc>
						TAJI Suites offers you affordable, elegant and comfortable
						accomodation with a unique blend of taste and ambience.
					</InfoDesc>
					<InfoButton>Read More</InfoButton>
				</InfoContainer>
			</MoreInfo>
			<FacilitiesTitle>Facilities</FacilitiesTitle>
			<Facilities>
				<IconInfo>
					<IconLabel>
						<LocalParkingOutlined style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Free Parking</IconTitle>
				</IconInfo>
				<IconInfo>
					<IconLabel>
						<AttachMoney style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Best Prices</IconTitle>
				</IconInfo>
				<IconInfo>
					<IconLabel>
						<Security style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Good Security</IconTitle>
				</IconInfo>
				<IconInfo>
					<IconLabel>
						<Hotel style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Modern Standard And Deluxe Rooms</IconTitle>
				</IconInfo>
				<IconInfo>
					<IconLabel>
						<LocationOn style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Downtown Location</IconTitle>
				</IconInfo>
				<IconInfo>
					<IconLabel>
						<RoomService style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Exclusive Services</IconTitle>
				</IconInfo>
				<IconInfo>
					<IconLabel>
						<Wifi style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Free High Speed Wi-fi</IconTitle>
				</IconInfo>
				<IconInfo>
					<IconLabel>
						<Visibility style={{ fontSize: "50px" }} />
					</IconLabel>
					<IconTitle>Captivating View Of Kisumu City</IconTitle>
				</IconInfo>
			</Facilities>
			<Testimonials>
				<GuestHeader>From The Guest</GuestHeader>
				<GuestSay>
					❝ Enjoy all the luxury and comfort you have come to expect from TAJI
					Suites Rooms. Designed as an ideal space for work and relaxation
					alike, but equally useful for those evenings you'd rather relax in
					your comfortable room.TAJI Suites offers you affordable, elegant and
					comfortable accomodation with a unique blend of taste and ambience.❞
				</GuestSay>
				<GuestDetail>
					<GuestP>
						<GuestPhoto src="/images/guest1.jpeg" />
					</GuestP>
					<GuestDetails>
						<GuestName>Purity Akoth</GuestName>
						<GuestLocation>From Kenya, Kisumu</GuestLocation>
					</GuestDetails>
				</GuestDetail>
			</Testimonials>
			<Video>
				<VideoImage src="/images/gazibo.jpeg" />
				<VideoDesc>Keep Calm And Enjoy Your Stay.</VideoDesc>
			</Video>
			<OrderFood>
				<FoodDetails>
					<Food src="/images/food1.jpeg" />
					<FoodDesc>Ugali, Sukuma + Meat</FoodDesc>
					<OrderButton>Order Now</OrderButton>
				</FoodDetails>
				<FoodDetails>
					<Food
						src="/images/food7.jpeg"
						style={{ height: "300px", width: "300px", objectFit: "cover" }}
					/>
					<FoodDesc>Ugali, Sukuma + Meat</FoodDesc>
					<OrderButton>Order Now</OrderButton>
				</FoodDetails>
				<FoodDetails>
					<Food src="/images/food2.jpeg" />
					<FoodDesc>Ugali, Sukuma + Meat</FoodDesc>
					<OrderButton>Order Now</OrderButton>
				</FoodDetails>
			</OrderFood>
			<Footer />
		</Container>
	);
};

export default Home;
