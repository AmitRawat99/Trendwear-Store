import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import userProfile from '../assets/user/user-profile.png'
import '../style/order.scss'
// import Base_Url from '../../../Abjuor_FrontEnd/src/config/Base_Url'
import Base_Url from '../utils/config';

function UserAccount() {
  const [Accounts, setAccounts] = useState([])

  useEffect(() => {
    const userAccounts = async () => {
      try {
        const response = await fetch(`${Base_Url}/user-profile/user-accounts`)
        console.log(response);


        if (!response) {
          throw new Error("Netwrok response was not good")
        }

        const data = await response.json()
        console.log(data);


        if (Array.isArray(data)) {
          setAccounts(data)
        }

        else if (Array.isArray(data.Useraccounts)) {
          setAccounts(data.Useraccounts)
        }

        else {
          setAccounts([])
        }

        console.log(data.Useraccounts, "all acounts");

      } catch (error) {
        console.log("somethink went wrong", error)
      }
    }
    userAccounts()
  }, [])

  return (
    <Container className="my-4">
      <Row>
        {Accounts.map((user) => (
          <Col key={user.id} md={4} className="mb-4">
            <Card className="shadow-sm h-100 p-3">
              <Card.Body>
                <div className="user-name d-flex">
                  <img src={userProfile} alt="" />
                  <div className="user-roles">
                    <Card.Title>{user.userName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Customer</Card.Subtitle>
                  </div>
                </div>
                <Card.Text>
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Phone:</strong> {user.number}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserAccount;

