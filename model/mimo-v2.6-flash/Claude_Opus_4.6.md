# MiMo v2.6 Flash — findings by Claude Opus 4.6

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's cost-efficient omnimodal reasoning model, part of the MiMo-V2.6 series released September 22, 2026. A 309B-parameter sparse MoE (15B active) optimized for high-frequency agentic calls and professional workflows.
- **Provider / access:** Xiaomi MiMo API (mi.com), available via third-party providers (novita.ai, OpenRouter).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not publicly confirmed.
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,000,000 tokens total; max output 128,000 tokens (verified via mi.com).
- **Modalities:** Text + image + video + audio in (native omnimodal); text out; deep thinking; tool calling; JSON mode; streaming; web search; prompt caching.
- **Pricing (as of 2026-10-03):** $0.14 / $0.28 per 1M tokens (input cache miss / output); $0.0028 cache hit. Extremely cost-efficient.
- **Architecture:** Sparse Mixture-of-Experts (MoE); 309B total parameters, 15B active per token. Open-weights (with technical report and RL resources provided).

### Raw benchmarks found

Agent / tool use:

- Toolathlon-verified: **73.6%** (xiaomi.com).
- Automation Bench v1.0.6: **52.3%** (xiaomi.com).
- Agents' Last Exam: **27.6%** (xiaomi.com).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Terminal-Bench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: **~38** (independent evaluation).
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- DeepSWE v1.1: **67.9%** (xiaomi.com; trails Pro variant at 71.9%).
- MiMo Code Bench: **61.2%** (xiaomi.com, in-house benchmark).
- ProgramBench: **26.0%** (xiaomi.com).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- 1,000,000-token window confirmed with hybrid attention mechanisms. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 82/100.** Toolathlon-verified 73.6% is strong; Automation Bench 52.3% is moderate; Agents' Last Exam 27.6% shows room for improvement. Capped by missing Terminal-Bench and Tau/Claw data.
- **Reasoning: 80/100.** AA Intelligence Index ~38 is mid-tier; positioned as cost-efficient rather than reasoning-first. Strong RL-scaled training but gap to frontier flagships. Capped by missing GPQA/HLE data.
- **Context window: 87/100.** 1M-token window with hybrid attention and 128K output matches top tier. No published retrieval benchmarks. Capped by unverified long-context reliability data.
- **Multimodal: 85/100.** Native omnimodal: text, image, video, and audio input. Broader input coverage than vision-only competitors. Text-only output. Capped by no generative multimodal output.
- **Coding: 84/100.** DeepSWE v1.1 at 67.9% is strong for an efficiency-focused model; MiMo Code Bench 61.2% shows solid in-house performance. ProgramBench 26.0% is low. Capped by missing SWE-bench/LiveCodeBench data and lower ProgramBench.
- **Cost efficiency: 95/100.** $0.14/$0.28 with $0.0028 cache hits is among the cheapest frontier-class models available. Exceptional value for production workloads.
- **Overall Score: 84/100.** Mean of (82 + 80 + 87 + 85 + 84) / 5 = 83.6, rounded to 84. Outstanding cost-efficiency with solid performance across modalities.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Xiaomi mi.com, novita.ai, Artificial Analysis, lumichats.com, cometapi.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
