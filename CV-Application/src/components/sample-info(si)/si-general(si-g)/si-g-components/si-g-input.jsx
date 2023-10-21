export function Si_g_input() {
  return (
    <>
      <h4>Personal</h4>
      <div key="first-name">
        <label htmlFor="">First Name</label>
        <input type="text" />
      </div>
      <div key="last-name">
        <label htmlFor="">Last Name</label>
        <input type="text" />
      </div>
      <div key="email">
        <label htmlFor="">Email</label>
        <input type="email" />
      </div>
      <div key="phone">
        <label htmlFor="">Phone</label>
        <input type="tel" />
      </div>
      <div key="address">
        <label htmlFor="">Address</label>
        <input type="text" />
      </div>
    </>
  );
}
