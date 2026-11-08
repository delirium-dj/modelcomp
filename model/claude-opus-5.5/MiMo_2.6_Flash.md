# Claude Opus 5.5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 91). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-07, overall 86.32, rank #2/1016) and the Artificial
> Analysis model page + its leaderboards. Changes: Reasoning 93→95
> (FrontierMath v2 and ARC-AGI-2 rows now public); Multimodal 78→80
> (AA-MMMU-Pro, ParseBench, ExtractBench rows); Overall 91→92. Held: Tool
> use 92, Context window 97, Coding 94, Cost efficiency 57.

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family model — a hybrid-reasoning flagship for long-running agentic coding, computer use, and knowledge work, positioned at Claude Fable 5.1 capability for ~40% lower run cost than Opus 5. Not a variant/alias of another entry.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Chat Completions-style Messages API (Anthropic format).
- **Release / knowledge:** released 2026-09-22; reliable knowledge cutoff June 2026 (training-data cutoff also Jun 2026).
- **IDs:** `anthropic/claude-opus-5-5` (gateway routes) / `claude-opus-5-5` (native).
- **Context window:** 1,000,000 tokens; max output 128K (Messages API), 300K on Batch API beta (`output-300k-2026-03-24`). Verified again on the AA model page (1M) and BenchLM family page (Context Window 1M).
- **Modalities:** text + images (+ PDF via Files API) in; text out; reasoning yes (adaptive thinking always on, cannot be disabled; effort low→max, default `medium`); tool calls yes; no audio/video input (Anthropic: "text and images → text"; AA confirms text+image in, text out).
- **Pricing (as of 2026-11-08):** $4 in / $20 out per 1M; cache read $0.20 (0.05× input), 5m cache write $5, 1h $8; Batch API 50% off ($2/$10); Fast mode research preview $8/$40 at 2.5× speed. Paid — no free tier. Confirmed unchanged: BenchLM price registry (updated 2026-11-06, from Claude Opus 5.5 model docs) and AA ($4.00/$20.00, 95% cache discount).
- **Architecture:** proprietary (parameters undisclosed; AA: "weights not publicly available").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic system card, xhigh effort, ±2.6 pts — self-run) / **59.6%** (Artificial Analysis independent run, tied with GPT-6 Astra). Terminal-Bench 2.1: no verified public score found.
- GDPval-AA v2.1: **1846** Elo (Anthropic, AA-run; vs Fable 5.1 1735, Opus 5 1708). AA-Briefcase v1.1: **1800** Elo (BenchLM snapshot 2026-11-07 citing the AA leaderboard; an earlier snapshot read 1822).
- AutomationBench: **40.0%** (Anthropic/Zapier run) / AutomationBench-AA **69.5%** (AA). AA-Harvey LAB v1.0: **91.2%**. AA-ITBench: **38.2%**. AA-AnalystAgent: **56.3%**.
- OSWorld 2.0 computer use: **81.8% partial / 48.7% strict** (Anthropic system card).
- Toolathlon Verified: **77.8%** pass@1 / **82.4%** pass@3 / **72.2%** pass³ (system card).
- CWE-bench v1: **67.0%** (Collinear leaderboard, via BenchLM 2026-11-07). AA Cyber Index **28.7%**, CWE-Bench-AA **58.3%**.
- Hermes Index: **63.3%** / Hermes Bench **76.7%** (Nous Research leaderboard, via BenchLM).
- Claw-Eval / ClawProBench / MCP-Atlas / Tau3-Tau2: no verified public score found.

Reasoning / knowledge:

