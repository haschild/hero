import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // 这里定义是 public 是为了给 HTML 使用值
 // 疑问，为何这里注入后直接就有参数值了？
 // 在 hero-service 中赋值，message-service 和 hero-service 同属于 app.module.ts 在区间，值是共享的
  constructor(public messageService: MessageService) { }

  ngOnInit() {
    console.log(this.messageService);
  }

}
