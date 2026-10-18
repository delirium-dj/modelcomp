# GPT-5.1 Codex Max — findings by Big Pickle

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's frontier agentic coding model released 2025-11-19 in Codex (CLI, IDE, cloud, code review), with API access added 2025-12-04. Built on an update to the GPT-5.1 foundational reasoning model, trained on agentic tasks across software engineering, math, research, and medicine. First model natively trained to operate across multiple context windows via **compaction** — coherently working over millions of tokens in a single task. Introduced Extra High (`xhigh`) reasoning effort. First OpenAI model trained to operate in Windows environments. Superseded by GPT-5.2-Codex (2025-12-18) and GPT-5.3 Codex (2026-02). Not an alias of any other entry. `meta.json` marks this entry as `scaffolded: true`.
- **Provider / access:** OpenAI Responses API only (`gpt-5.1-codex-max`); Codex CLI, IDE extension, cloud, code review; ChatGPT Plus/Pro/Business/Edu/Enterprise. Batch not supported. Fine-tuning not supported.
- **Release / knowledge:** released 2025-11-19 (OpenAI product post, VentureBeat, Epoch AI); API from 2025-12-04 (OpenAI community announcement). Knowledge cutoff **2024-09-30** (OpenAI model docs).
- **IDs:** `gpt-5.1-codex-max` (OpenAI API).
- **Context window:** **400,000 tokens total / 128,000 max output** (OpenAI model docs; Vals AI confirms 400K/128K). Note: repo `meta.json` says "128K total" — the 400K figure from OpenAI's own docs and Vals is treated as canonical (same discrepancy as the GPT-5 Codex entry).
- **Modalities:** text, image in; text out (OpenAI model docs; Vals AI also lists file input). No video. Reasoning token support; function calling, web search, prompt caching, structured outputs. Responses API only — no Chat Completions, Assistants, Realtime, or Batch.
- **Pricing:** $1.25 in / $10.00 out per 1M tokens; cached input $0.125 (OpenAI model docs; Vals AI confirms; Epoch AI confirms). Paid only; included with ChatGPT Plus/Pro/Business/Edu/Enterprise via Codex.
- **Architecture:** proprietary (OpenAI, weights private). System card (2025-11-19): treated as **High capability on biology**; "very capable in cybersecurity" but does not reach High threshold; does not reach High on AI self-improvement. Evaluated under Preparedness Framework. Safety training for harmful tasks and prompt injection; agent sandboxing and configurable network access.

### Raw benchmarks found

> Vendor-reported figures come from OpenAI's GPT-5.1-Codex-Max product post (2025-11-19) and model docs, run with **compaction enabled at Extra High reasoning effort** (Terminal-Bench 2.0 ran in the Laude Institute Harbor harness). Independent numbers (Vals AI, Epoch AI, BenchLM/Artificial Analysis) are marked as such.

Agent / tool use:

- Terminal-Bench 2.0 (n=89, OpenAI xhigh): **58.1%** (vs 52.8% for GPT-5.1-Codex high)
- Terminal-Bench 2.0 (Epoch AI "best score across settings"): **84.7%** — Epoch runs a different harness/configuration, so this is not directly comparable to OpenAI's Harbor-harness 58.1%
- SWE-Lancer IC SWE: **79.9%** (OpenAI xhigh; vs 66.3% for GPT-5.1-Codex high)
- τ²-Bench: **83%** (Artificial Analysis, via BenchLM)
- METR Time Horizons: **1044.8 minutes** (~17.4 hours) best score (Epoch AI) — measures how long an agent can work autonomously on a real task before failing
- ALE-Bench: **2176.9** best score (Epoch AI)
- OSWorld / OSWorld-Verified: **no verified public score found**
- GDPval-AA: **no verified public score found** for the Max variant specifically
- LiveCodeBench Pro (Elo): **2439** (VentureBeat, matched Gemini 3 Pro)

Reasoning / knowledge:

