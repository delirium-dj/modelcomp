# Qwen 3.5 27B — findings by LongCat 2.5 Preview

- Source: Alibaba/Qwen3.5-27B
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's dense open-weight (Apache 2.0) 27B multimodal reasoning model from the Qwen 3.5 generation (Feb 2026) — vision-language reasoning and coding that fits a single consumer/prosumer GPU. Superseded on most axes by the 3.5 MoE sizes and the 3.6/3.7/3.8 generations.
- **Provider / access:** Open weights on Hugging Face `Qwen/Qwen3.5-27B`; hosted via OpenRouter `qwen/qwen3.5-27b` and Alibaba Model Studio. OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-02-25; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-27b` (OpenRouter); `Qwen/Qwen3.5-27B` (Hugging Face); not on Zen.
- **Context window:** 262,144 native (extensible to 1,010,000); 65,536 max output (model card).
- **Modalities:** text, image, video in; text out. Thinking/reasoning mode, tool calls.
- **Pricing (as of 2026-10-21):** OpenRouter $0.27 in / $2.16 out per 1M; Alibaba Model Studio $0.30/$2.40; self-host $0 (Apache 2.0).
- **Architecture:** dense 27B-parameter (27.8B) decoder with vision encoder; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **41.6%** (Qwen3.5-27B model card)
- Terminal Bench Hard: **32.6%** (thinking + tools; DataLearner)
- Tau3-Bench: **68.4%** (Qwen3.x series comparison table)
- Tau2-Bench: **79.0%** (thinking + tools; DataLearner); **93.9%** (Artificial Analysis model benchmarks)
- MCP-Atlas: **68.4%**; Claw-Eval Avg: **64.3%** / Pass^3: **46.2%** (Qwen3.x series table)
- OSWorld-Verified: **56.2%** (model card); BrowseComp: **61%** (model card)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (model card); **85.8%** (AA-GPQA Diamond)
- HLE: **24.3%** (no tools) / **48.5%** (with tools)
- CritPt: **0.3** (standard) / **0.9** (thinking)
- MMLU-Pro: **86.1%**; SuperGPQA: **65.6%**; C-Eval: **90.5%**
- Artificial Analysis Intelligence Index: **22.9**; BenchLM overall **48.4/100** (#107/954)
- AIME 2026: **92.6%**; HMMT Feb 25: **92.0%**

Coding:

- SWE-bench Verified: **72.4%** (model card); **75.0%** (community series table)
- SWE-bench Multilingual: **69.3%**; SWE-bench Pro: **51.2%**; SWE-Rebench: **58.9%**
- LiveCodeBench v6: **80.7%**; CodeForces: **1899**

Multimodal:

- MMMU: **82.3%**; MMMU-Pro: **75.0%**; MMVU: **73.3%**; CharXiv: **79.5%**

Long context:

- LongBench v2: **60.6%**; MMLU-ProX (multilingual): **82.2%**; no RULER/MRCR retrieval figure at 262K reported

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.0 41.6% is below the mid band (TB2.1 45–60), though Tau3 68.4%, Tau2 79–94%, MCP-Atlas 68.4% and Claw-Eval 64.3% are strong for a 27B; capped by OSWorld-Verified 56.2% and the missing GDPval-AA Elo.
- **Reasoning: 69/100.** GPQA 85.5% is solid but below the 90% frontier anchor, HLE 24.3% (48.5% with tools) is mid, and the AA Intelligence Index 22.9 sits in the 20–35 mid band; AIME 92.6% and MMLU-Pro 86.1% keep it upper-mid.
- **Context window: 73/100.** 262,144 native lands in the 200K–500K band (200K = 70), nudged up for 1M extensibility; no measured retrieval figure at full window.
- **Multimodal: 78/100.** Text + image + video input with MMMU 82.3%, MMMU-Pro 75.0% and CharXiv 79.5% — squarely in the 75–90 image/video band; text-only output keeps it below the audio/any-output tier.
- **Coding: 71/100.** SWE-bench Verified 72.4%, LiveCodeBench v6 80.7% and SWE-bench Multilingual 69.3% are good, but SWE-bench Pro 51.2% and Terminal-Bench 2.0 41.6% lag the frontier coding anchors.
- **Cost efficiency: 90/100.** Open Apache-2.0 weights (self-host $0) with hosted pricing at $0.27/$2.16 per 1M — between the methodology's ~$0.60/$2.20 (~92) and ~$0.10/$0.20 (97–99) anchors.
- **Overall Score: 71/100.** Half-up mean of Tool use (66), Reasoning (69), Context window (73), Multimodal (78), Coding (71) = 357/5 = 71.4 → 71. Best fit: a self-hostable vision-language workhorse for cost-sensitive multimodal and coding tasks; not a frontier reasoner.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (Hugging Face `Qwen/Qwen3.5-27B`, BenchLM model page + comparison mirrors, DataLearner analysis, Qwen3.x series comparison table, Artificial Analysis model benchmarks, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
