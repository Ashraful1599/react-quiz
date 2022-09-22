import React, { useState } from "react";
import Image from "../images/3.jpg";
import {Link,  NavLink } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="videosr">

        {videos.length > 0 &&(
            <InfiniteScroll
              dataLength={videos.length}
              hasMore={hasMore}
              next={() => setPage(page + 8)}
            >
              {videos.map((video, index) => (
                // console.log(video);
            
              <Link
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                }}
                key={index}
                state={{
                  videoTitle: video.title,
                }}
                
              >
                  <div className="video">
                    <img src={Image} alt="" />
                    <p>{video.title}</p>
                    <div className="qmeta">
                      <p>{video.noq} Questions</p>
                      <p>Score : {video.noq * 5}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </InfiniteScroll>
        )}

          </div>
        </div>
      </main>
    </div>
  );
}
