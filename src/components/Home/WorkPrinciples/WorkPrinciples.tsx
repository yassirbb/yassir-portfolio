const principles = [
  'Design for clarity over cleverness.',
  'Ship iteratively and keep feedback loops tight.',
  'Treat accessibility and performance as core requirements.'
];

export function WorkPrinciples() {
  return (
    <section aria-labelledby="principles-title" className="card">
      <div className="section-heading">
        <p className="eyebrow">Approach</p>
        <h2 id="principles-title">Work principles</h2>
      </div>
      <ul className="principles-list">
        {principles.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ul>
    </section>
  );
}
