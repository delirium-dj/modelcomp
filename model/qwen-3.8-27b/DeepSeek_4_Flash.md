# Qwen3.8-27B — findings by DeepSeek 4 Flash

- Source: Alibaba/Qwen3.8-27B
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B vision-language open-weights model with image/video understanding and strong agentic/long-horizon coding at a small footprint.
- **Provider / access:** open weights (Apache-2.0) via Hugging Face/providers; no Zen Free ID.
- **Release / knowledge:** Qwen3.8 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.8-27B`
- **Context window:** 262,144 native (extensible to 1M with YaRN) — verified from curated metadata/BenchLM.
- **Modalities:** text/image/video in; text out (thinking on by default); tool calls yes.
- **Pricing (as of 2026-10-01):** open weights — self-hosting free; API provider pricing varies.
- **Architecture:** dense 27B open-weights vision-language model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Alibaba); Vals **58.4%**; AA **79.8%**; AA Terminal-Bench 4.0 **5.6%**
- OSWorld-Verified **84.3%**; AndroidWorld **81.9%**; WebArena-Verified **64.8%**
- CoWorkBench **70.7%**; AA Agentic Index **46.5%**; GDPval-AA **1411 Elo**
- AA Tau3 Banking **48.0%**; AA EnterpriseOps-Gym **44.2%**; Agents' Last Exam **42.9%**; JobBench **33.4%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Alibaba); AA 90.5%; Vals 88.9%
- HLE: **30.8%** (Alibaba); AA-HLE **33.9%**
- AA-LCR **82.0%**; CritPt **5.4%**; MLCR-AA **21.7%**; AA Index **33.7%**
- AA-Omniscience Accuracy / Hallucination Rate: **15.6% / 30.3%** (negative Omniscience Index −10.0)
- MMLU-Pro (Vals) **84.3%**; IFBench **79.5%**

Coding:

- SWE-bench Verified (Vals) **86.0%**; SWE-bench Pro **61.7%**
- LiveCodeBench v6 **90.3%**; AA-SciCode **46.6%**; AA Coding Index **68.1%**; DeepSWE **42.2%**; NL2Repo **42.3%**

Long context:

- AA-LCR 82.0%; no public MRCR full-window number found

Multimodal:

- MathVision **90.0%** (w/ Python 94.6%); CharXiv **83.7%** (w/ tools 90.2%); OmniDocBench 1.5 **91.1%**; AA-MMMU-Pro **76.3%**; RealWorldQA **85.9%**

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 73%, OSWorld-Verified 84.3%, AndroidWorld 81.9% and AA Agentic Index 46.5% are strong for a 27B model.
- **Reasoning: 74/100.** GPQA 89.2% and LCR 82% are good; AA Index 33.7%, HLE 30.8% and CritPt 5.4% are mid.
- **Context window: 75/100.** 262K native (1M with YaRN) with AA-LCR 82%.
- **Multimodal: 88/100.** text/image/video in with MathVision 90% and OmniDocBench 91.1%.
- **Coding: 82/100.** SWE Verified 86% and LiveCode v6 90.3% are strong; DeepSWE 42.2% and SciCode 46.6% trail.
- **Cost efficiency: 90/100.** Open weights make self-hosting cheap; API pricing varies.
- **Overall Score: 81/100.** Mean of (86 + 74 + 75 + 88 + 82) / 5 = 81.0 → 81. Best-fit: self-hosted compact multimodal agent/coder.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Alibaba, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
