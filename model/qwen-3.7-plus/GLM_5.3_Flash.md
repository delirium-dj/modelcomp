# Qwen 3.7 Plus — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen3.7-plus`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus (Qwen3.7-Plus)
- **Short description:** Alibaba Cloud Qwen Team's cost-effective multimodal agent model that unifies vision and language into a single agent foundation — a multimodal interactive hybrid agent with GUI plus CLI agent control for coding and productivity workflows, built on the Qwen3.7 text backbone. Superseded within the family by Qwen 3.8 in August 2026. The 2026-10-11 second pass adds the Alibaba Cloud launch benchmark table (SWE-V 77.7%, MCP Atlas 73.2%, AndroidWorld 81.0%) and measured video understanding.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope international (`dashscope-intl.aliyuncs.com/compatible-mode/v1`, OpenAI-compatible Chat Completions); chat.qwen.ai playground; hosted via Together ($0.32/$1.28) and Fireworks ($0.40/$1.60). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-05-31; knowledge cutoff not verified.
- **IDs:** `qwen3.7-plus` (Alibaba Model Studio / OpenRouter / Together / Fireworks). No Free ID on Zen.
- **Context window:** 1,000,000 tokens (Together: 1M in / 65.5K out; Fireworks: 262K in / 65.5K out; BenchLM concurs 1M) — verified via llm-stats provider table.
- **Modalities:** text and image input (plus video understanding per the launch benchmark table); text output; reasoning yes (hybrid interactive agent); tool calls with hybrid GUI + CLI agent control; JSON mode.
- **Pricing (as of 2026-10-11):** $0.32 / $1.28 per 1M in/out via Together; $0.40 / $1.60 via Fireworks (cached input $0.08). Proprietary; paid only — no free API tier.
- **Architecture:** Proprietary (built on the Qwen3.7 text backbone with a vision-language unified agent foundation) — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **93.0%** (AA, independent — strong orchestration evidence)
- MCP Atlas: **73.2%** (Alibaba Cloud launch benchmarks via benchlm.ai, updated 2026-10-10 — fills the gap the 2026-10-05 pass marked missing)
- OSWorld-Verified: **73.3%** (launch table) — **conflicts with the OSWorld 2.0 paper reading of 2.8%** (arxiv 2606.29537; different harness version)
- AndroidWorld: **81.0%**; BFCL v4: **72.9%**; Claw-Eval: **62.7%**; QwenClawBench: **61.8%**; DeepPlanning: **62.3%**; Terminal-Bench 2.0: **70.3%** (launch table)
- GDPval-AA: **886** (AA, independent; normalized **13.5%**; 2026-10-17 refresh reads 13.4% — minor drift, flagged — very weak on the current board)
- AA Agentic Index: **19.7%**; APEX-Agents-AA: **22.4%** (AA); Vals TB2.1: **52.8%** (Vals, independent — wide gaps vs the launch-table rows)
- CoWorkBench: **65.1** / JobBench: **27.6** (vendor comparison table, prior pass)
- VITA-Bench: **45.6%** (launch table); QwenWebBench: **1536**; MAXIFE: **88.8%**; NOVA-63: **58.8%** (launch table, added 2026-10-16)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (Alibaba launch table); AA independent: **90.0%** — corroborated
- HLE: **34.7%** (launch table); AA-HLE: **35.6%** (AA) — corroborated
- MMLU-Pro: **88.5%**; MMLU-Redux: **94.5%**; SuperGPQA: **71.4%**; MMMLU: **89.0%** (launch table)
- HMMT Feb 2026: **92.9%**; IMOAnswerBench: **86.0%**; Apex: **22.7%** (launch table)
- MRCR v2: **91.7%** (launch table — first measured retrieval); AA-LCR v1.1: **73.0%** (AA); CritPt: **9.1%** (weak)
- AA-Omniscience: **22.5% accuracy / 27.7% non-hallucination row / 1.1 index** (AA — very weak)
- Artificial Analysis Intelligence Index: **25.2** (AA — corroborates the 2026-10-05 reading)
- IFEval: **94.6%**; IFBench: **79.1%** / AA-IFBench: **78.0%**; MMLU-ProX: **85.4%**; PolyMath: **84.0%**; INCLUDE: **83.0%** (launch table)

