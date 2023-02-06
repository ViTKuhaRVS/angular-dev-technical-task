export interface IActionButton {
  label: string;
  class: string;
  handler: (param: any) => void;
  isSubmit?: boolean;
}
