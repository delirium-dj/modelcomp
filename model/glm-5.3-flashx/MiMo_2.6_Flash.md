# GLM-5.3-FlashX — findings by MiMo 2.6 Flash

- Source: Zhipu AI / Z.ai (`glm-5.3-flashx`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 87). Fresh sources this pass: BenchLM GLM-5.3-Flash page
> (updated 2026-11-07) and the live Artificial Analysis model page.
> Changes: Reasoning 84→82 (AA Intelligence Index now 28 on v5.0.1, down from
> the 41.8 recorded last pass); Overall 87→86. Tool 88, Context 95, Multimodal
> 84, Coding 82, Cost 93 held.

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** **Not a new model** — the high-throughput serving tier of GLM-5.3-Flash (launched 2026-09-18, three weeks after the base model's 2026-08-26 reveal). Same checkpoint (320B total / 18B active MoE, 45 layers, hybrid sparse+linear attention with IndexPool, mHC, native multimodal), same 1M/128K limits, same benchmarks — served through an inference configuration Zhipu rates at up to **200 tok/s** (≈5× the Flash tier's decode speed) at ≈2.5× the token price. Zhipu attributes the speed to infrastructure work (100K+ domestic-chip cluster, GLM-5.3-built inference stack), not a different checkpoint; built on the same SGLang-derived engine as Flash.
- **Provider / access:** Z.ai API (model ID `glm-5.3-flashx`, API + experience center open at launch); third-party routes (APIMaster from $0.32/$1.12, ≈13% under list). **Not** included in the GLM Coding Plan at launch (Flash remains the plan tier with 3× GLM-5.3 quota). Open weights (MIT) exist only for the base `GLM-5.3-Flash` — FlashX itself is a hosted endpoint. (also recorded: `z-ai/glm-5.3-flashx`)
- **Release / knowledge:** serving tier released 2026-09-18; underlying model released 2026-08-26; knowledge cutoff not disclosed.
- **IDs:** `z-ai/glm-5.3-flashx` (gateway routes) / `glm-5.3-flashx` (native; sibling `glm-5.3-flash`; sibling `glm-5.3-flashx-legal` also listed on llm-stats). (also recorded: `opencode/glm-5.3-flash-x`)
- **Context window:** 1,048,576 tokens; max output 131,072 (128K).
- **Modalities:** text, images, video, files in; text out; reasoning **always on** (`thinking.type: enabled` only — cannot be disabled; `reasoning_effort` low/high/max, default max); tool calls yes (function calling, context caching, structured output, streaming).
- **Pricing (as of 2026-11-08):** Zhipu list **$0.37 in / $1.25 out** per 1M, cached input **$0.075** (≈2.5× the Flash tier's $0.15/$0.50/$0.03; re-confirmed by llm-stats sibling card this pass); APIMaster routes from $0.32/$1.12. OpenRouter third-party routes for the base Flash go as low as $0.02/$0.50 (provider-dependent). Paid; no free tier for FlashX.
- **Architecture:** identical to GLM-5.3-Flash (MoE 320B-A18B, hybrid attention, native vision encoder); serving differs only in inference configuration. Self-host of the base weights: FP8 ≈306 GiB (≈386 GiB VRAM recommended, practical floor 8× Hopper), BF16 ≈772 GiB.

### Raw benchmarks found

All capability numbers below are **identical to GLM-5.3-Flash** because the checkpoint is the same (Zhipu-run unless noted):

Agent / tool use:

- GDPval-AA v2: **1773** Elo (Zhipu table — clears the 1750+ frontier ref; in-context Opus 4.8 rows list 1582, GPT-5.6 Terra 1571).
- Toolathlon Verified: **78.4** (vs Opus 4.8 76.2). AutomationBench v1.0.6: **48.8** (vs Opus 4.8 41.0). Agents' Last Exam: 26.3.
- Terminal-Bench 2.1: **84.3** (Zhipu) / **84.3** (AA independent) / 62.9 (Vals) — below the 88 ref on Zhipu/AA scales. Terminal-Bench 4.0 (AA): **32.8** (mid).
- τ-Bench Banking (AA): 47.2. AA ITBench: **51.2** (BenchLM row, sourced to AA — new this pass). Finance Agent v2 (Vals): 57.9. ExploitBench (Generality Labs): 13/41 full exploits, 64.8% ladder mean — above Claude Mythos Preview's 62.2% mean (different counting rule than Anthropic's own run; priced on expired promo tokens).

Reasoning / knowledge:

