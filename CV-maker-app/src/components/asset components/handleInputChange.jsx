export function handleInputChange(e, id, data, setData) {
  const newData = data.map((entry) => {
    if (entry.id === id) {
      return {
        ...entry,
        value: e.target.value,
      };
    } else {
      return entry;
    }
  });
  setData(newData);
  return newData;
}
