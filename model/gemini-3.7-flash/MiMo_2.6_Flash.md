# Gemini 3.7 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's "most intelligent workhorse" Flash model (GA 2026-08-13, three weeks after 3.6 Flash) for coding, agents, and web development — big gains over 3.6 Flash on DeepSWE and FrontierCode at half the original list price. Superseded on the Flash track by Gemini 3.8 Flash but still a separate, generally-available entry.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.7-flash`, stable), Antigravity, Gemini Enterprise, Gemini app (Spark on AI Pro/Ultra), Vertex AI. Chat Completions-compatible and native routes; Batch/Flex/Priority inference available.
- **Release / knowledge:** released 2026-08-13 (GA); knowledge cutoff March 2026 nominal — Google's card warns some domains only reach January 2025.
- **IDs:** `google/gemini-3.7-flash` (gateway routes) / `gemini-3.7-flash` (native).
- **Context window:** 1,048,576 input tokens; max output 65,536 tokens.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (thinking low/medium/high; `minimal` unsupported); tool calls yes (function calling, code execution, structured outputs, search/Maps grounding, URL context, file search, computer use preview); no native image/audio generation, no Live API.
- **Pricing (as of 2026-10-07):** **introductory** $0.75 in / $3.75 out per 1M (through 2026-12-31), cached input $0.075, batch $0.375/$1.875; from 2027-01-01 → **$1.50 / $7.50** (cache $0.15). Output price includes thinking tokens. Paid (AI Studio free quota exists — not scored).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Artificial Analysis, high effort; Google's self-computed Terminus-2 run also 85.8%; vals.ai harness 77.53%).
- Terminal-Bench 3.0: **14.9%** (Google, mini-swe agent — low on the harder generation).
- AutomationBench: **30.4%** (Google, private set; vs 3.6 Flash 17.0%). AA-AnalystAgent: **60.0%** (AA, rank-climbing; #1 claimed by LLMLearner on its board).
- OSWorld 2.0: Google self-computed (partial, max of 3 runs) — exact value not captured → no verified public score found for the number itself.
- GDPval-AA / Tau3 / Tau2 / Claw-Eval / Toolathon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.8%** (Epoch AI Inspect harness, high, 198Q — confirmed) / **93.94%** (vals.ai, rank 4).
- HLE: **47.9%** no tools (AA, 2026-08-17); HLE-Verified **53.6%** (medium, no tools, rank 2/2 board).
- ARC-AGI-2: **84.6%** (high, arcprize.org). LiveBench: **78.8%** (livebench.ai).
- CritPt: 14.3 (rank 29/118); FrontierMath Tier 4 v2: 36.6 (rank 15/41); FrontierMath v2: 71.6. AA Intelligence Index: no verified public score found.

Coding:

- SWE-bench Verified: **80.8%** (vals.ai, saturated-board entry).
- LiveCodeBench: **88.7%** (vals.ai). DeepSWE v1.1: **65.0–65.5%** (Datacurve board / LLMLearner, high thinking).
- SciCode: **59.8%** (medium, no tools, rank 4/83). FrontierCode 1.1 Main: **43.6%** (Google; Extended also 43.6%, rank 7/7 board).
- WebDev Arena: 1588 Elo (vs 3.6 Flash 1538). Vibe Code Bench: no verified public score found.

Long context:

- GDM-MRCR v2 (8-needle, 128K average): **97.0%** — rank 1/8 on its board (Google self-computed, dataset public).
- AA-LCR: **83.0%** (rank 11/91). Context Arena memory & persistence: **96.0%** (rank 4/49). No 512K–1M retrieval number.

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.1 85.8% is strong but under the ~88 frontier ref, AutomationBench 30.4% and AnalystAgent 60% are mid-tier, TB3.0 14.9% is weak, and there is no GDPval/Tau3/Claw-Eval row — caps it at 74.
- **Reasoning: 89/100.** GPQA 93.9–94.8 and HLE 47.9 both clear the frontier refs (90%+/40%+), with ARC-AGI-2 84.6 well above mid; capped below 90 by the absent AA Intelligence Index/LCR-style composite cross-check and low CritPt/FrontierMath-tier scores.
- **Context window: 95/100.** 1M window at the ≥1M tier floor with 97% MRCR retrieval proven at 128K and 83% AA-LCR — solid, but no ≥98% needle test at 512K+ to justify above the floor.
- **Multimodal: 92/100.** Text/image/video/audio/PDF in with text out = audio-in band (90–100); no non-text output, so not a full 100.
- **Coding: 87/100.** SWE-bench Verified 80.8%, LiveCodeBench 88.7%, SciCode 59.8% (55%+ ref), TB2.1 85.8% are all strong; capped below 90 by DeepSWE 65.0% (well under the 74% frontier ref) and FrontierCode 43.6% mid-pack.
- **Cost efficiency: 90/100.** $0.75/$3.75 introductory sits just off the ~$0.60/$2.20 ≈ 92 anchor, with $0.075 cache reads and half-price batch/flex; held at 90 because the rate doubles to $1.50/$7.50 on 2027-01-01 and thinking tokens bill as output.
- **Overall Score: 87/100.** (74+89+95+92+87)/5 = 87.4 → 87 — cheap 1M-context multimodal workhorse with excellent GPQA/MRCR/LiveCode numbers; weaker on general-agent terminal tasks and DeepSWE-class long-horizon coding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google DeepMind model card + evaluation PDF + launch blog, The Model Gap, LLMLearner, Epoch AI, vals.ai, AA, LLM Stats, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
