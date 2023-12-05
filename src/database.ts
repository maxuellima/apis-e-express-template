import { COURSE_STACK, TCourse, TStudent } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const students: TStudent[] = [
    {
        id: "e001",
        name: "Frodo Bolseiro",
        age: 31
    },
    {
        id: "e002",
        name: "Samwise Gamgee",
        age: 37
    },
    {
        id: "003",
        name: "Merry Brandybuck",
        age: 36
    },
    {
        id: "e004",
        name: "Pippin Took",
        age: 38
    },
    {
        id:"e005",
        name: "Aragorn II Elessar",
        age: 39
    },
    {
        id: "e006",
        name: "Legolas Greenleaf",
        age: 36
    },
    {
        id: "e007",
        name: "Gandalf the Grey",
        age: 1001
    }
]