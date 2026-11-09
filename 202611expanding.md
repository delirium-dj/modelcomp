# In short, because of SEO, we need to add following links to our website:

/compare/ - Indexable (very important) two-model comparison pages with consistent URLs and explanatory conclusions

/benchmarks/ - Definitions, measurements, methodology, test conditions and results by benchmark - we are not performing any benchmarks but via our AI research agents we are collecting all the possible info and synthesize it to one single point for better understaniding, evaluation and comparing.

/promotoions/ - here we will have promotoions with our refferal links

/best-ai-models-for-coding/  - Evidence-backed recommendations by actual user task

/best free LLM for coding/ 

/methodology/ - Scoring rules, limitations

/data/ - data provenance, downloads, update history and corrections

## Rules

### Simplicity

All of this should be done in the most simpliest way, using everything that can be already reusable from our project.

### SEO in mind

We are doing all of this to enhance SEO and our visibility via internet. On our mind we have humans who would search for some question like "best-ai-models-for-coding" but also we want to do everything we can to be cited by various AI tools out there.

## SEO/GEO implementation priorities

Priority	Implementation = Expected benefit
Critical	Unique, static/SSR-rendered model and comparison pages = Reliable content discovery
Critical	Direct source URLs for scores, prices and model claims = Verifiability and trust
Critical	Accurate model IDs, benchmark harnesses, dates and configurations = Credible comparisons
High	Descriptive titles, H1s, canonical URLs, sitemap and internal links = Better relevance and discoverability
High	Transparent scoring, uncertainty and missing-data rules = Research credibility
High	Original comparative analyses and useful conclusions = Stronger reasons for others to reference you
High	Consistent site name and entity identity = Clearer attribution
Medium	Public CSV/JSON downloads for "/compare/", changelogs and embeddable charts = More opportunities for backlinks and reuse

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
   as a "credibility" signal. It can live there — it just must not be what the site is *for*.

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

