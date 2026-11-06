# Qwen 3.5 Plus — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`opencode/qwen-3.5-plus`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus. Alibaba's hosted vision-language Plus of the 3.5 generation, **superseded by Qwen3.6 Plus and later**. BenchLM's canonical slug is `qwen3-5-plus` (**not** `qwen-3-5-plus`, which 404s — the same dotted-slug trap as every other Qwen 3.x SKU in this batch). It scores **49.34/100, #103 of 1,015** with **only 2 benchmarks — the thinnest evidence base measured anywhere in this research series.**
- **Short description:** A legacy hosted generalist whose entire measured record is **two benchmarks, both poor: JobBench 18.5% and Vibe Code Bench 15.74%**. Repo meta.json records it as a 1M-context vision-language model priced at $0.26–$0.40 / $1.56–$2.40 per 1M, explicitly flagged as a **migration-compatibility pick** because its measured agent work "already lagged the leaders."
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, OpenRouter, and OpenCode Zen. **Closed-source, proprietary** — no weights, no self-hosting. Repo meta.json records `noFreeId`.
- **Release / knowledge:** release date not restated; the 3.5 generation is Alibaba's mid-2026 line, predating 3.6, 3.7 and 3.8. **Knowledge cutoff not disclosed.**
- **IDs:** `opencode/qwen-3.5-plus` (Zen); `qwen/qwen-3.5-plus` (Openrouter); `qwen3-5-plus` (BenchLM canonical, Model Studio).
- **Context window:** **1,000,000 tokens total (991,808 in / 65,536 out)** — repo meta.json; BenchLM records 1M.
- **Modalities:** **text, image and video in; text out** (repo meta.json).
- **Pricing (as of 2026-11-06):** **tiered and region-dependent**: Model Studio International ~$0.40/$2.40 per 1M, **China region ~$0.115/$0.688**, OpenRouter from ~$0.30/$1.80, with $0.04 explicit cache read (repo meta.json). The China-region rate is the cheapest hosted tier in this research series.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**A negative finding is the headline: BenchLM carries only two benchmark rows for this model, and no independent research write-up, Vals page, Epoch AI entry or Artificial Analysis result appears in any source checked.** Both rows are independently attributed, which is at least clean provenance.

- **JobBench: 18.5%** — from the JobBench paper (arxiv 2605.26329). This is a real-world task-execution benchmark, and 18.5% is far under frontier.
- **Vibe Code Bench: 15.74%** — from Vals AI's Vibe Code Bench v1.1. Also far under frontier.

Everything else is absent:

- **Terminal-Bench (all harnesses), τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, AndroidWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, Agents' Last Exam, GDPval-AA: no verified public score found** — so all three of the methodology's agentic frontier references are unmeasured and no AA Agentic Index exists
- **GPQA, HLE, MMLU-Pro, SuperGPQA, AA Intelligence Index, AA-Omniscience, CritPt, AA-LCR, MRCR, GraphWalks, ARC-AGI, AIME, MATH, FrontierMath: no verified public score found** — so **every one of the methodology's reasoning references is unmeasured, and reliability is entirely unknown**
- **SWE-bench (Verified and Pro), LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, NL2Repo, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% coding references are all unmeasured
- **MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench, Design Arena: no verified public score found** — so **the vision-language claim, which is this model's defining property, has no measured support at all**

### Normalized scores (1–100)

> **Methodology note.** With two benchmarks — one agentic and one coding, both poor — **every quality dimension in this report is a placeholder-for-unknown anchored on the two measured rows plus the repo's curated spec facts**, not a benchmark-derived score. Each is labelled with what it rests on. This is the weakest evidential basis of any report in this research series, and the confidence interval on every number is the widest.

