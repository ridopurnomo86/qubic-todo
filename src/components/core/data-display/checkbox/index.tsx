import { CheckboxPropsType } from "./types";

const Checkbox = ({ id, onChange, checked, value }: CheckboxPropsType) => (
  <input
    id={id}
    data-indeterminate="false"
    type="checkbox"
    value={value}
    checked={checked}
    onChange={onChange}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
);

export default Checkbox;
