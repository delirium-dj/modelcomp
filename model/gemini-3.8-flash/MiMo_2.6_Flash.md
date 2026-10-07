# Gemini 3.8 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's "most intelligent Flash model" (released 2026-09-02) for long-horizon software engineering, autonomous agents, and complex enterprise workflows at Flash-tier cost. Per Google's model card it is based on Gemini 3.7 Flash (post-training upgrade, not a new pretraining run) — an incremental successor, not an alias.
- **Provider / access:** Gemini API (`gemini-3.8-flash`, stable), Google AI Studio, Gemini Enterprise Agent Platform, Gemini App. Chat Completions-compatible and native generateContent routes; batch and flex pricing modes available.
- **Release / knowledge:** released 2026-09-02 (GA); knowledge cutoff March 2026, with Google's caveat that some domains' coverage reaches only January 2025.
- **IDs:** `google/gemini-3.8-flash` (gateway routes) / `gemini-3.8-flash` (native).
- **Context window:** 1,048,576 input tokens; max output 65,536 tokens (model card rounds to 64K).
- **Modalities:** text, image, video, audio, and PDF in; text out; reasoning yes (thinking levels low/medium/high, default medium, `minimal` unsupported); tool calls yes (function calling, code execution, structured outputs, search grounding, URL context, file search, computer use preview); no image/audio generation, no Live API.
- **Pricing (as of 2026-10-07):** **introductory** $0.75 in / $3.75 out per 1M (through 2026-12-31), cached input $0.075; from 2027-01-01 it doubles to $1.50 / $7.50 (cache $0.15). Batch/Flex $0.375 / $1.875. Output price includes thinking tokens. Paid (AI Studio free tier exists but is quota-limited — not scored here).
- **Architecture:** proprietary (private weights, parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google model card) / **87.6%** (Artificial Analysis, high effort, Terminus 2 harness) / 81.27% (vals.ai harness).
- Terminal-Bench 4.0: **19.1%** (Google) / 19.7% (AA) — a weak spot vs frontier models (Claude Opus 5 51.8%).
- OSWorld 2.0 computer use: **59.0%** (Google comparison table; Claude Opus 5 75.4%).
- GDPval-AA / Tau3-Banking / Tau2 / Toolathon / Claw-Eval / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.44%** (vals.ai, rank 4/138) / **95.25%** (Artificial Analysis).
- HLE: **54.9%** on HLE-Verified (Google announcement) / **47.8%** no tools (AA, 2026-09-03).
- AA Intelligence Index: **41** (AA via AIEvals); Vals Index 54.83% (rank 15/33); LiveBench 75.8% (high, livebench.ai 2026-10-03); ARC-AGI-2 **89.2%** at high (ARC Prize, 2026-10-03); MMLU Pro 90.22%; MMMU Pro 89.08%.
- LCR / CritPt / Omniscience: no verified public score found.

Coding:

- DeepSWE v1.1: **73.7%** (Google) / **74%** high effort (Datacurve DeepSWE board, 2026-09-03 — ties Claude Opus 5 for board top).
- SWE-bench Verified: **80.0%** (vals.ai, bash-only mini-swe harness, ±1.79, rank 24/88 — independent).
- SWE-bench Pro V2: **94.86%** Full Scale / **58.8%** HARD (Full Scale AI/SEAL).
- LiveCodeBench: **89.48%** (vals.ai).
- Vibe Code Bench v1.1: **78.65%**; Terminal-Bench-Science 0.1: 10.0%; SciCode: no verified public score found.

Long context:

- ProgramBench: **1.00%** as tabulated by AIEvals (looks like a rank/normalized field, not a retrieval %); no MRCR / RULER / GraphWalks retrieval score verified for 512K+ — "no long-context retrieval reported" beyond the 1M window spec.

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.1 87.6–89.4% is at the frontier ref (~88%+), but Terminal-Bench 4.0 at 19.1–19.7% and OSWorld 2.0 at 59% are far below frontier, and there is no GDPval/Tau3/Claw-Eval number — the split caps it at 74.
- **Reasoning: 89/100.** GPQA 94.4–95.3 and HLE 47.8–54.9 both clear the frontier refs (90%+/40%+), plus ARC-AGI-2 89.2; capped below 90+ by AA Intelligence Index 41 (well short of the 60+ frontier ref).
- **Context window: 95/100.** 1M input window lands in the ≥1M tier (95–100); no ≥98% needle-retrieval result at 512K+ is published, so it stays at the tier floor.
- **Multimodal: 92/100.** Text/image/video/audio/PDF in with text out — audio input puts it in the 90–100 band, corroborated by MMMU Pro 89.08%; no non-text output and Live API absent, so not a full 100.
- **Coding: 91/100.** DeepSWE 73.7–74 (frontier 74%+ ref, board-topping), SWE-bench Verified 80%, LiveCodeBench 89.48, Vibe 78.65, TB2.1 87.6+; capped below 93 by the weak Terminal-Bench 4.0 (19%) and no SciCode row.
- **Cost efficiency: 90/100.** $0.75/$3.75 introductory is just off the ~$0.60/$2.20 ≈ 92 anchor, with $0.075 cache and half-price batch/flex; held below 92 because the price doubles to $1.50/$7.50 on 2027-01-01 and thinking tokens bill as output.
- **Overall Score: 88/100.** (74+89+95+92+91)/5 = 88.2 → 88 — best-fit cheap long-horizon coding/agentic workhorse with full multimodal input; weaker for Terminal-Bench-4.0-style general agents and OSWorld computer use.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google DeepMind model card + blog, Gemini API docs, vals.ai, Artificial Analysis, The Model Gap, AIEvals, CometAPI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
