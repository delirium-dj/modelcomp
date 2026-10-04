# Gemini 2.5 — findings by Mimo v2.6 Flash

- Source: Google/DeepMind (`google/gemini-2.5-pro`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (served as `gemini-2.5-pro` — the family flagship tier of the Gemini 2.5 generation)
- **Short description:** Google DeepMind's thinking-native flagship (first experimental release 2025-03-25), built for deep reasoning, agentic coding and native multimodality over a 1M-token window. Family entry here is the Pro tier; Flash / Flash-Lite have their own folders. This is a 2025-generation model now superseded by the Gemini 3.x line.
- **Provider / access:** Google Gemini API and Vertex AI (`gemini-2.5-pro`, native Gemini API); OpenRouter `google/gemini-2.5-pro` (Chat Completions); OpenCode Zen `google/gemini-2.5-pro`. Per Gemini API docs it is a legacy / access-limited model (meta.json note, verified 2026-10-04).
- **Release / knowledge:** 2025-03-25 (2.5 Pro Experimental, Google blog); knowledge cutoff January 2025 (DeepMind model page).
- **IDs:** `google/gemini-2.5-pro` (Zen / OpenRouter), `gemini-2.5-pro` (Google API). No Free ID exists on Zen — scored on paid pricing.
- **Context window:** 1,048,576 (1M) input tokens / 65,536 (64K) output tokens (DeepMind model page, archived 2025-11-17).
- **Modalities:** text, image, audio, video in (up to 3 hours of video per the Gemini 2.5 report); text out; thinking yes (controllable budgets); tool calls yes (Google Search + code execution tools); structured output yes (Gemini API response schemas).
- **Pricing (as of 2026-10-05):** $1.25 in / $10.00 out per 1M for prompts ≤200K tokens; $2.50 / $15.00 per 1M above 200K (DeepMind pricing table via archived model page; OpenRouter mirrors $1.25/$10.00). Paid only — no Zen Free tier (noFreeId).
- **Architecture:** proprietary sparse Mixture-of-Experts (MoE) Transformer building on Gemini 2.0/1.5 (Gemini 2.5 technical report); open-weights: no.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **28.5%** (Artificial Analysis via BenchLeader #155 and BenchmarkList — BenchmarkList places it rank 103/182, percentile placement disagrees, value agrees); Terminal-Bench (official harness) **32.6%**; Terminal-Bench Hard **26.5%** (AA); Terminal-Bench 4.0 (AA) **0.0%**
- Tau3-Banking / Tau2-Bench: Tau3-Banking **9.7%** pass@1 (AA); Tau2-Bench Telecom **54.1%** (AA)
- GDPval-AA: **673 Elo** (BenchmarkList, rank 177/340, 48th pct, verified 2026-09-02); Artificial Analysis comparison page lists **459 Elo** for GDPval-AA v2.1 and BenchLeader lists 0.0% — sources disagree; GDPval (OpenAI harness) win rate 23.3% (BenchLeader)
- Claw-Eval / ClawProBench: Claw Bench **90** (rank 19/37, 50th pct) and OpenClaw Arena **63.8%** (rank 3/13) — closest proxies; text-only Claw-Eval / ClawProBench — no verified public score found
- Toolathon / MCP-Atlas: MCP-Bench **0.69** (84th pct), MCP-Universe **22.1%** (rank 15/27), AsyncTool **32.4%** (rank 2/22); Toolathon — no verified public score found
- OSWorld: **45.8%** success (AA, rank 24/72; OSWorld-Verified 45.8% rank 38/61); The Agent Company **39.9%** (rank 3/8, BenchmarkList); AndroidWorld — no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.4%** single attempt (Gemini 2.5 report, Table 3); **84.4%** (temperature2 aggregator); 84.0% for the 03-25 experimental build (model card)
- HLE: **21.6%** no-tools (DeepMind comparison table) / **22.5%** (Artificial Analysis) / 23% (AA comparison page)
- LCR / MLCR: AA-LCR v1.1 **69%** (Artificial Analysis); MLCR — no verified public score found
- CritPt: **2.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **16** (AA comparison page, vs 28 for Gemini 3 Pro); BenchLM overall — no verified public score found
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience index **−16** (AA); accuracy/hallucination split — no verified public score found
- AIME 2025 **88.0%** (Gemini 2.5 report); MMLU-Pro **86.2**; MMMU **68** (release card) / MMMU-Pro **74.9%** (AA); ARC-AGI-2 **4.9%** (BenchmarkList)

Coding:

- SWE-bench Verified: **59.6%** single attempt / **67.2%** multiple attempts (Gemini 2.5 report); **63.8%** with Google's custom agent scaffold (launch blog); independent re-run **54.4%** (BenchmarkList, rank 67/72)
- LiveCodeBench: **74.2%** (Gemini 2.5 report, UI 10/05/2024–01/04/2025) / **80.1%** (temperature2 aggregator)
- SciCode / AA-SciCode: **46.3%** (Artificial Analysis) / **42.8%** (BenchmarkList)
- Vibe Code Bench: **0.4%** v1.1 (BenchmarkList, rank 68/71)
- DeepSWE / Coding Index / other: DeepSWE — no verified public score found; AA Coding Index — no verified public score found; Aider Polyglot **82.2%** (Gemini 2.5 report); Arena AI WebDev **1225.3** (rank 98/105)

Long context:

- LOFT hard retrieval: **87.0%** ≤128K / **69.8%** @1M (Gemini 2.5 report) — Google states SoTA on LOFT and MRCR at 128K at time of writing
- MRCR-V2 (8-needle): **58.0%** ≤128K / **16.4%** pointwise @1M (Gemini 2.5 report); earlier MRCR protocol: 94.5% @128K average / 83.1% pointwise @1M (03-25 experimental model card)

### Normalized scores (1–100)

- **Tool use: 50/100.** Every headline tool reference sits below the mid band: TB2.1 28.5% (mid reference 45–60%), Tau3-Banking 9.7% (mid 10–25%, at its floor), GDPval-AA 673 Elo (mid 900–1200); partially rescued by OSWorld 45.8% and Tau2-Telecom 54.1%, capped further by TB4.0 at 0%.
- **Reasoning: 76/100.** GPQA Diamond 86.4 and AIME 2025 88.0 are strong (above the mid GPQA band but under the 90% frontier) and AA-LCR 69 is solid, but HLE 21.6–23 misses the 40% frontier badly, AA Intelligence Index 16 is below even the 20–35 mid band, and CritPt 2.6 / AA-Omniscience −16 are weak — that cluster caps it.
- **Context window: 93/100.** Native 1M input (≥1M tier) with 64K output and SoTA-at-release retrieval at 128K (LOFT 87.0, MRCR 94.5); capped below the tier's top because 8-needle MRCR-V2 collapses to 16.4% and LOFT to 69.8% at 1M, so the far end of the window is demonstrably unreliable.
- **Multimodal: 93/100.** Text/image/audio/video in — the audio-in tier (90–100) — with 3-hour video ingestion and MMMU-Pro 74.9; capped below 95 because output is text-only and no 2026-generation video/audio score was found to re-validate it against current peers.
- **Coding: 72/100.** SWE-bench Verified 59.6–67.2 (vendor) and Aider Polyglot 82.2 are respectable, and LCB 74.2–80.1 lands in the mid band's upper half; capped by independent SWE-V 54.4 (7th pct in field), Vibe Code Bench 0.4%, SciCode 42.8–46.3 (under the 55% frontier) and TB2.1 28.5.
- **Cost efficiency: 72/100.** $1.25/$10.00 per 1M (2.5× the output price of the $1.25/$4.25 ≈ 88 reference, with a $2.50/$15.00 tier above 200K) and no free tier on Zen — between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors.
- **Overall Score: 77/100.** Half-up mean of the five quality dims (50+76+93+93+72)/5 = 76.8 → 77 — best-fit: a paid long-context multimodal reasoner for 1M-window multimodal jobs, not an agentic tool-use or coding driver.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Google/DeepMind blog + Gemini 2.5 technical report + model card, Artificial Analysis, BenchmarkList, BenchLeader, temperature2, archived DeepMind pricing page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
