# Claude 3.5 Sonnet — findings by Laguna S 2.1

- Source: BenchLM (`https://benchlm.ai/models/claude-3-5-sonnet`), Anthropic (`https://www.anthropic.com/news/claude-3-5-sonnet`, `https://www.anthropic.com/news/3-5-models-and-computer-use`), Epoch AI
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic's June 2024 mid-tier Sonnet model; balanced text/image reasoning and coding for its era. Non-reasoning (standard) variant.
- **Provider / access:** Anthropic API; 1 API provider (OpenRouter)
- **Release / knowledge:** Released June 2024; knowledge cutoff November 2023 (approximate; not precisely published)
- **IDs:** `anthropic/claude-3-5-sonnet` (AA slug / OpenRouter / `meta.json`)
- **Context window:** 200K total (per BenchLM); `\meta.json` says 200K — **consistent**
- **Modalities:** Text and image input, text output (per `\meta.json` and Anthropic announcement); consistent
- **Pricing (as of 2026-10-01):** $3.00 input / $15.00 output per 1M tokens (`\meta.json`)
- **Reasoning:** No (non-reasoning model per BenchLM classification)
- **Status:** Deprecated — succeeded by Claude 3.7 Sonnet and Claude 4.x models

### Research log

1. Fetched BenchLM page `https://benchlm.ai/models/claude-3-5-sonnet` — 4 of 618 benchmarks covered
2. Attempted AA model page `https://artificialanalysis.ai/models/claude-3-5-sonnet` — **404** (no AA page for this model)
3. Cross-referenced Anthropic announcement for benchmark source verification
4. Cross-referenced Epoch AI FrontierMath v2 leaderboard via BenchLM

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/claude-3-5-sonnet`), Anthropic announcement pages, Epoch AI FrontierMath v2 leaderboard. BenchLM covers 4 of 618 benchmarks. AA has no model page for this model (404), so no AA Intelligence Index or AA-specific benchmark scores are available.

Agent / tool use:

- **SWE-bench Verified:** **49%** — (Anthropic: 3-5-models-and-computer-use announcement via BenchLM)
- **Terminal-Bench 2.1 (Vals):** **43.8%** — (Vals AI: Terminal-Bench 2.1 leaderboard via BenchLM)
- **τ²-bench:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **GDPval-AA:** no verified public score found
- **MCP Atlas:** no verified public score found
- **Toolathlon:** no verified public score found
- **Gert Labs:** no verified public score found

Coding:

- **SWE-bench Verified:** **49%** — (Anthropic announcement via BenchLM)
- **SWE-bench (Vals):** no verified public score found
- **LiveCodeBench (Vals):** no verified public score found
- **Vibe Code Bench:** no verified public score found
- **DeepSWE:** no verified public score found
- **SciCode:** no verified public score found

Reasoning / knowledge:

- **GPQA:** **59.4%** — (Anthropic: claude-3-5-sonnet announcement via BenchLM)
- **AA-GPQA Diamond:** no verified public score found (no AA page exists)
- **AA-HLE:** no verified public score found (no AA page exists)
- **HLE:** no verified public score found
- **AA-LCR:** no verified public score found
- **CritPt:** no verified public score found
- **AA-Omniscience:** no verified public score found
- **AA Intelligence Index:** no verified public score found (no AA page exists)

Multimodal & grounded:

- **Design Arena Website:** no verified public score found
- **MMMU-Pro:** no verified public score found
- **AA-MMMU-Pro:** no verified public score found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: low — only 4 public benchmarks found (BenchLM covers 4 of 618). AA has no model page (404). Most scores come from BenchLM cross-referenced with Anthropic announcements and Epoch AI.

- **Tool use: 45/100.** SWE-bench Verified 49% is moderate. Terminal-Bench 2.1 (Vals) 43.8% is moderate. No GDPval-AA, τ²-bench, OSWorld, MCP Atlas, or Toolathlon scores found. Sparse agentic benchmark coverage.
- **Reasoning: 30/100.** GPQA 59.4% is below frontier (90%+ threshold). No AA Intelligence Index, HLE, LCR, CritPt, or Omniscience scores found. This is the non-reasoning variant. The model predates the reasoning mode era. Very limited reasoning benchmark data.
- **Context window: 70/100.** 200K tokens falls in the 200K–500K tier (65–84 range). No retrieval-percentage figures found. `meta.json` confirms 200K — consistent.
- **Multimodal: 65/100.** Text and image input, text output (per `\meta.json` and Anthropic announcement). +image-in only, no video/audio/PDF verified. `meta.json` is consistent with known capabilities.
- **Coding: 42/100.** SWE-bench Verified 49% is below frontier (73%+ for Haiku 4.5, 85%+ for GPT-5.3 Codex). No LiveCodeBench, Vibe Code Bench, DeepSWE, or SciCode scores found. Very sparse coding benchmark coverage.
- **Cost efficiency: 50/100.** $3.00 in / $15.00 out per 1M tokens — expensive (median output $9-10). No free tier (`meta.json` `noFreeId: true`).
- **Overall Score: 50/100.** Mean of five quality dimensions: (45 + 30 + 70 + 65 + 42) / 5 = 252 / 5 = 50.4 → 50. Legacy model from June 2024 with very sparse benchmark coverage (only 4/618 benchmarks on BenchLM, no AA page). SWE-bench Verified 49% and GPQA 59.4% are the only verified public scores. Deprecated and superseded by newer Claude models. `meta.json` is consistent with verified specs (200K context, text+image, $3/$15 pricing).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via BenchLM, Anthropic announcements, and Epoch AI; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Confidence note: Low confidence. Only 4 verified public benchmarks found (SWE-bench Verified 49%, Terminal-Bench 2.1 Vals 43.8%, GPQA 59.4%, FrontierMath v2 Tiers 1-3 2.069%). AA has no model page (404). BenchLM covers only 4 of 618 benchmarks. This is a legacy model from June 2024. Re-score when AA and additional independent benchmarks become available.
- Meta.json note: `meta.json` is consistent with verified specs — 200K context window, text+image input/text output, $3/$15 pricing, `noFreeId: true`. No discrepancies found for this model.
- Future sources: add a new file next to this one, e.g. `Anthropic_Claude_3.5_Sonnet_Announcement.md`, using the same headings.
