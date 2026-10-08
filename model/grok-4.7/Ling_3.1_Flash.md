# Grok 4.7 — findings by Ling 3.1 Flash

- Source: SpaceXAI (`opencode/grok-4.7`; API `grok-4.7`; Grok API, Cursor, Grok Build, routers and clouds)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's September-2026 flagship for long-running coding and knowledge work — DeepSWE v1.1 71.0% (high), CursorBench 4.0 46.3%, AA Briefcase v1.1 1,657, HLE 43.1%, SciCode 57.4%, with a 500K context at $2/$6 per 1M below 200K; a larger new base model (reported 2.1T parameters, unconfirmed) with a longer RL run weighted toward multi-hour tasks.
- **Provider / access:** SpaceXAI (xAI) — Grok API, Cursor, Grok Build (free trial), third-party coding harnesses, model routers and cloud platforms; reasoning effort low/medium/high (default)/xhigh; `noFreeId`.
- **Release / knowledge:** 2026-09-21; knowledge cutoff not published.
- **IDs:** `opencode/grok-4.7` / `grok-4.7`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 500K-token window and takes text and image input.
- **Context window:** 500,000 tokens.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.00/$6.00 per 1M input/output below 200K prompt tokens; at 200K+ the higher $4/$12 rate applies to the whole request; cache read $0.50/M (25% of input); web search $5.00/1K calls; Batch API not supported; a fast variant runs at 2× output speed for 2× price; 78 tok/s median, 30.92s TTFT (AA, xhigh).
- **Architecture:** proprietary; new larger base than Grok 4.6 (reported 2.1T parameters — xAI has not published it; Grok 4.6 was a post-training upgrade on the 1.5T V9 foundation); longer RL run on multi-hour tasks; natively understands the Grok Bot harness; new safeguard stack (strong jailbreak resistance, low refusal on legitimate cybersecurity/biology work — LatchBio biosafety 62.4%, HackerBench v0.3 3.3% risky dual-use pass-through).

### Raw benchmarks found

Agent / tool use (xAI launch table, Grok 4.7 xhigh vs Grok 4.6 high / GPT-5.6 Sol max / Fable 5.1 max):

- CursorBench 4.0 (long-running coding): **46.3%** (vs 40.4% / 41.7% / 51.8%) — frontier price-performance per xAI
- DeepSWE v1.1: **71.0%** (*high effort*; vs 65.2% / 72.7% / 70.0%)
- AA Briefcase v1.1 (multi-hour office work): **1,657** (vs 1,546 / 1,487 / 1,678)
- Terminal-Bench 4.0 (multi-hour terminal work): **38.0%** vendor-reported (vs 20.3% / 37.3% / 57.9%); **28.3** independently (TensorFeed, 66-task all-or-nothing harness)
- Harvey Legal Agent Benchmark: **19.6%** (vs 15.8% / 2.5% / 6.7%) — best in table
- HealthBench Professional (clinical reasoning): **56.7%** (vs 48.5% / 60.5% / 62.1%)
- EEBench (electrical engineering): **64.0%** (vs 53.0% / 39.4% / 56.4%) — best in table
- LatchBio biosafety: **62.4%** (tops that evaluation, per xAI)

Independent (Artificial Analysis, xhigh effort unless noted):

