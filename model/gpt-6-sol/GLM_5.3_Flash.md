# GPT-6 Sol — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model "built to power complex coding and agentic workflows," launched ~3 weeks after flagship GPT-6 Astra; an efficiency release bringing Astra's professional-work, factuality, coding and computer-use gains to a $2/$10 price point. Not a new capability ceiling — its best DeepSWE/OSWorld scores sit below GPT-5.6 Sol's peaks.
- **Provider / access:** OpenAI API (`gpt-6-sol`) via Responses and Chat Completions APIs, with Batch, Flex, Fast and regional data-residency processing options; also in ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu). Providers per BenchLeader: OpenAI $1.00/$5.00 and $4.00/$20.00, Amazon Bedrock $2.20/$11.00 (1.1M context).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff April 20, 2026 (verified via OpenAI API docs and Kingy AI launch analysis).
- **IDs:** `gpt-6-sol` (OpenAI API). No Free ID on OpenCode Zen.
- **Context window:** 1,050,000 total tokens (OpenAI docs; BenchLeader 1.1M; Artificial Analysis lists 872k, vals.ai says 1M) / 128,000 max output. Long-context surcharge: requests over 272K input tokens billed at 2x input / 1.5x output rates.
- **Modalities:** text and image input; text output; reasoning yes with six effort settings (none, low, medium, high, xhigh, max); tool calls: function calling, web search, file search, computer use; structured outputs / JSON mode.
- **Pricing (as of 2026-10-09):** $2.00 / $10.00 per 1M in/out list; a $1.00/$5.00 OpenAI route also visible (BenchLeader provider table, 74 tok/s); cached input reads $0.20 per 1M (90% discount); cache writes $2.50 per 1M; Batch/Flex 50%, Fast 2x. Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed. Output speed 86 tok/s (AA-measured), first answer ~130s at max effort.

### Raw benchmarks found

> Full effort sweep via BenchLeader (data as of 2026-10-09); not-stated/max-effort columns unless noted. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **83.2%** #6 of 73 (corroborates the earlier 83.15% reading)
- Terminal-Bench 4.0: **43.9%** #23 (AA, not-stated; sweep 13.1→43.9); Vals TB4.0: 44.4%; TB Science (Vals): **30.0%** #6; Terminal-Bench (tbench.ai): 49.4% #36
- GDPval-AA v2.1: **50.4%** #45 (AA — fills the previously-missing GDPval row; sweep 37.6→50.4)
- APEX-Agents: **54.3%** #22 (Mercor); AutomationBench (AA): **61.6%**; AA-Briefcase v1.1: **Elo 1480** #28
- CyberBench (Vals): **78.0%** #1; ITBench SRE (AA): **49.4%** #7; Vending-Bench 2: **14427.9** #2 (Andon Labs)
- Harvey's Legal Agent Benchmark: **1.7%** (Vals, #41 — outlier weakness); Legal Research: 28.9% (#41); Tax Agent: 53.0%; MedScribe: 82.0%; MedCode: 47.1%; SAGE: 44.8%
- FACTS Search (Kaggle/Google): **86.2%** #4; GDP.pdf (AA): 25.2%; Harvey LAB (AA): 3.6%
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** #8 (Epoch AI Benchmarking Hub via BenchLeader — fills the previously-missing GPQA)
- HLE: **47.9%** #32 (AA, not-stated; sweep 18.4→34.9→41.0→44.1→46.3→47.9 — fills the previously-missing HLE)
- ARC-AGI-2 (verified): **89.6%** #16 (ARC Prize, not-stated; sweep 31.5→57.8→68.9→78.1→89.6); ARC-AGI-1: **95.5%** #29; ARC-AGI-3: **23.0%** #15
- CritPt: **30.9%** #11 (AA — fills the previously-missing CritPt)
- FrontierMath Tiers 1–3: **89.8%** #5; Tier 4: **90.0%** #8 (Epoch v2); OTIS Mock AIME: **100.0%** #1
- ProofBench: 83.0% (Vals); LiveBench Reasoning: 88.7% #21; LiveBench Math: 96.4% #8; LMArena Hard Prompts: 1482
- SimpleQA Verified: **60.7%** #14 (Epoch); BioMysteryBench: 74.8% #7; EMB: 71.5%; AA-Omniscience: Index 27.1, accuracy 54.5%, non-hallucination 39.9%
- Artificial Analysis Intelligence Index v4.3.2: **47.6** #25 (not-stated; sweep 28.5→47.6 — supersedes the earlier "48 #18" reading); Vals Index: **57.5** #11 (updated from 62.57 #8); Epoch Capabilities Index: **162.7** #7; BenchLeader Index: **66.0 ±3.2** (#33 of 760, max best; Reasoning 72, Composite 73, Knowledge 70)
- LMCA: **59.1%** #23 (Epoch); DTBench: 97.3% #8; FORTRESS: 13.5% (Scale SEAL)

