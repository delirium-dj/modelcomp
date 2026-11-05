# Task — Provider fact-audit (by category band, two per batch)

**Kickoff line (copy when forwarding):** `PROVIDER-AUDIT: start at the first
category band (Coding & MoE Models), sweep providers in category order, two per
batch then break and prompt.`

You may also be given a specific provider or category to start/limit to (e.g.
`PROVIDER-AUDIT: mistral`, `PROVIDER-AUDIT: band=gpu`, or `PROVIDER-AUDIT: from
mistral`). If none is given, start at the first band and keep going until told
to stop.

---

## 1. Goal

Go through every provider folder under `providers/` and verify **every factual
claim** stored in its `meta.json` against **live, official sources**. Correct
what is wrong, confirm what holds, note what cannot be verified. Three cadence
rules govern the sweep:

- **Traverse by category band** — do all **"Coding & MoE Models"** providers
  first, then the next band, following the Providers-page order (§2). Within a
  band, alphabetical.
- **Persist immediately** — the moment one provider's research is done, WRITE
  the verified findings to its `meta.json` (incremental, interrupt-safe) before
  starting the next; never hold edits to flush at the end.
- **Two per batch, then break** — after every **2** providers, STOP, report both
  status blocks (§7), and prompt the operator to continue. Await their answer.

**Primary focus — offered models + free tier.** The two things the operator
cares most about on every card are: (1) **which models the provider actually
offers** (first-party and hosted third-party), and (2) **whether there is a
free tier and under exactly what conditions** — is a **credit card required** to
get a key, what are the **rate limits** (requests/min, requests/day, tokens/day,
or a monthly quota/credit), and does any free credit **expire**. Every free-tier
card must end up stating these concretely, or explicitly noting the provider
publishes no such figure. See §5 step 6 and the status template in §7.

A standing sub-check on top of that: scan for **active promotions** running today
(discounts, bonus credits, limited-time free offers) — see §5A — and report them
in the status with an as-of date.

This mirrors the audit done for InclusionAI, Huawei Cloud CodeArts, Snowflake
Cortex, Reka and Mistral AI: read the card, chase every claim to the provider's
own docs/pricing page, fix inaccuracies in place, and report.

## 2. Scope & roster

- Enumerate the providers yourself: list every `providers/*/meta.json`. That
  folder list IS the roster (unlike model research, you MAY scan `providers/`).
- Skip folders without a `meta.json`. Treat a `retired: true` meta as parked —
  verify lightly (it is hidden from the site) and move on.
- **Traversal order = category bands, NOT global alphabetical.** Start with the
  **"Coding & MoE Models"** band, then continue through the other bands in the
  exact order the Providers page renders them: 1 **Coding & MoE Models** → 2
  **On-Demand GPU** → 3 **Audio / Speech** → 4 **Video** → 5 **Web Grounding
  Search** → 6 **LLM Observability & Security Tooling** → 7 **Other Specialized
  Services**. A provider's band is decided by `getProviderCategory()` in
  `src/data/providers.ts` — build the whole ordered queue with a `temp/` script
  that mirrors it (note: it DEFAULTS any unmatched provider to `coding-moe`, so
  band 1 is the largest). Within each band, go alphabetical by folder name.
- **Persist immediately (incremental save).** As soon as one provider's research
  is complete, WRITE the verified changes to its `providers/<slug>/meta.json`
  and validate the JSON (§6) — before starting the next provider. Never
  accumulate edits to flush at the end (interrupt-safe).
- **Batch = 2, then break and prompt.** Verify two providers fully (each:
  research → write → status), then STOP, report both status blocks together, and
  ask the operator "Continue with the next 2?" — await the answer before the next
  pair. Do not cross a batch boundary silently.
- **Optional scope filter — free-tier sweep.** If told to prioritize free tiers,
  within the current band restrict to providers whose plans trip the site's
  `isFreePlan` predicate (`name` contains `free` but not `no free`, OR `price`
  matches `/^\$\s?0(?:\.0+)?\s*(?:$|[^.\d])/`). `grep` caps ~25, so scan every
  `meta.json` with that predicate via a `temp/` script to get the full list.

