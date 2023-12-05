import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { COURSE_STACK, TCourse, TStudent } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

//getAllCourses
app.get("/courses", (req:Request, res:Response) =>{
    res.send(courses)
})

//findCourseByName
app.get("/courses/search",(req: Request, res: Response) =>{
    const nameToFind = req.query.name as string
    const result: TCourse[] = courses.filter((course)=>{
        return course.name.toLowerCase().includes(nameToFind.toLowerCase())
    })
    res.send(result)
})

//createNewCourse
app.post("/courses", (req: Request, res:Response)=>{
    const id = req.body.id as string
    const name = req.body.name as string
    const lessons = req.body.lessons as number
    const stack = req.body.stack as COURSE_STACK

    const NewCourse = {
        id,
        name: name,
        lessons,
        stack

    }

    courses.push(NewCourse)
    res.status(201).send("Curso registrado com sucesso!")
    //No post normalmente só recebemos uma mensagem para saber se deu certo
})


//getAllStudents
app.get("/students",(req: Request, res: Response)=>{
    res.send(students)
})

//getStudentByName
app.get("/students/search", (req: Request, res: Response)=>{
    const name = req.query.name as string
    const resultStudent : TStudent[] = students.filter((student)=>{
        return student.name.toLowerCase().includes(name.toLowerCase())
    })
    res.send(resultStudent)
})

//postStudent
app.post("/students", (req: Request, res: Response)=>{
    const id = req.body.id as string
    const name = req.body.name as string
    const age = req.body.age as number

    const newStudent = {
        id,
        name,
        age
    }
    students.push(newStudent)
    res.status(201).send("Aluno cadastrado com sucesso!")
})