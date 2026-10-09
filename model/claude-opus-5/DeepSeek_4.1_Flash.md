# Claude Opus 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Newly confirmed independent data: Vals AI **SWE-bench Verified 97.00% (#1/88)**, GPQA Diamond **93.43%**, MMLU-Pro 91.59%, MMMU-Pro 89.88%, LiveCodeBench 89.03%, Terminal-Bench 4.0 53.53%, IOI 84.33%, Vals Index 63.67% (#5). Artificial Analysis Intelligence Index v4.3.2 **51 (#16/227)**, 53.5 tok/s, $5.86/task, 140M tokens (very verbose). LMArena `claude-opus-5-high` 1490 / `-max` 1489.
> **Conflicts surfaced:** (1) Release Jul 24 (Anthropic) vs Jul 22 (Vals). (2) Vals Index 67.21% (#1, July writeup) vs 63.67% (#5, current page) — different scales/versions. (3) LMArena shows Opus 5 (1489–1490) ranked *below* older Claude models (Opus 4.6 1504, Opus 4.7 1501) — an arena regression. (4) AA Index 51 vs Anthropic's "near Fable 5 frontier" framing.
> Sources: https://platform.claude.com/docs/en/models/opus-5/overview · https://www.anthropic.com/news/claude-opus-5 · https://www.vals.ai/models/anthropic_claude-opus-5 · https://artificialanalysis.ai/models/claude-opus-5 · https://arena.ai/leaderboard/chat/text

## Model card

- **Name:** Claude Opus 5 (API id `claude-opus-5`; no Free tier)
- **Short description:** Anthropic's Opus 5-generation flagship (2026-07-24), successor to Opus 4.8, built for the deepest reasoning and longest autonomous coding/research runs. Superseded by Opus 5.5 (2026-09-22).
- **Provider / access:** Anthropic Claude API, AWS Bedrock, Google Vertex AI; closed, API-only.
- **Release / knowledge:** 2026-07-24 (Vals: Jul 22); knowledge cutoff not disclosed.
- **IDs:** `claude-opus-5`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; 128,000 max output (300,000 via Batch beta).
- **Modalities:** text, image and PDF in; text out; tool calling; extended thinking with effort low/medium/high/max + **xhigh**.
- **Pricing (as of 2026-10-09):** $5.00 in / $25.00 out per 1M; cache read $0.50; Fast Mode $10/$50; Batch $2.50/$12.50.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1861 Elo** (rank 1/340); AA-Briefcase 1720 Elo (rank 1/56)
- Terminal-Bench 4.0 52.3%; Terminal-Bench 3.0 42.7% (rank 1/17); Terminal-Bench-Science 0.1 30.0%
- Toolathlon 80.6% Pass@1 / 87.0% Pass@3 (rank 1/37); OSWorld-Verified 83.4%; Tau3-Banking 44.7%; MCP Atlas 85.8%
- Vals Terminal-Bench 4.0 53.53%; Agents' Last Exam 55.5%

Reasoning / knowledge:

- GPQA Diamond **93.43%** (Vals); MMLU-Pro 91.59% (Vals); ARC-AGI-1 97.5%; ARC-AGI-2 90.4%
- Artificial Analysis Intelligence Index **51 (v4.3.2, #16/227)** vs the earlier launch figure; very verbose (140M index tokens)
- HLE: no verified public score found; LCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified **97.00% (#1/88)** (Vals); SWE-bench Pro 79.2%; SWE-bench Multilingual 89.5%; SWE-bench Multimodal 59.4%
- LiveCodeBench 89.03% (Vals); DeepSWE 74.0%; Vibe Code Bench 88.4%; SciCode 55.7%; IOI 84.33%
- Output speed: 53.5 tok/s (AA) — slow for interactive chat

Long context:

- 1M window; no model-specific MRCR/RULER/GraphWalks reproduced — no verified recall-at-depth value.

### Normalized scores (1–100)

- **Tool use: 92/100.** Rank-1 GDPval-AA 1861, Toolathlon 80.6/87.0% and OSWorld-Verified 83.4% are frontier; capped by TB4.0 (53.5% Vals) not matching the TB2.1 anchor and missing Tau3-depth.
- **Reasoning: 93/100.** GPQA 93.43%, MMLU-Pro 91.59%, ARC-AGI-2 90.4% are frontier; the independent AA Index of 51 (<60) and unpublished HLE/CritPt keep it short of 95.
- **Context window: 96/100.** 1M as default and ceiling (128K / 300K batch output), ≥1M band; no published recall-at-depth measurement.
- **Multimodal: 80/100.** Text, image and PDF in (≤"+video/PDF" band) with MMMU-Pro 89.88%; text-only output, no audio/video.
- **Coding: 95/100.** Vals SWE-bench Verified 97.00% (#1), LiveCodeBench 89.03% and DeepSWE 74.0% are elite; SWE-bench Pro 79.2% is the only soft spot.
- **Cost efficiency: 45/100.** $5/$25 per 1M (above the $3/$15 ≈ 60 anchor), worsened by extreme verbosity; caching/batch are the only relief.
- **Overall Score: 91/100.** (92 + 93 + 96 + 80 + 95) / 5 = 91.2 → 91. Best fit: long autonomous coding/research where the #1 SWE-bench Verified and million-token recall justify the highest per-token spend.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Anthropic Opus 5 docs/news, Vals AI model page, Artificial Analysis model page, LMArena). Independent rows (Vals SWE 97%, GPQA) were promoted; the Vals-Index version conflict and the LMArena regression are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
