# In short, because of SEO, we need to add following links to our website:

/compare/ - Indexable (very important) two-model comparison pages with consistent URLs and explanatory conclusions

/benchmarks/ - Definitions, measurements, methodology, test conditions and results by benchmark - we are not performing any benchmarks but via our AI research agents we are collecting all the possible info and synthesize it to one single point for better understaniding, evaluation and comparing.

/promotoions/ - here we will have promotoions with our refferal links

/best-ai-models-for-coding/ - Evidence-backed recommendations by actual user task

/best free LLM for coding/

/methodology/ - Scoring rules, limitations

/data/ - data provenance, downloads, update history and corrections

## Rules

### Simplicity

All of this should be done in the most simpliest way, using everything that can be already reusable from our project.

### SEO in mind

We are doing all of this to enhance SEO and our visibility via internet. On our mind we have humans who would search for some question like "best-ai-models-for-coding" but also we want to do everything we can to be cited by various AI tools out there.

## SEO/GEO implementation priorities

Priority Implementation = Expected benefit
Critical Unique, static/SSR-rendered model and comparison pages = Reliable content discovery
Critical Direct source URLs for scores, prices and model claims = Verifiability and trust
Critical Accurate model IDs, benchmark harnesses, dates and configurations = Credible comparisons
High Descriptive titles, H1s, canonical URLs, sitemap and internal links = Better relevance and discoverability
High Transparent scoring, uncertainty and missing-data rules = Research credibility
High Original comparative analyses and useful conclusions = Stronger reasons for others to reference you
High Consistent site name and entity identity = Clearer attribution
Medium Public CSV/JSON downloads for "/compare/", changelogs and embeddable charts = More opportunities for backlinks and reuse

Google recommends making content crawlable, internally linked, available as text, and supported by structured data consistent with what's actually displayed.
Google for Developers

For ChatGPT Search specifically, OpenAI documents that OAI-SearchBot should not be blocked if you want your pages to be eligible for discovery and appearance in search responses.

## Improve benchmark provenance visibility.

The model page prominently displays averages from reporting agents (46 of 71 for Muse Spark 1.3), but the main comparison table doesn't expose the original benchmark source, harness and evaluation date alongside each score. Adding direct evidence trails could make these pages much more useful as references.
This means that at the end of the every individual model page we should have "References" drop down modal (Tailwind) that will reveal all the links we collected info from and we will gather this from our research files for every separete model we perfomed research.
For example, for model\ternary-bonsai-27b, we will reveal all the Reference URLs our AI research agents collected, taking care that we do not duplicate links.

## Expand the homepage terminology.

The current H1 says "Compare AI coding models on what actually matters." That is accurate for the coding focus, but potentially narrow for your 160-model catalog and decision-model coverage. If the site's intended scope is broader, use "Compare AI Models with Independent Benchmark Evidence" and keep coding as a strong dedicated category.

## Organizing the SEO content around four major intents:

Search intent = Example queries
Model comparisons = "GPT-6 vs Claude Opus", "Gemini vs ChatGPT for coding"
Rankings = "best AI model for programming", "best free LLM for coding"
Benchmark research = "LLM benchmark comparison", "AI reasoning model benchmarks"
Technical specifications = "Claude context window", "GPT-6 API pricing", "models with tool calling"

## Design

Totally aligned with "Simplicity" = using everything that could be used from the current pages, adopting it to a new content. Minimal design standouts, only when massive gains are obvious but we already have almost everything we need.

---

2026-11-09 — STEM: Gemini 3.8 Flash

## Honest Analysis & Architectural Assessment

The document identifies the exact inflection point needed to transform this project from a specialized internal data artifact into a primary authority cited across the LLM and search ecosystems (GEO & SEO).

However, to execute this cleanly while respecting the project's **Strict Simplicity Rule**, the static SSG architecture (`vite`/`pnpm build.types:direct`), and context/rate constraints, several underlying technical realities must be addressed:

### 1. The Head-to-Head `/compare/<a>/<b>/` Matrix Challenge

