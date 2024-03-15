import React, { useEffect, useState } from 'react';
import Naresh from 'axios';
import './Newscontent.css';




function Newscontent() {

    const [a, b] = useState()
    const [c, d] = useState()

    useEffect(() => {
        Naresh.get("https://newsapi.org/v2/top-headlines?apiKey=966e7f1805d24a92b3bcb0d32ced41ff&q=football").then(news => b(news.data.articles))
    }, []);

    useEffect(() => {
        Naresh.get("https://newsapi.org/v2/everything?q=apple&from=2024-03-12&to=2024-03-12&sortBy=popularity&apiKey=966e7f1805d24a92b3bcb0d32ced41ff").then(news => d(news.data.articles))
    }, []);




    return (
        <div>


            <h3 className='mt-3  text-center newscontent-header fs-2 fw-bolder'>FOOTBALL</h3>
            <div className='container-fluid mb-5'>
                <div className='row '>
                    {
                        a && a.map(data =>


                            <div className='col-lg-3 col-md-6 mt-5 ' id='mainbody' >
                                <div className="card d-flex" style={{ width: "18rem", height: "100%" }} id='body-border'>
                                    <h5 className='text-center pt-2'>{data.source.name}</h5>
                                    <img src={data.urlToImage} className='p-3' id='newscontent-img' />
                                    <div className="card-body  ">
                                        <h5 className="card-title"><p>{data.title.slice(0,50)}</p></h5>
                                        <p className="card-text">{data.description}</p>
                                        <a className=' pt-1 pb-1 ps-2 pe-2 text-decoration-none bg-primary text-light ' target='_blank' href={data.url} id='newscontent-anc'>READ MORE</a>
                                    </div> 
                                </div>
                            </div>
                        )

                    }
                </div>
            </div>



            <h3 className='mt-3  text-center newscontent-header fs-2 fw-bolder'>TESLA</h3>
            <div className='container-fluid mb-5'>
                <div className='row '>
                    {
                        c && c.map(data =>


                            <div className='col-lg-3 col-md-6 mt-5 ' id='mainbody' >
                                <div className="card d-flex" style={{ width: "18rem", height: "100%" }} id='body-border'>
                                    <h5 className='text-center pt-2'>{data.source.name}</h5>
                                    <img src={data.urlToImage} className='p-3' id='newscontent-img' />
                                    <div className="card-body  ">
                                        <h5 className="card-title"><p>{data.title.slice(0,50)}</p></h5>
                                        <p className="card-text">{data.description.slice(0,120)}</p>
                                        <a className=' pt-1 pb-1 ps-2 pe-2 text-decoration-none bg-primary text-light ' target='_blank' href={data.url} id='newscontent-anc'>READ MORE</a>
                                    </div> 
                                </div>
                            </div>
                        )

                    }
                </div>
            </div>









        </div>

    )
}

export default Newscontent