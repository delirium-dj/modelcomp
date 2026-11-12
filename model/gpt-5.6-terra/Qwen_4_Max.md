# GPT-5.6 Terra — findings by Qwen 4 Max

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's July 9, 2026 balanced tier of the GPT-5.6 family (Sol / Terra / Luna) — "balances intelligence and cost… roughly corresponds to the mini model tier used in earlier GPT-5 families" (official docs). Launch $2.50/$15; **cut 20% on July 30, 2026 to $2/$12**. Strong agentic coding (SWE-V 95.4 Vals, DeepSWE 69.6, TB2.1 87.4) but weak factuality (AA-Omniscience index 0.1, hallucination rate 87.9) and a below-median current AA v5.0.1 index (32). **Deprecated** per AA — GPT-6.1 Terra is the suggested successor.
- **Provider / access:** OpenAI API (Chat Completions + Responses + Batch), Amazon Bedrock (`openai.gpt-5.6-terra`), OpenRouter; proprietary. `reasoning.effort`: none / low / **medium (default)** / high / xhigh / **max** (AA tracks Max).
- **Release / knowledge:** GA 2026-07-09; knowledge cutoff **Feb 16, 2026**. Full Responses toolset: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search. No Realtime/Live/fine-tuning.
- **IDs:** `gpt-5.6-terra` (single snapshot); siblings GPT-5.6 Sol (flagship), GPT-5.6 Luna (cheap), GPT-5.6 Cyber (separate SKU); successor GPT-6.1 Terra.
- **Context window:** **1,050,000 tokens**; max input **922,000**, max output **128,000**. **>272K input prompts priced 2x input / 1.5x output for the full request**; cache writes 1.25x. AA-LCR **83.0** — solid long-context reasoning.
- **Modalities:** **Text + image in, text out** (official docs + AA). MMMU-Pro 80.7 (82.0 w/ Python), ExtractBench 92.26, ParseBench 67.06. No audio/video.
- **Pricing (as of 2026-11-12):** **$2 in / $0.20 cached / $12 out per 1M** (90% cache discount; post-Jul-30 rate). AA cost per Intelligence Index task **$3.73**; 11.5 min/task, TTFT 87.58s, 96 tok/s, 102M index output tokens (verbose, median 72.8M).
- **Architecture:** Proprietary, undisclosed; reasoning model with six effort levels; positioned as the cost-balanced mini-tier of the 5.6 generation.

### Raw benchmarks found

