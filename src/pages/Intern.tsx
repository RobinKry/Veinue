import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const STATS_URL =
  "https://mrumwyqbcvcygfbrlydf.supabase.co/functions/v1/analytics_intern";

const HIST_BUCKETS = ["0", "1", "2", "3", "4", "5+"] as const;
const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

type Platform = "all" | "ios" | "android";
type Range = 7 | 14 | 30;
type HistBucket = (typeof HIST_BUCKETS)[number];

type RetentionWindow = {
  rate: number | null;
  returned: number;
  cohort: number;
};

type Summary = {
  people: number;
  opens: number;
  radioPeople: number;
  nearbyPeople: number;
  ghostPeople: number;
  friendsPeople: number;
  actedPeople: number;
  chatters: number;
  nearbyRate: number | null;
  chatRate: number | null;
  radioShare: number | null;
  ghostShare: number | null;
  friendsShare: number | null;
  friendsMed: number | null;
  communityMed: number | null;
  anonMed: number | null;
  connectTaps: number;
  findStarts: number;
  findBlocked: number;
  chatOpens: number;
  chatSends: number;
  onboarded: number;
  bleOk: number;
  bleNo: number;
  funnel: { opened: number; radio: number; nearby: number; acted: number };
  histogram: Record<HistBucket, number>;
  hours: number[];
  weekday: number[];
  series: Array<{ day: string; people: number; nearby: number }>;
  blockers: Array<{ key: string; n: number }>;
};

type PersonRow = {
  id: string;
  shortId: string;
  platform: string;
  days: number;
  nearby: number;
  chats: number;
  finds: number;
  lastTs: string | null;
};

type Pack = {
  selected: Summary;
  today: Summary;
  week: Summary;
  month: Summary;
  retention: { d1: RetentionWindow; d7: RetentionWindow; d30: RetentionWindow };
  people: PersonRow[];
};

type StatsPayload = {
  range: number;
  today: string;
  days: string[];
  ios: Summary;
  android: Summary;
  byPlatform: { all: Pack; ios: Pack; android: Pack };
  db: {
    profiles: number;
    connects: number;
    encounters: number;
    messages: number;
    apple: number;
    google: number;
  };
};

function asRange(raw: string | null): Range {
  const n = Number(raw);
  return n === 7 || n === 30 ? n : 14;
}

function asPlatform(raw: string | null): Platform {
  return raw === "ios" || raw === "android" ? raw : "all";
}

