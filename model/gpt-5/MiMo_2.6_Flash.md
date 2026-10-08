# GPT-5 — findings by MiMo 2.6 Flash

- Source: OpenAI "Introducing GPT-5" launch page (2025-08-07), Artificial Analysis, OpenRouter, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 — OpenAI's **August 7, 2025** flagship, "our smartest, fastest, most useful model yet." A **unified system**: a fast default model + deeper **GPT-5 thinking** + a real-time **router** (trained on user switches, preference rates, measured correctness) choosing between them, with mini fallbacks at usage limits; GPT-5 pro (extended reasoning, replaces o3-pro) sat above it. Superseded by GPT-5.1 (Nov 2025) and later — AA now flags it **deprecated in favor of GPT-5.1** but continues benchmarking.
- **Short description:** Set **launch records**: AIME 2025 **94.6% without tools**, **SWE-bench Verified 74.9%** (fixed n=477 subset), Aider Polyglot 88%, **MMMU 84.2%**, HealthBench Hard 46.2%; GPT-5 pro took **GPQA 88.4% without tools** (SOTA at launch). Also marketed on reliability: ~80% fewer factual errors than o3 when thinking, deception rates cut from 4.8% (o3) to 2.1%, safe-completions safety training. "GPT-5 thinking beats o3 with 50–80% fewer output tokens."
- **Provider / access:** OpenAI API (2 providers, AA) + ChatGPT tiers; OpenRouter `openai/gpt-5` (400K, $1.25/$10). Proprietary.
- **Release / knowledge:** 2025-08-07; **knowledge cutoff Sep 2024** (OpenRouter/AA) — oldest cutoff in this part of the queue, flagged.
- **Context window:** **400,000 total / 128,000 out** (meta; AA/OpenRouter confirm 400K).
- **Modalities:** **text, image, file in; text out** (meta; AA confirms text+image), reasoning, tool calls.
- **Pricing:** OpenAI **$1.25 / $10.00 per 1M**, **cached $0.125 (90% discount)**; **OpenCode Zen $1.07 / $8.50**; blended $1.34/1M (AA).

### Raw benchmarks found

> Primary: OpenAI launch page (official launch-era rows, all marked LAUNCH-ERA);
> AA model page (current independent readings). No current third-party agentic rows
> surfaced on AA/BenchLM/OpenRouter for this deprecated entry — thin coverage flagged.

Launch-era (OpenAI, 2025-08-07, high reasoning effort):

- **AIME 2025 (no tools): 94.6%** — SOTA at launch (with-tools numbers not comparable, per footnote).
- **SWE-bench Verified: 74.9%** (n=477 fixed verified subset); **Aider Polyglot: 88%.**
- **GPQA: 88.4%** — with GPT-5 **pro** extended reasoning, SOTA at launch (standard-tier GPQA not stated in prose; charts not transcribed).
- **MMMU: 84.2%** (vision+standard averaged, footnote); **HealthBench Hard: 46.2%**; MultiChallenge and HLE figures exist in charts with a footnote on an HLE version discrepancy — not transcribed, flagged.
- Reliability: LongFact/FActScore hallucinations ~6× fewer than o3; CharXiv fake-image compliance 9% vs o3's 86.7%.

Current (AA, 2026):

- **AA Intelligence Index (v4.3.2): 23 (estimated)**, #138/225 — **below the median (26)**; "below average in intelligence."
- Serving: 89.8 t/s (above tier median), **TTFT 73.9 s at high effort** (heavy thinking latency).
- No GPQA/HLE/τ²/OSWorld/SWE-V current rows published on the page (index evals "not publicly available" for this deprecated model).

### Normalized scores (1–100)

- **Tool use: 76/100.** Launch materials claim "significant gains" in instruction following and agentic tool use and the router explicitly coordinates tools, but no numeric agentic benchmark (τ²/OSWorld/GDPval/TB) survives for this entry — evidence-thin by 2026 standards.
- **Reasoning: 81/100.** AIME 94.6 (no tools) and pro-tier GPQA 88.4 were elite at launch and still strong math evidence; the current AA Index of 23 (below median), the HLE version discrepancy, and a Sep-2024 cutoff pull it down against today's reference-clearers.
- **Context window: 88/100.** 400K/128K — the 400K tier scores ~90 in this report set, held back here by no current retrieval/LCR rows for GPT-5 itself.
- **Multimodal: 70/100.** Text/image/file input with launch MMMU 84.2 — top of the image band; no video/audio surface.
- **Coding: 83/100.** SWE-V 74.9 + Aider 88 were SOTA at launch and remain solid (frontier is now 80–85 SWE-V); no Terminal-Bench/LiveCodeBench rows fetched, and 5.2/5.3-Codex generations extended past it.
- **Cost efficiency: 75/100** (excluded from Overall). Input at the $1.25 anchor but output $10 (2.4× the $4.25 reference), softened by a 90% cache discount and the cheaper Zen route ($1.07/$8.50); 73.9 s high-effort TTFT is a real cost.
- **Overall Score: 80/100.** (76+81+88+70+83)/5 = 79.6 → 80 — the August-2025 record-setter (AIME 94.6, SWE-V 74.9, MMMU 84.2) still a capable 400K multimodal workhorse at fair prices, but scored on today's absolute scale it sits below its queue line: below-median composite intelligence, the oldest cutoff around it, and no current agentic evidence.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — openai.com launch page (official launch-era rows transcribed from prose; chart-only rows flagged), AA model page (current index/speed/cost/spec, deprecation notice), OpenRouter model page (pricing/context/cutoff cross-check), repo meta (positioning, Zen tier). Scores are normalized 1–100 interpretations, not official vendor scores; launch-era figures are explicitly labeled as such.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
