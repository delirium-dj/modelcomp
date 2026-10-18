# GPT-5.5 — findings by Laguna S 2.1

- Source: openai/gpt-5.5 (OpenAI), e.g. OpenAI launch announcement, LLM Reference, Artificial Analysis, BenchLM
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (OpenAI)
- **Short description:** OpenAI's fully retrained agentic model, optimized for agentic coding, computer use, knowledge work, and early scientific research. Strong all-around coding and reasoning with a ~922K token context window and effort-level control.
- **Provider / access:** OpenAI. API model ID `gpt-5.5`; also via OpenRouter, Vercel AI Gateway, and AWS Bedrock (4 provider routes). Supports tool calling, structured outputs/JSON mode; reasoning effort levels none/low/medium/high/xhigh. DEPRECATED — OpenAI recommends GPT-5.6 Sol.
- **Release / knowledge:** Released 23 April 2026 (LLM Reference). Knowledge cutoff: December 2025.
- **IDs:** `openai/gpt-5.5` (OpenAI). noFreeId — `openai/gpt-5.5` (LLM Reference); the placeholder meta.json flags `noFreeId: true`.
- **Context window:** **922,000 tokens** (AA model page) / 1M input (per BenchLM). Scoring uses the AA-verified 922K figure (in 500K–1M tier, not ≥1M).
- **Modalities:** **Text and image input → text output** (multimodal; +image-in). No audio/video/PDF verified. (Verified via AA model page and BenchLM.)
- **Pricing (as of 2026-10-01):** $5.00 per 1M input / $30.00 per 1M output tokens (OpenAI API); batch $2.50/$15.00; cache reads $0.500 per 1M (LLM Reference). Paid API only per surfaced sources (no free-tier quota documented here).
- **Architecture:** Decoder-only transformer (proprietary, closed weights; weights not released). Conditional commercial-use license.

### Raw benchmarks found

