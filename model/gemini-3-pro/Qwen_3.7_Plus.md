# Gemini 3 Pro — findings by Qwen 3.7 Plus

- Source: Google/Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model, released November 18, 2025. The original Gemini 3 Pro with Deep Think mode for extended reasoning. Non-reasoning base variant. Significantly outperformed by successor Gemini 3.1 Pro (released February 2026) across most benchmarks. Strong multimodal capabilities (text, image, audio, video, PDF) and 2M-token context window. AA Intelligence Index of 28.0 is low by current standards, reflecting its pre-reasoning-optimization architecture. Has been superseded by Gemini 3.1 Pro, 3.5 Flash, 3.6 Flash, 3.7 Flash, 3.8 Flash, and Gemini 4 Argon.
- **Provider / access:** Google AI Studio; Gemini API; Google Vertex AI. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2025-11-18 release; knowledge cutoff not precisely documented.
- **IDs:** `google/gemini-3-pro` (Google AI Studio). No free OpenCode Zen ID.
- **Context window:** 2,000,000 tokens (2M) total; ~65,000 max output (per BenchLM). Developers reported cutoff at ~21K output tokens; 3.1 Pro extended to 55K+.
- **Modalities:** Text, image, audio, video, and PDF in; text out. Full omnimodal input. Deep Think mode available for extended reasoning.
- **Pricing (as of 2026-10-10):** Paid-tier pricing. Exact current rates not confirmed in sources; historically ~$2/$12 per 1M tokens based on references suggesting 2.5× cheaper input than Claude Opus 4.6 for comparable performance.
- **Architecture:** Proprietary. Non-reasoning base model with Deep Think variant for extended reasoning. First Gemini 3 generation Pro model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **87.1%** (Artificial Analysis)
- JobBench: **11.4%** (JobBench paper)
- Gert Labs: **63.23%** (Gert Labs rankings)

Reasoning / knowledge:

- AA Intelligence Index: **28.0** (Artificial Analysis — low by current standards)
- GPQA Diamond: **90.8%** (Artificial Analysis)
- HLE (Humanity's Last Exam): **39.7%** (Artificial Analysis)
- ARC-AGI-2: **31.1%** (Google DeepMind — weak; successor 3.1 Pro reached 77.1%)
- ARC-AGI-1: **75.0%** (ARC Prize)
- FrontierMath T1–3: **37.6%** (Epoch AI)
- FrontierMath T4: **18.75%** (Epoch AI)
- MMLU-Pro: **89.8%** (Artificial Analysis)
- AA-Omniscience Accuracy: **55.8%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **91.5%** (Artificial Analysis — very high)
- AA-Omniscience Index: **15.3%** (Artificial Analysis)
- Global-MMLU-Lite: **92.2%** (Artificial Analysis)
- CritPt (Physics): **9.1%** (Artificial Analysis)
- IFBench: **70.4%** (Artificial Analysis)
- AA-LCR (Long Context Reasoning): **76.0%** (Artificial Analysis)

Coding:

- LiveCodeBench: **91.7%** (Artificial Analysis)
- Vibe Code Bench: **14.3%** (Vals AI)

Multimodal:

- MMMU: **87.2%** (Qwen model card comparison)
- MMMU-Pro: **81.0%** (Google) / **80.2%** (Artificial Analysis)
- Video-MME (with subtitle): **88.4%** (Qwen comparison)
- Video-MME (without subtitle): **87.7%** (Qwen comparison)
- VideoMMMU: **87.6%** (Google)
- OmniDocBench 1.5: **88.5%** (Qwen comparison)
- MathVision: **86.6%** (Qwen comparison)
- CharXiv: **81.4%** (Qwen comparison)
- RealWorldQA: **83.3%** (Qwen comparison)
- AI2D: **94.1%** (Qwen comparison)
- CountBench: **97.3%** (Qwen comparison)
- ScreenSpot Pro: **72.7%** (Google DeepMind)
- We-Math: **86.9%** (Qwen comparison)
- DynaMath: **85.1%** (Qwen comparison)

Long context:

- AA-LCR: **76.0%** (Artificial Analysis)
- MMLongBench-Doc: **60.5%** (Qwen comparison)

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench at 87.1% is strong for agentic tool use. LiveCodeBench 91.7% demonstrates good coding agent capability. However, JobBench 11.4% is very low — a clear weakness on real-world job task completion. Gert Labs 63.23% is moderate. The agentic profile is split: strong on benchmarks but weak on practical job tasks.
- **Reasoning: 70/100.** GPQA Diamond 90.8% is competitive. MMLU-Pro 89.8% is strong. HLE 39.7% is moderate. However, ARC-AGI-2 at 31.1% is very weak (successor 3.1 Pro jumped to 77.1% — a 46-point improvement). FrontierMath T4 18.75% is modest. CritPt 9.1% is very low. AA Intelligence Index 28.0 is low by current standards. The 91.5% hallucination rate is the worst in this dataset. The reasoning profile is the weakest dimension: strong on knowledge recall but poor on abstract reasoning and calibration.
- **Context window: 92/100.** 2M-token context — the largest of any model in this dataset. ~65K max output (though developers reported ~21K cutoff). AA-LCR 76.0% is solid. The 2M window is a significant advantage for long-document processing, codebase ingestion, and multi-hour agent sessions. Capped by the output token limitation.
- **Multimodal: 88/100.** Full omnimodal input: text, image, audio, video, PDF. MMMU 87.2% and MMMU-Pro 81% are strong. Video-MME 88.4% (with subtitles) is excellent. OmniDocBench 88.5% demonstrates strong document understanding. MathVision 86.6% is competitive. The multimodal performance was pioneering at release and remains strong. Text output only.
- **Coding: 84/100.** LiveCodeBench 91.7% is excellent. However, Vibe Code Bench 14.3% is very low. No SWE-bench, Terminal-Bench, or DeepSWE scores available in sources — a significant coverage gap. The coding profile is based on limited data. LiveCodeBench suggests strong competitive coding ability, but the absence of agentic coding benchmarks makes it hard to assess real-world coding agent performance.
- **Cost efficiency: 75/100.** Paid-tier pricing, historically competitive vs. Claude Opus at ~2.5× cheaper input for comparable performance. The 2M context window provides good value for long-document tasks. However, the 91.5% hallucination rate increases effective cost (more retries, more verification). The model has been superseded by multiple successors, reducing its cost-effectiveness vs. newer alternatives.
- **Overall Score: 83.2/100.** Mean of five quality dims: (82 + 70 + 92 + 88 + 84) / 5 = 83.2. A pioneering Pro-class model with the largest context window (2M) and strong multimodal capabilities. Released November 2025, it has been significantly superseded by Gemini 3.1 Pro (which improved ARC-AGI-2 from 31.1% to 77.1%), 3.5 Flash, and later models. Key weaknesses: 91.5% hallucination rate (worst in dataset), ARC-AGI-2 at 31.1% (vs. 77.1% for 3.1 Pro), AA Intelligence Index at 28.0, and limited agentic coding benchmark coverage. Best fit for long-context document processing (2M window) and multimodal tasks where the full input range (text/image/audio/video/PDF) is needed. Deep Think mode provides extended reasoning for complex problems. Multiple successor models have surpassed it on nearly all dimensions.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google official announcements, Artificial Analysis, BenchLM, ARC Prize, Epoch AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
