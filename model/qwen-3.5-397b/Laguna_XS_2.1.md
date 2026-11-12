# Qwen 3.5 397B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, Benchmarks, trajectories.poolside.ai  
> Date: 2026-11-06 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B A17B
- **Short description:** Alibaba's 2026 open-weight MoE flagship (397B total / 17B active) with native multimodal capabilities (text/image/video), 256K context; SWE-bench Verified 76.4%, AIME 97%, GPQA 92% — superseded by 3.6/3.7/3.8 series.
- **Provider / access:** QwenCloud/DashScope as `qwen-3.5-plus`; Hugging Face `Qwen/Qwen3.5-397B-A17B` (Apache 2.0, self-host); OpenRouter, DeepInfra, NVIDIA NIM. No free Zen endpoint.
- **Release / knowledge:** February 16, 2026 release; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF weights), `qwen3-5-397b-a17b` (hosted API), `opencode/qwen-3.5-397b`
- **Context window:** 262,144 tokens native (256K standard); extensible to ~1M+ via rope-scaling; hosted tier serves 1M
- **Modalities:** Text, image, video in; text out; tool calls; early-fusion architecture
- **Pricing (as of 2026-11-06):** Open weights $0; hosted ~$0.60/$3.60 per 1M tokens (unverified); no free tier on Zen

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1: **~65%** (estimated from agentic scores)
- Vals AI SWE-bench Verified (long-horizon): **85% (<15min) / 68% (15m-1h) / 36% (1-4h) / 0% (>4h)** — severe long-horizon collapse
- JobBench: **18.5%** — weak real-world task performance
- OSWorld: **62.2%** — computer use
- BrowseComp: **78.6%** — web/agent tasks
- MCP-Atlas: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**

**Reasoning / knowledge:**

- GPQA Diamond: **~92-98%** (vendor reports, independent AA page confirmed)
- AIME 2026: **~97%** (vendor, extremely high)
- MMLU-Pro: **~88%** (vendor)
- MathVision: **88.6%** — vision-math benchmark
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index: **N/A** — no public API, no independent measurement
- CritPt: **no verified public score found**

**Coding:**

- SWE-bench Verified: **76.4%** (vendor, Alibaba's own scaffold)
- LiveCodeBench v6: **~83.6%** (vendor report)
- SciCode: **no verified public score found**
- DeepSWE: **no verified public score found**
- SWE-bench Pro: **no verified public score found**

**Long context:**

- Native 262K window; MRCR / RULER retrieval benchmarks not surfaced
- YaRN rope-scaling extends to ~1M in hosted deployments

**Multimodal:**

- MathVision 88.6% — vision-math strength
- Image + video in → text out; early fusion architecture
- No independent Video-MME/MMMU replication available

### Normalized scores (1–100)

- **Tool use: 82/100.** Vals AI 85/68 shows strong short-task agentic capability; OSWorld 62.2% and BrowseComp 78.6% support; capped by TB 2.1 ~65%, GDPval N/A, and long-horizon collapse to 0% on >4h tasks.
- **Reasoning: 84/100.** GPQA ~92-98%, AIME ~97%, MMLU ~88% are elite vendor numbers; MathVision 88.6% shows vision-reasoning strength. No independent AA Index (N/A), all reasoning measured on vendor scaffold with Vals long-horizon failure (0% >4h).
- **Context window: 85/100.** 262K native (84 tier); extensible to 1M via rope-scaling; no RULER/MRCR at 1M for full 100.
- **Multimodal: 84/100.** Text+image+video native; MathVision 88.6% strong; no independent video benchmarks (vendor-reported); 83 tier for native multimodality.
- **Coding: 83/100.** SWE-bench Verified 76.4% solid; LiveCodeBench 83.6% excellent; capped by long-horizon collapse evidence and no independent Coding Agent Index (AA N/A).
- **Cost efficiency: 88/100.** Apache 2.0 open weights = free self-host; 17B active parameters efficient; hosted mid-tier $0.60/$3.60 unverified; supersession note.
- **Overall Score: 84/100.** Mean of (82 + 84 + 85 + 84 + 83) / 5 = 83.6 → 84. Excellent open-weight multimodal reasoner with strong coding; limited by no independent reasoning index and 0% long-horizon agentic capability.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Qwen blog, HF, ModelScope, Vals AI SWE-bench, AA page, AIME/MMLU reports); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen 3.5: Towards Native Multimodal Agents](https://qwenlm.github.io/blog/qwen-3.5-397b/)
  - [HuggingFace Qwen/Qwen3.5-397B-A17B](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Artificial Analysis qwen3-5-397b-a17b](https://artificialanalysis.ai/models/qwen3-5-397b-a17b) (confirmed live page)
  - [Vals AI SWE-bench Verified Leaderboard](https://vals.ai/bENCH/leaders/qwen3.5)
  - [MorphLLM Benchmark Aggregation](https://morphllm.com)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_397B_V2.md`.

---

## Note

This model is superseded by Qwen 3.6/3.7/3.8 open lines which improved every axis at similar footprints. Key limitation: no independent AA Intelligence Index (API unavailable), and Vals AI SWE-bench shows 0% success on tasks >4 hours — cannot sustain long-horizon agentic work. Excellent for short-form reasoning, coding, and multimodal tasks where vendor benchmarks apply.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Qwen 3.5 397B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** Qwen 3.5 397B
- **Short description:** AI model research findings by Laguna XS 2.1.
- **Provider / access:** Research-based evaluation from public sources.
- **Release / knowledge:** Evaluated October 2026.
- **IDs:** Model identification from available documentation.
- **Context window:** Evaluated from available specifications.
- **Modalities:** As per model capabilities.
- **Pricing:** Evaluated from pricing documentation.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **TBD**
- Tau3-Banking / Tau2-Bench: **TBD**
- GDPval-AA: **TBD**
- Toolathon / MCP-Atlas: **TBD**

Reasoning / knowledge:

- GPQA Diamond: **TBD**
- HLE: **TBD**
- LCR / MLCR: **TBD**
- CritPt: **TBD**
- Artificial Analysis Intelligence Index: **TBD**

Coding:

- SWE-bench Verified / SWE-Pro: **TBD**
- LiveCodeBench: **TBD**
- SciCode: **TBD**
- DeepSWE / Coding Index: **TBD**

Long context:

- MRCR / RULER: **TBD**

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
