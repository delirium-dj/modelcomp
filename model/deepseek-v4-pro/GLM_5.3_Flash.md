# DeepSeek V4 Pro — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-v4-pro`, MIT open weights; GA build V4-Pro-0813)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (production build: V4-Pro-0813, the official GA release superseding the April preview with "greatly enhanced agentic capabilities")
- **Short description:** DeepSeek's 1.6T-parameter MoE flagship with a 1M-token context window under a fully permissive MIT license; top use cases are top-tier coding, competition math, and large-codebase agentic analysis. Text-only. BenchLM ranks the 0813 build #40 of 889 (63.77). **Deprecation: since September 14, 2026, `deepseek-v4-pro` API requests reroute to DeepSeek V4.1-Flash at Flash prices.**
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`, OpenAI-compatible at `https://api.deepseek.com/v1`, Chat Completions); drop-in backend for Claude Code (Anthropic-compatible), OpenClaw and OpenCode; weights on Hugging Face for self-hosting. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-04-24 (preview), GA build 0813 on 2026-08-13; knowledge cutoff not verified (33T-token training corpus).
- **IDs:** `deepseek-v4-pro` (DeepSeek API). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens (BenchLM concurs; verified via DeepSeek docs and Together AI); MRCR 1M **83.5%** and CorpusQA 1M **62.0%** are now measured (technical report via benchlm.ai). Hybrid CSA+HCA attention uses 27% of FLOPs and 10% of KV cache vs V3.2 at 1M context.
- **Modalities:** text input only; text output; reasoning yes (three modes: Non-think, Think High, Think Max); tool calls (OpenAI-compatible function calling); JSON mode.
- **Pricing (as of 2026-10-11):** peak/off-peak since 2026-08-16 — off-peak $0.66 / $1.98 per 1M in/out, peak $1.32 / $3.96 (peak hours 01:00–04:00, 06:00–10:00 UTC); previous flat rate was $0.435/$0.87. Open MIT weights; paid API.
- **Architecture:** 1.6T total / 49B active parameters, 61 layers, hidden 7168, 384 routed experts + 1 shared expert (6 active per token), hybrid Compressed Sparse Attention + Heavily/Hierarchical Chunked Attention, Manifold-Constrained Hyper-Connections, Muon optimizer, FP4+FP8 mixed-precision training, MIT license.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **96.2%** (AA, independent — elite; fills the Tau2 gap)
- Terminal-Bench 2.1: **87.9%** (DeepSeek V4 Pro 0813 API update table via benchlm.ai, updated 2026-10-10 — fills the gap; the prior pass only had TB2.0 67.9); Vals independent: **54.7%** (wide vendor-vs-independent gap)
- Toolathlon-Verified: **74.1%** (0813 API table — a large upgrade from the preview build's 51.8% the prior pass cited)
- GDPval-AA: **1306** (technical report via benchlm.ai — fills the gap; AA-normalized **54.5%**); AA Agentic Index: **49.6%** (AA); AA EnterpriseOps-Gym: **49.6%**
- CyberGym: **83.3%**; BrowseComp: **83.4%**; MCPAtlas: **73.6%** (leads Opus 4.6's 72.1); DSBench-Hard: **67.2%** / FullStack: **71.1%**; AutomationBench: **31.8%**; Agents' Last Exam: **25.7%**; APEX-Agents-AA: **24.3%** (AA)
- Terminal-Bench 2.0: **67.9%**; Toolathlon (preview build): **51.8%** (technical report)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE: **60.0%** with tools (0813 API table — a major upgrade from the preview's 37.7%); AA-HLE: **41.0%** (AA — above the 40% bar)
- GPQA Diamond: **90.1%** (technical report); AA independent: **92.8%**; Vals: **92.4%** — corroborated across three sources
- ARC-AGI-1: **90.0%**; ARC-AGI-2: **61.3%** (ARC Prize verified, V4 Pro 0813 — fills the ARC gap)
- Artificial Analysis Intelligence Index: **53.2** (AA — fills the "no AA index" gap; solid)
- AA-LCR v1.1: **80.3%** (AA — fills the long-context gap); CritPt: **18.0%** (AA)
- MMLU-Pro: **87.5%** (technical report; Vals 87.0% — corroborated); Chinese-SimpleQA: **84.4%**
- AIME 2026: **94.3%**; HMMT Feb 2026: **95.2%**; IMOAnswerBench: **89.8%**; Apex: **38.3%** / Apex Shortlist: **90.2%**; Codeforces: **3206** (technical report)
- AA-Omniscience: **49.1% accuracy / 94.1% non-hallucination row / 0.8 index** (AA)

Coding:

- SWE-bench (Vals): **96.4%** (Vals, independent — fills the gap, strong); LiveCodeBench (Vals): **87.5%** (fills the independent-LCB gap)
- SWE-bench Verified: **80.6%** (technical report — field-leading at publication); SWE-bench Pro: **55.4%**; SWE Multilingual: **76.2%**; NL2Repo: **61.5%** (0813 table — fills gap)
- LiveCodeBench Pass@1-COT: **93.5%**; Codeforces: **3206** (technical report)
- DeepSWE: **62.7%** (0813 API table — fills the gap); DSBench rows above; Vibe Code Bench v1.1: **49.93%** (Vals)
- AA Coding Index: **68.8%** (AA); AA-SciCode: **51.0%** (AA); OpenHarmony Bench: **59.0%**

Long context:

- MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (technical report — first measured at-full-window retrieval; solid but not ≥98%)
- AA-LCR 80.3% (AA); vendor materials still concede Opus 4.6-class models outperform at the upper window end (hybrid attention trades retrieval precision for efficiency)

### Normalized scores (1–100)

- **Tool use: 82/100.** (Was 72 on the prior pass.) The 0813 GA build transforms the agentic story: TB2.1 87.9%, Toolathlon-Verified 74.1% (from 51.8%), τ²-bench 96.2% (AA), GDPval 1306 (54.5% normalized), CyberGym 83.3% and BrowseComp 83.4% — held under 85 by the Vals TB2.1 gap (54.7), AA Agentic 49.6% and APEX 24.3%.
- **Reasoning: 88/100.** (Was 85 on the prior pass.) GPQA corroborated at 90.1–92.8% (three sources), HLE-with-tools jumps to 60.0% (AA-HLE 41.0% clears the 40% bar), ARC-AGI-2 61.3% verified, AA Index 53.2% is solid and the math sweep stays elite — the strongest evidence-based reasoning score among open-weights models in this repo.
- **Context window: 93/100.** (Was 92 on the prior pass.) 1M tokens with now-measured retrieval: MRCR 1M 83.5%, CorpusQA 1M 62.0% and AA-LCR 80.3% — strong but short of the ≥98% maximum tier; the hybrid-attention retrieval caveat stands.
- **Multimodal: 15/100.** Text-only in/out — no vision, audio or video input per DeepSeek's own limitations list.
- **Coding: 89/100.** (Was 88 on the prior pass.) Vals SWE-bench 96.4% and LiveCodeBench 87.5% add independent corroboration to the vendor's SWE-V 80.6%/LCB 93.5%, with DeepSWE 62.7% and NL2Repo 61.5% filling gaps; SWE-bench Pro 55.4% and Vibe 49.9% cap it below 90.
- **Cost efficiency: 92/100.** Off-peak $0.66/$1.98 per 1M sits at the ~$0.60/$2.20 = ~92 methodology reference; peak rates ($1.32/$3.96) fall to ~88 and MIT open weights are an extra cost lever.
- **Overall Score: 73.4/100.** (Was 70 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (82 + 88 + 93 + 15 + 89) / 5 = 367/5 = 73.4 — raised on the 2026-10-11 second pass because the 0813 GA tables and AA/ARC/Vals boards convert nearly every prior gap into elite measured evidence; the text-only multimodal score is what holds the Overall down. Best-fit: the strongest open-weights choice for coding, math and long-codebase work where multimodal input is not needed.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the DeepSeek-V4 technical report + 0813 API update tables, Artificial Analysis model benchmarks, Vals AI leaderboards, ARC Prize verified results via benchlm.ai, plus the prior 2026-10-08 pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.md`, using the same headings.
