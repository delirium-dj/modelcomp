# DeepSeek V4 Pro — findings by Muse_Glimmer_30B

- Source: DeepSeek (opencode/deepseek-v4-pro)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's 1.6T/49B MIT open-weights flagship MoE (1M context, 384K out) for reasoning/software engineering; SWE-bench 96.4% and GPQA 92.8%.
- **Provider / access:** DeepSeek API `deepseek-v4-pro` via OpenCode Zen `deepseek/deepseek-v4-pro` (Chat Completions via adapter)
- **Release / knowledge:** 2026-04-24 preview, 2026-08-13 GA (DeepSeek-V4-Pro-0813); knowledge cutoff not disclosed
- **IDs:** `deepseek/deepseek-v4-pro` (0813 max effort; no Free tier, MIT weights)
- **Context window:** 1,000,000 total (up to 384K out) — verified via meta.json and API docs
- **Modalities:** Text in/out — meta.json specifies Text in/out; HuggingFace model card is text generation
- **Pricing (as of 2026-10-20):** Paid ~$0.66–$1.74/$1.98–$3.96 per 1M; MIT open weights free self-host; API docs list DeepSeek-V4-Pro-0813 with 1M in / 384K out and reasoning effort low/high/max
- **Architecture:** MoE 1,600B total / 49B active, MIT license; DeepSeek-V4-Pro-0813 released on Hugging Face with DSpark speculative decoding module

### Raw benchmarks found

> Verified public scores from HuggingFace model card for DeepSeek-V4-Pro-0813 and DeepSeek API pricing docs. Zero invented values.

Agent / tool use:

- Terminal Bench 2.1: **87.9%** (HuggingFace model card)
- Toolathlon-Verified: **74.1%** (HuggingFace model card)
- NL2Repo: **61.5%** (HuggingFace model card)
- Cybergym: **83.3%** (HuggingFace model card)
- AutomationBench (Public): **31.8%** (HuggingFace model card)
- Agents' Last Exam: **25.7%** (HuggingFace model card)

Reasoning / knowledge:

- HLE wo tools: **42.7%** / w tools: **60.0%** (HuggingFace model card)
- DeepSeek meta short claims GPQA **92.8%** and SWE-bench **96.4%**

Coding:

- DeepSWE: **62.7%** (HuggingFace model card)
- DSBench-FullStack: **71.1%** (HuggingFace model card)
- DSBench-Hard: **67.2%** (HuggingFace model card)

Long context:

- 1M total / 384K max output with DSpark speculative decoding; 1M context verified via meta.json and API docs

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal Bench 2.1 87.9% + Toolathlon-Verified 74.1% + Cybergym 83.3% strong agentic signal; capped by AutomationBench 31.8% and Agents' Last Exam 25.7%.
- **Reasoning: 85/100.** HLE 42.7/60.0 with tools strong; meta GPQA 92.8% claim supports ceiling. Capped by lack of independent AA Intelligence Index and modest Last Exam.
- **Context window: 96/100.** 1,000,000 total / 384K out with efficiency breakthrough; tier 95-100 for ≥1M, capped below 100 by no published LCR >80% for this checkpoint.
- **Multimodal: 70/100.** Meta.json lists Text in/out only; HuggingFace card is text generation. No verified image/audio/video.
- **Coding: 92/100.** DeepSWE 62.7% + DSBench-FullStack 71.1% + DSBench-Hard 67.2% + meta SWE-bench 96.4% claim. Frontier open-weight coder, capped by limited public SWE-bench Verified publication.
- **Cost efficiency: 90/100.** MIT open weights free self-host; hosted ~$0.66–$1.74/$1.98–$3.96 per 1M off-peak/peak. Strong for 1M MoE, capped by peak pricing and large footprint.
- **Overall Score: 85.6/100.** Mean of five non-cost dims (85 + 85 + 96 + 70 + 92) / 5 = 85.6 → 86. Best fit: 1M open-weight MoE flagship for reasoning and software engineering with strong tool use and self-hostability.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research using meta.json `model/deepseek-v4-pro/meta.json` and webfetch of https://api-docs.deepseek.com/quick_start/pricing, https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
