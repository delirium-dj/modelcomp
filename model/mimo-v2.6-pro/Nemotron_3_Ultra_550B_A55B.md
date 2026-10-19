# MiMo-V2.6-Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship open-weights MoE reasoning model (1.0T total / 42B active params) with native multimodal input (text, image, speech, video), 1M context, strong agentic and coding performance, and MIT license.
- **Provider / access:** Xiaomi API, OpenCode Zen (`opencode/mimo-v2.6-pro` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`), 5 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff not publicly disclosed.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Hugging Face), `opencode/mimo-v2.6-pro` (OpenCode Zen). Open weights available for self-hosting (MIT license).
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.435/M in, $0.87/M out (Xiaomi API / AA). 99% cache discount (AA). Blended 7:2:1 ≈ $0.18/M (AA). Cost per Intelligence Index task: $0.13 (AA).
- **Architecture:** MoE (Mixture of Experts), 1.0 trillion total parameters, 42 billion active parameters per token; open weights (MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi MiMo-V2.6 technical report / Xiaomi)
- Terminal-Bench 4.0: **34.9%** (Xiaomi technical report) / **34.8%** (Artificial Analysis)
- GDPval-AA v2: **1673 Elo** (Xiaomi technical report) / **59.2%** normalized (Artificial Analysis)
- OSWorld-Verified: **82%** (Xiaomi technical report)
- Toolathlon Verified: **76.9%** (Xiaomi technical report)
- AutomationBench: **53.1%** (Xiaomi technical report)
- Agents' Last Exam: **31.6%** (Xiaomi technical report)
- JobBench: **62.0%** (Xiaomi technical report)
- CyberGym: **94.0%** (Xiaomi technical report)
- ExploitGym: **17.8%** (Xiaomi technical report)
- AA Briefcase Elo: **1515** (Artificial Analysis)
- AA AutomationBench: **58.6%** (Artificial Analysis)
- AA AnalystAgent: **37.5%** (Artificial Analysis)
- GDP.pdf: **19.2%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **34.8%** (Artificial Analysis)

Reasoning / knowledge:

- AA Intelligence Index: **46.3%** (Xiaomi technical report) / rank #1/121 open weights (AA)
- AA HLE: **49.4%** (Artificial Analysis)
- AA LCR: **86.3%** (Artificial Analysis)
- CritPt: **26.6%** (Artificial Analysis)
- MLCR-AA: **18.3%** (Artificial Analysis)
- AA Omniscience Index: **8.4%** (Artificial Analysis)
- AA Omniscience Accuracy: **34.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **40.6%** (Artificial Analysis)
- STEMBench: **2.17** (Ulam audit)

Coding:

- DeepSWE: **71.9%** (Xiaomi technical report)
- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report)
- AA-SciCode: **60.9%** (Artificial Analysis)
- ProgramBench: **26.5%** (Xiaomi technical report)
- Bug Hunt Bench: **22.7 fixes** (public data)

Multimodal:

- Design Arena Website: **1308** (OpenRouter)

Long context:

- AA LCR: **86.3%** (Artificial Analysis)
- MLCR-AA: **18.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 80/100.** TB 2.1 89.9% (exceeds 88%+ frontier), GDPval 1673 Elo (near 1750+ frontier), Toolathlon 76.9%, OSWorld-Verified 82%, CyberGym 94.0%, AutomationBench 53.1%, JobBench 62.0%. Capped by TB 4.0 34.9%, ExploitGym 17.8%, Agents' Last Exam 31.6%.
- **Reasoning: 72/100.** AA LCR 86.3%, AA HLE 49.4% (exceeds 40%+ frontier), AA Intelligence Index 46.3% (rank #1 open weights). Capped by CritPt 26.6%, MLCR 18.3%, AA Omniscience Index 8.4%, STEMBench 2.17.
- **Context window: 95/100.** 1M native context; AA LCR 86.3% — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 90/100.** Native text/image/audio/video input; Design Arena 1308. Methodology: +video/PDF in = 75–90; +audio in = 90–100. Audio + video input present → 90.
- **Coding: 82/100.** DeepSWE 71.9% (near 74%+ frontier), TB 2.1 89.9% (exceeds 85%+), AA-SciCode 60.9% (exceeds 55%+). Capped by ProgramBench 26.5%, no SWE-bench Verified/Pro reported.
- **Cost efficiency: 98/100.** $0.435/$0.87 per 1M, blended ~$0.18/M, 99% cache discount, cost/task $0.13. Methodology: ~$0.10/$0.20 = 97–99; extremely competitive open-weights pricing → 98.
- **Overall Score: 83.8/100.** Half-up mean of (80 + 72 + 95 + 90 + 82) / 5 = 83.8 → 84. Best-fit: best value open-weights MoE for multimodal agentic work; native audio/video, MIT license, and ultra-low API pricing; reasoning depth (CritPt, MLCR) lags proprietary frontier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official technical report (Xiaomi MiMo-V2.6 on Hugging Face), independent benchmark aggregators (Artificial Analysis, BenchLM, Ulam STEMBench), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.