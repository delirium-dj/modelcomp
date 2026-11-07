# Gemini 4 Carbon — findings by Ling 3.2 Flash

- Source: Google (`gemini-4-carbon`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon (no Free-tier wording: paid frontier model, no OpenCode Zen Free ID; access limited to Fairwind Program cohort as of 2026-11-08)
- **Short description:** Google DeepMind's second Gemini 4 frontier model (alias/variant in the Gemini 4 family after Argon), pitched as Google's strongest model for cybersecurity defense and long-horizon agentic engineering; top use case is multi-day autonomous vulnerability research, patching and large-codebase agent workflows.
- **Provider / access:** Google (DeepMind). Gemini API / Google AI Studio "coming soon" — no public API endpoint as of 2026-11-08; initial access only via Fairwind Program cyber defenders. No Chat Completions or Responses API ID verified; Google native Gemini API (generateContent) expected at GA.
- **Release / knowledge:** 2026-10-28 (UTC; Google blog + Sundar Pichai post); knowledge cutoff no verified public cutoff found (not disclosed).
- **IDs:** No public Gemini API model ID yet — Gemini API catalog's stable Gemini 4 endpoint is still `gemini-4-argon` (Gemini API changelog via CSDN, 2026-10-29); no Free ID exists on OpenCode Zen (not listed in Zen catalog).
- **Context window:** 1M tokens total (Artificial Analysis model page `gemini-4-carbon-medium`; Vals AI evaluation config used context 1M / max output 1M, output cap 1,048,576; DataLearner). Google blog itself does not state it.
- **Modalities:** text/image/speech(audio)/video in → text out (Artificial Analysis model page); reasoning yes (thinking levels; High is the benchmarked config); tool calls yes (all AA/Vals runs used tools); JSON mode no Carbon-specific public confirmation found.
- **Pricing (as of 2026-11-08):** Intro $2 in / $10 out per 1M, cached input 95% off ($0.10/1M); after intro $4/$20 standard, cache $0.20; intro end date TBD (Google blog; Artificial Analysis). Paid $ only — no Free tier; free-tier privacy caveat N/A (third-party gateway routes may carry separate data terms).
- **Architecture:** Proprietary; params total/active, MoE split and license details not disclosed (BenchLM "Not reported"; DataLearner); reasoning model with low/medium/high thinking levels.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Carbon only reported on Terminal-Bench 4.0)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1733 Elo** (Artificial Analysis GDPval-AA v2.1, High config, rank #11; AA page via CSDN 2026-11-03)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **69.1%** (Artificial Analysis HLE-Diamond, 1,000 cleaned items, pass@1 no tools, #1; reasoning split 79.6% #1, knowledge split 58.6% — AA page via hermes-ai.net / FourWeekMBA, 2026-10-31)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found** (CritPt v2 Hard Subset is an AA Index v5.0 component; Carbon value not surfaced)
- Artificial Analysis Intelligence Index / BenchLM overall: **59 / #1** (AA Intelligence Index v5.0, High, 2026-10-28; BenchLM BenchAlign 88.4/100, #1 of 216, 2026-10-29, evidence status Estimated)
- Omniscience Accuracy / Hallucination Rate: **58% / 11%** (AA-Omniscience v1.1; index score 54, #1)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (related: FrontierSWE 2 61.2% Google launch table; SWE-sweep 9.6% Google launch table)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **89.06%** (Vals AI Vibe Code Bench v1.1, High + tools, #9/117; DataLearner aggregation of Vals report)
- DeepSWE / Coding Index / other: **59** (AA Coding Agent Index v2.0, High + Antigravity CLI, #2 behind Claude Opus 5.5 62); Terminal-Bench 4.0 65.2% (AA harness, #2 behind Kimi K3.1 Pro 67.2%; Vals Mini-SWE-agent run 63.13%, #4/121); FrontierCode v1.1 51% (#2, AA via Trending Topics); WebDev Arena Elo 1768, +89, #4 (Google blog)

Long context:

- GraphWalks 96.2% BFS F1 at 256K–1M (Google self-run; vs Argon 84.2%) — no MRCR/RULER value reported for this model ID

### Normalized scores (1-100)

- **Tool use: 72/100.** TB 4.0 65.2% (AA, #2) and AutomationBench-AA 53.9% (#1) / Zapier 53.9% high-effort, OSWorld-2.1 81.5% (#2), Agents' Last Exam 77.4% (#1) put it above the mid band; GDPval-AA 1733 Elo (#11) sits just under the 1750 frontier bar and no TB2.1/Tau3-Banking verification exists, which caps it.
- **Reasoning: 90/100.** HLE-Diamond 69.1% (#1; reasoning 79.6%), Terminal-Bench-Science 0.1 64.8% (#1), RiemannBench 80.0% (#1), AA Index 59 (#1) hit frontier bars; AA Index 59 is just under the 60 frontier line and GPQA/CritPt/LCR are unverified, which caps it.
- **Context window: 96/100.** Verified 1M total → >=1M tier (95-100); held below 100 because the only retrieval proof is Google self-run GraphWalks 96.2% (<98%) and no MRCR/RULER verification exists.
- **Multimodal: 92/100.** Verified image + audio(speech) + video input with text output (AA model page); Chartography 72.5% (#1) and Blueprint-Bench 2 58.6% (#1) support it; text-only output caps it below 100.
- **Coding: 69/100.** Strong agentic-coding gains: TB 4.0 65.2% (AA, #2), Coding Agent Index 59 (#2), Vibe Code Bench 89.06% (#9/117), FrontierSWE 2 61.2%, SWE-sweep 9.6%; capped by no verified SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode scores for this exact ID and FrontierCode v1.1 51% trailing Opus 5.5.
- **Cost efficiency: 72/100.** Intro tier $2/$10 with $0.10 cache sits between $1.25/$4.25 (~88) and $3/$15 (~60) → ~72; at standard $4/$20 it drops to ~56; AA measured $7.76/task at list price vs Opus 5.5 $10.04. Scored independently, excluded from Overall.
- **Overall Score: 83.8/100.** Mean of Tool use 72 + Reasoning 90 + Context 96 + Multimodal 92 + Coding 69 = 419/5 = 83.8 (half-up, 1 decimal). Best fit: long-horizon cyber-defense coding and deep-research workloads where 1M context and tool robustness dominate; wait for general API GA before production adoption.

---

## Signature

- Provided by: **Ling 3.2 Flash (ling-3.2-flash)** — 2026-11-08
- Method: Fresh public internet research on 2026-11-08 (Google official blog + DeepMind model page, Artificial Analysis index/model pages, BenchLM, Vals AI, Zapier AutomationBench report, DataLearner aggregation of Google's launch table, reputable secondary coverage); every raw number carries source + rank/harness; missing items are marked exactly as "no verified public score found"; scores are 1-100 normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

{"type":"file","path":"research/2026-11/Gemini_4_Carbon.md","title":"Open result"}
