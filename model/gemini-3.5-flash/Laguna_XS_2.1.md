# Gemini 3.5 Flash — findings by Laguna XS 2.1

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's first Gemini 3.5-family model (GA at I/O 2026-05-19) — "Pro-level reasoning at Flash-class latency," beating 3.1 Pro on the coding/agentic suite (TB 2.1 76.2%, MCP Atlas 83.6%) at ~4x frontier output speed; succeeded by 3.6/3.7 Flash.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.5-flash`, GA, version `3.5-flash-05-2026`), Vertex AI, Google Antigravity, Gemini Enterprise, Gemini app + Search AI Mode (default at launch). Dynamic thinking on by default. Free tier available.
- **Release / knowledge:** 2026-05-19 (GA); knowledge cutoff January 2025 (official docs).
- **IDs:** `gemini-3.5-flash` (Gemini API). No Zen Free ID found.
- **Context window:** 1,048,576 in / 65,536 out.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (dynamic thinking); tool calls yes (function calling, structured output, code execution, search-as-a-tool); JSON mode yes. No computer-use tool on this version.
- **Pricing (as of 2026-10-04):** $1.50 / $9.00 per 1M in/out; cached input $0.15; Batch/Flex 50% ($0.75/$4.50); non-global regions $1.65/$9.90; free tier within rate limits.
- **Architecture:** proprietary; no parameter count published. ~278 output tok/s (Artificial Analysis — fastest in its price class).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **83.6%** (Google — highest it had published at launch; vs 3.1 Pro 78.2, Opus 4.7 79.1)
- APEX-Agents-AA (long-horizon professional tasks): **47.1%** (#1 on first attempt, ~10 pts ahead of GPT-5.5's 37.7 — Artificial Analysis via DeepLearning.AI)
- Toolathlon: **56.5%** (Google model card)
- OSWorld-Verified: **78.4%** (Google model card)
- Finance Agent v2: **57.9%** (Google model card)
- GDPval-AA: **1656 Elo** (Google; behind GPT-5.5 1769)
- AA Agentic/Intelligence context: Intelligence Index **55.3** (May 2026, rank #7/147) / **33** (current methodology)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE (full set): **40.2%** (Google model card; trails 3.1 Pro 44.4)
- ARC-AGI-2: **72.1%** (ARC Prize leaderboard via DeepLearning.AI)
- AA-Omniscience: **23** (reasoning; trails 3.1 Pro 33)
- Arena: Text **1480** (#9) / WebDev **1506** (#10); Math category #1 (1521)
- GPQA / CritPt: no verified public score found in sources checked

Coding:

- Terminal-Bench 2.1: **76.2%** (Terminus-2, Google; vs 3.1 Pro 70.3, GPT-5.5 78.2)
- SWE-bench Pro (Public): **55.1%** (single attempt, Google)
- DeepSWE v1.1: **37%** (3.6 Flash model card comparison row)
- MLE-Bench: **49.7%** (same comparison row)
- Appwrite Arena: **96.2% with Skills / 90.7% without** (independent, 2026-05-20; fastest run in the >90 top tier)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- MRCR v2 (8-needle): **77.3%** at 128K average; **26.6%** at 1M pointwise (Google model card)

Multimodal (supporting): MMMU-Pro **83.6%** (Google) / **84%** (AA — highest recorded at launch); CharXiv **84.2%**; Blueprint-Bench 2 **33.6%**

### Normalized scores (1–100)

- **Tool use: 87/100.** MCP Atlas 83.6%, APEX-Agents-AA #1 (47.1%), Toolathlon 56.5%, OSWorld-V 78.4% and Finance Agent 57.9% made it the agentic value leader of May 2026; capped by GDPval-AA trailing GPT-5.5 and no Tau3 row.
- **Reasoning: 80/100.** ARC-AGI-2 72.1% and Arena Math #1 are solid; capped by HLE 40.2% and AA-Omniscience 23 trailing the Pro tier, plus Index 55.3 behind GPT-5.5/Opus 4.7.
- **Context window: 94/100.** 1M window (95–100 tier) discounted a point for MRCR v2 77.3% at 128K (below 3.1 Pro's 84.9) and 26.6% at 1M pointwise.
- **Multimodal: 95/100.** Text/image/audio/video/PDF in with the launch's highest-recorded MMMU-Pro (84%) and CharXiv 84.2%; text-only output caps it.
- **Coding: 79/100.** TB 2.1 76.2% and SWE-bench Pro 55.1% beat 3.1 Pro; capped by DeepSWE 37% (well below the frontier ref) and trailing GPT-5.5 on both.
- **Cost efficiency: 82/100.** $1.50/$9 with 90% cache discount, 50% Batch/Flex and a genuine free tier; docked for being 3x the previous Flash's price and costing more per Index task than 3.1 Pro on heavy reasoning (AA).
- **Overall Score: 87/100.** Mean of (87, 80, 94, 95, 79) = 87 — May 2026's agentic speed-value king; today 3.7/3.8 Flash offer more at a lower promo rate.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Google launch post + model card + API docs, Artificial Analysis via model page + DeepLearning.AI, Appwrite Arena, benchr, Simon Willison, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
