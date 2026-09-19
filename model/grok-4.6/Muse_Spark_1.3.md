# Grok 4.6 — findings by Muse Spark 1.3

- Source: xAI (SpaceXAI)/Grok 4.6 (`grok-4.6`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI/SpaceXAI flagship post-training upgrade on the 1.5T base, tuned for long-running agents and knowledge work. Top use case is cheap long-horizon research, analysis, and in-editor coding via Cursor and Grok Build.
- **Provider / access:** xAI API + Cursor + Grok Build + partners (OpenRouter, Vercel, Cloudflare) (`grok-4.6`); OpenAI-compatible endpoint.
- **Release / knowledge:** 2026-08-12 release; pretraining cutoff January 2026, supplemental data to June 2026 (per model card Rev 202 2026-08-17).
- **IDs:** `xai/grok-4.6` (state explicitly if no Free ID exists on Zen — paid only)
- **Context window:** 500,000 tokens total — verified via launch coverage and model card; prompts >200K tokens double the rate.
- **Modalities:** text/image in; text out; reasoning yes (high/xhigh effort); tool calls yes (agent harnesses, computer use via Grok Build); JSON mode yes (structured outputs; 4.0% error standard / 0.0% ZDR per AA).
- **Pricing (as of 2026-09-19):** $2.00 / $6.00 per 1M input/output, cached $0.50; above 200K prompt tokens $4.00 / $12.00 / $1.00 cached; paid tier only ($). Fast variant 2x price.
- **Architecture:** proprietary, reported ~1.5T-scale base shared with Grok 4.5 (supplemental SFT on Cursor workflow data + agentic RL); vendor does not publish full weights/license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **26%** (xAI launch table 2026-08-12 vendor run; vs Sol Max 34.6%, Fable 5 Max 34.1%)
- Terminal-Bench 2.1: **88.4% Artificial Analysis / 78.28% Vals AI** (third-party via Codersera 2026-08-13 explainer; version trap — v2.1 vs v3.0 not comparable)
- Tau3-Banking: **50.7%** (Artificial Analysis via eesel/emergent reviews Aug 2026; top-two with Qwen3.8 Max 51.3%)
- GDPval-AA v2: **1753 Elo** (xAI launch table + AA independent, Aug 2026; behind only Opus 5)
- AA-Briefcase: **1577 Elo** (xAI launch table, Aug 2026; vs Fable 5 Max 1574, Sol Max 1502)
- Harvey LAB (Vals legal): **15.8%** (xAI launch table with Vals harness, Aug 2026; vs Fable 11.3%, Sol 2.5%)
- APEX-Agents: **57.5%** (xAI launch table); APEX-SWE: **56.4%** (xAI launch table); Toolathlon / MCP-Atlas / Claw-Eval: **no verified public score found**
- DeepSearchQA: **81.6% high** (model card); factuality hallucination rate **1.7% high** (model card internal benchmark, provisional)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61 at launch (60.92 measured, 4th, tied Sol Max; Opus 5 63.05, Fable 62.07)** (AA via VentureBeat/xAI Aug 2026); re-based v4.3 **44** (AA 2026-09-07); Vals Index **71.824, 6th** (Vals via Codersera)
- Omniscience Accuracy / Hallucination Rate: **48.2% / 65.7% non-hallucination** (AA via eesel/emergent Aug 2026)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found for Grok 4.6** (Grok 4.5 published 64.7% Pro; 4.6 omits family entirely; Vals SWE-bench 95.60% cited by Codersera is provisional third-party aggregation)
- LiveCodeBench: **88.2% top-4** (Vals aggregation via Codersera 2026-08-13; provisional, harness not vendor-confirmed)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **76.2% 10th** (Vals aggregation via Codersera; provisional)
- DeepSWE / Coding Index / other: **DeepSWE v1.1 65.9% high** (xAI launch table; vs Sol Max 73%); **CursorBench v3.2 69.9% high** (xAI; vs Fable 70.5%); **FrontierCode v1.1 Extended 61.3% high** (xAI); **Next.js Evals 92%** (release tracker)

Long context:

- No verified MRCR / RULER / GraphWalks score found; 500K window with AA-Briefcase 1577 Elo as long-horizon proxy (xAI Aug 2026).

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 88.4% AA plus Tau3 50.7% top-two, GDPval 1753 and APEX-Agents 57.5% show elite knowledge-agent work; capped by TB 3.0 26% trailing Sol/Fable ~34%.
- **Reasoning: 82/100.** AA Index 61 tied-frontier plus Harvey 15.8% best-in-table and GDPval lead show strong analysis; capped by no verified GPQA/HLE and Omniscience 48.2%/65.7% mid factuality.
- **Context window: 81/100.** 500K window with AA-Briefcase 1577 Elo long-horizon efficiency (53 turns vs Opus 103) shows real long-task stamina; capped below 1M tier and price doubles past 200K.
- **Multimodal: 76/100.** Text+image in covers documents/charts; capped by text-only output, dropped video input from 4.5 lineage, and no verified MMMU/CharXiv figure.
- **Coding: 83/100.** CursorBench 69.9% plus FrontierCode 61.3% and LiveCodeBench 88.2% proxy show strong in-editor coding; capped by DeepSWE 65.9% −7pts vs Sol and no published SWE-bench family figure.
- **Cost efficiency: 80/100.** $2/$6 with $0.84/index-task lowest-frontier turn efficiency is strong paid value; capped below $0 free tier and $0.68 GLM-5.3 task cost.
- **Overall Score: 81/100.** Mean of the five non-cost dims (84+82+81+76+83)/5 = 81.2 → 81; best-fit cheap long-running knowledge-work agent where turn efficiency matters.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-19
- Method: public internet research (xAI launch post + model card Rev 202, Artificial Analysis, VentureBeat, Vals aggregations via Codersera/eesel); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