- GPQA Diamond: **91.2** (AA) — clears the 90%+ ref (Vals: 86.4). HLE with tools: **55.3** (Zhipu); HLE (AA, no tools): **39.9** — a hair under the 40% ref.
- AA Intelligence Index: **28** (live AA page this pass, methodology v5.0.1, #9 of 26 in its open-weights class) — **down from the 41.8 recorded on 2026-10-07**; Zhipu's launch-cited 57 was v4.1.1. Still well under the 60+ ref.
- BenchLM overall: **58.02/100, #57 of 1016 models** (page last updated 2026-11-07; coverage note: 38 of 759 benchmarks, conservative) — new composite anchor this pass.
- MMLU-Pro (Vals) 86.1; CritPt 15.4; AA-Omniscience 27.5 accuracy / 72.4 non-hallucination. FrontierMath v2 (Epoch): **55.8** Tiers 1–3 / **17.1** Tier 4 (new this pass).

Coding:

- DeepSWE v1.1: **63.4** (Zhipu; official DeepSWE leaderboard entry ~63 confirms) — under the 74% ref, but beats Opus 4.8's 58.0 and DeepSeek-V4-Vision-Exp's 59.3. NL2Repo: 56.3 (Opus 4.8: 69.7).
- SciCode (AA): **51.6** (under the 55 ref). LiveCodeBench (Vals): 80.5. SWE-bench (Vals): 92.0 (their harness). Vals Code Migration 20.5, Vibe Code Bench 30.8/16.
- AA Coding Index: **71.5** (clears the 70+ ref). Z.ai Code Bench v1.0 (max): 29.0 vs Opus 4.8's 29.5.
- New this pass (BenchLM, sourced rows): CWE-Bench-AA **55.8**, CyberGym-E2E-AA **74.0**, FrontierSWE v2 **18.1**, OpenHarmony Bench **57.3** — security/edge SWE variants, no movement on the main coding refs.

Long context:

- No MRCR/needle row found; hybrid linear+sparse attention targets 1M serving at ~1/3 of GLM-5.3's cost (Zhipu); AA-LCR: **80.0** (good retrieval evidence at AA's context depth). Model-card evals ran at 300K per LumaDock's reading. ExtractBench **80.75** / ParseBench **70.55** (LlamaIndex snapshots 2026-11-06, via BenchLM) are document-parsing proxies, not retrieval-at-depth.

Multimodal (Zhipu):

