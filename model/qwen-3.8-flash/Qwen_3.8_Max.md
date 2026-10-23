# Qwen 3.8 Flash — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen-3.8-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash (managed QwenCloud deployment of **Qwen3.8-Flash-Next**)
- **Short description:** Alibaba's **managed production deployment of the open-weight Qwen3.8-Flash-Next** — a **125B-parameter / 6B-active sparse MoE** that is an official **"experimental preview of the architecture that will underpin Qwen4."** On Qwen's vendor table it **beats Claude Opus 4.6 Max** on coding (**LiveCodeBench v6 91.9 vs 88.8**, **SWE-bench Pro 62.5 vs 53.4**, **SWE-bench Multilingual 81.0 vs 77.5**) and on office-agent work (**CoWorkBench 73.9 vs 68.2**, **JobBench 55.7 vs 36.6**), while activating a third of Qwen3.7-Plus's parameters at a claimed **~1/9 of its training cost** and beating it nearly everywhere. The managed `qwen3.8-flash` API defaults to a **~1M context (983,616), 131K output, built-in tools, xhigh reasoning**, at **$0.16/$0.47** per 1M. Trade-offs: **every benchmark is vendor-run with independent replication explicitly pending**; the largest margins land on Qwen's **in-house** CoWorkBench/JobBench; **HLE 35.9 trails Opus 4.6 Max's 40.0**; and it is **text+image only** (no audio, video unconfirmed).
- **Provider / access:** **Alibaba QwenCloud / Alibaba Cloud Model Studio** (managed API `qwen3.8-flash`, live ~Aug 27–28 2026, reasoning enabled by default); **open weights** on Hugging Face + ModelScope (as `Qwen3.8-Flash-Next`, BF16-style + official FP8); day-one runtimes **vLLM, SGLang, TokenSpeed**, Transformers-compatible. Powers the new **"Standard" mode on QwenWork** (Alibaba's AI working platform).
- **Release / knowledge:** Open-weight **Qwen3.8-Flash-Next released 2026-08-26** (weights + blog + technical report on GitHub); managed **`qwen3.8-flash` API live ~Aug 27–28, 2026**. Knowledge cutoff not stated in the sources reviewed.
- **IDs:** `qwen-3.8-flash` (managed) = production deployment of `Qwen3.8-Flash-Next` (open-weight); `opencode/qwen-3.8-flash`. Family: Qwen3.8 line — 27B (dense), **Flash-Next / Flash (125B/6B MoE)**, Plus (397B/17B), Max. **Identity note:** `qwen-3.8-flash` and the separate `qwen-3.8-flash-next` slug are the **same model, different deployment** — Flash-Next is the open-weight release (262,144 native, 1M via YaRN); Flash is the managed QwenCloud version (~1M default, built-in tools, $0.16/$0.47).
- **Context window:** Managed (this slug): **983,616 tokens (~1M) default, 131,072-token output cap** (the same output ceiling as Qwen3.8 Max). Open-weight (Flash-Next): **262,144 native, extensible to 1,000,000 via YaRN**.
- **Modalities:** **Natively multimodal — text + image in (vision encoder) → text out.** The official Alibaba Model Studio docs list **text-and-image input**; some secondary sources mention video, but the managed API listing does **not** confirm it. **Thinking model** — reasoning enabled by default at **xhigh** effort on the managed API.
- **Pricing (as of 2026-10-23):** Managed `qwen3.8-flash` on QwenCloud: **$0.16 / 1M input, $0.47 / 1M output**; cached input ~**$0.016/M**. Open-weight self-host: **$0** under the **Qwen Community License 1.0** (⚠ **not Apache-2.0**): free commercial use/deploy, but products **>100M MAU or >$20M monthly revenue must display the model name**, and **Model-as-a-Service / "AI Work Assistant" businesses need a separate Qwen license** (internal use exempt). Full repo **~360GB** (FP8 official); the 51B n-gram table offloads to host memory with async prefetch.
- **Architecture:** Causal LM with vision encoder. **125B main params, 6B activated/token**, plus **51B n-gram embeddings** (20M bigram/trigram entries at layer 2) and a **4B MTP head** (~180B stored). **48 layers: Gated DeltaNet (GDN) + Qwen Sparse Attention (QSA) hybrid** in a 12 × (3 × GDN-MoE + 1 × QSA-MoE) layout, **Gated Residual**, **512 experts (10 routed + 1 shared active)**. Muon optimizer. Trained at **~1/9 the cost of Qwen3.7-Plus** (397B/17B-active) while beating it nearly everywhere.

### Raw benchmarks found

Coding / agentic coding (Qwen official model card, **vendor-run**):

- **LiveCodeBench v6: 91.9** — vs Claude Opus 4.6 Max 88.8, Qwen3.8-27B 90.3, Qwen3.7-Plus 89.6, DeepSeek-V4-Flash 90.6 (**verifies meta.json's "LiveCodeBench 91.9%"**)
- **SWE-bench Pro: 62.5** — vs Opus 4.6 Max 53.4, Qwen3.8-27B 61.7, Qwen3.7-Plus 55.8, DeepSeek-V4-Flash 56.0
- **SWE-bench Multilingual: 81.0** — vs Opus 4.6 Max 77.5, Qwen3.8-27B 73.8, Qwen3.7-Plus 75.8
- **DeepSWE 1.1: 58.7** — vs Qwen3.8-27B 42.2, Qwen3.7-Plus 16.5, DeepSeek-V4-Flash 54.4
- **NL2Repo-Bench: 48.1** — vs Opus 4.6 Max 47.6, Qwen3.8-27B 42.3, Qwen3.7-Plus 41.1, DeepSeek-V4-Flash 54.2

Agent / tool use / office work (Qwen official model card, **vendor-run**; CoWorkBench & JobBench are **in-house**):

- **Toolathlon Verified: 73.5** — vs Qwen3.8-27B 67.1, DeepSeek-V4-Flash 70.3, Qwen3.7-Plus 50.6
- **CoWorkBench (office agents, in-house): 73.9** — vs Opus 4.6 Max 68.2, Qwen3.8-27B 70.7, Qwen3.7-Plus 65.1, DeepSeek-V4-Flash 45.1
- **JobBench (professional tasks, in-house): 55.7** — vs Opus 4.6 Max 36.6, DeepSeek-V4-Flash 41.3, Qwen3.8-27B 33.4, Qwen3.7-Plus 27.6
- **AndroidWorld: 84.5** (with code interpreter, per adalagent.ai, vendor)

Reasoning / knowledge (Qwen official model card, **vendor-run**):

- **GPQA Diamond: 91.7** — vs Opus 4.6 Max 91.3, DeepSeek-V4-Flash 90.8, Qwen3.7-Plus 90.3, Qwen3.8-27B 89.2 (**verifies meta.json's "GPQA 91.7%"**)
- **HLE: 35.9** — vs Opus 4.6 Max 40.0, Qwen3.7-Plus 34.7, DeepSeek-V4-Flash 33.8, Qwen3.8-27B 30.8 (⚠ **trails Opus 4.6 Max**)

Multimodal (vendor):

- **MathVision: 95.7** (with code interpreter, per adalagent.ai). Natively multimodal (vision encoder); **no MMMU / video benchmark** published in the sources reviewed.

> Provenance: **ALL capability figures come from Qwen's own official model card / launch blog (2026-08-26)**, reproduced by CellCog (2026-08-26/28) and adalagent.ai — they are **vendor-run**. CellCog explicitly flags "vendor runs, one in-house benchmark, **independent replication pending**," and (Aug 28) "the remaining watch item is **independent benchmark replication**." llm-stats.com (2026-10-08) lists the model with scores **"pending."** No neutral harness (Artificial Analysis, Vals, LiveBench) had published an independent evaluation as of 2026-10-23, so per methodology every vendor cell is treated as an **upper bound and discounted**. **meta.json's "LiveCodeBench 91.9%, GPQA 91.7%" are VERIFIED** against Qwen's official table (LiveCodeBench v6 = 91.9, GPQA Diamond = 91.7) — unlike the unverifiable ARC-AGI-2 figures I flagged for `gpt-6-sol` / `ox_alpha`, these are real vendor numbers (still vendor-only). **Identity resolved** via CellCog Q5: "Flash-Next is the open-weight release… Qwen3.8-Flash is the managed production version on QwenCloud based on it" — the `qwen-3.8-flash` (managed) and `qwen-3.8-flash-next` (open-weight) slugs are the **same 125B/6B model**, so this report scores the managed deployment on the shared weights plus its managed-specific 1M-default context and built-in tools. No benchmark was invented.

### Normalized scores (1–100)

- **Tool use: 84/100.** A strong agentic profile — **Toolathlon Verified 73.5**, **DeepSWE 1.1 58.7** (a +16.5 jump over the Qwen3.8-27B), and the managed version ships with **built-in tools** and **xhigh-default reasoning**. Qwen led its launch table with agent/office work, and Flash-Next beats **Claude Opus 4.6 Max** on CoWorkBench (73.9 vs 68.2) and JobBench (55.7 vs 36.6). Held below the frontier because **all of it is vendor-run (independent replication pending)** and the two largest margins sit on Qwen's **own in-house** CoWorkBench/JobBench.
- **Reasoning: 83/100.** **GPQA Diamond 91.7** (vendor) is near-frontier — it edges Opus 4.6 Max's 91.3 — and **HLE 35.9** beats the Qwen3.8-27B (30.8) and Qwen3.7-Plus (34.7). Capped because **HLE 35.9 still trails Opus 4.6 Max's 40.0** and the 2026 frontier (45–58%), the **6B-active** sparse tuning gives up deep-reasoning headroom, and every figure is **vendor-only** with no neutral replication.
- **Context window: 87/100.** The managed `qwen3.8-flash` defaults to a **983,616-token (~1M)** context with a **131,072-token output cap** (matching Qwen3.8 Max's output ceiling); the open-weight Flash-Next is **262,144 native, YaRN-extensible to 1M**. Strong, but discounted below the native-1M leaders (88–93) because the full 1M is a **managed/YaRN extension** (native is 262K) and **no long-context-recall benchmark** (RULER / AA-LCR) was published.
- **Multimodal: 78/100.** Natively multimodal with a **vision encoder** (text + image → text) and a strong vendor **MathVision 95.7** (with code interpreter). Held well below the multimodal leaders because the official API is **text-and-image only** — no audio, and video (claimed by meta.json / secondary sources) is **not confirmed** by the Alibaba Model Studio docs — and **no MMMU / video benchmark** was published.
- **Coding: 86/100.** The standout. On Qwen's vendor table Flash-Next **beats Claude Opus 4.6 Max across coding** — **LiveCodeBench v6 91.9** (vs 88.8), **SWE-bench Pro 62.5** (vs 53.4), **SWE-bench Multilingual 81.0** (vs 77.5) — and lifts **DeepSWE 1.1 to 58.7** from the 27B's 42.2. Discounted from the high-80s/90s because the **entire profile is vendor-run with independent replication explicitly pending**, and DeepSWE 58.7 trails GLM-5.3-Flash's 63.4.
- **Cost efficiency: 96/100.** Outstanding value — managed at **$0.16/$0.47** per 1M (cached input ~$0.016), open-weight at **$0 self-host**, trained at **~1/9 the cost of Qwen3.7-Plus** while beating it nearly everywhere. Tempered just below the very cheapest open tiers by the heavy **~360GB self-host footprint** (multi-GPU/server) and the Qwen Community License's **MaaS / "AI Work Assistant" separate-license** clause. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 84/100.** Mean of Tool 84 + Reasoning 83 + Context 87 + Multimodal 78 + Coding 86 = 418/5 = 83.6 → 84. Best fit: **high-volume agentic coding and office/productivity automation** where a 6B-active MoE's speed and **$0.16/$0.47 (or $0 self-host)** economics matter and near-frontier coding (LiveCodeBench 91.9, SWE-bench Pro 62.5) is sufficient; escalate the hardest pure-reasoning or long-horizon tasks to the Qwen3.8 **Plus/Max** lanes or a 2026 frontier model, and treat the vendor table as provisional until independent replication lands. Independent read: my 84 sits **below the queue's curated 87.5** — I discount the entirely **vendor-run** benchmark profile (CellCog: "independent replication pending"), the **in-house-benchmark-heavy** margins (CoWorkBench/JobBench), the modest **HLE 35.9** (below Opus 4.6 Max) and **text+image-only** multimodality, while crediting the genuinely strong coding/agent numbers and the ~1/9-training-cost efficiency. It lands appropriately **above the Qwen3.8-27B dense sibling (my 83)**, which it beats on every published benchmark, and just **below GLM-5.3-Flash / FlashX (my 85)**, which pairs a similar efficiency-MoE profile with independent AA corroboration, native 1M context and video multimodality.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (CellCog's "Qwen3.8-Flash-Next: Specs, License, and the Leak Scorecard," 2026-08-26/28, for the confirmed architecture/license record, the full Qwen vendor benchmark table and the definitive Flash-vs-Flash-Next identity resolution; llm-stats.com's Qwen3.8-Flash-Next model page, 2026-10-08, for release date / params / license / multimodality and the "scores pending" independent status; adalagent.ai for DeepSWE / SWE-bench-Pro / CoWorkBench / AndroidWorld / MathVision and managed pricing; the official qwen.ai blog + Qwen model card as the vendor source of record). **ALL capability figures are Qwen vendor-run with independent replication explicitly pending** as of 2026-10-23 and are discounted accordingly per methodology. meta.json's **LiveCodeBench 91.9% / GPQA 91.7% were VERIFIED** against Qwen's official table (LiveCodeBench v6 / GPQA Diamond). The `qwen-3.8-flash` (managed) and `qwen-3.8-flash-next` (open-weight) slugs are documented as the **same model, different deployment**. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
