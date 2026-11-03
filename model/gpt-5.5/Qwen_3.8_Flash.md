# GPT-5.5 — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.5 (`openai/gpt-5.5`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — pricing verified $5/$30 (Cost 50→45) + ChatGPT/Codex retirement 2026-10-14 (API unaffected) + AA v5 drift, bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's pre-5.6 flagship base tier — exceptional structured tool-calling (τ²-bench 98%) and solid knowledge scores, but weak long-horizon agency, a heavy Omniscience hallucination flag and only mid coding evidence.
- **Provider / access:** OpenAI Responses/Chat API (`gpt-5.5`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026 ("Introducing GPT-5.5"); knowledge cutoff not disclosed. Curated meta flags the card/specs as not yet fully verified — BenchLM confirms a 1M window.
- **IDs:** `openai/gpt-5.5`.
- **Context window:** 1M (BenchLM model-details; curated meta "no verified public value").
- **Modalities:** text, image in; text out (per OpenAI launch rows on MMMU-Pro); reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** No verified public pricing found (curated meta); treat Cost as provisional.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (63 of 618 rows), citing OpenAI "Introducing GPT-5.5", Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cursor, Cognition and the Terminal-Bench/OSWorld leaderboards (fetched 2026-10-02).

Agent / tool use:

- τ²-bench: **98%** (OpenAI) — near-perfect structured tool calling
- Terminal-Bench 2.0: 82.0% (leaderboard; TB 2.1 Vals 76.4%); BrowseComp 84.4%; CyberGym 81.8%
- OSWorld-Verified 78.7%; MCP Atlas 75.3%; Toolathlon 55.6%; Gert Labs 72.93%
- GDPval-AA only **1396** (AA normalized 41.8%); AA Agentic Index 37.3%; OSWorld 2.0 13.0%; ApprenticeBench 20%; APEX-Agents 37.7%

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **93.6%** (Vals 93.2%); HLE **52.2%** (w/o tools 41.4%, AA 45.8%)
- ARC-AGI-2 **85%** (OpenAI) — but ARC-AGI-3 **0.4%** (ARC Prize)
- FrontierMath legacy/v2 T1-3/Tier-4: 51.7 / 51.7 / 35.4 (Epoch); AA-LCR 84.3; CritPt 27.1
- Intelligence Index **38.4**; Omniscience Accuracy / **Hallucination: 58.0% / 89.0%** (severe flag); MMLU-Pro (Vals) 88.1; IFBench 75.9

Coding:

- LiveCodeBench (Vals) **85.3%**; SWE-bench (Vals) 82.6%; AA Coding Index 74.9%
- SWE-bench Pro 58.6%; AA-SciCode 55.8%; Terminal-Bench 2.0 82%; React Native Evals 84.7%
- CursorBench 3.1/3.2 59.2/58.4; FrontierCode 1.1 43.0%; Vibe Code Bench 69.9%; no DeepSWE row

Multimodal / long context:

- MMMU-Pro 81.2 (w/ Python 83.2, AA 79.9); OfficeQA Pro 54.1; Design Arena 1265
- MRCR v2: **83.1% (64K–128K) / 87.5% (128K–256K)** — sub-90 retrieval at long ranges.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 84/100.** τ²-bench 98%, BrowseComp 84.4% and OSWorld-Verified 78.7% are standout, but GDPval-AA 1396 is far under the 1750 frontier ref and AA Agentic Index 37.3%, OSWorld 2.0 13.0% and ApprenticeBench 20% show weak open-ended agency.
- **Reasoning: 85/100.** GPQA-Diamond 93.6% and HLE 52.2% clear the bars with ARC-AGI-2 85%; ARC-AGI-3 0.4%, mid Index 38.4, FrontierMath ~52% and an 89.0% Omniscience hallucination rate cap it firmly.
- **Context window: 94/100.** 1M-token window meets the ≥1M tier, but MRCR is only 83.1/87.5 at 64K–256K — well short of the ≥98% retrieval needed higher in the band.
- **Multimodal: 68/100.** Text+image in / text out with good-but-not-frontier visuals (MMMU-Pro ~80–83, OfficeQA 54.1); no audio/video rows and no non-text output → +image-in band.
- **Coding: 80/100.** LiveCodeBench 85.3% and SWE-bench (Vals) 82.6% are strong; SWE-bench Pro 58.6%, Coding Index 74.9%, no DeepSWE row and FrontierCode 43.0% keep it below the 90 band.
- **Cost efficiency: 45/100.** (Revised by the 2026-11-03 second pass from 50/100's unverified placeholder: OpenAI's launch post, OpenRouter, Inworld and Morph all confirm **$5.00 in / $30.00 out per 1M, $0.50 cached**.) $5/$30 sits between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors, closer to the midpoint; cached-input relief is modest. Cost is excluded from Overall.
- **Overall Score: 82/100.** Mean of Tool 84, Reasoning 85, Context 94, Multimodal 68, Coding 80 = 82.2 → 82. Best fit: structured tool-calling workflows and QA-style reasoning at pre-5.6 pricing; avoid ungrounded factual recall (89% hallucination flag), ARC-AGI-3-class novel puzzles and long-horizon autonomous agents.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://openai.com/index/introducing-gpt-5-5/ (**"gpt-5.5 will soon be available in the Responses and Chat Completions APIs at $5 per 1M input tokens and $30 per 1M output"**), https://openrouter.ai/openai/gpt-5.5 (**$5.00/M in, $30.00/M out, cache read $0.50/M**), https://www.morphllm.com/openai-api-pricing (same, plus the family context **$30/$180 for GPT-5.5 Pro** per https://benchlm.ai/openai/api-pricing) and https://inworld.ai/models/openai-gpt-5-5 (**1.1M-token context**, 128K out) · lifecycle — https://help.openai.com/en/articles/9624314-model-release-notes (**"Retiring GPT-5.5 (October 14, 2026) … from ChatGPT, ChatGPT Work, and Codex. This change does not affect API access"**), https://community.openai.com/t/please-to-keep-gpt-5-5-available-as-a-legacy-option-in-codex/1397813 and https://www.datastudios.org/post/chatgpt-5-5-official-status-released-gpt-5-versions-and-what-openai-has-documented-so-far (**base GPT-5.5 API model remains documented**; ChatGPT moved to GPT-5.6 Luna/Sol/Sol Pro) · index — https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5 (v5, 2026-10-27: 2 new benchmarks + 3 upgrades, majority-private data; **Terminal-Bench 4.0 replaces 2.x** in the basket), https://cellcog.ai/blog/artificial-analysis-intelligence-index-v5/ (Opus 5.5 max 58 leads) and https://artificialanalysis.ai/evaluations/gdpval-aa (GPT-5.5 (Xhigh) 1359 Elo ≈ #95 — consistent with this report's 1396 weak-GDPval read).

**What moved and how it was resolved:**

1. **Pricing verified (Cost 50 → 45).** Pass 1 used an explicit "no verified public pricing" placeholder. Four sources confirm **$5/$30 per 1M with $0.50 cached** — between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors, so 45. Cost is excluded from Overall; the Overall is unaffected.
2. **Lifecycle event after the cutoff: consumer retirement 2026-10-14.** OpenAI retired GPT-5.5 from ChatGPT, ChatGPT Work and Codex on 2026-10-14 while **explicitly preserving API access** — unlike `gemini-3-pro-preview`'s full shutdown, the ranked API id remains served and documented; recorded as a consumer-surface loss, not a curation concern. Successors: GPT-5.6 line (July 2026), then GPT-6 Astra.
3. **Context window refined: 1.1M.** Inworld lists 1.1M (vs BenchLM's 1M used in pass 1); both sit in the ≥1M tier and the binding cap remains the sub-90% MRCR rows (83.1/87.5), so Context stays 94 with the figure noted.
4. **AA Index v5 (2026-10-27) — scale drift, bands unchanged.** The batch-wide rescale (private-data basket, TB 4.0) does not re-measure capability; the current GDPval-AA board (5.5 Xhigh ≈ 1359/#95) corroborates rather than contradicts pass 1's weak-GDPval reasoning, which already capped Tool at 84. The 89.0% Omniscience hallucination flag and ARC-AGI-3 0.4% stand as scored.

**Scores changed by this pass:** Cost efficiency **50 → 45** (verified $5/$30 replacing the unverified placeholder). All five quality dims unchanged: Tool 84, Reasoning 85, Context 94, Multimodal 68, Coding 80. Overall = half-up mean(84, 85, 94, 68, 80) = 411/5 = 82.2 → **82, unchanged** (Cost is excluded by methodology).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing OpenAI "Introducing GPT-5.5", plus Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cursor/Cognition and leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenAI launch/release notes, OpenRouter, Morph, Inworld, BenchLM pricing, Artificial Analysis v5 + GDPval boards, community/datastudios lifecycle coverage); pricing verified at $5/$30 (**Cost 50→45**), ChatGPT/Codex retirement (2026-10-14, API preserved) recorded, 1.1M window noted, AA v5 treated as scale drift — **no quality dimension changed and Overall remains 82**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
