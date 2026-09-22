# Gemma 4 31B — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemma-4-31b-it`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (instruction-tuned dense flagship of the Gemma 4 open family)
- **Short description:** Google's open-weights 30.7B dense model (Apache 2.0) with thinking mode, 256K context, and text+image input — #1 dense open model on Arena Text at release and the quality tier of the Gemma 4 suite for server/local fine-tuning.
- **Provider / access:** Hugging Face `google/gemma-4-31B-it` (and base `gemma-4-31B`); Google AI for Developers Gemma downloads; community hosts (OpenRouter, Together, etc.); local GGUF / compressed-tensors / QAT checkpoints. Free open weights; standard API hosting rates vary by host.
- **Release / knowledge:** Gemma 4 family announced **2026-04-02** (Google blog + arXiv tech report 2607.02770); HF 31B-it card dated 2026-07-02 (refresh). Knowledge cutoff not explicitly restated for Gemma 4 31B in sources reviewed.
- **IDs:** `google/gemma-4-31b-it` (repo meta id `google/gemma-4-31b-it`); base `google/gemma-4-31B`.
- **Context window:** **256K** (262K vocab family; model card "up to 256K" for 12B/26B/31B); max output not separately capped in card excerpts (practical serving limits vary).
- **Modalities:** **text/image in; text out** (31B has ~550M vision encoder, **no audio** — audio only on E2B/E4B/12B); thinking/reasoning mode yes; function calling yes; JSON via standard decoding; OCR/document/chart/UI understanding supported.
- **Pricing (as of 2026-09-22):** **Free open weights** (Apache 2.0) — self-host cost is hardware only (BF16 ~69.9GB, SFP8 ~34.9GB, Q4_0 ~17.5GB weights); hosted API prices set by each provider (not a single Google rate card).
- **Architecture:** dense, **30.7B** total params, 60 layers, d_model 5376, FFN 21504, vocab 262144; 5:1 local:global sliding-window attention (SWA 1024), pp-RoPE, GQA, QK-Norm; ~550M ViT; thinking mode; MTP draft tokens; Apache 2.0.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Instruction-tuned, thinking mode unless noted. Primary source: Google Gemma 4 model card / tech report.

Agent / tool use:

- Tau2 (average over 3: airline/retail/telecom): **76.9%** (Google; retail 86.4, airline 75.0, telecom 69.3 — beats Gemma 3 27B 16.2 by a mile)
- Terminal Bench Hard: **36.0%** (Google; vs Gemma 3 4.0; AA notes mid-pack vs Qwen3.5-27B 33% on related hard set)
- Toolathlon / MCP-Atlas / OSWorld / GDPval-AA: no verified public score found for Gemma 4 31B

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Google; vs Gemma 3 42.4)
- MMLU Pro: **85.2%** (Google; vs Gemma 3 67.6)
- AIME 2026 (no tools): **89.2%** (Google; vs Gemma 3 20.8)
- BigBench Extra Hard: **74.4%** (Google)
- HLE no tools: **19.5%**; HLE with search: **26.5%** (Google)
- Artificial Analysis Intelligence Index: **39** (Artificial Analysis, 2026-04-06; trails Qwen3.5-27B Reasoning 42 by 3 pts; ~2.5× fewer output tokens than Qwen for that gap)
- IFBench 76.0 / IFEval 98.9 / MMMLU 88.4 (Google)

Coding:

- LiveCodeBench v6: **80.0%** (Google; vs Gemma 3 29.1)
- Codeforces ELO: **2150** (Google)
- SciCode: **43.0%** (Google/tech report; AA: leads Qwen3.5-27B 40 on SciCode)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- MRCR v2 8-needle 128K average: **66.4%** (Google; vs Gemma 3 13.5 — large jump but well below frontier 80%+)
- 256K window; 1M-class retrieval: N/A

Multimodal:

- MMMU Pro: **76.9%** (Google; vs Gemma 3 49.7)
- MATH-Vision: **85.6%** (Google)
- OmniDocBench 1.5 avg edit distance: **0.131** (lower better; Google)
- MedXPertQA MM: **61.3%** (Google)
- Arena Text (human Elo): **#1 dense open model / #3 open overall** at release (Google tech report, as of 2026-06-19)
- CharXiv / Video-MMMU: no verified public score found (no video input on 31B)

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2 average 76.9 (retail 86.4) is outstanding for an open 31B and TB Hard 36 shows real terminal agentic skill; no MCP-Atlas/OSWorld/GDPval rows and telecom (69.3) lags — capped below full agent-stack frontier models.
- **Reasoning: 82/100.** GPQA 84.3, MMLU-Pro 85.2, AIME 89.2, BBEH 74.4 with AA Intelligence Index 39 (near Qwen3.5-27B) and class-leading token efficiency (~39M vs 98M tokens for Index run — AA); HLE absolute (19.5/26.5) still far below frontier 40%+ keeps this out of the high-80s.
- **Context window: 70/100.** True 256K window (2× Gemma 3) with MRCR 66.4% at 128K — usable long context but deep needle reliability mid-tier; no 1M tier.
- **Multimodal: 84/100.** Native text+image with MMMU-Pro 76.9, MATH-Vision 85.6, strong OmniDocBench; **no audio on 31B** and no video/CharXiv rows cap below omni-modal flagships.
- **Coding: 82/100.** LiveCodeBench v6 80.0, Codeforces Elo 2150, SciCode 43, TB Hard 36 — elite for open 31B class (AA: beats Qwen3.5-27B on SciCode/TB-Hard); no SWE-bench Verified/DeepSWE row and agentic coding depth trails closed frontier.
- **Cost efficiency: 100/100.** Apache 2.0 free weights, runs quantized on a single consumer/workstation GPU (Q4_0 ~17.5GB), no API lock-in — self-host anchor = 100.
- **Overall Score: 79/100.** Mean of five quality dims (76+82+70+84+82)/5 = 78.8 → 79. Best-fit: best-in-class open dense model for private reasoning/coding/vision deployments and fine-tuning where 256K + Tau2-grade tool use matter more than HLE peaks or 1M context.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Google AI Gemma 4 model card, Google blog 2026-04-02, arXiv 2607.02770 tech report, HF google/gemma-4-31B + 31B-it, Artificial Analysis Gemma 4 article, Sebastian Raschka release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
