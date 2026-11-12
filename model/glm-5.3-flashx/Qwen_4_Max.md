# GLM-5.3-FlashX — findings by Qwen 4 Max

- Source: Z.AI (Zhipu)/glm-5.3-flashx
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX (API model code `glm-5.3-flashx`)
- **Short description:** Zhipu's **September 18, 2026 high-speed serving tier of GLM-5.3-Flash** — explicitly **not a new model**: same 320B/18B checkpoint, same 1M context, same multimodal behavior; a faster inference configuration (published peak **200 tokens/s** vs the base tier's AA-measured 47 tok/s) at ~2.5× the token price. Speed comes from infrastructure (custom SGLang engine, ReplaySSM, W8A8 + hybrid INT8/FP8/BF16 cache quantization, Layer Split, EPD disaggregation on ~100K domestic Chinese AI accelerators; 3× end-to-end serving gain vs baseline), not a different checkpoint.
- **Provider / access:** Z.ai API Platform + official experience center; Alibaba Cloud Model Studio (`ZHIPU/GLM-5.3-FlashX`, directly supplied by Zhipu, Beijing); APIMaster routes (from $0.32/$1.12, ~13% below list); Command Code. **Not included in the GLM Coding Plan at launch** (base Flash is, with 3× GLM-5.3 quota). Open weights exist only for the base tier (`zai-org/GLM-5.3-Flash`, MIT).
- **Release / knowledge:** FlashX launched 2026-09-18; base GLM-5.3-Flash open-sourced 2026-08-26 (anonymous pre-launch testing as **ox-alpha** on OpenCode/OpenRouter — most popular model of the week, all traffic on Chinese chips). Knowledge cutoff not published. `thinking.type` **only supports `enabled` — thinking cannot be disabled**; `reasoning_effort` low/high/**max (default)**; `clear_thinking: false` recommended for multi-turn; temp 1 / top_p 0.95; `tool_stream` supported.
- **IDs:** `glm-5.3-flashx` ≠ `glm-5.3-flash` (same weights, different serving tier) ≠ `glm-5.3-flashx-legal` (domain-tuned sibling, separate model) ≠ GLM-5.3 flagship ≠ GLM-4.7-FlashX.
- **Context window:** **1M tokens** (1,048,576 per Model Studio), max output **131,072** (128K), max chain-of-thought 131,072. Hybrid sparse + linear attention with **IndexPool** (4 indexer key vectors pooled into 1) cuts attention compute 3.01× and KV cache 4.44× vs GLM-5.3; 80% cache discount. No published MRCR/LCR retrieval rows; NL2Repo (base model) evaluated under full 1M.
- **Modalities:** **Video, image, text, file in; text out** (Z.ai docs + Model Studio + APIMaster agree). Conflict labelled: HF pipeline tag is `image-text-to-text` and AA's base-Flash API tracks **text + image only** — vendor docs claim video/file input that independent API coverage does not confirm. No audio. CharXiv 89.4, MMVU 80.5, BabyVision 53.4 (base-model rows).
- **Pricing (as of 2026-11-12):** **$0.37 in / $1.25 out per 1M, cached input $0.075** (Z.ai official; cache storage limited-time free) — ~2.5× base Flash ($0.15/$0.50). Model Studio Beijing: **¥2 / ¥7**, implicit cache ¥0.57; RPM 200 / TPM 3M; **no Batch, no web-search tool, no fine-tuning** on that route. APIMaster from $0.32/$1.12. Worked example (vendor): 10M input + 1M output = $4.95 list ($2.00 all-cache).
- **Architecture:** Same as base Flash — MoE **320B total / 18B active, 45 layers** (vs GLM-5.3's 355B/32B/92L); first open-source frontier model combining sparse + linear attention; mHC (Manifold-Constrained Hyper-Connections); 30T-token multimodal pre-training corpus; newly trained base (not a GLM-5.2 derivative).

### Raw benchmarks found

Vendor-reported — **all rows are GLM-5.3-Flash base-model runs that apply to FlashX because the checkpoint is identical** (Z.ai docs/blog + HF footnotes; harnesses: Claude Code 2.1.207 for TB2.1, mini-swe-agent 400K/6h for DeepSWE, official Toolathlon service pass@1 ×3, AutomationBench v1.0.6, HLE w-tools 300K ctx with GPT-5.6-luna judge):

- Agent: TB2.1 **84.3**, Toolathlon-V **78.4**, AutomationBench **48.8** (vs GLM-5.2's 26.2), ALE **26.3**, GDPval-AA v2 **1,773 Elo** (AA-run, vendor-cited), HLE w-tools **55.3**
- Coding: DeepSWE v1.1 **63.4** (vs GLM-5.2's 46.2), NL2Repo **56.3** (1M ctx, anti-hacking guards), Z.ai Code Bench v1.0 max effort **29.0** (vs Claude Opus 4.8's 29.5 — in-house, CC 2.1.207)
- Vision: CharXiv **89.4**, Chartography tools 78.0, MMVU 80.5, BabyVision 53.4, OfficeQA Pro 62.4
- Launch claim: AA Intelligence Index **v4.1.1 57 at $0.045/task** (discounted) — version-labelled, never compared with v5.0.1

Independent runs:

- **FlashX itself is untracked** — AA and BenchLM both 404 for `glm-5-3-flashx`; the 200 tok/s figure is a **vendor peak, not an independent measurement** (no FlashX TTFT/$-per-task data exists).
- Base GLM-5.3-Flash (AA live, v5.0.1, inherited with label): index **28** (#10/27 open class), **47 tok/s**, TTFT **87.49s**, **47.3 min/task**, **$0.58/task**, 124M index tokens, 27 providers; AA TB2.1 84.3 confirms vendor. Vals: SWE-bench **92.0**, TB2.1 **62.9** (harness gap vs 84.3), LCB 80.5, GPQA-D 86.4, MMLU-Pro 86.1. Epoch FrontierMath v2 **55.789** T1-3 / **17.073** T4. TB4.1 35.5, FrontierSWE v2 18.1, CursorBench 4.0 36.8. BenchLM aggregate **57.93/100, #57 of 1026** (base model).

### Normalized scores (1–100)

- **Tool use: 84/100.** Same checkpoint evidence as Flash — GDPval-AA 1,773, Toolathlon 78.4, TB2.1 84.3 (AA-confirmed), AutomationBench 48.8; the 200 tok/s tier directly addresses Flash's 47-min/task throughput cap for multi-turn agent loops; capped by Vals TB2.1 62.9, TB4.1 35.5, ALE 26.3, forced thinking (no disable), and zero FlashX-specific independent runs.
- **Reasoning: 80/100.** HLE 55.3 w-tools (vendor harness, GPT-5.6-luna judge), GPQA 86.4 / MMLU-Pro 86.1 (Vals), AA index 28 above open-class median; capped by FrontierMath v2 T4 **17.1** (hard math weakness) and no independent HLE confirmation — identical to base Flash.
- **Context window: 85/100.** Full 1M (1,048,576 confirmed by Model Studio) with linear-attention + IndexPool serving economics, 80% cache discount, 131,072 output + CoT; deducted for zero published long-context retrieval benchmarks and unverified depth quality.
- **Multimodal: 80/100.** Video/image/text/file input documented by two official sources (Z.ai docs + Model Studio), visual-coding loop (render → inspect → refine), CharXiv 89.4, MMVU 80.5; capped by the AA/HF text+image-only conflict, no video benchmark rows, BabyVision 53.4, and no independent MMMU-Pro run.
- **Coding: 84/100.** SWE-V **92.0** (Vals), DeepSWE 63.4, TB2.1 84.3, NL2Repo 56.3, Z.ai Code Bench 29.0 ≈ Opus 4.8's 29.5 (in-house); capped by FrontierSWE v2 18.1, CursorBench 4.0 36.8, TB4.1 35.5 — identical quality to Flash, faster turns.
- **Cost efficiency: 90/100.** $0.37/$1.25 with 80% cache ($0.075) is still far below frontier pricing, and 200 tok/s peak cuts wall-clock cost per task ~4× vs the base tier's measured 47 tok/s; deducted for the **2.5× premium over Flash for identical intelligence**, exclusion from the GLM Coding Plan, forced reasoning tokens, no Batch/web-search on Model Studio, and unverified sustained speed (peak ≠ workload throughput).
- **Overall Score: 82.6/100.** Mean of the five quality dims (84+80+85+80+84)/5 = 82.6. Best-fit: interactive products, IDE-side completions, and many-short-turn agent loops that need Flash-class capability (SWE-V 92, GDPval 1,773) at low latency — pay the 2.5× premium only when time per turn is the bottleneck; batch pipelines should stay on base Flash ($0.15/$0.50) or self-host the MIT weights.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Z.ai official model docs + pricing page fetched in full, Alibaba Cloud Model Studio FlashX page fetched in full, APIMaster independent launch/pricing deep-dive fetched in full, AA live base-Flash page, official HF README with harness footnotes); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **serving-tier identity** — FlashX is the same GLM-5.3-Flash checkpoint (320B/18B, 45L) in a faster configuration, so all benchmark rows are base-model runs inherited with that label; **modalities** — Z.ai docs/Model Studio say video/image/text/file in vs HF `image-text-to-text` + AA text+image only; **speed** — vendor peak 200 tok/s vs AA-measured 47 tok/s on the base tier (FlashX itself never independently measured); **AA index 57 (v4.1.1 launch) vs 28 (v5.0.1 current)** — different versions, never compared; TB2.1 84.3 (vendor/AA) vs 62.9 (Vals) — harness gap; pricing $0.37/$1.25 (Z.ai list) vs $0.32/$1.12 (APIMaster route) vs ¥2/¥7 (Model Studio Beijing). **AA and BenchLM both 404 for `glm-5-3-flashx`** — no independent FlashX index, $/task, or latency data exists. Identity: glm-5.3-flashx ≠ glm-5.3-flash ≠ glm-5.3-flashx-legal (Harvey LAB 19.2% belongs to the Legal sibling, not scored here) ≠ GLM-5.3 ≠ GLM-4.7-FlashX; ox-alpha was Flash's anonymous test identity.
- Reference URLs:
  - [GLM-5.3-Flash/FlashX — Overview — Z.ai docs](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [Pricing — Z.ai Developer Docs](https://docs.z.ai/guides/overview/pricing)
  - [ZHIPU/GLM-5.3-FlashX Model Info — Alibaba Cloud Model Studio](https://help.aliyun.com/en/model-studio/glm-5-3-flashx-by-zhipu)
  - [GLM-5.3-FlashX: 200 Tokens/s, Pricing, Model ID — APIMaster](https://apimaster.ai/blog/glm-5-3-flashx-api)
  - [GLM-5.3-Flash Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [zai-org/GLM-5.3-Flash — Hugging Face](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [GLM-5.3-Flash: Frontier Intelligence, Flash Cost — Z.ai blog](https://z.ai/blog/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.