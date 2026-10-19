# Gemini 3.7 Flash — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's August-2026 workhorse — "Our most intelligent workhorse model yet for coding and agents" — now **deprecated**: Google's deprecations table lists "gemini-3.7-flash | August 13, 2026 | N/A | gemini-3.8-flash" and the model doc states "Deprecated: gemini-3.7-flash (automatically routed to gemini-3.8-flash)". "The endpoint is not shutting down and automatically routes API requests to gemini-3.8-flash." Distinct from `gemini-3.6-flash` and `gemini-3.8-flash`; based on Gemini 3.6 Flash.
- **Provider / access:** Gemini API `gemini-3.7-flash` (deprecated, auto-routed to 3.8 Flash); AI Studio; OpenRouter `google/gemini-3.7-flash` (+ `:batch`); OpenCode Zen `opencode/gemini-3.7-flash` (`https://opencode.ai/inference/google/v1beta/models/gemini-3.7-flash`).
- **Release / knowledge:** released **2026-08-13** (Google blog; model card "Published 13 August 2026"). Knowledge cutoff **March 2026** ("The knowledge cutoff date for Gemini 3.7 Flash is March 2026", some domains limited to January 2025).
- **IDs:** `gemini-3.7-flash` (Gemini API), `google/gemini-3.7-flash` (OpenRouter), `opencode/gemini-3.7-flash` (Zen).
- **Context window:** **1,048,576** input tokens, **65,536** output tokens ("with a token context window of up to 1M", "Text, with a 64K token output").
- **Modalities:** input text, image, video, audio, PDF; output text. Tools: caching, code execution, function calling, file search, search grounding, Maps grounding, structured outputs, URL context, computer use (preview), Batch/Flex/Priority inference. No audio/image generation, no Live API. Thinking levels low / medium / high (default medium) — Simon Willison: "minimal, which was an option in 3.6 Flash, has been removed in 3.7".
- **Pricing (as of 2026-10-19, per 1M tokens):** the Gemini API pricing page no longer lists 3.7 Flash, but the model card footnote says "For 3.6 and 3.7 Flash, introductory price expires on December 31, 2026" and the launch blog: "Introductory pricing expires on December 31, 2026. Starting January 1, 2027, $1.50/1M input tokens and $7.50/1M output tokens will apply." So the model is on the **$0.75 / $3.75** introductory rate until 2026-12-31, then $1.50 / $7.50. **OpenCode Zen already bills the standard rate: $1.50 in / $7.50 out / $0.15 cached read.** OpenRouter API: $0.75 / $3.75 with $0.075 cache read.
- **Architecture:** proprietary; no parameter count published ("Gemini 3.7 Flash is based on Gemini 3.6 Flash").

### Raw benchmarks found