## 3. The data you are auditing — `providers/<slug>/meta.json`

Schema (from `src/data/providers.ts`):

```ts
interface ProviderMeta {
  name: string;            // display name (required)
  kind?: "vendor" | "aggregator";   // vendor = sells own models; aggregator = resells/bills others'. Defaults to "aggregator" if omitted.
  short: string;           // 1–3 sentence summary shown on the card (required)
  officialUrl?: string;    // homepage / product page
  hosts?: string[];        // hostnames used to auto-match models to this provider
  idPrefixes?: string[];   // model-id prefixes used to auto-match models
  covers?: string[];       // explicit model slugs sold here (for catalogs model metas don't cite)
  catalogUrl?: string;     // official catalog page backing `covers`
  retired?: boolean;       // parked card, hidden from site
  plans: ProviderPlan[];   // (required) each plan shown on the card
}
interface ProviderPlan {
  name: string;            // e.g. "Free", "Pay-as-you-go", "Pro"
  price: string;           // e.g. "$0", "Per 1M tokens", "$14.99/month", "Custom"
  notes?: string;          // the detailed claim text
  evidenceUrl?: string;    // the page that PROVES the claim
}
```

**How the site derives things from this (know these, they affect your audit):**

- **Free-tier badge is auto-detected** — a plan is "free" when its `name`
  contains `free` (but not `no free`) OR its `price` matches `$0` (regex
  `^\$\s?0(?:\.0+)?\s*(?:$|[^.\d])`). So a free offer whose name/price doesn't
  trip this flag will NOT show as free even if it should. Flag mismatches worth
  fixing.
- **"Models offered" is derived, never curated in prose** — a model matches the
  provider if its id starts with an `idPrefixes` entry, or the model's
  officialUrl/pricing host is in `hosts`, or the model slug is in `covers`. If
  the card implies it serves model X but X never matches, `covers`/`hosts`/
  `idPrefixes` are likely missing/wrong.
- **Every price must trace to an `evidenceUrl`** — this is the repo's claim
  culture. A plan note quoting a number with no source is a defect.

## 4. Evidence standard (non-negotiable)

- **Primary = the provider's OWN pages**: the plan's `evidenceUrl`, plus the
  official pricing / docs / changelog / model-catalog pages. Prefer these over
  aggregators (Artificial Analysis, llm-prices, etc.) for billing/free-tier
  claims.
- Use `WebSearch` to locate the live page, then `WebFetch` to read it. Quote the
  exact figure/wording you found. Do not rely on memory of what "a vendor like
  this usually does."
- **Verify the `evidenceUrl` itself** — open it. If it 404s, redirects to a
  marketing page with no such claim, or points to the wrong thing, that is a
  finding. Correct the URL to one that actually carries the claim.
- **List price vs. actual price**: if a promo/discount is running, record both
  (e.g. "list $2.10/$4.00, now $0.50/$1.50 under a 75% promo") and note the
  promo is time-limited. Do not present a temporary promo as the permanent rate.

## 5. Per-provider checklist

Work through the folder in this order, then persist immediately (§5 → §5A →
write the verified findings to `meta.json` → emit the §7 status):

1. **Read `providers/<slug>/meta.json`.** Note every factual claim in `short`,
   `kind`, each plan's `notes`, and each `evidenceUrl`.
2. **Open every `evidenceUrl`** and confirm it (a) resolves, (b) contains the
   claimed figure/wording. Search official pages for anything the card asserts
   but doesn't cite.
3. **Verify the entity is real.** Vendors sometimes get a fabricated corporate
   name. (Found this session: InclusionAI's card invented "Ant Intelligence" —
   no such entity; correct framing is *InclusionAI is Ant Group's AGI
   initiative; "Ant Ling" is the developer platform*.) Search to confirm the
   org/product/platform names actually exist.
