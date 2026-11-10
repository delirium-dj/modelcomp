# DeepSeek V4 Pro 0813 — findings by Glyph Cluster

- Source: DeepSeek (`deepseek/deepseek-v4-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro 0813 (Max)
- **Short description:** Open-weights DeepSeek reasoning model (MIT license) released August 2026, a very large sparse MoE aimed at high-end reasoning with 1M-token context but higher latency/cost than Flash variants.
- **Provider / access:** Tracked by Artificial Analysis as DeepSeek V4 Pro 0813 (Max); OpenRouter lists `deepseek/deepseek-v4-pro` across multiple providers. API modes vary by provider (Chat Completions-style on OpenRouter).
- **Release / knowledge:** Released 2026-08-13 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `deepseek/deepseek-v4-pro` (OpenRouter/AA), open weights `deepseek-ai/DeepSeek-V4-Pro-0813` (Hugging Face, per AA).
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text input; text output; reasoning supported (AA "Max"/reasoning configuration). Tool-calling/structured output support indicated on OpenRouter; exact capability matrix varies by provider.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $1.32 / 1M input, $3.96 / 1M output, 97% cache discount. OpenRouter provider pricing varies by route/provider (see model page); paid/served model with open weights.
- **Architecture:** Open-weights MoE, 1.6T total / 49B active parameters, MIT license (Artificial Analysis).

### Raw benchmarks found

> Numbers below are for the exact model/ID DeepSeek V4 Pro 0813 (Max) / `deepseek-v4-pro` as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23** (v5.0.1 aggregate; AA snapshot below average among comparable open-weight models, median 23) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **66.66s**, output speed **68 tok/s**, time per Intelligence Index task **24.3 min**, cost per Intelligence Index task **$1.77**, output tokens from Intelligence Index **119M**.

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 40/100.** Reasoning-capable model in AA's agentic evaluation context, but AA Intelligence Index is middling (23) and no verified public scores found for specific tool-use suites (Terminal-Bench/Tau/GDPval-AA/MCP) for this exact ID; capped by weak/indirect evidence.
- **Reasoning: 42/100.** AA Intelligence Index 23 places it around the comparable-model median in aggregate; absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 15/100.** Text input/output only per AA specs; no verified image/audio/video support.
- **Coding: 42/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; AA Intelligence Index suggests middling aggregate coding/agentic performance but evidence is indirect.
- **Cost efficiency: 30/100.** Expensive pricing around $1.32/$3.96 per 1M tokens with high AA cost-per-task ($1.77) and slow performance; poor value relative to peers in AA snapshot.
- **Overall Score: 46/100.** Mean of five non-cost dims `(40+42+90+15+42)/5 = 45.8`, rounded half-up to 46. Best fit as a large-context, text-only open-weights reasoning model with middling aggregate evidence and relatively high latency/cost.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — DeepSeek V4 Pro 0813 (Max)](https://artificialanalysis.ai/models/deepseek-v4-pro)
  - [OpenRouter — deepseek/deepseek-v4-pro](https://openrouter.ai/deepseek/deepseek-v4-pro)
  - [Hugging Face — deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
