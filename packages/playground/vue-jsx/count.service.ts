import { Injectable } from 'injection-js'
import { Ref, VueService } from 'vue3-oop'

@Injectable()
export class CountService extends VueService {
  @Ref() count: number = 1
  add() {
    this.count++
  }
}
