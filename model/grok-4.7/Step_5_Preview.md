# Grok 4.7 — findings by Step 5 Preview

- Source: xAI / Grok 4.7 (`opencode/grok-4.7`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's September 2026 flagship on a new, larger base model with a longer RL run weighted toward many-hour tasks — top VulcanBench coding scores and #1 Harvey legal-agent results at Grok 4.6's unchanged $2/$6 price, though it burns ~2.25x the output tokens per task.
- **Provider / access:** xAI API (`grok-4.7`, console.x.ai), OpenRouter (`x-ai/grok-4.7`), Vercel AI Gateway, Cloudflare, GitHub Copilot, Cursor, Grok Build (free tier, standard variant); Responses/Chat Completions API with encrypted reasoning.
- **Release / knowledge:** released 2026-09-21 (40 days after Grok 4.6); knowledge cutoff May 2026; parameter count unpublished (Musk's ~2.1T claim unconfirmed by xAI docs).
- **IDs:** `xai/grok-4.7`, `x-ai/grok-4.7` (OpenRouter), `opencode/grok-4.7` (Zen).
- **Context window:** 500,000 tokens; pricing doubles above 200K input ($4/$12).
- **Modalities:** text and image in; text out; reasoning effort low/medium/high (default)/xhigh.
- **Pricing (as of 2026-10-21):** $2.00/$6.00 per 1M (cached $0.50) under 200K input, $4.00/$12.00 above; OpenRouter xAI endpoint $1.60/$4.80; Fast variant $4/$12 (Cursor + Grok Build only); US regional endpoint +10%.
- **Architecture:** proprietary; no parameter count or weights published.

### Raw benchmarks found

xAI launch table (2026-09-21, "Grok 4.7 xHigh" rows) + Artificial Analysis first independent read + week-one third-party results:

Agent / tool use:

- AA-Briefcase v1.1 (multi-hour office work): **1,657** (xAI; ref: Fable 5.1 Max 1,678, Grok 4.6 1,546, GPT-5.6 Sol 1,487)
- GDPval: **1,695 Elo** (xAI chart; = Artificial Analysis independent read; ref: Fable 5.1 Max 1,735, Grok 4.6 1,605, GPT-6 Astra 1,542)
- Harvey Legal Agent Benchmark: **19.6%** (xAI; ref: Grok 4.6 15.8%, Fable 5.1 Max 6.7%, GPT-5.6 Sol 2.5%) — #1 in its comparison set
- Artificial Analysis Cyber Index v1 (CWE-Bench-AA + DeepsecBench-AA + CyberGym-E2E-AA): **56%** (Artificial Analysis 2026-09-28, tied 1st of 17 with MiMo-V2.6-Pro)
- Terminal-Bench 4.0: **38.0%** (xAI) / **33%** (Artificial Analysis) — mid-band on the newest harness (ref: Fable 5.1 Max 57.9%, Sol 37.3%)
- AA Coding Agent Index (with Grok Build): **56** (Artificial Analysis; +9 vs Grok 4.6)
- HealthBench Professional: **56.7%** (xAI; ref: Fable 5.1 Max 62.1%, Sol 60.5%)
- Snorkel AI Senior SWE-Bench: **40.0% tasteful pass@3** (Snorkel 2026-09-22; 6th overall; ref: Grok 4.6 38.9%)
- AA-Omniscience: hallucination rate **29%** (from 34% for Grok 4.6), accuracy **47%** (Artificial Analysis)
- Agents' Last Exam / GDP.pdf / AnalystAgent / ITBench / Toolathlon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **46** at xhigh (rank 16 of 655; ref: GPT-5.6 Sol 47, Grok 4.6 44, Claude Fable 5.1 53, GPT-6 Astra 53)
- GPQA Diamond / HLE / MMLU-Pro / CritPt / LCR: no verified public score found in any independent table (xAI published none)

Coding:

- VulcanBench Frontier v4 (via Cursor CLI, Oct 4 2026): **93.15** at Extra-high (23/23 tasks), **92.71** High, **92.30** Medium — 1st/2nd/3rd overall, ahead of Fable 5.1 Max 91.84 and Opus 5.5 High 91.11; judge-swap caveat noted by the board (GPT-6.1 Sol seated as second judge for this column; single-judge Muse rerun keeps 4.7 first at Medium–Extra-high)
- DeepSWE v1.1: **71.0%** at high effort (xAI; ref: GPT-5.6 Sol Max 72.7%, Fable 5.1 Max 70.0%, Grok 4.6 65.2%)
- CursorBench 4.0: **46.3%** (xAI; ref: Fable 5.1 Max 51.8%, Sol Max 41.7%, Grok 4.6 40.4%)
- EEBench (electrical engineering): **64.0%** (xAI; ref: Fable 5.1 Max 56.4%, Sol 39.4%)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found (neither xAI nor any standardized harness has published a SWE-bench figure for 4.7)

Long context:

- No MRCR / RULER / GraphWalks / LCR retrieval-at-length figure published; 500K window native with a 2x price above 200K prompts.

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 1,695 Elo and AA-Briefcase 1,657 are both #2-to-Fable frontier numbers, the AA Cyber Index 56% ties for first, and Harvey LAB 19.6% leads its set; capped by Terminal-Bench 4.0 33–38% (mid-band), a 56 AA Coding Agent Index and Snorkel Senior SWE-Bench 40.0% — the newest multi-hour harnesses have not caught Fable 5.1 yet.
- **Reasoning: 82/100.** AA Intelligence Index 46 (xhigh) is rank-16-of-655 and above Grok 4.6 (44) but below GPT-5.6 Sol (47), Claude Fable 5.1 and GPT-6 Astra (53); the improved 29% hallucination rate helps, but xAI published no GPQA/HLE/LCR/CritPt rows — scored on the composite index alone.
- **Context window: 90/100.** 500K total lands in the 500K–1M tier (85–94); no ≥98% retrieval-at-512K evidence and the >200K double-pricing threshold keep it below 95.
- **Multimodal: 65/100.** Text + image input with text out (image-in tier 60–70); no video/audio input and no non-text output.
- **Coding: 90/100.** VulcanBench Frontier v4 93.15 (1st overall, ahead of Fable 5.1 Max) and DeepSWE 71.0% near the frontier band are the strongest published coding evidence; capped by CursorBench 4.0 46.3% (below Fable's 51.8%) and a total absence of SWE-bench Verified/Pro numbers.
- **Cost efficiency: 76/100.** The $2/$6 rate ($1.60/$4.80 via OpenRouter) mirrors Grok 4.6's mid-80s-per-token value, but Artificial Analysis measured ~81,000 output tokens per index task (2.25x Grok 4.6) — $2.73/task at high and $3.74/task at xhigh against Grok 4.6's $1.86 — and >200K prompts double to $4/$12, so per-task cost lands between the ~88 and ~60 reference bands.
- **Overall Score: 82/100.** Mean of (84 + 82 + 90 + 65 + 90) / 5 = 82.2 → 82. Best fit: repo-scale coding and legal/office agent runs where its benchmark leads are worth ~2x the tokens — Grok 4.6 stays the cheaper Grok for easier tasks.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (The AI Rankings launch record, CellCog independent-tests record, xAI launch table figures, Artificial Analysis, VulcanBench, Snorkel); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
