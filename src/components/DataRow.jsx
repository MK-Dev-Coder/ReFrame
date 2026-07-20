export default function DataRow({ k, v }) {
  return (
    <div className="data-row">
      <span className="data-k">{k}</span>
      <span className="data-v">{v}</span>
    </div>
  );
}
