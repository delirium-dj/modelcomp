# Qwen3.8-27B — findings by Qwen 4 Max

- Source: Vendor (Alibaba/Qwen) + independent trackers; subject slug `qwen-3.8-27b`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.8-27B (`qwen3.8-27b`)
- **Short description:** Compact deployment-friendly **dense** native vision-language model of the Qwen3.8 generation — builds on Qwen3.6-27B with gains in coding, office productivity, and long-horizon agentic reliability; the open-weights companion to Qwen3.8-Max.
- **Provider/access:** Open weights on HF (`Qwen/Qwen3.8-27B`, **Apache 2.0**; Transformers/vLLM/SGLang/TokenSpeed); Alibaba Cloud Model Studio hosted API (function calling, structured outputs, web search, prefix completion, context caching; no batch, no fine-tuning); Qwen Cloud hosted 1M-context version "coming soon"; OpenRouter and 13 AA-tracked providers; Chutes TEE variant.
- **Release/knowledge:** Released **August 14 2026** (AA FAQ; press Aug 17). Built on the Qwen3.5 architectural foundation; knowledge cutoff not published.
- **IDs:** `qwen3.8-27b`; HF `Qwen/Qwen3.8-27B`. Distinct from Qwen3.8-Max (2.4T MoE), Qwen3.8-Flash/Flash-Next, and Qwen3.6-27B.
- **Context window:** **262,144 native, extensible to 1,000,000** (HF; YaRN per press). Model Studio hosted: 1M window / 991,808 in (983,616 thinking) / 131,072 out / 262,144 CoT. AA lists 256K, BenchLM 262K — labelled rounding/serving-tier conflicts.
- **Modalities:** Text + image + video in (hour-scale video claimed); text out. No audio.
- **Pricing (as of 2026-11-12, per 1M tokens):** Model Studio Singapore/international **$0.50 in / $3.00 out**, implicit cache $0.10, explicit create $0.625 / read $0.05; Beijing $0.424/$1.696 (cache $0.085). AA: 80% cache discount, blended $0.47, **$3.53 per Intelligence Index task**. OpenRouter lists $0.035/$1.50 (anomalous input price — labelled, not averaged). Self-host free (Apache 2.0).
- **Architecture:** Dense 27B causal LM + vision encoder; 64 layers, hidden 5120, layout 16×(3×(Gated DeltaNet→FFN) + 1×(Gated Attention→FFN)), GDN 48V/16QK heads dim 128, GA 24Q/4KV heads dim 256, FFN 17,408, vocab 248,320 padded, MTP multi-step. Thinking on by default (disable per request); `reasoning_effort` **xhigh (default)/medium/low**; `preserve_thinking` on by default. AA tracks xhigh.

### Raw benchmarks found

Vendor-reported (HF model card; Claude Code harness temp 1.0/top_p 0.95/256K for SWE-Pro, DeepSWE 1.1, NL2Repo, QwenSWEBench avg@3 8h; HLE judged by GPT-4o; peers Qwen3.6-27B / Qwen3.7-Plus / Muse Glimmer-30B / Opus 4.6 Max):
- Coding: TB2.1 Terminus 73.0, SWE-bench Pro 61.7 (beats Opus 4.6 Max 53.4), NL2Repo 42.3, DeepSWE 1.1 42.2, QwenSWEBench 79.0 (in-house), LiveCodeBench v6 90.3.
- Agent: CoWorkBench 70.7, JobBench 33.4, ALE Pass@1 20.4 / Score 42.9, OSWorld-Verified 84.3 (beats Opus 4.6 Max 72.7), WebArena-Verified 64.8, AndroidWorld 81.9, RecreationBench 47.1 (in-house), ClawEval-MM 57.4 pass@3 / 56.9 avg, SWE-MM 38.6, Vision2Web 62.9 (judge gpt-5.4).
- General: IFBench 79.5, GPQA Diamond 89.2, HLE 30.8 no-tools.
- Vision: MathVision 90.0 / 94.6 with CI, BabyVision 65.7 / 85.6 with CI, CharXiv RQ 83.7 / 90.2 with CI, OmniDocBench 1.5 91.1, RealWorldQA 85.9, ERQA 65.5.

