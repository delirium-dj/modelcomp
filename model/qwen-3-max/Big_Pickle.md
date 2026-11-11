# Alibaba Qwen3 Max — findings by Big Pickle

- Source: Alibaba/Qwen3 Max (`alibaba/qwen3-max`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba Cloud Qwen Team's proprietary Qwen3-generation flagship (text-only) for coding agents, complex reasoning and tool use — preceded the Qwen3.5/3.6/3.7 Max line.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) `qwen3-max`; third-party hosts Novita, DeepInfra, Requesty (`alibaba/qwen3-max`), OpenRouter. Chat Completions API.
- **Release / knowledge:** 2025-09-23 (official Qwen3-Max announcement; llm-stats tracks GA 2025-12-15). Knowledge cutoff not disclosed.
- **IDs:** `qwen3-max` (Model Studio), `alibaba/qwen3-max` (Requesty/OpenRouter-style hosts). No Free ID (flagged `noFreeId` in `meta.json`).
- **Context window:** 262,144 total; 65,536 max output (meta.json; Requesty 262K/66K, llm-stats 256K — consistent band).
- **Modalities:** text in/out; tool calls; JSON mode; prompt caching. Vision input is **contested**: Requesty's spec table says yes, Artificial Analysis reports text-only — until reconciled, treated as text-first (see Multimodal score).
- **Pricing (as of 2026-10-07):** $1.20 in / $6.00 out per 1M (tiered above 32K/128K input per Alibaba); cached input $0.24 (AA/llm-stats). Novita routes from $0.50/$5.00. Paid only.
- **Architecture:** proprietary; params undisclosed (BenchGecko's "open source" label is wrong — AA marks weights closed).

### Raw benchmarks found

Agent / tool use:

- t2-bench (Terminal-Bench 2 family): **74.8%** (llm-stats)
- τ²-Bench: **83.6%** (Requesty/AA-sourced leaderboard) — exceptional
- Terminal-Bench Hard: **24.2%** (Requesty/AA)
- GDPval / Claw-Eval / Toolathon: no verified public score found; AA Intelligence-Index-only agent runs (AA-TB4 2% belongs to the AA harness for the family, treat cautiously)

Reasoning / knowledge:

- GPQA Diamond: **86.1%** (Requesty, sourced from public leaderboards)
- HLE: **28.0%** (Requesty)
- AIME 2025: **81.6%** (llm-stats)
- Artificial Analysis Intelligence Index: **21** (AA model page) — mid band
- CritPt: 0% / AA-LCR v1.1 50% / AA-Omniscience −49 (AA harness, preview-style low values — recorded as-is)
- MLCR / Omniscience Accuracy / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **69%** (llm-stats)
- DeepSWE / LiveCodeBench / SciCode / Vibe / SWE-Pro: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR/RULER for Qwen3 Max; Qwen3.7-Max's MRCR-v2 90.4 is a different model — not borrowed)

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench 83.6% and Terminal-Bench 2 74.8% are both well above the mid band (TB 45–60 → 50–70); capped from 90+ by Terminal-Bench Hard 24.2% and no GDPval/Claw-Eval/Toolathon evidence.
- **Reasoning: 74/100.** GPQA Diamond 86.1% and HLE 28% are solid strong-but-not-frontier (frontier bar GPQA 90+/HLE 40+); capped by AA Intelligence Index 21 (mid band 20–35) and CritPt/LCR showing weak depth on AA's harness.
- **Context window: 74/100.** 262,144 / 65,536 sits in the 200K–500K tier (65–84), above the 200K = 70 reference; capped from higher by zero measured long-context retrieval scores.
- **Multimodal: 15/100.** Artificial Analysis reports text-only input/output — scored in the 10–20 text-only band; Requesty's lone "vision: yes" claim is uncorroborated by Qwen's own materials, so it does not move the score (would re-test to 60+ if confirmed).
- **Coding: 76/100.** SWE-bench Verified 69% is solid mid-band (above Gemini 2.5's 63.8–67.2, below the 74%-DeepSWE frontier ref); capped by no LiveCodeBench/SciCode/Vibe/DeepSWE numbers.
- **Cost efficiency: 86/100.** $1.20/$6.00 with $0.24 cache sits just below the $1.25/$4.25 ≈ 88 reference (output is $1.75 pricier); cheaper Novita route noted but not the primary; no free tier.
- **Overall Score: 64.2/100.** (82+74+74+15+76)/5 = 64.2 — best-fit: strong paid text-only agent/reasoning flagship, but the text-only cap and superseded-by-Qwen3.7 status hold it below current flagships.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-07
- Method: fresh public web research (llm-stats, Artificial Analysis comparison pages, Requesty model spec, BenchGecko, official Qwen announcements); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
