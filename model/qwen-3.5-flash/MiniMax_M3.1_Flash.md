# Qwen 3.5 Flash — findings by MiniMax M3.1 Flash

- Source: Alibaba (hosted Qwen3.5-Flash tier, weights from Qwen3.5-35B-A3B), `qwen3.5-flash`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash (hosted tier)
- **Short description:** Alibaba's hosted Qwen3.5-Flash service — the production configuration of the open **Qwen3.5-35B-A3B** weights with **1M context by default** and official built-in tools, at $0.065/$0.26 per 1M on OpenRouter. It is a hosted *configuration* of the open checkpoint, not a separate model or a separate set of weights.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-flash`, $0.10/$0.40 intl; $0.029/$0.287 in the China region with context tiers), OpenRouter `qwen/qwen3.5-flash-02-23` (**$0.065/$0.26**), Vercel, Novita, SiliconFlow, models.dev providers `alibaba` / `alibaba-cn`. **Not on OpenCode Zen** (Zen lists Qwen3.5 Plus, Qwen3.6/3.7/3.8 Flash/Plus/Max — never Qwen3.5-Flash).
- **Release / knowledge:** **2026-02-23** (OpenRouter snapshot `qwen3.5-flash-02-23`; Vals AI release date; models.dev). The underlying open weights shipped 2026-02-24. Knowledge cutoff not published.
- **IDs:** `qwen3.5-flash` (Model Studio), `qwen/qwen3.5-flash-02-23` (OpenRouter snapshot), `alibaba/qwen3.5-flash` (models.dev canonical).
- **Context window:** **1,000,000** tokens by default (OpenRouter `context_length`, models.dev `limit.context`), max output 65,536 — the hosted tier's 1M default is the difference from the open checkpoint's 262,144.
- **Modalities:** text, image and video in; text out; reasoning and tool calling supported.
- **Pricing (as of 2026-10-20):** **$0.065/M in, $0.26/M out** (OpenRouter snapshot); **$0.10/$0.40** (Model Studio international, cache read $0.01, cache write $0.125); **$0.029/$0.287** in the China region with context tiers (≤128K $0.115/$1.147; ≤256K $0.172/$1.72).
- **Architecture:** the open **Qwen3.5-35B-A3B** checkpoint (36B total / 3B active, 256 routed experts top-8, hybrid Gated DeltaNet + Gated Attention, 40 layers) with a hosted serving profile: 1M context, built-in tools, official parsing.

### Raw benchmarks found

> No Artificial Analysis page exists for the hosted tier (the AA row belongs to the open 35B-A3B). Vals AI's independent run and BenchLM's composite are the usable evidence.

Reasoning / knowledge:

- GPQA Diamond: **82.83% ±1.90** (Vals AI) · MMLU-Pro: **84.06% ±0.36** (Vals AI) · MMMU-Pro: **81.91% ±0.93** (Vals AI) · LegalBench: **84.28%** · TaxEval v2: **72.16%** (Vals AI)
- FrontierMath v2 Tiers 1–3: **18.25%** (Epoch AI leaderboard, via BenchLM) — a weak front-tier number
- Artificial Analysis Intelligence Index / HLE / LCR / GPQA / MMLU-Pro for the hosted tier: no verified public score found (AA's row is the open 35B-A3B: II 19, $0.25/$2.00, 262K)
- Vals Index: **49.6%** (#22 overall, #7 among open-weight models) · average accuracy 65.93%

Agent / tool use:

- Terminal-Bench 2.0: **24.72% ±4.60** (Vals AI) — weak
- Toolathlon / Tau2 / Tau3 / MCP-Atlas / OSWorld / AutomationBench / GDPval-AA: no verified public score found for the hosted tier

Coding:

- SWE-bench: **64.40% ±2.14** (Vals AI, current evaluation) — an earlier Vals evaluation on 2026-03-02 reported **54.9%** SWE-bench Verified and Terminal-Bench 2.0 24.7%; both are cited
- LiveCodeBench: **83.28% ±1.04** (Vals AI) · MedCode: **33.00%** · MedScribe: **70.62%** (Vals AI)

Long context:

- 1M context by default is a hosted-profile claim; no MRCR / RULER measurement exists for this tier.

### Normalized scores (1–100)

- **Tool use: 32/100.** Terminal-Bench 2.0 24.7% is the only agentic figure, and no τ², GDPval or OSWorld number exists for the hosted tier.
- **Reasoning: 58/100.** GPQA 82.8%, MMLU-Pro 84.1% and MMMU-Pro 81.9% are mid-band, capped by FrontierMath Tiers 1–3 at 18.2% and the absence of any AA index for the hosted configuration.
- **Context window: 85/100.** A 1M-token default window with 65,536 max output is the top tier, discounted because no long-context retrieval measurement was published for it.
- **Multimodal: 80/100.** Text, image and video input with text out — the video-in band.
- **Coding: 66/100.** LiveCodeBench 83.3% and SWE-bench 64.4% (54.9% on the earlier evaluation) are mid-band; Terminal-Bench 2.0 at 24.7% is the drag.
- **Cost efficiency: 97/100.** $0.065/$0.26 on OpenRouter (or $0.029/$0.287 in the China region) is among the cheapest 1M-context routes available.
- **Overall Score: 64/100.** Mean of the five quality dims = (32 + 58 + 85 + 80 + 66) / 5 = 64.2 → **64**. Best fit: cheap high-volume multimodal work with a 1M window — but the agentic numbers are weak, and the same weights measured as the open Qwen3.5-35B-A3B score higher on agentic suites (Terminal-Bench 2.0 40.5%).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Qwen3.5-35B-A3B Hugging Face model card for the hosted-tier relationship, Vals AI model page, BenchLM, models.dev, OpenRouter API, Alibaba Cloud Model Studio listings, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash.md`, using the same headings.
