import React, { useEffect } from 'react'
import "./Review.scss"
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest.js';
export default function Review({review}) {
  
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: async () => await newRequest.get(`/users/${review.userId}`).then(res => {
      return res.data
    })
  })
  return (
      <div className="review">
        {isLoading ? "Loading..." : error ? "something went wrong" : 
        <div className="user">
          <img
            className="pp"
            src={data.img || "/img/noavatar.png"}
            alt=""
          />
          <div className="info">
            <span>{data?.username}</span>
          </div>
        </div>
        }
        <div className="stars">
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <span>5</span>
        </div>
        <p>
          {review.desc}
        </p>
        <div className="helpful">
          <span>Helpful?</span>
          <img src="/img/like.png" alt="" />
          <span>Yes</span>
          <img src="/img/dislike.png" alt="" />
          <span>No</span>
        </div>
      </div>
  )
}
