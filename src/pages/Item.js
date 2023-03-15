import { Link } from "react-router-dom";

function Items({data}){
    return (
        <div className="row ">
        {
          data.map((value)=>{
           const {id, image, url, title} = value;
           return (
            <div className="col-md-3 mb-4 col-lg-1-5 isotope-item brands" key={id}>
                                <div className="portfolio-item">
                                    <Link to={url} target="_blank">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={image} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">{title}</span>
                                                    {/* <span className="thumb-info-type">{description}</span> */}
                                                </span>
                                                <span className="thumb-info-action">
                                                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fa fa-plus"></i></span>
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>

/*             <div className="col-sm-3 my-3" key={id}>
             <div className="card bg-light text-center">
                 <img src={image} className="img-fluid" style={{height:"200px"}}/>
                 <h3>{title}</h3>
                 <p>{description}</p>
            </div>
         </div> */
           )
          })
        }
</div>
    )
}
export default Items;