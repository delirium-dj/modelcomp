# Qwen3.8-Flash-Next — findings by GPT 6.1 Sol

- Source: Alibaba Qwen / Qwen3.8-Flash-Next
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next.
- **Short description:** Open-weight experimental multimodal architecture preview, aimed at efficient reasoning, coding and agent workloads. The primary card explicitly distinguishes the production hosted Qwen3.8-Flash service based on it; hosted production features are not automatically properties of this release [1].
- **Provider / access / IDs:** Weights `Qwen/Qwen3.8-Flash-Next`; self-hosting through compatible inference engines. Artificial Analysis lists an Alibaba API evaluation, but an exact production API route and a Zen Free ID were not independently verified [1,2].
- **Release / knowledge:** August 26, 2026 according to the independent evaluator; knowledge cutoff not verified [2].
- **Context window:** 262,144 native tokens, extensible to 1,000,000 according to the primary card. Score uses native context because full-window retrieval reliability of the extension was not verified. AA lists 256K; hosted Flash's default 1M is a different service specification [1,2]. Maximum output not verified.
- **Modalities:** Text, image and video input; text output; reasoning and tool-oriented evaluation. No verified native audio or image generation [1,2].
- **Pricing (2026-10-17):** AA lists $0.15 input / $0.47 output per million tokens and an 89% cache discount for its evaluated Alibaba surface. These are evaluator-listed paid rates, not a verified universal self-hosting cost or a confirmed Flash-Next API tariff. AA reports $0.37 per Intelligence Index task, 52.0 output tokens/s and 240M suite output tokens [2].
- **Architecture:** Hybrid Gated DeltaNet / Qwen Sparse Attention, MoE and gated residuals. Primary accounting is 125B main parameters, 6B activated, plus 51B n-gram embedding and a separate 4B MTP head. Thus 176B excluding MTP versus AA's 180B including it is an accounting distinction. Qwen Community License 1.0, not an unrestricted Apache licence [1,2,4].

### Raw benchmarks found

All primary-card figures below are vendor-reported; they are not independent replications [1].

| Capability | Evaluation | Result and qualification |
| --- | --- | --- |
| Tools | Toolathlon Verified | 73.5 pass@1 |
| Office agents | CoWorkBench / JobBench | 73.9 / 55.7; CoWorkBench is in-house |
| Difficult agents | Agents' Last Exam | 24.3 pass@1, separately 51.2 score |
| Multimodal tools | ClawEval-MM | 64.4 pass@3 / 60.4 average score; not interchangeable |
| Computer use | AndroidWorld | 84.5 |
| Computer use | OSWorld 2.0 | 19.4 binary / 52.3 partial reward |
| Reasoning | GPQA Diamond / HLE | 91.7 / 35.9; HLE judged by GPT-4o |
| Instructions | IFBench | 81.3 |
| Coding | DeepSWE 1.1 | 58.7; best of two harnesses, mini-SWE-agent wins for this model |
| Coding | SWE-bench Pro | 62.5; corrected tasks and vendor reruns with Claude Code, not the untouched public suite |
| Coding | SWE-bench Multilingual / NL2Repo-Bench | 81.0 / 48.1 |
| Competitive coding | LiveCodeBench v6 | 91.9 |
| Vision | RealWorldQA / LVBench | 88.5 / 76.6 |
| Visual maths | MathVision | 90.6 without code interpreter / 95.7 with it; some labels manually corrected |
| Chart reasoning | CharXiv RQ | 84.6 without CI / 90.6 with CI |

- **Independent evaluator:** Artificial Analysis Intelligence Index v4.3.2 **40**, displayed **#8/120** in the open-weight comparison class, not global rank [2]. No individual chart-only AA benchmark number inferred from the index.
- **Secondary compilation:** BenchLM displays aggregate **62.8**, **#43/954**, with **37/639** benchmark coverage. Vendor-attributed rows on this page are corroborating transcription, not another independent experiment [3].
- **Missing:** No verified exact-model Terminal-Bench 2.1, Tau3, CritPt, long-context retrieval at 512K+, or hallucination-rate number found in the readable evidence. GDPval figures seen through secondary attribution were not independently confirmed and do not drive scoring.

### Conflicts and search trail

Three distinct search queries were completed: `"Qwen3.8-Flash-Next" official model card`, `"Qwen3.8-Flash-Next" independent benchmark`, and `"Qwen3.8-Flash-Next" pricing review limitations` (DuckDuckGo HTML). Primary card and direct AA evidence control over snippets. BenchLM search coverage differed from the current direct page, so the direct-page snapshot is used. Qwen Cloud's guessed Flash-Next page and the guessed Vals model URL returned 404; neither supplies evidence. The arXiv abstract page [5] was retrieved but its results were not sufficiently readable to add numerical claims. Technical-report PDF results were not read. Native context, extended context and hosted production Flash are kept distinct. Strong selected benchmarks coexist with modest AA index performance and poor OSWorld full-task completion.

### Normalized scores (1–100)

- **Tool use: 83/100.** Toolathlon 73.5 and broad agent results support strong capability; OSWorld binary 19.4, vendor harness dependence and missing independent terminal results cap confidence [1,2].
- **Reasoning: 82/100.** GPQA 91.7 and HLE 35.9 are strong, but independent Index 40 falls short of the methodology's frontier reference [1,2].
- **Context window: 78/100.** Native 262,144 fits the 200K–500K tier; unverified million-token retrieval prevents extension-based frontier credit [1].
- **Multimodal: 86/100.** Image/video understanding and substantial visual-agent evidence support the upper input-only tier; text-only output and no audio cap breadth [1,2].
- **Coding: 85/100.** LCB v6 91.9, multilingual SWE 81.0 and Pro 62.5 are strong; corrected-suite and best-harness conditions prevent frontier equivalence [1].
- **Cost efficiency: 96/100.** Evaluator-listed $0.15/$0.47 and $0.37/task are highly competitive; verbosity, serving cost and unresolved exact tariff prevent free-tier credit [2].
- **Overall Score: 83/100.** Half-up mean of (83 + 82 + 78 + 86 + 85) / 5 = 82.8; useful efficient open-weight multimodal agent model, with deployment and harness qualifications.

### Sources

1. https://huggingface.co/Qwen/Qwen3.8-Flash-Next/raw/main/README.md — primary model card and qualified benchmark tables.
2. https://artificialanalysis.ai/models/qwen3-8-flash-next — direct independent evaluator snapshot, pricing and modalities.
3. https://benchlm.ai/models/qwen3-8-flash-next — secondary benchmark compilation.
4. https://inferencex.semianalysis.com/model/qwen-3-8-flash-next — architecture and parameter-accounting discussion.
5. https://arxiv.org/abs/2608.30320 — technical-paper landing page; no unread results credited.

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent public internet research; normalized scores are interpretations, not official vendor scores.
