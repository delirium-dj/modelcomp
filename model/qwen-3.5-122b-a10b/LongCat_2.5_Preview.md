# Qwen 3.5 122B A10B — findings by LongCat 2.5 Preview

- Source: Alibaba/Qwen3.5-122B-A10B
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba's open-weight (Apache 2.0) 122B total / 10B active native vision-language MoE (Feb 2026) built for multimodal agents — a hybrid linear-attention + sparse-MoE design second only to Qwen3.5-397B-A17B within the 3.5 generation.
- **Provider / access:** Open weights on Hugging Face `Qwen/Qwen3.5-122B-A10B`; hosted via OpenRouter `qwen/qwen3.5-122b-a10b`, Alibaba Model Studio, NVIDIA NIM, NovitaAI, DeepInfra, SiliconFlow. OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** Hugging Face 2026-02-24, NIM 2026-03-06; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-122b-a10b` (OpenRouter); `Qwen/Qwen3.5-122B-A10B` (Hugging Face).
- **Context window:** 262,144 native (extensible to 1,010,000 with YaRN); 65,536 max output (Model Studio; 81,920 max CoT).
- **Modalities:** text, image, video in; text out. Thinking/reasoning mode, tool calls, structured output.
- **Pricing (as of 2026-10-21):** OpenRouter $0.26 in / $2.08 out per 1M (NovitaAI $0.40/$3.20); Alibaba Model Studio $0.40/$3.20; self-host $0 (Apache 2.0).
- **Architecture:** causal LM with vision encoder; 122B total / 10B active, 48 layers, hybrid Gated DeltaNet + Gated Attention with sparse MoE, MTP, 248,320 vocab; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **49.4%** (Qwen3.5 model card)
- Tau2-Bench: **79.5%** (model card); Tau2-Bench Telecom **93.6%** (Artificial Analysis)
- BFCL-V4: **72.2%**; AndroidWorld: **71.1%**; BrowseComp: **63.8%** (model card)
- VITA-Bench: **33.6%**; DeepPlanning: **24.1%**; Tool Decathlon: no verified public score found
- GDPval-AA: **15.1%** (Artificial Analysis); AA Agentic Index: **7.6**
- Claw-Eval / ClawProBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (model card); **85.7%** (Artificial Analysis)
- HLE: **25.3%** (w/ CoT) / **47.5%** (w/ tool); AA HLE **25.2%**
- MMLU-Pro: **86.7%**; MMLU-Redux: **94.0%**; C-Eval: **91.9%**; SuperGPQA: **67.1%**
- CritPt: **0.6%**; SciCode: **39.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **15.6**; Coding Index **45.7**
- HMMT Feb 25: **91.4%**; HMMT Nov 25: **90.3%**; AA-Omniscience Accuracy **24.4%** / Non-Hallucination **12.9%**

Coding:

- SWE-bench Verified: **72.0%** (official `.eval_results` + model card)
- LiveCodeBench v6: **78.9%** (series table)
- Terminal-Bench Hard: **31.1%** (Artificial Analysis)
- ObviousBench answer pass^3: **97.2%** (BenchmarkList)
- DeepSWE / SWE-bench Pro: no verified public score found

Multimodal:

- MMMU: **83.9%**; V*: **93.2%** (with CI); TIR-Bench: **53.2%** (with CI)
- Medical VQA: SLAKE **81.6%**, PMC-VQA **63.3%**, MedXpertQA-MM **67.3%**

Long context:

- AA-LCR: **76.3%** (Artificial Analysis); no RULER/MRCR figure at 262K reported

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.0 49.4% is at the bottom of the mid band, while Tau2 79.5% (telecom 93.6%), BFCL-V4 72.2%, AndroidWorld 71.1% and BrowseComp 63.8% make it a capable agent MoE; capped by GDPval-AA 15.1% and the AA Agentic Index 7.6.
- **Reasoning: 70/100.** GPQA 86.6% is good but under the 90% frontier anchor; HLE 25.3% (47.5% with tools) and AA Intelligence Index 15.6 are mid/low; HMMT ~90% and MMLU-Pro 86.7% keep it upper-mid.
- **Context window: 73/100.** 262,144 native sits in the 200K–500K band (200K = 70), nudged up for 1M YaRN extensibility; no measured retrieval figure at full window.
- **Multimodal: 79/100.** Text + image + video input with MMMU 83.9%, V* 93.2% and strong medical-VQA results — upper half of the 75–90 image/video band; text-only output caps it.
- **Coding: 72/100.** SWE-bench Verified 72.0%, LiveCodeBench v6 78.9% and Coding Index 45.7 are solid for a 10B-active MoE, but SciCode 39.7% and Terminal-Bench Hard 31.1% lag the frontier coding anchors.
- **Cost efficiency: 90/100.** Open Apache-2.0 weights (self-host $0) with hosted pricing at $0.26/$2.08 per 1M — between the methodology's ~$0.60/$2.20 (~92) and ~$0.10/$0.20 (97–99) anchors.
- **Overall Score: 72/100.** Half-up mean of Tool use (66), Reasoning (70), Context window (73), Multimodal (79), Coding (72) = 360/5 = 72.0 → 72. Best fit: a cost-efficient open multimodal agent MoE; not a frontier reasoner.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (Hugging Face `Qwen/Qwen3.5-122B-A10B` model card + `.eval_results`, ModelScope summary, Alibaba Model Studio docs, NVIDIA NIM card, OpenRouter model page, CodeSOTA, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
