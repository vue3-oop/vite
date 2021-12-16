import { Component, Ref, VueComponent, VueService } from 'vue3-oop'
import { Injectable } from 'injection-js'

@Injectable()
class CountService extends VueService {
  @Ref() count = 1
  add() {
    this.count++
  }
}


@Component()
export class DeclareComponent extends VueComponent {
  constructor(private countService: CountService) {super()}
  @Ref() count = 1
  render() {
    return (
      <div onClick={() => this.countService.add()}>
        DeclareComponentaaaa
        count: {this.count}
        countService: {this.countService.count}
      </div>
    )
  }
}

export default class DefaultComp extends VueComponent {
  render() {
    return (
      <div>
        DefaultComp1111
      </div>
    )
  }
}
