# Kimi K3.1 Pro — findings by Claude Opus 4.6

- Source: Moonshot AI (`moonshotai/kimi-k3.1-pro`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship frontier reasoning model, an extensively post-trained iteration of the Kimi K3 architecture with scaled reinforcement learning compute for advanced agentic and long-horizon tasks. Open-weights release announced.
- **Provider / access:** Moonshot AI API (`https://api.moonshot.cn`), OpenRouter, OpenCode Zen. Chat Completions API.
- **Release / knowledge:** 2026 (exact date not specified); knowledge cutoff not publicly disclosed
- **IDs:** `moonshotai/kimi-k3.1-pro`; Highspeed variant also available
- **Context window:** 1,048,576 tokens (1M) total — verified via Moonshot docs and independent trackers
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11):** $2.00 / $10.00 per 1M input/output tokens; cached input $0.20 per 1M
- **Architecture:** MoE, ~2.8 trillion total parameters, ~104B active parameters per token; open-weights release announced

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Moonshot eval) / **67.2%** (Artificial Analysis independent) (source: rankllms.com / Artificial Analysis)
- AutomationBench-AA: **73.3%** (source: rankllms.com)
- SWE-Marathon v1.1: **51.7%** (source: rankllms.com)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (source: rankllms.com)
- HLE (with tools): **70.0%** (source: rankllms.com)
- Artificial Analysis Intelligence Index: **55.1** (#4 globally) (source: felloai.com / medium.com)
- Kimi Code Bench 2.0: **77.1%** (source: rankllms.com)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (source: rankllms.com)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified standalone score found
- Kimi Code Bench 2.0: **77.1%** (source: rankllms.com)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window verified; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 65.7–67.2% is among the highest globally. AutomationBench 73.3% confirms strong real-world API automation. SWE-Marathon 51.7% shows solid multi-hour autonomous capability. Elite agentic tool execution.
- **Reasoning: 93/100.** GPQA Diamond 94.2% is near the top of all frontier models. HLE 70.0% with tools is outstanding. AA Intelligence Index 55.1 ranks 4th globally. Exceptional scientific and multi-step reasoning.
- **Context window: 88/100.** 1M native context window matches the largest frontier offerings. No independent long-context retrieval benchmarks found, which caps below models with verified MRCR/RULER at full length.
- **Multimodal: 65/100.** Accepts text, image, and video inputs with text output. No specific vision or video benchmark scores found. Score reflects broad multimodal input without verified benchmark evidence; no audio input support noted.
- **Coding: 88/100.** Kimi Code Bench 2.0 at 77.1% and 3.0 Long-horizon at 61.2% show strong sustained coding. Terminal-Bench performance indirectly confirms coding proficiency. Capped by lack of SWE-bench Verified / LiveCodeBench standalone scores.
- **Cost efficiency: 62/100.** $2/$10 per 1M tokens is competitive for a frontier model of this caliber — roughly half the price of Claude Opus or Muse Wonder. Cached input at $0.20 adds value for repeated contexts.
- **Overall Score: 85/100.** Mean of (92 + 93 + 88 + 65 + 88) / 5 = 85.2, rounded to 85. A top-tier frontier model with exceptional reasoning and tool use at aggressive pricing, positioned just below the absolute top due to limited multimodal benchmark evidence.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI Kimi K3.1 Pro Technical Report](https://github.io)
  - [RankLLMs Benchmark Leaderboard](https://rankllms.com)
  - [Artificial Analysis Intelligence Index](https://artificialanalysis.ai)
  - [Moonshot AI Pricing](https://kimi.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
