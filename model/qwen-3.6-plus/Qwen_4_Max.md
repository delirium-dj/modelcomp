# Qwen3.6-Plus — findings by Qwen 4 Max

- Source: Vendor (Alibaba Cloud Model Studio) + independent trackers; subject slug `qwen-3.6-plus`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.6-Plus (`qwen3.6-plus`; snapshot `qwen3.6-plus-2026-04-02`)
- **Short description:** Alibaba's hosted native vision-language Plus-tier model of the Qwen3.6 generation — "Towards Real World Agents"; performance on par with SOTA per vendor, markedly enhanced agentic coding, front-end/Vibe coding, multimodal recognition, OCR, and object localization vs the 3.5 series.
- **Provider/access:** Alibaba Cloud Model Studio (Beijing, Singapore, Frankfurt, US-Virginia, Tokyo, HK); function calling, structured outputs, web search, prefix completion, context caching; **Batch inference Beijing-only** (snapshot version: no cache/batch); no fine-tuning. OpenRouter `qwen/qwen3.6-plus`; OpenCode $0.50/$3.00 cache $0.05 write $0.625. Rate limits: 15K–30K RPM / 5M TPM by region.
- **Release/knowledge:** GA snapshot **April 2 2026** (blog Apr 1–2; AA "April 2026"). A separate **Qwen3.6-Plus Preview** (256K, text-only, ~Mar 30 per Puter) preceded it — distinct from this 1M VL GA model, labelled. **Deprecated — AA banner names Qwen3.7-Plus** (May 26 / GA June 2 2026) as successor. Knowledge cutoff not published.
- **IDs:** `qwen3.6-plus`, `qwen3.6-plus-2026-04-02`; distinct from Qwen3.6-Max-Preview, Qwen3.6-27B, Qwen3.6-35B-A3B, Qwen3.7-Plus.
- **Context window:** **1,000,000 tokens**; max input 991,808 (thinking 983,616); **max output 65,536**; max CoT 81,920 (Model Studio doc).
- **Modalities:** **Image + text + video in**; text out (doc/AA). Native VL series.
- **Pricing (as of 2026-11-12, per 1M tokens):** Singapore ≤256K **$0.50 in / $3.00 out**, explicit cache create $0.625 / read $0.05 (90% discount per AA); **>256K–1M: $2.00 / $6.00** (4× input / 2× output), cache $2.50/$0.20. Beijing/Frankfurt/Virginia/HK: $0.276/$1.651 → $1.101/$6.602; Beijing Batch File 50% ($0.138/$0.825).
- **Architecture:** Proprietary hosted MoE (parameters undisclosed); reasoning model (AA tracks reasoning variant); thinking mode with 81,920-token CoT budget.

### Raw benchmarks found

Vendor-reported (qwen.ai blog "Qwen3.6-Plus: Towards Real World Agents", via BenchLM citations):
- Agentic: τ³-bench **70.7**, MCP-Tasks 74.1, WideResearch 74.3, QwenClawBench 57.2, VITA-Bench 44.3, DeepPlanning 41.5, **MCP Atlas 48.2**, **Toolathlon 39.8**, Terminal-Bench 2.0 **61.6**.
- Coding: SWE-bench Verified **78.8**, SWE-bench Pro **56.6**, SWE Multilingual 73.8, LiveCodeBench v6 **87.1**.
- Reasoning/knowledge: GPQA **90.4**, SuperGPQA 71.6, MMLU-Pro 88.5, MMLU-Redux 94.5, C-Eval 93.3, HLE **28.8**, AIME26 **95.3**, HMMT Feb 2025 96.7 / Nov 2025 94.6 / Feb 2026 87.8, MMAnswerBench 83.8.
- Multimodal: MMMU 86.0, MMMU-Pro **78.8**, MathVision **88.0**, VideoMMMU **84.0**, ScreenSpot Pro **68.2**, CharXiv **81.5**, V* **96.9**.
- Long context: AI-Needle 68.3, LongBench v2 62. Instruction: IFEval 94.3, IFBench 75.8. Multilingual: MMLU-ProX 84.7, NOVA-63 57.9.

Independent runs:
- Artificial Analysis (reasoning; deprecated — index N/A live, historical carried): **Intelligence Index 27.0 (historical)**, GPQA-D **88.2**, AA-HLE **27.8**, LCR **78.3**, CritPt **2.9**, Omniscience net **+0.9** (accuracy 26.4, hallucination 34.6), GDPval-AA **1,066 / normalized 24.5%**, τ² **97.7**, TB-Hard 43.9, Coding Index 54.5, MMMU-Pro **78.0**, IFBench 75.2. Performance: **54 tok/s, TTFT 44.67s**.
- Vals AI: SWE-bench **73.4**, TB2.1 **53.2**, LCB **86.0**, GPQA-D 87.4, MMLU-Pro 87.7, Vibe Code Bench 25.56.
- Claw-Eval 58.8; Gert Labs 50.60; ResearchClawBench 18.0; Epoch FM v2 T1-3 **38.246**; NL2Repo 37.9 (GLM-5.1 comparison table); Design Arena Website 1,238.
- BenchLM aggregate: **53.37/100, #85 of 1026** (68/815 rows, conservative).

