# MiniMax M3.1 Flash — findings by Mercury 3

- Source: MiniMax (M3.1 Flash)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash
- **Short description:** MiniMax's next-generation Flash model (released 2026-10-19), the efficient tier successor to M3 for agent tasks, coding, computer use, and cybersecurity. Previously tested anonymously as "Space Bunny" (200T+ tokens). Half M3's per-token price at any context length, ~3x faster claimed.
- **Provider / access:** MiniMax API (`MiniMax-M3.1-Flash`, OpenAI- and Anthropic-compatible), M Plan subscription, MiniMax Code; OpenRouter (incl. free variant). Weights released 2026-10-23 under the MiniMax Community licence (attribution; prior written authorization for products >$20M yearly revenue).
- **Release / knowledge:** Full release 2026-10-19 (preview in MiniMax Code since 2026-09-27 as M3.1-Flash-Preview); knowledge cutoff not published.
- **IDs:** `minimax/MiniMax-M3.1-Flash`; HF `MiniMaxAI/MiniMax-M3.1-Flash`.
- **Context window:** 1,000,000 tokens (flat pricing at any length).
- **Modalities:** text + image + video input; text output; reasoning always on (low/medium/high/xhigh/max; default max; disabling thinking returns HTTP 400); tool use.
- **Pricing (as of 2026-10):** $0.15 in / $0.60 out per 1M, cached $0.015 — flat at any length; ~70% lower total agent-task cost (vendor claim).
- **Architecture:** MoE 428B total / ~23B active with sparse attention + native vision encoder.

### Raw benchmarks found

Agent / tool use:

- Automation-Bench v1.0.6: **62.8%** (MiniMax table; leads all listed rivals incl. DeepSeek V4.1 Flash 1017 60.5, GPT-5.6 Sol 45.8)
- BankerToolBench: **76.2%** (ties Claude Opus 5)
- LOCA-Bench 256K: **60.3%** (edges GPT-5.6 Sol 60.0)
- OSWorld 2.0: **61.7%** (vs Opus 5 70.6, GPT-5.6 Sol 65.7) — binary vs partial-credit metric not specified
- Agents' Last Exam: **29.6%** (official leaderboard, Claude Code harness; 27% with Codex)
- CyberGym: **82.2%** (vs GPT-5.6 Sol 83.6)

Reasoning / knowledge:

- AA Intelligence Index (independent, launch day): **43** (13 points above M3; 2 below DeepSeek V4.1 Flash 1017)
- HLE (no tools, text-only): **43.4%** (vs Opus 5 55.6%)
- VentureBeat/AA: hallucination rate ~93% on AA-Omniscience (56% correct; nearly always wrong when unsure) — a significant factual-recall flag

Coding:

- DeepSWE v1.1: **73.7%** (vs DeepSeek V4.1 Flash 1017 77.0, Opus 5 74.0)
- Terminal-Bench 4.0: **38.1%** (vs Opus 5 51.8, DeepSeek 42.3)

Long context:

- 1M verified; LOCA-Bench 256K 60.3%

Multimodal:

- Text/image/video in, text out; video input for screen-record review

Speed/efficiency (AA): output 122.8 tok/s (vs vendor claim 170+/200+); TTFT 1.12s; cost/task $0.22; verbosity 180M output tokens vs 99M median

### Normalized scores (1–100)

- **Tool use: 86/100.** Automation-Bench 62.8% (leads table) and BankerToolBench tie with Opus 5 — excellent business-workflow agent results; OSWorld 61.7% trails frontier computer-use leaders.
- **Reasoning: 78/100.** AA Index 43 is solid for the price; HLE no-tools 43.4%; the ~93% omniscience hallucination rate is a major cap.
- **Context window: 92/100.** 1M flat-priced verified; wiring LOCA 256K 60.3%.
- **Multimodal: 80/100.** Text/image/video input with text output; native vision encoder.
- **Coding: 84/100.** DeepSWE 73.7% middle-frontier; Terminal-Bench 4.0 38.1% trails the best.
- **Cost efficiency: 88/100.** $0.15/$0.60 flat at any length with $0.015 cache — among the best value in the agent tier; still closed API until weights/license confirm.
- **Overall Score: 84/100.** Mean of the five non-cost dims (86+78+92+80+84)/5 = 84.0. Best-fit: the cheapest strong business-workflow agent model of late 2026; avoid for un-tooled factual lookups given the hallucination flag.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax: M3.1 Flash launch post](https://www.minimax.io/blog/minimax-m31f)
  - [MiniMax API docs: pricing](https://platform.minimax.io/docs/guides/pricing)
  - [MiniMax API docs: text generation](https://platform.minimax.io/docs/guides/text-generation)
  - [Hugging Face: MiniMax-M3.1-Flash (weights + community license)](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)
  - [Artificial Analysis: MiniMax-M3.1-Flash](https://artificialanalysis.ai/models/minimax-m3-1-flash)
  - [Aighten: M3.1 Flash specs/pricing/benchmarks (incl. independent AA + hallucination findings)](https://www.aighten.com/en/blog/minimax-m3-1-flash-specs-pricing-benchmarks)
  - [Digital Applied: M3.1 Flash price/benchmarks/where to use](https://www.digitalapplied.com/blog/minimax-m3-1-flash-price-benchmarks-release)
  - [VentureBeat: M3.1 Flash vs DeepSeek/Opus 5 (hallucination report)](https://venturebeat.com/technology/minimaxs-new-m3-1-flash-beats-deepseek-and-opus-5-on-a-key-business-benchmark-at-lower-cost-but-with-a-high-hallucination-rate)
  - [Snorkel AI: Agents' Last Exam leaderboard](https://snorkel.ai/leaderboard/agents-last-exam/)
- Future sources: add a new file next to this one using the same headings.
