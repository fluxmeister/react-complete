import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        /**
         * input prop holds another object by itself.
         * So, the value is an object, hence the double curly braces.
         * One pair of curly braces to evaluate a JavaScript expression 
         * which is passed in as a value. And then expression just 
         * happens to be a JavaScript object.
         * Hence, we have that other pair of curly braces.
         */
        input={{
          id: 'amount_' + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        /**
         * We just distribute these validation props onto the input
         * <input {...props.input} />
         */
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