4. **Verify models are current, not retired.** A card may list a flagship that
   has been withdrawn. (Found this session: Reka's card implied "Core" was
   available; the live API catalog only offers Edge/Flash + hosted open models —
   Core was removed from the text.) Check the provider's model-catalog page.
5. **Verify plan-level numbers** (price, credits, quotas). (Found this session:
   Mistral's Pro card said "$15/month in API credits" — that $15 is the
   *Education* tier; standard Pro is **$25.5/month**. Misattributed tier = fix.)
6. **Free tier — verify and state the conditions (HIGHEST priority).** Open the
   provider's pricing / docs / FAQ / rate-limits page and answer each of these
   concretely; a free-tier card that omits any is incomplete:
   - **Exists & live today?** Confirm the free tier/trial actually runs now.
     (Gotcha this session: AI/ML API's own FAQ reads *"The Free Tier is
     currently paused"* — a card claiming a free tier would be wrong. Always
     check for "paused / discontinued / retired" wording before trusting a claim.)
   - **Credit card required?** yes/no, quoted from the source (e.g. Mistral "no
     credit card required" verbatim; Aion Labs pricing "No card required").
   - **Rate limits** — capture the exact numbers AND their window: requests/min
     (RPM), requests/day (RPD), tokens/day (TPD), and/or a monthly quota. (e.g.
     Aion Labs free = 15 RPM / 20,000 tokens/day per its rate-limits doc;
     SambaNova = 20 RPM, 20 RPD, 200K TPD per model.)
   - **Credits & expiry** — if the free offer is a credit grant, record the
     amount and validity (e.g. AI21 "$10 credit good for three months" per
     docs.ai21.com — trust the provider's own docs over third-party sites that
     said "7 days").
   - **Offered models** — list which models the free tier actually serves and
     confirm they are CURRENT. (Gotcha this session: a card listed "Jamba 1.5
     Mini & Large" while the live catalog now offers Jamba **1.7** — version
     drift is common.) Name first-party + hosted third-party families.
   Fold these points into the plan `notes`, each backed by the `evidenceUrl`. If
   the provider publishes no rate/credit figure, write "no published limit" —
   never guess a number. Also re-check `kind` here: a "gateway" that serves the
   lab's OWN models is a `vendor` (e.g. Agnes AI is Sapiens AI's own omni-modal
   text/image/video lab, not a reseller).
7. **Broaden `short` to name the hosted THIRD-PARTY lineup.** If the provider
   resells models it did not build (a common, high-value fact), say so — name
   both first-party and third-party families. (Done this session for Mistral:
   added "plus a hosted third-party open-weight lineup (Z.ai GLM 5.3, DeepSeek
   V4.1 Flash)".) Cross-check against the catalog page — do not guess the list.