- HLE: **64.4%** no tools, **67.7%** with tools (Anthropic) — AA independent no-tools run: **61.4%**.
- GPQA Diamond: no verified public score found (Anthropic did not publish GPQA for this release; still absent from BenchLM 2026-11-07).
- FrontierMath v2: **91.228%** (Tiers 1–3) and **95.000%** (Tier 4) — Epoch AI FrontierMath v2 leaderboard (new this pass).
- ARC-AGI-1: **97.50%** / ARC-AGI-2: **91.7%** semi-private — ARC Prize published results for `anthropic-claude-opus-5-5` (new this pass).
- Artificial Analysis Intelligence Index: **59** (AA model page, v5.0.1 scale, rank #2 / 69; earlier snapshot read 58 on the prior scale).
- AA-Omniscience v1.1: index **48.1**, accuracy **65.5%**, hallucination rate **50.3%**. CritPt **31.7%**, AA-LCR **84.7%**, MLCR-AA **27.8%**.
- ArXivMath (Aug 2026): 91.2% no tools / 96.9% with tools. GMMLU 42-language: 94.3%. HealthBench Professional: 65.6%. LiveBench / LCR / CritPt-v2 / Omniscience (vendor-run): no additional verified public score found.

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card; vs Opus 5 79.2%). SWE-bench Multilingual **93.9%**, SWE-bench Multimodal **61.4%**. SWE-bench Verified: **not published** by Anthropic — treat any third-party Verified number as unverified.
- DeepSWE v1.1: **74.2%** (system card).
- AA-SciCode: **66.9%** (Artificial Analysis scicode leaderboard — first verified SciCode row for this model; new this pass).
- FrontierCode v1.1 (Main): **54.4%**; FrontierCode 1.1 Extended **63.6%**; FrontierCode 2.0: **45.5%** (Cognition's harder v2 harness, new this pass).
- CursorBench 4.0: **57.8%** (52.5% at default medium effort). Terminal-Bench-Science 0.1: **58.7%**. FrontierSWE v2: **62.3%**. ProgramBench: **91.2%**.
- LiveCodeBench / SWE-bench Verified: no verified public score found.

Long context:

- ProgramBench (long-context, run across the full 1M window): **91.2%** (Anthropic; Fable 5.1 87.6%, Opus 5 85.4%).
- GraphWalks BFS 256K–1M: **66.8%** (cross-model chart in Google's Gemini 4 Argon launch post, via BenchLM 2026-11-07 — first public long-context retrieval % for this model; new this pass).
- MRCR / RULER: no verified public score found.

Multimodal:

- AA-MMMU-Pro: **87.7%** (Artificial Analysis mmmu-pro leaderboard — new this pass).
- ParseBench: **78.80%**, ExtractBench: **86.06%**, ExtractBench Pro: **51%** (LlamaIndex leaderboards, 2026-10-28 / 2026-11-06 snapshots, via BenchLM — new this pass).
- Chartography (with tools) **89.0%** / (no tools) **64.4%**; BenchCAD Vision2Code IoU **0.962** with tools / **0.730** without; OfficeQA **78.9%**, OfficeQA Pro **67.7%** (Anthropic system card).
- LVBench / audio / video input: no verified public score found for this model on AA (Anthropic modality docs remain text/image-in).

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846 and TB4.0 59.6–66.4 still lead their boards, Toolathlon 77.8% P@1, OSWorld 2.0 81.8% partial, plus new AA-Harvey LAB 91.2% and CWE-bench v1 67.0% rows — held at 92 because Tau3-Banking and Claw-Eval remain unpublished (the standing cap) and no TB2.1 number exists.
- **Reasoning: 95/100.** Two frontier-grade public reasoning scores appeared this pass — FrontierMath v2 91.228% (T1–3) / 95.000% (T4) on Epoch AI's leaderboard and ARC-AGI-2 91.7% on ARC Prize — alongside AA Index 59 (#2/69) and HLE 61.4–67.7%, which together clear the 60+/40% frontier refs; not higher because GPQA Diamond is still unpublished for this release and the Index sits at 59, just under the 60+ ref.
- **Context window: 97/100.** 1M window (95–100 tier) with ProgramBench 91.2% across the full 1M; the new GraphWalks BFS 256K–1M 66.8% confirms retrieval is measured but is far below a ≥98%-style needle score, so 100 stays out of reach (MRCR/RULER still unpublished).
- **Multimodal: 80/100.** New AA-MMMU-Pro 87.7%, ExtractBench 86.06% and ParseBench 78.8% (document/image understanding) strengthen the image+PDF-in band above the old 78; capped well below 90 because output is text-only and there is no native audio or video input (PDF/video band top-out plus no non-text out).
- **Coding: 94/100.** SWE-bench Pro 89.9%, DeepSWE 74.2% (74%+ frontier ref), SWE-bench Multilingual 93.9% and CursorBench 57.8% remain field-leading, and the previously missing SciCode row is now filled by AA-SciCode 66.9% (55%+ ref); held at 94 because SWE-bench Verified and LiveCodeBench are still unpublished and the new FrontierCode 2.0 result (45.5%, harder harness) does not lift the ceiling.
- **Cost efficiency: 57/100.** $4/$20 confirmed unchanged (BenchLM price registry 2026-11-06, AA model page), still just above the $3/$15 ≈ 60 anchor; $0.20 cache reads and the 50% batch discount keep real agentic cost lower than list price — same calibration as the previous pass, so held at 57.
- **Overall Score: 92/100.** (92+95+97+80+94)/5 = 458/5 = 91.6 → 92 — best-fit paid flagship for long-running agentic coding and computer use where 1M context, PDF input, and cache-heavy cost structure matter more than headline per-token price.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-07, Artificial Analysis model page + leaderboards, Epoch AI FrontierMath v2, ARC Prize published results, Anthropic system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 5.5 (BenchLM, snapshot 2026-11-07)](https://benchlm.ai/models/claude-opus-5-5)
  - [Claude Opus 5.5 (Artificial Analysis)](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [Claude Opus 5.5 system card (Anthropic)](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
  - [FrontierMath v2 leaderboard (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [ARC Prize published results — Claude Opus 5.5](https://arcprize.org/results/anthropic-claude-opus-5-5)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
