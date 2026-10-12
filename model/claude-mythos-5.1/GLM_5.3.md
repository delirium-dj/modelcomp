# Claude Mythos 5.1 — findings by GLM 5.3

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-11 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's least-restricted frontier model for vetted cybersecurity and life-sciences work — identical weights to Claude Fable 5.1, measured with production safeguards off ("one set of weights, two products"; the benchmark gap between them is a safeguard tax, not a capability gap, and Anthropic expects it to shrink as safeguards get more precise). Claude Security is powered by it. Top use case: unrestricted defensive-security and biological research agent work.
- **Provider / access:** Anthropic trusted access programs only — the Cyber Verification Program (not live yet as of the 2026-09-08 eesel review: "coming in the near future"), the invite-only Life Sciences Program beta (built with the US government), or the Anthropic/AWS/GCP account team; US-scoped today. Using it requires accepting 30-day data retention by default. Second-pass tracker note: BenchLeader still lists ZERO independent benchmark results for this ID ("only pricing and metadata"); BenchLM holds exactly 1 displayable row and stays unranked — the twin Fable 5.1 is the evidence carrier. **Not on OpenCode Zen** — no public endpoint.
- **Release / knowledge:** 2026-09-01 (with Fable 5.1); knowledge cutoff **June 2026** (second-pass fact via the eesel spec sheet; previously undisclosed). Retirement: not sooner than 2027-09-01.
- **IDs:** `claude-mythos-5-1` (trusted-access only; **no Zen ID, no public API ID**)
- **Context window:** 1M tokens total; **max output 128K tokens** (second-pass fact via the eesel spec sheet; previously unpublished).
- **Modalities:** text/image in; text out (Claude platform family; no audio/video verified for this exact ID); reasoning yes — adaptive thinking always on, default effort `high` (second-pass fact); tool calls; JSON mode. EU AI Act note: as a model released after 2026-08-02, outputs carry Anthropic's invisible watermark (detection API in private preview).
- **Pricing (as of 2026-10-11):** now directly listed rather than inferred: $10.00 in / $50.00 out per 1M, identical to Fable 5.1; **cache reads $0.25 per 1M (0.025x base — a quarter of every other Claude model's 0.1x)**; batch $5/$25; 5-minute cache write $12.50; 1-hour write $20. Anthropic's measured effect: ~25% cheaper typical workloads, ~45% cheaper highly agentic ones (the cut that moved Cognition's Devin Opus traffic to Fable-class models on launch day). BenchLeader blended $20.00/M — among the most expensive tracked.
- **Architecture:** proprietary; parameter count undisclosed. Three breaking API changes ship with the 5.1 family: forced tool use now errors, thinking blocks are model-bound, and new accounts cannot edit prior context while preserving the thinking transcript (anti-distillation).

### Raw benchmarks found

Mythos-5.1-specific rows (system card / launch table):

- Terminal-Bench 4.0: **60.9%** (Anthropic official — still the single BenchLM-displayable Mythos row; Fable 5.1 twin scores 55.8% with safeguards on, Opus 5 52.3%, Fable 5 42.0%, GPT-5.6 Sol 37.3%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic official; class-best, vs Opus 5 29.0%, Fable 5 24.7%, GPT-5.6 Sol 22.4%; public 3-trial leaderboard reads Opus 5 30.0% / Fable 5 21.4% — Anthropic's setup reproduces both within noise)
- OSWorld 2.0: **77.9%** partial / **41.7%** strict (Anthropic official, Aug 2026 task release — not comparable to earlier OSWorld releases; Opus 5 75.4/39.6)
- HLE: **60.9%** no tools / **65.0%** with tools (Anthropic official; best public HLE figures at launch, vs Opus 5 56.6/63.6)
- GDPval-AA v2: **1853** (Anthropic official, twin row) — AA's own run of the twin measures **1758 raw / 62.9% normalized** (harness gap flagged, both retained)
- AutomationBench: **31.4%** (Anthropic official — safeguard-zero runs; AA's own twin run: **59.4%**; Opus 5 26.9%, GPT-5.6 Sol 19.6%)
- CursorBench 3.2.0: **73.4%** at max effort (Anthropic official + Cursor; partner SpaceXAI calls it the most capable model they have run on 3.2; vs Opus 5 70.0%, GPT-5.6 Sol 67.2%)

Twin-weight rows (Fable 5.1, same weights with safeguards on — second-pass additions resolving the previous evidence gaps; independent boards still have no Mythos-specific rows):

- GPQA Diamond: **93.7%** (AA) / **93.4%** (Vals) — resolves the 2026-09-24 gap
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90%** (system card)
- AA Intelligence Index v4.3.2: **53.4**; AA-HLE: **59.1%**; CritPt: **29.7%**; MMLU-Pro: **92.4%** (Vals); Omniscience: accuracy **67.2%**, index **43.5**, hallucination-rate field **72.6%** (AA — the honesty soft spot, flagged)
- Tau3-Banking: **47.2%** (AA — resolves the previous "no verified Tau3" gap); AA Briefcase: **1675**; AA Agentic Index: **58.0%**; Analyst Agent: **57.5%**; ITBench: **49.5%**; GDP.pdf: **26.2%**; ApprenticeBench: **72%** (NeoCognition); Toolathlon-Verified: **77.8%** / Pass@3 **81.5%** (system card); CWE-bench v1: **58.0%** (Collinear); Terminal-Bench 2.1: **85.0%** (Vals) / **91.4%** (AA)
- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**; DeepSWE: **67.4%**; FrontierSWE v2: **56.3%**; ProgramBench: **87.6%** (system card / Proximal); SciCode: **63.1%** (AA); LiveCodeBench: **90.5%** (Vals — resolves a previous gap); AA Coding Index: **81.6%**; CursorBench 4.0: **51.8%**; Bug Hunt Bench: **43.0 fixes**; PostTrainBench v1.1: **40.2%**
- AA-LCR: **85.3%**; MLCR-AA: **71.1%**; GraphWalks BFS 256K-1M: **65.0%** (Gemini 4 Argon launch chart via BenchLM)
- Design Arena Website: **1318** (OpenRouter); BenchLM composite for the twin: **82.09, #5 of 889** (54 of 625 rows covered)

Domain evidence (from the official announcement; qualitative):

- Protein design: binders 10x higher affinity than best Adaptyv Bio competition entries on three targets; ~50% hit rate across 12 targets, lab-validated by two external organizations (vs a 10-15% field norm).
- GPU kernel optimization: 1.4x-2.5x speedups on seven open-source genomics/protein models (H100), identical outputs; genome-wide analysis costs cut 30-60%.
- Fable twin trained the neural network behind a new 2-3 km-resolution elevation map of a third of Venus (from 30-year-old Magellan radar data), released under CC license.

### Normalized scores (1–100)

- **Tool use: 94/100.** TB4.0 60.9% remains near the top of the public board (Opus 5.5's Vals 65.2% #1 now edges it), TB-Science 52.6% is class-best, GDPval 1853 clears the 1750+ frontier bar (AA's own twin run: 1758/62.9% — retained as the independent read), and the new twin rows add Tau3 47.2%, Toolathlon 77.8%/81.5%, ApprenticeBench 72% (vs Muse Spark's 19%), TB2.1 85-91.4%, CWE-bench 58.0%. Capped by Claw-Eval/Toolathon-MCP remaining unpublished for this ID and by zero Mythos-specific independent rows (BenchLeader: unranked). Held at 94.
- **Reasoning: 91/100.** Raised from 90: the 2026-09-24 caps ("GPQA/MRCR/CritPt unpublished — an evidence gap, not a capability verdict") are now resolved by twin-weight evidence — GPQA 93.7% clears the 90% bar, ARC-AGI-1 97.5% / ARC-AGI-2 90%, MLCR 71.1%, CritPt 29.7% (mid-field), MMLU-Pro 92.4%, AA II 53.4, AA-HLE 59.1% — a profile above Muse Spark (90) but measurably below Opus 5.5's dominant board (HLE #1, ARC-AGI-2 93.3%, OTIS/ProofBench 100%). Cap: the twin's 72.6% Omniscience hallucination-rate field (poor honesty calibration, flagged).
- **Context window: 95/100.** 1M total plus the newly documented 128K max output; twin retrieval evidence — AA-LCR 85.3%, MLCR 71.1%, GraphWalks 65.0% across 256K-1M — good but short of the ≥98%-at-512K+ bar for 100. Held at 95.
- **Multimodal: 75/100.** Text/image (PDF) input per Claude platform family; no video/audio input and still no published vision-benchmark row for this ID or its twin; text out. Bottom of the document-input band — no new evidence either way this pass, held.
- **Coding: 92/100.** Mythos-specific CursorBench 3.2 73.4% (class-best at max effort) and TB4.0 60.9%, corroborated by twin rows: SWE-bench Pro 81.2%, SWE Multilingual 89.1%, LiveCodeBench 90.5%, SciCode 63.1%, AA Coding Index 81.6%, ProgramBench 87.6%. The twin sits 3-8 points below Opus 5.5 on every shared coding bench (SWE Pro 81.2 vs 89.9, SWE Multilingual 89.1 vs 93.9, DeepSWE 67.4 vs 74.2, CursorBench 4.0 51.8 vs 57.8), which keeps it below the 95+ tier; SWE-bench Verified remains unpublished for this ID. Held at 92.
- **Cost efficiency: 33/100.** $10/$50 matches the ~$10/$50 ≈ 30 anchor; the $0.25 cache read (0.025x, a quarter of every other Claude model's), $5/$25 batch, and the measured 25-45% effective reduction lift it slightly to 33. Trusted-access data retention (30 days) and BenchLeader's $20/M blended "among the most expensive" note cap it there. Held.
- **Overall Score: 89.4/100.** (94 + 91 + 95 + 75 + 92) / 5 = 89.4, up from 89.2 on 2026-09-24 via the Reasoning +1. Best-fit: the capability ceiling of the Claude line for vetted cyber/bio work; Fable 5.1 is the same intelligence for general use — and until the Cyber Verification Program goes live, it is also the only door actually open.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-11
- Method: public internet research, second pass over the 2026-09-24 report (Anthropic launch announcement + Fable 5.1 & Mythos 5.1 system card, BenchLeader data as of 2026-10-11, BenchLM updated 2026-10-10 for both the Mythos and Fable pages, Artificial Analysis leaderboards, Vals AI, NeoCognition, Collinear, Cursor, plus independent reviews: Vellum's benchmark explainer and eesel's spec/access review; three searches — two successful, one blocked by a bot challenge — plus the official pages); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
