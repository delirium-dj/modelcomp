# Claude Fable 5.1 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top-tier model for demanding reasoning and long-horizon agentic work, released 2026-09-01, extending Claude Fable 5 at unchanged $10/$50 pricing with 75% cheaper cache reads ($0.25/MTok). Strongest at terminal-based scientific research (Terminal-Bench-Science 52.6%, more than double Fable 5) and long-running business automation (AutomationBench 31.4%).
- **Provider / access:** Anthropic API + AWS Bedrock + Google Cloud Vertex. Claude Platform docs (`platform.claude.com`). Messages API. Also OpenRouter (`anthropic/claude-fable-5.1`); OpenCode Zen as `opencode/claude-fable-5.1` (no Free ID — paid model).
- **Release / knowledge:** 2026-09-01; knowledge cutoff and training-data cutoff both June 2026 (Claude Platform docs).
- **IDs:** `anthropic/claude-fable-5-1`, `anthropic/claude-fable-5.1` (OpenRouter). Sibling `claude-mythos-5-1` is the same weights behind Anthropic verification programs (e.g. Cyber Verification Program) with lighter safeguards — one published TB 4.0 number of 60.9% vs Fable's 55.8%.
- **Context window:** 1M tokens / 128K max output (Claude Platform docs comparison table).
- **Modalities:** text and images in; text out; adaptive thinking always on (cannot be disabled), default effort `high`; tool use (forced tool use now returns an error — breaking change vs Fable 5); per-message effort (beta), turn-scoped system messages (beta), readable progress updates between tool calls (beta), content provenance. Thinking blocks are model-tied: only Fable 5.1/Mythos 5.1 can read Fable 5.1's thinking blocks.
- **Pricing (as of 2026-10-09):** $10 / $50 per 1M in/out (unchanged from Fable 5); cache reads $0.25 (was $1.00, −75%); cache writes $12.50 (5-min) / $20 (1-hour); Batch API 50% off. Comparators: Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 5.5 from $0.10/$0.50.
- **Architecture:** proprietary, closed weights; parameters undisclosed. System card: anthropic.com/claude-fable-5-1-mythos-5-1-system-card.

### Raw benchmarks found

> Primary: Anthropic launch post 2026-09-01 (cross-read via Apidog full-table article, Vellum, Emergent, VentureBeat Browserbase figure). All launch numbers are vendor-run (Anthropic ran competitor columns too); effort level not stated (docs say gains largest at xhigh/max).

Agent / tool use:

- GDPval-AA v2 (knowledge work, Elo): **1853** (Anthropic launch) vs Fable 5's 1723, Opus 5's 1824, Sol's 1711. BenchmarkList independently lists GDPval-AA **1,853** (100th percentile, rank 2 of 356).
- Terminal-Bench 4.0: **55.8%** vs Fable 5's 42.0%, Opus 5's 52.3%, Sol's 37.3% (Anthropic); Mythos 5.1 sibling scored 60.9%.
- Terminal-Bench-Science 0.1: **52.6%** vs Fable 5's 24.7%, Opus 5's 29.0%, Sol's 22.4% — headline result, more than double predecessor.
- OSWorld 2.0 (partial credit): **77.9%** vs Opus 5's 75.4%, Fable 5's 72.9%; (strict): **41.7%** vs 39.6%/36.1%.
- AutomationBench (E2E business workflows): **31.4%** vs Fable 5's 17.1%, Opus 5's 26.9%, Sol's 19.6%.
- Browserbase (browser agent, hardest tasks; VentureBeat, not launch post): **82%** vs Opus 5's 74%, Fable 5's 57%.
- Tau3-Bench Banking: **47.2** (BenchmarkList, rank 6 of 177).
- AA-Briefcase: **1694 Elo** (BenchmarkList, 98th percentile, rank 4 of 147).
- ARC-AGI-2: **90.0% verified** (BenchmarkList, 96th percentile, rank 5 of 99).
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **60.9%** vs Opus 5's 56.6%, Fable 5's 57.8%.
- Humanity's Last Exam (with tools): **65.0%** vs Opus 5's 63.6%, Fable 5's 63.8%.
- Artificial Analysis Intelligence Index v4.3: **53** tied with GPT-6 Astra at 53 per listify.cool technical guide (AA model page exists; exact figure cross-check pending) — treated as secondary source.
- DRACO: **87.7** (BenchmarkList, rank 2).
- Vals AI Index: **65.83%** across 34 benchmarks (Vals AI).
- GPQA Diamond / CritPt / AA-Omniscience: no verified public score found in launch coverage (AA per-eval rows behind "Not publicly available" gate at research time).

Coding:

