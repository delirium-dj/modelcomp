# GPT-6 Astra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: BenchLM (`gpt-6-astra`, **86 rows**, **86.07/100, #3 of 1008** — was 55 rows, 84.03, #3 of 228), Artificial Analysis model page, OpenAI model/pricing docs, OpenAI deployment-safety system card, ARC Prize, Epoch AI, LlamaIndex snapshots.
> **Refreshed values:** GDPval-AA Elo **1584** (was 1574); AA-Briefcase **1568** (was 1570); AA Terminal-Bench 4.0 **59.1%** (was 57.9–59%); AA Intelligence Index **56.9** (v4.3.2); AA-HLE 54.7%; AA-Omniscience **index 42.4 / accuracy 61.6% / hallucination 49.8%**; AA-GPQA 96.1%; FrontierMath v2 Tiers 1–3 **93.684%** (new, extends the Tier-4 97.6% row).
> **Newly captured rows:** **LiveVal 80.6%** (OpenAI); FrontierCode 2.0 **42.8%** (Cognition); ScarfBench **65.4%**; ExtractBench **91.91% / Pro 58% / ParseBench 69.88%** (LlamaIndex 2026-10-28 snapshots); AA Tau3-Banking 41.4%, AA ITBench 48.6%, AA-AnalystAgent 51.2%, GDP.pdf 31.0%; Hermes Index 56.3 / Bench 73.7; MazeBench 23%; OSWorld 2.1 75.8% (fallback-config row via Muse Wonder model card); Gray Swan IPI 8.5%; HealthBench raw 56.9 / length-adj 58.3 / Hard 36.6; cyber rows (AA Cyber Index 33.4, CWE-Bench-AA 63.3, CyberGym-E2E-AA 0.0%).
> **Resolved:** the context conflict — OpenAI lists **1,050,000 context with 922,000 max input** (the 922K reading was the input cap, not the window) and 128K max output; **>272K reprices the whole call at 2× input ($20) / 1.5× output ($75)** — confirmed.
> **No score change:** refreshed evidence reconfirms the frontier agentic/scientific profile at premium pricing; scores held at 90.
> Sources this pass: https://benchlm.ai/models/gpt-6-astra · https://artificialanalysis.ai/models/gpt-6-astra · https://developers.openai.com/api/docs/models/gpt-6-astra · https://deploymentsafety.openai.com/gpt-6-astra · https://arcprize.org/results/openai-gpt-6-astra · https://cognition.com/blog/frontier-code-2.0

