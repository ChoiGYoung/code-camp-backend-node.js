import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from './entities/productSaleslocation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductSaleslocationInput } from './dto/product-saleslocation.input';

@Injectable()
export class ProductsSaleslocationsService {
  constructor(
    @InjectRepository(ProductSaleslocation)
    private readonly productsSaleslocationsRepository: Repository<ProductSaleslocation>,
  ) {}

  create({ ...productSaleslocation }: ProductSaleslocationInput) {
    return this.productsSaleslocationsRepository.save({
      ...productSaleslocation,

      // 하나하나 직접 나열하는 방식
      // address: productSaleslocation.address,
      // addressDetail: productSaleslocation.addressDetail,
      // lat: ...
    });
  }
}