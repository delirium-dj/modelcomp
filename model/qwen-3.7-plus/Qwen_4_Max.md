# Qwen3.7-Plus — findings by Qwen 4 Max

- Source: Vendor (Alibaba Qwen) + independent trackers; subject slug `qwen-3.7-plus`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.7-Plus (snapshot `qwen3.7-plus-2026-05-26`)
- **Short description:** Cost-effective multimodal agent model of the Qwen3.7 series — the vision-language sibling of the text-only Qwen3.7-Max flagship. Combines visual perception, GUI grounding/operation, tool use, and autonomous coding in one agent loop; proprietary, API-only (no open weights).
- **Provider/access:** Alibaba Cloud Model Studio (Bailian) — Beijing, Singapore, Frankfurt, US-Virginia, Tokyo, HK; OpenAI-compatible API plus Anthropic API protocol (Claude Code integration). Also resold via OpenRouter and Together AI; listed in the OpenCode catalog. `preserve_thinking` keeps reasoning state across tool calls. Function calling, structured outputs, web search, prefix completion, context caching, batch (Beijing/Singapore); no fine-tuning. RPM 30,000 (Beijing/global) / 15,000 (Singapore), TPM 5M.
- **Release/knowledge:** Preview on leaderboards ~May 14 2026 (Vision Arena #16); snapshot May 26; GA June 2 2026 (MLQ; AA lists June 1; llm-stats says May — reconciled as preview→GA timeline). Qwen3.7-Max (text-only) launched May 21. Knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-plus`, `qwen3.7-plus-2026-05-26`; OpenRouter `qwen/qwen3.7-plus`.
- **Context window:** 1,000,000 tokens; max input 991,808 (983,616 thinking); max output 131,072; max chain-of-thought 262,144 (official Model Studio docs). Launch-era coverage cited 65,536 output / 256K CoT — labelled conflict, current official limits used.
- **Modalities:** Text + image + video in; text out (AA and official docs agree).
- **Pricing (as of 2026-11-12, per 1M tokens):** Singapore/US-scope $0.40 in / $1.60 out ≤256K, **3× surcharge >256K ($1.20/$4.80)**; Beijing/Frankfurt/Virginia-global/Tokyo/HK $0.276/$1.101 → $0.826/$3.301. Implicit cache $0.08 (Singapore) / $0.056 (global); explicit cache create $0.50 / read $0.04; batch-file ~50% off (Beijing). AA: 80% cache discount, blended $0.30 (7:2:1). OpenRouter/Together $0.32/$1.28; OpenCode catalog $0.50/$3.00 (cache $0.05, write $0.625) — provider spreads labelled, not averaged. ~6× cheaper input than Qwen3.7-Max ($2.50/$7.50).
- **Architecture:** Proprietary MoE; Alibaba has not disclosed parameter count (AA). A third-party HF peer table (Qwen3.8-Flash-Next card) lists "Qwen3.7-Plus 397B/17B" — unverified, labelled conflict. Reasoning model with hybrid thinking; AA tracks the reasoning version.

### Raw benchmarks found

Vendor-reported (Alibaba launch table, via BenchLM's citation of the Alibaba Cloud launch blog; harness = vendor):
- Agentic/GUI: Terminal-Bench 2.0 70.3, OSWorld-Verified 73.3, AndroidWorld 81.0 (vs Gemini 3.1 Pro 70.7), ScreenSpot Pro 79.0 (vs GPT-5.4 67.4), MCP Atlas 73.2, BFCL v4 72.9, Claw-Eval 62.7, QwenClawBench 61.8, QwenWebBench 1536, DeepPlanning 62.3, VITA-Bench 45.6.
- Coding: SWE-bench Verified 77.7, SWE-bench Pro 57.6 (vs Qwen3.7-Max 60.6), SWE Multilingual 75.8, NL2Repo 41.1, SciCode 51.3; LiveCodeBench v6 89.6 (via Qwen3.8-27B model card).
- Reasoning/knowledge: GPQA-Diamond 90.3 (vs Opus 4.6 Max 91.3), HLE 34.7, MMLU-Pro 88.5, MMLU-Redux 94.5, SuperGPQA 71.4, CritPt 9.1, Apex 22.7, HMMT Feb 2026 92.9, IMOAnswerBench 86.0; MRCRv2 (128k) 91.7 (vs Opus 4.6 Max 84.0).
- Multimodal: MMMU-Pro 79, MathVision 90.3, CharXiv 85.9, Video-MME (w/ sub) 88.0, VideoMMMU 85.4, MLVU 87.4, OmniDocBench 1.5 91.4, OCRBench V2 70.7, RealWorldQA 86.9, SimpleVQA 81.7, ERQA 69.8, MedXpertQA-MM 71.0, MMSearch-Plus 41.4, ODINW13 51.1.
- Instruction/multilingual: IFEval 94.6, IFBench 79.1, MMLU-ProX 85.4, INCLUDE 83.0, PolyMath 84.0, MAXIFE 88.8, NOVA-63 58.8, MMMLU 89.0.
- Demos (vendor): 11-hour autonomous vocabulary-app build (>10,000 lines, 1,000+ agent calls); Apple Stocks app recreation from screenshots (SwiftUI); browser-driven cloud-server purchase via "Qwen for Chrome".

Independent runs:
- Artificial Analysis (launch-era; current live Intelligence Index = N/A, "no publicly available API" for re-runs): ranked #53/164 at launch (MLQ citing AA); carried rows — GPQA-D 90.0, AA-HLE 35.6, LCR 73.0, τ²-bench 93, GDPval-AA 886 Elo (13.3% normalized), AA Agentic Index 19.7, AA Coding Index 55.9, SciCode 46.1, MMMU-Pro 80.5, IFBench 78.0, EnterpriseOps-Gym 40.6, APEX-Agents-AA 22.4, TerminalBench-Hard 47. Launch-era verbosity ~110M output tokens vs 29M median; ~52.9 tok/s (#101).
- AA live performance (2026-11-12): 55 tok/s, TTFT 51.23s (median 10.98s in price class), 1 tracked provider.
- Vals AI: Terminal-Bench 2.1 52.8. OSWorld 2.0 paper (arXiv 2606.29537): 2.8. Epoch FrontierMath v2 Tiers 1–3: 34.386. OpenRouter Design Arena (Website): 1264. HF Flash-Next peer table: DeepSWE 16.5 (vendor peer column, much harder harness than SWE-V).
- BenchLM aggregate: 53.62/100, #80 of 1026 (71/815 rows, partial coverage, conservative).

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong GUI/tool vendor rows (τ² 93, MCP Atlas 73.2, BFCL v4 72.9, OSWorld-V 73.3, AndroidWorld 81.0) but weak independent agentic knowledge work (AA Agentic 19.7, GDPval-AA 886, APEX-Agents 22.4) — below M3 (80) and Grok 4.6 (84).
- **Reasoning: 76/100.** GPQA 90.0–90.3, HLE 34.7–35.6, MMLU-Pro 88.5, CritPt 9.1, FrontierMath v2 34.4 — solid mid-tier; trails frontier (Grok 4.6 84) and slightly above M3 (75) on CritPt but below on GPQA/HLE.
- **Context window: 82/100.** 1M with strong 128k retrieval (MRCRv2 91.7) but independent LCR only 73.0, 131K output cap, and 3× price surcharge >256K — below M3 (88, MSA + LCR 83 + 512K output).
- **Multimodal: 83/100.** Text+image+video with strong rows across vision (MMMU-Pro 80.5 AA), video (Video-MME 88.0, VideoMMMU 85.4), documents (OmniDocBench 91.4) and GUI grounding (ScreenSpot Pro 79.0) — slightly above M3 (82).
- **Coding: 77/100.** SWE-V 77.7, SWE-Pro 57.6, TB2.0 70.3 but Vals TB2.1 52.8, AA Coding 55.9, DeepSWE 16.5 — below M3 (80) and MiMo Flash (85); GUI-driven coding is the differentiator, not raw SWE.
- **Cost efficiency: 84/100.** $0.40/$1.60 with 80% cache discount (blended $0.30) is cheap vs Max, but 55 tok/s, TTFT 51s, launch-era verbosity ~3.8× median, and 3× >256K surcharge erode value; OpenRouter $0.32/$1.28 helps. Below M3 (88 at $0.30/$1.20, 122 tok/s).
- **Overall Score: 79.4/100.** Mean of the five quality dimensions (Cost excluded): (79+76+82+83+77)/5 = 79.4. A capable budget multimodal agent, outclassed by newer Qwen3.8-Flash (83.8) and M3 (81.0) on independent agentic/coding evals.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Alibaba Model Studio official docs, Artificial Analysis, BenchLM, MLQ launch coverage, OpenRouter/Together listings); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: release date (May preview vs June 1 AA vs June 2 GA — reconciled via May 26 snapshot); output cap (65,536 launch-era vs 131,072 current official); pricing ($0.32/$1.28 OpenRouter/Together vs $0.40/$1.60 Alibaba/AA vs $0.50/$3.00 OpenCode); parameters (undisclosed vs 397B/17B third-party peer table); AA index (N/A live vs #53/164 launch-era — version/harness labelled).
- Reference URLs:
  - [Qwen3.7 Plus Benchmark Scores — BenchLM](https://benchlm.ai/models/qwen3-7-plus)
  - [Qwen3.7 Plus Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-7-plus)
  - [qwen3.7-plus Model Info — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus)
  - [Alibaba Launches Qwen3.7-Plus — MLQ.ai](https://mlq.ai/news/alibaba-launches-qwen37-plus-a-multimodal-agent-model-that-sees-screens-and-writes-code/)
  - [Qwen3.7-Plus launch benchmarks — Alibaba Cloud blog (via BenchLM attribution)](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
  - [Qwen3.7 Plus API — OpenRouter (via search snippet)](https://openrouter.ai/qwen/qwen3.7-plus)
  - [Qwen3.7-Plus — llm-stats (via search snippet)](https://llm-stats.com/models/qwen3.7-plus)
  - [Qwen3.7-Plus — Together AI (via search snippet)](https://www.together.ai/models/qwen37-plus)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.