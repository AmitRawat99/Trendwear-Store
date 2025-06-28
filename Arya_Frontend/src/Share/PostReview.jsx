import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/PostReview.scss';
import { useParams } from 'react-router-dom';
import Base_Url from '../utils/config';
import ProfileImg from '../assets/Images/Navimg/user_profile.png'
import { FaStar } from "react-icons/fa";

function PostReview({ productDescription }) {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showReview, setShowReview] = useState([])
  const profile = JSON.parse(localStorage.getItem("profile"));

  const [Review, SetReview] = useState({
    userid: profile?.userId || "",
    ProductId: productDescription.id,
    rating: 0,
    message: ""
  });


  const userProfile = localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : { userName: "Arya Bazar" }



  useEffect(() => {
    SetReview(prev => ({
      ...prev,
      userid: profile?.userId || "",
      ProductId: productDescription.id,
    }));
  }, [productDescription.id]);

  const handleRating = (star) => {
    setRating(star);
    SetReview(prev => ({ ...prev, rating: star }));
  };

  const handleReviewText = (e) => {
    const value = e.target.value;
    setReviewText(value);
    SetReview(prev => ({ ...prev, message: value }));
  };

  const addReview = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Base_Url}/review/add-review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(Review)
      });

      const data = await response.json();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    const GetAllData = async () => {
      try {
        const response = await fetch(`${Base_Url}/review/all-reviews/${id}`);

        if (!response.ok) {
          console.log("Network issue");
          return;
        }

        const data = await response.json();

        if (Array.isArray(data.findAllReviews)) {
          setShowReview(data.findAllReviews)

        }

      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    GetAllData();
  }, []);


  return (
    <Container>
      <Row>
        <Col>
          <div className="post_review_container mt-5 ">
            <div className="review_tab flex justify-center items-center gap-3 mt-5 mb-3">
              <div className="descrption_tab flex items-center  flex-wrap mb-5 gap-3">
                <h2
                  className={activeTab === 'description' ? 'font-bold cursor-pointer' : 'cursor-pointer'}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </h2>
                <h2
                  className={activeTab === 'review' ? 'font-bold cursor-pointer' : 'cursor-pointer'}
                  onClick={() => setActiveTab('review')}
                >
                  Review
                </h2>
              </div>
            </div>

            {activeTab === 'description' && (
              <div className="tab_content">
                <h4>Product Description</h4>
                <p>{productDescription.productDescription?.toLowerCase()}</p>
              </div>
            )}

            {activeTab === 'review' && (
              <>
                {showReview.length > 0 ? (
                  showReview.map((review, idx) => (
                    <div className="show_reviews" key={idx}>
                      <div className="profile_img flex align-items-center">
                        <img src={ProfileImg} alt="" width="50px" height="50px" />
                        <h2>{userProfile.userName}</h2>
                      </div>
                      <div className="review_message">
                        <div className="text-yellow-400 mt-2 flex gap-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar key={i} color={i < review.rating ? '#facc15' : '#b6b6b6'} />
                          ))}
                        </div>
                        <div className="description">
                          <p>{review.message}</p>
                        </div>
                      </div>
                      <hr />

                    </div>
                  ))
                ) : (
                  <div className="no_reviews text-gray-600 mb-4">
                    <p>No reviews here yet. Be the first to review this product!</p>
                  </div>

                )}


                <div className="tab_content text-gray-800 mt-5">
                  <h4>Write a Review</h4>
                  <form className="space-y-4" onSubmit={addReview}>
                    <div className="flex items-center space-x-2 gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`cursor-pointer text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          onClick={() => handleRating(star)}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <textarea
                      value={reviewText}
                      onChange={handleReviewText}
                      placeholder="Write your review here..."
                      className="w-full border mt-3 mb-3 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows={4}
                      name='message'
                    ></textarea>

                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-5 py-2 rounded-sm hover:bg-blue-700 transition"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>

              </>
            )}

          </div>
        </Col>
      </Row>
    </Container >
  );
}

export default PostReview;
