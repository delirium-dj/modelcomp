# Xing 4.0 29B-A4B — findings by Muse Spark 1.3

- Source: ChinaTelecom/Xing 4.0 29B-A4B, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom's open-weight 29B/4B-active MoE (64 routed + 1 shared expert, mHC+MLA+MTP) for single-GPU (15GB) agentic work; first of its scale trained on Ascend 910C NPUs.
- **Provider / access:** Hugging Face `XingChen-AGI/Xing-4.0-29B-A4B` + GitHub; vLLM/SGLang/KTransformers; OpenCode Zen `opencode/xing_4.0_29b_a4b`.
- **Release / knowledge:** 2026-09-23/24 (TechCrunch press release); cutoff not disclosed
- **IDs:** `opencode/xing_4.0_29b_a4b` (Free promotional Zen tier exists per repo metadata)
- **Context window:** 256,000 native (extensible to 512,000 via YaRN) — verified via press release + MindStudio
- **Modalities:** text in; text out only; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-17):** Free promotional Zen tier; Apache 2.0 self-host free; $0 scored
- **Architecture:** 29B total / 4B active MoE (64 routed experts, 4 active/token); Ascend-910C/MindSpore trained; Apache 2.0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.50%** (MindStudio — leads Qwen3.6-35B class lane)
- Claw-Eval: **76.55%** (MindStudio — leads Gemma4-26B/Qwen3.6 lane)
- Tau3-Bench: **trails Qwen3.6-35B-A3B** (MindStudio — absolute not quoted, provisional)
- BrowseComp / MCP-Atlas / GDPval: **no verified public score found**


Reasoning / knowledge:

- AA-LCR: **61.00** (MindStudio — weakest relative lane vs both competitors)
- IFBench: **splits vs Qwen3.6** (MindStudio — absolute not quoted, provisional)
- AIME2026: **trails Qwen3.6-35B** (MindStudio — absolute not quoted, provisional)
- GPQA / HLE / CritPt / Omniscience: **no verified public score found**
- DeepresearchBII: **leads Qwen3.6 lane** (MindStudio — absolute not quoted, provisional)

Coding:

- SWE-bench Verified: **75.00** (MindStudio + press release — top of 29B class; vs Gemma4-26B 53.00, Qwen3.6 76.00)
- SWE-bench Multilingual: **66.00** (MindStudio — vs Gemma4 51.00, Qwen3.6 67.20)
- LiveCodeBench / SciCode / DeepSWE / Vibe: **no verified public score found**

Long context:

- **256K native verified (512K extensible via YaRN); Claw-Eval + DeepresearchBII run at full 256K — long-context agent use verified by harness**

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.1 57.5% plus Claw-Eval 76.55% (both lane-leading); capped with no Tau absolute, no MCP/BrowseComp/GDPval numbers.
- **Reasoning: 66/100.** Deepresearch lead plus IFBench split; capped hard by LCR 61.00 weakness and no GPQA/HLE/CritPt absolutes.
- **Context window: 72/100.** 256K native (512K extensible) verified; mid tier.
- **Multimodal: 15/100.** Text in/out only; no image/video/audio.
- **Coding: 80/100.** SWE-Verified 75.00 (class top) plus Multilingual 66.00; capped with no LiveCode/SciCode/DeepSWE/Vibe absolutes.
- **Cost efficiency: 100/100.** Free Zen promo + Apache 2.0 self-host free ($0).
- **Overall Score: 61/100.** Mean (74+66+72+15+80)/5 = 307/5 = 61.4 → 61; best-fit single-GPU local agent pick where multimodal 15 caps the mean.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (China Telecom press release 2026-09-23, MindStudio independent benchmark review 2026-09-18); normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