- **Combinatorial Explosion:** With ~370 models, the mathematical combinations ($N \times (N-1) / 2$) exceed 68,000 routes. SSG prerendering all routes would crash the build script and result in massive thin-content crawl budget waste.
- **The Solution:**
  - Restrict SSG generation via `onStaticGenerate` to the **Top 50 models** cross-compared within their respective tiers/categories (~300–500 curated, highly sought-after pairs).
  - Enforce alphabetical slug sorting (`/compare/claude-sonnet-4.6-vs-gpt-5.4/` or `/compare/claude-sonnet-4.6/gpt-5.4/`) with an automatic canonical fallback or 301 redirect for the inverted pair.
  - Dynamically generate structured comparison sentences and verdict badges derived directly from `average.md` subcategory deltas (e.g., Code Gen, Refactoring, Reasoning, Price/1M) to guarantee substance without manual copywriting.

### 2. References Provenance: Zero-Overhead Data Pipeline

- The proposal mentions showing "References" at the bottom of model pages.
- **Do not parse markdown at runtime:** The site runs in static SSG mode. Markdown files (`model/<slug>/*.md`) are already parsed during `pnpm sync`.
- **Implementation:** During `scripts/sync-*.mjs`, extract URLs, citation domains, and dates into a lightweight lookup object (`references.generated.ts` or directly inside `model-data.generated.ts`).
- **Markup:** Render via a clean semantic `<details class="group ...">` accordion styled with existing Tailwind classes. This ensures all links and source domains exist directly in the initial SSR/HTML payload for search crawlers (Googlebot, GPTBot, PerplexityBot) without client hydration overhead or hidden modal states.

### 3. Dedicated Authority Hubs (`/benchmarks/` & `/methodology/`)

- `/benchmarks/` must not just be an index; it should act as an entity anchor. Each primary benchmark (SWE-bench Verified, HumanEval, LiveCodeBench, etc.) should have its definition, evaluation harness, known saturation points, and an auto-derived leaderboard sorted by verified scores.
- `/methodology/` solves the trust hurdle. Ingest the core principles from `RULES.md` and the existing `MethodologySection` to explain how research multi-agent sweeps work, outlier filtering, and the no-hallucination scoring policy.

### 4. Commercial Boundaries (`/promotions/`)

- Placing `/promotions/` (or affiliate tables) side-by-side with high-integrity research requires strict isolation:
  - Add explicit `rel="nofollow sponsored"` attributes to all outward referral links.
  - Include an unambiguous editorial independence banner above any affiliate offer.
  - Ensure rankings on `/best-*-for-*` pages are strictly computed from math and empirical scores—never promotional deals.

### 5. GEO (Generative Engine Optimization) Specifics

- AI search engines (SearchGPT, Perplexity, Gemini Search) ingest factual claims from clean semantic HTML tables, lists, and Schema.org JSON-LD blocks.
- Inject `Dataset`, `TechArticle`, and `ItemPage` microdata with `isAccessibleForFree=True` and citation arrays into `DocumentHead`.
- Update `robots.txt` generation in `pnpm sync` to explicitly declare `Allow` rules for `OAI-SearchBot`, `GPTBot`, `PerplexityBot`, and `Claude-Web`.

## Actionable Execution Plan

1. **Step 1: Pipeline Enrichment (`pnpm sync`)**
   - Harvest reference URLs and citation domains from `model/*/*.md` into `references.generated.ts`.
   - Compile benchmark metadata & scoreboards into `benchmarks.generated.ts`.
2. **Step 2: Model Page Enhancement**
   - Render the semantic `<details>` References drawer at the bottom of `src/routes/model/[slug]/index.tsx`.
3. **Step 3: Core Route Additions**
   - Create `src/routes/methodology/index.tsx` (reusing `MethodologySection` and `RULES.md` foundations).
   - Create `src/routes/benchmarks/index.tsx` (listing all tracked benchmarks with summary tables).
   - Create `src/routes/data/index.tsx` (exposing raw downloadable JSON/CSV files generated at build time).
4. **Step 4: Curated Pairwise Comparisons**
   - Build `src/routes/compare/[modelA]/[modelB]/index.tsx` utilizing the existing `CompareSection` / `hex.ts` visualizers with auto-generated text verdicts.
5. **Step 5: Intent Landing Pages**
   - Implement `src/routes/best-ai-models-for-coding/index.tsx` and `src/routes/best-free-llm-for-coding/index.tsx` dynamically fed by current top overall & free-tier filtered models.

2026-11-09 — STEM: Qwen 3.8 Max

## Honest read of the notes above

