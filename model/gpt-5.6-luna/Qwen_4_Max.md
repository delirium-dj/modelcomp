# GPT-5.6 Luna — findings by Qwen 4 Max

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** Cost-optimized member of the GPT-5.6 family (Sol flagship / Terra balanced / Luna budget), roughly the nano tier of earlier GPT-5 families, designed for high-volume workloads; surprisingly frontier-adjacent math/coding for its price. Distinct from GPT-6 Luna (successor), GPT-5.6 Sol/Terra/Cyber.
- **Provider / access:** OpenAI API `gpt-5.6-luna` — Chat Completions + Responses + Batch (no fine-tuning/realtime); full Responses toolset: web_search, file_search, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, image_generation, tool_search. Amazon Bedrock `openai.gpt-5.6-luna`; AA counts 7 providers; OpenCode Zen $0.20/$1.20 (>272K $0.40/$1.80). **Deprecated** — AA banner points to GPT-6 Luna.
- **Release / knowledge:** GA 2026-07-09 (with the GPT-5.6 family); knowledge cutoff Feb 16, 2026.
- **IDs:** `gpt-5.6-luna` (default snapshot); no Free tier.
- **Context window:** 1,050,000 total; max input 922,000; max output 128,000 (official docs).
- **Modalities:** Text + image in, text out; reasoning efforts none / low / medium (default) / high / xhigh / max (AA measures max); reasoning-token support.
- **Pricing (as of 2026-11-13):** $0.20 in / $0.02 cached (90% off) / $1.20 out per 1M; >272K input priced 2× input / 1.5× output for the full request; cache writes 1.25× uncached input. AA blended $0.17/M (7:2:1), $0.33/task. Rate limits Build 5K RPM/2M TPM → Grow 30K/180M.
- **Architecture:** Proprietary; parameters undisclosed. GPT-5.6 system card at deploymentsafety.openai.com (not fetched this pass).

### Raw benchmarks found

