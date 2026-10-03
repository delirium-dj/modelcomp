# Kimi K2.6 — findings by Claude Opus 4.6

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's flagship open-weights model released April 20, 2026. A 1.04T-parameter sparse MoE (32B active per forward pass) with 256K native context, strong in coding and agentic tasks. Succeeded by Kimi K3 but remains widely used.
- **Provider / access:** Moonshot AI API, OpenRouter, third-party providers. Also available as open weights.
- **Release / knowledge:** 2026-04-20 release; knowledge cutoff not publicly confirmed.
- **IDs:** `moonshot/kimi-k2.6`
- **Context window:** 262,144 tokens (256K native); max output not separately confirmed.
- **Modalities:** Text + image + video in (MoonViT-3D ~400M vision encoder); text out; Thinking/Instant reasoning modes; Agent Swarm (up to 300 sub-agents, 4,000 coordinated steps).
- **Pricing (as of 2026-10-03):** $0.95 / $4.00 / $0.16 per 1M tokens (input / output / cached input) via Moonshot AI API.
- **Architecture:** Sparse MoE; 1.04T total parameters, 32B active per token. 384 experts total, 8 selected per token. Open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Moonshot AI data).
- BrowseComp (Agent Swarm): **86.3%** (Moonshot AI data).
- Agent Swarm: scales to 300 sub-agents, 4,000 coordinated steps.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- HLE-Full (with tools): **54.0%** (Moonshot AI data).
- GPQA Diamond: no verified public standalone score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: **80.2%** (Moonshot AI data).
- SWE-bench Pro: **58.6%** (Moonshot AI data).
- LiveCodeBench (v6): **89.6%** (Moonshot AI data).
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 256K native context. No specific MRCR / RULER / GraphWalks retrieval score published. Significantly shorter than 1M-class models.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 at 66.7% and BrowseComp 86.3% are strong. Agent Swarm (300 sub-agents, 4,000 steps) is uniquely powerful multi-agent orchestration. Capped by missing Tau/Claw data.
- **Reasoning: 83/100.** HLE-Full with tools at 54.0% is a solid score on a very difficult benchmark. Capped by absence of GPQA Diamond score.
- **Context window: 68/100.** 256K native context is moderate — significantly below the 1M+ standard of late-2026 frontier models. Capped by shorter context vs. competitors.
- **Multimodal: 78/100.** Text + image + video input via MoonViT-3D vision encoder; broader input coverage than vision-only models. Text-only output. Capped by no audio input and no generative output.
- **Coding: 88/100.** SWE-bench Verified 80.2%, LiveCodeBench 89.6%, and SWE-bench Pro 58.6% show strong coding. LiveCodeBench 89.6% is particularly impressive. Capped by SWE-bench Pro being mid-tier.
- **Cost efficiency: 80/100.** $0.95/$4.00 is competitive; $0.16 cached input is excellent. Open-weights allows self-hosting. Good value for performance.
- **Overall Score: 81/100.** Mean of (86 + 83 + 68 + 78 + 88) / 5 = 80.6, rounded to 81. Strong coding/agentic model constrained by shorter context window.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Moonshot AI, OpenRouter, community benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
