fetch("https://raw.githubusercontent.com/komalpatel27/NewsTemplate/main/data-list.json")
    // .then (response => response.json())
    .then ((data) => {
        // console.log(data)
        return data.json();
    }).then ((completedata)=>{
        console.log(completedata[0].Title);
        document.getElementById('title').
        innerHTML=completedata[0].Title;

        console.log(completedata[0].discription);
        document.getElementById('discription1').
        innerHTML=completedata[0].discription;

        console.log(completedata[0].Imageurl);
      let image=  document.getElementById('img1');
        image.src=completedata[0].Imageurl;
        
       /*
        let data1="";
        completedata.map((values) =>{
            data1=` <article class="article" >
                    <figure class="article-img">
                        <img src=${values.Imageurl} />
                    </figure>
                    <h2 class="article-title article-title--medium">
                        <a href="#" class="article-link"><span style="color:#41c1ec;">&#x271C;</span> ${values.Title} </a>
                    </h2>
                    <div class="article-excerpt">
                        <p>${values.discription}</p>
                    </div>
                    <div class="article-author">
                        
                        <div class="article-author-info">
                            
                                <span>&#9716; 2m</span>
                                <span>&#x2709;</span>
                            
                        </div>
                    </div>
                </article>`
    });
    document.getElementById('article1').
        innerHTML=data1;
*/		
}).catch((err)=>{
    console.log(err);
})
  
