export const TextName = (p) => {
  return (
    <div>
      <form action="/name" method="post">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={p.name}
            onChange={p.onChange}
            onClick={() => {}}
          />
          {p.errorMessage && <p>{p.errorMessage}</p>}
        </label>
      </form>
    </div>
  );
};
