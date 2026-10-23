# Qwen 3.8 — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen-3.8`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (Qwen3.8-27B)
- **Short description:** Alibaba's **dense 27B open-weight multimodal model** (Apache 2.0) and the *deployable* half of the Qwen3.8 generation — roughly a hundredth the size of the 2.4T-MoE Qwen3.8-Max, but the checkpoint most teams can actually run on a single high-end GPU. A **native vision-language model** (text + image + video in) built on the Qwen 3.5 hybrid-attention backbone, positioned for **local, long-horizon agent and coding work**. On Alibaba's own (disclosed-harness) table it beats Claude Opus 4.6 Max on SWE-bench Pro, OSWorld and MathVision, but its only independent signal — Artificial Analysis Intelligence Index **34** — is modest in absolute terms and its widest margins sit on modified or in-house benchmarks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.8-27B`, `Qwen/Qwen3.8-27B-FP8`) and ModelScope under **Apache 2.0** (commercial use permitted, no revenue share — confirmed in the license file, unlike Qwen3.8-Max's bespoke license). No first-party Alibaba hosted price at launch (Qwen Cloud was "coming soon"/404 on 2026-08-17); served via OpenRouter, DeepInfra, Alibaba Cloud/Model Studio, CoreWeave, Parasail, Multiverse, Crusoe and others (8+ tracked providers). Self-host via vLLM (Ascend NPU), SGLang, HF Transformers ≥5.8.0, llama.cpp/GGUF, Ollama.
- **Release / knowledge:** Released **2026-08-14** (HF repo created Aug 13; weights for Max landed Aug 12). Knowledge cutoff not disclosed in the sources reviewed.
- **IDs:** `opencode/qwen-3.8`; weights `Qwen/Qwen3.8-27B` (+ `-FP8`).
- **Context window:** **262,144 tokens native** (~384 A4 pages), extendable to **1,000,000 via YaRN** — with Alibaba's own model-card caveat that common OSS frameworks apply YaRN *statically* and "can lose accuracy on shorter inputs," so the 1M is an extension, not a native, guarantee.
- **Modalities:** **text + image + video in → text out** (native VLM — full vision encoder, `language_model_only=false`; *not* the text-only Max checkpoint early coverage described). **No audio.** Reasoning model with flexible thinking control (effort levels **low / medium / xhigh**); function calling, structured output and prompt caching supported on host providers.
- **Pricing (as of 2026-10-23):** self-host **$0** (Apache 2.0). Hosted varies widely by provider: DeepInfra **$0.15 in / $1.875 out** (promo; list $0.20/$2.50, cache $0.038); OpenRouter **~$0.45 / $3.20** (route-dependent; a free tier exists); Alibaba Cloud/Model Studio **$0.42–$0.50 / $3.00**. Cost per AA Intelligence-Index task ≈ **$0.82**; ~$56 GB VRAM at BF16, ~28 GB FP8, ~14–16 GB 4-bit (24 GB+ GPU / RTX 4090 recommended).
- **Architecture:** **Dense** 27,781,427,952 params (27.78B incl. vision encoder; "27B" is the LM count) — *not* MoE, all params active. 64 layers, hidden dim 5,120, **hybrid attention: 48 Gated DeltaNet linear-attention layers + 16 full gated-attention layers** (3 linear : 1 full, `full_attention_interval: 4`); built-in **multi-token-prediction (MTP)** draft head for speculative decoding; shares the hybrid backbone of the Qwen3.8-2.4T-A95B flagship. FP8 variant uses fine-grained block-128 quantization ("nearly identical" per Alibaba).

### Raw benchmarks found

Coding & agent (Alibaba's own table; harness **disclosed** — Claude Code, temp 1.0, top_p 0.95, 256K context; Opus 4.6 Max SWE-bench Pro uses its officially reported score):

- **SWE-bench Pro: 61.7%** — beats Claude Opus 4.6 Max (53.4%), Qwen3.7-Plus (57.6%), Muse Glimmer-30B (51.2%)
- **LiveCodeBench v6: 90.3%** — leads Opus 4.6 Max (88.8%)
- **Terminal-Bench 2.1: 73.0%** — behind Opus 4.6 Max (78.2%), well ahead of Muse Glimmer-30B (51.7%); up from Qwen3.6-27B's 63.4%
- **DeepSWE 1.1: 42.2%** — the largest generational jump (vs Qwen3.6-27B's 13.3%), but modest in absolute frontier terms
- **IFBench (instruction following): 79.5%** — leads Opus 4.6 Max (62.5%) and Muse Glimmer-30B (77.0%)
- **SWE-MM: 38.6%** (up from 25.7%)
- QwenSWEBench **79.0%** (vs Opus 4.6 Max 63.8%) and CoWorkBench **70.7%** (vs 68.2%) — **in-house benchmarks**, one-line descriptions, no published task list/sample size → not independently checkable

Reasoning / knowledge:

- **GPQA Diamond: 89.2%** — below Opus 4.6 Max (91.3%), above Muse Glimmer-30B (83.5%)
- **HLE (Humanity's Last Exam): 30.8%** — clearly below Opus 4.6 Max (40.0%); a real weakness
- **Artificial Analysis Intelligence Index: 34** (xhigh) — the sole independent signal; modest in absolute terms (DeepSeek V4.1 Flash ≈ 39–40, MiMo-V2.6-Pro 46.32) but **strong for its open-weight size class** (median 8). Very verbose: ~200M output tokens in the Index eval (median 76M).

Multimodal (vision; Alibaba's table):

- **MathVision: 90.0%** — far above Opus 4.6 Max (65.5%)
- **OSWorld-Verified: 84.3%** — well above Opus 4.6 Max (72.7%); up from Qwen3.6-27B's 63.9%
- **AndroidWorld: 81.9%** — well above Opus 4.6 Max (62.0%)
- Native image + video input (no audio); no MMMU/MMMU-Pro figure published in the sources reviewed

> Provenance: The benchmark table is **Alibaba vendor-run**, but unusually transparent — the harness and sampling (Claude Code, temp 1.0, top_p 0.95, 256K) are disclosed, which is more than most vendor comparisons offer. Two material caveats: (1) Alibaba states it **"corrected problematic tasks" in SWE-bench Pro and re-evaluated all baselines on the amended set**, and **fixed ground-truth annotations in MathVision and CharXiv** — so those scores are **not directly comparable** to numbers on the unmodified benchmarks; (2) its widest margins (QwenSWEBench, CoWorkBench) are **in-house benchmarks with no published task list or sample size**. The only neutral signal is **Artificial Analysis Index 34 (xhigh)** — modest absolutely, strong for a 27B dense open-weight model. Speed is provider-dependent (DeepInfra ~29 t/s, Alibaba ~44 t/s, Multiverse/Crusoe ~191 t/s; median ~93 t/s) and verbosity (~200M eval tokens) inflates real cost. Per methodology, vendor figures are treated as an upper bound and discounted against neutral harnesses; no benchmark was invented. Specs were independently verified against DeepInfra/Artificial-Analysis and DataNorth coverage rather than inherited from the folder's scaffolded `meta.json`.

### Normalized scores (1–100)

- **Tool use: 83/100.** Genuinely strong computer-use and agentic results for a 27B dense model — **OSWorld-Verified 84.3%** and **AndroidWorld 81.9%** both well above Claude Opus 4.6 Max, DeepSWE 1.1 42.2%, plus function calling, structured output, prompt caching and flexible thinking control. Held below the frontier because everything is vendor-run, **DeepSWE (42.2) is modest in absolute terms**, the independent AA Index is only 34, and it targets local/single-GPU agent work rather than frontier long-horizon autonomy.
- **Reasoning: 80/100.** Mixed: **LiveCodeBench v6 90.3%** and **IFBench 79.5%** lead Opus 4.6 Max and GPQA Diamond 89.2% is solid, but **HLE 30.8% is clearly weak** (vs Opus 4.6 Max 40.0%) and the independent **AA Index (34)** caps the ceiling — strong for its size class (median 8), modest against the frontier. Scored conservatively without borrowing the larger Max/Plus siblings' numbers.
- **Context window: 85/100.** A large **262,144-token native** window is a real strength for a self-hostable model, but the headline **1M is a YaRN extension** that Alibaba itself warns "can lose accuracy on shorter inputs" under common static-OSS implementations, and **no MRCR-style long-context recall benchmark is published** — so it sits below native-1M leaders (88–93).
- **Multimodal: 84/100.** A **native vision-language model** (text + image + video; no audio) with strong vendor vision results — **MathVision 90.0%** and **OSWorld-Verified 84.3%** far above Opus 4.6 Max, AndroidWorld 81.9%. Discounted because those figures are Alibaba-run (MathVision is among the annotation-corrected sets), there is **no MMMU/MMMU-Pro** number, and there is no audio path.
- **Coding: 85/100.** The standout dimension for its class: **SWE-bench Pro 61.7% beats Claude Opus 4.6 Max (53.4%)**, **LiveCodeBench v6 90.3% leads**, Terminal-Bench 2.1 73.0% is solid — remarkable for a dense 27B on a single GPU. Held below the high-80s because the SWE-bench Pro figure is on Alibaba's **amended** task set (not comparable to the unmodified benchmark), **DeepSWE 1.1 (42.2) and SWE-MM (38.6) are weak** in absolute terms, the widest margins are on **unverifiable in-house** QwenSWEBench/CoWorkBench, and 61.7% still trails the true frontier (Opus 4.7 64.3%, Fable 5 80.0%).
- **Cost efficiency: 92/100.** Exceptional deployability value — **Apache 2.0 open weights ($0 self-host)** on a single 24 GB GPU (~17 GB quantized), FP8 variant, and hosted from ~$0.15/$1.875 (DeepInfra) with ~$0.82 per Index task. Tempered below the MIT Flash models (96–97) because **hosted output is pricier ($1.875–$3.20 vs MiMo Flash's $0.28)** and the model is **very verbose (~200M eval tokens)** and slow on budget endpoints, so real-world token spend is higher than the sticker input rate implies. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 83/100.** Mean of Tool 83 + Reasoning 80 + Context 85 + Multimodal 84 + Coding 85 = 83.4 → 83. Best fit: **the self-hoster's dense sweet spot** — a single-GPU, Apache-2.0, native-vision agent/coding engine for local long-horizon tool calling, visual/document extraction, repo work and office workflows where data sovereignty and $0 weights matter and frontier-tier depth is not required; escalate the hardest reasoning/security/long-horizon tasks to Qwen3.8-Max/Plus or a closed frontier model. Independent read: my 83 sits **below the queue's curated 88.2** because I discount the vendor-only table (amended SWE-bench Pro/MathVision, in-house QwenSWEBench/CoWorkBench), weight the modest independent AA Index (34) and weak HLE (30.8), and treat the 1M window as a caveated YaRN extension — landing just below the larger open-weight DeepSeek V4.1 Flash / MiMo V2.6 Flash (both 84), consistent with its smaller size and lower independent index.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (DataNorth's "Alibaba releases Qwen3.8-27B" spec/benchmark breakdown of Alibaba's disclosed-harness table, 2026-08-17; DeepInfra's "Qwen3.8-27B API Provider Benchmarks," 2026-10-07, citing Artificial Analysis for the independent Index/speed/verbosity and provider pricing). Specs were independently verified rather than inherited from the folder's scaffolded `meta.json`; the `qwen-3.8` slug was resolved to the Qwen3.8-27B dense open-weight model via its model-card identity. All capability figures are Alibaba vendor-run (harness disclosed) with amended/in-house-benchmark caveats; the sole neutral signal (AA Index 34) is weighted accordingly. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