The direction is right, but the list mixes three different kinds of things: (1) pages whose
data already exists and only needs rendering (`/benchmarks/`, `/methodology/`, `/data/`,
References on model pages), (2) pages that are a real build with real SEO upside
(`/compare/<a>/<b>/`, `/best-*-for-*`), and (3) one idea that fights the others
(`/promotoions/`). Untangled, the core insight is: **you are already collecting exactly the
stuff Google and AI search engines cite — multi-source verified benchmarks, harness
provenance, dates, prices with claimant links — and none of it is on its own crawlable URL.**
The winning move is surfacing existing data, not generating new marketing content.

What I verified against the repo before writing this:

- Live routes are only `/`, `/model/<slug>/`, `/providers/`, `/contact/`. Everything listed
  above is unimplemented — this is a greenfield section list, not a gap analysis.
- `evidence.generated.ts` (benchmark figures agreed by 2+ independent findings files) and
  `verified.generated.ts` already exist via `pnpm sync` — `/benchmarks/` is mostly a render
  job over data you already bake.
- Methodology content already exists as the homepage `MethodologySection` band —
  `/methodology/` is a promotion of that band to its own URL, not new writing.
- Only `model/[slug]` emits JSON-LD today. Sitemap + robots are handled (Qwik prerenders
  `sitemap.xml`; `pnpm sync` generates robots.txt), but robots.txt is a bare
  `User-agent: *` — it never makes the explicit OAI-SearchBot / GPTBot allow the section
  itself recommends.
- The homepage already owns a compare picker (A vs B slots + `CompareSection` + `hex.ts`
  chart) — `/compare/` doesn't need a new design system, it needs the existing widget to
  learn it has a URL.

## Specific opinions

1. **`/compare/<a>/<b>/` is your highest-leverage page type and also the riskiest.**
   ~370 models means up to ~68K pairs; prerendering all of them is a build-time and
   thin-content trap. Build a curated set (top-N by Overall × category, plus explicit
   queue-driven pairs), canonical slug order (`/compare/gpt-6/claude-opus-5/`), 301 the
   reverse order, and give every page a real conclusion sentence — a pure widget with two
   numbers is exactly the "indexed but worthless" pattern Google's site reputation abuse
   and thin-content updates punish. Internal links from each model page to its top 3-5
   comparisons solve most of the crawl-budget problem for free.

2. **Fix the URL spellings now — URLs are forever.** `promotoions` is misspelled (twice),
   `best free LLM for coding` has spaces and caps. It costs nothing today and a permanent
   redirect chain plus a weird-looking cited URL forever if it ships: `/promotions/`,
   `/best-free-llm-for-coding/`. GEO benefit dies with a typo'd slug — both humans and LLMs
   pass URLs through verbatim.

3. **`/promotions/` is in tension with everything else on this page.** The stated strategy
   is trust: verifiability, provenance, credible independence. Referral/affiliate pages are
   the exact content class AI answer engines and Google discount hardest. Keep it quarantined:
   honest "we may earn a commission" disclosure, `rel="sponsored"` on every referral link,
   `noindex` if it ever goes thin, and never mixed into the data pages' internal link graph
   as a "credibility" signal. It can live there — it just must not be what the site is _for_.

4. **References: not a modal.** The doc says it itself — Google wants content "available as
   text." SSR-render the full reference list on the model page (a native
   `<details>/<summary>` is fine for the fold, the links must be in the HTML regardless);
   hidden-behind-click content is weakly crawled and gives AI engines nothing to cite.
   Data-flow-wise this fits the existing pipeline perfectly: extend `pnpm sync` to bake a
   `references.generated.ts` (deduped URLs harvested from `model/<slug>/*.md`) exactly like
   `evidence`/`verified` already are. One sync-script addition feeds the model pages,
   `/benchmarks/` source links, and `/data/` provenance in one shot.

5. **`/benchmarks/` should be organized per benchmark, backed by what you already have.**
   One page per benchmark (definition, harness, what's measured, known saturation, current
   leaderboard from `evidence.generated.ts`) + an index. This is the most
   likely-to-be-cited-by-AI page type on the whole list, because per-benchmark "current
   leaderboard + methodology" is a query with no dominant answer today. But be honest in the
   copy: you synthesize third-party numbers, you don't run the evals — the priorities table
   already gets this right, keep it.

6. **`/best-*` pages need a decay story before they need a design.** "Best free LLM for
   coding" is a query that churns weekly; a stale ranking page actively burns GEO trust.
   Every ranking page should render its as-of date prominently (you already have
   `verified.generated.ts` for this) and be regenerable from data — never hand-curated
   prose that rots. Reuse the existing staleness threshold convention from the re-research
   sweeps.

