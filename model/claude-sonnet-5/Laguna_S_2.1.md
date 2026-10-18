# Claude Sonnet 5 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-sonnet-5`), e.g. Anthropic system card, Artificial Analysis, BenchLM, Vals AI
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Max) (Anthropic)
- **Short description:** Claude Sonnet 5 is Anthropic's adaptive reasoning mid-tier model from June 2026, delivering fast execution and high intelligence at competitive pricing. DEPRECATED — Anthropic recommends Claude Sonnet 5.5.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** 2026-06-01 release (June 30, 2026 per AA); 2026-04 knowledge cutoff
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output) — AA confirms.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes (text+image only — no audio/video verified via BenchLM/AA)
- **Pricing (as of 2026-10-10):** $2.00 in / $10.00 out per 1M tokens ($1.54 blended with cache)

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/claude-sonnet-5`, Overall 64.84/100, #36/954, 44 of 639 benchmarks, 2026-10-17); Artificial Analysis (`https://artificialanalysis.ai/models/claude-sonnet-5`, Intelligence Index 38.2%, #66/227); Vals AI; Anthropic system card.

Agent / tool use:

- Terminal-Bench 2.1: 80.4% (Anthropic system card)
- Terminal-Bench 2.1 (Vals): 74.5% (Vals AI)
- BrowseComp: 84.7% (Anthropic system card)
- HLE w/ tools: 57.4% (Anthropic system card)
- OSWorld-Verified: 81.2% (Anthropic system card)
- GDPval-AA (Elo): 1603 (Anthropic system card)
- Intelligence Index: **38.2%** (#66/227 reasoning, median 26; revised from 38)
- Terminal-Bench 3.0: 14.6% — (Terminal-Bench 3.0 leaderboard via Oct 17 BenchLM — NEW)
- ApprenticeBench: 16% — (NeoCognition via Oct 17 BenchLM — NEW)
- MazeBench: 0% — (MazeBench AI leaderboard via Oct 17 BenchLM — NEW)
- GDPval-AA (normalized): 48.2% — (AI model benchmarks via Oct 17 BenchLM; revised from 48.3%)
- DeepSWE: not found on fresh Oct 17 BenchLM for this exact ID
- SWE-bench Verified: 85.2% (Anthropic system card)
- SWE-bench Pro: 63.2% (Anthropic system card)
- SWE Multilingual: 78.3% (Anthropic system card)
- SWE Multimodal: 28.1% (Anthropic system card)
- AA Agentic Index: 44.3% (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: 91.1% (Artificial Analysis — AA-GPQA Diamond)
- GPQA Diamond (Vals): 88.9% (Vals AI)
- HLE: 57.4% (Anthropic system card — with tools)
- HLE (no tools): 43.2% (Anthropic system card)
- AA-HLE: 41.3% (Artificial Analysis)
- HLE-Verified: 31.0% — (Google DeepMind: Gemini 3.8 Flash model card via Oct 17 BenchLM — NEW)
- LABBench2: 80.1% — (Google DeepMind: Gemini 3.8 Flash model card via Oct 17 BenchLM — NEW)
- MMLU-Pro (Vals): 87.5% — (Vals AI via Oct 17 BenchLM — NEW)
- AA Intelligence Index: **38.2%** — (Artificial Analysis v4.3.2; revised from 38)
- AA-Omniscience Index: 16.5% — (AA model benchmarks via Oct 17 BenchLM — NEW)
- AA-Omniscience Accuracy: 40.1% — (AA model benchmarks via Oct 17 BenchLM — NEW)
- AA-Omniscience Hallucination Rate: 39.4% — (AA model benchmarks via Oct 17 BenchLM — NEW)
- AA-LCR: 82.0% (Artificial Analysis)
- CritPt: 16.9% (BenchLM)
- ARC-AGI-1: not verified for this exact ID on fresh BenchLM
- MRCR: not separately listed in fresh BenchLM

Coding:

- SWE-bench Verified: 85.2% (Anthropic system card — excellent)
- SWE-bench Pro: 63.2% (Anthropic system card)
- SWE Multilingual: 78.3% (Anthropic system card)
- LiveCodeBench (Vals): 82.4% (Vals AI)
- SWE-bench (Vals): 79.6% (Vals AI)
- AA-SciCode: 54.3% (Artificial Analysis)
- AA Coding Index: 71.5% (Artificial Analysis)
- VulcanBench CII v1: 89.2% (VulcanBench frontier results)
- HumanEval: 89.7% (BenchLM)
- FrontierCode 1.1: 42.7% — (Cognition: FrontierCode 1.1 via Oct 17 BenchLM — NEW)
- CursorBench 3.2: 61.5% — (Cursor evals: CursorBench 3.2 via Oct 17 BenchLM — NEW)
- CursorBench 4.0: 34.1% — (Cursor evals: CursorBench 4.0 via Oct 17 BenchLM — NEW)

Multimodal:

- AA-MMMU-Pro: 77.3% (Artificial Analysis)
- CharXiv: 88.3% (Anthropic system card)
- CharXiv w/o tools: 77% (Anthropic system card)
- Design Arena Website: 1276 (OpenRouter via Oct 17 BenchLM)

Mathematics:

- FrontierMath v2 (Tiers 1-3): 65.614% — (Epoch AI FrontierMath v2 leaderboard via Oct 17 BenchLM — NEW)
- FrontierMath v2 (Tier 4): 29.268% — (Epoch AI FrontierMath v2 leaderboard via Oct 17 BenchLM — NEW)

---

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM (Oct 17) and Artificial Analysis.

- **Tool use: 75/100.** (Unchanged.) Terminal-Bench 2.1 80.4% (above 70% frontier), GDPval-AA Elo 1603, OSWorld-Verified 81.2%, BrowseComp 84.7%, AA Agentic Index 44.3%. GDPval normalized 48.2% (below 50% frontier). Capped by weak TB-3.0 14.6%, ApprenticeBench 16%, MazeBench 0%, and GDPval below frontier.

- **Reasoning: 82/100.** (Unchanged.) GPQA Diamond 91.1%, GPQA Diamond (Vals) 88.9%, HLE 57.4% (with tools), AA-HLE 41.3%, AA-LCR 82.0%, Intelligence Index 38.2%, CritPt 16.9% (weak). New: USAMO-like MATH not found, FrontierMath v2 T1-3 65.614% (below 85% frontier). Capped by Intelligence Index 38.2% (mid, below 60 frontier) and weak CritPt/HLE-Verified.
- **Context window: 95/100.** 1,000,000 tokens (≥1M tier; AA confirms). MRCR not separately published but LCR 82.0% confirms long-context reasoning. No retrieval-percentage ≥98% at 512K+ figure for 100.
- **Multimodal: 70/100.** Text and image input, text output only (verified via BenchLM + AA — no audio/video/PDF confirmed). AA-MMMU-Pro 77.3%, CharXiv 88.3%. Corrected from prior 75: prior file claimed audio/video/speech input but BenchLM verifies text+image only.
- **Coding: 83/100.** SWE-bench Verified 85.2% (excellent), SWE-bench Pro 63.2%, LiveCodeBench (Vals) 82.4%, VulcanBench CII 89.2%, AAA-SciCode 54.3%, AA Coding Index 71.5%; HumanEval 89.7%. Strong coding cluster. Capped by no DeepSWE and SWE-bench Pro 63.2% (below 74% frontier).
- **Cost efficiency: 65/100.** Competitive tier pricing ($2.00 in / $10.00 out per 1M tokens).
- **Overall Score: 81/100.** (75 + 82 + 95 + 70 + 83) / 5 = 405 / 5 = 81.0 → 81. (Unchanged.) BenchLM overall 65.92→64.84 (#33→#36/954, 41→44/639 benches). Intelligence Index 38→38.2% (negligible). GDPval normalized 48.3→48.2% (negligible). New: Terminal-Bench 3.0, ApprenticeBench, MazeBench, HLE-Verified, LABBench2, FrontierMath v2 (2 scores), CursorBench 3.2/4.0, MMLU-Pro (Vals), AA-Omniscience trio. Aligns with BenchLM Overall 64.84/100 rank #36/954 and AA Intelligence Index 38.2%.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public web research (BenchLM.ai model page for full benchmark table; Artificial Analysis model page for Intelligence Index and cost-per-task; Anthropic system card for benchmarks and specs; Vals AI for Vals-specific benchmarks; Epoch AI for FrontierMath v2); scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `*.md` findings files during research.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/claude-sonnet-5` (Overall 64.84/100, #36/954, 44 of 639 benchmarks, 2026-10-17); AA model page (Intelligence Index 38.2%, #66/227, modalities text+image, pricing $2/$10); Anthropic Claude Sonnet 5 system card; Vals AI (GPQA Diamond, LiveCodeBench, SWE-bench); Epoch AI (FrontierMath v2).
- Re-verification (Oct 17): BenchLM overall 65.92→64.84 (#33→#36/954, 41→44/639 benches). Intelligence Index 38→38.2% (negligible). GDPval normalized 48.3→48.2%. New: Terminal-Bench 3.0 14.6%, ApprenticeBench 16%, MazeBench 0%, HLE-Verified 31.0%, LABBench2 80.1%, FrontierMath v2 T1-3 65.614%, T4 29.268%, CursorBench 3.2 61.5%, CursorBench 4.0 34.1%, MMLU-Pro (Vals) 87.5%, AA-Omniscience Index 16.5%, AA-IFBench, AA Agentic Index 44.3%. Normalized: all unchanged. Overall 81→81.

---