8. **Check `kind` is right.** Sells own models → `vendor`; resells/bills others'
   → `aggregator`. (Confirmed this session: Huawei CodeArts is an `aggregator` —
   it serves Z.ai's GLM — same as Cursor.)
9. **Explain the model-access mechanism** in `short` (how a user actually uses
   the model here: API, console, IDE plugin, etc.). (Done this session: Huawei
   CodeArts "installs as a VS Code / JetBrains plugin".)
10. **Icons (light check, optional).** If the card references a brand icon, it
    lives at `assets/vendor-icons/<icon>.svg`, wired via
    `src/data/vendorIcons.extra.ts` + a `VENDORS` entry in
    `src/components/VendorIcon.tsx`. Confirm the icon matches the real brand and
    the theme flag is right: single-colour/`currentColor` → `adaptive: true`;
    colourful brand logo → no flag (renders as-is); fixed dark mark → may need
    `invertLight`. Do not redesign icons unless asked; only fix an obviously
    wrong/missing mapping.

## 5A. Active-promotion sweep (per provider — standing sub-task)

For each provider, ALSO check whether **any promotion is live right now**, and
record it. Look for:

- **Time-limited price discounts** on API/model rates (a vendor running "X% off"
  list prices — e.g. InclusionAI / Ant Ling ran 75% and 72% token promos).
- **Free credit / bonus-top-up / signup vouchers** (e.g. PPIO ~5M-token
  registration voucher, DigitalOcean free credits, W&B "credits included for a
  limited time").
- **Limited-time free inference / "stealth" free windows** (e.g. Vercel AI
  Gateway stealth drops, Poolside "free for a limited time").
- **Campaign / seasonal / student / startup deals** (e.g. Mistral student Pro
  $5.99, provider "campaign" pages, hackathon credits).

**How:** `WebSearch` `"<provider>" promo | discount | free credits | deal 2026`
and read the provider's OWN pricing page, changelog / what's-new, and any
campaign/promo page. Prefer official sources; treat third-party coupon sites as
leads only. Capture for each promo: **what it is, the discount/credit amount,
the start/end date, and the evidence URL.**

**Rules (promotions are ephemeral — the site cards are permanent research):**

- Always stamp the **as-of date** you checked (promos expire). Phrase it "as of
  <date>".
- If a promo IS the price a user pays today, still record BOTH the list price
  and the promo price and mark it explicitly **time-limited** with its end date
  (see §4 list-vs-actual). Never freeze a flash sale into a permanent figure.
- Add a promo to `meta.json` notes **only** when the provider presents it as an
  ongoing, documented offer — and then label it "(promo, ends <date>)" with an
  `evidenceUrl`. One-off / expired campaigns belong in the **status report**,
  not the card.
- If nothing is found, report **"no active promotion found (as-of <date>)"** —
  that is a valid result; do NOT invent a deal.

## 6. Fix rules

- **Correct in place** with `SearchReplace`; keep the file's existing shape,
  key order, and style. Do not rewrite fields that are already accurate.
- **Never fabricate.** If you cannot verify a claim from an official source,
  do not invent a number to replace it — record it as "could not verify" in the
  status and leave the claim (softening it only if it is clearly wrong).
- Keep claims **concise but complete**; a card may carry several verified
  sentences. Put the `evidenceUrl` on every priced/quoted claim.
- **Model slugs / names**: if you touch any slug, version numbers use `.` not
  `-` (`glm-5.2`, never `glm-5-2`). Provider folder names use hyphens freely.
- **JSON gotcha:** inside JSON strings, `$` needs NO escape — writing `\$` is an
  invalid escape and breaks the file. After every edit, validate:
  `node -e "JSON.parse(require('fs').readFileSync('providers/<slug>/meta.json','utf8'))"`.
- **Temp files:** any scratch script goes ONLY in `temp/<file>.cjs`; never write
  scratch files into the repo root or `providers/`.
- **Read-only facts are permanent (RULES.md § Provider read-only facts).** Operator
  first-hand facts live in a plan's `_readonly` field — NOT in `notes`/`short`
  (those render to users on `/providers/`). `_readonly` is frozen verbatim: NEVER
  delete, shorten, soften, or reword it; keep `notes` consistent with it but never
  put `[READ-ONLY]` tags, provenance, dates, or agent notes into `notes`/`short`.
  A live source that seems to contradict it → surface it in your status, do not
  overwrite it.
- **Operator-mandated links are read-only.** A `officialUrl` / `evidenceUrl` that
  carries a required referral / tracking param must keep it — NEVER normalize to a
  canonical URL or strip the query when "tidying" a link (e.g. every Gonka link
  must stay `https://gonkabroker.com/?ref=M47RXUEJ`). Adding a new link for such a
  provider? Use the referral form. Only the operator may change these (RULES.md §
  Provider read-only facts).

## 7. Status report (emit after EACH provider, for that provider only)

Keep it tight. Format:

```
## <Provider Name>  (providers/<slug>)

Free tier: <exists-live | paused | none>  |  credit card: <required | not required | unknown>  |  limits: <RPM/RPD/TPD or monthly quota, else "no published limit">  |  credits/expiry: <e.g. "$10 / 3 months", else "—">
Offered models: <first-party + hosted third-party, current versions>
Active promotions: <what | discount/amount | valid until <date> | URL>  OR  "none found (as-of <date>)"

Checked:
- <claim> → CONFIRMED (source: <page/URL>)
- <claim> → CONFIRMED (verbatim: "<quote>")

Changed:
- <what was wrong> → <what you fixed> (source: <URL>)
- e.g. "Pro plan said $15/mo API credits; standard Pro is $25.5/mo — corrected."
- e.g. "Free tier claimed live; provider FAQ says 'currently paused' — corrected + added credit-card & rate-limit conditions."

Could not verify:
- <claim>, if any (reason: e.g. page 404 / no official figure)

Files touched: providers/<slug>/meta.json [<+ any icon/extra.ts/VendorIcon.tsx>]
JSON valid: yes
```

**Persist before you move on:** writing the verified findings to
`providers/<slug>/meta.json` and validating the JSON is the LAST action for that
provider — never defer writes to the end of the sweep. Then emit this status.

**After every 2 providers, STOP and prompt:** present the two status blocks
together and ask the operator whether to continue ("Continue with the next 2?");
wait for the answer before starting the next pair. Track progress as
"band <name> · provider N done" so the human follows the category sweep.

## 8. Boundaries (repo conventions)

- **Do NOT run** `pnpm sync`, `pnpm build`, `pnpm dev`, or `pnpm build.types`
  yourself — these are heavy and delegated to the operator. `providers/*/meta.json`
  is eager-loaded at build, so end your final message with the handover command:
  `pnpm build.types:direct && pnpm build:direct` (Windows).
- Authority order for any conflict: operator's explicit ask > `RULES.md` > repo
  code/config > this file. `RULES.md` wins over general practice.
- Persistence: keep sweeping until the roster is exhausted or the operator
  stops you. Do not declare "enough" early.

## 9. Quick reference — files involved

| What | Where |
| --- | --- |
| Provider facts per card | `providers/<slug>/meta.json` |
| Schema + free-tier & model-match logic | `src/data/providers.ts` |
| Providers page UI | `src/routes/providers.tsx` |
| Provider card | `src/components/ProviderCard.tsx` |
| Brand icons | `assets/vendor-icons/<icon>.svg` |
| Extra icon wiring | `src/data/vendorIcons.extra.ts` |
| Icon theme / VENDORS list | `src/components/VendorIcon.tsx` |

## 10. Real findings from the reference audit (calibration, not to re-apply)

- **InclusionAI** — fabricated entity ("Ant Intelligence") → corrected to
  Ant Group's InclusionAI / "Ant Ling" platform; promo pricing shown as list+actual.
- **Huawei Cloud CodeArts** — claims verified true (GLM-5.2 free, VS Code plugin);
  added as `aggregator`, 5M-token/month free edition documented.
- **Mistral AI** — "no credit card" free tier confirmed verbatim; pricing/batch/
  cache confirmed; Pro API-credits misattribution fixed; third-party lineup added.
- **Reka** — retired "Core" removed; Vision free tier + per-model $ rates added.
- **Snowflake Cortex** — 14-provider / 50+-model catalog + AI-Credit rates added.
- **AI/ML API** — card flags a free tier, but the provider's own FAQ says *"The
  Free Tier is currently paused"* → always check free tiers for paused/discontinued.
- **AI21 Labs** — card listed "Jamba 1.5 Mini & Large"; live catalog is **Jamba
  1.7** → classic model-version drift; verify the current lineup.
- **Aion Labs** — free tier 15 RPM / 20,000 tokens/day, no card → GOOD example:
  the card already states the exact rate + credit-card condition. Aim for this.
- **Agnes AI** — set as `aggregator` but is Sapiens AI's own omni-modal lab
  (text/image/video) → re-check `kind` and offered modalities on close inspection.
- **Promotions are a moving target** — InclusionAI/Ant Ling 75%/72% token promos,
  Vercel "stealth" free drops, W&B limited-time credits, PPIO signup voucher.
  Always note the as-of date and list-vs-promo price (§5A); never freeze a flash
  sale into the card as a permanent rate.

Use these as examples of the *kind* of drift to look for — do not assume the
same issues exist in a given provider without checking it.