- MMVU **80.5**, MVBench **77.8** (both #1 on llmboard's launch boards), CharXiv Reasoning w/tools 89.4, Chartography w/tools 78.0, OfficeQA Pro 62.4, OSWorld 2.0 59.1, Vision2Web 77.8; BabyVision 53.4 (weak vs Gemini-class 70.9).

### Normalized scores (1–100)

- **Tool use: 88/100.** Identical evidence to GLM-5.3-Flash: GDPval-AA v2 1773 clears the frontier ref, Toolathlon/AutomationBench beat Opus 4.8 rows, ExploitBench Mythos-level; TB2.1 84.3 (AA/Zhipu) under the 88 ref and mid ALE/TB4 hold it at 88. Held — no new tool-use number moved the anchors this pass (new AA ITBench 51.2 sits mid-band, consistent).
- **Reasoning: 82/100.** Down from 84: the live AA page now reports the Intelligence Index at **28** (v5.0.1) versus the 41.8 recorded last pass — a fresh, sourced correction that pulls the composite further from the 60+ ref, reinforced by BenchLM overall 58.02 (#57/1016). Held high by GPQA 91.2 (clears the 90+ ref) and HLE-tools 55.3; CritPt soft and no-tools HLE 39.9 still miss refs.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor with a purpose-built cheap-serving architecture; AA-LCR 80 helps but no ≥98%-at-512K+ needle → floor. Held.
- **Multimodal: 84/100.** Text + image + video + file in (video band 75–90); MMVU/MVBench board-topping, Chartography/CharXiv strong; BabyVision weakness and text-only out keep it mid-band. Held — no new vision number this pass.
- **Coding: 82/100.** DeepSWE 63.4 beats Opus 4.8 (58.0), AA Coding Index 71.5 clears its ref, Vals SWE/LiveCodeBench strong; DeepSWE/SciCode under their frontier refs (74/55) and Vals TB2.1 62.9 drags. Held — new BenchLM coding rows (CWE/CyberGym/FrontierSWE) are off-axis variants and don't move the frontier-gap judgment.
- **Cost efficiency: 93/100.** $0.37/$1.25 is still below the $0.60/$2.20 ≈ 92 anchor (≈93–94), with $0.075 cache reads and third-party routes at $0.32/$1.12; held just under Flash's 96 by the 2.5× tier premium, no Coding-Plan inclusion, no promo pricing, and always-on max-default thinking inflating output bills. Held — pricing re-confirmed unchanged this pass.
- **Overall Score: 86/100.** (88+82+95+84+82)/5 = 86.2 → 86 — capability-identical to GLM-5.3-Flash: the same frontier-adjacent agent/price story at 200 tok/s, now with the AA Index correction to 28 as the one moved dim.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM GLM-5.3-Flash page, Artificial Analysis model page, llm-stats sibling card, plus the shared GLM-5.3-Flash evidence base: z.ai launch blog, OpenRouter/AA rows, APIMaster FlashX card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai GLM-5.3-Flash launch post](https://z.ai/blog/glm-5.3-flash)
  - [BenchLM — GLM-5.3-Flash](https://benchlm.ai/models/glm-5-3-flash)
  - [Artificial Analysis — GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [APIMaster — GLM-5.3-FlashX API](https://apimaster.ai/blog/glm-5-3-flashx-api)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Archived research pass — `MiMo_2.6_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `MiMo_2.6_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Glm 5.3 Flash X — findings by MiMo 2.6 Flash

- Source: Z.ai / Zhipu AI (API id `glm-5.3-flashx`)
- Archived date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Self-exclusion:** zero verified public benchmark numbers were found for this exact model/ID — every capability benchmark row below reads "no verified public score found". This file is saved as `.excluded` so `pnpm sync` skips it; no scores below are used in averages.

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Safe unions applied: IDs +1; Provider +1. Every other archived field value was an older or vaguer
> duplicate of the active card above.

## Raw benchmarks found

Agent / tool use:

- Tau3 / Tau2 / GDPval / Terminal-Bench / Claw-Eval: no verified public score found **for FlashX**

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / AIME / AA Intelligence Index: no verified public score found for FlashX ("Separate intelligence benchmark: None published for FlashX" — gptproto.com comparison table, 2026-09-21; "Zhipu publishing no new benchmark" — models.sulat/APIMaster recaps; commandcode.ai lineup shows "—" for FlashX Intelligence/Coding; BenchGecko's FlashX family row lists no benchmark count)

Coding:

- SWE-bench / LiveCodeBench / Terminal-Bench 2.1 / DeepSWE: no verified public score found for FlashX

Multimodal:

- MMMU / MathVista / Video-MME: no verified public score found for FlashX

Long context:

- Window = 1M (spec, not a benchmark); no MRCR/RULER figure for FlashX

Throughput (the tier's only measured property, not a quality dim):

- Vendor claim: **200 tok/s peak** (Zhipu, 2026-09-18); OpenRouter monitoring: **P50 ≈ 50 tok/s** output, 2.27 s round-trip (glm5.app compilation)

#### Research trail (why this is excluded)

1. Two public web searches on 2026-10-21 (exact-phrase `"GLM-5.3-FlashX" OR "GLM 5.3 FlashX" benchmark …`) surfaced the full launch coverage, Z.ai docs, OpenRouter/models.dev specs and four independent trackers — all agree FlashX is a **serving tier of GLM-5.3-Flash**, and all explicitly state that **no benchmark suite is published for the FlashX ID itself** (gptproto: "Separate intelligence benchmark: None published for FlashX"; models.sulat: "Zhipu publishing no new benchmark"; commandcode: Intelligence/Coding "—"; BenchGecko: no benchmark rows).
2. **GLM-5.3-Flash's suite (Terminal-Bench 2.1 84.3, AA Intelligence Index 57, GPQA 91.2, HLE 55.3, DeepSWE v1.1 63.4, GDPval-AA 1773, 1M context, etc.) was deliberately NOT imported**: the repo's own rules forbid borrowing another ID's scores without vendor confirmation at the checkpoint level — and gptproto notes Z.ai has not even published a separate FlashX checkpoint that would settle weight-level identity. Scored rows would otherwise be guesses attributed to the wrong identifier.
3. The repo `meta.json` scaffold entry ("evaluation entry", 128K) adds no benchmark evidence and its 128K context conflicts with the 1M all public sources report.

#### Scores

- Not scored — self-exclusion triggered (zero verified public benchmark numbers for `glm-5.3-flashx`).

---
