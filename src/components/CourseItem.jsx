function CourseItem({course}){
    return(
        <div className="course-item">
        <div className="course-item__img">
          <img src={course.imageUrl} alt={course.title} />
        </div>
        <div className="course-item__detail">
         <CourseBody rate={course.rate} description={course.description} title={course.title}/>
         <CourseFooter course={course}/>
        </div>
      </div>
    )
}

export default CourseItem;



function CourseBody({title,description,rate}){
  return (
    <div className="course-item__body">
    <div>
      <p className="title">{title}</p>
      <p className="desc">{description}</p>
    </div>
    <span className="rate">
      <img className="star" src="/public/images/star-svgrepo-com.svg" alt="" />
      {rate}
    </span>
  </div>
  )
}


function CourseFooter({course}){
  return (
    <div className="course-item__footer">
    <div className="tags">
     {
      course.tags.map((t)=> <p key={t} className="badge badge--secondary">{course.tags}</p> )
     }
    </div>
    <div className="caption">
      <div className="date">
        {new Date(course.start).toLocaleDateString("en-Us",
          {
            month:"short",
            year:"numeric",
            day:"numeric"
          }
        )}
      </div>
      <span className={`badge ${
       course.status === "Active" ? "badge--primary" :
       course.status=== "Upcoming" ? "badge--danger":
       "badge--secondary"
      }`}>{course.status}</span>
    </div>
    </div>
  )
}

