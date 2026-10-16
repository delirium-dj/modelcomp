# DeepSeek V4 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/deepseek-v4-pro-0813 (DeepSeek-V4 technical report + API docs), SemiAnalysis InferenceX (`inferencex.semianalysis.com/model/deepseek-v4`), deepseek.ai, llm-stats.com, userightai.com, ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's flagship open-weights MoE reasoning model (preview 24 Apr 2026, GA checkpoint DeepSeek-V4-Pro-0813 released 13 Aug 2026, MIT license) for agentic coding and reasoning; 1.6T total / 49B active parameters (1.7T for 0813 GA), hybrid CSA+HCA sparse attention, 1M-token context, three reasoning effort modes (Non-think/Think High/Think Max), text in → text out.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro-0813`), open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Pro`, `...-Pro-0813`), Lambda.ai inference; also aiapiindex.com listing. No separate vision input for Pro (vision-exp is a separate experimental model).
- **Release / knowledge:** Preview 2026-04-24; GA 2026-08-13 (0813); knowledge cutoff May 2025 (userightai); pre-trained on 32T+ tokens.
- **IDs:** `deepseek-v4-pro-0813` (DeepSeek API), `deepseek-ai/DeepSeek-V4-Pro` / `DeepSeek-V4-Pro-0813` (HF weights). No Free ID confirmed (MIT open weights = self-host effectively free).
- **Context window:** 1M tokens (native; max_position_embeddings 1048576, YaRN factor 16). Verified on benchlm.ai, semianalysis, deepseek.ai, userightai.
- **Modalities:** Text in, text out (no image/audio input for Pro per deepseek.ai API docs); reasoning yes (three effort modes); tool use yes (agentic coding, terminal, web); structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** Conflicting: llm-stats $1.30 input / $0.100 cached / $2.60 output; aiapiindex $1.32/$3.96 blended; userightai $0.435/$0.87. DeepSeek open weights → self-host effectively $0.
- **Architecture:** Open-weights MoE, 1.6T total / 49B active (preview), 1.7T params (0813 GA), 61 layers + MTP block, 384 routed experts / 6 per token, hybrid CSA+HCA attention, mHC residuals, Muon optimizer, FP4/FP8 mixed precision, DSpark speculative decoding (0813).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (DeepSeek API update; Vals AI 54.7%)
- Terminal-Bench 2.0: **67.9%** (DeepSeek technical report)
- BrowseComp: **83.4%** (DeepSeek technical report)
- HLE w/ tools: **60.0%** (DeepSeek API docs); HLE **42.7%** (0813 API docs)
- MCP Atlas: **73.6%** (DeepSeek technical report)
- GDPval-AA: **1306 Elo** (DeepSeek technical report; AA normalized 54.5%)
- Toolathlon: **51.8%**; Toolathlon-Verified **74.1%** (DeepSeek technical report / API docs)
- CyberGym: **83.3%** (DeepSeek API docs)
- Agents' Last Exam: **25.7%** (DeepSeek API docs)
- AutomationBench: **31.8%** (DeepSeek API docs)
- AA Agentic Index: **49.6%** (Artificial Analysis)
- APEX-Agents-AA: **24.3%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53.2%** (Artificial Analysis)
- GPQA: **90.1%**; GPQA-D: **90.1%** (DeepSeek technical report); AA-GPQA Diamond **92.8%**; Vals **92.4%**
- HLE: **42.7%** (DeepSeek API docs); AA-HLE **41.0%**
- MMLU-Pro: **87.5%** (DeepSeek technical report); MMLU-Pro Vals **87.0%**
- ARC-AGI-1: **90.00%**; ARC-AGI-2: **61.3%** (ARC Prize, verified)
- AA-LCR (long-context reasoning): **80.3%** (Artificial Analysis)
- CritPt: **18.0%** (Artificial Analysis)
- AA-Omniscience Index **0.8%**; Accuracy **49.1%**; Hallucination rate **94.1%** (AA)
- IFBench: **76.5%** (Artificial Analysis)
- HMMT Feb 2026: **95.2%**; IMOAnswerBench: **89.8%** (DeepSeek technical report)
- FrontierMath not found for this exact model.

Coding:

- LiveCodeBench Pass@1-COT: **93.5%** (DeepSeek technical report); LiveCodeBench Vals: **87.5%** (Vals AI)
- Codeforces rating: **3206** (DeepSeek technical report)
- SWE-bench Verified: **80.6%** (DeepSeek technical report); SWE-bench Vals: **96.4%** (Vals AI)
- SWE-bench Pro: **55.4%** (DeepSeek technical report)
- SWE Multilingual: **76.2%** (DeepSeek technical report)
- DeepSWE: **62.7%** (DeepSeek API docs)
- DSBench-FullStack: **71.1%**; DSBench-Hard: **67.2%** (DeepSeek API docs)
- NL2Repo: **61.5%** (DeepSeek API docs)
- AA-SciCode: **51.0%** (Artificial Analysis)
- AA Coding Index: **68.8%** (Artificial Analysis)
- Vibe Code Bench: **49.93%** (Vals AI)

Multimodal & grounded:

- Design Arena Website: **1258** (OpenRouter)
- Text-only (no vision for Pro per official docs); no MMMU-Pro/Chartography scores found.

Long context:

- MRCR 1M: **83.5%** (DeepSeek technical report) — strong full-window retrieval
- CorpusQA 1M: **62.0%** (DeepSeek technical report)
- AA-LCR: **80.3%** (Artificial Analysis)
- Verified 1M context with strong MRCR 1M retrieval.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Leading Terminal-Bench 2.1 (87.9), BrowseComp (83.4), CyberGym (83.3), Toolathlon-Verified (74.1), GDPval-AA (1306 Elo); capped by weak Agents' Last Exam (25.7), AutomationBench (31.8), Toolathlon base (51.8). Top open-weights agent/computer-use model.
- **Reasoning: 80/100.** ARC-AGI-1 90.00%, GPQA 90.1%, HMMT 95.2%, IMOAnswerBench 89.8%, AA Intelligence Index 53.2%, AA-LCR 80.3%; capped by CritPt (18.0), AA-Omniscience accuracy (49.1%), HLE (41.0–42.7%). Elite math/science reasoning.
- **Context window: 92/100.** Verified 1M native context with MRCR 1M 83.5% and CorpusQA 1M 62.0% — strong full-window retrieval; capped because no public needle-recall curve beyond 1M point.
- **Multimodal: 50/100.** Text in / text out only per official docs (vision is a separate experimental model); Design Arena Website 1258 is the only grounded score found; capped by absence of image/audio/video input and no public MMMU-Pro/Chartography for Pro.
- **Coding: 84/100.** LiveCodeBench 93.5%/87.5%, SWE-bench Verified 80.6%/Vals 96.4%, Codeforces 3206, SWE Multilingual 76.2%, DeepSWE 62.7%; capped by SWE-bench Pro (55.4), DSBench-Hard (67.2), Vibe Code Bench (49.93). Elite open-weights coding.
- **Cost efficiency: 95/100.** MIT open weights (self-host ~$0) plus among the cheapest hosted frontier pricing ($0.435–$1.32 input); not counted toward Overall.
- **Overall Score: 77/100.** Half-up mean of (80 + 80 + 92 + 50 + 84) / 5 = 77.2 → 77. Best-fit recommendation: leading open-weights model for long-context agentic coding and math/science reasoning; outstanding value; text-only (use V4-Flash-vision-exp for vision).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + DeepSeek technical report + SemiAnalysis InferenceX independent technical analysis + ARC Prize + Epoch AI + Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
