import { Directive } from '@angular/core';
import { Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;
  condition = false;
  constructor(
    private templateRef: TemplateRef<any>, // 获取模板的内容
    private viewContainer: ViewContainerRef   // 访问视图容器
  ) { }


  @Input()
  set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
