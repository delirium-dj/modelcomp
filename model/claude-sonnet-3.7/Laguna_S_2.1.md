# Claude 3.7 Sonnet — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/claude-3-7-sonnet`), OpenRouter (`https://openrouter.ai/anthropic/claude-3-7-sonnet`), Anthropic (`https://www.anthropic.com/news/claude-3-7-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet (Non-reasoning)
- **Short description:** Anthropic's February 2025 hybrid reasoning model (non-reasoning mode); the first model to offer extended thinking as an optional mode. Deprecated by AA in favor of Claude 4 Sonnet.
- **Provider / access:** Anthropic API; OpenRouter; 1 API provider
- **Release / knowledge:** Released February 24, 2025; knowledge cutoff October 2024; marked deprecated by AA (Claude 4 Sonnet is the newer release)
- **IDs:** `anthropic/claude-3-7-sonnet` (AA slug / OpenRouter); `opencode/claude-sonnet-3.7` (`\meta.json`)
- **Context window:** 200K total (per AA model page and OpenRouter); `\meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `\meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $3.00 input / $15.00 output per 1M tokens; cache discount 90%
- **Reasoning:** No (this page shows the non-reasoning version; extended thinking was available as an optional mode)
- **Speed:** Not available (per AA — speed data marked "Not publicly available")

### Research log

1. Fetched AA model page `https://artificialanalysis.ai/models/claude-3-7-sonnet` — Intelligence Index 15 (estimated, rank #32/61 non-reasoning, median: 15); all benchmarks marked "Not publicly available"
2. Attempted BenchLM page `https://benchlm.ai/models/claude-3-7-sonnet` — **404** (no entry found for this model on BenchLM)
3. Fetched Anthropic announcement `https://www.anthropic.com/news/claude-3-7-sonnet` — contains specific SWE-bench Verified scores
4. Fetched OpenRouter model page `https://openrouter.ai/anthropic/claude-3-7-sonnet` — model details only, no benchmark scores

### Raw benchmarks found

> Sources: Anthropic announcement (`https://www.anthropic.com/news/claude-3-7-sonnet`), Artificial Analysis model page. BenchLM has no entry (404). AA model page marks all individual benchmarks as "Not publicly available." The only verified public benchmark numbers are from the vendor's official announcement.

Agent / tool use:

- **SWE-bench Verified:** **63.7%** (standard, pass@1, no extended thinking) — (Anthropic announcement)
- **SWE-bench Verified:** **70.3%** (high compute, with rejection sampling) — (Anthropic announcement; methodology: multiple parallel attempts, discard patches that break regression tests, rank with scoring model)
- **TAU-bench:** state-of-the-art (no specific number in announcement text; bar chart in article claims SOTA) — (Anthropic announcement)
- **Terminal-Bench 4.0:** no verified public score found
- **AA-Briefcase:** no verified public score found
- **GDPval-AA:** no verified public score found
- **OSWorld-Verified:** no verified public score found

Coding:

- **SWE-bench Verified:** **63.7%** (standard), **70.3%** (high compute) — (Anthropic announcement; see above)
- **LiveCodeBench:** no verified public score found
- **SciCode:** no verified public score found
- **Vibe Code Bench:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **15** (estimated, rank #32/61 non-reasoning, median: 15) — (AA model page)
- **GPQA Diamond:** no verified public score found
- **HLE:** no verified public score found
- **AA-LCR:** no verified public score found
- **CritPt:** no verified public score found
- **AA-Omniscience:** no verified public score found

Multimodal & grounded:

- **MMMU-Pro:** no verified public score found
- **MathVision:** no verified public score found
- **Design Arena Website:** no verified public score found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: low — only 2 verified public benchmark numbers found (SWE-bench Verified from the Anthropic announcement). AA model page marks all benchmarks as "Not publicly available" and BenchLM has no entry (404). No independent benchmark aggregator scores are available for this model.

- **Tool use: 60/100.** SWE-bench Verified 63.7% (standard) / 70.3% (high compute) from the Anthropic announcement are the only tool-use signals. TAU-bench claimed as state-of-the-art in the announcement, but no specific number provided. No AA-Briefcase, GDPval-AA, OSWorld, or Terminal-Bench scores found independently. Decent but sparse agentic profile.
- **Reasoning: 30/100.** AA Intelligence Index 15 (estimated, rank #32/61 non-reasoning, at median) is below the 202K context tier's typical performance. This is the non-reasoning variant — extended thinking was available as an optional mode but is not the default. No GPQA, HLE, LCR, CritPt, or Omniscience scores found. Very limited reasoning data for this specific variant.
- **Context window: 70/100.** 200K tokens falls in the 200K–500K tier (65–84 range). No retrieval-percentage figures found. `meta.json` claims 128K but verified 200K.
- **Multimodal: 65/100.** Text and image input, text output (per AA model page). +image-in only, no video/audio/PDF verified. No specific multimodal benchmark scores found.
- **Coding: 58/100.** SWE-bench Verified 63.7% (standard) / 70.3% (high compute) from the Anthropic announcement. This is the model's strongest verified score. No LiveCodeBench, Vibe Code Bench, DeepSWE, or SciCode scores found. The 70.3% high-compute score approaches frontier levels but is below the ~85%+ frontier reference.
- **Cost efficiency: 50/100.** $3.00 in / $15.00 out per 1M tokens — expensive (median output is $9.00). Effective blended cost ~$3.60/MTok. noFreeId (no $0 tier).
- **Overall Score: 56.6/100.** Mean of five quality dimensions: (60 + 30 + 70 + 65 + 58) / 5 = 283 / 5 = 56.6 → 56. Low-confidence score: the non-reasoning variant has only SWE-bench Verified scores from the vendor announcement, with no independently verified benchmarks on AA or BenchLM. The non-reasoning classification and estimated Intelligence Index of 15 cap reasoning performance. `meta.json` discrepancies noted: claims 128K context vs verified 200K; claims text-only vs verified text+image input. The `average.md` peer rating (Overall 78) likely reflects the reasoning/extended-thinking variant, not this non-reasoning variant.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, Anthropic announcement, and OpenRouter; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Confidence note: This score is low-confidence. The AA model page for `claude-3-7-sonnet` shows the non-reasoning variant with Intelligence Index 15 (estimated, all benchmarks "Not publicly available"), and BenchLM has no entry (404). The only verified public benchmark numbers are SWE-bench Verified scores (63.7% standard, 70.3% with high compute) from the official Anthropic announcement. The `average.md` peer rating (Overall 78) may reflect the reasoning/extended-thinking variant. Re-score when independent benchmark data becomes available.
- Meta.json discrepancies: `meta.json` lists 128K context window and text-only modalities, but AA model page and OpenRouter show 200K context window with text+image input support. `meta.json` appears to be a placeholder for this model.
- Future sources: add a new file next to this one, e.g. `Anthropic_Claude_3.7_Sonnet_System_Card.md`, using the same headings.
