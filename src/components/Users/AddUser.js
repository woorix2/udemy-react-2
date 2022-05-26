import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  console.log(styles);
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};
export default AddUser;