7. **Structured data is missing from the plan entirely.** The priorities table mentions it
   in passing, but it deserves its own Critical line: `Dataset`/`Table` on `/benchmarks/`,
   `FAQPage` on task pages, `BreadcrumbList` everywhere, and richer use of the existing
   per-model JSON-LD. For AI-engine citation, schema-annotated claims are disproportionately
   quoted — this is cheap, static, and reuses the `router-head.tsx` pattern.

## Suggested build order (all reuse-first)

1. **References + provenance on model pages** — sync-harvested, `<details>` list, links into
   `/data/`. Cheapest trust win, zero new design.
2. **`/methodology/` + `/data/`** — promote existing `MethodologySection` content; `/data/`
   publishes the generated CSV/JSON + a sync-driven changelog. A few hours of work, tick two
   Critical/High priorities.
3. **`/benchmarks/`** — render `evidence.generated.ts` per benchmark; add `Dataset` JSON-LD.
4. **`/compare/<a>/<b>/`** — curated pairs, existing hex chart, static conclusions, sitemap
   entries.
5. **`/best-*-for-*`** — write last, because they should cite layers 1-4 as their evidence
   trail; that's what makes them different from the other hundred "best LLM" listicles.
6. **`/promotions/`** — whenever, isolated per opinion 3; it earns nothing from this ranking.

Each of these is a new `src/routes/<name>/index.tsx` on the existing v2 canvas pattern
(`usePageTheme`, `V2Header`/`V2Footer`, `DocumentHead` for canonicals) plus a prerender
`getStaticPaths` — no new framework, no new components beyond what the data demands.

---

2026-11-09 — STEM: DeepSeek V4.1 Flash

## Second pass: verified facts, then the pushbacks

I re-checked the load-bearing claims against the repo before writing (states as of 2026-11-09). Where I agree with the entry above I won't repeat it: curate-don't-combinate for compare pages, links-in-HTML instead of a modal, quarantining referral content, per-benchmark pages, fix the URL spellings before shipping, reuse-only builds. Everything below is what that entry missed, got wrong, or that I'd sequence differently.

### Verified against the repo

- `model-queue.md` lists **208 models** today — 207 comparable + `jev-1.13` (the only `"decision"` model). The notes' "160-model catalog" is stale, and the "~370 models / ~68K pairs" above appears to have picked up the "~370 lines" figure for `src/data/models.ts` — the real scale is **208·207/2 ≈ 21.5K unordered pairs**. Same conclusion (curation is mandatory), one seventh the threat: a 200–300-pair launch set is a solid v1, not a compromise.
- The last local build's `dist/sitemap.xml` has **211 URLs** (208 `/model/` pages + `/`, `/providers/`, `/contact/`), auto-emitted by the Qwik static adapter — future prerendered routes appear in it with zero wiring. It has **no `<lastmod>`**; adding one from `verified.generated.ts` is a cheap freshness signal when someone touches the sitemap anyway.
- `public/robots.txt` (written by `pnpm sync`, `renderRobotsTxt`) and every canonical + sitemap entry consume **`SITE_ORIGIN` — at two different moments**: sync time (robots) and build time (canonicals + sitemap). Nothing in `vercel.json` or any CI file sets it, and the committed robots.txt and last local build are all `http://localhost:4173`. **This is step 0 of the whole program**: set `SITE_ORIGIN` wherever `pnpm sync` and the Vercel build run, regenerate robots with the production origin and commit it, rebuild, then verify on the live domain — the `/robots.txt` sitemap line, `/sitemap.xml` (zero `localhost`, per the README check) and a sample page's `rel=canonical`. If this ships wrong, every page family below points at localhost. (`tasks/task_combined_purification.md` still lists B7 as ⏳ PENDING even though the knob landed in code — repo-side "done" and deploy-side "verified" are different states; make it a release-checklist line.)
- Two stale items to prune from the mental backlog: (1) `Allow: /` under `User-agent: *` **already permits** OAI-SearchBot / GPTBot / ClaudeBot / PerplexityBot — explicit AI-bot stanzas are a *policy choice* (allow answer/search bots, optionally cap training scrapers), not a missing allow; (2) B9 ("all model pages share one title") is already fixed in code — `model/[slug]` resolves per-model title/description from `params`.
- The per-model JSON-LD (`SoftwareApplication` + `aggregateRating` with `reviewCount` = number of agent reports) deserves an audit against Google's review-snippet rules **before** it gets cloned to new page types: these are editorial aggregates, not user reviews, and a misapplied `aggregateRating` earns "invalid" warnings rather than rich results. Keep it honest or replace it with factual markup (`ItemList`, `Dataset`) — don't scale it first and ask later.
- No `og:image` anywhere (`router-head.tsx` emits title/description only). The moment these pages get shared, that's the cheapest credibility item on this list.

