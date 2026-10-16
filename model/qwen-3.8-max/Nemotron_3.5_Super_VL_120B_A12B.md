# Qwen3.8 Max — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-8-max (Qwen release benchmarks at qwen.ai), Alibaba Cloud press release, Artificial Analysis (`artificialanalysis.ai/models/qwen3-8-max`), llm-stats.com, Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's largest and most capable Qwen flagship (released 3 Aug 2026 per press; AA lists 0902 variant released Sept 2026), 2.4-trillion-parameter MoE (95B active per HF model card) for coding, real-life work, research, long-horizon tasks; up to 1M-token context, multimodal.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.8-max`), Qwen API (`qwen3.8-max`), open-weight checkpoints `Qwen3.8-2.4T-A95B` and FP8 on Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`) per benchlm.ai; AA lists the 0902 API variant as proprietary with undisclosed parameter count — conflicting with the open-weight HF card. Sibling: Qwen3.8 Max Preview.
- **Release / knowledge:** Announced 2026-08-03; AA variant 0902 released Sept 2026; knowledge cutoff not stated.
- **IDs:** `qwen3.8-max` (Alibaba Cloud Model Studio / Qwen API); `Qwen/Qwen3.8-2.4T-A95B` (HF open weights). No Free ID confirmed.
- **Context window:** Up to 1M tokens (benchlm.ai, Alibaba press, llm-stats); AA lists 984k/980k for the 0902 API variant — conflicting figure.
- **Modalities:** Text and image in (Alibaba press + AA); text out; reasoning yes (explicit reasoning mode); tool use yes (agentic workflows, computer/office); JSON/structured output not explicitly advertised. llm-stats also lists video/audio input — not corroborated by AA (text+image only).
- **Pricing (as of 2026-10-16):** Conflicting: llm-stats $1.65 input / $0.206 cached / $4.95 output; useright.ai $2/$6; AA $2/$6 with 88% cache discount, cost per task $5.41.
- **Architecture:** Open-weight MoE per benchlm.ai (2.4T total / 95B active) vs proprietary per AA (params undisclosed); reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen release benchmarks); AA/Vals **67.4%**
- CoWorkBench: **74.8%** (Qwen release benchmarks)
- JobBench: **53.4%** (Qwen release benchmarks)
- skillsBench: **70.2%** (Qwen release benchmarks)
- Agents' Last Exam: **52.4%** (Qwen release benchmarks)
- AutomationBench: **27.3%** (Qwen release benchmarks)
- Toolathlon-Verified: **72.5%** (Qwen release benchmarks)
- WideResearch: **81.9%** (Qwen release benchmarks)
- HLE w/ tools: **56.2%** (Qwen release benchmarks)
- OSWorld-Verified: **86.1%** (Qwen release benchmarks); OSWorld 2.0 **19.4%**
- WebArena-Verified: **66.8%** (Qwen release benchmarks)
- AndroidWorld: **85.3%**; MobileWorld: **77.8%** (Qwen release benchmarks)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **45** (#33/217; median 27) (Artificial Analysis)
- GPQA: **92.6%**; GPQA-D: **92.6%** (Qwen release benchmarks); Vals GPQA Diamond **93.7%**
- HLE: **43.6%**; HLE w/o tools **43.6%** (Qwen release benchmarks)
- MMLU-Pro: **88.6%** (Vals AI)
- MRCRv2: **92.9%** (Qwen release benchmarks)
- LongBench v2: **66.3%** (Qwen release benchmarks)
- FrontierMath v2 Tiers 1-3: **74.737%**; Tier 4: **46.341%** (Epoch AI)

Coding:

- SWE-bench Pro: **67.7%** (Qwen release benchmarks)
- DeepSWE: **56.6%** (Qwen release benchmarks)
- FrontierSWE: **73.5%** (Qwen release benchmarks); FrontierSWE v2: **15.8%** (Proximal)
- PaperBench: **93.0%** (Qwen release benchmarks)
- LiveCodeBench (Vals): **87.9%** (Vals AI)
- SWE-bench (Vals): **85.6%** (Vals AI)
- QwenReactBench: **1724** (Qwen release benchmarks)
- Bug Hunt Bench: **25.7 fixes** (public data)

Multimodal & grounded:

- MMMU-Pro: **82.3%**; MathVision: **95.2%**; MathVision w/ Python **97.7%**; BabyVision: **82.0%**; ScreenSpot Pro: **84.5%**; CharXiv: **93.5%** / w/o tools **88.4%**; OmniDocBench 1.5: **92.1%**; Video-MME w/ subtitle: **90.4%**; VideoMMMU: **88.7%**; MLVU M-Avg: **90.8%**; LVBench: **81.8%**; RealWorldQA: **88.0%**; OCRBench V2: **74.2%** (all Qwen release benchmarks)
- Very strong multimodal profile across vision/video/OCR/document benchmarks.

Long context:

- MRCRv2: **92.9%**; LongBench v2: **66.3%**; declared up to 1M context (984k per AA); capped because no public full-depth needle-recall score at the full window beyond MRCRv2.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 83/100.** Leading OSWorld-Verified (86.1), Terminal-Bench 2.1 (86.6), WideResearch (81.9), AndroidWorld (85.3), Toolathlon-Verified (72.5); capped by weak AutomationBench (27.3), OSWorld 2.0 (19.4), Agents' Last Exam (52.4). Top-tier general agent/computer-use profile.
- **Reasoning: 80/100.** GPQA 92.6%, MRCRv2 92.9%, MMLU-Pro 88.6%, FrontierMath T1-3 74.7%, AA Intelligence Index 45; capped by HLE (43.6%), LongBench v2 (66.3%), AA-Omniscience not found for this model. Strong knowledge/retrieval reasoning.
- **Context window: 88/100.** Verified up to 1M (benchlm.ai + Alibaba press; AA 984k for 0902 variant — conflicting); MRCRv2 92.9% shows strong retrieval; capped because no public full-depth recall score at the full 1M window.
- **Multimodal: 90/100.** Exceptionally broad: MathVision 95.2/97.7, Video-MME 90.4, VideoMMMU 88.7, CharXiv 93.5, MMMU-Pro 82.3, ScreenSpot Pro 84.5, OmniDocBench 92.1; capped by text-only output.
- **Coding: 78/100.** LiveCodeBench Vals 87.9%, SWE-bench Vals 85.6%, FrontierSWE 73.5%, PaperBench 93.0%; capped by SWE-bench Pro (67.7), DeepSWE (56.6), FrontierSWE v2 (15.8). Strong competitive/research coding, weaker on agentic SWE-Pro and extended SWE.
- **Cost efficiency: 75/100.** Moderate pricing ($1.65–$2 / $4.95–$6) with 88% cache discount; open weights available (self-host ~$0); not counted toward Overall.
- **Overall Score: 84/100.** Half-up mean of (83 + 80 + 88 + 90 + 78) / 5 = 83.8 → 84. Best-fit recommendation: top-tier multimodal + general agent model; strongest vision/video/document profile in the cohort; verify agentic SWE tasks given mixed AutomationBench/SWE-Pro results.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Qwen release benchmarks + Artificial Analysis + Alibaba press + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
