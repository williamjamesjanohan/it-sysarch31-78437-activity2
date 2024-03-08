import './styles/Card.css'
export default function Card({ student }){

       return(
        <div className="card">
                <img className="card-image" src={student.image} alt="cat.jpg" width="300" height="300"/>
            <h2 className="card-title">{student.name}</h2>
            <p className="card-text">{student.email}</p>
        </div>
       )
}