Vendor-reported — GPT-5.6 launch announcement (rows via BenchLM's cited carriage; announcement page itself 403):

Agent / tool use:

- BrowseComp: **83.3%**; GDPval-AA: **1582 Elo** (AA v2.1 normalized **48.0%**); OSWorld 2.0: **45.6%**; Toolathlon: **53.4%** (AA v4.1 launch table: 67.9 — harness/run difference, labelled)
- Terminal-Bench 2.1: **84.7%** (AA independent 80.9; Vals 79.0); CyberGym: **77.9%**; ExploitGym: **12.4%**
- AA carriages: Agentic Index 42.7, EnterpriseOps 40.8, ITBench 40.3, APEX-Agents 35.8; MCP Atlas **77.0**, τ³ **24.3** (AA v4.1 launch table, effort 0.99)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** vendor (AA 91.1; Vals 91.7); AA-HLE: **39.5**; HealthBench Professional: **55.7** (HealthBench Hard 32.0, system card)
- FrontierMath legacy / v2 Tiers 1–3: **78.6**, Tier 4: **58.5**; AIME26 **97.6**, HMMT **98.5**, CritPt **20.6**, SimpleQA 41.7 (AA v4.1 table)
- ARC Prize semi-private: ARC-1 **88.0**, ARC-2 **59.5**, ARC-3 **0.2** (v4.1 launch table had ARC-2 47.6 — labelled)
- AA Intelligence Index: **24 live (v5.0.1, max), #18/36 price class** (median 24); vendor launch claim 51.2 and AA v4.1 49.0 are older index versions — never compared. AA-Omniscience: net **−10.3**, accuracy 42.7%, hallucination **92.6%**.
- BenchLM overall: **63.2, #37/1033** (72/830 rows).

Coding:

- SWE-bench Verified: **93.0** (Vals independent + AA v4.1 table); SWE-Pro: **62.7%**; DeepSWE: **67.2%**
- FrontierCode 1.1 Extended: **55.1** (Cognition/Devin lab-reported); CursorBench 3.2: **61.1** / 4.0: **35.9**; AA Coding Index **71.5**, AA-SciCode **53.6**
- VulcanBench v3: **85.5** / Frontier v4: **84.2**; Terminal-Bench 4.1: **17.6**, TB 3.0: **14.3** (hard frontier tiers weak)

Multimodal / long context:

- MMMU-Pro: **78.4** vendor / **78.6** AA; w/ Python **79.5**; CharXiv **81.4** (v4.1 table); ExtractBench **91.16**, ParseBench **66.86** (LlamaIndex, Nov 12 snapshot)
- AA-LCR: **83.7** at the 1.05M window; >272K surcharge applies; no MRCR/MLCR found
- ApprenticeBench 7, MazeBench 0 (GUI/spatial probes weak); Design Arena not found

Performance / cost-in-practice:

- AA: 108 tok/s, TTFT (first answer token) 71.72s at max, 9.1 min/task, 109M index tokens; $0.33/task
- Cognition/Devin: Luna "delivers the lowest cost per task of any model we tested" on FrontierCode 1.1 (July 9, 2026)

### Normalized scores (1–100)

- **Tool use: 81/100.** BrowseComp 83.3, MCP Atlas 77.0, GDPval 1582, TB2.1 ~81–85 and the full computer_use/mcp toolset are exceptional for a nano-tier model; capped by OSWorld 2.0 45.6, τ³ 24.3, EnterpriseOps 40.8 and ApprenticeBench 7.
- **Reasoning: 83/100.** AIME26 97.6, HMMT 98.5, FM v2 78.6/58.5, GPQA 91–92, ARC-2 59.5 and HLE 39.5 approach flagship math; capped by Omni −10.3 (hallucination 92.6%), SimpleQA 41.7, IFBench 67.3 and live index 24 at class median.
- **Context window: 87/100.** 1.05M with LCR 83.7 and 128K output matches the surcharged-1M tier of GPT-5.4/6.1 Terra; capped by the 2×/1.5× >272K surcharge, 922K input partition and no MRCR evidence.
- **Multimodal: 77/100.** Image input with MMMU-Pro 78.4–79.5, CharXiv 81.4 and ExtractBench 91.16 is solid mid-band; capped by no video/audio and weak GUI/spatial probes.
- **Coding: 84/100.** SWE-V 93.0, SWE-Pro 62.7, DeepSWE 67.2, TB2.1 84.7, FrontierCode 1.1 Ext 55.1 and AA Coding 71.5 are near-flagship; capped by TB4.1 17.6 / TB3.0 14.3 and CursorBench 4.0 35.9.
- **Cost efficiency: 92/100.** $0.20/$1.20 with 90% cache discount, $0.33/task measured and Devin's lowest-cost-per-task verdict make this outstanding value; capped by the >272K surcharge, slow max-effort TTFT 71.72s and deprecated status.
- **Overall Score: 82.4/100.** (81+83+87+77+84)/5 = 82.4. Best fit: high-volume cost-sensitive agentic and coding workloads needing 1M context and full tools at nano-tier prices (historical reference — successor GPT-6 Luna now preferred).

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official developers.openai.com model doc read in full, AA live page, BenchLM full row set, Cognition/Devin launch post); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA live index 24 (v5.0.1) vs vendor launch claim 51.2 vs AA v4.1 49.0 (different index versions); ARC-2 59.5 (ARC Prize semi-private) vs 47.6 (v4.1 table); GDPval 1582 vs 1530 and BrowseComp 83.3 vs 84.0 (vendor vs v4.1 runs); TB2.1 84.7 vendor / 80.9 AA / 79.0 Vals; Toolathlon 53.4 vendor vs 67.9 v4.1 (harness difference); GPQA 92.3 / 91.1 / 89.5 across runs. AA v4.1 effort-0.99 rows carried from the Inkling-Small launch comparison table (fetched earlier in this research task); launch-announcement rows via BenchLM's cited carriage (openai.com/index 403).
- Reference URLs:
  - [GPT-5.6 Luna — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.6-luna)
  - [GPT-5.6 Luna (max) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-6-luna)
  - [GPT-5.6 Luna — BenchLM](https://benchlm.ai/models/gpt-5-6-luna)
  - [GPT-5.6 models in Devin — Cognition](https://devin.ai/blog/gpt-5-6)
  - [Inkling-Small launch comparison (AA v4.1 peer table incl. Luna) — Thinking Machines](https://thinkingmachines.ai/news/inkling-small/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. GPT-5.6 system card PDF and the openai.com/index/gpt-5-6 announcement (403 this pass) are good verification targets.