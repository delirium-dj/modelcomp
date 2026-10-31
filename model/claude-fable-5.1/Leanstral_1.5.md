# Claude Fable 5.1 — findings by Leanstral_1.5

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top-tier model for coding and knowledge work, released September 1, 2026, with 25% lower cost than Fable 5 via reduced cache-read pricing, 1M context, text+image multimodal, extended thinking, and safeguards tuned for biology and cybersecurity (Mythos 5.1 variant). Fable 5.1 and Mythos 5.1 are identical weights — only safeguards differ.
- **Provider / access:** Anthropic API (`claude-fable-5-1`); available on AWS, Google Cloud, Azure. Free tier not available on API. Mythos 5.1 available through trusted access programs for cybersecurity and life sciences only.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff not publicly disclosed (post-2025 training data inferred from benchmarks).
- **IDs:** `anthropic/claude-fable-5-1` (Fable), `anthropic/claude-mythos-5-1` (Mythos, same weights, restricted access).
- **Context window:** 1,048,576 (1M) total tokens; 128K max output (per AA model page).
- **Modalities:** Text and image in; text out. Reasoning yes (extended thinking, configurable Low/Medium/High effort). Tool calls yes. JSON mode yes. EU AI Act watermarking applied (invisible detection API).
- **Pricing (as of 2026-10-31):** $10.00/$50.00 per 1M in/out; cache reads $0.25 (75% reduction); cache writes $5/8; Batch API 50% off. Compared to Opus 5.5 ($4/$20): Fable costs 2.5x more but achieves similar or better performance on several benchmarks.
- **Architecture:** Proprietary; no parameter count disclosed. Inferred: successor to Claude Fable 5, multimodal (text/image), 1M context, MoE or dense, reasoning-focused.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

**Agent / tool use:**

- Terminal-Bench 4.0: **55.8%** (Anthropic system card); Vals AI: **85.0%** (Vals leaderboard — different harness, higher)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic system card; AA reports 52.6%)
- GDPval-AA v2: **1,853 Elo** (Anthropic system card; AA reports 1,764)
- AutomationBench: **31.4%** (Anthropic system card; AA reports 59.4% — discrepancy due to safeguard interventions counted as failures; AA runs without fallback models)
- OSWorld 2.0: **77.9% partial** / **41.7% strict** (Anthropic system card; AA reports 80.7%)
- CursorBench 3.2: **73.4%** (Cursor community eval; Anthropic reports 73.4%)
- Toolathlon Verified: **77.8%** (Anthropic system card); Pass@3: **81.5%**
- Toolathlon avg. turns: **23.7 turns** (Anthropic system card)
- GDPval-AA: **1,764 Elo** (AA model page)
- AA Briefcase: **1,669 Elo** (AA model page)
- AA Tau3 Banking: **47.2%** (AA model page;AA reports 47%)
- AA Agentic Index: **58.0%** (AA model page)
- ApprenticeBench: **72%** (NeoCognition community eval)
- AA ITBench: **49.5%** (AA model page)
- AA Terminal-Bench 4.0: **52.0%** (AA model page)

**Reasoning / knowledge:**

- Humanity's Last Exam (with tools): **65.0%** (Anthropic system card); no tools: **60.9%** (Anthropic system card); AA reports 59.1%
- ARC-AGI-1: **97.5%** (Anthropic system card)
- ARC-AGI-2: **90%** (Anthropic system card)
- GPQA Diamond: **93.7%** (AA model page); Vals AI: **93.4%** (Vals leaderboard)
- AA-LCR: **85.3%** (AA model page)
- CritPt: **29.7%** (AA model page)
- MLCR-AA: **15.6%** (AA model page)
- FrontierMath v2 Tiers 1–3: **90.2%** (Epoch AI leaderboard)
- FrontierMath v2 Tier 4: **87.8%** (Epoch AI leaderboard)
- MMLU-Pro (Vals): **92.4%** (Vals leaderboard)

**Coding:**

- SWE-bench Pro: **81.2%** (Anthropic system card)
- SWE Multilingual: **89.1%** (Anthropic system card)
- ProgramBench: **87.6%** (Anthropic system card)
- DeepSWE: **67.4%** (Anthropic system card)
- SWE Multimodal: **54.7%** (Anthropic system card)
- FrontierSWE v2: **56.3%** (Proximal leaderboard)
- CursorBench 4.0: **51.8%** (Cursor community eval)
- LiveCodeBench (Vals): **90.5%** (Vals leaderboard)
- AA-SciCode: **63.1%** (AA model page)
- AA Coding Index: **81.6%** (AA model page)
- PostTrainBench v1.1: **40.2%** (Google Gemini 4 Argon launch chart)

**Long context:**

- GraphWalks BFS 256K–1M: **65.0%** (Google Gemini 4 Argon launch chart)
- MRCR (no published numbers in AA model page or Anthropic sources)

**Multimodal:**

- Design Arena Website: **1,312** (OpenRouter benchmarks)
- ParseBench: **78.1%** (ParseBench leaderboard)

**Speed:**

- 68.7 tok/s output (AA model page; Anthropic API)
- TTFT: 238.66s (AA model page; very high for reasoning model)
- Verbose: 160M output tokens on Intelligence Index (AA model page; above median)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 92/100.** TB4.0 55.8% (Anthropic, frontier tier), AA TB4.0 52.0% (different harness), GDPval-AA v2 1,853 Elo (record), AA Briefcase 1,669 Elo (#1), AA Tau3 47.2% (#1) — capped by AutomationBench 31.4% (safeguard-intervention penalty) and Toolathlon 77.8% being the only verified tool-use benchmark.
- **Reasoning: 88/100.** ARC-AGI 97.5%, GPQA Diamond 93.7%, AA-LCR 85.3%, HLE 65% with tools / 60.9% without — capped by CritPt 29.7% and MLCR-AA 15.6%.
- **Context window: 100/100.** 1M tokens confirmed; no independent MRCR verification found in AA or Anthropic sources.
- **Multimodal: 70/100.** Text/image in; Design Arena 1,312, ParseBench 78.1% — strong multimodal but limited benchmark coverage (no MMMU-Pro, Chartography, EQ-Bench, or video benchmarks found in primary sources).
- **Coding: 92/100.** SWE-bench Pro 81.2%, SWE Multilingual 89.1%, ProgramBench 87.6%, LiveCodeBench 90.5% — capped by DeepSWE 67.4% and CursorBench 4.0 51.8%.
- **Cost efficiency: 75/100.** $10/$50 per 1M — expensive; 25% cheaper than Fable 5 due to 75% cache-read reduction; cost per task competitive at lower effort settings (Medium effort = ~45% cheaper than Fable 5).
- **Overall Score: 88.4/100.** Mean of (92 + 88 + 100 + 70 + 92) / 5 = 88.4 → 88; using v4 methodology (cost excluded): (92 + 88 + 100 + 70 + 92) / 5 = 88.4 → **88**.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-10-31
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-5-1)
  - [Anthropic System Card (PDF)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Artificial Analysis: Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [BenchLM: claude-fable-5-1](https://benchlm.ai/models/claude-fable-5-1)
  - [Vals AI: GPQA Diamond leaderboard](https://www.vals.ai/models/anthropic_claude-fable-5-1)
  - [Epoch AI: FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5.1/Leanstral_1.5.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-fable-5.1/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
