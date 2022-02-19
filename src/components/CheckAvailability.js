import React from 'react';
import styled from "styled-components";

const Container = styled.div``;

const Lower = styled.div`
	display: flex;
	max-width: 800px;
	margin: 12px 300px;
	background: white;
	height: 140px;
	color: #595959;
`;

const In = styled.div`
	height: 200px;
	width: 200px;
`;

const Check = styled.h5`
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0px;
`;

const Date = styled.h1`
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0px;
`;

const Month = styled.h4`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0px;
	font-weight: 500;
`;

const Out = styled.div`
	height: 200px;
	width: 200px;
`;

const Guest = styled.div`
	height: 200px;
	width: 200px;
`;

const Availability = styled.div`
	height: 100px;
	width: 200px;
	padding: 20px 0px;
	background: #ffd500;
	color: white;
`;

const Avail = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	font-weight: 500;
`;

const Avail2 = styled.h3`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
`;

const CheckAvailability = () => {
  return (
    <Container><Lower>
					<In>
						<Check>CHECK IN</Check>
						<Date>16</Date>
						<Month>JUN</Month>
					</In>
					<Out>
						<Check>CHECK OUT</Check>
						<Date>26</Date>
						<Month>JUN</Month>
					</Out>
					<Guest>
						<Check>QUEST</Check>
						<Date>3</Date>
						<Month>3</Month>
					</Guest>
					<Availability>
						<Avail>CHECK</Avail>
						<Avail2>AVAILABILITY</Avail2>
					</Availability>
				</Lower></Container>
  )
}

export default CheckAvailability