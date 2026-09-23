# Grok 4.6 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI (SpaceXAI) flagship 1.5T reasoning model (2026-08-12), post-training refinement of 4.5 for long-running agents and interactive/visual work; matches GPT-5.6 Sol on AA Index at launch.
- **Provider / access:** xAI API `xai/grok-4.6` (OpenAI-compatible api.x.ai), Cursor, Grok Build, OpenRouter/Vercel/Cloudflare, and OpenCode Zen `xai/grok-4.6` (Chat Completions via adapter)
- **Release / knowledge:** 2026-08-12; knowledge cutoff 2026-01 pretraining, supplemental data through 2026-06; pretraining cutoff 2026-01-01 per model card
- **IDs:** `xai/grok-4.6` (no Free tier; fast variant 2× price)
- **Context window:** 500,000 total (500K in / unspecified out; 67.6 tok/s high effort per AA) — verified via xAI card and Artificial Analysis
- **Modalities:** Text, image (jpg/jpeg/png ≤20MiB) in; text out; reasoning yes (low/medium/high/xhigh); tool calls yes (function calling, structured output, web search tool); JSON mode yes
- **Pricing (as of 2026-09-23):** $2.00 / $6.00 per 1M in/out (<200K prompt, cached $0.50); $4/$12 above 200K prompt (cached $1); fast variant ~2×
- **Architecture:** Proprietary 1.5T-scale (reuses Grok 4.5 base, extended SFT + agentic RL; Cursor workflow supplemental training)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **26%** (xAI launch — vs Grok 4.5 15.7%, GPT-5.6 Sol 34.6%, Fable 5 34.1%)
- Terminal-Bench (Artificial Analysis Hard variant): **88.4% v2.1 noted as in-line** (eesel AI — but vendor table reports v3.0 26% as official; no verified 2.1 public score found for 4.6 High)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1753 Elo v2** (xAI launch — vs Grok 4.5 1526, GPT-5.6 Sol 1728, Fable 5 1741; knowledge-work strength #1)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.5% APEX-Agents / 57.5% per xAI; MCP-Atlas no verified public score found** (AA-Briefcase 1577 Elo vs 4.5 1313)
- CursorBench v3.2: **69.9%** (xAI launch — vs 4.5 66.7%, Sol 67.2%, Fable 5 70.5%)
- APEX-Agents: **57.5%** (xAI launch)
- Harvey LAB (Vals Legal Agent): **15.8%** (xAI launch — vs 4.5 12.9%, Sol 2.5% — dramatic legal lead)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (xAI did not publish GPQA/AIME at launch per HokAI)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61** (Artificial Analysis — vs 4.5 56, Sol 61, Fable 5 62, Opus 5 63)
- AA-Briefcase: **1577 Elo** (xAI launch — vs Sol 1502, Fable 1574)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public SWE-Pro score found (vendor did not publish at launch)** / **APEX-SWE 56.4%** (xAI launch — vs 4.5 53.6%, Fable 5 58.8%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **65.9%** (xAI launch — vs 4.5 54%, Sol 73%, Fable 70%)
- FrontierCode v1.1 Extended: **61.3%** (xAI launch — vs 4.5 56.6%, Sol 60.6%, Fable 63.6%)
- Next.js Evals: **92%** (aireleasetracker)
- AA Intelligence blended: **price $1.35/M at 3:1 blend** (Artificial Analysis)

Long context:

- 500K window; no MRCR/RULER/GraphWalks at max window published; 500K unchanged from Grok 4.5 (half of Grok 4.3 1M)

### Normalized scores (1–100)

- **Tool use: 84/100.** APEX-Agents 57.5% + CursorBench 69.9% + GDPval 1753 #1 + AA-Briefcase 1577 strong; capped by Terminal-Bench 3.0 26% trailing Sol 34.6% and no Tau3/Claw/MCP numbers.
- **Reasoning: 85/100.** AA Index 61 composite #1 tie + GDPval 1753 + Harvey LAB 15.8% 6× Sol; capped by no GPQA/HLE/LCR isolation and AA Index not leading Fable 5 62.
- **Context window: 80/100.** 500,000 total; tier 500K ≈80 per methodology (200K=70, 1M=95+); capped below 90 without 1M and no long-context retrieval proof.
- **Multimodal: 60/100.** Text+image in → text out (20MiB jpg/png only, no audio/video/PDF in); capped below 70 image-only tier vs omni 90+.
- **Coding: 84/100.** DeepSWE 65.9% + FrontierCode 61.3% + APEX-SWE 56.4% + Next.js 92% strong but trails Sol 73%/Fable 70% on DeepSWE, hence below 88.
- **Cost efficiency: 70/100.** $2/$6 paid (<200K) $4/$12 above 200K; no $0 Free ID but 60%+ cheaper than GPT-5.6 Sol $5/$30 at same Index 61 — value leader.
- **Overall Score: 79/100.** Mean of five non-cost dims (84+85+80+60+84)/5=78.6 → 79; best-fit for long-running knowledge-work agents and value-priced frontier when terminal coding not primary.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (xAI Grok 4.6 announcement 2026-08-12, model card, kie.ai, eesel AI, HokAI, aireleasetracker, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
