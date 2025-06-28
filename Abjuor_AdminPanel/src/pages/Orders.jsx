import React, { useEffect, useState } from 'react';
import { Container, Table, Image, Button } from 'react-bootstrap';
import userProfile from '../assets/user/user-profile.png';
import '../style/order.scss';
import Base_Url from '../utils/config';
import { FaEdit } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { MdDelete } from "react-icons/md";



function Orders() {
  const { id } = useParams()
  const [AllOrders, setOrders] = useState([]);

  useEffect(() => {
    const UserOrders = async () => {
      try {
        const response = await fetch(`${Base_Url}/all-orders`);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log("Fetched Orders:", data);

        if (Array.isArray(data.allOrders)) {
          setOrders(data.allOrders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    UserOrders();
  }, []);

const deleteOrder = async (id) => {
  try {
    const response = await fetch(`${Base_Url}/delete-order/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Failed to delete order");
    }

    const result = await response.json();
    console.log("Deleted Order:", result);

    setOrders(prevOrders => prevOrders.filter(order => (order.id || order._id) !== id));

  } catch (error) {
    console.log("Something went wrong", error);
  }
};



  return (
    <Container fluid >
      <div className="table-responsive">
        <Table className="">
          <thead className="table-dark">
            <tr>
              <th>Profile</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Address</th>
              <th>ProductName</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {AllOrders.length > 0 ? (
              AllOrders.map((user, index) => (
                <tr key={user._id || index}>
                  <td>
                    <Image
                      src={userProfile}
                      alt="Profile"
                      width={40}
                      height={40}
                      roundedCircle
                    />
                  </td>
                  <td>{user.fullName || "N/A"}</td>
                  <td>{user.email || "N/A"}</td>
                  <td>{user.phone || "N/A"}</td>
                  <td>{user.city || "N/A"}</td>
                  <td>{user.address || "N/A"}</td>
                  <td>{user.productName || "N/A"}</td>
                  <td>
                    <div className="controle-user gap-3">
                     <MdDelete onClick={() => deleteOrder(user.id || user._id)} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No orders found.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Orders;