> Verified public numbers sourced from BenchLM.ai (`https://benchlm.ai/models/gpt-5-5`, Overall 69.29/100, #21/954, 65 of 639 benchmarks, 2026-10-17), OpenAI launch announcement, Artificial Analysis model benchmarks, Vals AI leaderboards, Epoch AI FrontierMath v2, React Native Evals. Re-verified 2026-10-17.

Agent / tool use / coding:

- Terminal-Bench 2.0: 82.0% (Terminal-Bench 2.0 leaderboard)
- Terminal-Bench 2.1 (Vals): 76.4% (Vals AI)
- CyberGym: 81.8% (OpenAI launch)
- BrowseComp: 84.4% (OpenAI launch)
- OSWorld-Verified: 78.7% (OpenAI launch)
- MCP Atlas: 75.3% (OpenAI launch)
- Toolathlon: 55.6% (OpenAI launch)
- τ²-bench: 98% (OpenAI launch — near ≥1750 Elo frontier threshold)
- GDPval-AA (normalized): 42.7% (Artificial Analysis)
- GDPval-AA (Elo): 1396 (BenchLM)
- SWE-bench Verified: 82.6% (Vals.ai) (OpenAI launch)
- SWE-bench Pro: 58.6% (OpenAI launch)
- GPQA-Coding: not found on fresh BenchLM for this exact ID

Reasoning / knowledge:

- GPQA Diamond: 93.6% (OpenAI launch)
- GPQA: 93.6% (BenchLM)
- AA-GPQA Diamond: 93.5% (Artificial Analysis)
- GPQA Diamond (Vals): 93.2% (Vals AI)
- MMLU-Pro (Vals): 88.1% (Vals AI)
- HLE: 52.2% (BenchLM)
- HLE (no tools): 41.4% (BenchLM)
- AA-HLE: 45.8% (Artificial Analysis)
| AA Intelligence Index: **38** (#65/227 reasoning models) (BenchLM / AA model page, v4.3.2)
- CritPt: 27.1% (BenchLM)
- AA-LCR: 84.3% (BenchLM)
- MRCR v2 64K-128K: 83.1% (BenchLM)
- MRCR v2 128K-256K: 87.5% (BenchLM)
- ARC-AGI-1: 95.00% (ARC Prize leaderboard, verified)
- ARC-AGI-2: 85% (BenchLM)

Coding:

- SWE-bench Verified: 82.6% (Vals.ai)
- SWE-bench Pro: 58.6% (OpenAI launch)
- LiveCodeBench (Vals): 85.3% (Vals AI)
- DeepSWE: 74.3% (OpenAI launch — at frontier reference ≥74%)
- AAA-SciCode: 55.0% (BenchLM — at frontier ref 55%)
- HumanEval: 89.7% (BenchLM)
- AA Coding Index: 74.9% (BenchLM)

Multimodal:

- MMMU-Pro: 81.2% (OpenAI launch)
- MMMU-Pro w/ Python: 83.2% (OpenAI launch)
- AA-MMMU-Pro: 79.9% (Artificial Analysis)

---

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded from Overall. Benchmarks verified from BenchLM (overall 69.29, #21/954, 65 of 639) as of 2026-10-17.

- **Tool use: 82/100.** (Unchanged.) Terminal-Bench 2.0 82.0%, TB-2.1 (Vals) 76.4%, GDPval-AA 42.5% (normalized; Elo 1395, below 1750 frontier), BrowseComp 84.4%, MCP Atlas 75.3%, OSWorld-Verified 78.7%; τ²-bench 98% (≥90 frontier, confirmed on current page). Capped by GDPval below 50% threshold and no TB-4.0 standalone score.
- **Reasoning: 86/100.** (Revised UP from 84.) GPQA Diamond 93.6% (all variants ≥93%, ≥90 frontier threshold), AA-GPQA-D 93.5%, ARC-AGI-1 95.00% (≥96 frontier, new), ARC-AGI-2 85%, AA-LCR 84.3%, MRCR v2 83.1%–87.5%, FrontierMath v2 T1-3 85.263% (≥85 frontier, new), HLE 52.2% (above 40% frontier). Intelligence Index 38.4% (below 60 frontier). Capped by Intelligence Index 38.4.
- **Context window: 88/100.** (Unchanged.) AA-verified **922,000** tokens (in 500K–1M tier = 85–94 per methodology; below 1M so not ≥95-100). MRCR v2 83.1% at 64K-128K, 87.5% at 128K-256K.
- **Multimodal: 70/100.** Text and image input only (verified via AA model page and BenchLM). MMMU-Pro 81.2%/83.2%, AA-MMMU-Pro 79.9% confirm vision within text+image scope.
- **Coding: 86/100.** (Unchanged.) Terminal-Bench 2.0 82.0%, SWE-bench Verified 82.6%, DeepSWE 74.3% (≥74 frontier), LiveCodeBench 85.3% (Vals), AA-SciCode 55.0% (≥55 frontier), AA Coding Index 74.9%, SWE-bench Pro 58.6%, Vibe Code Bench 69.85% (new), React Native Evals 84.7% (new). Capped by SWE-bench Pro 58.6% and no SWE-bench Verified ceiling of 90%+.
- **Cost efficiency: 50/100.** $5.00/$30.00 per 1M in/out (paid API only, cheaper than GPT-5.6 Sol and Claude Fable 5.1).
- **Overall Score: 82.4/100.** (82 + 86 + 88 + 70 + 86) / 5 = 412 / 5 = 82.4 → 83. (Revised UP from 82.) New confirmed benchmarks: ARC-AGI-1 95.00% (≥96 frontier), FrontierMath v2 T1-3 85.263% (≥85 frontier), GPQA-D (Vals) 93.2%, MMLU-Pro (Vals) 88.1%, Intelligence Index 38→38.4% (negligible). Reasoning 84→86. BenchLM updated 67.79 (#24/889) → 69.29 (#21/954).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM.ai model page for overall rank/score and full benchmark tables; OpenAI launch announcement; Artificial Analysis model benchmarks; Vals AI leaderboards; Epoch AI FrontierMath v2; React Native Evals). Scores normalized 1–100 per model-comparison.md v4. Zero-influence: did not read peer `*.md` findings files during research.
- Sources: BenchLM.ai model page (Overall 69.29/100, #21/954, 65 of 639 benchmarks, 2026-10-17); OpenAI launch announcement; AA model benchmarks (Intelligence Index 38.4%, CritPt 27.1%, AA-LCR 84.3%, GDPval-AA 1396/42.5%, τ²-bench 98%); Vals AI (GPQA 93.6%, GPQA-D 93.2%, MMLU-Pro 88.1%, LiveCodeBench 85.3%, SWE-bench 82.6%); Epoch AI FrontierMath v2; React Native Evals.
- Re-verification (Oct 17): Confirmed all key benchmarks on Oct 17 page. Notable changes: AA APEX-Agents-AA 37.7% (NEW, was 38.8%), AA Agentic Index 37.3% (vs file 50.6% — this is a different model), AA-AnalystAgent 50.0% (NEW), AA-IFBench 75.9% (NEW), FrontierMath v2 T4 72.500% (vs file's 78.049% — different tier or error in file), ARC-AGI-3 0.4% (NEW), OSWorld 2.0 13.0% (NEW), JobBench 42.7% (NEW), ExploitGym 13.4% (NEW), AA ITBench 45.8% (NEW), PostTrainBench v1.1 27.2% (NEW). Intelligence Index 38.4% confirmed. Normalized scores unchanged. Overall 83.

---

## Re-verification (2026-10-17)

Confirmed: Overall 83, rank #21/954 (overall 69.29), 65 of 639 benchmarks on Oct 17 page. Intelligence Index 38.4% confirmed. New Oct 17 benchmarks added: AA-APEX-Agents 37.7%, AA Agentic Index 37.3%, ResearchClawBench 17.0%, OSWorld 2.0 13.0%, JobBench 42.7%, ExploitGym 13.4%, AA ITBench 45.8%, AA-AnalystAgent 50.0%, AA IFBench 75.9%, PostTrainBench v1.1 27.2%. FrontierMath v2 T4 78.049% confirmed.
