import { useState, useEffect } from 'react';
import  BannerImg  from '../assets/banner.jpg';

function Banner() {
    const [views, setViews] = useState(0);

    useEffect(() => {
        setViews((previousViews) => previousViews + 1);
    },[])

    return (
        <div className="banner__section">
            <div className="banner__image--box">
                <img 
                src={BannerImg} 
                className="banner__image" 
                alt="Banner image" 
                />
            </div>

            <div className="profile__section">
                <div className="profile__image--box">
                    <img 
                    src="#" 
                    className="profile__image" 
                    alt="Profile image" 
                    />
                </div>

                <div className="profile__meta">
                    <div className="profile__data">
                        <h2 className="profile__name">
                            Ezekiel
                        </h2>

                        <span className="profile__role">
                            Frontend Developer
                        </span>
                    </div>
                   
                    <div className="profile__meta--data">
                        <span className="profile__meta-text">
                            <i className="fi fi-rs-marker"></i> Lagos, Nigeria
                        </span>

                        <span className="profile__meta-text">
                            <i className="fi fi-rs-eye"></i> {views}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;