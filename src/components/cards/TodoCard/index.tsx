import Checkbox from "components/core/data-display/checkbox";
import { TodoCardpropsType } from "./types";

const TodoCard = ({
  title,
  onCheck,
  datetime,
  value,
  checked,
}: TodoCardpropsType) => (
  <article className="border rounded p-4 bg-white" onClick={onCheck}>
    <div className="flex items-center">
      <Checkbox
        checked={checked}
        id="todo-card-checkbox"
        onChange={onCheck}
        value={value}
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-md font-medium text-neutral-900 dark:text-gray-300"
      >
        {title}
      </label>
    </div>
    <div className="mt-2">
      <div className="flex items-center align-center">
        <span
          className="material-icons text-neutral-600 mr-2"
          style={{
            fontSize: "16px",
          }}
        >
          calendar_today
        </span>
        <p className="text-xs text-neutral-600 font-medium antialiased">
          {datetime}
        </p>
      </div>
    </div>
  </article>
);

export default TodoCard;