- **Tool use: 32/100.** Anchored on **JobBench 18.5%**, a real-world task-execution benchmark that directly measures what this dimension is about, and 18.5% is well below the methodology's mid band. Held at the bottom of the low band rather than the floor because **JobBench is one benchmark on one harness** and every other agentic reference — Terminal-Bench, τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, MazeBench, ALE and the AA Agentic Index — is entirely absent. Repo meta.json independently records that "its measured agent work already lagged the leaders," which corroborates the direction without adding a number.
- **Reasoning: 45/100.** Anchored on the bottom of the methodology's mid band as a neutral default for a hosted flagship-tier reasoning model with **zero measured reasoning benchmarks**: no GPQA, no HLE, no CritPt, no AA-LCR, no composite index, no ARC-AGI, no mathematics. Scored at 45 rather than 50 because the two benchmarks that do exist both measure applied reasoning and both are poor (JobBench 18.5% requires genuine planning and reasoning to score above the floor), so the available evidence points weakly downward even though it is not a reasoning measurement. **Explicitly a placeholder, not a measurement.**
- **Context window: 92/100.** **1,000,000 tokens (991,808 in / 65,536 out)**, a genuine native 1M window with a 65,536 max output — confirmed by both the repo's meta.json and BenchLM. Scored at the 1M tier's lower bound, below the 95+ of models with measured ≥98% retrieval, because **no MRCR, GraphWalks, RULER or AA-LCR figure exists**, so the window's usable depth is entirely unverified. Still a real native 1M, which is more than most of the 3.x generation.
- **Multimodal: 65/100.** **Text, image and video in; text out** per the repo's meta.json, placing it in the methodology's 75–90 "+video/PDF in" tier. Scored at 65, *below* that tier, because **not a single visual benchmark exists** for this model — no MMMU-Pro, no CharXiv, no OmniDocBench, no RealWorldQA, no ExtractBench, no ZeroBench, no Design Arena. The claim is a spec-sheet claim only, and the methodology's own rule is that an untested capability claim must not be scored as though it were demonstrated.
- **Coding: 40/100.** Anchored on **Vibe Code Bench 15.74%**, a benchmark that measures exactly this dimension's applied form, and 15.74% is near-floor. Held at the bottom of the methodology's low band rather than the floor because Vibe Code Bench is a specific style of greenfield coding and **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index and NL2Repo are all absent**, so repair-coding ability — the more common production need — is unknown and could plausibly be better.
- **Cost efficiency: 90/100.** **$0.40/$2.40 internationally, ~$0.115/$0.688 in the China region, ~$0.30/$1.80 on OpenRouter, $0.04 cache read** — a genuinely strong card, and the China-region rate is the cheapest hosted tier in this research series. Held at 90 rather than higher because there is no free tier (`noFreeId`), the model is **closed-source with no self-hosting escape**, parameter count is undisclosed so infrastructure planning is impossible, and the tiered regional pricing means the rate you actually pay is not a model property.
- **Overall Score: 54.8/100.** (32 + 45 + 92 + 65 + 40) / 5 = 54.8 → **55**. Recommendation: **a migration-compatibility pick, and the thinnest-evidenced model in this research series.** Its two genuine assets are a **native 1M window** and a **cheap regional rate card**; everything else is either unmeasured or measured poorly. The repo's own curated metadata calls it superseded and lagging, and the two benchmarks that exist agree. **Migrate to Qwen3.6 Plus (53.66) or Qwen3.7 Plus (53.91) unless pinned to `qwen3-5-plus` for compatibility** — note that those successors have 69 benchmarks each against this model's 2, so the comparison is not close on evidence either. Treat the 55 as a floor on evidence rather than a capability ceiling: two benchmarks cannot support a capability judgement, and the single most informative thing that could be done with this model is to run GPQA, SWE-bench Verified and MMMU-Pro on it once.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose central and dominating finding is a **negative one: only two benchmarks exist for this model anywhere** (JobBench 18.5% from the JobBench paper, Vibe Code Bench 15.74% from Vals AI), both independently attributed. No independent research write-up, Vals page, Epoch AI entry, Artificial Analysis result or Hugging Face card was found for this SKU in any source checked, and the repo's official-URL pointer (`qwenlm.github.io/blog/qwen-3.5-plus/`) 404s. The identity, 1M window, modality set, tiered pricing and `noFreeId` status were therefore taken entirely from the repo's curated `meta.json`, and the BenchLM row (49.34/100, #103 of 1,015) was located only after finding the **dotted canonical slug `qwen3-5-plus`** via Qwen3.8-27B's sibling list — the repo folder spelling `qwen-3-5-plus` 404s on both BenchLM and LLMLearner. **Because of this, every quality dimension above is explicitly labelled a placeholder-for-unknown anchored on the two measured rows and the spec facts, not a benchmark-derived score, and the two measured benchmarks point in the same (poor) direction on agentic execution and coding.** The thesis of the report is stated plainly rather than hedged: **a two-benchmark evidence base cannot support a capability judgement, and the correct output of re-research here is to record that fact and recommend migration to a better-evidenced successor, not to manufacture scores.** Missing benchmarks (all of Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, AndroidWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, Agents' Last Exam, GDPval-AA, AA Agentic Index, GPQA, HLE, MMLU-Pro, SuperGPQA, AA Intelligence Index, AA-Omniscience, CritPt, AA-LCR, MRCR, GraphWalks, ARC-AGI, AIME, MATH, FrontierMath, SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, NL2Repo, FrontierCode, MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Qwen3.5 Plus benchmark scores (2 rows only, 49.34/100, #103/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-5-plus)
  - [JobBench paper (source of the 18.5% row)](https://arxiv.org/abs/2605.26329)
  - [Vals AI — Vibe Code Bench v1.1 (source of the 15.74% row)](https://www.vals.ai/benchmarks/vibe-code)
  - [Repo curated meta — `model/qwen-3.5-plus/meta.json` (1M window, modalities, tiered regional pricing, noFreeId, superseded status)](/model/qwen-3.5-plus/meta.json)
  - [Alibaba Cloud Model Studio — model list and pricing](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Openrouter — qwen-3.5-plus](https://openrouter.ai/models/qwen/qwen-3.5-plus)
  - See also: [`model/qwen-3.6-plus/`](qwen-3.6-plus.md) (69 benchmarks), [`model/qwen-3.7-plus/`](qwen-3.7-plus.md) (69 benchmarks) — the successors this report recommends migrating to, both refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
