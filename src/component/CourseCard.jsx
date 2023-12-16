function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title}></img>
      </div>
      <div className="course-item__detail">
        <CourseCardBody
          title={course.title}
          desc={course.description}
          rate={course.rate}
        />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody({ title, desc, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
      <span className="rate">⭐{rate}</span>
    </div>
  );
}

function CourseCardFooter({ course }) {
  const startedTime = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  })
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((t) => (
          <span key={t} className="badge badge--secondary">
            {course.tags}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">
          {startedTime}
        </div>
        <span
          className={`badge ${
            course.status === "Active"
              ? "badge--primary"
              : course.status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {course.status}
        </span>
      </div>
    </div>
  );
}
