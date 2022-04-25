import { Request, Response } from 'express';
import * as categoryServices from "../services/categoryServices.js"


export async function getAllCategoriesWithTeachers(req: Request, res: Response) {

  const data = await categoryServices.getAllCategoriesWithTeachers()

  res.send(data);

};

export async function getAllCategoriesWithDisciplines(req: Request, res: Response) {
  
  const data = await categoryServices.getAllCategoriesWithDisciplines()

  res.send(data)
};