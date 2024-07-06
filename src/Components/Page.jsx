import React, { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import toast from "react-hot-toast";
import Loader from "./Loader";

const App = ({ category, setProgress, color }) => {
  const [news, setNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async (page) => {
    
    const Url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=5&apiKey=1af076774e1b4a50ab8a57e39fd73843&page=${page}`;

    try {
      setProgress(70);
      let response = await fetch(Url);
      response = await response.json();
      setProgress(100);

      if (response.articles && response.articles.length > 0) {
        setNews((prevNews) => [...prevNews, ...response.articles]);
        setTotalResults(response.totalResults);
        if (
          response.articles.length < 5 ||
          news.length + response.articles.length >= response.totalResults
        ) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setProgress(100);
      toast.error("Error in Fetching News");
      console.log(err);
    }
  };

  const handleOffline = () => {
    toast.error("No internet Connection");
    window.addEventListener("online", handleOnline);
  };

  const handleOnline = () => {
    toast.success("Online back");
    window.removeEventListener("online", handleOnline);
    fetchData(page);
  };

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    fetchData(page);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  useEffect(() => {
    setNews([]);
    setPage(1);
    setHasMore(true);
    fetchData(1);
  }, [category]);

  return (
    <>
      <InfiniteScroll
        dataLength={news.length}
        next={() => fetchData(page + 1)}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div className="my-10 grid grid-cols-3 gap-4">
          {(!news || news.length < 1) &&
            new Array(15).fill(0).map((_, i) => {
              return <Skeleton key={i} />;
            })}

          {news &&
            news.length !== 0 &&
            news.map((e, index) => {
              return (
                <Card
                  key={index}
                  title={e.title}
                  content={e.content}
                  ImageUrl={e.urlToImage}
                  sourceUrl={e.url}
                  color={color}
                />
              );
            })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default App;
