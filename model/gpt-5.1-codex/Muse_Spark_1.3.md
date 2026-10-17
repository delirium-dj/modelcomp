# GPT-5.1 Codex — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.1 Codex, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's agentic coding variant of GPT-5.1 (Nov 2025) for repo-scale software engineering in Codex environments; Responses API only with rolling snapshots.
- **Provider / access:** OpenAI API (Responses only); OpenCode Zen `opencode/gpt-5.1-codex` (tool calling + structured outputs).
- **Release / knowledge:** 2025-11-13 (BenchmarkList); knowledge cutoff 2024-09-30 (API docs)
- **IDs:** `opencode/gpt-5.1-codex` (state explicitly: no Free ID exists on Zen)
- **Context window:** 400,000 total / 128,000 max output — verified via OpenAI API docs + repo metadata
- **Modalities:** text in, image in; text out; reasoning yes; tool calls yes (function calling, structured outputs)
- **Pricing (as of 2026-10-17):** Paid $1.25 in / $10.00 out per 1M; cached input $0.125; no free tier
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **34.8%** (BenchmarkList — rank 49/326, 85th pct)
- GDPval-AA: **1193 Elo** (BenchmarkList — rank 70/352, 80th pct; benchgap est lane 31.4% scale differs — provisional)
- Tau2-Bench Telecom: **83.0% measured** (BenchmarkList — rank 81/332, 76th pct; benchgap Tau2 83.0% measured — consistent)
- APEX-Agents: **34.9%** (BenchmarkList — rank 18/44, 60th pct)
- JobBench: **26.2% measured** (BenchmarkList + benchgap — consistent)
- BrowseComp: **68.1% estimated** (benchgap est. — provisional)
- Claw-Eval: **50.7% estimated** (benchgap est. low confidence — provisional, no measured absolute)


Reasoning / knowledge:

- GPQA Diamond: **86.0%** (BenchmarkList — rank 70/468, 85th pct; benchgap AA-GPQA 86.0% measured — consistent)
- HLE: **25.7% measured** (benchgap AA-HLE; BenchmarkList lane 25.7% rank 99/479 — consistent)
- AA-LCR: **69.3% measured** (BenchmarkList rank 131/408 + benchgap measured — consistent)
- CritPt: **5.7% measured** (benchgap — weak lane)
- AA Intelligence Index: **34.73 / 23.7 lane** (BenchmarkList rank 79/427 82nd pct; benchgap 23.7 measured — harness versions differ, band noted)
- AA-Omniscience Accuracy: **39.9% measured** (benchgap)
- MMLU-Pro: **86.0%** (BenchmarkList rank 27/312, 92nd pct)
- AIME 2025: **95.7%** (BenchmarkList rank 8/226, 97th pct)
- LiveBench: **69.3%** (BenchmarkList rank 36/43 — weak lane)

Coding:

- SWE-bench Verified: **74.1% estimated** (benchgap est. high confidence — provisional; Vals SWE 69.3% est.)
- SWE-bench Pro: **55.7% estimated** (benchgap est. high confidence — provisional)
- LiveCodeBench: **85.5%** (BenchmarkList rank 23/123, 82nd pct; Vals LiveCode 85.6% measured — consistent)
- AA-SciCode: **47.6% estimated** (benchgap est. high confidence — provisional)
- Vibe Code Bench v1.1: **13.1% measured** (BenchmarkList rank 57/75 — weak lane)
- ALE-Bench: **1244.92** (BenchmarkList rank 9/83, 90th pct — standout)
- APEX-SWE: **37.7%** (BenchmarkList rank 10/14; Pass@3 47.0%)

Long context:

- **400K verified (128K out); MRCRv2 71.1% estimated (benchgap est. low confidence — provisional)**

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2-Telecom 83.0% measured plus TB-Hard 34.8% (85th pct) and GDPval 1193 (80th pct); capped by APEX-Agents 34.9% and est-only BrowseComp/Claw lanes.
- **Reasoning: 80/100.** GPQA 86.0% (85th pct) plus AIME 95.7% (97th pct), MMLU-Pro 86.0% (92nd pct), LCR 69.3%; capped by HLE 25.7%, CritPt 5.7% and weak LiveBench.
- **Context window: 82/100.** 400K / 128K out verified; mid-upper tier below 1M models.
- **Multimodal: 62/100.** Text+image in, text out; AA-MMMU-Pro 72.5% measured, Design Arena 1265; capped text-only out, no video/audio.
- **Coding: 78/100.** LiveCode 85.5% plus ALE-Bench top-10 and SWE est band ~74/56%; capped by Vibe 13.1% weakness and SWE-Verified estimated-only.
- **Cost efficiency: 55/100.** Paid $1.25/$10, no free tier; cheap input, dear output.
- **Overall Score: 76/100.** Mean (76+80+82+62+78)/5 = 75.6 → 76; best-fit Codex-native repo-scale coding pick on Responses API.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (OpenAI API docs, BenchmarkList page, benchgap lane); normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
