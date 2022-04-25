import { db } from "../db.js";


export async function findAllTeachers() {
  
  const data = await db.teachers.findMany({
    select: {
      id: true,
      name: true,
      teacherDisciplines: true
    }
  })

  return data
}