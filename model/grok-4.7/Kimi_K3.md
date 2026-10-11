# Grok 4.7 — findings by Kimi K3

- Source: SpaceXAI (formerly xAI) / Grok 4.7 (`grok-4.7`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's current flagship reasoning model for coding, agentic tasks and knowledge work — a new, larger base model with a longer RL run and improved self-verification, replacing Grok 4.6 at identical list pricing.
- **Provider / access:** xAI API `https://api.x.ai/v1` (OpenAI-compatible — Responses API + Chat Completions), model ID `grok-4.7`; OpenRouter `x-ai/grok-4.7`; **OpenCode Zen `opencode/grok-4.7`** (live, ~#38 by weekly tokens, 40.7% retention); default in Grok Build, Cursor and GitHub Copilot. US-region endpoint `us.api.x.ai` at +10%.
- **Release / knowledge:** GA 2026-09-21 (OpenCode Data confirms; docs.x.ai release notes + x.ai/news launch post); knowledge cutoff 2026-05 (OpenCode Data, verified).
- **IDs:** `grok-4.7` (xAI API), `opencode/grok-4.7` (Zen — no Free ID, paid), `x-ai/grok-4.7` (OpenRouter).
- **Context window:** 500,000 tokens (official docs); max output up to the full 500K (OpenCode Data catalog — new this pass). Grok 4.7 Fast sibling exists only inside Cursor/Grok Build.
- **Modalities:** text + image + PDF in (OpenCode Data — PDF input newly catalog-confirmed); text out; reasoning with 4 effort levels; function calling, structured outputs, web search, X search, code execution.
- **Pricing (as of 2026-10-11):** $2.00 in / $0.50 cached / $6.00 out per 1M below 200K prompt tokens; doubles to $4/$1/$12 at ≥200K (whole-request rate). Confirmed identically on the OpenCode Zen rate card (OpenCode Data catalog row).
- **Architecture:** proprietary, API-only; parameter count not officially published (press/Musk claims of ~2.1T are unconfirmed).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,695 Elo** (official x.ai/news/grok-4-7 via OpenCode Data; matches the +90-vs-4.6 Artificial Analysis figure from first pass)
- Terminal-Bench 4.0: **37.6%** (official launch table via OpenCode Data; Fable 5.1 leads at 57.9%)
- Harvey Legal Agent: **19.6** (official; field-best in that chart)
- AA-Briefcase v1.1: **1,657 Elo** (official; matches)
- EEBench (electrical engineering): **64.0** (official; field-best in chart)
- HealthBench: **56.7** (official)
- Tau2/Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (xhigh; +2 vs Grok 4.6; behind Fable 5.1/GPT-6 Astra at 53)
- AA-Omniscience: **47% accuracy / 29% hallucination rate** (down from 34%)
- GPQA Diamond / HLE / AIME / ARC-AGI: **not reported for this model** (xAI moved to newer suites)

Coding:

- DeepSWE v1.1: **71.0%** (official launch table via OpenCode Data; GPT-5.6 Sol 72.7% in same chart)
- AA Coding Agent Index (with Grok Build harness): **56** (independent; +9 vs 4.6, 4th among native harnesses, passes GPT-5.6 Sol)
- CursorBench 4.0: **46.3%** (official launch table via OpenCode Data)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**
- Token efficiency caveat: ~81K output tokens per AA Index task (~2.25× Grok 4.6) — verbosity inflates real cost.

Long context:

- 500K window (official); improved long-context management claimed in the launch post; **no MRCR/RULER/LCR retrieval numbers published** for this ID.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** Unchanged: GDPval-AA 1695 near-frontier and Coding Agent Index 56 (4th, independent); vendor TB4.0 37.6% and absent Tau3/Claw-Eval keep it out of the 90s.
- **Reasoning: 74/100.** Unchanged: AA Index 46 with Omniscience 47%/29% is solid upper-mid; clearly behind the 50s crowd and no public GPQA/HLE cross-check caps confidence.
- **Context window: 84/100.** Unchanged: 500K window → top of the 200K–500K band; full-window max output now verified; no verified retrieval-at-length score to go higher.
- **Multimodal: 62/100.** Unchanged: text + image + PDF input (PDF verified this pass — still inside the 60–70 band), text-only output; no video/audio evidence.
- **Coding: 78/100.** Unchanged: DeepSWE 71.0% (official-confirmed) and independent Coding Agent Index 56; missing SWE-bench/LiveCodeBench rows prevent a frontier score.
- **Cost efficiency: 76/100.** Unchanged, verified: list $2/$6 (~80 on the price scale) but verified ~2.25× output-token verbosity raises true per-task cost; ≥200K tier doubling is a further caveat.
- **Overall Score: 75.6/100.** Mean of (80 + 74 + 84 + 62 + 78)/5 = 75.6. Best fit: agentic coding inside Cursor/Grok Build/Zen at mid-tier list price, especially E.E./legal knowledge work; not the pick for maximum general reasoning or multimodal input.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: public internet research (codersera guide consolidating xAI launch post + docs.x.ai specs + Artificial Analysis' independent "Benchmarking Grok 4.7" article; OpenCode Zen docs; Oracle/mungomash/financefeeds corroboration — all re-verified 2026-10-11 against OpenCode Data `xai/grok-4-7`, which now transcribes the official x.ai/news/grok-4-7 benchmark table and catalog facts). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
