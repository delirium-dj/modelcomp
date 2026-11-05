# Task — Provider fact-audit (one provider at a time)

**Kickoff line (copy when forwarding):** `PROVIDER-AUDIT: start at the first
provider, process alphabetically, one at a time.`

You may also be given a specific provider to start/limit to (e.g.
`PROVIDER-AUDIT: mistral` or `PROVIDER-AUDIT: from mistral`). If none is given,
start at the top of the list and keep going until told to stop.

---

## 1. Goal

Go **one-by-one** through every provider folder under `providers/` and verify
**every factual claim** stored in its `meta.json` against **live, official
sources**. Correct what is wrong, confirm what holds, note what cannot be
verified. After **each provider**, emit a short **status report for that one
provider only** (see §7), then continue to the next.

This mirrors the audit done for InclusionAI, Huawei Cloud CodeArts, Snowflake
Cortex, Reka and Mistral AI: read the card, chase every claim to the provider's
own docs/pricing page, fix inaccuracies in place, and report.

## 2. Scope & roster

- Enumerate the providers yourself: list every `providers/*/meta.json`. That
  folder list IS the roster (unlike model research, you MAY scan `providers/`).
- Skip folders without a `meta.json`. Treat a `retired: true` meta as parked —
  verify lightly (it is hidden from the site) and move on.
- Process in alphabetical order by folder name. Do one provider fully, report,
  then start the next.

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

Work through the folder in this order:

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
6. **Verify free-tier wording** is exactly what the provider says. (Confirmed
   this session: Mistral "API keys with no credit card required" is verbatim in
   their own docs quickstart.)
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

## 7. Status report (emit after EACH provider, for that provider only)

Keep it tight. Format:

```
## <Provider Name>  (providers/<slug>)

Checked:
- <claim> → CONFIRMED (source: <page/URL>)
- <claim> → CONFIRMED (verbatim: "<quote>")

Changed:
- <what was wrong> → <what you fixed> (source: <URL>)
- e.g. "Pro plan said $15/mo API credits; standard Pro is $25.5/mo — corrected."

Could not verify:
- <claim>, if any (reason: e.g. page 404 / no official figure)

Files touched: providers/<slug>/meta.json [<+ any icon/extra.ts/VendorIcon.tsx>]
JSON valid: yes
```

Then immediately proceed to the next provider (unless the operator asked for a
pause between providers). Report progress as "provider N done" so the human can
track the sweep.

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

Use these as examples of the *kind* of drift to look for — do not assume the
same issues exist in a given provider without checking it.
