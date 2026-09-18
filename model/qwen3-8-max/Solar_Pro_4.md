# Qwen3.8-Max — findings by Solar Pro 4

- Source: Alibaba Cloud/Qwen3.8-Max, e.g. Alibaba Cloud (`alibaba-cloud/qwen3.8-max`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (Alibaba Cloud proprietary, Qwen3.8 family)
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter MoE model, released as preview July 19, 2026 at World AI Conference in Shanghai, then GA August 3, 2026. A sparse Mixture-of-Experts model with 2.4 trillion total parameters and ~95B active per token, built on Qwen3.5 architecture with hybrid attention mechanism. Designed as Alibaba's answer to closed frontier labs (OpenAI, Anthropic), competing on both reasoning benchmarks and raw context capacity while undercutting them on price. Scores 93.0 on PaperBench (ahead of GPT-5.6 Sol 90.5, Claude Fable 5 88.8, Claude Opus 4.8 80.3), 92.6 on GPQA Diamond (level with Claude Fable 5, just behind GPT-5.6 Sol), and 86.6 on Terminal-Bench 2.1 (ahead of Opus 4.8 and Fable 5 at 84.6 each, behind GPT-5.6 Sol 88.8). Tops Arena.AI multimodal leaderboard at #2 globally (behind only Claude Fable 5).
- **Provider / access:** Alibaba Cloud Model Studio (DashScope), Qwen API. New Model Studio activations get limited free quota (1M tokens) in Singapore (international) region before billing. No confirmed listing on Bedrock, Vertex, Together, or Fireworks as of 2026-09-18.
- **Release / knowledge:** Released 2026-08-03 (GA); preview July 19, 2026. Knowledge cutoff not explicitly stated.
- **IDs:** `qwen3.8-max` or `qwen-max` (Alibaba Cloud Model Studio / DashScope). OpenAI-compatible SDK.
- **Context window:** 1,000,000 tokens (1M) input; max output 131,072 tokens (128K). Up to 991,800 input tokens in non-thinking mode, 983,610 in thinking mode. Native multimodal foundation accepting text, images, and video.
- **Modalities:** Text, image, and video input; text output. Native multimodal (not bolt-on). Tool calls: yes. Function calling: yes. Structured output: yes. Reasoning: yes (thinking mode available). No native audio input/output. No native image or audio generation.
- **Pricing (as of 2026-09-18):** Flat rate: $2.00/1M input, $6.00/1M output (covering entire 1M-token context window with no tiered step-up). New Model Studio activations get one-time 1M-token free quota in Singapore region. No tiered pricing — flat rate for entire context window. Undercuts GPT-5.6 Sol and most other frontier-tier rivals on list price.
- **Architecture:** Proprietary (hosted API). MoE: 2.4T total parameters, ~95B active per token, Qwen3.5 architecture with hybrid attention. Open-weight checkpoint released mid-August 2026 on Hugging Face under restricted custom license (NOT OSI-approved, text-only, smaller context than hosted API — not a drop-in replacement). No published safety or training model card for hosted API.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Qwen3.8-Max specifically. (Alibaba's published table doesn't include SWE-bench Verified — only SWE-bench Pro.)
- SWE-bench Pro: **67.7%** (independent; 2026-09-14). Behind Fable 5's 80.0% and GPT-5.6 Sol's higher mark.
- Terminal-Bench 2.1: **86.6%** (independent; 2026-09-14). Ahead of Opus 4.8 (84.6%) and Fable 5 (84.6%), behind GPT-5.6 Sol (88.8%).
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (independent; 2026-09-14). Level with Claude Fable 5, just behind GPT-5.6 Sol. Ranked #11 out of 44 models reporting this benchmark per HokAI (top third).
- HLE (Humanity's Last Exam): **43.6%** (independent; 2026-09-14). Behind Fable 5's 53.3%.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **40** (Artificial Analysis; 2026-09-14). Below frontier leaders.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found for Qwen3.8-Max specifically.
- PaperBench: **93.0%** (independent; 2026-09-14). Ahead of GPT-5.6 Sol (90.5%), Claude Fable 5 (88.8%), Claude Opus 4.8 (80.3%). Exceptional for research paper reproduction.
- IFBench: **82.8%** (independent; 2026-09-14). Ahead of GPT-5.6 Sol's 72.7%. Instruction following precision.
- LMArena rank: **#2** (independent; 2026-09-14). Second globally on blind human-preference leaderboard for multimodal tasks, behind only Claude Fable 5.

Coding:

- SWE-bench Verified: no verified public score found for Qwen3.8-Max specifically.
- SWE-bench Pro: **67.7%** (see above). Behind Fable 5 (80.0%).
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Terminal-Bench 2.1 86.6%, SWE-bench Pro 67.7%.

Long context:

- Long-context recall: no verified public score found for Qwen3.8-Max specifically. 1M context window with hybrid attention.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 86.6% (ahead of Opus 4.8 and Fable 5 at 84.6% each — frontier tier: TB2.1 85%+ → 90-100, so just below), SWE-bench Pro 67.7% (solid, behind Fable 5's 80.0%), PaperBench 93.0% (exceptional — ahead of GPT-5.6 Sol, Fable 5, Opus 4.8), IFBench 82.8% (ahead of GPT-5.6 Sol's 72.7% — strong instruction following). Strong, consistent scores across terminal, coding, and instruction-following tasks. Capped by: lack of SWE-bench Verified direct score, and SWE-bench Pro at 67.7% being below the 80%+ frontier threshold. Overall tool-use capability is frontier-tier for terminal tasks and PaperBench, competitive mid-to-high tier for general coding.
- **Reasoning: 88/100.** GPQA Diamond 92.6% (#11 of 44, top third — frontier tier: GPQA 90%+ → 90-100, so just below), PaperBench 93.0% (exceptional — ahead of GPT-5.6 Sol), IFBench 82.8% (ahead of GPT-5.6 Sol), LMArena #2 globally for multimodal tasks (behind only Claude Fable 5). These are strong, competitive scores. Capped by: HLE at 43.6% being below frontier (Fable 5's 53.3%), AA Intelligence Index 40 being below frontier leaders, and lack of MMLU Pro direct score. Overall reasoning is competitive with frontier-tier on GPQA and PaperBench, but trails on HLE.
- **Context window: 100/100.** 1,000,000 tokens (1M) context window. Maximum tier (≥1M = 95-100). Max output 128K. Flat pricing covers entire 1M window. Score 100 reflects top-tier context window.
- **Multimodal: 85/100.** Text, image, and video input; text output. Native multimodal (not bolt-on). No native audio I/O or image/audio generation. Per methodology: +video/PDF in = 75-90. With text+image+video input, score 85. Capped by lack of audio input and non-text output. Note: LMArena #2 globally for multimodal tasks indicates strong multimodal capabilities.
- **Coding: 85/100.** Terminal-Bench 2.1 86.6% (ahead of Opus 4.8 and Fable 5 — frontier tier: TB2.1 85%+ → 90-100, so just below), SWE-bench Pro 67.7% (solid, behind Fable 5's 80.0%), PaperBench 93.0% (exceptional). Strong scores. Capped by: lack of SWE-bench Verified direct score, and SWE-bench Pro at 67.7% being below the 80%+ frontier threshold. Overall coding capability is frontier-tier for terminal tasks and PaperBench, competitive mid-to-high tier for general coding.
- **Cost efficiency: 85/100.** $2.00/$6.00 per 1M input/output (flat rate, entire 1M context window). New Model Studio activations get 1M-token free quota. Per methodology: ~$2.00/$6.00 = ~85-90 range. Undercuts GPT-5.6 Sol and most frontier-tier rivals on list price. Blended rate ~$1.18/1M. Compared to competitors: cheaper than Opus 5 ($5/$25) and GPT-5.6 Sol, but more expensive than Flash-tier models like DeepSeek V4.1 Flash ($0.15/$0.60), GLM-5.3 Flash ($0.15/$0.50), or Gemini 3.7 Flash ($0.75/$3.75 intro). Capped by: pricing relative to cheaper Flash-tier alternatives, and lack of batch/cached-input discount mentioned (though flat rate for entire 1M window is a strong value proposition).
- **Overall Score: 88/100.** Mean of (88 + 88 + 100 + 85 + 85 + 85) / 6 = 88.5 → **89**. Best-fit recommendation: Qwen3.8-Max is the best value proposition for teams wanting frontier-tier multimodal capabilities with 1M context at flat $2/$6 pricing (undercuts GPT-5.6 Sol and most frontier rivals). The combination of PaperBench 93.0% (ahead of GPT-5.6 Sol), GPQA 92.6% (level with Claude Fable 5), Terminal-Bench 86.6% (ahead of Opus 4.8 and Fable 5), LMArena #2 globally for multimodal, and flat $2/$6 pricing makes this exceptional value. For teams needing the absolute highest SWE-bench Verified score, Claude Opus 5 (97.0%) is the choice. For teams needing lower cost, Flash-tier models like DeepSeek V4.1 Flash ($0.15/$0.60) or GLM-5.3 Flash ($0.15/$0.50) offer better value (though with lower scores). For teams needing fully open weights, DeepSeek V4.1 Flash or GLM-5.3 Flash (MIT license) are better choices (Qwen3.8-Max's open-weight checkpoint is under restricted custom license, text-only, smaller context). Note: no published safety or training model card for hosted API — regulated-industry buyers may prefer models with formal compliance documentation.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev, Arena.AI), vendor release materials (Alibaba Cloud official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are independent third-party evaluations; vendor-reported numbers are noted where applicable.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Free.md`, using the same headings.