> Google's model-card numbers are marked "vendor"; Artificial Analysis, the official Terminal-Bench board, Vals AI, ARC Prize and Epoch AI are independent.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (vendor) / **85.77%** (AA) / **77.53%** (Vals AI, rank 14, Terminus 2, high effort)
- Terminal-Bench 4.0: **13.64%** (AA, high) / **11.2% ± 2.4** (official tbench.ai board, mini-SWE-agent, high, 330 trials, rank 35) / **12.12% ± 3.03** (Vals AI, rank 34) — for comparison, Gemini 3.8 Flash measures 19.1–19.7% on the same benchmark
- Terminal-Bench 3.0: **14.9%** (vendor)
- AutomationBench: **30.4%** (vendor, private set) / **62.03%** (AA AutomationBench-AA) / 59.9% (via BenchLM)
- GDPval-AA v2: **1525 Elo** (vendor) / **1391.99** (AA)
- OSWorld 2.0: **47.9%** (vendor); Agent's Last Exam **26.3%** (vendor); Harvey LAB-AA **90.7%** (vendor); GDP.pdf **34.0%** all-pass (vendor)
- Tau3-Banking: **32.78%** (AA); JobBench / Toolathlon / MCP-Atlas / Claw-Eval: **no verified public score found** for 3.7 Flash
- IFBench, ITBench-AA, AA-Analyst **60%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **94.55%** (AA) / **93.94%** (Vals AI) / 93.9% (via BenchLM)
- HLE: **47.87%** (AA) / **53.6% HLE-Verified** (vendor)
- LCR / MLCR: AA-LCR v1.1 **81.67%** (AA); MLCR-AA **15.0%** (AA)
- CritPt: **14.29%** (AA)
- Artificial Analysis Intelligence Index: **39** (high, #62/217); Medium 40* and Low 37* are AA estimates; the launch article and the Google model card quoted **56** at release ("Gemini 3.7 Flash (high) scores 56 on the Artificial Analysis Intelligence Index, up 4 points from Gemini 3.6 Flash") — index v4.3.2 re-baselining, not a regression
- ARC-AGI-1 **95.5%** / ARC-AGI-2 **84.6%** at high effort (ARC Prize; medium 91.2/63.7, low 85.2/52.9)
- FrontierMath v2: Tiers 1–3 **71.579%**, Tier 4 **36.585%** (Epoch AI) — far behind the leaders
- Epoch ECI **157**, "#18" of 260; BioMystery 87.1% / 43.5%; LABBench2 82.1%; MMLU-Pro 90.12% (Vals)

Coding:

- DeepSWE v1.1: **65.3%** (vendor)
- Terminal-Bench 2.1 85.8% / 85.77% (AA) / 77.53% (Vals); Terminal-Bench 4.0 13.64% / 11.2% (tbench); Terminal-Bench 3.0 14.9%
- SWE-bench: **80.80% ± 1.76** (Vals AI; no official swebench.com row)
- LiveCodeBench: **88.65% ± 0.92** (Vals AI; no entry on the official LiveCodeBench board)
- SciCode **57.18%** (AA); FrontierCode 1.1 Main **43.6%** (vendor) / 43.6% (via BenchLM)
- Code Arena Elo **1588** (vendor); no Vibe Code Bench, CursorBench, FrontierSWE or ProgramBench row published for 3.7 Flash
- Terminal-Bench-Science 0.1: **no verified public score found** for 3.7 Flash

Long context:

- GDM-MRCR v2 (8-needle): **97.0%** at a 128k average (vendor) — the only retrieval number, and only at 128k
- AA-LCR v1.1 81.67% (AA); no RULER / GraphWalks / 512K+ measurement
- 1,048,576-token input window with a 65,536-token output cap

Performance profile (AA, high): Index 39 (#62/217), speed **N/A** ("Unknown out of 4 units for Speed" — deprecated, only the default 10k workload is still benchmarked), cost per Index task **$0.93** (#49/114), 100M output tokens (#72/116).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 73/100.** Terminal-Bench 2.1 85.8% (vendor) / 85.77% (AA) / 77.53% (Vals), AutomationBench 30.4–62.03%, GDPval-AA 1391.99–1525 Elo, OSWorld 2.0 47.9%, Harvey LAB-AA 90.7%, Agent's Last Exam 26.3% — a solid workhorse agentic profile. Capped well below the 80s because the rubric's frontier anchors are missed (TB2.1 ~88%+ → 85.8% at best, τ3 ~50%+ → 32.78%, GDPval ~1750+ → 1525 at best), because Terminal-Bench 4.0 is only 11.2–13.64% and Terminal-Bench 3.0 14.9%, and because no τ-bench/Claw-Eval/MCP-Atlas/Toolathon row exists.
- **Reasoning: 84/100.** GPQA Diamond 94.55%, HLE 47.87–53.6%, AA-LCR 81.67%, ARC-AGI-1 95.5% / ARC-AGI-2 84.6%, MathVision-grade accuracy on knowledge, Epoch ECI 157 (#18/260), MMLU-Pro 90.12%. Capped by the Artificial Analysis Intelligence Index of **39** (56 at launch, but the current v4.3.2 scale is what counts), CritPt 14.29%, MLCR-AA 15.0%, FrontierMath v2 71.579% / 36.585% and ARC-AGI-2 well below the frontier.
- **Context window: 95/100.** 1,048,576-token input window with a 65,536-token output cap — the rubric's top window tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: the only measured retrieval figure is GDM-MRCR v2 8-needle at **97.0% at a 128k average**, so the rubric's "≥98% retrieval at 512K+" condition is undemonstrated, and the model is now auto-routed to 3.8 Flash anyway.
- **Multimodal: 91/100.** Text, image, video, audio and PDF input with text output — the rubric's "+audio in = 90–100" band — with good independent vision evidence: MMMU-Pro 85.49% (AA), CharXiv 84.5% without tools / 88.7% with tools (vendor), LVBench 85.4% (vendor), BioMystery and LABBench2 (document/science) rows published. Held at 91 rather than higher because no MMMU-Pro figure exists for the 3.8-style re-routing and the vision suite is Google's own.
- **Coding: 79/100.** LiveCodeBench 88.65% (Vals), SWE-bench 80.80% (Vals), Terminal-Bench 2.1 85.77% (AA) / 85.8% (vendor) — above the rubric's 85% anchor — and SciCode 57.18% above the 55% anchor. Capped by DeepSWE 65.3% (under the 74% anchor), Terminal-Bench 4.0 11.2–13.64% and Terminal-Bench 3.0 14.9% (the benchmark that now measures frontier agentic coding), FrontierCode 43.6%, and the absence of any Vibe Code Bench, CursorBench or FrontierSWE row.
- **Cost efficiency: 75/100.** Two different live prices must be separated: the Gemini API still serves 3.7 Flash at the **$0.75 / $3.75** introductory rate (cache $0.075) until 2026-12-31, after which "$1.50/1M input tokens and $7.50/1M output tokens will apply", and **OpenCode Zen already bills $1.50 / $7.50 with $0.15 cached read** — the standard rate, the same one Vals AI records. The rubric's anchors (~$0.60/$2.20 ≈ 92, ~$3/$15 ≈ 60) bracket the effective $1.50/$7.50 at roughly 75. No free tier for this SKU, and the model is deprecated and auto-routed, so a promo tier cannot be credited.
- **Overall Score: 84.4/100.** (73 + 84 + 95 + 91 + 79) / 5 = 84.4 — best-fit: a well-rounded, cheap multimodal workhorse (1M context, audio/video/PDF input, 138 t/s-class 3.8 lineage) whose Terminal-Bench 4.0 score of ~12–14% shows it is not an agentic-coding model — for that, step up to Gemini 3.8 Flash (19%) or Gemini 4 Argon (57%); because the API now silently routes to 3.8 Flash, treat this id as an alias of 3.8 rather than a separate model in production.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA Intelligence Index — 56 (Google model card and AA launch article) vs 39 today.** Index version change (v4.3.2 re-baselining); the current 39 is scored, and the launch-day number is recorded as launch-day.
2. **Terminal-Bench 4.0 — 13.64% (AA) vs 11.2% ± 2.4 (official board) vs 12.12% ± 3.03 (Vals).** Three harnesses, same verdict: very weak. Against Gemini 3.8 Flash the delta is +6.1pp (AA), +7.9pp (board), +7.6pp (Vals) — i.e. the 3.8 upgrade is real but small.
3. **Terminal-Bench 2.1 — 85.8% (Google) vs 85.77% (AA) vs 77.53% (Vals).** Harness variance; AA used.
4. **Cost per Index task — $0.93 (AA now) vs $0.40 (AA at launch).** Eval-weight change, not a price change.
5. **Price — $0.75/$3.75 (AA, OpenRouter, Epoch) vs $1.50/$7.50 (Vals AI, OpenCode Zen).** Gateways and the deprecated endpoint bill the standard rate; the cost score follows the effective rate, with both documented.
6. **Deprecation routing.** Google: "the endpoint is not shutting down and automatically routes API requests to gemini-3.8-flash" — so any live measurement of the `gemini-3.7-flash` id is partly a measurement of 3.8 Flash. This is the single most important practical caveat for the model.
7. **AA speed is "N/A"** — with the deprecation, "Benchmarks of providers are not available for this model", so no throughput figure is published for 3.7 Flash today; the 3.8 Flash lineage figure (138.6 t/s) is not attributed to it.
8. **Epoch FrontierMath attribution.** The values 71.579% / 36.585% are for "gemini-3.7-flash_high" per Epoch's own labeling — they belong to this model, not to Kimi K3, and are listed here accordingly.

### Notes on identity

- `gemini-3.7-flash` is a distinct released model (2026-08-13) from `gemini-3.6-flash` (its base) and `gemini-3.8-flash` (its replacement), but as of today the API id resolves to 3.8 Flash — an alias-by-routing rather than an alias-by-name.
- The id is **not** on OpenCode Zen's deprecated list (which only lists Gemini 3 Pro, March 9 2026), so Zen still exposes a route and bills the standard rate.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model page, Gemini API deprecations table, model card and launch blog, and pricing/thinking docs; independent trackers Artificial Analysis (model page + launch article, medium/low estimates), the official Terminal-Bench 4.0 leaderboard, Vals AI, ARC Prize, Epoch AI, the BenchLM ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.7_Flash.md`, using the same headings.
