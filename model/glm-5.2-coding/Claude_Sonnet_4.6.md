# GLM 5.2 Coding — findings by Claude Sonnet 4.6

- Source: Z.ai (`opencode/glm-5.2-coding`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.ai's coding-focused GLM-5.2 MoE (MIT, 1M context) with near-perfect tool orchestration; tau2-bench 99.1%, SWE-bench 82.8% (Vals), TB 2.1 81.0% (vendor)/67.8% (Vals). Note: no separate "GLM-5.2-Coding" SKU is published on Z.ai/Zen/OpenRouter.
- **Provider / access:** Z.ai / OpenCode (`opencode/glm-5.2-coding`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/glm-5.2-coding` (no Free ID on Zen); MIT open weights
- **Context window:** 1,000,000 tokens
- **Modalities:** Text in; text out; tool calls
- **Pricing (as of 2026-10-21):** $1.40/$4.40 per 1M; $0.26 cached input
- **Architecture:** Sparse MoE — MIT open weights; 1M context

### Raw benchmarks found

Agent / tool use:

- Tau2-bench (tool orchestration): **99.1%** (Artificial Analysis — near-perfect)
- Terminal-Bench 2.1: **81.0%** (vendor) / **67.8%** (Vals.ai — harness variance)

Reasoning / knowledge:

- No GPQA or HLE score found

Coding:

- SWE-bench Verified: **82.8%** (Vals.ai leaderboard)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau2-bench 99.1% is near-perfect tool orchestration — one of the highest scores on this benchmark.
- **Reasoning: 78/100.** MIT MoE with coding focus; no GPQA published; general breadth narrower than flagship GLM-5.3.
- **Context window: 92/100.** 1,000,000-token context → tier 1M = 92.
- **Multimodal: 15/100.** Text in; text out only — no image, audio, or video.
- **Coding: 84/100.** SWE-bench 82.8% and Terminal-Bench 81.0% (vendor) are strong; Vals harness shows 67.8% TB which introduces uncertainty.
- **Cost efficiency: 85/100.** $1.40/$4.40 per 1M; MIT self-host available.
- **Overall Score: 72/100.** (92+78+92+15+84)/5 = 72.2 → 72. Best fit: tool-heavy orchestration pipelines where tau2-bench-class reliability matters; text-only input.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Z.ai official, Artificial Analysis, Vals.ai, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
