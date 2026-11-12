# Qwen3.8-Flash — findings by Qwen 4 Max

- Source: Alibaba (Qwen)/qwen-3.8-flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash (production API SKU `qwen3.8-flash`)
- **Short description:** Alibaba's Aug 26, 2026 budget flash tier — the production service built on **Qwen3.8-Flash-Next**, the first open-weight release of the Qwen3.8-Next architecture ("the architecture that will underpin Qwen4"). Per the official HF note, the production SKU is Flash-Next **plus production features (1M context by default, official built-in tools) — not literally the same checkpoint**. ~12× cheaper than Qwen3.8-Max. All published benchmark rows are Flash-Next checkpoint runs (vendor self-reported); independent verification at launch was essentially nonexistent (deep-dive caveat).
- **Provider / access:** Qwen Cloud (`qwencloud.com/models/qwen3.8-flash`), Alibaba Cloud Model Studio (Beijing / Singapore / international), open weights on HF + ModelScope (`Qwen/Qwen3.8-Flash-Next`, **qwen-community-1.0 license — not Apache**), third-party hosts (opper: 262K/262K at $0.20/$0.50, cache $0.05; Requesty). Thinking mode **default on, `reasoning_effort` xhigh default (xhigh/medium/low)**; `preserve_thinking` on by default (full reasoning trace across turns, better KV-cache reuse).
- **Release / knowledge:** Released 2026-08-26 (qwen.ai blog + deep-dive). Tech report: *On the Design of Qwen3.8-Next Architecture: Evaluation, Efficiency, and Training Stability* (Qwen Team, Aug 2026). Knowledge cutoff not published.
- **IDs:** `qwen3.8-flash` (production) ≠ `Qwen3.8-Flash-Next` (open checkpoint) ≠ `qwen3.8-omni-flash` ≠ Qwen3.8-27B ≠ Qwen3.7-Plus. Successor to Qwen3-Next-80B-A3B lineage (deep-dive).
- **Context window:** **1M by default in production** (Model Studio: max input 991,808; 983,616 with thinking; max output **131,072**; thinking chain **262,144**). Checkpoint: **262,144 native**, extensible to 1M via **static YaRN** (factor 4.0) — vendor warns static scaling can degrade shorter texts. No independent LCR/MRCR/needle rows exist for either variant.
- **Modalities:** **Image, text, video in; text out** (Model Studio; HF `image-text-to-text`). No audio input. Hour-scale video supported (vendor recommends `longest_edge` 469,762,048 ≈ 224k video tokens for higher frame-rate sampling).
- **Pricing (as of 2026-11-12):** **$0.15 in / $0.47 out per 1M** (qwen.ai blog) vs **$0.16 in / $0.47 out** (Requesty + deep-dive) — conflict labelled, never averaged. Model Studio: Beijing **¥0.8/¥2.7** (cache hit ¥0.1; explicit cache creation ¥1.25 — **non-standard cache rates**, confirmed by Alibaba's context-cache doc), international **¥1.094/¥3.427** (hit ¥0.117). Batch 50% (Beijing only); web-search tool Beijing + Singapore only; function calling / structured output / prefix continuation / context caching all regions; no fine-tuning; RPM 30K / TPM 5M. Speed/TTFT unmeasured (no AA coverage).
- **Architecture:** 125B total / **6B activated** + **51B N-gram embedding** (20M bigram/trigram entries injected at layer 2, host-RAM offloadable) + 4B MTP (1 layer, multi-step) ≈ 180B stored / ~6B computed. 48 layers = 12 × (3 × (Gated DeltaNet → MoE) → 1 × (Qwen Sparse Attention → MoE)); QSA micro-block budget 512 blocks / 2048 tokens (24 Q / 2 KV heads, dim 256); GDN 48 V / 16 QK heads, dim 128; 512 experts, 10 routed + 1 shared; **Gated Residual** 4 branches, rank 320; Muon + AdamW, no batch-size warmup.

### Raw benchmarks found

Vendor-reported — **all rows are Qwen3.8-Flash-Next checkpoint runs** (HF README tables, self-reported, harness footnotes; production SKU assumed close but not identical):

- Coding: DeepSWE 1.1 **58.7** (Claude Code + mini-SWE best-of, temp 1.0/top_p 0.95/256K), SWE-Pro **62.5** (CC harness, refined benchmark — Claude-Opus-4.6 Max 53.4 in the same table), SWE-Multilingual **81.0** (mini-SWE), NL2Repo **48.1** (CC, anti-reward-hacking), LiveCodeBench v6 **91.9**
- Agentic/tool: CoWorkBench **73.9** (in-house), JobBench **55.7**, ALE Pass@1 **24.3** / Score **51.2**, Toolathlon-V Pass@1 **73.5**, IFBench **81.3**, AndroidWorld **84.5**, OSWorld 2.0 Binary **19.4** / Partial **52.3**
- Reasoning: GPQA **91.7**, HLE **35.9** (GPT-4o judge — weaker judge than frontier runs)
- Vision: ClawEval-MM Pass@3 **64.4** / Avg 60.4, RecreationBench **49.9** (in-house), Vision2Web **64.0** (CC, gpt-5.4 judge), ERQA **72.3**, LVBench **76.6**, RealWorldQA **88.5**, MathVision **90.6** / 95.7 CI, CharXiv RQ **84.6** / 90.6 CI
- Peer columns (same tables): Qwen3.8-27B (DeepSWE 42.2), Qwen3.7-Plus 397B/17B (16.5), DeepSeek-V4-Flash-0731 284B/13B (54.4), Claude-Opus-4.6 Max

Independent runs:

- **None for the production SKU** — Artificial Analysis and BenchLM both return 404 for `qwen3-8-flash` (untracked). BenchLM's *checkpoint* page (`qwen3-8-flash-next`) carries an **estimated** aggregate **55.72/100, #68 of 214** (25 rows, estimate — not live independent runs). No AA index, no $/task, no tok/s, no LCR/Omniscience rows exist.

### Normalized scores (1–100)

- **Tool use: 84/100.** Toolathlon-V **73.5**, AndroidWorld **84.5**, CoWorkBench 73.9, JobBench 55.7, ALE Score 51.2, production built-in tools + web search; capped by OSWorld 2.0 Binary **19.4** (far below the frontier 60–80 band), ALE Pass@1 24.3, regional tool limits, and zero independent agentic runs.
- **Reasoning: 83/100.** GPQA **91.7**, LCB v6 91.9, MathVision 90.6 — strong for 6B active params; capped by HLE **35.9** (GPT-4o judge), no CritPt/FrontierMath/Omniscience rows, and vendor-only evidence.
- **Context window: 83/100.** 1M default in production with 131,072 output + 262,144 thinking chain and preserved-thinking KV reuse; deducted for 262,144 **native** checkpoint context (1M via static YaRN with a short-text degradation warning), zero independent retrieval/needle evals, and Batch/web-search region limits.
- **Multimodal: 84/100.** Image + video in, CharXiv **84.6** (90.6 CI), MathVision 90.6, RealWorldQA 88.5, LVBench 76.6, hour-scale video support; capped by no audio input, no MMMU-Pro row, Vision2Web 64.0 / RecreationBench 49.9 mid-band, and OSWorld binary 19.4.
- **Coding: 85/100.** SWE-Pro **62.5** (beats Opus 4.6 Max 53.4 on the same refined harness), DeepSWE **58.7** (above DS-V4-Flash-0731's 54.4), SWE-Multilingual 81.0, LCB v6 91.9, NL2Repo 48.1; capped by vendor-only runs, DeepSWE below the frontier 65–79 band, and no SWE-bench Verified/TB4/FrontierCode rows.
- **Cost efficiency: 95/100.** $0.15–0.16/$0.47 (~12× cheaper than Qwen3.8-Max), cheap cache hits (¥0.1/¥0.117), Batch 50% (Beijing), open weights with host-RAM N-gram offload for memory-constrained local inference; deducted for non-standard cache-creation pricing (¥1.25), regional feature limits, and unmeasured speed (no AA throughput data).
- **Overall Score: 83.8/100.** Mean of the five quality dims (84+83+83+84+85)/5 = 83.8. Best-fit: high-volume budget agentic/coding workloads, multimodal (image/video) pipelines at ~$0.15/$0.47, and local inference on memory-constrained hardware — remarkable quality-per-active-param (6B), but every score rests on vendor self-reported checkpoint runs with no independent verification of the production SKU.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Alibaba Cloud Model Studio official page fetched in full, official HF Qwen3.8-Flash-Next README fetched in full incl. both benchmark tables + harness footnotes, local-ai-zone independent deep-dive, Requesty rate card + qwen.ai announcement via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **input price $0.15 (qwen.ai blog) vs $0.16 (Requesty/deep-dive)**; **checkpoint identity** — production `qwen3.8-flash` = hosted Flash-Next + 1M default + built-in tools, NOT literally the same checkpoint (official HF note), so all benchmark rows are attributed to the Flash-Next checkpoint as proxy evidence; HLE 35.9 uses a GPT-4o judge (not comparable to frontier-judge HLE runs); OSWorld 2.0 Binary 19.4 vs Partial 52.3 are different metrics. **AA and BenchLM both 404 for the production SKU** — no independent index, $/task, throughput, or retrieval evals exist; BenchLM's 55.72 (#68/214) is an *estimated* aggregate for the open checkpoint, never treated as a live run. Identity: qwen3.8-flash ≠ Qwen3.8-Flash-Next ≠ qwen3.8-omni-flash ≠ Qwen3.8-27B ≠ Qwen3.7-Plus ≠ Qwen3.8-Max.
- Reference URLs:
  - [Qwen3.8-Flash-Next: A New Architecture, Towards Ultimate Cost-Efficiency — Qwen](https://qwen.ai/blog?id=qwen3.8-flash-next)
  - [Qwen/Qwen3.8-Flash-Next — Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [qwen3.8-flash — Alibaba Cloud Model Studio](https://help.aliyun.com/en/model-studio/qwen3-8-flash)
  - [Qwen3.8-Flash-Next: A Deep-Dive — local-ai-zone](https://local-ai-zone.github.io/blog/qwen3-8-flash-next-deep-dive.html)
  - [Alibaba Cloud qwen3.8-flash API Pricing & Cost — Requesty](https://www.requesty.ai/models/alibaba/qwen3.8-flash)
  - [Qwen3.8-Flash Overview — Qwen Cloud](https://www.qwencloud.com/models/qwen3.8-flash)
  - [Qwen3.8-Flash-Next benchmark profile (estimated) — BenchLM](https://benchlm.ai/models/qwen3-8-flash-next)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.