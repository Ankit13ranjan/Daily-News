import React from 'react'

const NewsItem  = (props) => {
    let {title , description , imageUrl , newsUrl , author , date ,source} = this.props

    return (
      <div>
        <div class="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1' , left:'90%'}}>{source}</span>
            <img src={!imageUrl?"https://static.euronews.com/articles/wires/870/43/8704324/1000x563_jjh3y.jpg":imageUrl} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <p class="card-text"> <small class="text-muted"> By {!author?"Unkown":author} on {new Date(date).toUTCString()}
                  </small></p>
                <a href={newsUrl} target="_blank" class="btn btn-sm btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem