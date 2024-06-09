import React, { useEffect, useState } from 'react'
import Card from './Card'
import Sceleton from './Sceleton'
import InfiniteScroll from 'react-infinite-scroll-component';
import toast from 'react-hot-toast';

const App = ({ category, setProgress, color }) => {

  const Url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=5&apiKey=1af076774e1b4a50ab8a57e39fd73843`

  let response=''
  const [news, setnews] = useState([])
  const [totalresults, setTotalresults] = useState(0)
  const [hasMore, sethasMore] = useState(false)
  const [page, setpage] = useState(2)

  const fetchdata = async () => {
    try{
      setProgress(70)
      response = await fetch(Url)
      response = await response.json()
      setnews(response.articles)
      setProgress(100)
      setTotalresults(response.totalResults)
      sethasMore(true)
    }catch(err){
      setProgress(100)
      toast.error('Error in Fetching News')
    }
  
  }
  const fetchmore = async () => {
    let response2 = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=5&page=${page}&apiKey=1af076774e1b4a50ab8a57e39fd73843`)
    response2 = await response2.json()
    
    setnews(prevNews => [...prevNews, ...response2.articles]);
    console.log(news);

    if(page < (totalresults)/5){
      setpage(prevPage => prevPage + 1);
      
    }else{
      sethasMore(false)
      console.log('else block'); 
    }
  }

  const handleOffline = () => {
    toast.error('No internet Connection');
  };

  const handleOnline = () => {
    toast.success('Online back');
    fetchdata();
  };


  useEffect(() => {
    fetchdata()

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [])

 
  return (
    <>
      <InfiniteScroll
        dataLength={news?news.length:0}
        next={fetchmore}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
      <div className='my-10 grid grid-cols-3 gap-4'>
        {(!news || news.length < 1) && new Array(9).fill(0).map((_,i)=>{
          return <Sceleton key={i}/>
        })}

        { news && news.length !== 0 && news.map((e, index) => {
          return (<Card key={index} title={e.title} content={e.content} ImageUrl={e.urlToImage} sourceUrl={e.url} color={color} />)
        })}

       
      </div>
    </InfiniteScroll >
    </>
  )
}

export default App


