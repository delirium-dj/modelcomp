# Qwen 3.8 Flash — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen3.8-Flash (`opencode/qwen-3.8-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's multimodal MoE technical preview, released August 26, 2026 as a Qwen4 architecture preview. 125B total parameters with only 6B active per token (most sparse in the flash tier), plus a novel 51B N-gram "engram" lookup table adding capacity at near-zero compute cost. 48-layer hybrid attention (36 GDN + 12 QSA). 262K native context extended to 1M via YaRN, 131K output. GPQA Diamond 91.7% is the highest among flash-tier models. DeepSWE v1.1 58.7% is competitive. HLE without tools 35.9% is modest. Agents' Last Exam 24.3% is low. BenchLM composite 67.5/100 (#25 of 226). MIT-licensed open weights. Natively multimodal (text/image in). NVFP4 weights ~130 GB — smallest in flash tier. Priced at near-free ($0.15/$0.47 per 1M). Explicitly a technical preview, not a competitive flagship.
- **Provider / access:** Alibaba Cloud API; OpenCode Zen. Open weights under MIT license: `Qwen/Qwen3.8-Flash-Next` (Hugging Face).
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not precisely documented.
- **IDs:** `opencode/qwen-3.8-flash` (OpenCode Zen); `infer/qwen-3.8-flash-next` (some providers).
- **Context window:** 262,144 native (YaRN extension to 1M API); 131K output.
- **Modalities:** Text, image, video in; text out. Natively multimodal.
- **Pricing (as of 2026-10-10):** ~$0.15/$0.47 per 1M in/out. Self-hosted $0 (open weights, MIT). Among the cheapest models in the dataset.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **24.3%** (Qwen — low)
- GDPval-AA v2 Elo: not published for Flash-Next
- Terminal-Bench 2.1: not published for Flash-Next

Coding:

- DeepSWE v1.1: **58.7%** (Qwen; vs. GLM-5.3-Flash 63.4%, DeepSeek V4 Flash 59.3%)
- SWE-bench Verified: not published for Flash-Next post-trained model
- Base model reportedly achieves best on 8/14 benchmarks including SWE-bench (Qwen blog)
- KingBench (MindStudio): **56/80** (independent testing)

Multimodal:

- Natively multimodal (text + image + video in)
- Specific multimodal benchmark scores not published

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Qwen — HIGHEST among flash tier; vs. GLM-5.3-Flash 91.0%, DeepSeek V4 Flash 88.1%)
- HLE (no tools): **35.9%** (Qwen; vs. GLM-5.3-Flash 50.2%, DeepSeek V4 Flash 34.8%)
- BenchLM composite: **67.5/100** (#25 of 226 models)
- Base model best on: MMLU-Pro, SuperGPQA, BBH, GSM8K, EvalPlus, SWE-bench (Qwen blog — base model, not post-trained)

### Normalized scores (1–100)

- **Tool use: 42/100.** Agents' Last Exam 24.3% is low — the lowest among flash-tier models. GDPval-AA Elo not published. Terminal-Bench 2.1 not published. The sparse agentic benchmark coverage and low Agents' Last Exam score indicate limited tool-use capability. This is explicitly a technical preview, not optimized for agentic workflows.
- **Reasoning: 60/100.** GPQA Diamond 91.7% is the HIGHEST among flash-tier models (vs. GLM 91.0%, DeepSeek 88.1%) — strong graduate-level science reasoning. However, HLE without tools 35.9% is modest (vs. GLM 50.2%). BenchLM composite 67.5/100 is moderate. The reasoning profile is uneven: strong on specific knowledge benchmarks (GPQA) but weaker on frontier-difficulty reasoning (HLE).
- **Context window: 78/100.** 262K native context extended to 1M via YaRN. 131K output is generous. The 262K native is shorter than DeepSeek/GLM's native 1M, but YaRN extension to 1M API is supported. The 131K output is competitive. For native long-context quality, the 262K base may not match models with native 1M.
- **Multimodal: 62/100.** Natively multimodal (text, image, video in). The multimodal architecture is integrated (no separate vision encoder boundary). However, specific multimodal benchmark scores are not published, making it difficult to assess actual capability. The native integration suggests competence but unverified performance is a concern.
- **Coding: 55/100.** DeepSWE v1.1 58.7% is competitive among flash tier (vs. GLM 63.4%, DeepSeek 59.3%) but trails both. SWE-bench Verified not published for post-trained model. KingBench 56/80 is moderate. Terminal-Bench 2.1 not published. The base model reportedly excels on SWE-bench, but post-trained numbers are limited. The coding profile is moderate for a flash-tier model.
- **Cost efficiency: 97/100.** ~$0.15/$0.47 per 1M is among the cheapest in the dataset. MIT-licensed open weights for self-hosting at $0. NVFP4 checkpoint at ~130 GB is the smallest in flash tier (vs. DeepSeek ~291 GB, GLM ~331 GB), making it the most accessible for self-hosting. 6B active parameters per token means extremely low inference compute. For cost-sensitive deployments, this is the most economical option in the dataset.
- **Overall Score: 59.4/100.** Mean of five quality dims: (42 + 60 + 78 + 62 + 55) / 5 = 59.4. Qwen 3.8 Flash is Alibaba's architectural preview of the Qwen4 design. Key strengths: GPQA Diamond 91.7% (HIGHEST among flash tier), 6B active parameters (most sparse — ultra-efficient), 51B N-gram engram (novel lookup-based capacity), MIT-licensed open weights, ~$0.15/$0.47 pricing (near-free), 130 GB checkpoint (smallest in flash tier), 1M context via YaRN, 131K output, natively multimodal. Key weaknesses: Agents' Last Exam 24.3% (low), HLE 35.9% (modest), DeepSWE 58.7% (trails GLM and DeepSeek), limited published benchmark coverage (explicitly a preview), no GDPval-AA Elo published, no Terminal-Bench published, 262K native context (shorter than competitors' native 1M), multimodal benchmarks not published, BenchLM composite only 67.5/100. Best fit for: cost-sensitive deployments where near-free pricing matters, teams wanting to self-host a multimodal model with minimal hardware (130 GB), architectural researchers interested in Qwen4 design (N-gram engram, GDN+QSA), and lightweight coding assistance where DeepSWE ~59% is sufficient. Not ideal for: agentic workflows (low Agents' Last Exam, limited tool-use benchmarks), teams needing published SWE-bench or Terminal-Bench numbers, tasks requiring native 1M context (only 262K native), or production use where preview-status uncertainty is unacceptable.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Qwen official blog, Hugging Face model card, Artificial Analysis, BenchLM, MindStudio, Local AI Zone flash-tier comparison, DataCamp, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
