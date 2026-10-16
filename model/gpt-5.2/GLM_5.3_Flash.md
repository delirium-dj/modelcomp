# GPT 5.2 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** OpenAI's GPT-5.2 generation reasoning model (Dec 2025) — an above-average intelligence upgrade over GPT-5.1 with a 400K context window. Deprecated by GPT-5.4 (only the default 10k-token workload is still benchmarked per Artificial Analysis).
- **Provider / access:** OpenCode Zen `opencode/gpt-5.2` via `https://opencode.ai/zen/v1/responses` (paid, $1.75/$14.00); OpenAI Responses API + Chat Completions. GPT-5.2 Codex sibling exists (`gpt-5.2-codex`, deprecated on Zen Jul 23, 2026).
- **Release / knowledge:** Released 2025-12-11 (Artificial Analysis); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.2` (Zen, paid); `gpt-5.2` (OpenAI API)
- **Context window:** 400,000 tokens total / 128,000 max output (models.dev OpenCode listing — the authority; BenchLeader's "128k" reading conflicts and is treated as the output cap).
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA page evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-09):** Paid — $1.75 / 1M input, $14.00 / 1M output (OpenAI first-party; identical on Zen, cache read $0.175; blended $4.81/M per BenchLeader). AA blended rate $1.87/1M. Output speed 75 tok/s, first answer ~148s at xhigh.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> Full effort sweep via BenchLeader (data as of 2026-10-09); xhigh best config unless noted. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench: **64.9%** #9 (tbench.ai, medium effort — fills the previously-missing TB row); Terminal-Bench Hard (AA): 47.0%
- Tau2-bench: **84.8%** #3 (taubench.com, high effort); τ²-Bench Telecom (AA): 84.8%; τ³-Banking (AA): 11.1%
- GDPval: **49.7%** #1 (OpenAI via Epoch, no-reasoning — fills the previously-missing GDPval row)
- MCP Atlas (Scale AI SEAL): **67.6%** #23 (xhigh — fills the previously-missing row)
- BFCL Overall: **55.9%** #14 (Berkeley Function Calling Leaderboard — fills the previously-missing BFCL row)
- METR Time Horizons: **75.3%** #4 (METR, high effort — new long-horizon evidence)
- Added 2026-10-16: BrowseComp **65.8%** (OpenAI); OSWorld-Verified **47.3%** (OpenAI); Gert Labs **46.54%**; JobBench **34.3%**
- Remote Labor Index: 2.5%; Poker Agent (Vals): 1131.8 #1; Vending-Bench 2: 3591.3; Terminal-Bench 2.0 (Vals): 51.7%
- Artificial Analysis Intelligence Index v4.3.2: **30** (corroborates the earlier estimate; BenchLeader Index **60.8 ±3.4**, #96 of 760, xhigh best — Instruction following 73, Coding 63, Agents & tools 55)

Reasoning / knowledge:

- GPQA Diamond: **91.4%** #30 (Epoch, xhigh — fills the previously-missing GPQA; AA 90.3%, Vals 91.7%, Qwen table 92.4% — four-source agreement)
- HLE: **27.8%** #12 (Scale AI / CAIS, not-stated — fills the previously-missing HLE; AA 37.7% xhigh)
- ARC-AGI-2 (verified): **72.9%** #48 (ARC Prize, not-stated; sweep 9.7→26.7→43.3→52.9→72.9); OpenAI's own launch figure reads **52.9%** — CONFLICT, both cited; ARC-AGI-1: **94.5%** #35 (Epoch) / **86.2%** (ARC Prize XHigh verified, added 2026-10-16)
- AIME 2025: **100%** (OpenAI official — added 2026-10-16; AA 99.0%)
- CritPt: **11.6%** #102 (AA, xhigh)
- FrontierMath Tiers 1–3: **67.4%** #27 (Epoch v2, xhigh); Tier 4: 31.7% #34; OTIS Mock AIME: 96.1%; AIME (Vals): 96.9% #2; AIME 2026: **98.3%** #4 (high); HMMT February 2026: **97.0%** #3; MathArena Apex: 13.5%
- AA-LCR: **82.7%** #33 (AA, xhigh — fills the previously-missing LCR); LMCA: 43.9% #78; DTBench: 90.9% #61
- SimpleQA Verified: **37.1%** #45 (Epoch); Kagi LLM Benchmark: 73.3% #18; SciPredict: 20.6%; AA-Omniscience: non-hallucination **18.8%** at xhigh (severe hallucination at high effort)
- MMLU-Pro (Vals): **86.2%**; MedQA (Vals): **94.1%**; LegalBench (Vals): 82.8%; LiveBench Math: 93.2%
- LMArena Hard Prompts: 1497 #37; ForecastBench: 60.1%

Coding:

- SWE-bench Verified: **80%** (OpenAI official launch figure — added 2026-10-16) / **73.8%** #17 (Epoch, high effort); swebench.com bash-only: **72.8%** #7 (high; any scaffold 72.8%)
- LiveCodeBench: **85.4%** #31 (Vals — fills the previously-missing LCB)
- SWE-Bench Pro: **55.6%** (OpenAI figure via the GPT-5.4 post — added 2026-10-16) / **29.9%** #16 (Scale AI SEAL) — CONFLICT: harness difference, both cited
- WeirdML: **72.2%** #30 (xhigh); ALE-Bench: **1293.5** #30; AlgoTune: 2.0 #1 (medium)
- Vibe Code Bench v1.1: 53.5%; SWE-bench (Vals): 75.8%; LMArena Coding: 1515 #44; LMArena WebDev: 1416
- SciCode: no verified public score found for `gpt-5.2`

Long context:

- AA-LCR **82.7%** #33 (AA, xhigh — fills the previously-missing long-context measurement); LMArena Document: 1425; 400K window

Multimodal / vision:

- MMMU-Pro (Vals): **86.7%** #17 / MMMU-Pro (OpenAI official): **79.5%**; MMMU: **86.7%** (Qwen table); VPCT: **84.0%** #2 (Epoch, xhigh); VISTA: 46.6% #20 (Scale SEAL); LMArena Vision: 1268; MortgageTax (Vals): 67.1%
- Added 2026-10-16 (Qwen/OpenAI comparison tables): RealWorldQA **83.3%**; OmniDocBench 1.5 **85.7%**; Video-MME **85.8–86.0%**; VideoMMMU **85.9%**; MLVU **85.6%**; MathVision **83.0%**; CharXiv **82.1%**; AI2D **92.2%**; We-Math **79.0%**; DynaMath **86.8%**; CC-OCR **70.3%**; V* **75.9%**; ERQA **59.8%** — a deep multimodal suite

### Normalized scores (1–100)

- **Tool use: 78/100.** Now measured instead of composite-only: TB 64.9% (#9), Tau2 84.8% (#3), GDPval 49.7%, MCP Atlas 67.6% (#23), BFCL 55.9% (#14), METR 75.3% (#4), and the new BrowseComp 65.8%/JobBench 34.3% rows; TB Hard 47.0%, OSWorld 47.3% and Remote Labor 2.5% cap it.
- **Reasoning: 81/100.** CHANGED from 80 — GPQA 91.4–92.4% (four sources), the newly confirmed official AIME 2025 100% and ARC-AGI-2 52.9–72.9% (both cited) are strong; HLE 27.8%/37.7% stays under the 40% bar, CritPt 11.6% is weak, and the 18.8% non-hallucination rate at xhigh is severe.
- **Context window: 78/100.** 400K tokens (models.dev authority; BenchLeader's 128k conflicts) — top of the 200K–500K tier (65–84); measured AA-LCR 82.7% is strong for the tier.
- **Multimodal: 78/100.** CHANGED from 72 — text + image input, text output only, with MMMU-Pro 79.5–86.7%, MMMU 86.7%, and the newly surfaced video/document suite (Video-MME 85.8–86.0%, VideoMMMU 85.9%, MLVU 85.6%, OmniDocBench 85.7%, CharXiv 82.1%) — deep measured multimodal coverage despite no audio input.
- **Coding: 83/100.** CHANGED from 80 — SWE-V 80% official / 73.8% Epoch / 72.8% swebench.com, LCB 85.4%, WeirdML 72.2%; the OpenAI SWE-Pro 55.6% reading (vs Scale's 29.9%, conflict cited) lifts the floor; SciCode still missing.
- **Cost efficiency: 66/100.** $1.75/$14.00 per 1M tokens (blended $4.81/M) — between the ~$1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, closer to the $3/$15 point on output price.
- **Overall Score: 80/100.** CHANGED from 78 — mean of the five quality dims (78 + 81 + 78 + 78 + 83) / 5 = 398/5 = 79.6 → 80. Best fit: a solid, now-deprecated mid-tier reasoning model with strong 400K context — use for legacy reproducibility; step up to GPT-5.4/5.5-class for current work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09, Epoch AI Benchmarking Hub, Vals AI, Scale AI SEAL, models.dev, OpenCode Zen docs cross-checked; re-researched 2026-10-16: official SWE-V 80%, SWE-Pro 55.6% (conflict with Scale 29.9% cited), AIME-2025 100%, video/document suite added — Reasoning 80→81, Multimodal 72→78, Coding 80→83, Overall 77.6→80); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA 91.4% #30, HLE 27.8%, ARC-AGI-2 72.9%, SWE-V 73.8%/72.8%, LCB 85.4%, TB 64.9%, Tau2 84.8% #3, GDPval 49.7%, MCP Atlas 67.6%, BFCL 55.9%, MMMU-Pro 86.7% #17 — Tool 50→78, Reasoning 62→80, Context 75→78, Multimodal 65→72, Coding 58→80, Overall 62→77.
- Future sources: add a new file next to this one, e.g. `GPT_5.4.md`, using the same headings.