Vendor-reported (OpenAI GPT-5.6 launch post via BenchLM attribution; system card; Cognition's Devin blog for FrontierCode):

- Agent: TB2.1 **87.4**, BrowseComp **87.5**, OSWorld 2.0 **50.2**, CyberGym **81.8**, ExploitGym 23.2, Toolathlon **53.1**, GDPval-AA **1,583 Elo** — Google's Gemini 3.8 Flash model-card comparison table lists Terra at **1,528** (cross-vendor discrepancy, both labelled)
- Coding: SWE-bench Pro **63.4**, DeepSWE **69.6**, FrontierCode 1.1 Extended **55.8** (Cognition/Devin harness)
- Knowledge/math: GPQA-D **92.9**, FrontierMath v2 T1-3 **84.9** / T4 **68.3** (BenchLM also lists 84.9 under legacy FrontierMath — possible conflation, labelled), HealthBench Professional 57.7, HealthBench Hard 32.7 (system card), MMMU-Pro 80.7 / 82.0 w/ Python
- HLE-Verified **51.1** and LABBench2 **81.2** appear in Google DeepMind's 3.8 Flash model card (lab-reported, third-party document)

Independent runs:

- AA (v5.0.1, Max effort): Intelligence Index **32** (#47/74, below class median 40) vs OpenAI's launch-cited "AA Index **55.0**" (version unstated, launch-era — never cross-compared); AA TB2.1 **88**, AA-HLE **42.9**, AA-GPQA **92.5**, AA-Omniscience Index **0.1** (accuracy 46.8, hallucination **87.9**), AA-LCR **83.0**, CritPt **30.0**, τ² 86.3, Tau3 Banking 40.2, GDPval-AA normalized **47.6%**, AA Coding **76.7**, AA Agentic **43.7**, ITBench 51.0, APEX 38.9, IFBench 71.2, Deepsec 25.1; $3.73/task, 11.5 min/task
- ARC Prize (semi-private): ARC-AGI-1 **96.5**, ARC-AGI-2 **83.9**, ARC-AGI-3 **0.8**
- Vals AI: SWE-bench **95.4**, TB2.1 **77.5** (vs vendor 87.4 / AA 88 — harness gap labelled), LCB 85.9, GPQA-D 90.9, MMLU-Pro 86.7
- Terminal-Bench 4.1 leaderboard **21.5**; TB3.0 20.8; CursorBench 3.2 **64.9** / 4.0 41.3; VulcanBench v3 87.0; ExtractBench 92.26 / ParseBench 67.06; ApprenticeBench 16; MazeBench 6; Gray Swan IPI ASR@15 **37.3** (high prompt-injection susceptibility, from prior cross-model table)
- BenchLM aggregate **69.45/100, #16 of 1026** (70/815 coverage)

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 87.5, CyberGym 81.8, GDPval-AA normalized 47.6% (1,583 vendor Elo), AA Agentic 43.7, TB2.1 87.4/88, full computer_use + hosted_shell toolset — frontier-class agentic capability; capped by Toolathlon 53.1, OSWorld 2.0 50.2, Tau3 40.2, ApprenticeBench 16, MazeBench 6, and Gray Swan injection ASR 37.3.
- **Reasoning: 86/100.** GPQA-D 92.9/92.5, ARC-1 96.5 / ARC-2 83.9 (semi-private), FrontierMath v2 84.9/68.3 (vendor-reported), HLE-V 51.1, CritPt 30.0; heavily capped by **AA-Omniscience index 0.1 with 87.9% hallucination rate** (worst-in-class factuality), AA-HLE 42.9 vs vendor-adjacent 51.1, ARC-3 0.8, and current AA index 32 below its class median.
- **Context window: 86/100.** 1.05M window (922K input cap), AA-LCR 83.0, 90% cache discount; deducted for the >272K 2x/1.5x surcharge (Sol-class penalty pattern) and 128K output cap.
- **Multimodal: 78/100.** Image-in only; MMMU-Pro 80.7 (82 w/ Python, AA confirms 80.7), ExtractBench 92.26 (excellent document extraction); capped by ParseBench 67.06 and no audio/video input or any native generation.
- **Coding: 87/100.** SWE-bench Verified **95.4** (Vals), SWE-Pro 63.4, DeepSWE 69.6, TB2.1 87.4/88, FrontierCode 1.1 Ext 55.8 (Devin), CursorBench 3.2 64.9, AA Coding 76.7, VulcanBench 87.0 — the strongest mini-tier coding profile of its generation; capped by TB4.1 **21.5**, TB3.0 20.8, CursorBench 4.0 41.3 (newest hardest evals collapse).
- **Cost efficiency: 72/100.** $2/$12 with 90% cache discount is fair for the capability, but $3.73 per AA index task is ~3x GPT-6.1 Sol's $1.27–1.47, verbosity is high (102M tokens), TTFT 87.6s at max effort, and the model is deprecated in favor of GPT-6.1 Terra; >272K surcharge adds long-context cost.
- **Overall Score: 84.6/100.** Mean of the five quality dims (86+86+86+78+87)/5 = 84.6. Best-fit: high-volume agentic coding and tool-heavy automation where factuality is externally checked — excellent SWE/DeepSWE/TB2.1 economics at mini-tier pricing; avoid for knowledge-critical answers (87.9% hallucination rate), newest hard-repo evals, or latency-sensitive chat; prefer GPT-6.1 Terra for new deployments.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenAI's official developer docs model page fetched inline with full pricing/endpoint/tool tables, Artificial Analysis' live Max-effort page, BenchLM's 70-row sourced profile, OpenRouter rate card and AA's launch article via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **AA Intelligence Index 55.0 (OpenAI launch-cited, version unstated) vs 32 (current v5.0.1, Max effort)** — different index versions, never compared; **GDPval-AA 1,583 (OpenAI launch) vs 1,528 (Google's 3.8 Flash model-card table)** — cross-vendor discrepancy, both cited; TB2.1 87.4 (vendor) / 88 (AA) vs 77.5 (Vals) — harness gap; pricing $2.50/$15 (launch, AA article) vs $2/$12 (post-Jul-30 cut, official docs) — dated; FrontierMath 84.9 appears under both legacy and v2 T1-3 in BenchLM — possible conflation, labelled; HLE-V 51.1 and LABBench2 81.2 are lab-reported rows carried in Google's model card, not OpenAI's own page. Identity: GPT-5.6 Terra ≠ GPT-5.6 Sol ≠ GPT-5.6 Luna ≠ GPT-6.1 Terra; TB2.1 ≠ TB3.0 ≠ TB4.1; FrontierCode 1.1 Extended ≠ 2.0; ARC-1/2/3 separate.
- Reference URLs:
  - [GPT-5.6 Terra — OpenAI developer docs](https://developers.openai.com/api/docs/models/gpt-5.6-terra)
  - [GPT-5.6: Frontier intelligence that scales with your ambition — OpenAI](https://openai.com/index/gpt-5-6/)
  - [GPT-5.6 Terra (Max) Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-6-terra)
  - [GPT-5.6 benchmarks across Intelligence, Speed and Cost — Artificial Analysis](https://artificialanalysis.ai/articles/gpt-5-6-has-landed)
  - [GPT-5.6 Terra benchmark profile — BenchLM](https://benchlm.ai/models/gpt-5-6-terra)
  - [GPT-5.6 Terra — OpenRouter](https://openrouter.ai/openai/gpt-5.6-terra)
  - [ARC Prize — GPT-5.6 Terra semi-private results](https://arcprize.org/results/openai-gpt-5-6-terra)
  - [GPT-5.6 models in Devin — Cognition](https://devin.ai/blog/gpt-5-6)
  - [Vals AI — GPT-5.6 Terra independent runs](https://www.vals.ai/models/openai_gpt-5.6-terra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.