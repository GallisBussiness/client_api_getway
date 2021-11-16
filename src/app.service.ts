import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  userService: ClientProxy;
  constructor(){
    this.userService = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 1000,
      },
    });
  }
  getHello(): Observable<string> {
    return this.userService.send<string,string>('findAllUser','');
  }
}