Independent runs:
- Artificial Analysis (xhigh, v5.0.1, live 2026-11-12): **Intelligence Index 20, #2/10 open-weights small class** (median 8); Agentic 46.5, GDPval-AA 1427 (normalized 45.9%), Briefcase 1391, AutomationBench-AA 48.2, EnterpriseOps 44.2, τ³-Banking 48.0, TB2.1 79.8 (AA run), **TB4.0 5.6**, GDP.pdf 16.4, Coding Index 68.1, SciCode 46.6, GPQA-D 90.5, AA-HLE 33.9, LCR 82.0, CritPt 5.4, MLCR 22.8, MMMU-Pro 76.3, Omniscience −6.4 (accuracy 17.3, **hallucination 28.6** — low), Cyber Index 12.7, CWE 26.7, CyberGym-E2E 0.0. Performance: **44 tok/s, TTFT 129.37s, 41.9 min/task** (class median 13.3), 128M output tokens (very verbose; median 77.7M).
- Vals AI: SWE 86.0, TB2.1 58.4, LCB 84.0, GPQA 88.9, MMLU-Pro 84.3. VulcanBench v3 82.6; LlamaIndex ExtractBench 89.75 / ParseBench 69.03; BugHunt 15 fixes; MazeBench 0.
- BenchLM aggregate: 54.37/100, **#76 of 1026** (78/815 rows, partial coverage).

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-V 84.3 (vendor, beats Opus 4.6 Max), AndroidWorld 81.9, WebArena-V 64.8, ALE 42.9, AA Agentic 46.5, GDPval 1427 (45.9%), Briefcase 1391, τ³ 48.0 — exceptional computer-use for a 27B dense model; TB4.0 5.6 and JobBench 33.4 show hard-terminal limits.
- **Reasoning: 78/100.** GPQA 90.5 (AA), HLE 33.9 (AA) / 30.8 vendor, AA index 20 (#2 open-small, median 8), low 28.6% hallucination; dragged by CritPt 5.4, Omniscience accuracy 17.3, no published AIME/FrontierMath — strong knowledge-reasoning, weak frontier math/physics.
- **Context window: 82/100.** 262K native → 1M YaRN/hosted with **LCR 82.0** (matches the GPT-5.4 anchor) and 131K output; MLCR 22.8 weak, no long-context surcharge reported, AA tracks the 256K serving tier — prevents the 87+ tier.
- **Multimodal: 82/100.** Native image+video: MathVision 94.6 CI, CharXiv 90.2 CI, BabyVision 85.6 CI, OmniDocBench 91.1, ExtractBench 89.75, SWE-MM 38.6, Vision2Web 62.9; MMMU-Pro 76.3 (AA) mid-pack; no audio.
- **Coding: 83/100.** SWE-Pro 61.7 (beats Opus 4.6 Max 53.4 and Qwen3.7-Plus 57.6), LCB v6 90.3, Vals SWE 86.0, AA Coding 68.1, TB2.1 73.0 vendor / 79.8 AA, QwenSWEBench 79.0; DeepSWE 42.2 and TB4.0 5.6 keep it below the 85+ flagship tier.
- **Cost efficiency: 62/100.** Hosted API is expensive for its class: $0.50/$3.00 (class medians $0.12/$0.30), **$3.53/task**, 41.9 min/task, TTFT 129.37s, 44 tok/s, very verbose 128M tokens; redeemed partially by Apache 2.0 single-GPU-class self-hosting, 80% cache, cheaper Beijing region and third-party hosts.
- **Overall Score: 81.4/100.** Mean of the five quality dimensions (Cost excluded): (82+78+82+82+83)/5 = 81.4. The strongest open-weights small model on AA's index (#2/10, median 8) with flagship-beating computer-use and SWE-Pro rows — above Qwen3.7-Plus (79.4), below Qwen3.8-Max (84.2); hosted-API verbosity and price are its main weaknesses.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (HF official model card, Alibaba Cloud Model Studio docs, Artificial Analysis live, BenchLM, OpenRouter/datanorth/regolo snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: context (262,144 native/1M hosted official vs 256K AA vs 262K BenchLM); pricing ($0.50/$3.00 Alibaba Singapore/AA vs $0.424/$1.696 Beijing vs $0.035/$1.50 OpenRouter listing); TB2.1 (73.0 vendor Terminus vs 79.8 AA vs 58.4 Vals — harness differences); HLE (30.8 vendor GPT-4o-judged vs 33.9 AA); GPQA (89.2 vendor vs 90.5 AA vs 88.9 Vals); regolo.ai's "beats Opus 4.6 Max on every test" headline contradicted by the vendor's own table (Opus wins TB2.1/GPQA/HLE/NL2Repo). Perplexity-panel rows on BenchLM belong to the derivative pplx-decider-v1-27b, not this model — excluded.
- Reference URLs:
  - [Qwen3.8-27B model card — Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [qwen3.8-27b Model Info — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-27b)
  - [Qwen3.8 27B (Xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-27b)
  - [Qwen3.8-27B Benchmark Scores — BenchLM](https://benchlm.ai/models/qwen3-8-27b)
  - [Qwen3.8 27B API pricing — OpenRouter](https://openrouter.ai/qwen/qwen3.8-27b)
  - [Alibaba releases Qwen3.8-27B open weights — DataNorth](https://datanorth.ai/news/alibaba-releases-qwen3-8-27b)
  - [Qwen3.8-27B benchmarks — Regolo (marketing claims, verified against vendor table)](https://regolo.ai/qwen3-8-27b-benchmarks-every-test-where-alibabas-27b-model-beats-claude-opus-4-6-max/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.