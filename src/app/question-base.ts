
interface optionValue {
    code: string;
    display: string;
}
interface T {
  value: undefined;
  linkId: string;
  text: string;
  required: boolean;
  controlType: string;
  type: string;
  option: {valueCoding: optionValue}[]|undefined;
}
export class QuestionBase<T> {
  value: undefined;
  linkId: string;
  text: string;
  required: boolean;
  controlType: string;
  type: string;
  option: {valueCoding: optionValue}[]|undefined;
  constructor(options: any) {
      this.value = options.value;
      this.linkId = options.linkId || "";
      this.text = options.text || '';
      this.required = !!options.required;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.option = options.option === undefined ? [] : options.option; 
  }
}