# Claude Sonnet 5 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-sonnet-5`), e.g. Anthropic system card, Artificial Analysis, BenchLM, Vals AI
- Date: 2026-10-10 (UTC)
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

> Sources: BenchLM.ai (`https://benchlm.ai/models/claude-sonnet-5`, Overall 65.92/100, #33/889, 41 of 625 benchmarks, 2026-10-10); Artificial Analysis (`https://artificialanalysis.ai/models/claude-sonnet-5`, Intelligence Index 38, #66/227); Vals AI; Anthropic system card.

Agent / tool use:

- Terminal-Bench 2.1: 80.4% (Anthropic system card)
- Terminal-Bench 2.1 (Vals): 74.5% (Vals AI)
- BrowseComp: 84.7% (Anthropic system card)
- HLE w/ tools: 57.4% (Anthropic system card)
- OSWorld-Verified: 81.2% (Anthropic system card)
- GDPval-AA (Elo): 1603 (Anthropic system card)
- GDPval-AA (normalized): 48.3% (Artificial Analysis)
- DeepSWE: not found on fresh BenchLM for this exact ID
- SWE-bench Verified: 85.2% (Anthropic system card)
- SWE-bench Pro: 63.2% (Anthropic system card)
- SWE Multilingual: 78.3% (Anthropic system card)
- SWE Multimodal: 28.1% (Anthropic system card)
- AA Agentic Index: 44.3% (Artificial Analysis)
- Intelligence Index: 38 (#66/227 reasoning, median 26)

Reasoning / knowledge:

- GPQA Diamond: 91.1% (Artificial Analysis — AA-GPQA Diamond)
- GPQA Diamond (Vals): 88.9% (Vals AI)
- HLE: 57.4% (Anthropic system card — with tools)
- HLE (no tools): 43.2% (Anthropic system card)
- AA-HLE: 41.3% (Artificial Analysis)
- AA Intelligence Index: 38 (Artificial Analysis v4.3.2)
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

Multimodal:

- AA-MMMU-Pro: 77.3% (Artificial Analysis)
- CharXiv: 88.3% (Anthropic system card)
- CharXiv w/o tools: 77% (Anthropic system card)

---

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM and Artificial Analysis as of 2026-10-10.

- **Tool use: 75/100.** Terminal-Bench 2.1 80.4% (above 70% frontier ref), GDPval-AA Elo 1603, OSWorld-Verified 81.2%, BrowseComp 84.7%, AA Agentic Index 44.3%. Capped by τ²-bench not found, GDPval normalized 48.3% (below 50% frontier), and no TB-4.0 listed.
- **Reasoning: 82/100.** AA-GPQA Diamond 91.1%, GPQA Diamond (Vals) 88.9%, HLE 57.4% (with tools), AA-HLE 41.3%, AA-LCR 82.0%, ARC-AGI-level benchmarks not verified. Intelligence Index 38 (mid). CritPt 16.9% is weak. Strong individual scores but Intelligence Index 38 caps rating below frontier.
- **Context window: 95/100.** 1,000,000 tokens (≥1M tier; AA confirms). MRCR not separately published but LCR 82.0% confirms long-context reasoning. No retrieval-percentage ≥98% at 512K+ figure for 100.
- **Multimodal: 70/100.** Text and image input, text output only (verified via BenchLM + AA — no audio/video/PDF confirmed). AA-MMMU-Pro 77.3%, CharXiv 88.3%. Corrected from prior 75: prior file claimed audio/video/speech input but BenchLM verifies text+image only.
- **Coding: 83/100.** SWE-bench Verified 85.2% (excellent), SWE-bench Pro 63.2%, LiveCodeBench (Vals) 82.4%, VulcanBench CII 89.2%, AAA-SciCode 54.3%, AA Coding Index 71.5%; HumanEval 89.7%. Strong coding cluster. Capped by no DeepSWE and SWE-bench Pro 63.2% (below 74% frontier).
- **Cost efficiency: 65/100.** Competitive tier pricing ($2.00 in / $10.00 out per 1M tokens).
- **Overall Score: 81/100.** (75 + 82 + 95 + 70 + 83) / 5 = 405 / 5 = 81.0 → 81. **Up from prior 74:** prior file scored 65 for Reasoning and 68 for Coding based on stale benchmark data (GPQA 47.9%, HLE 21.6%, SWE-bench 55.9%, DeepSWE 39.4%). Fresh BenchLM + AA data corrects these to GPQA 91.1%, HLE 57.4%, SWE-bench 85.2%, LiveCodeBench 82.4%. Reasoning upgraded 65→82, Coding upgraded 68→83. Aligns with BenchLM Overall 65.92/100 rank (#33/889) and AA Intelligence Index 38 (#66/227).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public web research (BenchLM.ai model page for full benchmark table; Artificial Analysis model page for Intelligence Index 38 and cost-per-task; Anthropic system card for benchmarks and specs; Vals AI for Vals-specific benchmarks). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: BenchLM.ai model page (Overall 65.92/100, #33/889, 41 of 625 benchmarks, 2026-10-10); AA model page (Intelligence Index 38, #66/227, modalities text+image, pricing $2/$10); Anthropic system card (GPQA, HLE, SWE-bench, Terminal-Bench, Vision benchmarks); Vals AI (GPQA Diamond, LiveCodeBench, SWE-bench).
- Future sources: add a new file next to this one, e.g. `Anthropic_Sonnet_5_System_Card.md`, using the same headings.

---
