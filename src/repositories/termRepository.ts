import { db } from "../db.js";


export async function findAllTerms() {
  
  const data = await db.terms.findMany({
    select: {
      id: true,
      number: true,
      disciplines: {
        select: {
          id: true,
          name: true,
          teacherDisciplines: true
        }
      }
    }
  })

  return data
}