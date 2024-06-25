import { Field, Int , ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => Int)
  writer: string;

  @Column()
  @Field(() => Int)
  title: string;

  @Column()
  @Field(() => Int)
  contents: string;
}
