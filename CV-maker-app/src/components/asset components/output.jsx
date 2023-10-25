export function OutputShits({ shit }) {
  return (
    <div>
      {shit.map((entry) => (
        <li key={entry.id}>{entry.value}</li>
      ))}
    </div>
  );
}
