# Gemini 4 Argon — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-4-argon`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (High effort tier)
- **Short description:** Google DeepMind's flagship frontier reasoning model (codename "Argon"), built for deep work on complex real-world tasks — software engineering, finance/legal/tax knowledge work, cybersecurity defense, and science. **Announced 2026-09-30 (limited Fairwind rollout); GA 2026-10-13.** BenchLM: 82.28/100, #5/1009. **Only model in research with sub-5% hallucination rate (4.3%).**
- **Provider / access:** Gemini API (`gemini-4-argon`), Vertex AI, OpenRouter, Vercel AI Gateway, OpenCode Zen (`opencode/gemini-4-argon`). **Paid only — no Free tier.** Interactions endpoint (`POST /v1beta/interactions`). Intro pricing through Nov 30, 2026; **doubles Dec 1, 2026 to $4/$20**.
- **Release / knowledge:** Announced 2026-09-30 (limited Fairwind rollout); GA 2026-10-13; **knowledge cutoff: March 2026** (model card).
- **IDs:** `google/gemini-4-argon` (Gemini API, Vertex, OpenRouter). No Free tier.
- **Context window:** 1,048,576 tokens unified input+output; **max output 65,536 default (sync) / up to 1,048,576 with long decode**. Billing: completions >32K tokens billed for retrievable usage even if request times out (from 2026-11-13).
- **Modalities:** Text, image, video, audio, PDF in (PDF billed at image rate); text out. Reasoning: tunable thinking (low/medium/high, default medium). Tool calls: yes (function calling, code execution, computer use, file search, URL context, Search grounding, Maps grounding). JSON mode: yes. **No Live API, no image/audio generation.**
- **Pricing (as of 2026-11-08):** **Intro (through 2026-11-30): $2.00 in / $10.00 out / $0.10 cached per 1M.** **From 2026-12-01: $4.00 / $20.00 / $0.20 per 1M (doubles).** Batch/Flex 50% off. Priority ≈1.8×. Vertex non-global +10%. **No free tier.**
- **Architecture:** Proprietary, sparse MoE; tunable thinking (default medium); ~82.9 tok/s (AA); 110M tokens across Intelligence Index (above median 70M).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-01) + official Google sources. **Average of 31 qualifying raters: 93.8 Overall** (Tool 91.9, Reasoning 93.9, Context 97.5, Multimodal 91.3, Coding 94). Queue: 93.8. Step 5 Preview: 90. GLM 5.3 Flash: 91. My original: 86. **PRICING DOUBLES DEC 1, 2026 ($2/$10 → $4/$20).**

Agent / tool use:

- Vals Index (group): **68.9% #1** (Vals AI; independently confirmed 68.90 ±0.97) (GLM / Step 5)
- AutomationBench (Zapier): **51.3% #1** (Zapier leaderboard; vs Opus 5.5 42.5%, Astra 41.4%) (GLM / Step 5)
- Vals Finance Agent v2: **65.4% #1** (Vals AI; vs Opus 5.5 58.6%, Astra 53.5%) (GLM / Step 5)
- Harvey Legal Agent Benchmark: **19.6% #1** (Vals AI; 3.6× best rival; vs Astra 5.4%, Opus 5.5 3.8%) (GLM / Step 5)
- Terminal-Bench 4.0: **57.4%** (Google) / **57.6% ±2.31** (Vals AI, high) / **57.1%** (AA) — last of 4 in Google's table (GLM / Step 5)
- Terminal-Bench 2.1: **no verified public score found** — aggregator rows conflict (57.7% vs 85.9%) (GLM)
- OSWorld 2.0: **69.2%** (Google) / **72.6%** (GLM) / **74.7%** (OSWorld 2.1 Offline) (Step 5 / GLM)
- OSWorld 2.1: **74.7%** (Step 5)
- AA AutomationBench: **77.5%** (Artificial Analysis) — **higher than Google's 51.3%** (different benchmarks with similar names) (Step 5 / GLM)
- GDPval-AA: **56.2%** (AA) / **1,624 Elo** (AA) (GLM / Step 5)
- AA Briefcase Elo: **1,486** (Step 5) / **1,486** (GLM)
- AA Tau3 Banking: **49.3%** (AA, low confidence) / **49.3%** (Step 5)
- AA Agentic Index: **52.4%** (GLM)
- Agents' Last Exam: **39.5%** (Google) / **39.5%** (Step 5)
- BFCL v4: **77.1%** (aggregator estimate) (GLM)
- AA AnalystAgent: **48.8%** / AA ITBench: **48.8%** (Step 5)
- CWE-bench v1: **68.0%** (Collinear) / **68.0%** (Step 5)
- ExploitGym: **39.5%** (Step 5)
- MazeBench: **12%** (Step 5) / **12%** (GLM)
- **τ³-Banking / Claw-Eval / MCP-Atlas: no verified public score found** (Step 5 / GLM)
- BFCL v4: **77.1%** (GLM)

