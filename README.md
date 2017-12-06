

##### 说明：
    @Input 结合单项绑定‘ [] ’ 绑定属性，可以实现父组件更改子组件的值。
    单项绑定的 “key” 是在子组件里定义的。
    1、通过缩减AppComponent的职责，我们简化了它。
    2、我们将来可以把HeroDetailComponent改进为功能更丰富的英雄编辑器，而不用动AppComponent。
    3、同样，我们也可以改进AppComponent而不用动英雄详情视图。
    4、我们可以在未来的其它父组件的模板中复用HeroDetailComponent。