- ProofBench: **100%** best score (Epoch AI)
- Humanity's Last Exam (no tools): **no verified public score found** for the Max variant directly. The base GPT-5.1 (high) scores 26% on AA's HLE (Artificial Analysis); the Max variant is expected to be in a similar range but has not been independently evaluated on HLE by AA.
- GPQA Diamond: **no verified public score found** for the Max variant directly. Base GPT-5.1: 81.9% (independent review, claude5.ai/OtterMind). GPT-5.1-Codex-Max inherits the GPT-5.1 reasoning stack but has no separate GPQA figure.
- AIME 2025: **no verified public score found** for the Max variant. Base GPT-5.1: 94.0% (independent review).
- Artificial Analysis Intelligence Index: **no verified public score found** — AA has not published an index score for GPT-5.1-Codex-Max (they have GPT-5.1 Codex high at 24 estimated, but not the Max variant).
- BenchLM overall: **not computed (unranked)** — BenchLM has 13 source-displayable rows for GPT-5.1-Codex-Max but assigns no public overall score.

Coding:

- SWE-bench Verified (n=500, OpenAI xhigh): **77.9%** (vs 73.7% for GPT-5.1-Codex high; vs Gemini 3 Pro 76.2% per VentureBeat)
- SWE-bench Verified (Vals AI eval): **~74.7% implied** — Vals reported "+1% performance on SWE-bench Verified (#4)" on 2025-12-04, i.e. Codex-Max scored ~74.7% vs GPT-5.1-Codex's 73.7%. Vals' independent eval is lower than OpenAI's vendor claim, consistent with the pattern seen across the Codex line.
- LiveCodeBench (Vals AI): **83.56% ±1.05**, rank 48/143 (Vals AI)
- Vibe Code Bench v1.1 (Vals AI): **22.17% ±3.84**, rank 77/112 (Vals AI; "+9.5% boost vs GPT-5.1-Codex, #3" at time of eval 2025-12-04)
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench (vendor): not separately reported; OpenAI focused on SWE-Lancer and Terminal-Bench in the launch post.

Multimodal:

- AA-MMMU-Pro: **72.5%** (Artificial Analysis, via BenchLM)
- MMMU: **no verified public score found** for the Max variant.

Long context:

- Compaction: native multi-context-window operation — the model works over millions of tokens by pruning session history to retain only task-relevant context (OpenAI product post, system card, VentureBeat, community announcement). This is the model's headline capability.
- AA-LCR: **no verified public score found** for the Max variant (base GPT-5.1-Codex: 72% on AA-LCR v1.1).

### Scores

- **Tool use: 68/100.** SWE-Lancer IC SWE 79.9% is strong; Terminal-Bench 2.0 58.1% (OpenAI xhigh, Harbor harness) is solid; τ²-Bench 83% (AA) verifies tool orchestration; METR Time Horizons 1044.8 min (~17 hrs) is the longest autonomous work window among its generation. Offsets: Epoch AI's TB2.0 84.7% is from a different harness and not directly comparable; no OSWorld-Verified score; the model is two Codex generations behind GPT-5.3 Codex (SWE-V 85%, TB2.0 77.3%).
- **Reasoning: 68/100.** ProofBench 100% (Epoch AI) is a verified mathematical reasoning signal; the base GPT-5.1 stack (AIME 94.0%, GPQA 81.9%) is solid. Offsets: no HLE, GPQA, AIME, or AA Intelligence Index score for the Max variant specifically — AA has not evaluated it; BenchLM has 13 rows but no overall score; AA-MMMU-Pro 72.5% (via BenchLM) is multimodal rather than pure reasoning.
- **Context window: 72/100.** 400K/128K is the standard frontier window. The differentiator is **compaction** — the first model natively trained to operate across multiple context windows, coherently working over millions of tokens in a single task (project-scale refactors, multi-hour agent loops). This is a genuine architectural advance that effectively extends usable context well beyond the raw window. Offsets: raw 400K is still below the 1M tier (Gemini 3 Pro, Claude Opus 5); meta.json's "128K total" is a data discrepancy (treated as incorrect).
- **Multimodal: 62/100.** Text + image input (OpenAI docs; Vals also lists file input); AA-MMMU-Pro 72.5% is a real multimodal benchmark score. Offsets: no MMMU or MMMU-Pro score from Vals or other independent sources; no audio or video; the model is explicitly coding-first and multimodal support is secondary.
- **Coding: 74/100.** SWE-bench Verified 77.9% (OpenAI xhigh) is strong and beat Gemini 3 Pro at launch; SWE-Lancer IC SWE 79.9% is a large jump from GPT-5.1-Codex's 66.3%; LiveCodeBench 83.56% (Vals, rank 48/143) and LiveCodeBench Pro Elo 2439 are solid; 30% fewer thinking tokens than GPT-5.1-Codex at the same effort level. Offsets: Vals' independent SWE-V eval (~74.7%) is ~3pp below OpenAI's 77.9% vendor claim; Vibe Code Bench 22.17% (Vals, rank 77/112) is weak despite being a +9.5% jump; Vals noted 3× slower on SWE-V and 10× slower on VCB than GPT-5.1-Codex; no SWE-bench Pro or SciCode score; superseded by GPT-5.2-Codex and GPT-5.3 Codex.
- **Cost efficiency: 70/100.** $1.25/$10 with $0.125 cached input is the standard frontier coding price; 30% token efficiency improvement over GPT-5.1-Codex at the same effort level is a real cost saving; included with ChatGPT Plus/Pro/Business/Edu/Enterprise. Offsets: xhigh effort dramatically increases token consumption and latency (Vals measured 260 min 25 s average latency); Responses API only; output pricing is 3× GLM-5's $3.20; no Batch API support.
- **Overall Score: 69/100.** Half-up mean of Tool use (68), Reasoning (68), Context window (72), Multimodal (62), Coding (74) = 344/5 = 68.8 → 69. Cost efficiency (70) is excluded per `model-comparison.md` methodology.