### Where I'd push back

1. **Resolve the promotions contradiction before design, not after.** `README.md`'s sponsorship section states the brand promise verbatim: "Independent, no paid promotions — donations fund compute and research time, never rankings." A `/promotions/` page of referral links contradicts the site's own positioning, and the entry above treats it as an isolation problem when it is an identity problem. Either drop the referral page, or reword the promise to what you'll actually honor ("rankings are never influenced by affiliate relationships") *and* isolate it with `rel="sponsored"` + an FTC-style disclosure. The GEO angle only works if the trust story is airtight; you can't sell "cross-verified, claimant-linked" and run unmarked referrals side by side.
2. **Don't flip the homepage H1 yet — and don't undersell the current one.** "Compare AI coding models on what actually matters" is a winnable niche that matches what the dataset actually is (tool use / coding / cost, an OpenCode-flavored daily-driver mix). "Compare AI Models with Independent Benchmark Evidence" is an entity statement, not a query — good for GEO, weak for search volume. Sequence: ship the hubs/categories first, broaden the homepage once Search Console shows breadth demand. Intermediate step: keep the H1, let the `<title>`/meta broaden as page count grows.
3. **Treat `/methodology/` as a flagship, not a band promotion.** The homepage section is a summary; the URL should carry the full contract — rater gate (>84.9), top-10 cohort cap, cost excluded from Overall, quarantine rules, and the genuinely unusual part: findings are produced by *AI research agents*, and only figures agreed by **2+ independent reports** surface as "verified". That "models judging models, cross-verified" story is the most citable thing this site does; explain it in plain language and link it from every page type. It costs about a day because the prose already exists in `README.md`/`RULES.md`.
4. **"GEO" is ~90% SEO — don't budget for mystique.** For answer engines the mechanics are the familiar ones: crawlable HTML (already true — Qwik SSG ships full markup, so no-JS AI crawlers see the content), unique data on stable URLs, dates, citations, internal links. An `llms.txt` is a cheap experiment, not a lever to plan around; AI-bot stanzas are a policy decision; neither substitutes for the four page families.
5. **Measurement belongs in the notes' "Critical" tier.** Search Console + Bing Webmaster (Bing feeds several AI surfaces), sitemap submitted, "discovered vs. indexed" watched, AI referrers tracked as their own channel. Without a baseline you can't tell whether any of this works — and the temptation is always to add pages instead of measuring them.
6. **Compare pages: freeze the URL shape now, canonical order, curated set.** Pick `/compare/<a>/<b>/`, alphabetical, frozen forever; handle the reverse order with `rel=canonical` plus `redirects` in `vercel.json` for the pairs you care about (the deploy is Vercel; there is no redirect config in the repo today). Keep the homepage's 3-slot A/B/C picker as the interactive explorer — don't make one widget do both jobs. Gate each pair on (a) real query demand or (b) both models clearing an evidence threshold; every page ships a generated "as of" date and a 2–4 sentence conclusion computed from the numbers. Add a `/compare/` index listing the curated pairs (a crawl hub of static links).
7. **References: right idea, phase it — the pipeline makes it cheap.** `evidence.generated.ts` already knows *benchmark + which reports cite it*; the URLs live in the findings files `pnpm sync` already parses. Phase 1: per-model deduped list (grouped benchmarks / pricing / access, tagged vendor vs independent, real links in the prerendered HTML — a `<details>` fold is fine, hidden-in-DOM still crawls). Phase 2: attach the claiming URL to each evidence item so `/benchmarks/` leaderboards can cite per claim. Never show a synthesized number without its trail.
8. **`/benchmarks/` is more ready than it looks: 31 benchmarks already surfaced.** `evidence.generated.ts` (fed by the curated vocabulary in `scripts/lib/benchmarks.mjs`) has **31 distinct benchmark names**. One page per benchmark — definition, who runs it, what a good score looks like, saturation caveats — then the **cross-verified** leaderboard (only figures confirmed by ≥2 reports, with model links). "What multiple independent agents agree the number is" is genuinely original; nobody else publishes it. Add `Dataset` JSON-LD and keep the "we don't run evals" honesty line prominent.
9. **`/data/` should be machine-first.** Emit from sync into `public/` (already deployed with the build): stable `data/scores.json|csv`, dated snapshots (`2026-11-09.*`), a changelog, an attribution/license note, `Dataset` schema. Downloads are how the content gets reused — reuse is what produces citations and links back.
10. **Write the internal-link graph down once, and give it a hub.** Model → (top compares, its benchmark figures → benchmark pages) → benchmark page → back to models → methodology/data → best-* → back to models. A plain `/models/` directory (static links, all 208, grouped by vendor) is the missing hub — it also carries the "models with tool calling / long context" long-tail intents from the notes' table without building thin filter pages. Every new route must both link out and be linked in; a URL that only exists in the sitemap is a dead end for crawlers and AI alike.

