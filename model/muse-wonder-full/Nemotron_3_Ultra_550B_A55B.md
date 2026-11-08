# Muse Wonder Full — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta AI (`meta/muse-wonder-full-1.0`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta AI's most advanced frontier model (Muse Wonder generation), built for long-running professional agents and ultra-long-horizon software engineering with 1M token context window.
- **Provider / access:** Meta AI Developer Platform (`meta/muse-wonder-full-1.0`), subscription-only via Muse Code Power/Maximum plans; no free tier.
- **Release / knowledge:** 2026 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `meta/muse-wonder-full-1.0`, `muse-wonder-full` (Meta AI subscription API).
- **Context window:** 1,048,576 tokens total (1M context).
- **Modalities:** Text, images, audio, video input; text output.
- **Pricing (as of 2026-11-08):** Subscription-based via Muse Code plans (Power/Maximum tiers); no per-token pricing published; no free tier available.
- **Architecture:** Large-scale Mixture-of-Experts (MoE) transformer with advanced long-horizon reasoning and agentic capabilities; ~500B+ parameters estimated.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **68.4%** (professional agent benchmark)
- Terminal-Bench 4.0: **62.1%** (autonomous tool use)
- AgentBench-Lite: **73.8%** (long-horizon agentic tasks)

Reasoning / knowledge:

- GPQA Diamond: **71.2%**
- HLE (Humanity's Last Exam): **38.7%**
- Artificial Analysis Intelligence Index: **56** (#3 global rank)
- MMLU-Pro: **84.3%**

Coding:

- SWE-bench Verified: **68.4%**
- LiveCodeBench v5: **64.9%**
- FrontierSWE 2: **59.1%**
- Vibe Code Bench: **72.3%**

Long context / vision:

- 1,048,576 token context window with >90% recall on 1M token needle-in-haystack tests.
- Native multimodal input processing for images, audio, and video.

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong autonomous agent performance with 62.1% on Terminal-Bench 4.0 and 73.8% on AgentBench-Lite for long-horizon tasks.
- **Reasoning: 89/100.** Solid reasoning with 71.2% on GPQA Diamond and 56 on AA Intelligence Index (#3 rank); capped by 38.7% on HLE.
- **Context window: 96/100.** Full 1M token context with >90% recall on needle-in-haystack at scale.
- **Multimodal: 91/100.** Comprehensive multimodal input (text, image, audio, video) with strong cross-modal reasoning.
- **Coding: 93/100.** Excellent software engineering with 68.4% on SWE-bench Verified and 64.9% on LiveCodeBench v5.
- **Cost efficiency: 54/100.** Subscription-only pricing with no free tier; no per-token rates published makes value assessment difficult.
- **Overall Score: 92/100.** Arithmetic mean of five quality dimensions: (92 + 89 + 96 + 91 + 93) / 5 = 461 / 5 = 92.2 → 92. Meta's flagship professional agent model with elite coding and long-context capabilities, limited by subscription-only access.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Meta AI developer documentation, Artificial Analysis evaluations, SWE-bench leaderboards, and community benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI Developer Platform — Muse Wonder](https://dev.meta.ai/models/muse-wonder)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
  - [SWE-bench Verified Leaderboard](https://swebench.com)
  - [LiveCodeBench — Coding Benchmarks](https://livecodebench.github.io)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---