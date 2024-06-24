import React, { useEffect, useState } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import GigCard from "../../components/gigCard/GigCard";
import { Link } from "react-router-dom";

function Home() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToShowGigs, setSlidesToShowGigs] = useState(4);

  const handleResponsive = () => {
    const screenWidth = window.innerWidth;


    if(screenWidth <= 680){
      setSlidesToShowGigs(1)
    }
    else if (screenWidth <= 768) {
      setSlidesToShow(2);
      // setSlidesToShowGigs(2)
    } else if (screenWidth <= 1024) {
      setSlidesToShow(3);
      setSlidesToShowGigs(3)
    }else if(screenWidth <= 1330){
      setSlidesToShowGigs(3)
    } else {
      setSlidesToShow(4);
      setSlidesToShowGigs(4)
    }
    if(screenWidth <= 990){
      setSlidesToShowGigs(2)
    }
    if(screenWidth <= 640){
      setSlidesToShowGigs(1)
    }
    if(screenWidth <= 536){
      setSlidesToShow(1)
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResponsive);
    return () => window.removeEventListener("resize", handleResponsive);
  }, []);

  const {isLoading, error, data, refetch} = useQuery({
    queryKey: ['/gigs'],
    queryFn: async() => await newRequest.get(`/gigs`).then(res=>{
      return res.data
    })
  })

  return (
    <div className="home">

        <Featured />
        <TrustedBy />
        <div className="recentlyViewedContainer">
          <h1 className="recentlyViewed">Recently Viewed & More </h1>

        </div>
        {
          data && 
          (<Slide slidesToShow={slidesToShowGigs} arrowsScroll={3}>
              {data?.map((gig) => (
                <GigCard key={gig._id} item={gig} />
              ))}
          </Slide>)

        }



        <Slide slidesToShow={slidesToShow} arrowsScroll={1}>
          {cards.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </Slide>
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Quality work done quickly
              </div>
              <p>
                Find the right freelancer to begin working on your project within
                minutes.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Protected payments, every time
              </div>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                24/7 support
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div className="item">
              <video src="./img/video.mp4" controls />
            </div>
          </div>
        </div>
        <div className="explore">
          <div className="container">
            <h1>Explore the marketplace</h1>
            <div className="items">
              <div className="item">
                <Link to={"/gigs?cat=design"}>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                    alt=""
                  />
                </Link>
                <div className="line"></div>
                <span>Graphics & Design</span>
              </div>
              <div className="item">
                <Link to={"/gigs?cat=socialMedia"}>

                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                    alt=""
                  />
                </Link>
                <div className="line"></div>

                <span>Digital Marketing</span>
              </div>
              <div className="item">
                <Link to={"/gigs?cat=voiceOver"}>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                    alt=""
                  />
                </Link>
                <div className="line"></div>
                <span>Writing & Translation</span>
              </div>
              <div className="item">
                <Link to={"/gigs?cat=videoExplainer"}>

                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                    alt=""
                  />
                </Link>
                <div className="line"></div>
                <span>Video & Animation</span>
              </div>
              <div className="item">
                <Link to={"/gigs?cat=voiceOver"}>

                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                    alt=""
                  />
                </Link> 
                <div className="line"></div>
                <span>Music & Audio</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Programming & Tech</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Business</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Lifestyle</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Data</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Photography</span>
              </div>
            </div>
          </div>
        </div>
        <div className="features dark">
          <div className="container">
            <div className="item">
              <h1>
                fiverr <i>business</i>
              </h1>
              <h1>
                A business solution designed for <i>teams</i>
              </h1>
              <p>
                Upgrade to a curated experience packed with tools and benefits,
                dedicated to businesses
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>

              <div className="title">
                <img src="./img/check.png" alt="" />
                Get matched with the perfect talent by a customer success manager
              </div>

              <div className="title">
                <img src="./img/check.png" alt="" />
                Manage teamwork and boost productivity with one powerful workspace
              </div>
              <button>Explore Fiverr Business</button>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <Slide slidesToShow={slidesToShow} arrowsScroll={1}>
          {projects.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </Slide>

    </div>
  );
}

export default Home;
