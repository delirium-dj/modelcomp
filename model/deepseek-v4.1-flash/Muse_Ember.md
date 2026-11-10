# DeepSeek V4.1 Flash — findings by Crouton Alpha

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's open-weights Flash for cheap 1M-context coding; top use case is high-throughput SWE at $0.30/$1.20 with a Free tier. BenchLM cut is the 1017 reasoning checkpoint — same family/weights class as Zen `deepseek-v4.1-flash`.
- **Provider / access:** DeepSeek API, OpenCode Zen `opencode/deepseek-v4.1-flash` via `https://opencode.ai/inference/openai/v1/chat/completions` (paid) + `deepseek-v4.1-flash-free` free tier. HF `deepseek-ai/DeepSeek-V4.1-Flash-1017`.
- **Release / knowledge:** 2026 (HF cards).
- **IDs:** `deepseek/deepseek-v4.1-flash`, `opencode/deepseek-v4.1-flash`, `deepseek-ai/DeepSeek-V4.1-Flash-1017`.
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in (BabyVision/MMMU-Pro rows); text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $0.30 input / $1.20 output per 1M (Zen paid); Free tier $0 (Zen limited time, zero-retention). Cached $0.006.
- **Architecture:** MoE open weights (DeepSeek V4 Flash family).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **90.6%** (HF card)
- Terminal-Bench 4.0 **42.30%** (1017 card)
- AutomationBench **60.5%** (1017 card)
- HLE w/ tools **63.9%** (HF card)
- CyberGym **88.1%** (HF card)
- Agents' Last Exam **35.4%** (1017 card)
- AA AutomationBench (normalized GDPval) — Intelligence **39.5** (AA)

Reasoning / knowledge:

- GPQA **90.9%** (HF card)
- HLE **42.6%** (1017 card)
- AA-LCR **84.0%** (AA)
- FrontierMath v2 1-3 **67.368%** (Epoch)
- CritPt **14.3%** (AA)

Coding:

- DeepSWE **77.0%** (1017 card)
- Terminal-Bench 2.1 **90.6%** (HF card)
- NL2Repo **68.2%**, ProgramBench **29.1%** (1017 card)
- Codeforces **3471** (HF card) — ELO-scale, not %.

Long context:

- 1M; AA-LCR **84.0%** (AA)

Multimodal:

- AA-MMMU-Pro **77.0%** (AA)
- BabyVision w/Python **92.5%** (1017 card)
- ExtractBench **87.11%**, Chartography **83.0%** (1017 card)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 90.6%, AutomationBench 60.5% and CyberGym 88.1% are frontier for Flash; TB4.0 42.3% caps it below 95.
- **Reasoning: 90/100.** GPQA 90.9%, LCR 84%, FrontierMath 67.4% are strong; capped by HLE 42.6% and CritPt 14.3%.
- **Context window: 96/100.** 1M with LCR 84%.
- **Multimodal: 73/100.** Image in, text out; BabyVision 92.5% and MMMU-Pro 77% strong — image-only tier.
- **Coding: 94/100.** DeepSWE 77% exceeds frontier Flash refs, TB2.1 90.6% overlaps coding, NL2Repo 68.2% solid; capped by ProgramBench 29.1%.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M (Zen) — near $0 anchor; Free tier same weights pushes paid score up (methodology $0.30/$1.20 ≈ 94).
- **Overall Score: 89/100.** Mean (93+90+96+73+94)/5 = 89.2 → 89; best-fit cheapest frontier coder.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via DeepSeek HF cards, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [Hugging Face — DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [BenchLM — DeepSeek V4.1 Flash 1017](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
