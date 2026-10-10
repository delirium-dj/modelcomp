# Qwen 3.8 Max — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen 3.8 Max (`alibaba/qwen3-8-max`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter sparse MoE model (95B active per token), released August 2–3, 2026. Built on Qwen 3.5 architecture. 1M context with 131K output. Multimodal: text, image, video in; text out. Open weights. Exceptional multimodal performance: MathVision 95.2%, OmniDocBench 92.1%, Video-MME 90.4%, CharXiv 93.5%. PaperBench 93.0% is best-in-class. Terminal-Bench 2.1 at 86.6% beats both Opus 4.8 and Fable 5 (per Alibaba's vendor-run table). IFBench 82.8% leads all models by 10+ points. However, most benchmarks are vendor-run (Alibaba evaluated its own model and competitors'), and independent evaluations (AA Intelligence Index, AA Coding Index) were not yet published as of research date. HLE 43.6% trails all four flagships. DeepSWE 56.6% and SWE-bench Pro 67.7% are mid-pack. Very affordable at $2/$6 per 1M tokens.
- **Provider / access:** Alibaba Cloud Model Studio; OpenAI-compatible and Anthropic-compatible APIs. Paid only. One-time 1M-token free quota. No OpenCode Zen ID.
- **Release / knowledge:** 2026-08-02 release; knowledge cutoff not precisely documented.
- **IDs:** `alibaba/qwen3-8-max` (Alibaba Cloud). Open weights: `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face). No free OpenCode Zen ID.
- **Context window:** 1,000,000 tokens (1M) total; 131,072 (131K) max output.
- **Modalities:** Text, image, and video in; text out. No audio input. Reasoning: yes (default effort: xhigh). Tool calls supported. Anthropic-compatible API for agent harness integration.
- **Pricing (as of 2026-10-10):** $2.00/$6.00 per 1M input/output tokens. One-time 1M-token free quota. Among the most affordable frontier-class models. Open weights available for self-hosting.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Alibaba; vs Opus 4.8 84.6%, Fable 5 84.6%, GPT-5.6 Sol 88.8%) / **67.4%** (Vals AI — significant discrepancy)
- OSWorld-Verified: **86.1%** (Alibaba)
- OSWorld 2.0: **19.4%** (Alibaba — harder version)
- AndroidWorld: **85.3%** (Alibaba)
- CoWorkBench: **74.8%** (Alibaba — in-house)
- Toolathlon-Verified: **72.5%** (Alibaba)
- WideResearch: **81.9%** (Alibaba)
- MobileWorld: **77.8%** (Alibaba)
- SkillsBench: **70.2%** (Alibaba — in-house)
- WebArena-Verified: **66.8%** (Alibaba)
- JobBench: **53.4%** (Alibaba)
- Agents' Last Exam: **52.4%** (Alibaba)
- AutomationBench: **27.3%** (Alibaba)

Coding:

- PaperBench: **93.0%** (Alibaba; best-in-class; vs GPT-5.6 Sol 90.5%, Fable 5 88.8%, Opus 4.8 80.3%)
- Terminal-Bench 2.1: **86.6%** (Alibaba)
- SWE-bench Pro: **67.7%** (Alibaba; vs Fable 5 80.0%, Opus 4.8 69.2%, GPT-5.6 Sol 64.6%)
- FrontierSWE: **73.5%** (Alibaba)
- DeepSWE: **56.6%** (Alibaba — trails frontier)
- LiveCodeBench (Vals): **87.9%** (Vals AI)
- SWE-bench (Vals): **85.6%** (Vals AI)
- VulcanBench v3: **81.2%** (VulcanBench)
- NL2Repo: **55.9%** (Alibaba — in-house)
- MLS-Bench Lite: **41.0%** (Alibaba)
- FrontierSWE v2: **15.8%** (Proximal — very low)
- OpenHarmony Bench: **60.8%** (OpenHarmony)
- Bug Hunt Bench: **25.7 fixes** (Bug Hunt Bench)
- QwenReactBench: **1724** (Alibaba — in-house)

Multimodal:

- MathVision: **95.2%** (Alibaba) / **97.7%** (with Python)
- CharXiv: **93.5%** (Alibaba) / **88.4%** (without tools)
- OmniDocBench 1.5: **92.1%** (Alibaba — best-in-class)
- Video-MME (with subtitle): **90.4%** (Alibaba)
- VideoMMMU: **88.7%** (Alibaba)
- MLVU (M-Avg): **90.8%** (Alibaba)
- ScreenSpot Pro: **84.5%** (Alibaba)
- RealWorldQA: **88.0%** (Alibaba)
- BabyVision: **82.0%** / **91.3%** (with Python)
- MedXpertQA (MM): **80.4%** (Alibaba)
- LVBench: **81.8%** (Alibaba)
- MMVU: **82.4%** (Alibaba)
- OCRBench V2: **74.2%** (Alibaba)
- CC-OCR: **79.6%** (Alibaba)
- ERQA: **77.8%** (Alibaba)
- PerceptionBench: **63.5%** (Alibaba)
- Vision2Web: **69.0%** (Alibaba)
- ZeroBench: **24.0%** / **49.0%** (with Python)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Alibaba) / **93.7%** (Vals AI)
- HLE (with tools): **56.2%** (Alibaba) / **43.6%** (Alibaba vendor table; vs Fable 5 53.3%, GPT-5.6 Sol 47.2%)
- MMLU-Pro: **88.6%** (Vals AI)
- MRCRv2: **92.9%** (Alibaba — long context reasoning)
- LongBench v2: **66.3%** (Alibaba)
- IFBench: **82.8%** (Alibaba; vs GPT-5.6 Sol 72.7%, Fable 5 63.5%, Opus 4.8 62.2% — leads by 10+ pts)

Long context:

- MRCRv2: **92.9%** (Alibaba)
- LongBench v2: **66.3%** (Alibaba)

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 at 86.6% (Alibaba) beats Opus 4.8 and Fable 5 (both 84.6%), though GPT-5.6 Sol leads at 88.8%. OSWorld-Verified 86.1% is strong. AndroidWorld 85.3% is excellent for mobile agent tasks. WideResearch 81.9% is solid. However, the Vals AI Terminal-Bench score of 67.4% is dramatically lower than Alibaba's 86.6% — a 19-point discrepancy that raises questions about harness sensitivity. AutomationBench 27.3% is low. Agents' Last Exam 52.4% is moderate. The agentic profile is strong on computer use and terminal tasks but weaker on automation and open-ended agent work.
- **Reasoning: 73/100.** GPQA Diamond 92.6–93.7% is excellent. MRCRv2 92.9% is outstanding for long-context reasoning. IFBench 82.8% leads all models by 10+ points — instruction following is a durable Qwen strength. MMLU-Pro 88.6% is strong. However, HLE 43.6% is last among the four flagships (Fable 5 53.3%, GPT-5.6 Sol 47.2%, Opus 4.8 45.7%). No AA Intelligence Index published. No ARC-AGI scores. No FrontierMath scores. The reasoning profile is strong on instruction following and knowledge recall but weak on the hardest reasoning tasks (HLE). Significant benchmark coverage gaps make comprehensive assessment difficult.
- **Context window: 88/100.** 1M tokens total with 131K max output — the output window is slightly larger than most competitors (128K). MRCRv2 92.9% is excellent for long-context reasoning. LongBench v2 66.3% is moderate. No long-context pricing surcharge. The 1M context is well-implemented and available at standard pricing. Strong for long-document processing, multi-hour agent sessions, and large codebase ingestion.
- **Multimodal: 90/100.** MathVision 95.2% (97.7% with Python) is exceptional. OmniDocBench 92.1% is best-in-class. CharXiv 93.5% is excellent. Video-MME 90.4%, VideoMMMU 88.7%, MLVU 90.8% — strong across all video understanding benchmarks. ScreenSpot Pro 84.5% is excellent for UI grounding. RealWorldQA 88.0% is strong. Text, image, AND video input — broader modality support than Claude models (text+image only). The multimodal profile is the strongest dimension: a genuine sweep across document understanding, math vision, video comprehension, and UI grounding. No audio input.
- **Coding: 75/100.** PaperBench 93.0% is best-in-class (reproducing research paper results). Terminal-Bench 2.1 86.6% (Alibaba) beats Opus 4.8 and Fable 5. LiveCodeBench 87.9% (Vals) is competitive. SWE-bench (Vals) 85.6% is strong. SWE-bench Pro 67.7% is mid-pack (trails Fable 5 by 12 pts). However, DeepSWE 56.6% trails the frontier significantly. FrontierSWE v2 15.8% is very low. The Vals Terminal-Bench at 67.4% raises questions about the vendor-reported 86.6%. Most coding benchmarks were run inside Claude Code (Anthropic's harness) — harness-sensitive results. The coding profile is split: strong on terminal tasks and paper reproduction, but weak on deep software engineering (DeepSWE, FrontierSWE v2).
- **Cost efficiency: 88/100.** $2/$6 per 1M tokens is among the most affordable frontier-class pricing — significantly cheaper than Fable 5 ($10/$50), GPT-5.6 Sol ($5/$30), and Opus 4.8 ($5/$25). Open weights available for self-hosting (2.4T MoE, 95B active — requires significant hardware but eliminates per-token costs). One-time 1M-token free quota. Anthropic-compatible API enables use with existing Claude Code workflows. The cost-performance ratio is excellent: competitive-with-frontier performance at a fraction of the cost.
- **Overall Score: 82/100.** Mean of five quality dims: (84 + 73 + 88 + 90 + 75) / 5 = 82.0. Alibaba's largest and most capable model. Key strengths: exceptional multimodal performance (MathVision 95.2%, OmniDocBench 92.1%, video benchmarks 88–90%), PaperBench 93.0% (best-in-class), IFBench 82.8% (leads by 10+ pts), Terminal-Bench 86.6% (beats Opus 4.8/Fable 5 per vendor table), very affordable ($2/$6), open weights. Key weaknesses: HLE 43.6% (last among four flagships), DeepSWE 56.6% (trails frontier), FrontierSWE v2 15.8% (very low), Terminal-Bench discrepancy (86.6% vendor vs. 67.4% Vals), most benchmarks are vendor-run (not independently verified), no AA Intelligence Index published. Best fit for: multimodal workflows (document understanding, video analysis, math vision), cost-sensitive deployments needing frontier-class multimodal capability, teams wanting open weights for self-hosting, and instruction-following-heavy workflows. Not ideal for: deep software engineering (DeepSWE, FrontierSWE v2), broad-knowledge reasoning (HLE), or teams requiring independently verified benchmarks.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Qwen official blog, Artificial Analysis, BenchLM, Vals AI, Apidog, Proximal, VulcanBench, OpenHarmony, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores. Note: most published benchmarks for this model are vendor-run (Alibaba); independent evaluations were not yet available.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
