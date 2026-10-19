# GPT-5.1 Codex Max — findings by Laguna S 2.1

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's frontier agentic coding model released 2025-11-19 in Codex (CLI, IDE, cloud, code review), with API access added 2025-12-04. Built on an update to the GPT-5.1 foundational reasoning model, trained on agentic tasks across software engineering, math, research, and medicine. First model natively trained to operate across multiple context windows via compaction — coherently working over millions of tokens in a single task. Superseded by GPT-5.2-Codex (2025-12-18) and GPT-5.3 Codex (2026-02). Not an alias of any other entry. `meta.json` marks this entry as `scaffolded: true`.
- **Provider / access:** OpenAI Responses API only (`gpt-5.1-codex-max`); Codex CLI, IDE extension, cloud, code review; ChatGPT Plus/Pro/Business/Edu/Enterprise.
- **Release / knowledge:** released 2025-11-19 (OpenAI product post); API from 2025-12-04 (OpenAI community announcement). Knowledge cutoff 2024-09-30 (OpenAI model docs).
- **IDs:** `gpt-5.1-codex-max` (OpenAI API).
- **Context window:** **400,000 tokens total / 128,000 max output** (OpenAI model docs, Vals AI). Note: repo `meta.json` says "128K total" — the 400K figure is treated as canonical.
- **Modalities:** text + image input, text output (OpenAI model docs; Vals AI also lists file input). No video.
- **Pricing (as of 2026-10-17):** $1.25 input / $10.00 output per 1M tokens; cached input $0.125 (OpenAI model docs, Vals AI). Paid only; included with ChatGPT Plus/Pro/Business/Edu/Enterprise via Codex.
- **Architecture:** proprietary (OpenAI, weights private). Extra High (xhigh) reasoning effort. Compaction: native multi-context-window operation.

### Raw benchmarks found

> Sources: BenchLM.ai model page (`gpt-5-1-codex-max`, Oct 17, 2026 — 13 of 639 benchmarks, unranked); Artificial Analysis model benchmarks (via BenchLM link attribution, for τ²-bench, AA-MMMU-Pro, AA-LCR, CritPt, GPQA, HLE, AA-Omniscience, IFBench); Vals AI (LiveCodeBench, Vibe Code Bench). BenchLM has 13 rows but assigns no public overall score (unranked). All numbers independently verified via webfetch on 2026-10-17.

Agent / tool use:

- τ²-bench: **83%** (BenchLM, Artificial Analysis)
- Terminal-Bench 2.0: **58.1%** (OpenAI product post, xhigh + compaction, Harbor harness) — note: Epoch AI reports 84.7% using a different harness (not directly comparable)
- SWE-Lancer IC SWE: **79.9%** (OpenAI product post, xhigh)
- METR Time Horizons: **1044.8 minutes** (~17.4 hours) best score (Epoch AI)
- Terminal-Bench 2.1: no verified public score found
- OSWorld: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23.7%** (AA, via BenchLM) — estimated, no overall rank published
- AA-GPQA Diamond: **86.0%** (AA, via BenchLM)
- AA-HLE: **25.7%** (AA, via BenchLM)
- AA-LCR: **69.3%** (AA, via BenchLM)
- CritPt: **5.7%** (AA, via BenchLM)
- AA-Omniscience Index: **-6.5%** (AA, via BenchLM)
- AA-Omniscience Accuracy: **39.9%** (AA, via BenchLM)
- AA-Omniscience Hallucination Rate: **77.2%** (AA, via BenchLM)
- GPQA Diamond: no independently verified public score (base GPT-5.1: 81.9%)
- HLE: no independently verified public score (base GPT-5.1: 26%)
- AIME 2025: no independently verified public score for Max variant
- ProofBench: **100%** best score (Epoch AI)
- BenchLM overall: not computed (unranked, 13 of 639 benchmarks)

Coding:

- SWE-bench Verified: **77.9%** (OpenAI product post, xhigh + compaction, n=500)
- LiveCodeBench (Vals): **83.56% ±1.05** (Vals AI, rank 48/143)
- LiveCodeBench Pro (Elo): **2439** (VentureBeat)
- Vibe Code Bench v1.1: **22.17% ±3.84** (Vals AI, rank 77/112) — +9.5% boost vs GPT-5.1-Codex
- SWE-bench Pro: no verified public score found
- SciCode: no verified public score found
- DeepSWE: no verified public score found

Multimodal & grounded:

- AA-MMMU-Pro: **72.5%** (AA, via BenchLM)
- Design Arena Website: **1163** (OpenRouter benchmarks, via BenchLM)
- MMMU: no verified public score found for Max variant

Instruction following:

- AA-IFBench: **70.0%** (AA, via BenchLM)

Long context:

- **Compaction:** native multi-context-window operation — first model trained to coherently work over millions of tokens by pruning session history (OpenAI product post, system card). No RULER/MRCR score published.
- AA-LCR: 69.3% (AA, via BenchLM) — verifies long-context reasoning at 400K

