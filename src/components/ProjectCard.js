import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={6} lg={6}>
       <a href={`${url}`} target="_blank">
      <div className="proj-imgbx">
        <img className="card-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
       </a>
    </Col>
  )
}