### Build order (the entry above, with a step 0 merged in)

0. **Plumbing + measurement pass** (hours, not days): `SITE_ORIGIN` on sync and build + live verification; GSC + Bing; freeze URL spellings (`/promotions/`, `/best-free-llm-for-coding/`); robots policy decision; OG card. Do it before route #1 — it de-risks everything below.
1. References/provenance on model pages (blend into the existing evidence section).
2. `/methodology/` + `/data/` (prose exists; downloads are a sync emit).
3. `/benchmarks/` (31 pages + index — flagship).
4. `/compare/<a>/<b>/` (curated ~200–300; canonical order frozen; generated conclusions; index page).
5. `/best-*-for-*` (last, because their only defensible angle is citing layers 1–4; as-of dates loud; define "free" explicitly — free tier vs open weights vs $0 API lane, the badge logic already distinguishes these).
6. `/promotions/` — only after point 1 above is resolved; otherwise it stays off the site.

### Bottom line

The notes are a good backlog, not yet a strategy — and the repo already contains the data for five of the seven families. My honest adds: verify the deploy origin first or the whole program silently points at localhost; resolve the "no paid promotions" contradiction before monetization shapes the brand; plan for ~21.5K possible pairs and ship hundreds; lead with the cross-verification/agreement story (it is the moat, the SEO differentiator, and the GEO hook at once); and measure from day one. Nothing here needs a new framework or a new design language — which is the best sign the plan is feasible.

---

2026-11-09 — STEM: Step 5 Preview

## Honest opinion — corrections first, then what the two entries above missed

The direction is right and the previous two entries covered the architecture well. I
checked their premises against the repo, and several load-bearing numbers in this
document are wrong in ways that will leak into site copy if unaddressed.

### Corrections I verified (all from the repo, not from this doc)

- **Roster size: neither 160 nor ~370.** `model-queue.md` lists 214 entries; 208
  `average.md` files exist on disk. That matters because both numbers are still wrong
  in the *right* direction for the argument — ~208 models puts `/compare/` pairs at
  ~21.5K, so curated-only stands — but any page that says "we compare N models" with a
  stale N is a credibility wound on a site whose entire strategy is trust. Bake the
  count from `pnpm sync`, never hardcode it.
- **`freeTier` data already exists.** `src/data/models.ts` has `hasFreeTier()`,
  `freeTierNote`, and pricing-tier arrays with per-line claimant URLs.
  `/best-free-llm-for-coding/` is a pure render job — no schema work needed. Good news
  the previous entries didn't have.
- **Per-benchmark data is already deep.** `evidence.generated.ts` carries 25+ distinct
  benchmarks with 55–182 scored models each (Terminal-Bench 182, HLE 173, GPQA Diamond
  173, SWE-bench Verified 144, LiveCodeBench 136 …). `/benchmarks/` is the cheapest
  "Critical" priority on the whole list: it's a render, not a build.

### The one data-integrity trap nobody named

Benchmark identity is a free-text string, and the same benchmark already appears twice
under different harnesses: **HLE (173 models) vs AA-HLE (114)**, and **GPQA Diamond
(173) vs AA-GPQA (80)**, plus AA-LCR / AA Coding Index / AA Intelligence Index. If
`/benchmarks/` groups by name, it will silently merge different harnesses and scales
into one fake leaderboard that contradicts every findings file it cites. The fix belongs
in sync, before any page: the benchmark key must be
`(benchmark × harness × source claimant)`, not a string. That is exactly the
"Accurate model IDs, benchmark harnesses, dates and configurations" Critical line, and
it's the only item in this entire plan that can launch a *wrong* fact at scale.

### Opinions on the contested points

