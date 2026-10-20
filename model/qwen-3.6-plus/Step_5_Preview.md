# Qwen3.6-Plus — findings by Step 5 Preview

- Source: Alibaba (`qwen3.6-plus`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus
- **Short description:** Alibaba's April 2026 Plus-tier model (preview 2026-03-30, GA 2026-04-02) — "Towards Real World Agents": a native vision-language model on a hybrid linear-attention + sparse-MoE architecture with a 1M-token context window, big gains in agentic coding, front-end/vibe coding, OCR and object localization over the 3.5 series, and `preserve_thinking` for multi-turn agent sessions. Superseded by Qwen3.7-Plus (June 2026).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud `qwen3.6-plus` (snapshot `qwen3.6-plus-2026-04-02`); OpenRouter `qwen/qwen3.6-plus`; OpenCode Zen `opencode/qwen3.6-plus` ($0.50/$3.00, cache read $0.05). No free tier.
- **Release / knowledge:** 2026-04-02. Knowledge cutoff not disclosed.
- **IDs:** `qwen3.6-plus` (Model Studio/Zen/OpenRouter).
- **Context window:** 1,000,000 tokens (991,808 max input; 983,616 thinking mode; 65,536 max output; 81,920 max chain-of-thought).
- **Modalities:** Text, image and video in → text out (native VL); thinking mode with preserve_thinking; function calling, structured outputs, context caching, prefix completion; visual coding from UI screenshots.
- **Pricing (as of 2026-10-09):** $0.50 / MTok input, $3.00 output for ≤256K input; **$2.00 / $6.00 for 256K–1M input** (international); China tier $0.276/$1.651; OpenRouter route $0.325/$1.95; explicit cache creation $0.625 / read $0.05.
- **Architecture:** Hybrid: efficient linear attention + sparse MoE routing (parameters undisclosed); 56 tok/s measured output speed.

### Raw benchmarks found

Agent / tool use:

- τ³-Bench: **70.7%** (vendor table)
- MCP-Atlas: **48.2%** (vendor, per BenchLM's canonical labeling — the file's earlier "MCP-Atlas 74.1%" is corrected: 74.1% is MCP-Tasks, a distinct row); MCPMark: 48.2% (vendor table, same 48.2 region); Toolathlon: 39.8%
- Terminal-Bench 2.0: **61.6%** (vendor); Terminal-Bench 2.1: **61.4%** (AA) / **53.2%** (Vals Terminus-2); Terminal-Bench Hard: 43.9% (AA)
- Claw-Eval: **58.8%**; DeepPlanning: 41.5%; QwenWebBench: 1501.7
- GDPval-AA: **24.7%** (AA) / 32% (Together table) / **Elo 1,137** (#86/352, 76th pct — BenchmarkList 2026-10-07); Tau3-Banking 20.8% (#55/176); Tau2-Bench Telecom 97.7% (#10/332)
- OSWorld-Verified: **73.3%** (vendor); AndroidWorld: 81.0%; WebArena-Verified: 55.3%

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor) / **88.2%** (AA) / 87.4% (Vals)
- HLE: **28.8%** (vendor) / **27.8%** (AA); HLE with tools: 50.6%
- AIME: **94.6%** (Vals) / 90.6% (OTIS mock); SimpleQA Verified: 49.1%
- LiveCodeBench: **86.0%** (Vals) / 87.1% (v6); MMLU-Pro: **87.7%** (Vals); MMMLU: 89.5%
- Artificial Analysis Intelligence Index: **27.0** (rebased v4.3.2; 39.6–50 on older scales); AA Coding Index 54.5; AA Agentic Index 27.6
- CritPt: **2.9%** (AA); SciCode: 40.7–41%; FrontierMath: 26.21%
- AA-LCR: **78.3%** (AA); AA-Omniscience accuracy 26.4%, non-hallucination 65.4%

Coding:

- SWE-bench Verified: **78.8%** (vendor, internal SWE-agent scaffold, 200K context) / **73.4%** (Vals)
- SWE-bench Pro: **56.6%**; SWE-bench Multilingual: 73.8%; NL2Repo: 37.9%
- DeepSWE: **2.65%** (official per evals.report — near-zero on the contamination-resistant suite)
- Vibe Code Bench v1.1: **25.6%** (Vals); ProgramBench: **0.0%** (Vals); Code Migration: 11.1% (Vals)
- LMArena Elo: 1437; Design Arena: website 1248, code categories 1240, game dev 1224

Multimodal:

- MMMU-Pro: **84.2%** (Vals) / MMMU 86.0% (vendor); OmniDocBench: **91.2%** (vendor lead); ScreenSpot-Pro: 68.2%; CharXiv Reasoning: 81.5%; SimpleVQA: 67.3%

Long context:

- 1M-token window; AA-LCR 78.3% (AA); **no MRCR/RULER**

Third-pass verification (2026-10-19):

- Artificial Analysis (deprecated → Qwen3.7 Plus): estimated Intelligence Index **27\*** (#108/214 — matches the file's 27.0), 55.9 tok/s (#146/186 — "notably slow"), TTFT 2.09s, $0.50/$3.00 with 90% cache discount, 1M context, text+image+video in → text out, proprietary, 1 provider — not moved on the v4.3.2 scale
- BenchLM canonical page (64 of 667 rows, overall 53.8 #80/959) corrects one mislabeled row and adds new ones: **the file's "MCP-Atlas 74.1%" is actually MCP-Tasks 74.1% — MCP Atlas reads 48.2%** (the file's 48.2% figure was MCPMark; BenchLM's naming split is authoritative); GDPval-AA re-measured to **Elo 1066** (file: 1137) / 24.5% normalized; AA-MMMU-Pro **78.0%** vs the vendor table's 84.2%
- New rows: QwenClawBench **57.2%**, WideResearch **74.3%**, ResearchClawBench **18.0%** (weak — long-horizon research agents), Gert Labs **50.60%** (mid), VITA-Bench **44.3%**, AI-Needle **68.3%** (first retrieval row supplementing AA-LCR), LongBench v2 **62%**, VideoMMMU 84.0%, V* 96.9%, SuperGPQA 71.6%, MMLU-Redux 94.5%, HMMT Feb 2026 87.8%, MMAnswerBench 83.8%, FrontierMath v2 T1-3 38.2%, AA-Omniscience hallucination 34.6% (file: 34.6% implied by the 65.4% non-hallucination row), IFEval 94.3%, MMLU-ProX 84.7%, NOVA-63 57.9%, AIME26 95.3%, MathVision 88.0%, Design Arena 1243

### Normalized scores (1–100)

- **Tool use: 66/100.** τ³-Bench 70.7%, MCP-Tasks 74.1%, Claw-Eval 58.8% and OSWorld-Verified 73.3% sit in the mid band alongside TB2.1 53.2–61.4%; capped by the corrected **MCP Atlas 48.2%** (the file had attributed the 74.1% score to MCP-Atlas), GDPval-AA 24.5% (Elo re-measured 1137→1066), ResearchClawBench 18.0%, Toolathlon 39.8% and DeepPlanning 41.5% — the long-horizon office/agentic suites are the weak column. Trimmed from 68 on the MCP-Atlas correction and the re-measured GDPval.
- **Reasoning: 78/100.** GPQA 88.2–90.4%, AIME 94.6%, LiveCodeBench 86–87.1% and MMLU-Pro 87.7% are frontier-adjacent on the classic suites; capped by HLE 27.8–28.8% (50.6% only with tools), CritPt 2.9%, SciCode 40.7% and the rebased AA Index of 27.0 — knowledge depth is a full generation behind the current frontier.
- **Context window: 93/100.** 1M-token window (991K input, 65K output) is the ≥1M tier with AA-LCR 78.3%; the 100 tier needs ≥98% verified retrieval at 512K+ (no MRCR published), and the 256K+ input tier reprices the whole request 4x on input.
- **Multimodal: 83/100.** Native text + image + video in → text out is the 75–90 band, anchored by MMMU-Pro 84.2%, OmniDocBench 91.2% and CharXiv 81.5%, with real screenshot-to-code workflows; ScreenSpot-Pro 68.2% and SimpleVQA 67.3% show perception gaps, and output is text-only.
- **Coding: 72/100.** SWE-bench Verified 78.8% (73.4% Vals), SWE-bench Pro 56.6%, Terminal-Bench 2.0 61.6% and LiveCodeBench 86% are solidly mid-frontier for the Plus tier; capped hard by DeepSWE 2.65%, Vibe Code Bench 25.6%, ProgramBench 0.0%, Code Migration 11.1% and NL2Repo 37.9% — the end-to-end and long-horizon agentic-coding gap.
- **Cost efficiency: 90/100.** $0.50/$3.00 per MTok (≤256K) maps just above the methodology's ~$1.25/$4.25 ≈ 88 tier, with the OpenRouter route at $0.325/$1.95 cheaper still and $0.05 cache reads; the 256K–1M tier ($2/$6) and 65K output cap are the constraints.
- **Overall Score: 78/100.** Best-fit recommendation: the value multimodal-agent tier of its generation — 1M context, strong screenshot-to-code and OCR at $0.325–0.50 input; route deep reasoning and end-to-end agentic coding to Qwen3.8-Max or a frontier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19): Artificial Analysis (deprecated → Qwen3.7 Plus) confirms the estimated Index 27* #108/214, 55.9 tok/s #146/186, TTFT 2.09s, $0.50/$3.00, 1M, text+image+video; BenchLM (64/667, 53.8 #80/959) corrects the MCP-Atlas labeling (48.2%, with 74.1% belonging to MCP-Tasks), re-measures GDPval-AA to Elo 1066, and adds QwenClawBench 57.2%, WideResearch 74.3%, ResearchClawBench 18.0%, Gert Labs 50.60%, VITA-Bench 44.3%, AI-Needle 68.3% — the MCP-Atlas correction and weaker GDPval trim Tool use 68→66, Overall 79→78; Reasoning 78 / Context 93 / Multimodal 83 / Coding 72 unchanged. Second-pass verification (2026-10-10) cross-referenced benchmarklist.com (181 primary-source results, updated 2026-10-07). Prior pass (2026-10-09) used Qwen3.6-Plus blog + Alibaba Cloud Model Studio docs/pricing, Artificial Analysis, Vals AI, Together AI, evals.report, Neura, Design for Online, BenchLeader.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
