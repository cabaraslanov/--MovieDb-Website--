
 export const myData = (name)=>{

      const Key = "07989e510be31f37e529531744bfc3ec";

      
      fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
      .then(resp=>resp.json())
      .then(data=>data)


  }




















//     const axios = require('axios').default;
//     export const getData = async (name) =>{
//         const Key = "07989e510be31f37e529531744bfc3ec"
//         const res = await axios.get(`https://api.themoviedb.org/3/movie/${name}?api_key=${Key}&language=en-US&page=1`)
//        const data = res.data
//        return data.results
//     }


//     const fetchData = async ()=>{
  
//       const res  = await getData("popular")
    
//    console.log(res);
  
//   }
//     fetchData()