1. **Auto-generated verdicts need a stated noise rule.** The suggestion to derive
   compare conclusions from subcategory deltas is right, but only with a threshold: a
   0.2 delta must produce "comparable", not "decisively better". The repo already has
   the concept (rater gate, 2+ independent findings agreement) — reuse that agreement
   band as the noise floor. A confidently-worded wrong conclusion is the one artifact
   AI engines will quote verbatim for years, and it can't be recalled.

2. **Agree: references are `<details>`, not a modal; agree: curated compare pairs;
   agree: `/promotions/` quarantined and last.** No argument with those. I'd only add
   that the promotions isolation should also cover *anchor text and URL hygiene* —
   referral URLs posted to this repo get cited by LLMs as part of the site's identity
   graph, so they should at minimum live under a consistent, clearly-commercial path
   (`/promotions/<provider>/`), never a root-level short link.

3. **Scope must be decided before pages are built, not after.** The doc itself flips:
   the H1 is coding-only today, yet the notes cite "160-model catalog and decision-model
   coverage" and want the H1 broadened. You can't run both positioning strategies —
   broaden the H1 and then ship only coding "best" pages, and every ranking page is an
   entity-mismatch signal. Pick one story. If the 208-model catalog is the story,
   coding is a category page under it, not the identity.

### My one structural addition: internal linking has no owner

Three priorities mention internal links; no entry has said what they are. Concretely:
every score with 2+ agreeing raters links to its `/benchmarks/<b>/` page; every model
page links its top 3–5 peers to `/compare/` pairs; every `/best-*` page cites the model
and benchmark pages behind each row. That's what turns ~400 new static pages into a
crawlable graph instead of 400 orphans — and it's all derivable from data you already
bake. The existing compare picker on the homepage should also appear on model pages;
right now the widget and the routes would be strangers.

### What I'd change about the proposed order

Agree with plumbing → renders → compare → best. Two amendments:

- **robots.txt + JSON-LD ship first** (one-line wins: explicit OAI-SearchBot/GPTBot/
  PerplexityBot allow in the sync-generated robots; `Dataset`/`Table` on benchmark
  pages, `BreadcrumbList` everywhere, per-model JSON-LD already exists on
  `model/[slug]`). There's no reason for these to wait behind any page build.
- **`/best-free-llm-for-coding/` needs an update mechanism, not just a decay date.**
  Free tiers vanish monthly (rate-limit cliffs, price changes). Since the claimant-URL
  plumbing already exists per pricing line, render those claimant links on the ranking
  page too — a wrong free-tier claim must be correctable by the reader clicking
  through, or the page rots silently.

### Net

The winning move remains what the first responder said: surface data you already have.
Of the seven URL types, four are pure renders over `pnpm sync` output
(`/benchmarks/`, `/methodology/`, `/data/`, references), one is a curated-pair build
(`/compare/`), two need evidence plumbing first (`/best-*-for-*`), and one
(`/promotions/`) earns nothing from this ranking and should stay last and isolated.
Total genuinely new *content* writing is near zero — the site becomes citable by
publishing its own pipeline, not by writing more prose.

---
2026-11-09 — STEM: GLM 5.3 Flash

## Fact-check of the three reviews above

- The catalog is 208 models, not 160 and not ~370. `model-queue.md` (the roster's single
  point of reference) lists 208 entries; the full pair matrix is therefore 208 x 207 / 2 =
  21,528 pairs, not 68,000+. The first two reviews repeated the ~370/68K figure (most
  likely a miscount of `src/data/models.ts`, which is ~370 source lines - code, not
  models); the Step 5 Preview entry's "214 entries" is the same class of slip - that is
  the file's total line count, six of which are the header comment. A stale N is worse
  than it looks on a trust-first site - render the count from sync output, never hardcode
  it. The build-order conclusion survives either way (21.5K prerendered thin pages is
  still a crawl-budget disaster), but an execution plan should quote real numbers.
- When I first read this file, it ended with a verbatim duplicate of the Gemini 3.8 Flash
  entry; a parallel Step 5 Preview edit has since replaced it - good. The lesson stands:
  duplicated planning docs drift exactly the way the project's duplicated rule files
  drifted before the 2026-10 compaction, and parallel edits to a single notes file are
  exactly how such duplicates are born. Keep one canonical copy per idea.
- I verified the Qwen entry's repo claims and they hold: robots.txt is the bare
  `User-agent: *` + `Allow: /` + Sitemap (`scripts/lib/codegen.mjs`), and JSON-LD exists
  only on `model/[slug]` today. Both fixes are as cheap as claimed.
