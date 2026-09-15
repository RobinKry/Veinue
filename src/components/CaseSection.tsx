const rows = [
  {
    title: 'Friends',
    body: 'Open the app. See who you already know in the room. A list of who is actually here.',
  },
  {
    title: 'Community',
    body: 'Then everyone else from Veinue nearby. Connect without a line. Chat only if they say yes.',
  },
  {
    title: 'Find',
    body: 'Lost a friend in the crowd? Find is friends only. A pulse when they are close.',
  },
];

const CaseSection = () => (
  <section id="product" className="px-5 py-28 md:px-12 md:py-36 border-t rule">
    <div className="max-w-[980px]">
      <h2 className="font-display font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2.2rem,5vw,4.25rem)] text-ink m-0 mb-16">
        Who is here.
      </h2>
      <ul className="list-none m-0 p-0">
        {rows.map((row) => (
          <li key={row.title} className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-10 py-8 border-t rule first:border-t-0 md:first:border-t">
            <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] m-0 text-ink">
              {row.title}
            </h3>
            <p className="font-body text-[18px] leading-[1.5] text-mute m-0">
              {row.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CaseSection;
