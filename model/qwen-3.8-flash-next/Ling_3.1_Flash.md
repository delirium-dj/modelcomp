# Qwen 3.8 Flash Next — findings by Ling 3.1 Flash

- Source: Alibaba (Qwen Team) / Qwen3.8-Flash-Next
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba Qwen Team's open-weights preview of the Qwen4 architecture (released 2026-08-26): a 125B MoE with 6B active per token, plus a 51B n-gram embedding table (offloadable to host RAM) and a 4B MTP head — ~176B stored. Deliberately architectural: "architectural innovation for sustainable AGI progress" over raw scaling. The production build with 1M context and built-in tools is served as Qwen3.8-Flash on QwenCloud.
- **Provider / access:** OpenRouter `qwen/qwen3.8-flash-next` (serverless, OpenAI-compatible); QwenCloud serves the production `qwen3.8-flash`; only one API provider at launch (Alibaba Cloud International).
- **Release / knowledge:** 2026-08-26; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.8-flash-next` (OpenRouter); weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face and ModelScope (Qwen Community License 1.0).
- **Context window:** 262,144 native, extensible to 1,000,000 (YaRN); sparse-attention kernel claims up to 7.6× prefill / 4.9× decode speedups at 1M tokens.
- **Modalities:** text + image (vision encoder; video-understanding rows reported) in; text out; tool calls; MTP (multi-token prediction) serving.
- **Pricing (as of 2026-10-08):** QwenCloud $0.16 / 1M input, $0.47 / 1M output; OpenRouter $0.15 / $0.47, cache read $0.016 (91.1% observed cache-hit rate → effective input ~$0.028/1M).
- **Architecture:** 125B MoE main + 51B n-gram embedding (deterministically addressed, not in per-token compute) + 4B MTP head; Qwen Sparse Attention, gated residuals, Gated DeltaNet hybrid stack; open weights.

### Raw benchmarks found

All task numbers are Qwen-reported (vendor benchmarks, unreproduced as of 2026-10-08; harness notes per HF model card).

Agent / tool use:

- Toolathlon Verified (Pass@1): **73.5%**
- CoWorkBench (long-horizon office work): **73.9%**
- JobBench (professional job tasks): **55.7%**
- Agents' Last Exam: **Pass@1 24.3%**, score 51.2
- AndroidWorld: **84.5%**; OSWorld 2.0: **19.4%** binary / **52.3%** partial
- ClawEval-MM (Pass@3): **64.4%**; Vision2Web: **64.0%**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vs Claude Opus 4.6 Max 91.3%)
- Humanity's Last Exam: **35.9%** (GPT-4o judge; Opus 4.6 Max 40.0%)
- IFBench: **81.3%**
- AA Intelligence Index: **56** (#5 of 111 in class, median 29; ~$0.10/task)
- MathVision without/with CI: **90.6% / 95.7%**

Coding:

- LiveCodeBench v6: **91.9%** (vs Opus 4.6 Max 88.8%)
- SWE-bench Pro: **62.5%** (Claude Code harness; vs Opus 4.6 Max 53.4%)
- SWE-bench Multilingual: **81.0%** (mini-SWE-agent; vs Opus 4.6 Max 77.5%)
- DeepSWE 1.1: **58.7%** (best of Claude Code / mini-SWE-agent harnesses)
- NL2Repo-Bench: **48.1%** (repo-level generation; DeepSeek-V4-Flash 54.2% leads)

Multimodal:

- RealWorldQA: **88.5%**; CharXiv RQ without/with CI: **84.6% / 90.6%**; LVBench (video): **76.6%**; ERQA: **72.3%**; RecreationBench: **49.9%**

Long context:

- No verified long-context retrieval score (MRCR/RULER/AA-LCR) found; 1M-token extension is architectural (sparse attention) with vendor throughput claims only.

### Normalized scores (1–100)

- **Tool use: 76/100.** Toolathlon 73.5%, CoWorkBench 73.9% and AndroidWorld 84.5% are strong for the tier, capped by JobBench 55.7%, OSWorld 2.0 binary 19.4% and Agents' Last Exam Pass@1 24.3%.
- **Reasoning: 78/100.** GPQA Diamond 91.7% and MathVision 95.7% are elite, but HLE 35.9% trails Opus 4.6 Max (40.0%) and the AA Intelligence Index (56) sits mid-frontier; all vendor-reported.
- **Context window: 75/100.** 262K native / 1M extensible with big sparse-attention speedup claims, but no independently measured long-context retrieval row yet.
- **Multimodal: 85/100.** Native vision with RealWorldQA 88.5%, CharXiv RQ 90.6% (w/ CI), LVBench 76.6% video understanding; RecreationBench 49.9% is the weak row; text-only output.
- **Coding: 82/100.** LiveCodeBench v6 91.9%, SWE-bench Multilingual 81.0%, SWE-bench Pro 62.5% and DeepSWE 58.7% beat much larger models; NL2Repo 48.1% caps it.
- **Cost efficiency: 95/100.** $0.16/$0.47 per 1M with ~$0.028 effective input after cache hits — an order of magnitude under Qwen3.8-Max ($2/$6) and among the cheapest capable models listed.
- **Overall Score: 79/100.** Mean of the five quality dims (76+78+75+85+82)/5 = 79.2 → 79; best fit for high-volume coding-agent and office-automation workloads on a budget, with the caveat that the benchmark sheet is one day old and vendor-only.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Qwen HF model card/blog, Alibaba Cloud, DataCamp, SemiAnalysis InferenceX, eesel, OrcaRouter, LLM Reference, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
