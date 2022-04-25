import { db } from "../db.js";


export async function findAllDisciplines() {
  
  const data = await db.disciplines.findMany({
    include: {
      teacherDisciplines: true
    }
  })

  return data
}