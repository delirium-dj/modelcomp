# MiMo V2.6 Distill Qwen 9B — findings by Beam

- Source: Xiaomi/MiMo V2.6 Distill Qwen 9B, `xiaomimimo/mimo-v2.6-distill-qwen-9b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's distilled 9B model (Sep 2026): SFT of Qwen3.5-9B on MiMo-generated data. SWE-bench Verified 61.1% (SFT), 66.2% (RL). SWE-bench Pro 44.6% (SFT), 47.6% (RL). AutomationBench 30.3%, Terminal Bench 2.1 37.1%. Open weights (Apache 2.0). Free.
- **Provider / access:** HuggingFace `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`; Ollama; OpenRouter.
- **Release / knowledge:** Released 2026-09 (SFT checkpoint); knowledge cutoff not stated.
- **IDs:** `xiaomimimo/mimo-v2.6-distill-qwen-9b`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** 9B params (distilled from Qwen3.5-9B), hybrid Gated DeltaNet + full attention, Apache 2.0. SFT checkpoint (starting point for RL).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- AutomationBench v1.0.6: **30.3%** (MiMo technical report)
- Terminal Bench 2.1: **37.1%** (MiMo technical report)
- Toolathlon-Verified: **35.2%** (MiMo technical report)
- OfficeQA: **19.5%** (MiMo technical report)
- JobBench: **18.3%** (MiMo technical report)
- MiMo General (mini): **62.2%** (MiMo technical report)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: not reported
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **61.1%** (SFT) / **66.2%** (RL) (MiMo technical report)
- SWE-bench Pro: **44.6%** (SFT) / **47.6%** (RL) (MiMo technical report)
- MiMo Code Bench (mini): **51.6%** (SFT) / **59.9%** (RL) (MiMo technical report)
- MiMo Cyber Bench (mini): **31.3%** (SFT) / **47.0%** (RL) (MiMo technical report)

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Text/image in; MiMo Visual Coding (mini) **64.0%** (MiMo technical report).

### Normalized scores (1–100)

- **Tool use: 60/100.** AutomationBench 30.3%, Terminal Bench 2.1 37.1%, Toolathlon 35.2%, OfficeQA 19.5%, JobBench 18.3%; caps at JobBench 18.3%.
- **Reasoning: 56/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 62/100.** Text/image in; MiMo Visual Coding 64.0%; caps at no published MMMU-Pro.
- **Coding: 62/100.** SWE-bench 61.1%/66.2%, SWE-bench Pro 44.6%/47.6%, MiMo Code 51.6%/59.9%; caps at SWE-bench Pro 44.6%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 60.8/100.** Mean of five quality dims (BenchLM not computed); best-fit for local agentic at zero cost. Improves on Qwen3.5-9B base (SWE-bench 60.0% → 61.1%).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (MiMo official HuggingFace, arXiv technical report, Ollama); scores are normalized 1–100 interpretations, not official vendor scores. SFT checkpoint (starting point for RL). Multi-harness RL further improves all 21 dataset-harness pairs.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Apache 2.0 open weights.<|end|>>2>