export default function InternPage() {
  const [params, setParams] = useSearchParams();
  const k = params.get("k")?.trim() ?? "";
  const range = asRange(params.get("days"));
  const platform = asPlatform(params.get("p"));
  const [data, setData] = useState<StatsPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Intern – Veinue";
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute("content", "noindex, nofollow");
    else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow";
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    if (!k) {
      setError("missing");
      return;
    }
    const url = `${STATS_URL}?k=${encodeURIComponent(k)}&days=${range}`;
    void fetch(url, { headers: { accept: "application/json" } })
      .then(async (res) => {
        if (res.status === 404) throw new Error("not-found");
        if (!res.ok) throw new Error("stats failed");
        return (await res.json()) as StatsPayload;
      })
      .then((payload) => {
        setError(null);
        setData(payload);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "not-found");
      });
  }, [k, range]);

  const setFilter = (next: { days?: Range; p?: Platform }) => {
    const q = new URLSearchParams(params);
    if (next.days) q.set("days", String(next.days));
    if (next.p) q.set("p", next.p);
    setParams(q, { replace: true });
  };

  if (!k || error === "not-found" || error === "missing") {
    return (
      <main className="min-h-[100svh] bg-page flex items-center justify-center px-5">
        <p className="font-display text-[14px] text-mute m-0">Seite nicht gefunden.</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-[100svh] bg-page flex items-center justify-center px-5">
        <p className="font-display text-[14px] text-mute m-0">{error}</p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-[100svh] bg-page flex items-center justify-center px-5">
        <p className="font-display text-[14px] text-mute m-0">Lade Zahlen …</p>
      </main>
    );
  }

  const pack = data.byPlatform[platform];
  const s = pack.selected;
  const maxPeople = Math.max(1, ...s.series.map((row) => row.people));
  const maxHist = Math.max(1, ...HIST_BUCKETS.map((b) => s.histogram[b] ?? 0));

  return (
    <div className="min-h-[100svh] bg-page text-ink">
      <header className="border-b border-[var(--hair)]">
        <div className="mx-auto flex h-14 max-w-[980px] items-center gap-3 px-5 md:px-12">
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em]">
            Veinue
          </span>
          <span className="font-display text-[13px] text-mute">Intern · App</span>
        </div>
      </header>

      <main className="mx-auto max-w-[980px] px-5 py-10 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-mute m-0">
              Übersicht
            </p>
            <h1 className="font-display text-[32px] font-semibold tracking-[-0.04em] mt-2 mb-0">
              Nutzung
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Seg
              value={platform}
              onChange={(v) => setFilter({ p: v as Platform })}
              options={[
                ["all", "Zusammen"],
                ["ios", "iOS"],
                ["android", "Android"],
              ]}
            />
            <Seg
              value={String(range)}
              onChange={(v) => setFilter({ days: Number(v) as Range })}
              options={[
                ["7", "7 Tage"],
                ["14", "14 Tage"],
                ["30", "30 Tage"],
              ]}
            />
          </div>
        </div>

        <p className="font-body text-[16px] text-mute max-w-[36rem] mt-3 mb-0">
          Ob Nearby das versprochene tut. Hash aus Account, kein Geräte-ID, kein
          Chattext, kein Name. iOS und Android getrennt. Einzelzeilen 90 Tage.
          Europe/Berlin.
        </p>

        <div className="mt-6 grid gap-px bg-[var(--hair)] sm:grid-cols-2">
          <Kpi
            label="iOS"
            value={data.ios.people}
            hint={`${data.ios.nearbyPeople} Nearby · ${data.ios.chatters} Chat · ${formatPct(data.ios.nearbyRate)} Nearby-Quote`}
          />
          <Kpi
            label="Android"
            value={data.android.people}
            hint={`${data.android.nearbyPeople} Nearby · ${data.android.chatters} Chat · ${formatPct(data.android.nearbyRate)} Nearby-Quote`}
          />
        </div>

        <div className="mt-px grid gap-px bg-[var(--hair)] sm:grid-cols-2 lg:grid-cols-4">
          <Kpi
            label="App-Tage"
            value={s.people}
            hint={`${s.opens} Öffnen · ${s.radioPeople} Radio an`}
          />
          <Kpi
            label="Nearby-Quote"
            value={formatPct(s.nearbyRate)}
            hint={`${s.nearbyPeople} mit Menschen in der Nähe${medianHint(s)}`}
          />
          <Kpi
            label="Connects"
            value={s.connectTaps}
            hint={`Taps. In der DB ${data.db.connects} Connects · ${data.db.encounters} Encounter-Tage`}
          />
          <Kpi
            label="Chat-Quote"
            value={formatPct(s.chatRate)}
            hint={`${s.chatters} mit Chat · ${s.chatSends} Nachrichten · ${s.chatOpens} geöffnet`}
          />
        </div>

        <section className="mt-8 overflow-x-auto border border-[var(--hair)]">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="font-display text-[11px] uppercase tracking-[0.08em] text-mute">
              <tr>
                <th className="px-4 py-3 font-medium">Zeitraum</th>
                <th className="px-4 py-3 font-medium">App-Tage</th>
                <th className="px-4 py-3 font-medium">Nearby</th>
                <th className="px-4 py-3 font-medium">Connect</th>
                <th className="px-4 py-3 font-medium">Chat</th>
              </tr>
            </thead>
            <tbody>
              <PeriodRow label="Heute" summary={pack.today} />
              <PeriodRow label="7 Tage" summary={pack.week} />
              <PeriodRow label="30 Tage" summary={pack.month} />
            </tbody>
          </table>
        </section>

        <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Weg durchs Produkt
          </h2>
          <p className="font-display text-[13px] text-mute mt-1 mb-0">
            Der übliche Weg: da sein, Radio an, jemanden in der Nähe sehen, dann
            Connect, Find oder Chat. Ghost zählt nicht als Nearby-Moment.
          </p>
          <Funnel
            opened={s.funnel.opened}
            radio={s.funnel.radio}
            nearby={s.funnel.nearby}
            acted={s.funnel.acted}
          />
          <p className="font-display text-[12px] text-mute mt-4 mb-0">
            Onboarding {s.onboarded}
            {s.people ? ` · ${formatPct(s.onboarded / s.people)}` : ""}
            {" · "}BLE erlaubt {s.bleOk}
            {s.bleNo > 0 ? ` · BLE verweigert ${s.bleNo}` : ""}
          </p>
        </section>

        <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Nearby-Tage pro Person
          </h2>
          <p className="font-display text-[13px] text-mute mt-1 mb-0">
            0 = App offen, niemanden in der Nähe gesehen. 5+ = fünf oder mehr
            Tage mit Nearby-Moment im gewählten Zeitraum.
          </p>
          <div className="mt-6 flex items-end gap-2">
            {HIST_BUCKETS.map((bucket) => {
              const n = s.histogram[bucket] ?? 0;
              return (
                <div key={bucket} className="flex min-w-0 flex-1 flex-col items-center gap-1">
                  <span className="font-display text-[12px]">{n || ""}</span>
                  <span
                    className="w-full bg-[var(--ink)]"
                    style={{
                      height: n ? `${Math.max(8, (n / maxHist) * 140)}px` : "2px",
                      opacity: n ? 1 : 0.25,
                    }}
                  />
                  <span className="font-display text-[10px] text-mute">{bucket}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Sichtbarkeit
          </h2>
          <p className="font-display text-[13px] text-mute mt-1 mb-0">
            Anteil der App-Tage, nicht der Accounts in der Datenbank.
          </p>
          <div className="mt-4 grid gap-px bg-[var(--hair)] sm:grid-cols-3">
            <Kpi label="Radio an" value={formatPct(s.radioShare)} hint={`${s.radioPeople} von ${s.people}`} />
            <Kpi label="Ghost" value={formatPct(s.ghostShare)} hint={`${s.ghostPeople} von ${s.people}`} />
            <Kpi label="Nur Freunde" value={formatPct(s.friendsShare)} hint={`${s.friendsPeople} von ${s.people}`} />
          </div>
        </section>

        {(s.findStarts > 0 || s.findBlocked > 0 || s.blockers.length > 0) && (
          <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
            <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
              Find
            </h2>
            <p className="font-display text-[13px] text-mute mt-1 mb-0">
              Gestartet {s.findStarts}. Blockiert {s.findBlocked}.
            </p>
            {s.blockers.length > 0 ? (
              <RankList rows={s.blockers} label={blockerLabel} />
            ) : null}
          </section>
        )}

        <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Schon in der Datenbank
          </h2>
          <p className="font-display text-[13px] text-mute mt-1 mb-0">
            Live-Tabellen, nicht Client-Events. Zeitraum wie oben. Unabhängig von
            iOS/Android-Filter.
          </p>
          <div className="mt-4 grid gap-px bg-[var(--hair)] sm:grid-cols-2 lg:grid-cols-4">
            <Kpi
              label="Neue Accounts"
              value={data.db.profiles}
              hint={`${data.db.apple} Apple · ${data.db.google} Google`}
            />
            <Kpi label="Connects" value={data.db.connects} hint="neue Verbindungen" />
            <Kpi label="Encounter-Tage" value={data.db.encounters} hint="Paare, die sich gesehen haben" />
            <Kpi label="Nachrichten" value={data.db.messages} hint="ohne Text" />
          </div>
        </section>

        <section className="mt-8 overflow-hidden border border-[var(--hair)]">
          <div className="px-5 pt-5 sm:px-6">
            <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
              Tage im Zeitraum
            </h2>
            <p className="font-display text-[13px] text-mute mt-1 mb-0">
              Pseudonym, acht Zeichen, kein Klar-UUID. Eine Zeile ist ein Gerätetag.
            </p>
          </div>
          <PeopleTable people={pack.people} />
        </section>

        <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Wieder da
          </h2>
          <p className="font-display text-[13px] text-mute mt-1 mb-0">
            Gleicher Account-Hash über Tage. Offene Kohorten zählen nicht. Tag +1
            ist der nächste Kalendertag.
          </p>
          <div className="mt-4 grid gap-px bg-[var(--hair)] sm:grid-cols-3">
            <Kpi
              label="Tag +1"
              value={formatPct(pack.retention.d1.rate)}
              hint={`${pack.retention.d1.returned} von ${pack.retention.d1.cohort}`}
            />
            <Kpi
              label="7 Tage"
              value={formatPct(pack.retention.d7.rate)}
              hint={`${pack.retention.d7.returned} von ${pack.retention.d7.cohort}`}
            />
            <Kpi
              label="30 Tage"
              value={formatPct(pack.retention.d30.rate)}
              hint={`${pack.retention.d30.returned} von ${pack.retention.d30.cohort}`}
            />
          </div>
        </section>

        <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Wann
          </h2>
          <p className="font-display text-[13px] text-mute mt-1 mb-0">
            Öffnen der App, Europe/Berlin.
          </p>
          <WhenBars weekday={s.weekday} hours={s.hours} />
        </section>

        <section className="mt-8 border border-[var(--hair)] p-5 sm:p-6">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Verlauf · App-Tage
          </h2>
          <div className="mt-6 flex items-end gap-1.5 sm:gap-2">
            {s.series.map((row) => (
              <div key={row.day} className="flex min-w-0 flex-1 flex-col items-center gap-1">
                <div className="flex h-32 w-full items-end justify-center gap-0.5">
                  <span
                    className="w-[45%] bg-[var(--ink)]/25"
                    style={{ height: `${(row.people / maxPeople) * 100}%` }}
                    title={`${formatDay(row.day)}: ${row.people}`}
                  />
                  <span
                    className="w-[45%] bg-[var(--ink)]"
                    style={{ height: `${(row.nearby / maxPeople) * 100}%` }}
                    title={`${formatDay(row.day)}: ${row.nearby} Nearby`}
                  />
                </div>
                <span className="font-display text-[10px] text-mute">{formatDay(row.day)}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-4 font-display text-[12px] text-mute">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 bg-[var(--ink)]/25" /> App-Tage
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 bg-[var(--ink)]" /> Nearby
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

function PeriodRow({ label, summary }: { label: string; summary: Summary }) {
  return (
    <tr className="border-t border-[var(--hair)]">
      <td className="px-4 py-3 font-display">{label}</td>
      <td className="px-4 py-3 font-display">{summary.people}</td>
      <td className="px-4 py-3 font-display">{summary.nearbyPeople}</td>
      <td className="px-4 py-3 font-display">{summary.connectTaps}</td>
      <td className="px-4 py-3 font-display">{summary.chatSends}</td>
    </tr>
  );
}

function Funnel({
  opened,
  radio,
  nearby,
  acted,
}: {
  opened: number;
  radio: number;
  nearby: number;
  acted: number;
}) {
  const steps = [
    { label: "Da sein", n: opened },
    { label: "Radio an", n: radio },
    { label: "Nearby-Moment", n: nearby },
    { label: "Aktion", n: acted },
  ];
  return (
    <div className="mt-5 space-y-3">
      {steps.map((step, i) => {
        const width = opened > 0 ? (step.n / opened) * 100 : 0;
        const prev = i === 0 ? opened : steps[i - 1]!.n;
        const ofPrev = prev > 0 ? step.n / prev : null;
        return (
          <div key={step.label}>
            <div className="mb-1 flex items-baseline justify-between gap-3">
              <span className="font-display text-[14px] font-medium">{step.label}</span>
              <span className="font-display text-[12px] text-mute">
                {step.n}
                {opened > 0 ? ` · ${formatPct(step.n / opened)}` : ""}
                {i > 0 && ofPrev != null ? ` · ${formatPct(ofPrev)} vom Schritt davor` : ""}
              </span>
            </div>
            <div className="h-8 overflow-hidden bg-[var(--hair)]">
              <div
                className="h-full bg-[var(--ink)]"
                style={{ width: `${step.n > 0 ? Math.max(width, 3) : 0}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function WhenBars({ weekday, hours }: { weekday: number[]; hours: number[] }) {
  const days = weekday.length === 7 ? weekday : [0, 0, 0, 0, 0, 0, 0];
  const hrs = hours.length === 24 ? hours : Array.from({ length: 24 }, () => 0);
  const maxDay = Math.max(1, ...days);
  const maxHour = Math.max(1, ...hrs);
  return (
    <div className="mt-5 space-y-6">
      <div className="flex items-end gap-2">
        {days.map((n, i) => (
          <div key={WEEKDAYS[i]} className="flex min-w-0 flex-1 flex-col items-center gap-1">
            <span className="font-display text-[10px] text-mute">{n || ""}</span>
            <span
              className="w-full bg-[var(--ink)]"
              style={{
                height: n ? `${Math.max(8, (n / maxDay) * 72)}px` : "2px",
                opacity: n ? 1 : 0.25,
              }}
            />
            <span className="font-display text-[10px] text-mute">{WEEKDAYS[i]}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-px sm:gap-0.5">
        {hrs.map((n, hour) => (
          <div key={hour} className="flex min-w-0 flex-1 flex-col items-center">
            <span
              className="w-full bg-[var(--ink)]/50"
              style={{
                height: n ? `${Math.max(4, (n / maxHour) * 56)}px` : "2px",
                opacity: n ? 1 : 0.2,
              }}
              title={`${String(hour).padStart(2, "0")} Uhr: ${n}`}
            />
            {hour % 6 === 0 ? (
              <span className="mt-1 font-display text-[9px] text-mute">{hour}</span>
            ) : (
              <span className="mt-1 font-display text-[9px] text-transparent">0</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PeopleTable({ people }: { people: PersonRow[] }) {
  if (people.length === 0) {
    return (
      <p className="px-5 py-4 font-display text-[14px] text-mute sm:px-6">
        Keine App-Tage in diesem Zeitraum.
      </p>
    );
  }
  return (
    <div className="mt-4 max-h-[28rem] overflow-auto">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead className="sticky top-0 bg-page font-display text-[11px] uppercase tracking-[0.08em] text-mute">
          <tr>
            <th className="px-5 py-2.5 font-medium sm:px-6">Person</th>
            <th className="px-3 py-2.5 font-medium">Nearby</th>
            <th className="px-3 py-2.5 font-medium">Chat</th>
            <th className="px-3 py-2.5 font-medium">Find</th>
            <th className="px-5 py-2.5 font-medium sm:px-6">Zuletzt</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id} className="border-t border-[var(--hair)]">
              <td className="px-5 py-2.5 sm:px-6">
                <p className="font-display font-medium m-0">
                  {person.platform === "ios" ? "iOS" : "Android"} · {person.shortId}
                </p>
                <p className="font-display text-[11px] text-mute m-0">
                  {person.days === 1 ? "1 Tag" : `${person.days} Tage`}
                </p>
              </td>
              <td className="px-3 py-2.5 font-display">{person.nearby || "—"}</td>
              <td className="px-3 py-2.5 font-display text-mute">{person.chats || "—"}</td>
              <td className="px-3 py-2.5 font-display text-mute">{person.finds || "—"}</td>
              <td className="px-5 py-2.5 font-display text-mute sm:px-6">
                {person.lastTs ? formatBerlinStamp(person.lastTs) : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RankList({
  rows,
  label,
}: {
  rows: Array<{ key: string; n: number }>;
  label?: (key: string) => string;
}) {
  const max = Math.max(1, ...rows.map((row) => row.n));
  return (
    <ul className="mt-4 space-y-2 m-0 p-0 list-none">
      {rows.map((row) => (
        <li key={row.key}>
          <div className="flex items-baseline justify-between gap-3 font-display text-[14px]">
            <span className="min-w-0 truncate">{label ? label(row.key) : row.key}</span>
            <span className="shrink-0 text-mute">{row.n}</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden bg-[var(--hair)]">
            <div
              className="h-full bg-[var(--ink)]"
              style={{ width: `${Math.max(8, (row.n / max) * 100)}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Seg({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Array<[string, string]>;
}) {
  return (
    <div className="flex border border-[var(--hair)]">
      {options.map(([id, label]) => {
        const on = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`font-display text-[13px] px-3 py-2 border-0 cursor-pointer ${
              on ? "bg-[var(--ink)] text-[var(--page)]" : "bg-transparent text-mute"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function Kpi({ label, value, hint }: { label: string; value: string | number; hint: string }) {
  return (
    <div className="bg-page px-4 py-5">
      <p className="font-display text-[12px] text-mute m-0">{label}</p>
      <p className="font-display text-[28px] font-semibold tracking-[-0.04em] mt-1 mb-0">
        {value}
      </p>
      <p className="font-display text-[12px] text-mute mt-1 mb-0">{hint}</p>
    </div>
  );
}

function formatPct(rate: number | null): string {
  if (rate == null || Number.isNaN(rate)) return "—";
  return `${Math.round(rate * 100)}%`;
}

function formatNum(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return "—";
  return n >= 10 ? String(Math.round(n)) : n.toFixed(1).replace(".", ",");
}

function formatDay(iso: string): string {
  const [, month, day] = iso.split("-");
  return `${day}.${month}.`;
}

function formatBerlinStamp(iso: string): string {
  return new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

function medianHint(s: Summary): string {
  const parts = [
    s.friendsMed != null ? `Freunde ${formatNum(s.friendsMed)}` : null,
    s.communityMed != null ? `Community ${formatNum(s.communityMed)}` : null,
    s.anonMed != null ? `anonym ${formatNum(s.anonMed)}` : null,
  ].filter(Boolean);
  return parts.length ? ` · Median ${parts.join(" · ")}` : "";
}

function blockerLabel(key: string): string {
  const labels: Record<string, string> = {
    ghost: "Ghost",
    not_friend: "Kein Freund",
    permission: "Berechtigung",
    ble_off: "Bluetooth aus",
    other: "Sonstiges",
  };
  return labels[key] ?? key;
}
