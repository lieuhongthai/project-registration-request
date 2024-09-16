import { Model as M, ModelStatic } from 'sequelize';
import { IRestfulAPI } from 'src/types/rest-full.type';

type Model<T extends M = any> = ModelStatic<T>;

class ModelService<T extends M> implements IRestfulAPI {
  protected model: Model<T>;

  constructor(_model: Model<T>) {
    this.model = _model;
  }
  async getAll(): Promise<any[]> {
    return await this.model.findAll();
  }
  async getById(id: any): Promise<any> {
    return await this.model.findOne({ where: { id } });
  }
  async create(data: any): Promise<any> {
    return await this.model.create(data);
  }
  async update(id: any, data: any): Promise<any> {
    return await this.model.update(data, { where: { id } });
  }
  async delete(id: any): Promise<number> {
    return await this.model.destroy({ where: { id } });
  }
}

export default ModelService;