- CursorBench 3.2.0 (IDE-style coding): **73.4%** vs Fable 5's 70.5%, Opus 5's 70.0%, Sol's 67.2%.
- Terminal-Bench 4.0: **55.8%** — see agent section.
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: no verified public score found in launch coverage.

Long context:

- Context 1M / 128K out (Claude Platform docs). No MRCR/RULER/GraphWalks score published — no long-context retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 96/100.** GDPval-AA 1853 (100th percentile on BenchmarkList), TB-Science 52.6% (2x field), OSWorld 77.9/41.7, AutomationBench 31.4, Browserbase 82%, TB 4.0 55.8% — leads every published agent benchmark except where its own Mythos sibling (gated) posts higher; capped at 96 because launch numbers are vendor-run, effort level undisclosed, and Mythos 5.1 shows the safeguard ceiling above it.
- **Reasoning: 95/100.** HLE 60.9% no-tools / 65.0% with-tools tops the published field (Opus 5.5's 67.7% later edged past the with-tools number), ARC-AGI-2 90% verified, DRACO 87.7, AA Index ~53–66 range with GPT-6 Astra tie reported at 53; capped because GPQA/CritPt/Omniscience confirmations were not publicly readable and multilingual is stated flat vs Fable 5.
- **Context window: 100/100.** 1M input / 128K output with adaptive thinking; full top-tier window per methodology; no long-context retrieval score published keeps it at the standard 1M ceiling.
- **Multimodal: 65/100.** Text and images in, text out (+image = 60–70 band); no audio/video input, no PDF-input claim verified at launch; document/spreadsheet/slide work claims are agentic file-handling, not native modality coverage.
- **Coding: 94/100.** TB 4.0 55.8% (Sol +18.5), CursorBench 73.4% (best published), TB-Science 52.6% doubles Opus 5; capped by missing SWE-bench Verified/LiveCodeBench/SciCode numbers and the narrow 3.4-pt CursorBench lead over a model at half its price.
- **Cost efficiency: 35/100.** $10/$50 per 1M — premium tier; the 75% cache-read cut to $0.25 materially helps long-horizon agent loops that re-read cached context, and Batch API halves cost, but base rates remain the most expensive mainstream tier; scored on paid pricing (no Free ID).
- **Overall Score: 90/100.** (96 + 95 + 100 + 65 + 94) / 5 = 90.0 → 90. Best-fit: the escalation model for demanding long-horizon agentic/research work when Opus 5.5 at higher effort still falls short — Anthropic's own guidance — and budget is secondary to capability.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Anthropic launch post via Apidog full-table article, Claude Platform docs, BenchmarkList, Vellum, Emergent, VentureBeat, listify.cool, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.

### Addendum 2026-10-09 (session 2) — cross-vendor launch-table rows

> Filled from OpenAI GPT-6 Astra, Google Gemini 3.8 Flash, and xAI Grok 4.7 launch tables where Fable 5.1 appears as a competitor column. No score changes; rows close gaps flagged above.

- DeepSWE v1.1: **70.0%** (xAI Grok 4.7 table, Max effort) vs Grok 4.7's 71.0%, Sol's 72.7%, Astra's 74.1% — mid frontier cluster (closes the "no verified DeepSWE" gap).
- AA Intelligence Index **v4.1.1**: **65.7** (via Vellum's Astra writeup) — best in that table vs Opus 5's 63.1, Fable 5's 62.1, Astra's 61.2; corroborates the AA-index leadership the listify v4.3 "53 tie" row understated (different index version).
- AA Coding Agent Index: **67.2** (Vellum) vs Fable 5's 68.1, Astra's 67.0 — three-way top tie.
- AA-Briefcase v1.1: **1,678** (xAI table, Max) vs BenchmarkList's 1,694 — different revisions, both logged; best in the xAI table over Grok 4.7's 1,657.
- BenchCAD: **84.3%** (OpenAI Astra table; Claude runs used modified eval settings) vs Astra's 95.9%, Sol's 83.3%.
- Harvey Legal Agent: **6.7%** (Google 3.8 Flash table) — laggard vs Grok 4.7's 19.6%, 3.8 Flash's 10.0% (legal-agency weakness row, worth routing around).
- FrontierCode 1.1 Main: **50.3%** (OpenAI Astra table) vs Astra's 53.3% (fills gap; Opus 5.5's 54.4% later topped both).
- Terminal-Bench 4.0 cross-check: Fable 5.1 Max **57.9%** in xAI's table vs launch's 55.8% — effort-level difference (Max vs default), consistent with the effort-dial docs note.
- Context/pricing re-verified via LLM Stats: $10/$50/$0.25 cached, 1M/128K, released 2026-09-01 — no changes to the file above.
