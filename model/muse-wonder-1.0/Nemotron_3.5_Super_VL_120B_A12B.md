# Muse Wonder 1.0 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Meta (`meta/muse-wonder-1.0`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's agentic and coding model for complex software engineering, multi-step tool loops, and long-context reasoning; proprietary third-party model available via Cloudflare Workers AI.
- **Provider / access:** Cloudflare Workers AI `meta/muse-wonder-1.0` (Responses API, parallel tool calls supported); also served by Meta.
- **Release / knowledge:** Released October 2026 (Artificial Analysis); exact release date not disclosed by Meta.
- **IDs:** `meta/muse-wonder-1.0` (Cloudflare provider ID); no Free ID confirmed on Zen.
- **Context window:** 1M tokens (Artificial Analysis); Cloudflare does not publish a context limit.
- **Modalities:** Text, image, speech, and video input; text output (Artificial Analysis); Cloudflare describes it as text generation via Responses API. Reasoning model (extended thinking / chain-of-thought).
- **Pricing (as of 2026-10-27):** Cloudflare lists Input $4.00/1M, Cached input $0.20/1M, Output $20.00/1M. Artificial Analysis reports "No publicly available API" and no published cost — conflict with Cloudflare's listed pricing.
- **Architecture:** Proprietary; parameter count not disclosed by Meta or Artificial Analysis.

### Raw benchmarks found

Agent / tool use:
- Coarena computer-use: **Rank 4 of 20**, win rate 41.4% (3rd of 20), rating 1069 ± 26, agent-reported completion 67.5%, median run 49.8s (3rd fastest of 20), cost $1.05/completion (14th lowest of 20) — best placed in site testing (2nd of 20) and coding (Coarena, independent)
- Cloudflare: `parallel_tool_calls: true`, Responses API format (provider capability, not a benchmark score)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **56** (#4 / 704; median 13) — composite across AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1 (Artificial Analysis, independent)
- Verbosity: #156 / 226, 140M output tokens on Intelligence Index (somewhat verbose vs median 88M) (Artificial Analysis)
- No verified public score found for GPQA Diamond standalone, HLE standalone, MMLU-ProX, LCR/MLCR standalone, CritPt standalone, or omniscience accuracy.

Coding:
- Coarena: best placed in coding use case (no numeric coding benchmark score)
- No verified public score found for SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode standalone, or DeepSWE.

Long context:
- Declared 1M context window (Artificial Analysis); no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported at any window length.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Coarena shows strong agentic computer-use performance (4th/20, 67.5% completion, 2nd in site testing) and Cloudflare confirms parallel tool calls via Responses API; capped by no tau2/tau3/BrowseComp verification.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index 56 (#4/704) is a composite reasoning/knowledge score; confirms reasoning capability; capped by no standalone GPQA/HLE/LCR verification.
- **Context window: 90/100.** 1M tokens declared (Artificial Analysis); no measured long-context retrieval score at the full window.
- **Multimodal: 65/100.** Text, image, speech, and video input; text output (Artificial Analysis); no multimodal benchmark scores (V*, MathVision, CharXiv, etc.) verified.
- **Coding: 60/100.** Positioned as an agentic/coding model; Coarena coding use-case strength; no SWE-bench/LiveCodeBench verification.
- **Cost efficiency: 35/100.** Cloudflare pricing $4.00 input / $20.00 output per 1M is high; Artificial Analysis reports no publicly available API (conflict); Coarena cost per completion $1.05.
- **Overall Score: 69/100.** Half-up mean of (70 + 60 + 90 + 65 + 60) / 5 = 69.0 → 69. Strong agentic/coding model with 1M context; high price and limited independent benchmark verification cap the score.

### Conflicts noted

- **Pricing:** Cloudflare lists Input $4.00 / Cached $0.20 / Output $20.00 per 1M tokens; Artificial Analysis states "No publicly available API" with no published cost. These cannot both be current — Cloudflare's listed rates may not reflect actual availability.
- **Parameter count:** Not disclosed by Meta, Cloudflare, or Artificial Analysis.
- **Context window:** Artificial Analysis reports 1M; Cloudflare does not publish a context limit (no direct conflict, just missing).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-27
- Method: public internet research (Cloudflare AI docs / Meta provider page; Artificial Analysis independent benchmark; Coarena independent computer-use benchmark); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