Coding:

- SWE-bench Verified: **77.7%** (Alibaba launch table — fills the gap the prior passes marked missing)
- SWE-bench Pro: **57.6%** (launch table; the DataCamp-table read of 55.8 is consistent); SWE Multilingual: **75.8%**
- LiveCodeBench v6: **89.6%** (Qwen3.8-27B model card cross-table); SciCode: **51.3%**; NL2Repo: **41.1%**
- AA Coding Index: **55.9%**; AA-SciCode: **46.1%** (AA)
- DeepSWE 1.1: **16.5%** (DataCamp comparison table — very weak)
- Vals EMB: **49.3%** (Vals, prior pass)

Long context:

- MRCR v2: **91.7%** (launch table — first measured retrieval evidence); AA-LCR 73.0%

Multimodal (video understanding now measured):

- Video-MME: **88.0%** with subs; VideoMMMU: **85.4%**; MLVU M-Avg: **87.4%** (launch table — video input verified by measurement)
- MMMU-Pro: **79.0%** (launch) / **80.5%** (AA); CharXiv: **85.9%**; OmniDocBench 1.5: **91.4%**; OCRBench V2: **70.7%**; RealWorldQA: **86.9%**; ScreenSpot-Pro: **79.0%**; MedXpertQA (MM): **71.0%**; SimpleVQA: **81.7%**; ERQA: **69.8%**; MathVision: **90.3%**; ODINW13: **51.1%**; MMSearch-Plus: **41.4%**
- Design Arena Website: **1276** (OpenRouter; 2026-10-17 refresh reads 1271 — minor drift, flagged)

### Normalized scores (1–100)

- **Tool use: 74/100.** (Was 65 on the prior pass.) The launch table + AA transform the picture: MCP Atlas 73.2%, OSWorld-Verified 73.3%, AndroidWorld 81.0%, BFCL v4 72.9% and τ²-bench 93% (independent) replace the thin CoWorkBench/JobBench-only base — but GDPval 886, AA Agentic Index 19.7% and Vals TB2.1 52.8% keep it mid-band.
- **Reasoning: 76/100.** GPQA 90.0–90.3% (two sources) and the HMMT 92.9%/MMLU-Redux 94.5% math/knowledge rows are solid, HLE 34.7–35.6% stays under the 40% bar and the corroborated AA Index of 25.2 plus the near-zero Omniscience index hold the score.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier; MRCR v2 91.7% is the first measured retrieval evidence (strong at its measured depth); no ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 78/100.** (Was 65 on the prior pass.) Video understanding is now measured, not just claimed (Video-MME 88.0, VideoMMMU 85.4, MLVU 87.4) alongside strong document/vision rows (OmniDocBench 91.4, CharXiv 85.9) — the +video band (75–90); no audio input and text-only output.
- **Coding: 80/100.** SWE-bench Verified 77.7% and LiveCodeBench 89.6% fill the gaps and SWE Multilingual 75.8% is solid — but DeepSWE 16.5%, AA Coding Index 55.9% and NL2Repo 41.1% trail the family's 3.8 tier badly.
- **Cost efficiency: 95/100.** $0.32/$1.28 per 1M (Together) sits between the ~$0.10/$0.20 = 97–99 and ~$0.60/$2.20 = ~92 methodology references, landed at 95.
- **Overall Score: 80.6/100.** (Was 76.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (74 + 76 + 95 + 78 + 80) / 5 = 403/5 = 80.6 — raised on the 2026-10-11 second pass because the Alibaba Cloud launch table and AA boards convert the tool-use and multimodal gaps into measured evidence. Best-fit: a cheap multimodal agent foundation for vision/video-plus-language productivity workflows; superseded by Qwen 3.8 models at similar cost with much stronger agentic coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Alibaba Cloud Qwen3.7-Plus launch blog, Artificial Analysis model benchmarks, Vals AI leaderboards, OpenRouter benchmarks, plus the prior 2026-09-24/10-05 passes; 2026-10-16 re-check: BenchLM 71-row refresh corroborates all rows (QwenWebBench 1536, MAXIFE 88.8%, NOVA-63 58.8% added; GDPval 13.5% → 13.4%, Design Arena 1276 → 1271 drift; rank → #80/954 53.76) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
