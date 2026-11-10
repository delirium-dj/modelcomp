# GPT-6.1 Sol — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-6.1-sol`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (GPT-6.1 Sol (Max) variant evaluated on Artificial Analysis)
- **Short description:** OpenAI's proprietary GPT-6.1 Sol reasoning model, positioned as a high-intelligence multimodal model for agentic, coding, and knowledge-work tasks. Public vendor model-card details are limited in accessible sources; third-party evaluation coverage is available.
- **Provider / access:** OpenAI API and hosted providers (e.g. Azure, Amazon Bedrock, OpenAI direct) via OpenRouter listing as `openai/gpt-6.1-sol`. EU in-region routing available via Azure endpoints per OpenRouter.
- **Release / knowledge:** Released September 2026 (Artificial Analysis: 2026-09-29). Knowledge cutoff not found in verified public sources reviewed.
- **IDs:** `openai/gpt-6.1-sol` (OpenRouter/provider routing). No separate public OpenAI docs page found at time of research.
- **Context window:** 1,000,000 tokens (1M) per Artificial Analysis.
- **Modalities:** Text and image input; text output. Reasoning model (per AA/OpenRouter capabilities). Tool/function calling supported per OpenRouter API fields.
- **Pricing (as of 2026-11-10):** ~$2.00 / 1M input and ~$10.00 / 1M output tokens (standard tier on Artificial Analysis/OpenRouter listings; provider- and variant-specific pricing differs, with cache/input/output/request surcharges possible — see provider pages).
- **Architecture:** Proprietary (parameter count and internal architecture not publicly disclosed).

### Raw benchmarks found

> Primary accessible verified source: Artificial Analysis model page/comparison data. A dedicated OpenAI model card/blog page for GPT-6.1 Sol was not found at accessible URLs during research; granular per-benchmark breakdowns beyond AA aggregates were not publicly available from fetched sources.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **55** (#12/734 overall in AA listing context shown; #12/74 in comparable price-tier class on AA page). Composite includes AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1.
- AA-Briefcase / AutomationBench-AA / GDPval-AA / Toolathlon / MCP-Atlas / Terminal-Bench agentic components: included in AA aggregate; no verified standalone public scores found for this exact model.

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / Omniscience Accuracy / Hallucination Rate: included in AA Intelligence Index aggregate where applicable; no verified standalone public scores found for this exact model.

Coding:

- Terminal-Bench 4.0 / FrontierCode 2.0 / coding components: included in AA Intelligence Index aggregate; no verified standalone public scores found for this exact model.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found.

Long context:

- 1M-token context window reported by Artificial Analysis. No verified long-context retrieval benchmark (MRCR/RULER/GraphWalks) scores found.

Efficiency/performance signals (AA):

- Cost per Intelligence Index task: **$1.27** (AA).
- Time per Intelligence Index task: **20.1 minutes** (AA; slower than class median).
- Output tokens from Intelligence Index: **63.7M** (fairly concise vs class median per AA).

### Normalized scores (1–100)

> Scores are normalized interpretations from available third-party evidence (Artificial Analysis). Limited granular public benchmarks cap confidence; Cost excluded from Overall.

- **Tool use: 90/100.** AA Intelligence Index 55 indicates strong agentic/task performance in AA's composite (which includes agentic/terminal/briefcase/automation evaluations). Capped by lack of publicly verifiable standalone tool-use benchmark breakdowns.
- **Reasoning: 90/100.** High AA Intelligence Index placement suggests strong reasoning/knowledge performance across AA composite domains. Capped by absence of disclosed standalone scores (e.g. GPQA/HLE/CritPt) for this exact model.
- **Context window: 95/100.** 1M-token context window per AA supports very large inputs. Capped because no verified long-context retrieval quality benchmarks were found.
- **Multimodal: 75/100.** Supports text and image input with text output (per AA), enabling vision-grounded tasks. Capped by no verified audio/video modalities or generative multimodal outputs in available specs.
- **Coding: 90/100.** AA composite includes terminal/coding evaluations and overall index is strong for tier, indicating solid coding capability. Capped by lack of verified standalone coding benchmark results (SWE-bench, LiveCodeBench, etc.).
- **Cost efficiency: 78/100.** ~$2/$10 per 1M tokens with moderate AA task cost ($1.27/task) is reasonably priced for a high-intelligence proprietary model in its class, though not low-cost.
- **Overall Score: 88/100.** Mean of non-cost dimensions (90 + 90 + 95 + 75 + 90) / 5 = 88.0. Best fit for high-capability general agentic and coding work where 1M context and strong composite intelligence matter, with pricing typical of premium frontier APIs.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (Artificial Analysis, OpenRouter model/API page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [OpenRouter — openai/gpt-6.1-sol](https://openrouter.ai/openai/gpt-6.1-sol)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
