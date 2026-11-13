# Provider-audit brief (compact — one page, for tight-context runtimes)

You are reading this INSTEAD of the full `tasks/provider-audit.md`. Same job,
compressed to operate. Authority on conflict: kickoff pin > `RULES.md` >
`tasks/provider-audit.md` > this brief. If you need a rule missing here, read
the named section of `tasks/provider-audit.md` targeted — never the whole thing.

**Kickoff line (copy when forwarding):** `PROVIDER-AUDIT BRIEF: start at the
first category band (Coding & MoE Models), sweep in category order, two per
batch then break and prompt` (optionally add a scope: `... scope=free-tier`).

## 0. Job

Sweep `providers/*/meta.json` by **category band** (band order in §2), one
provider at a time within a band; verify **every factual claim** against **live,
official sources**; **write the findings to that provider's `meta.json`
immediately after its research** (incremental, before the next); emit a short
**status for that provider**. After **every 2 providers, STOP, report both, and
prompt the operator** before the next pair. The two things that
matter most, plus a standing sweep:

1. **Offered models** — which models the provider actually serves (first-party
   AND hosted third-party), and confirm they are current (not retired/version-drifted).
2. **Free tier + conditions** — exists and live *today*, **credit card
   required?**, **rate limits** (RPM / requests-day / tokens-day / monthly
   quota), and any **credit amount + expiry**.
3. **Active promotions** — is any discount / bonus-credit / limited-time free
   offer running right now? Record with an **as-of date**.

## 1. The data you audit — `providers/<slug>/meta.json`

Required: `name`, `short`, `plans[]`. Optional: `kind` (`vendor`=sells own
models / `aggregator`=resells others'; defaults to aggregator), `officialUrl`,
`hosts[]`, `idPrefixes[]`, `covers[]`, `catalogUrl`, `retired`.
Each plan = `name`, `price`, `notes?`, `evidenceUrl?`.

Derived by the site (know these — mismatches are defects):
- **Free-tier badge** auto-shows when plan `name` (lowercased) contains `free`
  (not `no free`) OR `price` matches `/^\$\s?0(?:\.0+)?\s*(?:$|[^.\d])/`.
- **"Models offered"** derives from `idPrefixes` / `hosts` / `covers` — never a
  prose list. If the card implies model X but X can't match, the arrays are wrong.
- **Every price must trace to an `evidenceUrl`.**

To get the full free-tier roster (grep caps ~25), scan every `meta.json` with
the predicate above via a `temp/` script.

## 2. Per-provider loop

1. Read the card; list every claim in `short`, `kind`, each plan `notes` + `evidenceUrl`.
2. `WebSearch` → `WebFetch` the provider's OWN pricing/docs/FAQ/rate-limits/
   catalog/changelog pages. Quote exact figures. Open each `evidenceUrl` — if it
   404s or lacks the claim, fix the URL. Third-party sites are leads only.
3. **Free tier** — answer explicitly: live today (watch for *"currently paused"*
   / discontinued wording)? credit card yes/no (quote it)? rate limits with
   their window? credit amount + validity? Write into plan `notes`, sourced. If
   no published figure, say "no published limit" — never guess a number.
4. **Offered models** — confirm current lineup; name first-party + hosted
   third-party families. Watch version drift (e.g. a card says "Jamba 1.5" but
   live is "Jamba 1.7") and retired flagships. Re-check `kind`: a "gateway"
   serving the lab's OWN models is `vendor`.
5. **Promotions** — search `"<provider>" promo | discount | free credits | deal
   <year>`; capture what/amount/start-end/evidence. Stamp **"as-of <date>"**.
   Keep **list-vs-promo** separate; only write a promo into the card if it is an
   ongoing documented offer (label "(promo, ends <date>)"); one-off/expired
   promos go in the status only. "None found (as-of <date>)" is a valid result.
6. Correct wrong claims in place (`SearchReplace`); keep existing shape/key order.
7. **Persist now:** write the verified changes to `providers/<slug>/meta.json`
   and validate the JSON (§4) as the LAST action for this provider — never defer
   writes to the end. Then emit the §3 status.
8. **Traversal + batching:** finish band 1 (Coding & MoE Models), then bands
   2→7 in order; within a band alphabetical. After every **2** providers, STOP,
   show both statuses, and ask "Continue with the next 2?" — wait for the operator.

**Band order (traversal):** 1 Coding & MoE Models → 2 On-Demand GPU → 3 Audio /
Speech → 4 Video → 5 Web Grounding Search → 6 LLM Observability & Security
Tooling → 7 Other Specialized Services — per `getProviderCategory()` in
`src/data/providers.ts` (unmatched providers DEFAULT to `coding-moe`).

## 3. Status report (after EACH provider, that provider only)

```
## <Provider Name>  (providers/<slug>)
Free tier: <exists-live | paused | none> | credit card: <required | not required | unknown> | limits: <RPM/RPD/TPD or monthly, else "no published limit"> | credits/expiry: <"$10 / 3 months" | —>
Offered models: <first-party + hosted third-party, current versions>
Active promotions: <what | amount | valid until <date> | URL> OR "none found (as-of <date>)"
Confirmed: <claim → source>
Changed:   <was → now (source)>
Unverified: <claim + reason, if any>
Files: providers/<slug>/meta.json   JSON valid: yes
```

**Batch cadence:** default is **2 then break** — after every two providers,
present both status blocks together and prompt "Continue with the next 2?"; wait
for the operator before the next pair.

## 4. Never-do (absolute)

- Never fabricate a number, model, or deal. Unverified → report it, don't invent.
- **Search 402/quota/outage:** fetch the provider's own pricing/docs/FAQ/rate-
  limits pages directly (`WebFetch`, then `curl`/`Invoke-WebRequest`); the card
  is the claim, never its own evidence. Cite only pages actually opened; still
  unverifiable → `Unverified:` line (`RULES.md` § Web-research fallback).
- Never present a promo/flash sale as a permanent price (RULES.md permanence).
- **JSON gotcha:** inside strings `$` needs NO escape — `\$` is invalid and
  breaks the file. After each edit validate:
  `node -e "JSON.parse(require('fs').readFileSync('providers/<slug>/meta.json','utf8'))"`.
- **Slug hygiene:** if you touch a model slug, version numbers use `.` not `-`
  (`glm-5.2`, never `glm-5-2`). Provider folder names may use hyphens freely.
- **Temp files** go ONLY in `temp/<file>.cjs`; never write scratch elsewhere.
- Never run `pnpm sync` / `build` / `build.types` / `dev` — hand them over.
- Never edit `tasks/`, `RULES.md`, `.agents/`, or this brief while auditing.
- Read-only first-hand facts live in a plan's `_readonly` field (never in the
  user-facing `notes`/`short`, which render on `/providers/`). `_readonly` is frozen
  — never delete/shorten/soften it (RULES.md § Provider read-only facts). Keep
  `notes` consistent with it but put no `[READ-ONLY]` tags/dates/agent notes there;
  a contradicting source → report it, don't overwrite.
- Never strip a required referral/tracking param from a link — Gonka links must
  stay `https://gonkabroker.com/?ref=M47RXUEJ`; new Gonka links use that form.
- Never stop early: the sweep ends only when the scope is exhausted or the
  operator revokes it.

## 5. Finish

Report providers covered (with each status), then the handover command:
`pnpm build.types:direct && pnpm build:direct` (Windows) — the site eager-loads
`providers/*/meta.json` at build, so a rebuild refreshes `dist/`.
