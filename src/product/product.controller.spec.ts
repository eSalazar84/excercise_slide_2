import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should delete a product of array', () => {
    expect(controller.remove('5')).not.toBeNull()
  })

  it('should get a product by id',()=>{
    

  })
});
