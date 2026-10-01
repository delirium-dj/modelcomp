# Qwen 3.5 9B — findings by Muse Spark 1.3

- Source: Alibaba/Qwen3.5-9B (`opencode/qwen-3.5-9b`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's 9B dense open-weights generalist (Qwen3.5 small tier) with native multimodal agent support. Best fit for low-VRAM local deploy and multilingual knowledge work; not a purpose-built coding agent.
- **Provider / access:** Alibaba Qwen (Hugging Face `Qwen/Qwen3.5-9B`, ModelScope); API via OpenRouter `qwen/qwen3.5-9b`, Together AI, SiliconFlow, DeepInfra. OpenCode Zen ID `opencode/qwen-3.5-9b`. Chat Completions API.
- **Release / knowledge:** 2026-03-02 small-series release (Hugging Face card 2026-03-09); knowledge cutoff undisclosed — no verified cutoff found.
- **IDs:** `qwen/qwen3.5-9b` (OpenRouter); `Qwen/Qwen3.5-9B` (Hugging Face); `opencode/qwen-3.5-9b` (Zen)
- **Context window:** 262,144 total with 65,536 max output (OpenRouter-verified 2026-08-19, 2026-09-11 listings)
- **Modalities:** Text/image/video in (native multimodal per Qwen3.5 blog); text out; reasoning yes (thinking mode); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-11):** $0.10 per 1M input / $0.15 per 1M output (OpenRouter, SiliconFlow, DeepInfra, Venice); Together AI $0.17/$0.25; OpenRouter $0.08/$0.13 low observation. Self-host free (Apache 2.0).
- **Architecture:** 9B dense Transformer, open-weights Apache 2.0, proprietary training data

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **29.2%** (Artificial Analysis, reasoning-on, via OpenRouter/Continuum 2026-08-19 grid)
- Terminal-Bench Hard: **24.2%** (Artificial Analysis, reasoning-on)
- Tau2 Telecom (τ²-Bench Telecom): **86.8%** (Artificial Analysis, reasoning-on; non-reasoning 85.1%)
- Tau3-Banking (τ³-Banking): **7%** (Artificial Analysis Intelligence grid 2026-08-19)
- GDPval-AA v2: **7.2%** (Artificial Analysis grid 2026-08-19; OpenRouter page shows 0.0% GDPval-AA variant — harness differs, lower figure noted)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BFCL-V4: **no verified public score found for 9B** (122B-A10B scores 72.2 — different model, not counted)
- BrowseComp: **no verified public score found for 9B** (122B scores 63.8 — different model, not counted)

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (official Qwen HF model card); **80.6%** (Artificial Analysis reasoning-on independent, Sept 2026); non-reasoning 78.6%
- HLE: **14.9%** (Artificial Analysis reasoning-on; non-reasoning 9.4%)
- LCR (AA-LCR): **70.0%** (Artificial Analysis reasoning-on; non-reasoning 46.0%)
- CritPt: **0.3%** (Artificial Analysis reasoning-on; non-reasoning 0.6%)
- SuperGPQA: **58.2%** (official Qwen HF card)
- MMLU-Pro: **82.5%** (official); MMLU-Redux 91.1%, C-Eval 88.2% (official)
- HMMT Feb 25: **83.2%**; HMMT Nov 25: **82.9%** (official)
- Artificial Analysis Intelligence Index: **22** (AA model page 2026-08-19)
- Omniscience Accuracy / Non-Hallucination Rate: **16.4% / 16.4%** (Artificial Analysis reasoning-on)
- IFBench: **66.7%** (Artificial Analysis reasoning-on)

Coding:

- SWE-bench Verified: **no verified public score found for 9B** (27B ties GPT-5-mini at 72.4 — different model, not counted; community tables attributing ~69-80% to small tier mix model sizes without a 9B-specific harness)
- LiveCodeBench v6: **65.6%** (official Qwen HF card; XDA/ComputerTech cross-check confirms 65.6 vs 82.7 for GPT-OSS-120B)
- OJBench: **29.2%** (official)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **28.7** Coding Index (Artificial Analysis reasoning-on; non-reasoning 23.5); no verified DeepSWE row found

Long context:

- 262K context ceiling with AA-LCR 70.0% (reasoning-on); no verified MRCR / RULER / GraphWalks score found

### Normalized scores (1–100)

- **Tool use: 62/100.** TB2.1 29.2% and Tau3-Banking 7% cap it well below frontier agent models, partly offset by strong Tau2-Telecom 86.8%; GDPval 7.2% confirms weak end-to-end task value.
- **Reasoning: 76/100.** GPQA 81.7% official (80.6% AA) plus MMLU-Pro 82.5% carry it above mid-tier, capped by low HLE 14.9% and CritPt 0.3%.
- **Context window: 74/100.** 262K tier (200K baseline 70) with solid AA-LCR 70.0% retention signal, capped by no MRCR/RULER measurement at-limit.
- **Multimodal: 82/100.** Native image/video in with MMMU-Pro 70.1% and OmniDocBench 87.7%, capped below audio-out omni flagships.
- **Coding: 68/100.** LiveCodeBench 65.6% plus OJBench 29.2% show competent lightweight coding, capped by zero verified SWE-bench row for this exact ID and low Coding Index 28.7.
- **Cost efficiency: 98/100.** $0.10/$0.15 per 1M (self-host free) — near-zero-cost tier.
- **Overall Score: 72/100.** Mean of the five non-cost dims (62+76+74+82+68)/5 = 72.4; best fit as cheap multilingual knowledge/local-deploy generalist, not primary agentic coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (Hugging Face Qwen/Qwen3.5-9B card, Qwen3.5 blog/GitHub, OpenRouter benchmarks/pricing, Artificial Analysis via AI-Atlas/Continuum grids 2026-08-19, ComputerTech/XDA/Zenn cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
