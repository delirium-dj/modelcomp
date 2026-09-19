# Kimi K3 — findings by Claude Opus 4.6

- Source: Moonshot AI / Kimi K3
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8-trillion-parameter MoE frontier model for long-horizon coding, complex reasoning, and agentic knowledge work. Open-weight release under Kimi K3 License.
- **Provider / access:** Moonshot AI API, OpenRouter, NVIDIA NIM. Chat Completions API.
- **Release / knowledge:** July 2026 release; knowledge cutoff not explicitly published.
- **IDs:** `moonshot/kimi-k3` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M). Verified via Moonshot docs and WhatLLM.
- **Modalities:** Text, image, video in; text out; tool calls; reasoning modes.
- **Pricing (as of 2026-09-19):** $3.00 / $15.00 per 1M tokens (cache miss); $0.30 cached input. Via Moonshot AI API.
- **Architecture:** 2.8T-parameter sparse MoE, activating 16 of 896 experts per token. Open-weight (Kimi K3 License); self-hosting requires enterprise-grade infrastructure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**agent/tool**): **88.3%** (source: nxcode.io, Moonshot benchmarks)
- AA-Briefcase: **1543 Elo** (source: Artificial Analysis; #2 behind Claude Fable 5)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: **57** (source: Artificial Analysis)
- FrontierSWE: **81.2%** (source: nxcode.io)
- ProgramBench: **77.8%** (source: nxcode.io)

Coding:

- DeepSWE: **67.5%** (source: nxcode.io, Moonshot benchmarks)
- SWE-bench Verified: reported to match Claude Opus 4.8 quality (source: Superconductor); no exact standalone number published
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 88.3% is near-frontier; AA-Briefcase Elo 1543 is second-best. Missing Tau3/GDPval/Claw-Eval prevents higher. Strong agentic profile.
- **Reasoning: 85/100.** Intelligence Index 57 is strong but below frontier leaders (60+). FrontierSWE 81.2% and ProgramBench 77.8% show solid reasoning. Missing GPQA/HLE caps score.
- **Context window: 95/100.** 1M verified. No MRCR/RULER retrieval data; assigned high but below models with verified retrieval accuracy.
- **Multimodal: 80/100.** Text + image + video in; text out. Broad input but no audio. Video input = 75–90 range; placed at 80 given typical MoE limitations.
- **Coding: 85/100.** DeepSWE 67.5% is strong (ref: 74%+ for frontier, 67.5% is upper-mid). Reported to match Opus 4.8 on SWE-bench. Missing SciCode/LiveCodeBench.
- **Cost efficiency: 60/100.** $3.00/$15.00 is mid-premium pricing. Per methodology: $3/$15 = ~60. Cache hits at $0.30 help but base rate is moderate.
- **Overall Score: 87/100.** Mean of (90 + 85 + 95 + 80 + 85) / 5 = 87.0. Strong frontier-class open-weight model; pricing is its main drawback.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (nxcode.io, Artificial Analysis, Superconductor, Moonshot docs, WhatLLM, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
