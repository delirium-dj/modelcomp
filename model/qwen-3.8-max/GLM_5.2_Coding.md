# Qwen3.8 Max — findings by GLM 5.2 Coding

- Source: Alibaba (`qwen3.8-max`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's flagship open-weight MoE (Qwen3.8-2.4T-A95B per the Hugging Face card), #11 of 505 on BenchLM. Top use case: best-in-class multimodal/video understanding plus strong agents, self-hostable.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.8-max`); open weights at `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face) for self-hosting.
- **Release / knowledge:** Qwen3.8 generation, current as of 2026-09-22 (Preview was the earlier sibling); knowledge cutoff not published in the records checked.
- **IDs:** `alibaba/qwen3.8-max`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 1M tokens (BenchLM record).
- **Modalities:** Text, image, video input (Video-MME/VideoMMMU/LVBench verified); text output; reasoning model; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** Not published in the tables checked; closest tracked Qwen (Qwen3.5 397B) lists $0.60 in / $3.60 out per 1M — cost scored provisionally at that tier. Open weights allow cheaper self-hosting.
- **Architecture:** Open-weight MoE — 2.4T total / 95B active parameters (HF model card via BenchLM).

### Raw benchmarks found

> Verified via BenchLM model record (61 of 454 benchmarks covered, 2026-09-22) — the widest multimodal coverage in this dataset.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (BenchLM; Vals harness 67.4%)
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval: no verified public score found
- Toolathlon-Verified: **72.5%** (BenchLM)
- OSWorld-Verified: **86.1%**; AndroidWorld: **85.3%**; MobileWorld: **77.8%**; WebArena-Verified: **66.8%**; CoWorkBench: **74.8%**; Agents' Last Exam: **52.4%**; HLE w/ tools: **56.2%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (GPQA-D; Vals harness 93.7%)
- HLE: **43.6%** (BenchLM HLE; HLE w/o tools 43.6%)
- LCR / MLCR: no AA-LCR score found; MRCR v2: **92.9%**; LongBench v2: **66.3%** (BenchLM)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience: no verified public score found; MMLU-Pro (Vals): **88.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **85.6%** (SWE-bench Vals harness) / **67.7%** (SWE-bench Pro) (BenchLM)
- LiveCodeBench: **87.9%** (Vals harness, BenchLM)
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **56.6%** DeepSWE; FrontierSWE v1 **73.5%**; PaperBench **93.0%**; VulcanBench v3 81.2%; NL2Repo 55.9% (BenchLM)

Long context:

- 1M window verified with MRCR v2 **92.9%** and LongBench v2 **66.3%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 86.6%, Toolathlon 72.5%, OSWorld-Verified 86.1% and AndroidWorld 85.3% are frontier-grade device/web-agent scores; capped by TB2.1 Vals 67.4% and missing GDPval/Tau3 evidence.
- **Reasoning: 84/100.** GPQA 93.7% (Vals), HLE 43.6% and MMLU-Pro 88.6% clear the refs; capped by no public AA Index/CritPt numbers.
- **Context window: 100/100.** Verified 1M window with MRCR v2 92.9% = top tier (≥1M) with receipts.
- **Multimodal: 90/100.** Text + image + video input, text-only output — the strongest grounded suite here: MathVision 95.2%, CharXiv 93.5%, OmniDoc 92.1%, Video-MME 90.4%, MLVU 90.8%; no speech input.
- **Coding: 85/100.** LiveCodeBench 87.9%, SWE Vals 85.6%, FrontierSWE 73.5%, PaperBench 93.0%; capped by DeepSWE 56.6% and SWE Pro 67.7%.
- **Cost efficiency: 88/100.** Provisional: Qwen top-tier list pricing (~$0.60/$3.60) is a fraction of Western flagships, and the open weights make self-hosting viable at cost.
- **Overall Score: 88.6/100.** (84+84+100+90+85)/5 — the open-weight multimodal/agent champion: GPT-class video+document understanding at a tenth of flagship price.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + HF model card + Alibaba pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
