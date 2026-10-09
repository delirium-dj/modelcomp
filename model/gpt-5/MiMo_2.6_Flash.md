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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# GPT-5 — findings by Mimo 2.6 Flash

- Source: OpenAI/GPT-5 (`gpt-5-2025-08-07`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (OpenAI, previous flagship — no "Free"-tier wording applies; paid API only)
- **Short description:** OpenAI's August 2025 unified flagship that merges a fast model, a deeper reasoning model and a real-time router into one endpoint. Launch leader in math and real-world coding; superseded by GPT-5.1 → GPT-5.6 and GPT-6 within the same line, so it now sits in the value tier.
- **Provider / access:** OpenAI API — model id `gpt-5`, snapshot `gpt-5-2025-08-07`; both **Chat Completions** (`/v1/chat/completions`) and **Responses API** (`/v1/responses`) are offered, plus a Realtime endpoint. Also routed through OpenCode Zen as `opencode/gpt-5`.
- **Release / knowledge:** released 2025-08-07; knowledge cutoff **2024-09-30** (OpenAI model page). Snapshot deprecated 2026-06-11, API removal scheduled 2026-12-11 (OpenAI model page / hokai.io).
- **IDs:** `openai/gpt-5` (API alias `gpt-5`); OpenCode Zen `opencode/gpt-5`. **No Free ID exists on OpenCode Zen** as of 2026-09-27 (`noFreeId`).
- **Context window:** **400,000 input tokens / 128,000 max output tokens** (verified on OpenAI's model page `developers.openai.com/api/docs/models/gpt-5`).
- **Modalities:** text + image + file (PDF) in; **text out**; reasoning yes (`minimal` / `low` / `medium` / `high` effort); tool calls yes; JSON mode yes; prompt caching yes. Audio and video are **not supported** on the API (OpenAI model page).
- **Pricing (as of 2026-09-27):** OpenAI list **$1.25 in / $0.125 cached / $10.00 out per 1M tokens**; OpenCode Zen **$1.07 in / $8.50 out per 1M**. Paid only — no $0 free tier verified; reasoning tokens bill as output.
- **Architecture:** proprietary, undisclosed parameter count; sparse **Mixture-of-Experts** (hokai.io describes it as OpenAI's first MoE flagship), closed weights.

### Raw benchmarks found

> Every number carries its source. Rows with no public measurement say
> "no verified public score found" — nothing below is estimated.

Agent / tool use:

- Tau2-bench Retail: **81.1%** <(OpenAI launch chart, via llm-stats `gpt-5-2025-08-07`)>
- Tau2-bench Telecom: **96.7%** <(same source)>
- Tau2-bench Airline: **62.6%** <(same source)>
- Terminal-Bench 2.1: **no verified public score found** (base `gpt-5` absent from the TB2.1 leaderboard; only later GPT-5.x entries exist)
- GDPval-AA: **no verified public score found** (GDPval postdates this model's eval window)
- OSWorld / AutomationBench: **no verified public score found** (first published for GPT-5.4 and later)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.7%** <(OpenAI launch table via codeswap.net; GPT-5 *high* effort 87.3% and GPT-5 Pro 88.4% are separate rows — llm-stats)>
- Humanity's Last Exam: **24.8%** <(llm-stats `gpt-5-2025-08-07`; Artificial Analysis harness reports 28% at high effort)>
- MMLU-Pro: **88.4** <(OpenAI launch, codeswap.net; Artificial Analysis harness 87% via api.airforce)>
- MMLU: **92.5%** <(llm-stats)>
- AIME 2025: **94.6%** <(OpenAI launch, no tools — VentureBeat/Techmeme, wandb.ai summary)>
- Artificial Analysis Intelligence Index: **35.3** at `high` effort on the current v4.x index <(Artificial Analysis via api.airforce)>. At launch (2025-08-07) Artificial Analysis reported **68** on its then-current index — same model, rescaled metric, do not mix the two.
- AA-LCR: Artificial Analysis stated GPT-5 (high and medium) **topped** AA-LCR at launch; **no numeric value published** in that article.
- CritPt / AA-Omniscience / LCR numeric: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**; related honesty numbers: LongFact-Concepts **0.7%**, LongFact-Objects **0.8%**, FActScore **1.0%**, HealthBench (thinking) **1.6%** hallucination <(OpenAI system-card numbers via wandb.ai report)>

Coding:

- SWE-bench Verified: **74.9%** <(OpenAI launch, with thinking — wandb.ai / ODSC / VentureBeat; +22.1 pts over the no-reasoning setting)>
- Aider Polyglot: **88.0%** <(OpenAI launch)>
- LiveCodeBench: **84.6%** <(pricepertoken.com, data from Artificial Analysis; AA harness 85% via api.airforce)>
- HumanEval: **93.4%** <(llm-stats); a 97.4 figure circulates via hokai.io — unverified harness, not used>
- SWE-Lancer (IC-Diamond subset): **100.0%** <(llm-stats, OpenAI launch chart)>
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / SWE-bench Pro / AA Coding Index: **no verified public score found** (first GPT-5.x entries are GPT-5.1-Codex and later)

Long context:

- OpenAI-MRCR (2 needle) 128K: **95.2%**; 256K: **86.8%** <(llm-stats, OpenAI launch chart)>
- GraphWalks BFS <128K: **78.3%**; GraphWalks parents <128K: **73.3%** <(same source)>
- COLLIE: **99.0%** <(same source)>
- BrowseComp long-context 128K: **90.0%**; 256K: **88.8%** <(same source)>
- MRCR / RULER measured at the full 400K window: **no verified public score found** (retrieval degrades past 256K: 86.8% at 256K vs 95.2% at 128K)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong policy/tool following — Tau2 Telecom 96.7%, Retail 81.1%, Airline 62.6% sit well above the methodology's mid band (Tau 10–25%); capped below 90 because Terminal-Bench 2.1, GDPval-AA and Claw-Eval all report **no verified public score found**, so the three frontier anchors are missing rather than low.
- **Reasoning: 72/100.** GPQA Diamond 85.7%, MMLU-Pro 88.4 and AIME 94.6% are near the frontier band (GPQA 90%+), but HLE 24.8% is far below the 40%+ frontier reference and the current AA Intelligence Index of 35.3 lands in the methodology's 20–35 mid band — those two caps hold it at 72.
- **Context window: 78/100.** 400K total sits in the 200K–500K tier (65–84 → ~79 by interpolation); verified retrieval is good but not stellar at depth (MRCR 95.2% at 128K, 86.8% at 256K, none at 400K), so no bump toward the 500K–1M band.
- **Multimodal: 68/100.** Image + file input with text output only (no audio/video in, no non-text out) maps to the "+image in = 60–70" band; MMMU 84.2% is strong within that band, but the missing output modalities cap it.
- **Coding: 81/100.** SWE-bench Verified 74.9% (launch SOTA) plus Aider Polyglot 88.0% and LiveCodeBench 84.6% are close to the frontier references; capped below 90 by **no verified public score found** for SciCode, DeepSWE/SWE-bench Pro and Terminal-Bench — three of the four frontier coding anchors.
- **Cost efficiency: 80/100.** No free tier; paid at OpenAI $1.25/$10 (Zen $1.07/$8.50). Input matches the ~$1.25 anchor (≈88) but the $8.50–$10 output rate sits between the ~$4.25 (≈88) and $15 (≈60) anchors, pulling the score down to ~80; cached input at $0.125 helps agentic re-runs.
- **Overall Score: 75/100.** (78 + 72 + 78 + 68 + 81) / 5 = 75.4 → 75 (half-up, Cost excluded). Best fit: a dependable **paid** generalist for reasoning, coding and tool-use work when budget matters — but a year past its launch and already replaced twice inside the GPT-5.x line, so it is a value pick, not a frontier pick.

---

## Signature

- Provided by: **Mimo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-09-27
- Method: public internet research (OpenAI model page and launch post, Artificial Analysis, llm-stats, codeswap, pricepertoken, wandb.ai/ODSC/Techmeme summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