Coding:

- SciCode: **57.6%** #23 (SciCode via Epoch — fills the previously-missing SciCode; clears the 55%+ frontier mark)
- ALE-Bench: **2462** #2 (Epoch); LMArena WebDev: **1688** #8; LMArena Coding: 1519 #37; LiveBench Coding: 81.8% #13
- Vibe Code Bench v1.1: **87.8%** #9 (Vals); IOI: 82.6% #10 (Vals); Code Migration: 57.2% #7; ProgramBench: 2.0% fully resolved
- DeepSWE v1.1: **68.8%** max ($2.74/task; OpenAI vendor-reported — below GPT-5.6 Sol 72.7% and Claude Opus 5 73.7%)
- FrontierCode 1.1 Main: **49.3%** #9 (Cognition; below Opus 5 53.4% and Fable 5.1 medium 50.9%)
- SWE-bench Verified: no verified public score found

Long context:

- AA-LCR: **83.7%** #15 (AA, high/not-stated — fills the previously-missing long-context measurement); MLCR: **16.1%** #26 (AA); no MRCR/RULER/GraphWalks value verified

Multimodal / vision:

- MMMU-Pro: **83.0%** #28 (AA, not-stated; sweep 80.2→82.0→82.5→83.0 — fills the previously-missing vision measurement); SAGE (Vals): 44.8%; Blueprint-Bench 2: 36.9% #7

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 83.2% (#6/73) and the filled GDPval-AA 50.4% #45 with CyberBench 78.0% #1 and AutomationBench 61.6% hold the upper band; weak TB4.0 (43.9%/44.4%), TB Science 30.0% and the near-zero 1.7% Harvey LAB cap it under 90.
- **Reasoning: 90/100.** Now fully verified instead of composite-only: GPQA 94.3% (#8), HLE 47.9%, ARC-AGI-2 89.6% (#16), FrontierMath T1–3 89.8% (#5) / Tier 4 90.0% (#8), OTIS Mock AIME 100% (#1), CritPt 30.9% (#11) — clear frontier-band placement (GPQA 90%+, HLE 40%+).
- **Context window: 95/100.** 1.05M tokens (≥1M tier, 95–100) with 128K output; the filled AA-LCR 83.7% (#15) and LMCA 59.1% are strong but below the ≥98% bar; the >272K surcharge keeps it off the maximum.
- **Multimodal: 80/100.** Text + image input only, text output — but the measured MMMU-Pro 83.0% (#28) lifts it above the 60–70 image-in band into the 75–90 range's lower half.
- **Coding: 86/100.** ALE-Bench 2462 (#2), LMArena WebDev 1688 (#8), Vibe Code Bench 87.8%, SciCode 57.6% (#23) and DeepSWE 68.8% are strong; FrontierCode 49.3% trails Opus 5/Fable 5.1 and missing SWE-bench Verified prevents 90+.
- **Cost efficiency: 85/100.** $2/$10 per 1M list (a $1/$5 route also visible) with a 90% cache discount ($0.20 cached) sits between the ~$1.25/$4.25 = ~88 and $3/$15 = ~60 references; large per-task advantages (11.1x cheaper than Opus 5 on AutomationBench) support the upper end of that band.
- **Overall Score: 87/100.** Mean of the five quality dims (85 + 90 + 95 + 80 + 86) / 5 = 87.2 → 87. Best-fit: default model for agent pipelines and business automation where score-per-dollar matters more than peak coding/computer-use performance — now with verified frontier reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09, vals.ai, Artificial Analysis, OpenAI launch-chart analysis cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds measured GPQA 94.3% #8, HLE 47.9%, ARC-AGI-2 89.6% #16, FrontierMath 89.8%/90.0%, OTIS 100% #1, CritPt 30.9% #11, GDPval-AA 50.4%, MMMU-Pro 83.0%, SciCode 57.6% #23, AA-LCR 83.7% #15, CyberBench 78% #1 — Reasoning 80→90, Multimodal 65→80, Coding 85→86, Overall 82→87.
- Future sources: add a new file next to this one, e.g. `GPT_6.1.md`, using the same headings.