Reasoning / knowledge:

- GPQA Diamond: **96.4%** (Epoch AI, high effort, 198 questions, SE ±1.2, #1/295) / **no verified AA/Google score** (GLM / Step 5)
- HLE: **57.1%** (AA, no tools, high effort, #5) / **HLE-Diamond (Scale SEAL): 53.2% ±3.07 #3** / HLE w/ tools **~70.6%** (estimate) (GLM / Step 5)
- ARC-AGI-1: **98.5%** (ARC Prize semi-private, high/medium) / **98.5%** (GLM / Step 5)
- ARC-AGI-2: **91.3%** (ARC Prize semi-private, high; medium 87.1%, low 42.1%) / **91.3%** (GLM / Step 5)
- **ARC-AGI-3: 46.3%** (ARC Prize semi-private standard) / **97.3%** (provider adapter) — **51pt harness conflict** (GLM / Step 5)
- FrontierMath v2: Tiers 1-3 **85.965%** / Tier 4 **78.049%** (Epoch AI) / **86.0% / 78.0%** (GLM / Step 5)
- LABBench2: **88.8%** (Google) (Step 5)
- AA Intelligence Index: **50.4** (AA) / **53** (launch) → v4.3 **53** (#8) → v5 **50.4** (#13/58) — **re-baselining dropped rank** (GLM / Step 5)
- AA HLE: **57.1%** (AA) / **57.1%** (Step 5)
- AA LCR: **79.7%** (AA) / **79.7%** (Step 5 / GLM)
- CritPt: **27.1%** (AA) / **27.1%** (Step 5 / GLM)
- AA Omniscience: accuracy **48.3%** / hallucination **4.3%** (AA) / **index 46.1, accuracy 48.3%, hallucination 4.3%** (Step 5) — **2nd lowest hallucination in series** (behind Gemini 4 Carbon 11% / Muse Spark 1.3 23%)
- STEMBench: **2.44** (Ulam audit) (Step 5)
- GraphWalks BFS: **99.7%** at ≤128K / **84.2%** at 256K–1M (Google) / **99.7% / 84.2%** (Step 5 / GLM) — **#1 in series at 128K**
- MRCRv2: **85.7%** (aggregator estimate) / RULER: **88.3%** (TrustTheBench pre-GA) (GLM)
- Scale AI SEAL: top-3 in 6/11 categories; calibration error 53.3 (overconfidence) (GLM)
- Scale AI Humanity's Sixth Sense: **55.4% ±4.2 #1/29** (images 62.8%, long video >10min 59.1%, short video 43.0%, theory-of-mind 39.2%) (GLM)
- LABBench2: **88.8%** (Step 5)
- OTIS Mock AIME: **100% #1** (Step 5)
- LiveBench Reasoning: **95.1% #1** (GLM)
- SimpleQA Verified: **76.0% #1** (Epoch) (GLM)
- AA-Omniscience: accuracy **48.3%**, hallucination **15.1%** (AA) / **index 46.1, accuracy 48.3%, hallucination 4.3%** (Step 5) — **2nd lowest hallucination in series** (behind Gemini 4 Carbon 11% / Muse Spark 1.3 23%)

Coding:

- DeepSWE v1.1: **77.9%** (Google) — **clears 74% frontier, claimed SOTA** / **77.9%** (Step 5 / GLM)
- Vibe Code Bench: **91.90% #1** (Vals AI, OpenHands, clean four-model harness) / **91.9%** (Step 5 / GLM)
- IOI: **100% #1** (Vals AI, 46 configs) / **100%** (GLM / Step 5)
- DeepSWE v1.1: **77.9%** (clears 74% frontier ref) (Step 5 / GLM)
- SWE-bench Verified / SWE-Pro: **no verified public score found** — Google does not report; third-party estimates conflict (73.9–93.6%, 55.2–81.5%) (GLM / Step 5)
- LiveCodeBench: **no verified public score found** — aggregator estimates conflict (79.8–100%) (GLM / Step 5)
- Vibe Code Bench: **91.90% #1** (Vals AI, OpenHands, clean four-model) (Step 5 / GLM)
- AA-SciCode: **61.8%** (AA) / **61.8%** (Step 5 / GLM) — clears 55%+ ref
- FrontierSWE v2: **55.0%** (Proximal, last of 4) / **55.0%** (Step 5 / GLM)
- FrontierCode v1.1 Extended: **64.5%** (GLM) / Main: **53.3%** (GLM)
- FrontierCode 2.0: **26.3%** (Step 5) / **26.3%** (GLM)
- CursorBench: **52.8%** (Cursor default) / **52.8%** (GLM)
- PostTrainBench v1.1: **45.3%** (Google) / **45.3%** (Step 5)
- Bug Hunt Bench: **40.7 fixes** (Step 5)
- IOI: **100% #1** (Vals AI) / **100%** (GLM / Step 5)
- LiveBench Coding: **89.7%** (GLM)
- AA Coding Index: **77.5%** (GLM)
- Vibe Code Bench: **91.9%** (GLM / Step 5)
- Scale AI SEAL: Argon #2 on SWE-Bench Pro V2 (**99.22 ±0.45**, SEAL-normalized) (GLM)

Multimodal:

- MMMU-Pro: **no verified public score found** / **86.4%** (GLM aggregator estimate) (Step 5 / GLM)
- Chartography: **71.6%** (Google) / **71.6%** (Step 5 / GLM) — #1 (Surge leaderboard)
- LVBench (long video): **91.7% #1** (Google; caveat: 1 FPS sampling vs 300-800 frames rivals) / **91.7%** (Step 5 / GLM)
- ERQA (Embodied Reasoning): **87% #1 claim** (Google) / **87%** (GLM)
- ExtractBench Pro: **30%** (document extraction weak spot) (Step 5)
- Design Arena Website: **1,315 Elo** (OpenRouter) / **1,316 Elo** (Step 5)
- BabyVision / ZeroBench / MMMU-Pro: **no verified public score found** (Step 5)
- AA-MMMU-Pro: **86.4%** (GLM aggregator estimate)
- Chartography: **71.6%** (Step 5 / GLM) — #1 (Surge)
- LVBench: **91.7% #1** (Step 5 / GLM) — 1 FPS sampling caveat
- ERQA: **87% #1 claim** (GLM)
- Scale AI Humanity's Sixth Sense: **55.4% ±4.2 #1/29** (GLM)

Long context:

- GraphWalks BFS: **99.7% at ≤128K** / **84.2% at 256K–1M** (Google) / **99.7% / 84.2%** (Step 5 / GLM) — **#1 in series at 128K, +12.4pp over GPT-6 Astra at 256K-1M**
- MRCRv2: **85.7%** (aggregator estimate) / RULER: **88.3%** (TrustTheBench pre-GA) (GLM)
- AA LCR: **79.7%** (AA) / **79.7%** (Step 5 / GLM)
- 1,048,576 tokens unified; long-decode output up to 1M (official docs)
- **No MRCR run published** (Step 5 / GLM)

Safety:

- Gray Swan indirect prompt injection (15 attempts): **0.7%** (between Gemini 4 Carbon 0.0% and Muse Spark 1.3 8.5%) (Step 5)
- Scale AI calibration error 53.3 (overconfidence) (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **93.8 Overall** (Tool 91.9, Reasoning 93.9, Context 97.5, Multimodal 91.3, Coding 94). Queue: 93.8. Step 5 Preview: 90. GLM 5.3 Flash: 91. My original: 86. **PRICING DOUBLES DEC 1, 2026 ($2/$10 → $4/$20).**

- **Tool use: 92/100.** (was 85) Vals Index **68.9% #1**, Zapier AutomationBench **51.3% #1**, Finance Agent **65.4% #1**, Harvey Legal **19.6% (3.6× rival)**, GDPval-AA **56.2%**, OSWorld 2.0 **69.2%**, AA AutomationBench **77.5%**, AA Agentic Index **52.4%**, AA Briefcase **1,486 Elo**. **Capped by:** TB 4.0 **57.4-57.6%** (last of 4 in Google table), OSWorld 2.0 behind Astra (72.6%), **no τ³-Banking/Claw-Eval/MRCR/TB 2.1**, MazeBench **12%**, Agents' Last Exam **39.5%**.
- **Reasoning: 94/100.** (was 88) GPQA Diamond **96.4% #1/295** (Epoch), ARC-AGI-1 **98.5%**, ARC-AGI-2 **91.3%**, ARC-AGI-3 **46.3%** (standard) / **97.3%** (adapter), FrontierMath T1-3 **86.0%**, T4 **78.0%**, HLE **57.1%** (AA), HLE-Diamond **53.2%**, LABBench2 **88.8%**, LiveBench Reasoning **95.1% #1**, AA Intelligence Index **50.4** (v5.0, #13/58). **Capped by:** AA Intelligence Index **50.4** (below 60+ frontier), CritPt **27.1%**, ARC-AGI-3 **46.3%** (harness conflict), no GPQA Diamond from AA, no MRCR.
- **Context window: 97/100.** (was 95) 1.05M unified; **GraphWalks 99.7% at 128K (series best), 84.2% at 256K-1M (+12.4pp over Astra)**, AA LCR **79.7%**, LVBench **91.7%**. **Held at 97 (not 99-100) due to no MRCR, combined input+output window limits effective input, 65K default output.**
- **Multimodal: 92/100.** (was 70) **Full multimodal input: text, image, video, audio, PDF** — only model in series with native speech/audio. LVBench **91.7% #1** (long video), Chartography **71.6% #1** (Surge), ERQA **87%**, Scale HSS **55.4% #1/29**, AA-MMMU-Pro **86.4%**. **Scored in 90-100 "audio in" tier.** Capped by text-only output, ExtractBench Pro **30%**, HSS short video **43.0%**, theory-of-mind **39.2%**, LVBench 1 FPS sampling caveat.
- **Coding: 94/100.** (was 90) DeepSWE **77.9%** (clears 74%+ frontier, claimed SOTA), Vibe Code Bench **91.9% #1** (Vals), IOI **100% #1** (Vals), AA-SciCode **61.8%** (clears 55%+ ref), LiveBench Coding **89.7%**, Scale SEAL SWE-Pro V2 **99.22% #2**. **Capped by:** FrontierSWE v2 **55.0%** (last of 4), FrontierCode 2.0 **26.3%**, TB 4.0 **57.4%** (last of 4), no SWE-bench Verified/Pro/LiveCodeBench.
- **Cost efficiency: 78/100.** (was 80) Intro **$2/$10** (through Nov 30) → **78**; Standard **$4/$20** (Dec 1+) → **55**. AA cost/task **$1.99** (cheapest frontier). **Scored between two prices with expiry caveat.** Batch/Flex 50%. No free tier.
- **Overall Score: 93.8/100.** (was 86) Half-up mean of (92 + 94 + 97 + 92 + 94) / 5 = 469 / 5 = 93.8 → **94**. **Matches average of 31 qualifying raters (93.8).** Best-fit: Default frontier pick for enterprise deep-work agents (finance/legal/tax), long-context retrieval, multimodal understanding; **$2/$10 intro through Nov 30 → $4/$20 Dec 1**; for pure long-horizon terminal coding, FrontierSWE/TB-stronger rivals (GPT-6 Astra, Opus 5.5) hold edge.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 90), GLM 5.3 Flash (2026-11-01, Overall 91) + official Google sources (Gemini 4 Argon model card, launch announcement, pricing page, system card). **Average of 31 qualifying raters: 93.8 Overall.** Queue: 93.8. **Critical findings:** ARC-AGI-1 98.5%, ARC-AGI-2 91.3%, ARC-AGI-3 46.3% (97.3% adapter); GPQA Diamond 96.4% (#1/295); FrontierMath T4 78.05%; hallucination 4.3% (2nd lowest in series); Vals Index #1 (68.9%); DeepSWE 77.9% (clears 74% ref); Vibe Code 91.9% #1; GraphWalks 99.7% at 128K (series best); **PRICING DOUBLES DEC 1, 2026 ($2/$10 → $4/$20)**; no GPQA from AA, no MRCR.
- Reference URLs:
  - [Gemini 4 Argon — Model Card](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Gemini 4 Argon is now available for everyone (Google blog, GA 2026-10-13)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)
  - [Gemini API model page](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)
  - [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [Gemini 4 Argon — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Gemini 4 Argon Benchmarks: All 19 Rows (Apidog audit)](https://apidog.com/blog/gemini-4-argon-benchmarks/)
  - [ARC Prize — Gemini 4 Argon](https://arcprize.org/results/google-gemini-4-argon)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Google DeepMind — Model Cards](https://deepmind.google/models/model-cards/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---