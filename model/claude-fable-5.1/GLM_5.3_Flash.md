# Claude Fable 5.1 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (general availability; trusted-access twin sold as Claude Mythos 5.1)
- **Short description:** Anthropic's frontier model above Opus 5 for the most demanding reasoning and long-horizon agentic work — launched Sept 1, 2026 alongside Mythos 5.1 (same weights, safeguards lifted for vetted cyber/life-science users via Project Glasswing). AA Intelligence Index 53 (#5/227); the strongest measured AA Coding Index (81.6) and AA-LCR (85.3) in this repo's coverage.
- **Provider / access:** Anthropic Messages API (`claude-fable-5-1`), Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud, Microsoft Foundry, claude.ai (Pro/Max/Team/Enterprise), Claude Code 2.1.250+ (6 API providers on AA). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released September 1, 2026 (AA confirms; Mythos 5.1 Sept 1–2); retirement committed no sooner than Sept 1, 2027; knowledge cutoff June 2026 (freshest of any Claude model).
- **IDs:** `claude-fable-5-1` / Bedrock `anthropic.claude-fable-5-1`. Mythos twin: `claude-mythos-5-1`.
- **Context window:** 1,000,000 tokens (default and max, standard pricing across the window); 128,000 max output on the Messages API — verified on Anthropic platform docs (models overview table re-checked 2026-10-11) and AA.
- **Modalities:** Text, image, PDF in; text out. Thinking: adaptive, always on (cannot be disabled); effort low–max, default high. Tool use, structured outputs, computer use supported.
- **Pricing (as of 2026-10-11):** $10.00 in / $50.00 out per 1M (same as Fable 5; AA confirms, blended $7.17); cache reads $0.25 (2.5% of base input — every other Claude model is 5–10%); Batch $5/$25. AA measured $7.63 per Intelligence Index task (most expensive in class; 190M output tokens across the Index, 66.8 tok/s, TTFT 249.7s). No free API tier; 30-day data retention required.
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Same tokenizer as Fable 5 (~30% more tokens per text than pre-4.7 models).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1758** (AA leaderboard, 2026-10-10 via benchlm.ai) — **conflicts with the 1853 (rank 2/340) BenchmarkList reading** the 2026-10-08 pass cited; AA-normalized 62.9%
- AA-Briefcase v1.1: **1675 Elo** (AA leaderboard; the 2026-10-08 pass read 1694)
- AA Agentic Index: **58.0%** (AA, independent)
- AA Terminal-Bench 2.1: **91.4%** (AA, independent — best measured); Vals: **85.0%**
- Terminal-Bench 4.0: **55.8%** (system card) / **52.0%** (AA independent)
- Terminal-Bench-Science 0.1: **52.6%** (system card; vs Fable 5's 24.7% — largest published jump of the release)
- AA AutomationBench-AA: **59.4%** (AA, independent — much stronger than the Zapier-board 31.4% the 2026-10-08 pass weighted; Astra still leads)
- AA Harvey LAB-AA v1.0: **93.0%** (AA, independent)
- AA ITBench-AA: **49.5%** (K8s RCA); AA Tau3-Banking: **47.2%** (AA)
- Toolathlon-Verified: **77.8%** Pass@1 (81.5% Pass@3, 73.1% Pass³, 23.7 avg turns — system card via benchlm.ai)
- OSWorld 2.0: **41.7%** strict (system card; 77.9% partial per Anthropic's own harness — small field)
- ApprenticeBench (GUI): **72%** (NeoCognition, independent — best measured in this repo: Opus 5 36%, Gemini 3.8 Flash 24%)
- AutomationBench (Zapier): **31.4%** (61st percentile; vs Fable 5's 17.1%)
- AA GDP.pdf: **26.2%**; AA-AnalystAgent: **57.5%**; CWE-bench v1: **58.0%**
- Vending-Bench 2: **5421.56** (rank 21/54); DRACO: **87.7%** at max (rank 1/13)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **53, #5/227** (AA model page, 2026-10-11; BenchLM normalized 53.4%) — consistent with the October re-read; the v4.2 #1 (65.7) is historical
- HLE: **65.0%** with tools / **60.9%** without (system card); AA independent: **59.1%**
- GPQA Diamond: **93.7%** (AA; Vals 93.4%)
- ARC-AGI-2: **90.0%** verified (system card); ARC-AGI-1: **97.5%**
- AA-LCR v1.1: **85.3%** (AA, updated — best measured in this repo, up from the 80.0 reading of 2026-10-08)
- MLCR-AA: **71.1%** (AA — best measured in this repo)
- CritPt: **29.7%** (AA)
- MMLU-Pro: **92.4%** (Vals, independent)
- AA-Omniscience: **67.2% accuracy / 72.6% non-hallucination-rate row / 43.5 index** (AA — accuracy best measured; the factuality #1/28 read of 43.45 corresponds to the index)
- FrontierMath Tier 4 (v2): **87.8%** per BenchmarkList (50th pct) — still conflicts with OpenAI's cross-table **52.6%**; harness discrepancy flagged, not resolved

Coding:

- AA Coding Index: **81.6%** (AA — best measured in this repo; Opus 5 78.0, Gemini 3.8 Flash 76.3)
- SWE-bench Pro: **81.2%** (system card — now #2 behind Opus 5.5's 89.9%)
- LiveCodeBench: **90.5%** (Vals, independent); AA-SciCode: **63.1%** (AA)
- FrontierSWE v2: **56.3%** (Proximal); FrontierCode 1.1: **63.6%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**; ProgramBench: **87.6%** (system card)
- CursorBench 3.2: **73.4%** (#1/17); CursorBench 4.0: **51.8%**; PostTrainBench v1.1: **40.2%**
- DeepSWE 1.1: **67.4%** Pass@1 (system card)
- SWE-bench Verified: no verified public score found for 5.1 specifically

Long context:

- 1M window at standard pricing; AA-LCR **85.3%** (AA, updated 2026-10-10 — best measured); GraphWalks BFS 256K–1M: **65.0%** (competitor-reported — Google's Gemini 4 Argon launch chart, provisional); no MRCR v2 reading for 5.1 verified

### Normalized scores (1–100)

- **Tool use: 92/100.** Independent AA rows strengthen the case (TB2.1 91.4% best-measured, AutomationBench-AA 59.4% vs the weak Zapier 31.4%, ApprenticeBench 72% best-measured, Harvey 93.0%); the GDPval conflict (1853 BenchmarkList vs 1758 AA) and AA-normalized 62.9% keep it under 95.
- **Reasoning: 94/100.** GPQA 93.7%, HLE 65.0%/60.9%, ARC-AGI-2 90.0%, MMLU-Pro 92.4%, MLCR 71.1% (all best-measured or near) and AA Index 53 (#5/227) — the frontier refs are met; docked for the AA-HLE 59.1% vendor gap, CritPt 29.7% and the unresolved FrontierMath discrepancy.
- **Context window: 95/100.** Full 1M window at standard pricing; AA-LCR updated to 85.3% — the strongest long-context reasoning measured in this repo — but GraphWalks 65.0% (competitor-reported) and no MRCR-at-512K+ keep it off the maximum.
- **Multimodal: 82/100.** Text/image/PDF in with strong grounded-vision rows (SWE Multimodal 54.7%, Design Arena 1318, BenchCAD Vision 0.843 #1 from the prior pass); no audio/video in, text-only out.
- **Coding: 93/100.** AA Coding Index 81.6% is now the best measured in this repo, with LiveCodeBench 90.5%, SWE Pro 81.2% (now #2 behind Opus 5.5's 89.9%) and FrontierSWE 56.3%; no SWE-bench Verified row for 5.1 caps it below 95.
- **Cost efficiency: 30/100.** $10/$50 per 1M matches the rubric's ~30 anchor; AA re-confirms $7.63/task (priciest measured), 190M-token verbosity and 66.8 tok/s slowness; 2.5% cache reads ($0.25) remain the long-agent offset. No free tier; 30-day retention required.
- **Overall Score: 91.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (92 + 94 + 95 + 82 + 93) / 5 = 456/5 = 91.2 — unchanged on the 2026-10-11 second pass: the new independent rows (AA Coding Index 81.6, AA-LCR 85.3, ApprenticeBench 72) reinforce rather than move the scores, and the GDPval 1853-vs-1758 conflict nets out inside the existing tolerance. Best fit: the ceiling for reasoning-heavy, long-horizon agentic/coding work when budget permits — pair with cheap cache-read-heavy harness patterns to blunt the $7.63/task cost.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: artificialanalysis.ai model page, benchlm.ai updated 2026-10-10 citing the Fable 5.1 & Mythos 5.1 system card, Vals AI / Cursor / Proximal / NeoCognition leaderboards via benchlm.ai, plus the prior 2026-10-08 pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
