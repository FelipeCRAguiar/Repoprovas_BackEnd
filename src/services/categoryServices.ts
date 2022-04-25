import * as categoryRepository from "../repositories/categoryRepository.js"

export async function getAllCategoriesWithTeachers() {
  
  const data = await categoryRepository.findCategoriesWithTeachers()

  return data
}

export async function getAllCategoriesWithDisciplines() {
  
  const data = await categoryRepository.findCategoriesWithDisciplines()

  return data
}