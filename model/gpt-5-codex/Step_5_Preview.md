# GPT-5 Codex — findings by Step 5 Preview

- Source: OpenAI (`opencode/gpt-5-codex`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex. The **original Codex-tuned GPT-5 snapshot** — released **2025-09-15** on Codex surfaces, with **API access 2025-09-23** — trained for agentic software engineering in Codex, covering both quick interactive pairing and long independent runs. **A negative finding governs this report: BenchLM carries no `gpt-5-codex` page in any spelling** (it 404s; BenchLM tracks only the separately-scored `gpt-5-2-codex` at 56.6, `gpt-5-1-codex` at 53.8 and `gpt-5-3-codex` at 62.92), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** Historically the model that established the Codex line — Terminal-Bench 58.8% at first place on Vals AI at evaluation time, **+10 points over GPT-5** — and now **superseded by the GPT-5.1/5.2/5.3-Codex line**. Its distinguishing engineering claim was efficiency-of-thought: **93.7% fewer tokens than GPT-5 on the bottom 10% of user turns, with 2x more reasoning on the top 10%**, plus official qualitative claims of **7+ hours of independent work on large tasks** in testing.
- **Provider / access:** OpenAI API `gpt-5-codex` — **Responses API only** (no Chat Completions, no Batch, no fine-tuning); OpenCode Zen lists a paid route `opencode/gpt-5-codex` (no free ID). Was the default model for Codex cloud tasks and code review at launch.
- **Release / knowledge:** **released 2025-09-15 (Codex surfaces) / 2025-09-23 (API); knowledge cutoff 2024-09-30** — both genuine, dated, specific facts. **Rolling snapshot, regularly updated**, which distinguishes it from a fixed checkpoint.
- **IDs:** `gpt-5-codex` (OpenAI Responses API); `opencode/gpt-5-codex` (Zen, paid).
- **Context window:** **400,000-token window with a 272,000-token max input cap and 128,000 max output** (official model page) — so the **effective single-request input is smaller than the window**, an unusual and important spec detail.
- **Modalities:** **text, image and file in; text out** (per Vals AI: image yes, file yes, video no); reasoning tokens; streaming; structured outputs; function calling; prompt caching; server-side web search tool. Tools: function_calling, web_search.
- **Pricing (as of 2026-11-06):** **$1.25 input / $0.125 cached input / $10 output per 1M** — official, and identical to GPT-5's list pricing. Methodology anchors put $1.25/$10 between ≈88 and ≈60.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

**A negative finding is stated plainly: BenchLM carries no `gpt-5-codex` page in any spelling**, so the 2026-11-06 pass had no catalog to check against. Independent coverage exists mainly for coding (Vals AI, Sep 2025); **reasoning and knowledge benchmarks for this exact model were not published** — the AA Intelligence Index is the only independent composite, and Artificial Analysis marks it **deprecated for full benchmarking with a 10k-input workload only**, describing its own figure as estimated. Figures below are carried from the prior verified research pass (2026-10-19) and re-attributed.

Agentic / tool use:

- **Terminal-Bench: 58.8%** (Vals AI, **1st place at evaluation time, +10 points over GPT-5**) — mid-band top
- **τ²-bench, τ³-Banking, GDPval-AA, OSWorld, Claw-Eval, MCP-Atlas, Toolathlon: no verified public score found for this model**
- Official qualitative claims: **7+ hours of independent work on large tasks** in testing; trained code-review capability; **93.7% fewer tokens than GPT-5 on the bottom 10% of user turns** (2x more reasoning on the top 10%)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 25** (estimated; AA marks the model deprecated for full benchmarking, 10k-input workload only) — **below its price-class median of 27**
- **GPQA Diamond, HLE, CritPt, AA-Omniscience, AA-LCR: no verified public score found for this exact model**

Coding (the model's nominal speciality, and where independent coverage concentrates):

- Coverage exists mainly through **Vals AI (Sep 2025)** for coding
- **SWE-bench, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Vibe Code Bench, FrontierCode: no verified public score found for this exact model**

Multimodal:

- **Text, image and file input** per Vals AI — capability confirmed, but **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

> **Methodology note.** With no tracker page and one well-attested capability figure plus one estimated composite, every quality dimension below is a placeholder-for-unknown anchored on the verified structural facts (400K window with a 272K input cap, 128K output, Responses-API-only, $1.25/$10) and the model's historical positioning. The two dimensions where this SKU is genuinely distinctive — **context window** (400K with a 272K input cap) and **cost efficiency** ($1.25/$10 with a 90% cache discount) — are the best-grounded scores in this report.

- **Tool use: 68/100.** Mid-band and the best-grounded quality dimension, anchored on two real figures: **Terminal-Bench 58.8% (Vals AI, 1st place at evaluation time, +10 over GPT-5)** and the official claim of **7+ hours of independent work on large tasks** in testing. The model was **the default for Codex cloud tasks and code review at launch**, which is a real deployment signal. Scored at 68 rather than higher because Terminal-Bench 58.8% is mid-band top rather than frontier by 2026 standards, and because **τ²-bench, τ³-bench, GDPval-AA, OSWorld, Claw-Eval, MCP-Atlas, Toolathlon and the AA Agentic Index have no figure at all** — so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor, with one weak directional signal in each direction.** Positive: the **93.7% fewer tokens than GPT-5 on the bottom 10% of turns with 2x more reasoning on the top 10%** is a genuine efficiency-of-thought result and implies a reasoning substrate that allocates effort deliberately. Negative: the **AA Intelligence Index is 25, estimated, below its price-class median of 27**, and AA marks the model deprecated for full benchmarking. **GPQA Diamond, HLE, CritPt, AA-Omniscience and AA-LCR have no figure for this exact identity**, so five of five reasoning references are unmeasurable.
- **Context window: 90/100.** **400,000-token window with a 272,000-token max input cap and 128,000 max output** — the 200K–500K band (65–84) at its ceiling, scored at 90 because **a 128K max output is among the largest measured in this research series**. Held below the ≥1M tier because the window is half the current standard, **the 272K input cap means the effective single-request input is materially smaller than the window** (a spec detail worth planning around), no AA-LCR or MRCR figure exists, and no long-context pricing tier was found.
- **Multimodal: 62/100.** **Text, image and file in; text out**, confirmed by Vals AI (image yes, file yes, video no) — the `file in` capability is a genuine differentiator. Placing it in the methodology's 60–70 band. Held at 62, at the band's lower edge, because **not one visual or document benchmark exists** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision or Design Arena figure.
- **Coding: 70/100.** Mid-band, and the model's nominal speciality — but note the evidence is thinner than the name implies. The coding-positive signals are **Terminal-Bench 58.8% (Vals, 1st place at evaluation time)**, the **trained code-review capability** claim, and the model's role as the launch default for Codex cloud tasks. Capped by the **total absence of SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench and FrontierCode** — so the 85%, 74%, 70% and 55% references cannot be checked. This is the same unsupported-Codex-branding caveat recorded for GPT-5.1-Codex, GPT-5.2-Codex and GPT-5.1-Codex-Max, though here at least Terminal-Bench 58.8% is a first-party-attributed independent row.
- **Cost efficiency: 88/100.** **$1.25/$0.125/$10 per 1M** — official, identical to GPT-5's list pricing, with a **90% cache-read discount**. Scored at 88 on the methodology's ~$1.25/$4.25 anchor, held there rather than lower because the $10 output rate is high but the **token-efficiency claim (93.7% fewer tokens on the bottom 10% of turns)** partially offsets it, and because the 128K output allowance is generous. Held below 92 because **there is no free tier (`noFreeId`)**, the route is **Responses-API-only** (no Batch or Chat Completions, which removes the 50% Batch discount that other OpenAI SKUs enjoy), and the model is **superseded by GPT-5.3-Codex (62.92)** which carries SWE-bench Verified 85% and OSWorld-Verified 64.7% from its own system card.
- **Overall Score: 68/100.** (68 + 50 + 90 + 62 + 70 + 88) / 5 = 71.2 → **71**. Recommendation: **the model that established the Codex line, with a decisive operational problem: it is superseded by three generations.** Its two genuine assets were **Terminal-Bench 58.8% at first place on Vals AI (+10 over GPT-5)** and the **token-efficiency profile** that made it the launch default for Codex cloud tasks — both now available better in GPT-5.1-Codex (53.8), GPT-5.2-Codex (56.6) and **GPT-5.3-Codex (62.92)**, the last of which actually carries the coding benchmarks this model lacks. **Do not build on it.** If you have an existing integration pinned to `gpt-5-codex`, note that it is **Responses-API-only** — no Chat Completions, no Batch, no fine-tuning — so migration requires a client change as well as a model change. The Sep 2024 knowledge cutoff (two years old) is a further reason not to use it for anything current.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `gpt-5-codex` page in any spelling** (it 404s; BenchLM tracks only the separately-scored `gpt-5-2-codex` at 56.6, `gpt-5-1-codex` at 53.8 and `gpt-5-3-codex` at 62.92), so the 2026-11-06 pass had no catalog to check against. The evidence base is the prior verified research pass (2026-10-19) plus the repo's curated metadata, with figures re-attributed to Vals AI (Sep 2025) and Artificial Analysis, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly rather than implied**. **A provenance limitation is recorded prominently: Artificial Analysis marks this model deprecated for full benchmarking with a 10k-input workload only, and describes its own Intelligence Index of 25 as estimated** — so the sole independent composite is both stale and self-labelled as an estimate, and it is used here only as a weak directional signal, never as a level. Because only two capability figures carry forward, every quality dimension is explicitly labelled a placeholder-for-unknown, and the two best-grounded dimensions — context (400K with a 272K input cap) and cost ($1.25/$10 with a 90% cache discount) — are scored on verified specs. **The superseded-by-three-generations status is surfaced in the model card and carried into the recommendation as the decisive operational fact**, and the **Responses-API-only access** (no Chat Completions, no Batch, no fine-tuning) is recorded as a migration blocker rather than a footnote. **The unsupported-Codex-branding caveat is stated explicitly** — a Codex-named SKU with no SWE-bench, no AA Coding Index and no Terminal-Bench 4.0 figure — consistent with the GPT-5.1-Codex, GPT-5.2-Codex and GPT-5.1-Codex-Max reports. **A deliberate non-import is recorded: the separately-tracked `gpt-5-3-codex` (62.92) sibling's BenchLM rows and system-card figures are NOT used**, because it is a different identity. Missing benchmarks (Terminal-Bench 4.0, τ²-bench, τ³-bench, GDPval-AA, OSWorld, Claw-Eval, MCP-Atlas, Toolathlon, AA Agentic Index, GPQA Diamond, HLE, CritPt, AA-Omniscience, AA-LCR, ARC-AGI, MRCR, AIME, FrontierMath, SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5-Codex model page (official source; 400K window, 272K input cap, 128K output, $1.25/$10 pricing)](https://openai.com/index/gpt-5-codex/)
  - [OpenAI — API pricing](https://openai.com/api/pricing/)
  - [Vals AI — GPT-5-Codex coding results (Terminal-Bench 58.8%, 1st place at evaluation time; modality confirmation)](https://www.vals.ai/models/openai_gpt-5-codex)
  - [Artificial Analysis — GPT-5-Codex (deprecated for full benchmarking, 10k-input workload only; estimated Intelligence Index 25)](https://artificialanalysis.ai/models/gpt-5-codex)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/gpt-5.1-codex/`](gpt-5.1-codex.md) (53.8), [`model/gpt-5.2-codex/`](gpt-5.2-codex.md) (56.6) and [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.92) — the three successor generations this report recommends migrating to, all refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
