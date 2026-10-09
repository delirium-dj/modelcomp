# GPT-6.1 Sol (Max) — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6.1-sol`, reasoning tier "max")
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (Max) — top reasoning-effort variant of the GPT-6.1 Sol release
- **Short description:** OpenAI's flagship reasoning model released September 29, 2026, offered in five reasoning-effort tiers (low/medium/high/xhigh/max). Max is the highest-intelligence tier of the release: BenchLeader Index 69.3 (#10 of 760, top ten), GPQA 95.4% (#3), ARC-AGI-2 94.2% (#2), FrontierMath Tier 4 100% (#1). General-purpose reasoning, agentic work, and coding.
- **Provider / access:** OpenAI first-party API (Chat Completions / Responses API); 6+ API providers per BenchLeader: OpenAI $2.00/$10.00 and $4.00/$20.00, Amazon Bedrock/Azure $2.20/$11.00 (1.1M context).
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-6.1-sol` (max effort). Related effort tiers: `gpt-6.1-sol-xhigh`, `gpt-6.1-sol-high`, `gpt-6.1-sol-medium`, `gpt-6.1-sol-low`. No Free ID known on Zen.
- **Context window:** 1.1M tokens (BenchLeader; AA technical spec 1M) — the max config's provider table lists 1.1M on every route; max output not separately disclosed.
- **Modalities:** text + image input; text output; reasoning yes (extended thinking, full effort sweep measured); tool calls yes (agentic evals measured); JSON mode not verified.
- **Pricing (as of 2026-10-09):** $2.00 / 1M input, $10.00 / 1M output (OpenAI API; Bedrock/Azure $2.20/$11.00); cache hit $0.100 per 1M; blended ~$4.00/M. Cost per Intelligence Index run $0.724 at max effort ($0.131 at low — 5.5× cheaper for −4.1 index points). No free tier.
- **Architecture:** proprietary; parameters not disclosed. Max-effort thinking latency is extreme: first answer ~327s (first token 5.01s, 56 tok/s).

### Raw benchmarks found

> Full effort sweep via BenchLeader (data as of 2026-10-09); max-effort column unless noted. All previously-missing individual benchmarks now measured.

Agent / tool use:

- Terminal-Bench 4.0: **56.1%** #9 (AA, sweep 30.8→48.0→51.5→54.0→56.1); Terminal-Bench 4.0 (Vals): **55.0%** #6; Terminal-Bench (tbench.ai): **58.2%** #17
- APEX-Agents: **60.0%** #12 (Mercor); LMArena Agent: **11.7** #5 (of 49)
- GDPval-AA v2.1: **53.8%** #35 (AA, sweep 39.9→46.6→49.3→50.5→53.8)
- AutomationBench (AA): **64.9%** #14; GDP.pdf: **31.0%** #4; AA-Briefcase v1.1: **Elo 1564** #15 (sweep 1471→1507→1564)
- SREBench (Vals): **50.8%** #2; CyberBench (Vals): 39.3%; Harvey LAB (AA): **6.9%** #4
- Finance Agent v2 (Vals): 52.0%; Tax Agent Bench (Vals): **62.3%**; Legal Research Bench (Vals): 38.5%
- Claw-Eval / ClawProBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.4%** #3 of 285 (Epoch AI Benchmarking Hub via BenchLeader)
- HLE: **52.9%** #17 (AA, sweep 47.4→49.9→51.4→52.6→52.9)
- ARC-AGI-2 (verified): **94.2%** #2 of 228 at max (sweep 76.7→86.7→91.7→94.2; ARC Prize); ARC-AGI-1: **98.5%** #1 (high/xhigh); ARC-AGI-3: **96.4%** #7 (max)
- CritPt: **31.7%** #2 of 537 (AA, max)
- FrontierMath Tiers 1–3: **93.7%** #1 of 111; FrontierMath Tier 4: **100.0%** #1 (Epoch v2); OTIS Mock AIME: **100.0%** #1
- ProofBench: **99.0%** #4 (Vals); LiveBench Reasoning: **92.6%** #2; LiveBench Math: **96.8%** #3; LiveBench Data Analysis: **82.7%** #2
- SimpleQA Verified: **73.9%** #2 (Epoch); AA-Omniscience: Index 41.5 #11, accuracy **62.1%** #12, non-hallucination 45.7% #135
- Chess Puzzles: **61.0%** #4; Mystery Game Puzzles: **80.0%** #2; MysteryMechanism (Vals): **46.4%** #5; BioMysteryBench (Vals): **79.6%** #2
- Epoch Capabilities Index: **166.1** #3 (Epoch); AA Intelligence Index v4.3.2: **51.8** #11 (sweep 42.1→47.8→50.2→51.0→51.8); Vals Index: **61.1** #8; BenchLeader Index: **69.3 ±3.2** (#10 of 760, max best; Reasoning 77, Knowledge 79, Coding 72, Composite 79)
- LMArena Hard Prompts: 1507 #19; MultiChallenge: **82.0%** #1 (Scale AI SEAL); LiveBench Instruction Following: 74.2% #12

Coding:

- IOI (Vals): **96.9%** #3 of 36; LMArena WebDev: **1755** #4 of 131; LMArena Coding: **1545** #8
- Vibe Code Bench v1.1: **88.9%** #7 (Vals); FrontierCode: **50.2%** #7 (Cognition, medium effort)
- SciCode: **54.2%** (max; AA 54.2% — modest, #59–61); LiveBench Coding: 80.4% #19; Code Migration (Vals): **65.1%** #5
- Terminal-Bench 4.0 (coding/terminal): 56.1% #9 (above)
- SWE-bench Verified / SWE-Pro / LiveCodeBench (Vals) / DeepSWE: no verified public score found

Long context:

- AA-LCR: **83.0%** #24 (max; sweep 84.0→83.3→82.3→79.7→83.0); MLCR: **33.9%** #15 (AA — fills the previously-missing MLCR); BenchLeader Long context 67

Multimodal / vision:

- MMMU-Pro: **86.0%** #6 (AA, sweep 83.1→83.9→84.9→85.1→86.0 — fills the previously-missing vision measurement); LMArena Vision: **1285** #30; SAGE (Vals): 46.5%

### Normalized scores (1–100)

- **Tool use: 75/100.** Measured mid-band agentic package: TB4.0 56.1% #9 / TB 58.2% #17, APEX-Agents 60.0% #12, GDPval-AA 53.8% #35, AutomationBench 64.9% #14, SREBench 50.8% #2 — strong but the tier sits mid-band rather than the 90+ frontier; LMArena Agent 11.7 #5 and GDP.pdf 31.0% #4 support it.
- **Reasoning: 95/100.** GPQA 95.4% (#3), ARC-AGI-2 94.2% (#2), ARC-AGI-3 96.4% (#7), FrontierMath Tier 4 100% (#1) and Tiers 1–3 93.7% (#1), CritPt 31.7% (#2), HLE 52.9% (#17), ProofBench 99% (#4) — decisive frontier-band placement, now verified with individual scores (the old draft had only the AA composite).
- **Context window: 95/100.** 1.1M context (≥1M tier = 95–100); measured AA-LCR 83.0% (#24) is strong but below the ≥98% bar for 100; MLCR 33.9% fills the medical long-context row.
- **Multimodal: 85/100.** Text + image in with measured MMMU-Pro 86.0% (#6) — top of the +video/PDF-equivalent band (75–90); text-only output and no verified video/audio input cap it below 90.
- **Coding: 88/100.** IOI 96.9% (#3), LMArena WebDev 1755 (#4), Vibe Code Bench 88.9% (#7), FrontierCode 50.2% (#7) — competitive-programming and webdev frontier; SciCode 54.2% is modest (#59) and no SWE-bench Verified/DeepSWE numbers cap it below 90.
- **Cost efficiency: 75/100.** $2.00/$10.00 per 1M (blended ~$4.00/M, cache $0.100) and $0.72 per Index task — between the methodology anchors (~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60); the low tier at $0.131/task is far better value. No free tier. Excluded from Overall.
- **Overall Score: 88/100.** Mean of the five quality dims (75 + 95 + 95 + 85 + 88) / 5 = 87.6 → 88. Best-fit: frontier reasoning/math and competitive coding where 1M context and image input matter — budget for extreme max-effort latency (first answer ~327s); the high tier (67.9, #15) delivers most of the quality at a fraction of the latency.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09, Artificial Analysis model page cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds the full measured benchmark sweep (GPQA 95.4% #3, ARC-AGI-2 94.2% #2, FrontierMath 93.7%/100% #1, HLE 52.9%, CritPt 31.7% #2, IOI 96.9%, LMArena WebDev 1755 #4, MMMU-Pro 86.0% #6, TB4.0 56.1% #9) — Tool 80→75, Reasoning 83→95, Multimodal 65→85, Coding 78→88, Overall 80→88.
- Future sources: add a new file next to this one, e.g. `GPT_6.2.md`, using the same headings.
