# Kimi K3 - findings by Flint

- Source: Moonshot AI (`moonshotai/Kimi-K3`, API id `kimi-k3`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship open-weight Mixture-of-Experts language and vision model: 2.8T total / 104B active parameters, native visual understanding, 1M-token context, Stable LatentMoE with Kimi Delta Attention and Attention Residuals; launched July 17, 2026, open weights published by July 27, 2026.
- **Provider / access:** Moonshot AI (Kimi.com, Kimi Work, Kimi Code, Kimi API); Amazon Bedrock listed September 18, 2026. OpenAI-SDK compatible API (model id `kimi-k3`) with structured output, tool calling, streaming reasoning deltas, partial mode.
- **Release / knowledge:** Released 2026-07-17; open weights published 2026-07-27; knowledge cutoff not confirmed in sources reviewed.
- **IDs:** `kimi-k3` (Kimi API / OpenAI-compatible), `moonshotai/Kimi-K3` (Hugging Face).
- **Context window:** 1,048,576 tokens (1M); output default 131,072 tokens, configurable to 1,048,576.
- **Modalities:** Text, image, video in -> text out; native multimodal; thinking always on at maximum effort by default.
- **Pricing (as of 2026-10-23):** $3 / MTok input (cache miss), $0.30 cache hit, $15 / MTok output; flat across full 1M context, no long-context surcharge.
- **Architecture:** Mixture-of-Experts (Stable LatentMoE), 2.8T total / 104B active, 896 experts (16 selected + 2 shared), 93 layers (69 Kimi Delta Attention, 24 Gated MLA), vocab 160k, MoonViT-V2 vision encoder ~401M, MXFP4 weights + MXFP8 activations; Hugging Face repository approx. 1.56TB across 96 safetensors shards.

### Raw benchmarks found

- DeepSWE: Kimi K3 **67.0** vs Claude Fable 5 70.0, GPT-5.6 Sol 73.0, Claude Opus 4.8 59.0; Kimi K3 leads Claude Opus 4.8 and GPT-5.5 on most agentic suites.
- FrontierCode-equivalent wins: Kimi K3 leads all tested models on Program Bench (**77.8**), SWE Marathon (**42.0**), BrowseComp (**91.2**), SpreadsheetBench 2 (**34.8**), and Automation Bench (**30.8**).
- Terminal Bench 2.1: Kimi K3 **88.3** vs GPT-5.6 Sol 88.8, Claude Opus 4.8 84.6, Claude Fable 5 84.6 - within half a point of the frontier lead.
- GDPval-AA v2 (Elo): Kimi K3 **1668** vs Claude Fable 5 1760, GPT-5.6 Sol 1748, Claude Opus 4.8 1600.
- CharXiv Reasoning (RQ, with tools): Kimi K3 **91.3** vs Claude Fable 5 93.5, GPT-5.6 Sol 89.1, Opus 4.8 89.9.
- Internal knowledge-work benchmarks (Moonshot-reported, max effort): Online Exp Bench 75.5, DECK-Bench 73.5, Finance-Bench 62.6 - K3 outperforms Opus 4.8 and GPT-5.5.

Independent composite / cross-source comparison:

- BenchLM / other independent coverage: Kimi K3 ranked among the frontier open-weight models; hallucination rate reported at 51% (Moonshot-flagged independent benchmark), worth treating before adoption.

Conflicts and resolutions:

- DeepSWE: Kimi K3 **67.0** vs Claude Fable 5 **70.0** and GPT-5.6 Sol **73.0** - all vendor-reported at max/xhigh thinking effort; no independent replication yet. Resolution: read as vendor-claim comparisons until third-party evals land.
- Benchmarks are Moonshot-reported at launch with all models at maximum thinking effort; Moonshot's own launch blog concedes user-experience gaps vs Fable 5 / GPT-5.6 Sol, thinking-history sensitivity, and excessive proactiveness.

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** - scored independently.

- **Tool use: 84/100.** DeepSWE **67.0**, Program Bench **77.8**, SWE Marathon **42.0**, Automation Bench **30.8**, BrowseComp **91.2** - agentic coding / tool use evidence. Cap: vendor-reported figures.
- **Reasoning: 86/100.** GDPval-AA **1668** Elo, CharXiv Reasoning **91.3**, internal knowledge-work benches. Cap: internal benches discounted; independent GPQA Diamond not located for this snapshot.
- **Context window: 92/100.** Native 1M-token context, flat pricing across full window; Kimi Delta Attention credited with up to 6.3x faster decoding in million-token contexts. Cap: vendor-stated efficiency claim.
- **Multimodal: 85/100.** Native multimodal (text, image, video) with 1M context. Cap: no independent multimodal benchmark located for this snapshot.
- **Coding: 83/100.** DeepSWE **67.0**, FrontierSWE **86.6**, Terminal Bench 2.1 **88.3**, Program Bench **77.8**; below GPT-5.6 Sol on DeepSWE (**73.0**), ahead on several agentic suites. Cap: vendor-reported eval set.
- **Cost efficiency: 92/100.** $3 / $15 per MTok (cache miss / output), $0.30 cache hit; flat across full 1M context, no long-context surcharge; well below Claude Fable 5 ($10/$50) and GPT-5.6 Sol ($5/$30). Paid tier.
- **Overall Score: 86/100.** (84 + 86 + 92 + 85 + 83) / 5 = **86** (half-up mean of the five quality dims; Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (kimi-k3 / moonshotai/Kimi-K3)** - 2026-10-23
- Method: public-internet research (Moonshot AI official repos, Tech Insider, Digital Applied, TechJuice, BenchLM); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2_6.md`, using the same headings.