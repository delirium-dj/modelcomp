# Kimi K3.1 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`opencode/kimi-k3.1-pro`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's post-trained successor to Kimi K3 for long-horizon coding, agentic work, and visual/document reasoning with 1M context window and competitive pricing ($2/$10 per M).
- **Provider / access:** Kimi Platform (`kimi-k3.1-pro`), OpenCode Zen (`opencode/kimi-k3.1-pro`), highspeed variant available at $4/$20 per M.
- **Release / knowledge:** 2026 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `opencode/kimi-k3.1-pro`, `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed` (Moonshot AI platform).
- **Context window:** 1,048,576 tokens combined (max output 131,072 default, configurable higher).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-08):** Standard: $2.00 per 1M input, $10.00 per 1M output, $0.20 per 1M cache hits; Highspeed: $4.00 input / $20.00 output per M (2-3x speed).
- **Architecture:** Post-trained MoE transformer optimized for long-context coding and agentic reasoning; ~300B+ parameters estimated.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **71.4%** (autonomous terminal agent tasks)
- SWE-bench Verified: **65.8%** (repository-scale software engineering)
- AgentBench: **76.2%** (long-horizon agentic workflows)

Reasoning / knowledge:

- GPQA Diamond: **74.6%**
- MMLU-Pro: **86.1%**
- Artificial Analysis Intelligence Index: **54** (#5 global rank)
- LongBench v2: **88.3%** (long-context reasoning)

Coding:

- SWE-bench Verified: **65.8%**
- LiveCodeBench v5: **68.7%**
- HumanEval+: **92.4%**
- FrontierSWE 2: **58.3%**

Long context / vision:

- 1,048,576 token context with 88.3% on LongBench v2 long-context reasoning.
- Image/document input for visual reasoning and code analysis.

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong agent performance with 71.4% on Terminal-Bench 4.0 and 76.2% on AgentBench for long-horizon tasks.
- **Reasoning: 90/100.** Solid reasoning with 74.6% on GPQA Diamond and #5 AA Intelligence Index rank (score 54); MMLU-Pro at 86.1%.
- **Context window: 96/100.** Full 1M token context with 88.3% on LongBench v2 at scale.
- **Multimodal: 86/100.** Text and image input with document/visual reasoning; no audio/video support.
- **Coding: 92/100.** Excellent coding with 65.8% on SWE-bench Verified, 68.7% on LiveCodeBench v5, and 92.4% on HumanEval+.
- **Cost efficiency: 77/100.** Competitive $2/$10 standard pricing with 90% cache discount ($0.20/M); highspeed tier at $4/$20 for latency-sensitive workloads.
- **Overall Score: 91/100.** Arithmetic mean of five quality dimensions: (93 + 90 + 96 + 86 + 92) / 5 = 457 / 5 = 91.4 → 91. Moonshot AI's polished long-context coding agent with strong value proposition.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Moonshot AI platform documentation, Kimi K3.1 Pro blog announcements, SWE-bench/LiveCodeBench leaderboards, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi AI Blog — Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Kimi Platform — Pricing](https://platform.kimi.ai/docs/pricing/chat)
  - [SWE-bench Verified Leaderboard](https://swebench.com)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---