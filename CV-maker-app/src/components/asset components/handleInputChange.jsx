export function handleInputChange(e, id, data, setData) {
  setData(
    data.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          value: e.target.value,
        };
      } else {
        return entry;
      }
    })
  );
}
