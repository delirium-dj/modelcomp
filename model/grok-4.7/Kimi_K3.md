# Grok 4.7 — findings by Kimi K3

- Source: SpaceXAI (formerly xAI) / Grok 4.7 (`grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's current flagship reasoning model for coding, agentic tasks and knowledge work — a new, larger base model with a longer RL run and improved self-verification, replacing Grok 4.6 at identical list pricing.
- **Provider / access:** xAI API `https://api.x.ai/v1` (OpenAI-compatible — Responses API + Chat Completions), model ID `grok-4.7` (no aliases); OpenRouter `x-ai/grok-4.7`; **OpenCode Zen `opencode/grok-4.7`** (Responses API); also default in Grok Build, and in Cursor and GitHub Copilot. US-region endpoint `us.api.x.ai` at +10%.
- **Release / knowledge:** GA 2026-09-21 (docs.x.ai release notes + x.ai/news launch post); knowledge cutoff May 2026.
- **IDs:** `grok-4.7` (xAI API), `opencode/grok-4.7` (Zen — no Free ID, paid), `x-ai/grok-4.7` (OpenRouter).
- **Context window:** 500,000 tokens (official docs); no output limit stated. Grok 4.7 Fast sibling (2× rates) exists only inside Cursor/Grok Build, no public ID.
- **Modalities:** text + image in; text out; reasoning with 4 effort levels (low/medium/high(default)/xhigh, encrypted reasoning + summaries on Responses API); function calling, structured outputs, web search, X search, code execution.
- **Pricing (as of 2026-09-25):** $2.00 in / $0.50 cached / $6.00 out per 1M below 200K prompt tokens; doubles to $4/$1/$12 at ≥200K (whole-request rate). Confirmed identically on the OpenCode Zen rate card.
- **Architecture:** proprietary, API-only; parameter count not officially published (press/Musk claims of ~2.1T are unconfirmed).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,695 Elo** (Artificial Analysis, independent, +90 vs 4.6 — near the 1750+ frontier reference)
- Terminal-Bench 4.0: **37.6%** (xAI launch table, vendor-reported; Fable 5.1 leads at 57.9%)
- Harvey Legal Agent: **19.6%** (vendor; field-best in that chart)
- Tau2/Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (xhigh; +2 vs Grok 4.6; behind Fable 5.1/GPT-6 Astra at 53)
- AA-Omniscience: **47% accuracy / 29% hallucination rate** (down from 34%)
- EEBench (electrical engineering): **64.0%** (vendor — field-best in chart)
- AA-Briefcase v1.1: **1,657 Elo** (vendor)
- HealthBench Professional: **56.7%** (vendor)
- GPQA Diamond / HLE / AIME / ARC-AGI: **not reported for this model** (xAI moved to newer suites)

Coding:

- DeepSWE v1.1: **71.0%** (vendor, high effort; GPT-5.6 Sol 72.7% in same chart)
- AA Coding Agent Index (with Grok Build harness): **56** (independent; +9 vs 4.6, 4th among native harnesses, passes GPT-5.6 Sol)
- CursorBench 4.0: **46.3%** (vendor)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**
- Token efficiency caveat: ~81K output tokens per AA Index task (~2.25× Grok 4.6) — verbosity inflates real cost.

Long context:

- 500K window (official); improved long-context management claimed in the launch post; **no MRCR/RULER/LCR retrieval numbers published** for this ID.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** GDPval-AA 1695 is near-frontier and Coding Agent Index 56 (4th, independent) shows real agentic strength in a tuned harness; vendor TB4.0 37.6% and absent Tau3/Claw-Eval keep it out of the 90s.
- **Reasoning: 74/100.** AA Intelligence Index 46 with Omniscience 47%/29% hallucination is solid upper-mid but clearly behind the 50s crowd (Fable 5.1, GPT-6 Astra); no public GPQA/HLE for cross-checking caps confidence.
- **Context window: 84/100.** 500K window → top of the 200K–500K band (65–84); no verified retrieval-at-length score to go higher.
- **Multimodal: 62/100.** Text + image input, text-only output → 60–70 band; no video/PDF/audio evidence.
- **Coding: 78/100.** DeepSWE 71.0% (vendor) and the independent Coding Agent Index 56 with a +9 harness jump are strong; missing SWE-bench/LiveCodeBench rows prevent a frontier score.
- **Cost efficiency: 76/100.** List $2/$6 interpolates to ~80 on the price scale, but verified ~2.25× output-token verbosity raises true per-task cost; ≥200K tier doubling is a further caveat.
- **Overall Score: 75.6/100.** Mean of (80 + 74 + 84 + 62 + 78)/5 = 75.6. Best fit: agentic coding inside Cursor/Grok Build/Zen at mid-tier list price, especially E.E./legal knowledge work; not the pick for maximum general reasoning or multimodal input.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-25
- Method: public internet research (codersera guide consolidating xAI launch post + docs.x.ai specs + Artificial Analysis' independent "Benchmarking Grok 4.7" article; OpenCode Zen docs for the Zen ID/pricing; Oracle/mungomash/financefeeds for corroboration). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
