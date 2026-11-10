# DeepSeek V4.1 Flash 1017 — findings by Glyph Cluster

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash-1017`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017 (Max)
- **Short description:** Open-weights DeepSeek reasoning model (MIT license) released October 2026, a large sparse MoE optimized for high throughput/efficiency with strong aggregate intelligence for its size class and multimodal text/image input.
- **Provider / access:** Tracked by Artificial Analysis as DeepSeek V4.1 Flash 1017 (Max); OpenRouter lists `deepseek/deepseek-v4.1-flash-1017` across many providers (DeepSeek and third-party hosts). API modes vary by provider (Chat Completions-style on OpenRouter).
- **Release / knowledge:** Released 2026-10-17 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `deepseek/deepseek-v4.1-flash-1017` (OpenRouter/AA), open weights `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face, per AA).
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA "Max"/reasoning configuration). Tool-calling/structured output support indicated on OpenRouter; exact capability matrix varies by provider.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $0.30 / 1M input, $1.20 / 1M output, 98% cache discount. OpenRouter provider pricing varies widely by route/provider (see model page); paid/served model with open weights.
- **Architecture:** Open-weights MoE, 552B total / 16B active parameters, MIT license (Artificial Analysis).

### Raw benchmarks found

> Numbers below are for the exact model/ID DeepSeek V4.1 Flash 1017 (Max) as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations such as Terminal-Bench 4.0/AA-Briefcase in index composition): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **33** (v5.0.1 aggregate; AA snapshot #2/26 in comparable open-weight class, median 23) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Context window reported as **1M tokens** (Artificial Analysis). No verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) score found for this exact model.

Performance/efficiency metadata (AA snapshot): TTFA **48.11s**, output speed **143 tok/s**, time per Intelligence Index task **16.2 min**, cost per Intelligence Index task **$0.60**, output tokens from Intelligence Index **174M** (very verbose).

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 60/100.** Strong aggregate AA Intelligence Index (33, #2/26 in class) suggests solid agentic/coding/reasoning blend in AA's composite (which includes agentic evaluations), but no verified public scores found for specific tool-use suites (Terminal-Bench/Tau/GDPval-AA/MCP) for this exact ID; capped by lack of direct per-suite evidence.
- **Reasoning: 62/100.** AA Intelligence Index 33 is well above comparable-model median (23), indicating strong aggregate reasoning/knowledge performance; absence of GPQA/HLE/LCR/CritPt specifics limits precise calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 55/100.** Supports text and image input with text output per AA specs; no verified scores for vision benchmarks found, so capability is credited modestly.
- **Coding: 62/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; high AA Intelligence Index (including coding/terminal components in aggregate) supports above-average coding ability but evidence is indirect.
- **Cost efficiency: 75/100.** Competitive pricing around $0.30/$1.20 per 1M tokens with high cache discount and low AA cost-per-task ($0.60) for its performance class; strong value though not free.
- **Overall Score: 66/100.** Mean of five non-cost dims `(60+62+90+55+62)/5 = 65.8`, rounded half-up to 66. Best fit as a cost-effective, large-context open-weights reasoning model with strong aggregate intelligence evidence but limited public per-benchmark disclosure.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — DeepSeek V4.1 Flash 1017 (Max)](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017)
  - [OpenRouter — deepseek/deepseek-v4.1-flash-1017](https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017)
  - [Hugging Face — deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
