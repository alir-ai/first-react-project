function CourseCard (){
    return(
    <div className="course-item">
            <div className="course-item__img">
              <img src="../public/images/img1.jpg" alt="image-1"></img>
            </div>
            <div className="course-item__detail">
              <div className="course-item__body">
                <div>
                  <p className="title">react.js course</p>
                  <p className="desc">the ultimate react & redux</p>
                </div>
                <span className="rate">4</span>
              </div>
              <div className="course-item__footer">
                <div className="tags">
                  <span className="badge badge--secondary">react.js</span>
                  <span className="badge badge--secondary">frontend</span>
                </div>
                <div className="caption">
                  <div className="date">
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                      day: "numeric",
                    })}
                  </div>
                  <span className="badge badge--primary">completed</span>
                </div>
              </div>
            </div>
          </div>
    );
}


export default CourseCard;