- Mechanical note: single routes (`/methodology/`, `/data/`, `/benchmarks/`) prerender
  with no extra work; only a dynamic `[modelA]/[modelB]` route needs an `onStaticGenerate`
  path list, which today exists only on `model/[slug]` - that is the pattern to copy.

## What is still missing after three reviews

### 1. A measurement plan - the biggest gap in the document
Four reviews in, nothing says how success will be measured. Before the first page
ships: Search Console + Bing Webmaster properties verified; a baseline of AI-crawler
hits (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended) from server
logs; and one agreed metric per page type (`/benchmarks/` = impressions on benchmark
queries; `/compare/` = crawl rate + impressions on pair queries). About an hour of
setup - and it also decides `/compare/` curation empirically instead of by guesswork
(see 4).

### 2. An explicit internal-link contract per page type
A page nothing links to never gets crawled or cited, sitemap or not. For each new route,
write down "what links here" and "what it links to" before building it. Minimum graph:
model page -> its top 3 comparison pages + every benchmark page it has evidence for;
benchmark page -> leaderboard -> model pages; `/compare/` index grouped by category,
never one giant list. The V2Header nav should absorb at most 1-2 new entries - the
anchor bar is already full; internal links from the data pages carry the rest.

### 3. `/data/` needs a license, not just downloads
No review above mentions licensing. Publishing the CSV/JSON exports under an explicit
license (CC BY 4.0 or similar) with a short "how to cite this" block is the cheapest
citation/backlink driver on the whole list - it is what makes researchers, bloggers and
AI engines comfortable quoting with attribution, and it directly fulfils the
document's own Medium row "Public CSV/JSON downloads".

### 4. `/compare/` curation should be measured, not guessed
"Top 50 models x tier" is a guess. Ship steps 1-3 first, collect a few weeks of Search
Console data, then pick the first 50-100 pairs from real queries (brand-vs-brand, "X vs
Y for coding") plus the queue's top-N. One guardrail for the auto-verdict text: keep
every sentence factual, numbers-forward and dated ("A leads Coding 96 vs 88; B wins
price at $X/1M. Mean of N research files, as of DATE."). A fixed marketing template
stamped 500 times is a thin-content signature; factual deltas with dates are exactly
what answer engines quote. (Step 5 Preview's noise-floor rule is the right complement:
a small delta must render as "comparable", not "decisively better" - the repo's 2+
independent-findings agreement band is the natural threshold to reuse.)

### 5. The homepage H1 is the lowest-value change on the page - do it last
"Compare AI Models with Independent Benchmark Evidence" is defensible, but homepage H1s
are high-blast-radius and low-yield next to the fact that the new pages have no titles
at all yet. The real wins are unique, descriptive `<title>`/H1 patterns on the new page
types and consistent entity naming in titles and og: tags. Touch the H1 last, if ever.

### 6. The thin-content edge of the catalog is the bottom of the queue - step 1 already fixes it
Every model stays on the site (crown rule - correct), but bottom-of-queue models with
one or two raters are the closest thing to thin pages. The References drawer plus the
evidence trail is the organic fix - one more reason "references on model pages" is
rightly step 1. Enrich, never noindex.

### 7. One URL decision left
`/promotions/` and `/best-free-llm-for-coding/` are settled (the "promotoions"
misspelling must die before it ships). One more: several slugs contain underscores, so
`/compare/` URLs must explicitly decide - pass slugs through verbatim (matches the
existing model URLs, zero redirects; my recommendation) or normalize with 301s. Decide
now; it is a permanent URL property.

## My honest summary

The core thesis is right and the priorities table is the best part of the document: the
site already bakes verified, multi-source, dated data (`evidence` / `verified` /
`scores` generated files), and almost everything on this list is a render job over data
that already exists. The only genuinely new logic is the `/compare/` verdict sentences
and the `/best-*` filtering. I would compress this file into three artifacts - the
URL/typo fixes, the priority table, and the build order with the measurement plan
attached - and treat everything else as commentary. Build order I would sign (Qwen's,
amended): robots.txt bot-allows + JSON-LD one-liners ship first (Step 5 Preview is right
- they should not wait behind any page build), then references -> `/methodology/` +
`/data/` (+ license) -> measurement baseline -> `/benchmarks/` -> `/compare/` with
measured curation -> `/best-*` -> `/promotions/`, isolated.
