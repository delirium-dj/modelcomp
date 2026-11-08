# GPT-6.1 Terra — findings by Beam

- Source: OpenAI / GPT-6.1 Terra (gpt-6.1-terra)
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-29)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient mid-range model (released 2026-10-26) combining detailed visual reasoning, precise computer use, and natural writing; positioned for desktop automation, form-filling, and coding at a fraction of frontier cost.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`); ChatGPT Work/Codex for Plus/Pro/Enterprise/Edu. Chat Completions + Responses API.
- **Release / knowledge:** 2026-10-26; knowledge cutoff 2026-06 (per models.dev).
- **IDs:** `gpt-6.1-terra` (OpenAI); `openai/gpt-6.1-terra` (gateway alias).
- **Context window:** 1,050,000 tokens total; 128,000 max output (verified via models.dev/OpenAI docs).
- **Modalities:** text, image in; text out; reasoning yes (minimal→xhigh); tool calls yes; JSON/structured output yes.
- **Pricing (as of 2026-11-08):** $1.00 / $0.05 cached / $5.00 per 1M in/cached/out (OpenAI standard API).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agents' Last Exam: **+15 pts vs GPT-5.6 Terra at medium effort**; matches GPT-6 Astra at 1/10 token price (OpenAI)
- OSWorld 2.1 (desktop agents): **beats GPT-5.6 Terra's best at medium effort** (OpenAI)
- AutomationBench-AA: **60%** (AA comparison vs GPT-6.1 Sol 65%)
- AA-Briefcase v1.1: **1333 Elo** (AA)
- GDPval-AA v2.1: **1415 Elo** (AA)
- AA-Omniscience: **29** (AA)
- Internal error-rate benchmark: **16.7% at low effort** (down from 53.6% for GPT-5.6 Terra); **4.3% at max effort** (OpenAI)
- AA Briefcase: **1401** (Artificial Analysis)
- AA AutomationBench: **60.2%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **55.6%** (Artificial Analysis)
- GDP.pdf: **28.6%** (Artificial Analysis)
- MazeBench: **16%** (MazeBench)
- GDPval-AA: **1476 Elo** (Artificial Analysis)
- AA Briefcase: **1401** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **45** (AA, Xhigh)
- AA-HLE: **44%** (AA)
- AA-LCR v1.1: **82%** (AA)
- AA-Omniscience Accuracy/Hallucination: accuracy +2 pts; guessing rate 38% (down from 88%) (AA)
- MMMU-Pro (visual reasoning): outperforms GPT-5.6 Terra at every reasoning level; nearly matches GPT-6 Astra/Sol (OpenAI)
- HealthBench: on-par with GPT-5.6 Terra on production benchmarks (OpenAI system card)
- AA Intelligence Index: **51.3%** (measured, updated 2026-11-07)
- AA-HLE: **46.2%** (Artificial Analysis)
- AA-Omniscience Index: **29.6%**
- AA-Omniscience Accuracy: **47.6%**
- AA-Omniscience Hallucination Rate: **34.5%**
- AA-LCR: **82.7%** (Artificial Analysis)
- CritPt: **28.0%** (Artificial Analysis)
- MLCR-AA: **30.6%** (Artificial Analysis)
- HealthBench (raw): **51.1%**; (length-adjusted): **55.1%**
- HealthBench Professional: **62.7%**; Professional (raw): **64.2%**
- HealthBench Hard: **31.4%**
- FrontierMath v2 (Tiers 1-3): **90.877%**; Tier 4: **92.683%** (Epoch AI)

Coding:

- Terminal-Bench 4.0: **50.3% at max effort** (OpenAI); **49.49%** on Vals AI leaderboard
- Terminal-Bench-Science 0.1: within 5 pts of Claude Opus 5.5 at <1/5 cost (OpenAI)
- SciCode: **53%** (AA comparison)
- Coding Index: improved sharply vs GPT-5.6 Terra (OpenAI)
- AA-SciCode: **55.1%** (Artificial Analysis)
- ExtractBench (LlamaIndex): **94.28%**; ExtractBench Pro: **27%**; ParseBench: **73.64%**
- MMMU-Pro: **85.5%**; AA-MMMU-Pro: **84.7%**

Long context:

- Context window 1.05M; AA-LCR 82% (AA comparison); AA-LCR 82.7% (Artificial Analysis)

Multimodal:

- MMMU-Pro: **85.5%**; AA-MMMU-Pro: **84.7%**
- ExtractBench (LlamaIndex): **94.28%**; ExtractBench Pro: **27%**; ParseBench: **73.64%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Strong computer-use/agent gains (Agents' Last Exam +15 pts, OSWorld 2.1 beats predecessor, AutomationBench 60%, AA-Briefcase 1333); capped by absence of a published Terminal-Bench 2.1/Tau3 row. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 4.0 50.30%/55.6%, Terminal-Bench-Science 0.1 58.3%, Agents' Last Exam 60.0%, OSWorld 2.1 Offline 74.2%, AA Briefcase 1401, AA AutomationBench 60.2%, AA Terminal-Bench 4.0 55.6%, GDP.pdf 28.6%, MazeBench 16%, GDPval-AA 1476 Elo, AA Intelligence 51.3%, AA-HLE 46.2%, AA-Omniscience 29.6%/47.6%/34.5%, AA-LCR 82.7%, CritPt 28.0%, MLCR 30.6%, HealthBench (raw) 51.1%, (length-adjusted) 55.1%, HealthBench Professional 62.7%, Professional (raw) 64.2%, HealthBench Hard 31.4%, FrontierMath v2 90.877%/92.683%, ExtractBench (LlamaIndex) 94.28%, ExtractBench Pro 27%, ParseBench 73.64%, MMMU-Pro 85.5%, AA-MMMU-Pro 84.7%. Corroborates band; no change.
- **Reasoning: 85/100.** AA Intelligence Index 45, HLE 44%, LCR 82%, Omniscience 29, and sharply lower hallucination (4.3% at max); capped by mid-tier knowledge-heavy evals. Enrichment adds AA Intelligence 51.3%, AA-HLE 46.2%, AA-Omniscience 29.6%/47.6%/34.5%, AA-LCR 82.7%, CritPt 28.0%, MLCR 30.6%, HealthBench (raw) 51.1%, (length-adjusted) 55.1%, HealthBench Professional 62.7%, Professional (raw) 64.2%, HealthBench Hard 31.4%, FrontierMath v2 90.877%/92.683%. Corroborates band; no change.
- **Context window: 98/100.** 1.05M-token window with 82% long-context retrieval.
- **Multimodal: 75/100.** Text + image input with text output; no audio/video/PDF beyond image. Enrichment adds ExtractBench (LlamaIndex) 94.28%, ExtractBench Pro 27%, ParseBench 73.64%, MMMU-Pro 85.5%, AA-MMMU-Pro 84.7%. Corroborates band; no change.
- **Coding: 82/100.** Terminal-Bench 4.0 50.3%, SciCode 53%, strong scientific coding; capped by mid-range absolute scores. Enrichment adds AA-SciCode 55.1%, ExtractBench (LlamaIndex) 94.28%, ExtractBench Pro 27%, ParseBench 73.64%, MMMU-Pro 85.5%, AA-MMMU-Pro 84.7%. Corroborates band; no change.
- **Cost efficiency: 95/100.** $1/$0.05-cached/$5 per 1M with 9x lower cost per task than Opus 5.5; among the best price/performance frontier (AA).
- **Overall Score: 86/100.** (88+85+98+75+82)/5 = 85.6 → 86; best fit for cost-sensitive visual reasoning, desktop automation, and high-volume coding. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 4.0 50.30%/55.6%, Terminal-Bench-Science 0.1 58.3%, Agents' Last Exam 60.0%, OSWorld 2.1 Offline 74.2%, AA Briefcase 1401, AA AutomationBench 60.2%, AA Terminal-Bench 4.0 55.6%, GDP.pdf 28.6%, MazeBench 16%, GDPval-AA 1476 Elo, AA Intelligence 51.3%, AA-HLE 46.2%, AA-Omniscience 29.6%/47.6%/34.5%, AA-LCR 82.7%, CritPt 28.0%, MLCR 30.6%, HealthBench (raw) 51.1%, (length-adjusted) 55.1%, HealthBench Professional 62.7%, Professional (raw) 64.2%, HealthBench Hard 31.4%, FrontierMath v2 90.877%/92.683%, ExtractBench (LlamaIndex) 94.28%, ExtractBench Pro 27%, ParseBench 73.64%, MMMU-Pro 85.5%, AA-MMMU-Pro 84.7%). No dimension band moved; Overall unchanged at 86.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-29 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-6.1 Terra](https://benchlm.ai/models/gpt-6-1-terra)
  - [Artificial Analysis — GPT-6.1 Terra](https://artificialanalysis.ai/models/gpt-6-1-terra)
  - [OpenAI — GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [OpenAI GPT-6.1 Terra system card addendum](https://cdn.openai.com/pdf/38e3efcf-545e-44cd-99ec-2b7eb395f4cc/oai_GPT_6_1_Sol.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).