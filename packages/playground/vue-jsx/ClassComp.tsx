import { Component, Ref, VueComponent, VueService } from 'vue3-oop'
import { CountService } from './count.service'



@Component()
export class DeclareComponent extends VueComponent {
  constructor(private countService: CountService) {super()}
  @Ref() count = 1

  add() {
    this.count++
  }

  render() {
    return (
      <>
        <div onClick={() => this.countService.add()}>
          DeclareComponentaaaa
          count: {this.count}
          countService: {this.countService.count}
        </div>
        <div onClick={() => this.add()}>
          self count: {this.count}
        </div>
      </>
    )
  }
}

class DefaultComp extends VueComponent {
  render() {
    return (
      <div>
        DefaultComp1111ssss
      </div>
    )
  }
}

export default DefaultComp
