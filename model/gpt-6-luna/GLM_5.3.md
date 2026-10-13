# GPT-6 Luna — findings by GLM 5.3

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's value tier of the GPT-6 family — launched **2026-09-22** alongside GPT-6 Sol, after the flagship Astra earlier that month; the pitch was "unusually restrained: not a new headline capability, but lower cost and fewer mistakes" (kompozy). Second pass resolves the release date and fills nearly every gap at max effort with **outstanding-for-the-price results**: GPQA 90.5% #42, FrontierMath 79.0% #16, Vibe Code 81.7% #18, TB 2.1 Vals 73.0% #23, AA-LCR 83.3% #20, and an **elite cyber profile (CyberGym e2e #3, AA Cyber Index #3, CyberBench #4, CWE-Bench #7)** — at **$0.042 per Intelligence Index run, the cheapest measured this cycle**. Top use case: cheap, high-volume reasoning, coding, and security work with a 1M window.
- **Provider / access:** OpenAI Responses API + Chat Completions `gpt-6-luna`; OpenCode Zen `opencode/gpt-6-luna` (`https://opencode.ai/zen/v1/responses`).
- **Release / knowledge:** **2026-09-22** (resolved — llm-stats/Vals/layer3labs/kompozy/buildfastwithai all concur); knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna` (no Free ID on Zen; paid tier).
- **Context window:** 1.1M total — 922K max input / 128K max output (confirmed; BenchLeader lists 1.1M).
- **Modalities:** text and image in / text out; reasoning (`reasoning.effort` none→max; **max carries the richest measured rows and is the recommended setting**); tool calls (function calling + Responses built-ins: web_search, file_search, code_interpreter, hosted_shell, computer_use, mcp, apply_patch, skills); structured outputs; no audio/video.
- **Pricing (as of 2026-10-12):** $0.10 in / $0.50 out per 1M; cached input $0.01 (10%); >272K prompts at 2× input / 1.5× output; Batch/Flex 50% off; blended $0.20/M ("cheaper than most"); 128 tok/s; **$0.042 per full Intelligence Index run**. Effort economics: max costs 15× low for +5.9 index (1.5 pts/doubling — good).
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader 7-setting ladder (best = xhigh **58.8 #130/760**; max 58.7 #133 carries more rows and is quoted below; trend 51→58→66 rising — settling, last measured 2026-09-22). Category scores (xhigh/max): **Composite 68/57 (best)**, Knowledge 61/56, Multimodal 63/58, Long context 65/67, Maths –/65, Coding 57/59, Reasoning 56/62, **Agents & tools –/49**.

Agent / tool use:

- **Terminal-Bench 2.1 (Vals): 73.0% #23 (max)** — gap filled; strong. **TB 4.0: 12.6% #75 (AA) / 13.6% #26 (Vals)**; TB public board 16.4% #76; TB Science 4.3-8.6% #17-21 — the 2026 terminal suites remain the wall
- **GDPval-AA: 46.6% #65 (max)** (updated from 43.4% — mid band); **CyberBench: 76.3% #4 of 45** (Vals's own highlight); **CyberGym end-to-end: 77.9% #3; AA Cyber Index: #3; CWE-Bench: 56.7% #7; DeepSec-Bench 23.5% #9** — the standout security-agent profile at any price
- APEX-Agents (Mercor) 44.3% #36; Finance 49.9% #37; Tax 58.9% #33; **FACTS Search 81.4% #8**; AutomationBench 53.2% #39; LiveBench Agentic 51.2% #41; **HLAB 2.9% #36 / Harvey LAB-AA 3.3% #9** (weak legal); Legal Research 30.3% #38; Briefcase 1336 #43; GDP.pdf 22.8% #22; LMArena Agent 1.9 #24 (weak); ExploitGym 11.6% (retained); τ³ / Claw-Eval / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- **GPQA Diamond: 90.5% #42 (max, Epoch)** — clears the frontier bar (the first pass's "no verified score" gap filled at the bar's edge); **HLE (AA): 38.5% #95 (max)** — just under the 40% reference
- **FrontierMath T1-3: 79.0% #16 / T4: 56.1% #22 (max)** — outstanding for the tier; **OTIS 98.9% #16; ProofBench 64.0% #16; LiveBench Math 89.1% #40**; ARC-AGI-2 59.3% #84; ARC-AGI-1 86.7% #90; ARC-AGI-3 0.6% #34 (dreadful); CritPt 19.4% #62 (mid-weak); LiveBench Reasoning 81.8% #49
- **Honesty poor: AA-Omniscience non-hallucination 23.3% #250 at max** (best at max — 15.3-21.1% at lower efforts; accuracy 43.8% #94; index 0.7 #127); SimpleQA 41.4% #40
- **AA Intelligence Index 38.1 #75 (max)** (confirms the first pass's 37.3); **AA-LCR 83.3% #20 (max)** — excellent long-context; **MLCR 16.1% #26** (weak medical); ECI 156.3 #24; Vals Index 51.2 #25; LiveBench global 72.0% #51
- Knowledge: EMB 68.5% #14; MedScribe 83.7% #40; BioMystery 61.5% #17; Public Benefits 57.6% #31; MedCode 44.7% #39; HealthBench rows retained (50.0% raw / 60.8% Professional / 31.4% Hard)

Coding:

- **Vibe Code v1.1: 81.7% #18 (max)** — gap filled; excellent. **LiveCodeBench: still no verified row**, but **LiveBench Coding 79.0% #26**, **IOI 55.6% #18**, **ALE-Bench 1576.9 #15**, **LMArena WebDev 1581 #33** fill the band well; **FrontierCode 42.4% #19 / AA FrontierCode 41.9% #10**; Code Migration 42.5% #23; SciCode 54.6% #52 (max — just under the 55% reference); ProgramBench 0.5%; LMArena Coding 1508 #59
- **SWE-bench Verified: still no verified public score** (unchanged gap — the one missing row for a coding-value pitch); DeepSWE 66.6% (retained)

Long context:

- **1.1M window** (922K in / 128K out); **AA-LCR 83.3% #20 (max)** — the best long-context-reasoning rank in this batch; MLCR 16.1% #26; no MRCR/RULER rows.

Multimodal:

- MMMU-Pro 79.7% #55-56 (max; AA); SAGE 48.1% #28; LMArena Vision 1217 #82 (weak); AA-3D 1000 #8; Blueprint-Bench 2 31.2% #13. Text+image in, text out.

Preference/IF:

- IF weak: LiveBench IF 55.9% #64; preference weak (Text 1443 #89, Creative 1411 #86, Multi-turn 1444 #97, Longer 1454 #80) — the value tier doesn't charm arenas; LiveBench Language 73.8% #53.

### Normalized scores (1–100)

- **Tool use: 70/100.** Raised from 68: TB 2.1 73.0% #23 fills the terminal gap strong, GDPval 46.6% #65 is mid, and the cyber-agent profile is elite (CyberGym #3, Cyber Index #3, CWE #7, CyberBench #4) — offset by HLAB 2.9%, Harvey LAB 3.3%, TB 4.0 ~13%, and LMArena Agent 1.9 #24; τ³/MCP-Atlas still unmeasured.
- **Reasoning: 79/100.** Raised from 78: GPQA 90.5% #42 clears the bar, FrontierMath 79.0% #16 / T4 56.1% #22 and OTIS 98.9% #16 are outstanding for the price, and AA-LCR 83.3% #20 is elite — capped by HLE 38.5% just missing, CritPt 19.4%, ARC-AGI-3 0.6%, and poor honesty (23.3% #250).
- **Context window: 96/100.** Held: 1.1M confirmed; AA-LCR 83.3% #20 is the best measured retrieval rank this cycle; no ≥98% tier evidence.
- **Multimodal: 66/100.** Lowered from 68: MMMU-Pro 79.7% is decent but Vision 1217 #82 is weak and SAGE 48.1% mid; image-in/text-out only.
- **Coding: 78/100.** Raised from 72: Vibe 81.7% #18 (the tier's surprise elite row), LiveBench Coding 79.0% #26, IOI #18, ALE #15, WebDev 1581 #33 and FrontierCode #10 — capped by SciCode 54.6% just under the reference, ProgramBench 0.5%, TB 4.0 ~13%, and the still-missing SWE-bench Verified row.
- **Cost efficiency: 96/100.** Held: $0.10/$0.50 with $0.01 cached reads and **$0.042 per II-run — the cheapest intelligence-per-dollar measured this cycle**; max is the value setting (15× low's cost for +5.9 index).
- **Overall Score: 78/100.** (70 + 79 + 96 + 66 + 78) / 5 = 77.8 → 78, up from 76.4. Best-fit: the value champion of the GPT-6 line — frontier-adjacent math, bar-clearing GPQA, elite long-context reasoning and security-agent work at $0.042/run; never trust its facts unverified (non-hall #250), don't expect arena charm, and escalate to Sol for the hardest agentic tasks.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader full 7-setting effort-ladder as of 2026-09-22 aggregating Epoch AI Benchmarking Hub, Artificial Analysis incl. the AA Cyber Index and Harvey LAB harnesses, Vals AI incl. CyberBench, LiveBench, LMArena, Mercor APEX, Kaggle FACTS Search; DDG-lite searches surfacing llm-stats/Vals/layer3labs/kompozy/buildfastwithai/designforonline launch coverage — release date 2026-09-22, the "lower cost, fewer mistakes" positioning, and Vals's #4-of-45 CyberBench highlight corroborating the BenchLeader row); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