### Normalized scores (1–100)

- **Tool use: 74/100.** τ² 97.7 (AA) and τ³ 70.7 (vendor) are strong, MCP-Tasks 74.1 / WideResearch 74.3 / Claw-Eval 58.8 respectable; capped by **MCP Atlas 48.2**, **Toolathlon 39.8**, GDPval normalized **24.5%** (1,066 Elo — weak), ResearchClawBench 18.0, and VITA 44.3 / DeepPlanning 41.5 — a generation behind 3.7-Plus's MCP Atlas 73.2 / Toolathlon ~50.
- **Reasoning: 78/100.** AIME26 95.3, HMMT Feb26 87.8, GPQA 90.4 vendor (AA 88.2 / Vals 87.4), MMLU-Pro 88.5, MMLU-Redux 94.5, C-Eval 93.3; capped by **HLE 28.8/27.8**, **CritPt 2.9**, FM v2 T1-3 38.2, Omniscience +0.9 (acc 26.4) — solid competition math, shallow frontier knowledge.
- **Context window: 80/100.** Native 1M (991,808 in) with LCR **78.3**, AI-Needle 68.3, LongBench v2 62; deducted for the **>256K 4× input / 2× output surcharge** ($0.50→$2 / $3→$6), 65,536 output cap (half of 3.7-Plus's 131K), and 81,920 CoT budget; no MRCRv2 evidence.
- **Multimodal: 81/100.** Native VL image+video: MMMU-Pro 78.8/78.0, MMMU 86.0, MathVision 88.0, VideoMMMU 84.0, CharXiv 81.5, V* 96.9, MMAnswerBench 83.8; ScreenSpot Pro **68.2** trails 3.7-Plus's 79.0; no audio; strong but a step below the 3.7/3.8 generation.
- **Coding: 78/100.** SWE-V 78.8 vendor (Vals **73.4** — harness gap labelled), SWE-Pro 56.6, SWE Multilingual 73.8, LCB v6 87.1 (Vals 86.0), TB2.0 61.6 vendor (Vals TB2.1 53.2), Coding Index 54.5; NL2Repo 37.9 and Vibe 25.56 weak; front-end/Vibe emphasis is vendor-claimed, not independently benchmarked.
- **Cost efficiency: 84/100.** $0.50/$3.00 with **90% cache** ($0.05 read) is competitive (AA medians $2/$10); Beijing $0.276/$1.651 + 50% batch cheaper still; 54 tok/s / 44.67s TTFT moderate; >256K 4×/2× surcharge and deprecated status deduct.
- **Overall Score: 78.2/100.** Mean of the five quality dimensions (Cost excluded): (74+78+80+81+78)/5 = 78.2. A capable 1M native-VL Plus tier with strong τ-bench/competition-math and good value — below Qwen3.7-Plus (79.4) on agentic breadth, ScreenSpot, and output budget, and well below Qwen3.8-Max (84.2); now deprecated in favor of 3.7-Plus.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Alibaba Cloud Model Studio official model doc, Artificial Analysis live deprecation page, BenchLM carrying qwen.ai blog vendor tables + Vals/Claw/Gert/Epoch/GLM-5.1-table rows, alibabacloud blog/Puter snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: GPQA (90.4 vendor vs 88.2 AA vs 87.4 Vals); HLE (28.8 vendor vs 27.8 AA); SWE-V (78.8 vendor vs 73.4 Vals); TB (61.6 vendor 2.0 vs 53.2 Vals 2.1 — different versions/harnesses); MMMU-Pro (78.8 vendor vs 78.0 AA); LCB (87.1 vendor v6 vs 86.0 Vals); AA index (N/A live deprecated vs 27.0 historical); identity (1M VL GA April 2 vs 256K text-only Preview ~Mar 30 — distinct releases); pricing (Singapore $0.50/$3.00 vs Beijing $0.276/$1.651 — regional tiers, not averaged).
- Reference URLs:
  - [qwen3.6-plus Model Info — Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-6-plus)
  - [Qwen3.6-Plus: Towards Real World Agents — Qwen blog](https://qwen.ai/blog?id=qwen3.6)
  - [Qwen3.6-Plus: Towards Real World Agents — Alibaba Cloud blog](https://www.alibabacloud.com/blog/qwen3-6-plus-towards-real-world-agents_603005)
  - [Qwen3.6 Plus — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-6-plus)
  - [Qwen3.6 Plus Benchmark Scores — BenchLM](https://benchlm.ai/models/qwen3-6-plus)
  - [Qwen3.6 Plus — Vals AI](https://www.vals.ai/models/alibaba_qwen3.6-plus)
  - [Qwen3.6 Plus Preview — Puter developer](https://developer.puter.com/ai/qwen/qwen3.6-plus-preview/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.