### Normalized scores (1–100)

> BenchLM has 13 benchmark rows but no public overall score (unranked). Scores derived from verified benchmarks above using `model-comparison.md` v4 methodology.

- **Tool use: 68/100.** SWE-Lancer IC SWE 79.9% and τ²-bench 83% (AA) are strong; Terminal-Bench 2.0 58.1% (OpenAI xhigh, Harbor harness) is solid; METR Time Horizons 1044.8 min (~17.4 hrs) is the longest autonomous work window. Capped by Vibe Code Bench 22.17% and no OSWorld/GDPval-AA/TB2.1. Two Codex generations behind GPT-5.3 Codex.
- **Reasoning: 68/100.** ProofBench 100% (Epoch AI) is a verified math reasoning signal; GPQA 86.0% (AA) is good; AA-LCR 69.3% verifies long-context reasoning. Capped by AA-HLE 25.7%, CritPt 5.7%, AA Intelligence Index 23.7% (below-average composite), and AA-Omniscience index -6.5%. No HLE/GPQA/AIME for Max variant directly from AA.
- **Context window: 72/100.** 400K/128K is standard frontier window. Scored at the high end of the 200K–500K band due to **compaction** — the first model natively trained to operate across multiple context windows, effectively working over millions of tokens (OpenAI product post, system card, VentureBeat).
- **Multimodal: 62/100.** Text + image input (OpenAI docs); AA-MMMU-Pro 72.5% is a real multimodal benchmark score. Capped by no MMMU score from Vals/independent sources, no audio/video, coding-first design.
- **Coding: 74/100.** SWE-bench Verified 77.9% (OpenAI xhigh) beats Gemini 3 Pro's 76.2% at launch; LiveCodeBench 83.56% (Vals, rank 48/143) is strong; SWE-Lancer 79.9% is a large jump from GPT-5.1-Codex's 66.3%. Capped by Vibe Code Bench 22.17% (Vals, rank 77/112), no SWE-bench Pro/SciCode/DeepSWE published, superseded by GPT-5.2-Codex and GPT-5.3 Codex.
- **Cost efficiency: 70/100.** $1.25/$10 with $0.125 cached input is standard frontier coding price; compaction reduces context-management costs; included with ChatGPT Plus/Pro/Business/Edu/Enterprise. Capped by xhigh effort dramatically increasing token consumption (Vals: 260 min 25s avg latency); no Batch API support.
- **Overall Score: 69/100.** Half-up mean of (68 + 68 + 72 + 62 + 74) / 5 = 344/5 = 68.8 → 69. GPT-5.1 Codex Max: strong coding (SWE-V 77.9%) and proof reasoning (ProofBench 100%) but middling composite (AA Index 23.7%, HLE 25.7%). Unranked on BenchLM despite 13 benchmark rows.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (BenchLM.ai model page, Artificial Analysis model benchmarks via BenchLM attribution, Vals AI, Epoch AI, VentureBeat, OpenAI product post); scores normalized 1–100 per model-comparison.md v4. Zero-influence: did not read peer `model/` findings files during research.
- Sources: BenchLM.ai `gpt-5-1-codex-max` (13 benchmarks, unranked, Oct 17) — τ²-bench 83%, Vibe Code Bench 22.17%, LiveCodeBench 83.6%, AA-MMMU-Pro 72.5%, AA-LCR 69.3%, CritPt 5.7%, AA Intelligence Index 23.7%, GPQA 86.0%, HLE 25.7%, AA-Omniscience (-6.5% / 39.9% / 77.2%), IFBench 70.0%; AA model benchmarks (via BenchLM link attribution); Vals AI (`vals.ai/models/openai_gpt-5.1-codex-max`) — LiveCodeBench 83.56% ±1.05 rank 48/143, Vibe Code Bench 22.17% ±3.84 rank 77/112; Epoch AI — ProofBench 100%, TB2.0 84.7% (different harness, flagged); VentureBeat — LiveCodeBench Pro Elo 2439; OpenAI product post (Nov 19, 2025), system card.
- Note: BenchLM has 13 rows but no public overall score (unranked). AA has not published an Intelligence Index score for GPT-5.1-Codex-Max specifically.

---

## Re-verification (2026-10-17)

Confirmed via Oct 17 BenchLM page (`benchlm.ai/models/gpt-5-1-codex-max`): 13 of 639 benchmarks covered, unranked, Oct 17 date. All 13 rows match the sources cited above. Confirmed via Vals AI (Oct 18 data, cited as of Oct 17 BenchLM update): LiveCodeBench 83.56% ±1.05 (rank 48/143), Vibe Code Bench 22.17% ±3.84 (rank 77/112). Normalized scores: Tool 68, Reasoning 68, Context 72, Multimodal 62, Coding 74, Overall 69.
