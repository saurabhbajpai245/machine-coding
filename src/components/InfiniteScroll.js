import React, { useCallback, useEffect, useState, useRef } from 'react'

const InfiniteScroll = () => {
    const [inputVal, setInputVal] = useState('');
    const pageNumber= useRef(1);
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const timer = useRef(null);

    // Use abort controller to discard unwanted calls
    const controlerRef = useRef(null);
    // Create intersection observer

    const observerRef = useRef(null);
   
    const handleEvent = useCallback((e) => {
        setInputVal(e.target.value);
    }, []);

    const getData = useCallback(async (input) => {
        setIsLoading(true);
        // if(controlerRef.current) controlerRef.current.abort();
        // controlerRef.current = new AbortController();
        const json = await fetch('https://openlibrary.org/search.json?'+ new URLSearchParams({
            q: input,
            page: pageNumber.current
        }));
        const result = await json.json();
        setData((prevData) => [...prevData, ...result.docs]);
        setIsLoading(false);
        
    }, [])

    const getDataByDebouncing = useCallback(function(fn, delay){
        return function(){
            let context = this;
            let args = arguments;
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                fn.apply(context, arguments);
            }, delay)
        }
    }, []);

    const betterFunc = getDataByDebouncing(getData, 3000);

    useEffect(() => {
        try{
            betterFunc(inputVal);
        }catch(e){
            console.log(e)
        }
    }, [inputVal]);

  

    const lastElementObserver = useCallback((node) => {
        console.log(node);
        if(isLoading) return ;
        if(observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                pageNumber.current += 1;
                getData(inputVal);
            }
        })
        if(node) observerRef.current.observe(node)
    }, [])
    
  return (
    <div>
        <label htmlFor="search" >search: </label>
        <input name='search' type='text' value={inputVal} onChange={handleEvent} />
        <div>
            {
                (data.length && data) && data.map((item, index) => {
                    if(index == data.length - 1){
                        return (
                            <li ref={lastElementObserver} key={item?.key}>{item.title}{'last element'}</li>
                        )
                    }
                    return (
                        <li key={item.key}>{item.title}</li> 
                    )
                })
            }
        </div>
        {
            isLoading && <div>Loading</div>
        }
    </div>
  )
}

export default InfiniteScroll