import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsResolver } from './product.resolver';
import { ProductsService } from './product.service';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from '../productsTags/entities/productsTag.entity';
import { ProductsTagsService } from '../productsTags/productsTags.service';
import { ProductSubscriber } from './entities/product.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
      ProductTag,
    ]),
  ],
  providers: [
    ProductSubscriber, //
    ProductsResolver, //
    ProductsService, //
    ProductsSaleslocationsService,
    ProductsTagsService,
  ],
})
export class ProductsModule {}