> **Re-verified 2026-10-18.** BenchLM (`gpt-6-astra`, 55 rows) computed an overall **84.03/100 (#3 of 228)** and re-confirmed the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: GPQA Diamond 96.0% (llm-stats #1), ARC-AGI-1 98.5%, ARC-AGI-2 95% (ARC Prize verified), ARC-AGI-3 62.7% (ARC Prize verified), FrontierMath Tier 4 v2 97.6%, HLE w/ tools 57.2%, MRCR v2 256K–512K 100% / 512K–1M 96.3%, Terminal-Bench 2.1 87.3% (Vals) / 88.4% (AA), Terminal-Bench 4.0 57.9–59% (Vals/AA), OSWorld 2.0 72.6%, BrowseComp 91.5%, ApprenticeBench 68%, Agents' Last Exam 59.3%, AutomationBench-AA 68.5%, GDPval-AA 1574 Elo, DeepSWE 74.1%, AA Coding Index 76.9%, SWE-Atlas Codebase QnA 59.14 (Codex xHigh), AA-MMMU-Pro 86.9%, ScreenSpot Pro 92.7%, BenchLM overall 83.5 (#3/932). Conflicts surfaced: ARC-AGI-3 62.7% (verified) vs 99.9% (day-0 post); GDPval-AA Elo vs normalized spread; context 1.05M vs 922K; pricing $10/$50 vs $13/$65; SWE-bench Verified/Pro undisclosed.

## Model card

- **Name:** GPT-6 Astra (API ID `gpt-6-astra`)
- **Short description:** OpenAI's flagship above GPT-5.6 Sol, the first model on the GPT-6 name; built for long-horizon agentic coding, computer use, deep research and scientific work. Superseded by the GPT-6.1 line (Sol 2026-09-28, Terra 2026-10-26).
- **Provider / access:** OpenAI Responses API, ChatGPT tiers, AWS Bedrock, Azure; closed; no fine-tuning.
- **Release / knowledge:** 2026-09-03; knowledge cutoff **2026-04-30** (LiteLLM, AA).
- **IDs:** `gpt-6-astra`; Zen `gpt-6-astra`.
- **Context window:** 1,050,000 (1.05M) total; **922,000 max input**; **128,000 max output**; requests >272K reprice the whole call.
- **Modalities:** text + image in, text out; reasoning (`low`/`medium`/`high`/`xhigh`); tool calls.
- **Pricing (as of 2026-11-04):** $10 in / $50 out per 1M; cached $1; cache writes $12.50; >272K tier reprices to $20/$75 (2× input/cache, 1.5× output) for the full request; Batch 50%; flex half / priority 2×.
- **Architecture:** undisclosed (anonymized press reports of "recurrent depth" remain unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **87.3%** (Vals) / **88.4%** (AA); Terminal-Bench 4.0 **59.1% (AA)** / 57.9% (OpenAI)
- BrowseComp **91.5%**; OSWorld 2.0 72.6%; OSWorld 2.1 75.8% (fallback-config row); Terminal-Bench-Science 0.1 64.6%; CWE-bench v1 68.0%
- **LiveVal 80.6%**; ApprenticeBench 68%; Agents' Last Exam 59.3%; AutomationBench-AA 68.5% / Zapier 41.4%; ExploitGym 42.4%
- GDPval-AA **1584 Elo**; AA-Briefcase **1568**; AA Agentic Index 51.5%; AA Tau3-Banking 41.4%; AA ITBench 48.6%; AA-AnalystAgent 51.2%; GDP.pdf 31.0%
- Hermes Index 56.3 / Hermes Bench 73.7; MazeBench 23%; cyber: AA Cyber Index 33.4, CWE-Bench-AA 63.3, DeepsecBench-AA 36.9, CyberGym-E2E-AA **0.0%**
- MCP Atlas / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **96.0%** (llm-stats #1; AA 96.1%); HLE w/ tools 57.2% (AA-HLE 54.7%); HealthBench Professional 64.7% (raw 68.2, Hard 36.6, raw 56.9 / length-adj 58.3)
- FrontierMath Tier 4 v2 **97.6%**; Tiers 1–3 **93.684%** (Epoch AI); ARC-AGI-1 97.5%; ARC-AGI-2 **95%**; ARC-AGI-3 **62.7%** / provider adapter 98.55% (ARC Prize verified)
- AA-LCR 80.7%; AA Intelligence Index **56.9**; MRCR v2 256K–512K 100% / 512K–1M 96.3%; GraphWalks BFS 256K–1M 71.8%; MLCR-AA 41.7%
- CritPt 31.7%; GeneBench-Pro 37.8%; AA-Omniscience index 42.4 / accuracy 61.6% / hallucination 49.8%; BenchLM overall **86.07 (#3/1008)**

Coding:

- DeepSWE **74.1%**; AA Coding Index 76.9%; FrontierCode 1.1 Main 53.3% / Extended 64.5%; **FrontierCode 2.0 42.8%** (Cognition); ScarfBench **65.4%**
- FrontierSWE v2 65.5%; PostTrainBench v1.1 44.3%; Bug Hunt Bench 45.0 fixes; AA-SciCode 56.5%
- SWE-Atlas Codebase QnA 59.14 (Codex xHigh, Scale Labs); SWE-bench Verified/Pro **not disclosed**

Multimodal / long context:

- AA-MMMU-Pro **86.9%**; ScreenSpot Pro 92.7%; BenchCAD Vision2Code 0.959; ExtractBench **91.91%** / Pro **58%** / ParseBench 69.88% (LlamaIndex)
- MRCR v2 512K–1M 96.3% (vendor) — near-flat retention at full window

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 87–88%, BrowseComp 91.5%, OSWorld 2.0 72.6% and GDPval-AA 1584 make it a top computer-use/coding agent; capped by the absence of MCP Atlas/Toolathlon and gated ExploitGym.
- **Reasoning: 95/100.** GPQA 96.0–96.1% (#1-class), ARC-AGI-2 95%, FrontierMath T4 97.6% and HLE w/ tools 57.2% are frontier-leading; a 49.8% Omniscience hallucination rate and the ARC-AGI-3 scaffold gap are surfaced rather than averaged away.
- **Context window: 97/100.** 1.05M window with 922K max input, 128K output and vendor MRCR 96.3% at 512K–1M (near-flat); the 272K billing step-up is the only caveat.
- **Multimodal: 82/100.** Strong image/document work (AA-MMMU-Pro 86.9%, ScreenSpot Pro 92.7%, ExtractBench 91.91%) but text + image only — no audio/video in and no non-text output.
- **Coding: 87/100.** DeepSWE 74.1%, AA Coding Index 76.9%, FrontierCode Extended 64.5% and SWE-Atlas 59.14 are elite; SWE-bench Verified/Pro omission, FrontierCode Main 53.3% and FrontierCode 2.0 42.8% keep it just under 90.
- **Cost efficiency: 40/100.** $10/$50 per 1M (the ~30 anchor) with a 2×/1.5× repricing past 272K; 90%-off cached reads are the only relief.
- **Overall Score: 90/100.** (91 + 95 + 97 + 82 + 87) / 5 = 90.4 → 90. Best fit: agentic coding, computer-use automation and long-horizon research where terminal-class performance matters more than chat economics.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (OpenAI model/pricing docs + deployment-safety system card, BenchLM re-read 2026-11-04 with 86 rows, Artificial Analysis, ARC Prize, Epoch AI, Cognition FrontierCode 2.0, LlamaIndex snapshots). Refreshed AA rows, captured the new LiveVal/FrontierCode 2.0/ScarfBench/ExtractBench/cyber rows, resolved the 922K-vs-1.05M context reading; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6 Astra model page](https://openai.com/index/gpt-6-astra/)
  - [OpenAI — GPT-6 Astra deployment safety](https://deploymentsafety.openai.com/gpt-6-astra)
  - [BenchLM — GPT-6 Astra benchmark scores](https://benchlm.ai/models/gpt-6-astra)
  - [Artificial Analysis — GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra)
  - [ARC Prize — GPT-6 Astra results](https://arcprize.org/results/openai-gpt-6-astra)
  - [Cognition — FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
