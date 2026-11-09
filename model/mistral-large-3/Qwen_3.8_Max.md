# Mistral Large 3 — findings by Qwen 3.8 Max

- Source: Mistral AI (`opencode/mistral-large-3`; Mistral La Plateforme + 2 other API providers, OpenCode Zen, Hugging Face open weights; API alias `mistral-large-3-2512`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3 (Mistral Large 3 Instruct 2512)
- **Short description:** Mistral's 675B-total / 41B-active Apache-2.0 open-weight multimodal MoE flagship, announced 2025-12-02 as part of the "Mistral 3" family and trained from scratch on ~3,000 NVIDIA H200 GPUs. It is now the *predecessor* of Mistral Large 4 (Preview) and is explicitly **deprecated** on Artificial Analysis.
- **Provider / access:** Mistral API / La Plateforme (id `mistral-large-3-2512`) plus 3 live API providers total; OpenCode Zen `opencode/mistral-large-3` (no Free ID — `noFreeId: true`); open weights on Hugging Face (self-host). Aliases: `mistral-large-3-2512`, `Large 3 2512`, `mistral/mistral-large-3`.
- **Release / knowledge:** Released 2025-12-02; knowledge cutoff not published. Superseded by Mistral Large 4 (Preview) — AA suggests considering the newer release instead.
- **IDs:** `opencode/mistral-large-3` (Zen, no Free ID); Mistral API `mistral-large-3-2512`. No standing $0 hosted tier — free only via Apache-2.0 self-hosting.
- **Context window:** 256K tokens (256,000; llm-stats lists 262K), verified on Artificial Analysis. No RULER/MRCR retrieval percentage published; AA-LCR 36.0% is the only long-context signal.
- **Modalities:** Text and image input (native vision, "general-purpose multimodal"); text output. Reasoning: **No** — non-reasoning base (AA notes a reasoning variant "may also exist" but none is published). Tool calling yes (agentic harness; τ²-bench/GDPval measured). No audio input; no non-text output.
- **Pricing (as of 2026-11-09):** $0.50 per 1M input / $1.50 per 1M output (blended ~$0.29/M at 7:2:1; 90% cache discount), "better than average" vs AA medians ($0.53/$1.85). Apache 2.0 open weights → self-host at $0 licence cost (but a 675B MoE needs multi-H100/H200-class infra).
- **Architecture:** Granular Mixture-of-Experts, 675B total / 41B active per token; native multimodal (text + image). Non-reasoning. Output speed 79 tok/s, time-to-first-answer-token 3.26s.

### Raw benchmarks found

> The model is **deprecated** on Artificial Analysis (still re-benchmarked every 18h instead of 6h), so its **AA Intelligence Index reads N/A** (composite not maintained). The individual benchmark rows below are AA's last-measured values as aggregated by **BenchLM** (`benchlm.ai/models/mistral-large-3`, fetched 2026-11-09; BenchLM last updated 2026-11-07): **Overall 34.11/100, rank #161 of 1016**, only **16 of 759** benchmarks covered → conservative. `meta.json`'s tradeoff ("deprecated on AA, Intelligence Index reads N/A, figures rest on provisional secondary evidence") is accurate.

Reasoning / knowledge:

- AA-GPQA Diamond: **68.0%** (mid band).
- AA-HLE: **4.2%** (very low).
- CritPt (hard physics reasoning): **0.0%** (floor).
- AA-LCR (long-context reasoning): **36.0%** (low-mid).
- AA-Omniscience: Index **−39.6%**, Accuracy **25.0%**, Hallucination Rate **86.0%** (very poor knowledge reliability — worse than Mistral Small 4's 66.6%).
- Artificial Analysis Intelligence Index: **N/A** (deprecated). BenchLM shows a stale cached **9.3%**; AA's live page reads N/A.

Coding:

- AA Coding Index: **20.1%** (low).
- AA-SciCode: **36.6%** (low-mid).
- AA-IFBench (instruction following): **36.2%** (low-mid).
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / DeepSWE absolute: **no verified public number found.**

Agent / tool use:

- τ²-bench: **24.6%** (low-mid; below Mistral Small 4's 41.2%).
- GDPval-AA: Elo **588**, normalized **0.0%** (below the mid band of ~900–1200).
- AA Agentic Index: **2.4%** (near-floor).
- Terminal-Bench / BFCL / Claw-Eval / Toolathon: **no verified public number found.**

Multimodal (vision):

- AA-MMMU-Pro: **55.7%** (moderate visual reasoning; frontier ~89%+). Native text + image input; no video/audio; text-only output.

Long context:

- 256K-token window verified; AA-LCR 36.0%. No RULER/MRCR retrieval percentage published.

> Provenance & meta verification:
> - **`model/mistral-large-3/meta.json` is ACCURATE and well-curated** — 675B/41B Apache-2.0 open-weight MoE, 256K, "Text, image in; text out", $0.50/$1.50 (+ free self-host), `noFreeId: true`, correct standout ("sovereign, Apache-licensed, vision-capable open-weight flagship … one generation's remove from the frontier") and an honest deprecation tradeoff. Every field is corroborated by the AA page + official Mistral + docs.mistral.ai + llm-stats. No premise-correction needed on meta.json.
> - **DISCREPANCY — BenchLM metadata table is wrong on two cells** (premise-correction against the primary source): it lists *Source Type: Proprietary* and *Context Window: 128K*. Artificial Analysis (the source BenchLM itself cites), the official Mistral "Introducing Mistral 3" post ("one of the best permissive **open weight** models"), docs.mistral.ai ("open-weight … multimodal … MoE") and llm-stats (262K) all confirm **Apache 2.0 open weights** and **256K**. I score on the corrected open-weight / 256K facts, not BenchLM's metadata cells. BenchLM's benchmark *rows* (AA-sourced) are used as-is.

### Normalized scores (1–100)

- **Tool use: 46/100.** τ²-bench 24.6% is only low-mid (below Small 4's 41.2%), GDPval-AA Elo 588 (normalized 0.0%) is under the rubric's mid band (~900–1200), and the AA Agentic Index is near-floor at 2.4%; no Terminal-Bench/BFCL/Claw-Eval verified — just below the bottom of the mid band.
- **Reasoning: 49/100.** AA-GPQA Diamond 68.0% is mid, but HLE 4.2%, CritPt 0.0%, LCR 36.0% and an 86.0% hallucination rate (Omniscience Index −39.6) are weak, and the AA Intelligence Index is N/A (deprecated; stale 9.3) — below the rubric's mid band (Index 20–35) on reliability and hard reasoning.
- **Context window: 70/100.** Verified 256K window sits inside the 200K–500K tier (200K ≈ 70); held at the bottom of that band because no RULER/MRCR retrieval percentage is published and AA-LCR (36.0%) is the weakest long-context signal of the current Mistral set.
- **Multimodal: 62/100.** Native text + image input with a verified AA-MMMU-Pro 55.7%; in the "+image in" band (60–70), capped by no video/audio input and text-only output.
- **Coding: 53/100.** AA Coding Index 20.1% and SciCode 36.6% are low and IFBench 36.2% is only low-mid, with no absolute SWE-bench Verified / Terminal-Bench / LiveCodeBench number — below the rubric's mid coding band and weaker than Small 4.
- **Cost efficiency: 90/100.** $0.50/$1.50 per 1M (blended ~$0.29, 90% cache discount) is "better than average" vs AA medians, and Apache 2.0 open weights give a $0-licence self-host path; held below Small 4's 96 because it is ~3× pricier, slower (79 vs 146 tok/s), needs heavy multi-GPU infra to self-host a 675B MoE, and is deprecated.
- **Overall Score: 56/100.** Half-up mean of the five quality dims (46 + 49 + 70 + 62 + 53) / 5 = 56.0 → 56. **Divergence −7.9 vs the 2-rater cohort (63.9):** consistent with my Mistral Small 4 read (−7.5), I weight the near-floor independent signals more heavily per the rubric anchors — AA Agentic Index 2.4%, GDPval 588 (normalized 0.0%), CritPt 0.0%, an 86.0% hallucination rate and a deprecated/N-A Intelligence Index — which pull Tool use and Reasoning below the cohort; I offset slightly on Cost (open-weight Apache 2.0 self-host). Ordering is coherent: Large 3 (56) < Small 4 (59), matching both the cohort (63.9 < 66.5) and the raw benchmarks (Large 3 is weaker on τ²-bench, GPQA, LCR, Coding Index, IFBench and hallucination, and is a deprecated generation behind). Best fit: a sovereign, self-hostable, vision-capable open-weight flagship for cost-sensitive multimodal chat/document work — but validate reasoning and agentic tool use yourself, and prefer Mistral Large 4 for current deployments.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-09
- Method: public internet research (Artificial Analysis model page — the primary cited source — plus BenchLM aggregate, the official Mistral "Introducing Mistral 3" post and docs.mistral.ai, all fetched 2026-11-09); scores are normalized 1–100 interpretations against the `model-comparison.md` rubric, not official vendor scores. Benchmark rows are AA last-measured values via BenchLM for a model AA marks deprecated (composite Intelligence Index N/A). Two BenchLM metadata errors (Proprietary, 128K) were corrected against the primary source. No score is invented where a benchmark is absent.
- Reference URLs:
  - [Artificial Analysis — Mistral Large 3 (primary: deprecated notice → Large 4 Preview; 675B/41B MoE, Apache 2.0 open weights, 256K, text+image in/text out, non-reasoning, $0.50/$1.50, 79 tok/s, 3.26s TTFT, Intelligence Index N/A)](https://artificialanalysis.ai/models/mistral-large-3)
  - [BenchLM — Mistral Large 3 (Overall 34.11/100, #161/1016, 16/759 coverage; AA-sourced rows: GPQA 68.0%, HLE 4.2%, CritPt 0.0%, LCR 36.0%, MMMU-Pro 55.7%, SciCode 36.6%, Coding Index 20.1%, τ²-bench 24.6%, GDPval 588, Agentic Index 2.4%, IFBench 36.2%, Hallucination 86.0%; metadata table wrongly lists Proprietary/128K)](https://benchlm.ai/models/mistral-large-3)
  - [Mistral AI — "Introducing Mistral 3" (official launch, 2025-12-02: Large 3 among the best permissive open-weight models, trained on ~3,000 NVIDIA H200 GPUs)](https://mistral.ai/news/mistral-3/)
  - [docs.mistral.ai — Mistral Large 3 (25-12): state-of-the-art, open-weight, general-purpose multimodal MoE](https://docs.mistral.ai/models/mistral-large-3-25-12)
- Future sources: a maintained AA Intelligence Index (currently N/A post-deprecation), an absolute SWE-bench Verified / Terminal-Bench number, or a RULER/MRCR retrieval score at 256K would let a future pass lift Reasoning, Coding and Context; add a new file beside this one using the same headings. For current work, prefer the successor Mistral Large 4 (BenchLM 52.59).
