import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const STATS_URL =
  "https://mrumwyqbcvcygfbrlydf.supabase.co/functions/v1/analytics_intern";

type Platform = "all" | "ios" | "android";
type Range = 7 | 14 | 30;

type InternStats = {
  range: number;
  platform: string;
  startDay: string;
  dau: number;
  d1: string;
  d7: string;
  opens: number;
  newProfiles: number;
  apple: number;
  google: number;
  funnelOnboarding: string;
  funnelBleGranted: string;
  radioShare: string;
  ghostShare: string;
  friendsOnlyShare: string;
  nearbyShare: string;
  friendsMed: string;
  communityMed: string;
  anonMed: string;
  connectTaps: number;
  newConnects: number;
  newEncounters: number;
  newMessages: number;
  findStarts: number;
  findBlocked: number;
  findDur: string;
  chatOpens: number;
  chatSends: number;
  bleDeniedPct: string;
  blockers: string;
  hours: number[];
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
  const [data, setData] = useState<InternStats | null>(null);
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
    const url = `${STATS_URL}?k=${encodeURIComponent(k)}&days=${range}&p=${platform}&format=json`;
    void fetch(url, { headers: { accept: "application/json" } })
      .then(async (res) => {
        if (res.status === 404) throw new Error("not-found");
        if (!res.ok) throw new Error("stats failed");
        return (await res.json()) as InternStats;
      })
      .then((payload) => {
        setError(null);
        setData(payload);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "not-found");
      });
  }, [k, range, platform]);

  const setFilter = (next: { days?: Range; p?: Platform }) => {
    const q = new URLSearchParams(params);
    if (next.days) q.set("days", String(next.days));
    if (next.p) q.set("p", next.p);
    setParams(q, { replace: true });
  };

  if (!k || error === "not-found" || error === "missing") {
    return (
      <main className="min-h-[100svh] bg-page flex items-end px-5 pb-10 md:px-12">
        <p className="font-display text-[14px] text-mute m-0">Seite nicht gefunden.</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-[100svh] bg-page flex items-end px-5 pb-10 md:px-12">
        <p className="font-display text-[14px] text-mute m-0">{error}</p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-[100svh] bg-page flex items-end px-5 pb-10 md:px-12">
        <p className="font-display text-[14px] text-mute m-0">Lade Zahlen …</p>
      </main>
    );
  }

  const tiles: Array<[string, string | number]> = [
    ["DAU", data.dau],
    ["D1", data.d1],
    ["D7", data.d7],
    ["Opens", data.opens],
    ["Neue Accounts", data.newProfiles],
    ["Login Apple", data.apple],
    ["Login Google", data.google],
    ["Onboarding", data.funnelOnboarding],
    ["BLE granted", data.funnelBleGranted],
    ["Radio an", data.radioShare],
    ["Ghost", data.ghostShare],
    ["Nur Freunde", data.friendsOnlyShare],
    ["Nearby ≠ 0", data.nearbyShare],
    ["Median friends", data.friendsMed],
    ["Median community", data.communityMed],
    ["Median anon", data.anonMed],
    ["Connect-Taps", data.connectTaps],
    ["Neue Connects", data.newConnects],
    ["Encounter-Tage", data.newEncounters],
    ["Nachrichten", data.newMessages],
    ["Find starts", data.findStarts],
    ["Find blocked", data.findBlocked],
    ["Find Median ms", data.findDur],
    ["Chat opens", data.chatOpens],
    ["Chat sends", data.chatSends],
    ["BLE denied", data.bleDeniedPct],
  ];

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

      <main className="mx-auto max-w-[980px] px-5 py-10 md:px-12 md:py-14">
        <p className="font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-mute m-0">
          Übersicht
        </p>
        <h1 className="font-display font-semibold tracking-[-0.045em] leading-[0.9] text-[clamp(2.4rem,7vw,4.4rem)] mt-3 mb-4">
          Nutzung
        </h1>
        <p className="font-body text-[16px] text-mute max-w-[36rem] m-0">
          Ob Nearby das versprochene tut. Kein Geräte-ID, kein Chattext. Einzelzeilen
          90 Tage, danach Summen. Europe/Berlin.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Seg
            value={String(range)}
            onChange={(v) => setFilter({ days: Number(v) as Range })}
            options={[
              ["7", "7 Tage"],
              ["14", "14 Tage"],
              ["30", "30 Tage"],
            ]}
          />
          <Seg
            value={platform}
            onChange={(v) => setFilter({ p: v as Platform })}
            options={[
              ["all", "Alle"],
              ["ios", "iOS"],
              ["android", "Android"],
            ]}
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px bg-[var(--hair)] sm:grid-cols-3 lg:grid-cols-4">
          {tiles.map(([label, value]) => (
            <div key={label} className="bg-page px-4 py-5">
              <p className="font-display text-[12px] text-mute m-0">{label}</p>
              <p className="font-display text-[28px] font-semibold tracking-[-0.04em] mt-2 mb-0">
                {value}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-12 border-t border-[var(--hair)] pt-8">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Find-Blocker
          </h2>
          <p className="font-display text-[14px] text-mute mt-3 mb-0">{data.blockers}</p>
        </section>

        <section className="mt-10 border-t border-[var(--hair)] pt-8">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] m-0">
            Stundenraster
          </h2>
          <p className="font-display text-[13px] text-mute mt-2 mb-6">
            app_open, Europe/Berlin.
          </p>
          <HourBars hours={data.hours} />
        </section>
      </main>
    </div>
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
              on ? "bg-ink text-night" : "bg-transparent text-mute"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function HourBars({ hours }: { hours: number[] }) {
  const max = useMemo(() => Math.max(1, ...hours), [hours]);
  return (
    <div className="flex items-end gap-[3px] h-16">
      {hours.map((n, hour) => (
        <div key={hour} className="flex-1 flex flex-col items-center justify-end h-full" title={`${hour}:00 ${n}`}>
          <span
            className="w-full bg-ink"
            style={{ height: `${Math.max(n ? 4 : 1, Math.round((n / max) * 64))}px`, opacity: n ? 1 : 0.2 }}
          />
        </div>
      ))}
    </div>
  );
}
