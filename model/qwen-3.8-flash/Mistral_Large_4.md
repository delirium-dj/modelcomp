# Qwen 3.8 Flash — findings by Mistral Large 4

- Source: Alibaba / Qwen (`qwen3.8-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's production Flash tier (API live 2026-08-27; open-weight twin Qwen3.8-Flash-Next released 2026-08-26) — 125B+51B N-gram MoE with only 6B active per token, previewing the Qwen4 architecture; 1M context on the hosted version; ~12x cheaper than Qwen3.8-Max. Variant note: Flash-Next (weights, 262K native/1M YaRN) and Flash (hosted, 1M default) share the architecture.
- **Provider / access:** QwenCloud / Model Studio API (`qwen3.8-flash`), OpenRouter; open weights `Qwen/Qwen3.8-Flash-Next` on HF (Qwen Community License 1.0); QwenWork platform.
- **Release / knowledge:** Flash-Next 2026-08-26, API 2026-08-27; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `qwen3.8-flash` (API); `Qwen/Qwen3.8-Flash-Next` (HF).
- **Context window:** 1,000,000 tokens hosted (262,144 native on weights, 1M via YaRN extension).
- **Modalities:** Multimodal — text, image, video (audio via Omni-Flash sibling), PDF in; text out; reasoning; built-in tools.
- **Pricing (as of 2026-11-05):** $0.15–0.16 / $0.47 per 1M in/out (1 RMB / 3 RMB); ~12x cheaper than Max. No free API tier; weights free under Community License.
- **Architecture:** Open-weight twin under Qwen Community License 1.0; 125B total + 51B N-gram embedding, 6B active; GDN + QSA + N-gram + Muon optimizer; Qwen4 preview.

### Raw benchmarks found

Official qwen.ai blog + HF card + Alibaba Cloud blog cross-checked against DataCamp, Respan, orcarouter, eesel, CellCog, Pondero, datanorth; conflicts noted:

Agent / tool use:

- CoWorkBench: **73.9** (DataCamp); Toolathlon Verified edges Max (Respan)
- QwenWork Standard mode cuts token consumption 75% and ~2x speed (Alibaba Cloud blog)
- OSWorld / AutomationBench / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- HLE: **35.9** — trails Opus 4.6 Max 40.0 (DataCamp)
- SWE-bench Pro: **62.5** (leads Flash tier per DataCamp); DeepSWE v1.1 58.7 vs GLM-5.3-Flash 63.4 (DataCamp — GLM leads, cited)
- GPQA / MMLU / CritPt: no verified public score found for this exact ID

Coding:

- DeepSWE 1.1: edges Max on that row with 6B active vs 95B (Respan); exact % per DataCamp 58.7
- Terminal-Bench / SWE-V / LiveCodeBench: no verified public score found for qwen3.8-flash specifically (27B sibling: TB 2.1 73.0, SWE-Pro 61.7, LCB 90.3, OSWorld 84.3 — labelled sibling, not merged)

Long context:

- 1M hosted / 262K native weights; no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 85/100.** CoWorkBench 73.9 and Toolathlon edge over Max; no OSWorld/Automation rows captured.
- **Reasoning: 83/100.** SWE-Pro 62.5 strong for the tier; HLE 35.9 trails Opus 4.6; no GPQA captured.
- **Context window: 96/100.** 1M hosted in the 95–100 tier; weights 262K native (YaRN to 1M) — noted.
- **Multimodal: 90/100.** Text/image/video/PDF in, text out; audio via Omni sibling.
- **Coding: 86/100.** DeepSWE 58.7 / SWE-Pro 62.5 solid for 6B active; trails GLM-5.3-Flash on DeepSWE per DataCamp.
- **Cost efficiency: 98/100.** $0.15/$0.47 per 1M in the 97–99 band, 12x under Max; free community-license weights; no free API tier.
- **Overall Score: 88/100.** Half-up mean of (85 + 83 + 96 + 90 + 86) / 5 = 88.0 → 88. Best fit: cheapest capable multimodal workhorse — $0.15/$0.47 hosted or self-hosted Flash-Next; long-horizon brittleness on very long agent chains noted (eesel).

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official qwen.ai blog + HF card + Alibaba Cloud blog cited, 2026-11-05 UTC); cross-checked against DataCamp, Respan, orcarouter, eesel, CellCog, Pondero, datanorth, progressiverobot, BenchLM; sibling-27B and GLM comparison figures labelled, not merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8-Flash-Next: A New Architecture — Qwen blog (official, 2026-08-26)](https://qwen.ai/blog?id=qwen3.8-flash-next)
  - [Qwen/Qwen3.8-Flash-Next — Hugging Face (125B+51B, 6B active, 262K native)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Alibaba Cloud — Qwen3.8-Flash release (1 RMB/3 RMB per 1M, QwenWork −75% tokens)](https://www.alibabacloud.com/blog/alibaba-releases-qwen3-8-flash-with-innovative-model-architecture-delivering-optimal-price-performance_603503)
  - [DataCamp — Flash-Next (SWE-Pro 62.5, CoWorkBench 73.9, DeepSWE 58.7, HLE 35.9)](https://www.datacamp.com/blog/qwen3-8-flash-next)
  - [Respan — Qwen 3.8 models comparison (Flash-Next edges Max on DeepSWE/Toolathlon)](https://www.respan.ai/articles/qwen-3-8-models-comparison)
  - [codersera — Qwen 3.8 Flash guide ($0.15/$0.47, 1M ctx, community license)](https://codersera.com/blog/qwen-3-8-flash-complete-guide-2026/)
  - [Pondero — Flash-Next API open 2026-09-01, 12x cheaper than Max, beats DeepSeek-V4-Flash](https://pondero.ai/news/2026-09-02-qwen-flash-next/)
  - [orcarouter — 3.8 Flash vs 3.7 Flash (generation/tier gap)](https://www.orcarouter.ai/blog/qwen-3-8-flash-vs-qwen-3-7-flash)
  - [eesel — Flash-Next review (long-agent-chain brittleness)](https://www.eesel.ai/blog/qwen38-flash-next-review)
  - [BenchLM — qwen3-8-flash-next](https://benchlm.ai/models/qwen3-8-flash-next)
