# Claude Fable 5 — findings by Iceman

- Source: Anthropic/Claude Fable 5
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic’s first generally released Mythos-class model (June 9, 2026), positioned above Opus-class for long-horizon coding, agentic workflows, knowledge work, and vision; now legacy and superseded by Claude Fable 5.1/5.2.
- **Provider / access:** Anthropic Claude API (`claude-fable-5`) and platform integrations (Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS) per Anthropic docs. Restricted/verified access context also existed for related Mythos offerings; local metadata lists `opencode/claude-fable-5`, `noFreeId`.
- **Release / knowledge:** Released June 9, 2026 (Anthropic announcement/docs). Reliable knowledge cutoff January 2026; training data cutoff January 2026 (Anthropic platform docs).
- **IDs:** `claude-fable-5`, `anthropic.claude-fable-5` (platform-specific).
- **Context window:** 1,000,000 tokens context; 128,000 max output (synchronous Messages API; larger batch output beta noted in docs).
- **Modalities:** Text and image input; text output.
- **Pricing (as of release/docs reviewed):** $10 / 1M input tokens, $50 / 1M output tokens; cache read $1/MTok, 5m cache write $12.50/MTok, 1h cache write $20/MTok, Batch API 50% discount (Anthropic docs).
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed. Reasoning model with adaptive thinking (always on, default high effort).

### Raw benchmarks found

> SECOND-PASS UPDATE (converted/consolidated): I reviewed Anthropic’s announcement and platform documentation plus independent catalog pages (Artificial Analysis, OpenRouter). The announcement provides strong qualitative and comparative capability claims and references benchmark evaluations (including a comparison table/image and named benchmarks), but many exact per-benchmark numeric scores for this exact base model were not extractable as text from accessible sources in this pass. Scores below are **provisional, capability/spec-derived estimates** grounded in verified specs and clearly attributable claims; no invented numerics.

Agent / tool use:

- Anthropic reports long-horizon autonomous/agentic strengths (software engineering, multi-step tasks, memory-assisted workflows). Announcement notes FrontierCode evaluation context: **“scores highest among frontier models, even at medium effort”** (exact numeric not extracted from accessible text/chart in this pass).
- AA tracks agentic eval categories for this model family view (e.g. AA-Briefcase, AutomationBench, GDP.pdf, Terminal-Bench 4.0, AA-AnalystAgent, EnterpriseOps-Gym, GDPval-AA) but exact scores were not extractable in this pass.
- Terminal-Bench 2.1 / Tau2 / Tau3 / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no directly extracted verified public score found**.

Reasoning / knowledge:

- Announcement claims state-of-the-art/exceptional performance across knowledge work and scientific research; cites **Hebbia Finance Benchmark for senior-level reasoning: “highest score of any model”** (exact numeric not extracted).
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no directly extracted verified public score found**.

Coding:

- Strong software engineering claims in announcement (e.g. Stripe reported major migration speedups; FrontierCode highest among frontier models at medium effort per text). Exact standardized coding benchmark numerics (SWE-bench/LiveCodeBench/etc.) for this exact model not extracted.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public score found**.

Long context:

- **1,000,000-token context / 128K output** documented (Anthropic docs/AA/OpenRouter). Announcement highlights long-context focus and memory behavior (e.g. Slay the Spire memory experiments described qualitatively); no standalone retrieval benchmark numeric extracted.

Multimodal:

- **Text and image input; text output** supported. Announcement claims state-of-the-art vision/task performance (e.g. extracting numbers from scientific figures, rebuilding web app source from screenshots, vision-only Pokémon FireRed completion) — qualitative/demonstrated claims; no standardized multimodal benchmark numeric extracted.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) due to limited extractable standardized numeric benchmark tables for this exact base release.

- **Tool use: 86/100.** Strong long-horizon agentic/autonomous workflow claims, FrontierCode/agent-eval positioning, and 1M context support robust tool-using behavior; capped by limited extractable standardized tool-use numerics.
- **Reasoning: 87/100.** Mythos-class positioning with strong knowledge-work/research claims and Hebbia Finance Benchmark “highest score of any model” (exact numeric not extracted); capped by missing extractable standardized reasoning benchmark numerics.
- **Context window: 95/100.** 1,000,000-token context and 128,000-token output are clearly documented (tier-mapped as very large context); capped mainly by lack of extracted standalone long-context retrieval benchmark scores.
- **Multimodal: 84/100.** Verified text+image input and text output with strong announced vision capabilities/demos; capped below top multimodal specialists by absence of extracted standardized multimodal benchmark numerics.
- **Coding: 88/100.** FrontierCode leadership claim (medium effort) and strong real-world/agentic coding reports; capped by lack of directly extracted standardized coding benchmark numerics (e.g. SWE-bench/LiveCodeBench values).
- **Cost efficiency: 72/100.** Paid-tier pricing ($10/$50 per 1M tokens) is premium but aligned with frontier capability tier; less cost-efficient than low-cost/free alternatives.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (Tool 86, Reasoning 87, Context 95, Multimodal 84, Coding 88) rounded to nearest integer; best fit for long-horizon coding, agentic, and large-context multimodal workflows where verified access is available, with caution on limited extractable numeric benchmarks and supersession by newer Fable releases.

> Caution: Scores are provisional estimates based on verified specs and clearly attributable announcement/docs claims, not direct transcription of a full standardized benchmark table for this exact model. Recalculate if/when exact numerics become clearly extractable.

### Source comparison / conflicts

- **Specs:** Anthropic platform docs, OpenRouter, and AA align on core specs/pricing ($10/$50, 1M/128K, text+image in/text out, June 9 2026 release, Jan 2026 knowledge cutoff).
- **Benchmarks/evidence:** Announcement provides rich qualitative and comparative claims (some chart/image-based) but limited extractable exact numerics in this pass; AA shows category tracking without a visible aggregate index for this deprecated view. No direct numeric contradictions found.
- **Access/safeguards:** Announcement describes classifier fallbacks to Opus 4.8 for some topics/sessions; important deployment tradeoff but not a benchmark/spec conflict.
- **Prior Iceman files:** This pass consolidates/replaces prior mixed-state files (`Iceman.md` and `Iceman.md.excluded`) with one updated research report.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Anthropic announcement and platform docs, Artificial Analysis, and OpenRouter; compared specs/claims and noted extractability limits for chart/image-based benchmark numerics.
- Research performed (>=10 successful independent web fetch/search attempts): Anthropic Fable 5/Mythos 5 announcement, Anthropic platform model overview/docs, Anthropic all-models docs, OpenRouter model page, Artificial Analysis model page, AA/models.dev search contexts, local `meta.json` and prior report review, plus targeted HTML snippet extractions for benchmark terms/names.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 (Anthropic announcement)](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Fable 5 overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Claude Fable 5 on Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5)
  - [Claude Fable 5 on OpenRouter](https://openrouter.ai/anthropic/claude-fable-5)
  - [Claude Fable 5 / Mythos 5 system card](https://www.anthropic.com/claude-fable-5-mythos-5-system-card)
  - Local repository metadata consulted: `model/claude-fable-5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.