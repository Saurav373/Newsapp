import React, { useEffect, useState } from 'react'
import Card from './Card'
import Sceleton from './Sceleton'
import InfiniteScroll from 'react-infinite-scroll-component';
import toast from 'react-hot-toast';
import Loader from './Loader';

const App = ({ category, setProgress, color }) => {

  const [news, setnews] = useState([])
  const [totalresults, setTotalresults] = useState(0)
  const [hasMore, sethasMore] = useState(false)
  const [page, setpage] = useState(1)

  const Url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=5&apiKey=1af076774e1b4a50ab8a57e39fd73843&page=${page}`

  const fetchdata = async () => {

    try {
      setProgress(70)
      response = await fetch(Url)
      response = await response.json()
      setnews(prevNews => [...prevNews, ...response.articles]);
      setProgress(100)
      setTotalresults(() => response.totalResults)

      if (page < (totalresults) / 5) {
        setpage(prevPage => prevPage + 1);
      } else {
        sethasMore(false)
      }

    } catch (err) {
      setProgress(100)
      toast.error('Error in Fetching News')
    }

  }

  const handleOffline = () => {
    toast.error('No internet Connection');
    window.addEventListener('online', handleOnline);
  };

  const handleOnline = () => {
    toast.success('Online back');
    window.removeEventListener('online', handleOnline);
    fetchdata();
  };


  useEffect(() => {

    window.addEventListener('offline', handleOffline);
    fetchdata()

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [])


  return (
    <>
      <InfiniteScroll
        dataLength={news ? news.length : 5}
        next={fetchdata}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div className='my-10 grid grid-cols-3 gap-4'>
          {(!news || news.length < 1) && new Array(15).fill(0).map((_, i) => {
            return <Sceleton key={i} />
          })}

          {news && news.length !== 0 && news.map((e, index) => {
            return (<Card key={index} title={e.title} content={e.content} ImageUrl={e.urlToImage} sourceUrl={e.url} color={color} />)
          })}


        </div>
      </InfiniteScroll >
    </>
  )
}

export default App