- AA Intelligence Index: **46.3–46.4** (twelve points behind the leader; a newer, harder Index version than Grok 4.6's 61 — not cross-comparable)
- HLE: **43.1%**
- AA-LCR (long-context retrieval): **76.7%**
- GDPval-AA: **59.8%**; CritPt: **17.7%**; SciCode: **57.4%**
- AA-Omniscience: accuracy **47.4%**, non-hallucination **70.7%**
- Vals Index: **60.22%** (10th of field)
- LMArena Text: **1397 Elo** (xhigh); LMArena WebDev: **1638** (xhigh)
- Design Arena Elo: dataviz 1235, gamedev 1302, UI component 1228, website 1239

Reasoning / knowledge (beyond the above):

- GPQA Diamond, FrontierMath, ARC-AGI-2, AIME: no verified public score found

Coding (beyond the above):

- SWE-bench Verified / SWE-bench Pro, LiveCodeBench, Terminal-Bench 2.1, AA Coding Index: no verified public score found

Long context / multimodal:

- AA-LCR 76.7% (above); no MRCR/RULER figure published; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 76/100.** AA Coding Agent Index 56 (xhigh, Grok Build — 4th among native-harness models behind Fable 5.1, GPT-6 Astra and Opus 5), AA Briefcase v1.1 1,657 (near Fable 5.1's 1,678), CursorBench 4.0 46.3%, EEBench 64.0% and Harvey Legal 19.6% lead their launch table, and SWE-Marathon 46.0% (rank 6/33) is a strong new agentic row; Terminal-Bench 4.0 at 38.0% vendor-reported (28.3% independent; 37.6% on BenchmarkList) trails Fable 5.1's 57.9%, and the AA Intelligence Index of 46 sits twelve points behind the leader.
- **Reasoning: 74/100.** HLE 43.1% (xhigh) reaches the 40%+ frontier band, with Vals Index 60.22% (10th) and AA-Omniscience non-hallucination 70.7% supporting; CritPt 17.7% and the AA Intelligence Index of 46.4 cap the score, and no GPQA Diamond figure was published.
- **Context window: 80/100.** 500K-token window with AA-LCR 76.7%; no ≥98%-at-depth retrieval figure, so it stays below the 1M/95+ band.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 79/100.** VulcanBench Frontier v4 reads **92.30–93.15** combined (Medium–Extra-high; ranks 1–3 of 53 columns — with the judge caveat that co-judge GPT-6.1 Sol rates Grok 4.7's code 5.4–6.3 points above Muse Spark 1.3, so the Muse-alone reads are 88.64–92.27), the AA Coding Agent Index of 56 (Grok Build, 4th native-harness) with DeepSWE 73% / TB 4.0 33% / SWE-Atlas-QnA 63% in that harness, SWE-Marathon 46.0% (rank 6/33), Senior SWE-Bench tasteful pass@3 40.0% (level with Opus 4.8, at $0.24/trial vs Opus 4.8's $3.36), CursorBench 4.0 46.3% and SciCode 57.4–57.8% (clears the 55% reference) support; DeepSWE v1.1 71.0% (high) sits just under the 74% bar, FrontierSWE v2 29.5% and KernelBench Mega 6.38 are mid, tasteful pass^3 of 7.4% (vs Fable 5.1's 22.1%) marks weak first-attempt reliability, and SWE-bench Verified/Pro, LiveCodeBench and Terminal-Bench 2.1 remain unpublished.
- **Cost efficiency: 84/100.** $2/$6 per 1M below 200K (blended ~$3.00/M at 3:1) sits just under the ~$1.25/$4.25≈88 anchor; 200K+ prompts double the entire request ($4/$12), cache reads are 25% of input, the Batch API is unsupported, and the fast variant costs 2×.
- **Overall Score: 75/100.** (76+74+80+65+79)/5 = 74.8 → 75 — a frontier-adjacent September-2026 agent (VulcanBench 92.3–93.15, AA Coding Agent Index 56, SWE-Marathon 46.0%, SciCode 57.4%, HLE 43.1%, AA Briefcase 1,657 at $2/$6) held back by Terminal-Bench 4.0 (28.3% independent), weak first-attempt reliability (tasteful pass^3 7.4%), a 500K (not 1M) window and an AA Intelligence Index twelve points off the lead.

---

## Update 2026-10-08 (6-day re-research)

VulcanBench, AA's Grok 4.7 article, BenchmarkList and Snorkel rows found:

- VulcanBench Frontier v4 (independent, Cursor agent CLI, 92 runs, 23 tasks × 4 effort levels, judged by Muse Spark 1.3 and GPT-6.1 Sol): combined score **89.42 / 92.30 / 92.71 / 93.15** (Low→Extra-high — ranks 1, 2, 3 of 53 columns, ahead of Fable 5.1 Max at 91.84 and Opus 5.5 High at 91.11), tasks passed 18/21/22/23 of 23, hidden behaviours fixed 213/215/230/231 of 231, code quality 81.41–84.35, 20.2–28.5 min/task, 2.85M–4.76M tokens/task; **judge caveat**: GPT-6.1 Sol rates the same code 5.4–6.3 points above Muse, so the Muse-alone combined reads are 88.64–92.27 (still first at Medium/High/Extra-high, second at Low behind Fable 5.1 by 0.82); one Medium run (lodgecore) hit the 3-hour bound and counts as failed
- AA (2026-09-21): AA Intelligence Index **46** (xhigh — "top 4 AI labs"); AA Coding Agent Index **56** (xhigh, Grok Build, +9 over Grok 4.6's 47) — **4th among native-harness models** behind Fable 5.1, GPT-6 Astra and Opus 5, with components DeepSWE v1.1 65%→**73%**, Terminal-Bench 4.0 18%→**33%**, SWE-Atlas-QnA 58%→**63%** (Grok Build harness, separate from the standardized Intelligence Index runs)
- BenchmarkList: SciCode 57.8% (rank 15/296, 95th percentile), SWE-Marathon **46.0%** (rank 6/33, 84th percentile; field leader Opus 5 at 50.0%), DeepSWE 1.1 71.0% (rank 12/52), KernelBench Mega 6.38 (rank 11/28), Senior SWE-Bench 27.4% tasteful pass@1 (rank 8/19; basic solve 49.5%; field leader Fable 5.1 at 34.7%), Terminal-Bench 4.0 37.6% (rank 12/29), FrontierSWE v2 29.5% (rank 10/20)
- Snorkel Senior SWE-Bench (xhigh): tasteful pass@1 **27.4%** (up from 4.6's 26.3%), tasteful pass@3 **40.0%** (up from 38.9%) — 6th overall, level with Opus 4.8 at 40.0%, at **$0.24/trial vs Opus 4.8's $3.36** (~1/14th the cost, ~1/3 the output tokens); pass@3 63.2% (vs 4.6's 65.3%) but converts more solves to tasteful ones (63.3% vs 59.6%); matches GPT-5.6 Sol's pass@3; **tasteful pass^3 of 7.4%** (vs Fable 5.1's 22.1%, 4.6's 16.8%) — capability shows across retries more than on first attempts
- **Scores revised**: Tool 75→76 (AA Coding Agent Index 56, SWE-Marathon 46.0%), Coding 75→79 (VulcanBench top-3, AA Coding Agent Index 56, Senior SWE-Bench 40.0% pass@3 at $0.24/trial); Overall 74→75 ((76+74+80+65+79)/5 = 74.8)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (SpaceXAI Grok 4.7 launch, llm.ing, OpenRouter, TensorFeed, PromptBlueprints); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_7.md`, using the same headings.
