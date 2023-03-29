const Form = () => {
  return (
    <form className="form" action="">
      <label className="form__label" htmlFor="email">
        Email ID
      </label>
      <br />
      <input
        className="form__input"
        type="email"
        name="email"
        id="email"
        placeholder="name.surname@mail.com"
      />
    </form>
  );
};

export default Form;
