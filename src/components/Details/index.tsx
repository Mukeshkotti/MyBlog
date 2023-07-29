import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const propsData = location.state;
    return (
        <section className="d-flex justify-content-center">
            <div className="card col-3">
                <img className="card-img-top" src={propsData.thumbnail} alt={propsData.title} />
                <div className="card-body">
                    <h5 className="card-title">{propsData.title}</h5>
                    <p className="card-text">{propsData.description}</p>
                    <button className="btn btn-primary">More</button>
                </div>
                </div>
        </section>
    )
}

export default Details;