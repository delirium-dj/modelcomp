# GPT-6 Astra — findings by Step 5 Preview

- Source: OpenAI `gpt-6-astra`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (`gpt-6-astra`; API model ID `gpt-6-astra`, effort variants `-low/-medium/-high/-xhigh/-max`, `gpt-6-astra-pro`)
- **Short description:** OpenAI's flagship reasoning model (above GPT-5.6 Sol / the Sol-Terra-Luna family), built for the hardest end-to-end work — agentic coding, computer use, authorized cybersecurity research. First OpenAI model rated Critical on the Preparedness Framework's cybersecurity threshold.
- **Provider / access:** OpenAI API, ChatGPT plans, Codex; also AWS Bedrock + Azure. Fine-tuning not supported. No free tier (tier-1 rate limits only).
- **Release / knowledge:** Released 2026-09-03 (staged rollout; llm-stats logs 2026-09-04). Knowledge cutoff April 2026.
- **IDs:** `gpt-6-astra` (+ effort suffixes). No free/contributor ID.
- **Context window:** 1,050,000 (1.05M) input; 128,000 max output. Separate pricing tier above a fixed token threshold.
- **Modalities:** Text, image in; text out. No audio/video input; no image output. Reasoning yes; tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $10.00/M in · $1.00/M cached in · $50.00/M out (Standard). Above the threshold: 2× input / 1.5× output. Batch/Flex half; Fast double; Ultrafast $60/$300 (up to 6× faster). No free tier.
- **Architecture:** Proprietary; architecture and parameter count undisclosed (trained at the Stargate site in Texas).

### Raw benchmarks found

> Cross-referenced hokai.io (Artificial Analysis + OpenAI), vectorwire.ai (176 results/63 benchmarks, 43 independent, capability profile), and llm-stats. Independent runs noted where available.

- BenchLM composite (2026-10-19): **84.05/100** overall, #3 of 956 models, 75 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **53** (#7/217, 4/4 units — matches the prior max read, now top-10 overall), 66.5 tok/s (#124/186 — slow), TTFT 265.10s, $10.00/$50.00 with 90% cache discount (blended $7.70/M; $3.26 per Index task), 1M context, 11 providers, knowledge cutoff 2026-04-30, 60M Index tokens (concise vs the 85M median) — NOT deprecated on AA

Agent / tool use:

