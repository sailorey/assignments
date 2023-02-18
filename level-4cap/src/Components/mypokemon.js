import React, {useState, useEffect} from "react";
import axios from "axios";
export default function Mypokemon(){
    
        const [newsData, setNewsData] = useState([]);
    
        useEffect(() => {
            axios
              .get(
                "https://api.vschool.io/reymartinez/todo/",
                {
                  headers: {
                    "X-Requested-With": "origin",
                  },
                }
              )
              .then((res) => setNewsData((prev) => res.data))
              .catch((err) => console.log(err));
          }, []);
    
          const listNewsData = newsData.map(
            (
              newsItem ///move all news related items to news
            ) => (
              <div className="news-list-div" key={newsItem.id}>
                  <div className="news-list-img">
                  <img height="200px" width="300px" src={newsItem.imgUrl} />
                </div>
                <div>
                <a href={newsItem.article_url}>
                  <h3>{newsItem.title}</h3>{" "}
                </a>
        
                <p>{newsItem.description}</p>
                </div>
              
              </div>
            )
          );
    
        return(<div>
            {listNewsData}
        </div>)
    }