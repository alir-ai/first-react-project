function CourseCard(props) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={props.course.imageUrl} alt="image-1"></img>
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">{props.course.title}</p>
            <p className="desc">{props.course.description}</p>
          </div>
          <span className="rate">{props.course.rate}</span>
        </div>
        <div className="course-item__footer">
          <div className="tags">
            {props.course.tags.map((t) => (
              <span key={t} className="badge badge--secondary">
                {props.course.tags}
              </span>
            ))}
          </div>
          <div className="caption">
            <div className="date">
              {new Date(props.course.start).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </div>
            <span className="badge badge--primary">{props.course.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