- Artificial Analysis Intelligence Index: **53** (max effort; hokai — below Claude Opus 5.5 and Fable 5.1, $3.26/index task, 51 tok/s)
- ExploitBench (cybersecurity): leads GPT-5.6 Sol (OpenAI's clearest edge)
- Vals Index: **63.1%** (vectorwire cross-ref)
- Terminal-Bench-Science 0.1: **64.6%** (vectorwire cross-ref)
- ScreenSpot-Pro (computer use): leads GPT-5.6 Sol
- Vector Wire capability: **Agentic "Capable"** (−11.1% vs leader, 5/7); **Instruction Following "Limited"** (−30.4%)
- Terminal-Bench 2.1 (Vals AI Terminus-2): **87.3%** (max, independent — reported 2026-09-28) — strong agentic-terminal result
- SWE Atlas Codebase QnA: **59.1%** (Scale AI Codex harness, independent) / **47.8%** (Mercor mini-swe-agent, independent) — real codebase navigation
- SWE Atlas Refactoring: **59.1%** (Scale AI Codex, independent)
- BenchCAD Vision2Code: **95.9%** (OpenAI, with tools)
- AutomationBench 1.0.6: **41.4%** (max, OpenAI self-reported) / **25.3–30.3%** (independent Zapier lower-effort runs)
- BrowseComp 130-q: **94.2%** (Mercor web-research agent, xHigh, independent)
- New independent rows (2026-10-19): Terminal-Bench 4.0 **57.9%** (OpenAI) / **59.1%** (AA) — the file's missing TB4.0 row, strong on the hardest suite; Agents' Last Exam **59.3%**, OSWorld 2.0 **72.6%**, ExploitGym **42.4%**, AutomationBench **41.4%** (reconfirmed) / AA AutomationBench **68.5%**, BrowseComp **91.5%** (OpenAI row — alongside the 94.2% Mercor read), GDPval-AA **53.6% normalized / Elo 1,573** (AA), AA Briefcase **Elo 1,569**, AA Agentic Index **51.5%**, AA-AnalystAgent **51.2%**, AA ITBench **48.6%**, AA Tau3 Banking **41.4%**, ApprenticeBench **68%**, AA TB2.1 **88.4%**, CWE-bench v1 **68.0%**, Hermes Index **56.3%** / Hermes Bench **73.7%**, MazeBench **23%**, GDP.pdf **31.0%**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; hokai rank #2/50) — near-ceiling
- Vector Wire capability: **Reasoning "Frontier"** (leads 6/6); **Factuality "Frontier"** (leads 3/4); **Math "Frontier"** (−1.5%)
- Artificial Analysis Intelligence Index: **53** (max effort)
- Humanity's Last Exam: trails a leading rival on the broad open-ended knowledge exam (per hokai) — exact value not surfaced live
- AIME 2025: no verified public score found for Astra (OpenAI skipped several standard launch benchmarks)
- ARC-AGI: headline holds only in a persistent test configuration with cross-call memory, NOT in single-shot API (per hokai "Quirks")

Coding:

- Vector Wire capability: **Coding "Capable"** (−20.9% vs leader, 5/10)
- GPQA Diamond 96.0% is strong, but OpenAI skipped SWE-bench Verified / SWE-bench Pro / LiveCodeBench at launch — a notable flagship gap
- Terminal-Bench / ScreenSpot-Pro lead GPT-5.6 Sol on agentic terminal + computer use
- SWE-bench Verified / SWE-bench Pro: **no verified public score found** for Astra (not published at launch)
- ExploitBench / cybersecurity coding: leads GPT-5.6 Sol

Long context:

- 1.05M input / 128K output; long-context recall "stays strong deep into the window on OpenAI's own retrieval test" (hokai)
- Vector Wire: Long Context **"Strong"** (−10.0% vs leader)
- **MRCR v2 now published (2026-10-19, OpenAI via BenchLM): 100.0% at 256K–512K and 96.3% at 512K–1M** — the first explicit retrieval figures for Astra, just under the ≥98%-at-512K bar for the top tier; AA-LCR **80.7%**, GraphWalks BFS 256K–1M **71.8%**
- New knowledge/reasoning rows (2026-10-19): AA-HLE **54.7%** (fills the file's "HLE trails, value not surfaced" gap — clears the 40% bar by a wide margin), ARC-AGI-1 **97.50%** / ARC-AGI-2 **95.0%** / ARC-AGI-3 **62.7%** (ARC Prize; +98.55% via the Provider Adapter), Epoch/OpenAI FrontierMath v2 Tiers 1–3 **93.684%** / Tier 4 **97.600%** (the strongest math in this comparison), CritPt **31.7%**, STEMBench **2.81**, GeneBench-Pro 37.8%, MLCR-AA 35.0%, AA-Omniscience accuracy **62.6%** / index **43.4%** / hallucination **51.3%** (best calibration measured), HealthBench Professional 64.7%, AA-IFBench-equivalent Gray Swan IPI **8.5%**
- New coding rows (2026-10-19): DeepSWE **74.1%** (OpenAI), FrontierSWE v2 **65.5%**, FrontierCode 1.1 Main **53.3%** / Extended **64.5%** (OpenAI), AA-SciCode **56.5%**, AA Coding Index **76.9%**, PostTrainBench 44.3%, Bug Hunt Bench **45.0 fixes** (field-leading); ScreenSpot Pro **92.7%** and BenchCAD Vision2Code **0.959** (computer use); AA-MMMU-Pro **86.9%** (first published MMMU for Astra)

Multimodal:

- Text + image in; text out. No audio/video, no image output.
- **Tool use: 82/100.** AA Intelligence Index 53, independent Terminal-Bench 2.1 87.3% (Vals Terminus), BrowseComp 94.2% (Mercor), SWE Atlas 59.1% (Scale AI), and ExploitBench/ScreenSpot-Pro leads over GPT-5.6 Sol are solid. Capped by Vector Wire's Agentic "Capable" (−11.1%) and Instruction Following "Limited" (−30.4%), plus lower-effort independent AutomationBench (25–30%) — agentic breadth trails its reasoning lead.
- **Reasoning: 93/100.** GPQA Diamond 96.0% (rank #2/50) and AA Intelligence Index 53 with Vector Wire rating Reasoning/Factuality/Math all "Frontier". Capped by an HLE that trails the leading rival, no verified AIME row, and the ARC-AGI headline that only holds in a persistent-memory config (not single-shot API).
- **Context window: 93/100.** 1.05M input with the MRCR v2 profile now published (OpenAI, 2026-10-19): **100.0% at 256K–512K and 96.3% at 512K–1M**, plus AA-LCR 80.7% and GraphWalks 71.8% at 256K–1M. Raised from 90 (the old cap was the absent MRCR figure); the 96.3% top-end read sits just under the ≥98%-at-512K bar for a full 100, and the output cap is 128K.
- **Multimodal: 72/100.** Text + image in (text out), no audio/video input and no non-text output → just into the 60–70 "+image in" band, nudged up by computer-use strength; Vector Wire rates Multimodal "Capable" (−21.9%, 1/6).
- **Coding: 82/100.** Strong on OpenAI's chosen agentic-terminal/computer-use and cybersecurity-coding evals (ExploitBench, ScreenSpot-Pro lead GPT-5.6 Sol) and GPQA 96%, but Vector Wire rates Coding "Capable" (−20.9%, 5/10) and OpenAI published NO SWE-bench Verified / SWE-bench Pro / LiveCodeBench at launch — a real flagship gap that caps the coding score.
- **Cost efficiency: 30/100.** Paid-only at $10/$50 per 1M (the most expensive tier tracked, >95% of models); cached $1/M, Batch/Flex half, but Ultrafast $60/$300. No free tier.
- **Overall Score: 84/100.** Mean of the five non-cost dims (82+93+93+72+82)/5 = 84.4 (Context raised 90→93 on the newly published MRCR v2 100%/96.3% profile; Overall unchanged). Best fit for the hardest reasoning, math, and authorized-security/computer-use work where its price is justified; the cheaper GPT-6.1 Sol is pitched as close in ability for general coding.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (Index 53, #7/217, 4/4 units — unchanged and now top-10 overall; 66.5 tok/s; TTFT 265.10s; $10/$50 confirmed; 60M Index tokens — concise; not deprecated) and BenchLM (composite 84.05/100, #3/956, 75/644 benchmarks): the file's open gaps are largely filled — AA-HLE 54.7%, MRCR v2 100.0% @256K–512K / 96.3% @512K–1M, Terminal-Bench 4.0 57.9–59.1%, DeepSWE 74.1%, FrontierSWE v2 65.5%, ARC-AGI-2 95.0%, Epoch FrontierMath v2 T4 97.6%, AA-MMMU-Pro 86.9%, AA-Omniscience hallucination 51.3% (best calibration measured). Context raised 90→93 on the newly published MRCR profile (just under the ≥98% bar); Overall unchanged at 84. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (61 primary-source results, updated 2026-10-07 — independent TB2.1 87.3%, BrowseComp 94.2%, SWE Atlas 59.1%, AutomationBench up to 41.4%) and the Artificial Analysis live LLM leaderboard (Intelligence Index 53, max). Prior pass (2026-10-08) used hokai.io (Artificial Analysis + OpenAI), vectorwire.ai, and llm-stats.com.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

- Vector Wire: Multimodal **"Capable"** (−21.9% vs leader, 1/6)

### Normalized scores (1–100)
