import * as termRepository from "../repositories/termRepository.js";

export async function getAllTerms() {
  
  const data = await termRepository.findAllTerms()

  return data
}