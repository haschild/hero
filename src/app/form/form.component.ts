import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/form.validate.directive';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  values = '';
  onKey(event: any) { // without type info
    if (typeof event === 'string') {
      this.values = event;
    } else {
      this.values = event.target.value + ' | ';
      // this.values = (<HTMLInputElement>event.target).value;  // 将类型强转
      //  this.values = event.key;  // 可以获取到按下的字母
    }
  }
  // ------------------------------------------------ $event------

  clear(value: string): void {
    this.values = value;
  }

  // --------------------------------------------  form 表单用例
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Hero(42, 'Leon', this.powers[1], 'Chuck Overstreet');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  // ngOnInit() {}
  // ----------------------------------- 自定义表单验证
heroForm: FormGroup;
  hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

}



export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }

}
const myHero = new Hero(42, 'SkyDog',
  'Fetch any object at any distance',
  'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"


