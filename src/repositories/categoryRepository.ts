import { db } from "../db.js";


export async function findCategoriesWithTeachers() {
  
  const data = await db.categories.findMany({
    select: {
      id: true,
      name: true,
      tests: {
        include: {
          teacherDisciplines: {
            include: {
              teachers: true
            }
          }
        }
      }
    }
  })

  return data
}

export async function findCategoriesWithDisciplines() {
  
  const data = await db.categories.findMany({
    select: {
      id: true,
      name: true,
      tests: {
        include: {
          teacherDisciplines: {
            include: {
              disciplines: true
            }
          }
        }
      }
    }
  })

  return data
}