### Caveats and conflicts

- **Context window discrepancy:** repo `meta.json` says "128K total"; OpenAI's own model docs and Vals AI both say 400K/128K. The 400K figure is treated as canonical (same discrepancy pattern as the GPT-5 Codex entry in this repo).
- **Terminal-Bench 2.0 dual figures:** OpenAI reports 58.1% (n=89, Harbor harness, xhigh, compaction); Epoch AI reports 84.7% as "best score across settings" using a different harness. These are not directly comparable. The report uses OpenAI's 58.1% as the primary figure (same harness as the GPT-5.1-Codex comparison) and flags Epoch's 84.7% as harness-dependent.
- **SWE-bench Verified vendor vs independent:** OpenAI reports 77.9% (xhigh, compaction); Vals AI's independent eval implied ~74.7% (+1% over GPT-5.1-Codex's 73.7%). The ~3pp gap is consistent with the vendor-vs-independent pattern seen across the Codex line (see GPT-5.1-Codex entry).
- **Thin BenchLM coverage:** BenchLM has 13 benchmark rows for GPT-5.1-Codex-Max but **no public overall score** (unranked). Published evidence is displayed without an overall assignment.
- **AA not evaluated:** Artificial Analysis has not published an Intelligence Index score for GPT-5.1-Codex-Max. They have GPT-5.1 Codex (high) at 24 estimated, but not the Max variant. τ²-Bench 83% and AA-MMMU-Pro 72.5% are attributed to AA via BenchLM.
- **Latency:** Vals AI measured 260 min 25 s average latency — "This is not the fastest model in the shed. It's 3x slower on SWE-bench Verified, 10x on VCB. This is a model for when you need the absolute best, not when you need it quickly."
- **Superseded:** GPT-5.1-Codex-Max was replaced by GPT-5.2-Codex (2025-12-18) as the default Codex model, then by GPT-5.3 Codex (2026-02). It remains available via the API as of 2026-10 but is no longer the frontier Codex model.

### Sources

- OpenAI GPT-5.1-Codex-Max product post: https://openai.com/index/gpt-5-1-codex-max
- OpenAI GPT-5.1-Codex-Max System Card: https://openai.com/index/gpt-5-1-codex-max-system-card/
- OpenAI model docs: https://developers.openai.com/api/docs/models/gpt-5.1-codex-max
- OpenAI community API announcement (2025-12-04): https://community.openai.com/t/gpt-5-1-codex-max-is-now-available-in-the-api/1368399
- OpenAI community launch announcement (2025-11-19): https://community.openai.com/t/introducing-gpt-5-1-codex-max-enhanced-reasoning-and-long-horizon-workflows/1366846
- VentureBeat coverage (2025-11-19): https://venturebeat.com/ai/openai-debuts-gpt-5-1-codex-max-coding-model-and-it-already-completed-a-24
- Epoch AI model page: https://epoch.ai/models/gpt-5-1-codex-max
- Vals AI model page: https://www.vals.ai/models/openai_gpt-5-1-codex-max
- BenchLM model page: https://benchlm.ai/models/gpt-5-1-codex-max
- Artificial Analysis (GPT-5.1 Codex comparison, AA Index 24 estimated): https://artificialanalysis.ai/models/comparisons/gpt-5-6-sol-low-vs-gpt-5-1-codex

**Big Pickle (opencode/big-pickle)** — 2026-10-18
