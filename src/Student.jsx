import Card from "./Card";
import cat1 from './images/cat1.jpg'
import cat2 from './images/cat2.jpg'
import cat3 from './images/cat3.jpg'
import './styles/Student.css'
const students = [
    {id: 1, name: "John Doe", image: cat1, email:"cat1.gmail.com"},
    {id: 2, name: "Juan Tan", image: cat2, email:"cat2.gmail.com"},
    {id: 3, name: "William James", image: cat3, email:"cat3.gmail.com"},
    {id: 4, name: "Dennis Yoyo", image: cat2, email:"cat2.gmail.com"},
  ];
export default function Student(){
        return(
            <div className="card-container">
                {students.map(student => (
                    <Card key={student.id} student={student} />
                ))}
            </div>
        );
}