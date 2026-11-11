# MiniMax-M3 — findings by Ernie 5.5 Flash

- Source: MiniMax/MiniMax-M3 (`minimax-m3`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3
- **Short description:** MiniMax's open-weight multimodal model (released 2026-06-01) for long-context coding, perception and agent planning, with a 1M context and a 512K output cap.
- **Provider / access:** MiniMax API (`MiniMax-M3`), OpenRouter, OpenCode Go (`opencode-go/minimax-m3`), GmiCloud, Empirio Labs, plus ~56 routes. Open weights.
- **Release / knowledge:** 2026-06-01 (models.dev); knowledge cutoff not published.
- **IDs:** `minimax-m3`, `minimax/MiniMax-M3`, `MiniMaxAI/MiniMax-M3`, `opencode-go/minimax-m3`.
- **Context window:** 1,000,000 tokens (524,288 on some routes); max output 524,288.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.30 / $1.20 per 1M input/output; cache read $0.06. Some gateways list $0.225/$0.90 or $0.60/$2.40.
- **Architecture:** open-weight MoE (MiniMax).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **74.2%**; Claw-Eval: **74.5%**; OSWorld-Verified: **70.1%**; BrowseComp: **83.5%**
- Terminal-Bench 2.1: **66.0%** (Vals **53.6%**); BankerToolBench: **76.1%**
- ResearchClawBench: **19.8%**; OSWorld 2.0: **4.6%** (near-floor); MazeBench: **0%**

Reasoning / knowledge:

- MMMU-Pro: **78.1%**; SVG-Bench: **63.7%**; VIBE V2: **50.1%**; KernelBench Hard: **28.8%**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified: **80.5%** (Vals **75.0%**); LiveCodeBench (Vals AI): **82.2%**
- SWE-bench Pro: **59%**; NL2Repo: **42.1%**; OpenHarmony Bench v1.0: **48.4%**
- FrontierCode / FrontierSWE / DeepSWE: no verified public rows published

Long context:

- 1M context with 512K output declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 75/100.** MCP Atlas 74.2%, Claw-Eval 74.5% and OSWorld-Verified 70.1% are mid, BrowseComp 83.5% good; OSWorld 2.0 4.6% and ResearchClawBench 19.8% are near-floor.
- **Reasoning: 65/100.** MMMU-Pro 78.1% is the only verified reasoning-adjacent row and it is mid; no GPQA/HLE/ARC/FrontierMath publication exists, and KernelBench Hard 28.8% is weak.
- **Context window: 100/100.** 1,000,000 tokens with a 524,288 max output.
- **Multimodal: 80/100.** Text, image and video in with MMMU-Pro 78.1% and SVG-Bench 63.7% confirming real visual work; no public video row.
- **Coding: 72/100.** SWE-bench Verified 80.5% and LiveCodeBench 82.2% are decent, but SWE-bench Pro 59% and NL2Repo 42.1% are weak.
- **Cost efficiency: 92/100.** $0.30/$1.20 per 1M for open weights with a 1M context — strong value.
- **Overall Score: 78.4/100.** Best fit for cheap multimodal/long-context perception tasks; not competitive as a coding or reasoning model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (MiniMax model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax-M3 — Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-M3)
  - [MiniMax-M3 benchmarks & sources — BenchLM](https://benchlm.ai/models/minimax-m3)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3_v2.md`, using the same headings.