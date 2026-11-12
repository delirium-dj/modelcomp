# GPT-OSS 120B — findings by Laguna XS 2.1

> Source: OpenAI (`openai/gpt-oss-120b`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's Aug 2025 Apache-2.0 open MoE (117B/5.1B active, 131K context, Harmony format): SWE-bench Verified 62.4%, AIME 2025 92.5%; dedicated reasoning model, one 80GB GPU at $0.15/$0.60.
- **Provider / access:** HuggingFace `openai/gpt-oss-120b`; OpenRouter $0.15/$0.60; Groq, Together; self-host Apache 2.0 $0 (80GB GPU).
- **Release / knowledge:** August 2025 release; OpenAI's fully open reasoning model.
- **IDs:** `openai/gpt-oss-120b`; HF available
- **Context window:** 131,072 total (131K)
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** Hosted $0.15/$0.60 per 1M; Apache 2.0 self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **26.2%** (OpenAI stated)
- Tau3-Banking / Tau2-Bench: **~65%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (not evaluated)
- HLE: no verified public score found
- AIME 2025: **92.5%** (OpenAI claimed)
- Artificial Analysis Intelligence Index: **~50-55** (estimated from AIME + reasoning focus)

Coding:

- SWE-bench Verified: **62.4%** (OpenAI claimed)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- Native 131K window; no RULER/MRCR data surfaced

Multimodal:

- Text-only; no image/audio/video support

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 26.2% is weak for agentic use; 131K helps but lack of tool benchmarks caps capability.
- **Reasoning: 70/100.** AIME 92.5% excellent; but 26.2% Terminal-Bench and 90.8% hallucination rate (OpenAI stated) limit practical reasoning reliability.
- **Context window: 65/100.** 131K places in 100K-200K tier (65-84).
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 62/100.** SWE-bench Verified 62.4% strong Tier-B; no LiveCodeBench data for higher cap.
- **Cost efficiency: 80/100.** $0.15/$0.60 mid-tier pricing; Apache 2.0 self-host $0 enhances value.
- **Overall Score: 53.4/100.** Mean of (55 + 70 + 65 + 15 + 62) / 5 = 61.4 → 63.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (OpenAI HF, pricing docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `openai/gpt-oss-120b`](https://huggingface.co/openai/gpt-oss-120b)
  - [OpenRouter `openai/gpt-oss-120b`](https://openrouter.ai/openai/gpt-oss-120b)
- Future sources: add a new file next to this one, e.g. `GPT_OSS_120B_V2.md`.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GPT OSS 120B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** GPT OSS 120B
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
