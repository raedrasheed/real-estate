import { useEffect, useState } from "react";
import ImageCarousel from "../misc/ImageCarousel";
import "./SingleProperty.css";
import {useParams} from "react-router-dom";
import properties from "../../datas/properties.js";
import NotFound from "../pages/NotFound";

export default function SingleProperty() {
  const [property, setProperty] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setProperty(
      properties.find((p) => p.id == id)
    )
    window.scrollTo(0, 0)
  }, [property, id]);

  return (
  property ?
    <section className="single-property">
        <h1 className='page-heading'>{property.name}</h1>
        <ImageCarousel images={property.images} />
        {/* <div className="property-value">
          <h2>VALUE OF NFT</h2>
          <h2 className="cl-blue num">$ 10</h2> <br/>
          <h2>FUNDING OBJECTIVES</h2>
          <h2 className="cl-blue num">$ 473 750</h2>
        </div> */}
        <div className="info-button">
          <div className="infos">
            <div className="info1">
              <h3>Target Profitability</h3>
              <h3 className="cl-blue num">{property.profit}%</h3>
            </div>
            <div className="info2">
              <h3>Objective of returned revenues</h3>
              <h3 className="cl-blue num">{property.returns}%</h3>
            </div>
            <div className="info3">
              <h3>Valuation of the property</h3>
              <h3 className=" cl-blue num">$ {property.price}</h3>
            </div>
          </div>
          <button className="buy-button">Buy your NFT</button>
        </div>
    </section>
  :
  <NotFound/>
  );
}
