# Qwen 3.8 — findings by Mistral Large 4

- Source: Alibaba / Qwen (`qwen3.8` family base)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's August 2026 Qwen 3.8 generation base line — the family between 3.7 and 3.8-Max/Flash (GA 2026-08-03, previewed 2026-07-19 at WAIC); the open-weight representative is Qwen3.8-27B (Apache 2.0, dense vision-language, single-GPU, 17GB). Family siblings tracked separately: qwen-3.8-max, qwen-3.8-flash, qwen-3.8-27b.
- **Provider / access:** QwenCloud / Model Studio / Bailian API, OpenRouter, Qoder/QoderWork; open weights on HF (`Qwen/Qwen3.8-27B`).
- **Release / knowledge:** Family GA 2026-08-03; weights 2026-08-12/13; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `qwen3.8` (API family); `qwen/qwen3.8-27b` (OpenRouter); HF `Qwen/Qwen3.8-27B`.
- **Context window:** 262,144 native on the 27B weights (1M on hosted Max/Flash tiers); family 1M hosted.
- **Modalities:** Multimodal — text + image (vision encoder on 27B), video/PDF on hosted tiers; text out; reasoning always on (weights, no off switch); tool calls.
- **Pricing (as of 2026-11-05):** Hosted family from ~$0.15/$0.47 (Flash tier) up to Max $2/$6; 27B weights free under Apache 2.0. No free API tier.
- **Architecture:** Open-weight 27B dense vision-language (Apache 2.0); same layers/hidden/vocab as 3.6-27B — all gains from post-training (codersera config diff); Max sibling is 2.4T/95B MoE under custom license.

### Raw benchmarks found

Official family materials cross-checked against kingy, orcarouter, codersera, Yotta Labs, Respan, emergent.sh, felloai, mysummit; sibling figures labelled:

Agent / tool use:

- OSWorld-Verified: **84.3** on the 27B (Yotta Labs — sibling-labelled); top scores claimed on Terminal-Bench 2.0, SWE-Bench Pro, MCP-Atlas per family material (innfactory)
- 27B beats 3.6-27B on every displayed benchmark incl. DeepSWE 13.3→42.2 (~3x) (kingy/orcarouter — sibling-labelled)
- Claw-Eval / AutomationBench: no verified public score found for qwen3.8 base

Reasoning / knowledge:

- GPQA Diamond: **89.2** (27B, up from 87.8) (orcarouter — sibling-labelled); Flash-Next 91.7 (DataCamp — sibling-labelled)
- HLE: 30.8 (27B) vs 19.5 (Respan comparison row — conflicting pairing, both cited)
- AA Index: 27B scores **52** (codersera); Max 47 shared with Gemini 3.8 Flash (mysummit) — sibling-labelled
- LiveCodeBench v6: 90.3 (27B, sibling-labelled)

Coding:

- SWE-bench Pro: **61.7** (27B, sibling-labelled); Terminal-Bench 2.1: 73.0 (27B, sibling-labelled); DeepSWE 42.2 (27B, sibling-labelled)
- SWE-bench Verified: no verified public score found for qwen3.8 base

Long context:

- 262K native on 27B weights (1M hosted tiers); no verified MRCR/RULER for this ID

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-Verified 84.3 (sibling) and family MCP-Atlas claims; no base-specific tool rows.
- **Reasoning: 84/100.** GPQA 89.2 (sibling), HLE 30.8 (sibling); AA 52 on the 27B — sibling-labelled.
- **Context window: 96/100.** 1M hosted / 262K native weights; no verified 512K+ retrieval.
- **Multimodal: 90/100.** Vision-language 27B weights + multimodal hosted tiers; text out.
- **Coding: 87/100.** SWE-Pro 61.7, DeepSWE 42.2, TB 2.1 73.0, LCB 90.3 (all 27B-labelled); strong generational jump.
- **Cost efficiency: 90/100.** Flash-tier $0.15/$0.47 hosted, Apache-2.0 27B free to self-host, Max $2/$6; no free API tier.
- **Overall Score: 88/100.** Half-up mean of (85 + 84 + 96 + 90 + 87) / 5 = 88.4 → 88. Best fit: August 2026 open-weight generation — pick 27B for self-host, Flash for cheap hosted, Max for long-horizon.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official family materials cited, 2026-11-05 UTC); cross-checked against kingy, orcarouter, codersera, Yotta Labs, Respan, emergent.sh, felloai, mysummit, innfactory, MarkTechPost; sibling (27B/Flash-Next/Max) figures explicitly labelled, not merged into the base; HLE pairing conflict cited. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen 3.8 — Qwen blog (family)](https://qwen.ai/blog?id=qwen3.8)
  - [Qwen/Qwen3.8-27B — Hugging Face (Apache 2.0, 262K native, eval harness)](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [orcarouter — Qwen 3.8 family (27B weights 2026-08-12, text-only 2.4T Max ~4.9TB BF16)](https://www.orcarouter.ai/blog/qwen-3-8)
  - [Yotta Labs — 3.8 family release (preview Jul 19, GA Aug 3, 27B single-GPU Apache 2.0)](https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026)
  - [kingy — 3.8-27B specs/benchmarks (beats 3.6-27B on all rows, DeepSWE 13.3→42.2)](https://kingy.ai/blog/qwen3-8-27b-specs-benchmarks-local-hardware/)
  - [codersera — 3.8 vs 3.6 (+12 pts, post-training only) and 27B guide (AA 52)](https://codersera.com/blog/qwen-3-8-vs-qwen-3-6-2026/)
  - [Respan — Qwen 3.8 models comparison](https://www.respan.ai/articles/qwen-3-8-models-comparison)
  - [emergent.sh — Qwen 3.8 benchmarks (Max vs Fable 5 win/loss split)](https://emergent.sh/learn/qwen-3-8-benchmarks)
  - [felloai — Qwen 3.8 review (Max not AA-scored)](https://felloai.com/qwen-3-8/)
  - [MarkTechPost — Qwen3.8-Max GA (2.4T MoE, 2026-08-03)](https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/)
