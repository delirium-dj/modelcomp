# Claude Haiku 4.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/claude-haiku-4-5 (Anthropic Claude Haiku 4.5 launch page), Vals AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's proprietary non-reasoning model; 200K context / text+in → text out; sibling: Claude Haiku 4.5 Thinking.
- **Provider / access:** Anthropic API (`claude-haiku-4-5`); proprietary (weights not public).
- **Release / knowledge:** Released 2025 per Anthropic; knowledge cutoff not stated.
- **IDs:** `claude-haiku-4-5` (Anthropic API / OpenRouter). No Free ID confirmed.
- **Context window:** 200K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- JobBench: **16.0%** (JobBench paper)
- Terminal-Bench 2.1 (Vals): **43.8%** (Vals AI)
- MazeBench: **0%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **72.2%** (Vals AI)
- MMLU-Pro: **78.7%** (Vals AI)
- No GPQA, HLE, MMLU-Redux, C-Eval, or other knowledge benchmarks found beyond Vals AI.

Coding:

- SWE-bench Verified: **73.3%** (Anthropic Claude Haiku 4.5 launch page)
- VulcanBench v3: **76.2%** (VulcanBench v3 July 2026 expanded report)
- LiveCodeBench v6: **41.2%** (Vals AI)
- SWE-bench (Vals): **66.6%** (Vals AI)

Multimodal & grounded:

- Design Arena Website: **1124** (OpenRouter)

Long context:

- Declared 200K context (benchlm.ai); no public needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 10 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** Terminal-Bench 2.1 (43.8%); capped by weak JobBench (16.0%), MazeBench (0%), extremely thin coverage — only 3 agentic benchmarks found.
- **Reasoning: 60/100.** GPQA Diamond 72.2%, MMLU-Pro 78.7%; capped by zero HLE, zero CritPt, zero Intelligence Index data found.
- **Context window: 75/100.** Verified 200K tokens (benchlm.ai); capped because context below 1M frontier and no public needle-recall score found.
- **Multimodal: 50/100.** Design Arena Website 1124; capped by text-only output assumption and thin multimodal coverage.
- **Coding: 60/100.** SWE-bench Verified (73.3%), VulcanBench v3 (76.2%), SWE-bench Vals (66.6%), LiveCodeBench v6 (41.2%); strong verified coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 56/100.** Half-up mean of (35 + 60 + 75 + 50 + 60) / 5 = 56.0 → 56. Best-fit recommendation: strong verified coding at 200K context; verify on agentic and HLE-class tasks given thin coverage there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Claude Haiku 4.5 model page + Anthropic Claude Haiku 4.5 launch page + Vals AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (10 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
