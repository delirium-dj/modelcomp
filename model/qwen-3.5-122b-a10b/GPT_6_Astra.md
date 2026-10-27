# Qwen3.5-122B-A10B — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.5-122B-A10B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Qwen3.5-122B-A10B, open-weight multimodal reasoning MoE.
- **Provider / access:** Alibaba Model Studio `qwen3.5-122b-a10b`; OpenRouter `qwen/qwen3.5-122b-a10b`, Chat Completions-compatible hosting. Weights: `Qwen/Qwen3.5-122B-A10B`. No distinct Zen Free ID verified.
- **Release / knowledge:** February 2026; catalogs disagree on February 23 versus 25, so exact release day is unresolved. Knowledge cutoff not verified.
- **Context window:** 262,144 native; checkpoint configuration extensible to 1,010,000, not the default hosted limit. Alibaba documents 65,536 maximum output and 260,096 maximum ordinary input (258,048 thinking-mode input).
- **Modalities:** Text, image and video understanding; text output, thinking, tools and structured output. Provider integrations may expose fewer modalities. No native audio output established.
- **Architecture:** 122B language-model parameters, 10B activated; 48-layer hybrid Gated DeltaNet/attention MoE with a vision encoder, Apache 2.0. AA's roughly 125B total counts components differently and is not necessarily a contradictory checkpoint identity.
- **Pricing (2026-10-27):** Alibaba Singapore $0.40 input / $3.20 output per million tokens; Beijing and Frankfurt list $0.115/$0.917 through 128K input and $0.287/$2.294 above it. OpenRouter offers start around $0.26/$2.08. Cached rate not verified; self-hosting is not cost-free inference.

### Sources and raw benchmarks found

1. [Official checkpoint card](https://huggingface.co/Qwen/Qwen3.5-122B-A10B/raw/main/README.md): architecture, native/extended context and vendor evaluation table.
2. [Artificial Analysis model](https://artificialanalysis.ai/models/qwen3-5-122b-a10b) and [reasoning comparison](https://artificialanalysis.ai/models/comparisons/qwen3-5-122b-a10b-non-reasoning-vs-qwen3-5-122b-a10b): independent reasoning configuration, current benchmark versions and serving measurements.
3. [BenchLM](https://benchlm.ai/models/qwen3-5-122b-a10b): secondary aggregation of independent and vendor measurements, not another independent run of AA tests.
4. [Alibaba specifications/pricing](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-122b-a10b) and [OpenRouter](https://openrouter.ai/qwen/qwen3.5-122b-a10b): endpoint constraints and regional/provider-specific prices.

**Agent / tools:** Vendor BFCL v4 72.2%, Tau2 79.5%, BrowseComp 63.8%, Terminal-Bench 2 49.4%. AA reports GDPval-AA v2.1 814 Elo, AA-Briefcase 497, AutomationBench 5%, Terminal-Bench 4 0%. These different generations and harnesses are not interchangeable. No verified Claw-Eval, Toolathon, MCP-Atlas or SWE-Atlas score found.

**Reasoning / knowledge:** Vendor GPQA Diamond 86.6%, MMLU-Pro 86.7%, HLE CoT 25.3%, HLE with tools 47.5%. BenchLM attributes GPQA 85.7% and HLE 25.2% to independent AA testing. Current AA reports Intelligence Index v4.3.2 16, HLE approximately 25%, CritPt 1%, AA-Omniscience −42. The latter is an index, not a negative accuracy percentage. The current index must not be compared numerically with older AA index scales.

**Coding:** Vendor SWE-bench Verified 72.0%, LiveCodeBench v6 78.9%, Terminal-Bench 2 49.4%; independent SciCode approximately 40% (39.7% in the secondary capture). No verified Vibe Code Bench or DeepSWE score found.

**Long context:** Vendor AA-LCR 66.9%, LongBench v2 60.2%; independent AA-LCR v1.1 approximately 76%. Different versions/settings prevent interpreting the difference as a simple replication failure. No verified 98% retrieval at 512K+; extension to 1M does not warrant a native 1M score.

**Vision:** MMMU-Pro 76.9% vendor versus 75.0% independent as attributed by BenchLM. This supports visual reasoning but does not establish audio capabilities.

**Efficiency:** AA lists approximately 131 output tokens/s and $0.32 per Intelligence Index task; these depend on its endpoint/workload. The older GDPval 925 on BenchLM is a different capture from current AA v2.1 814, not an additional result to average. DeepInfra's hosting comparison is provider-authored, not an independent model-quality evaluation. Benchgap includes 105 estimated rows; predictions are excluded here.

### Interpretation and limitations

Vendor Tau2 uses the airline fixes described in the Opus 4.5 card; search evaluation folds context at 256K; CodeForces uses a custom query set. Tool-assisted HLE is not unaided HLE. The vendor's strong small-MoE results coexist with weak current independent automation and terminal results, limiting confidence in autonomous long-running work. Prices differ by region and host rather than proving a source error.

### Normalized scores (1–100)

- **Tool use: 64/100.** BFCL 72.2 and Tau2 79.5 support useful tools; TB2 49.4 and weak independent automation cap autonomous-agent confidence.
- **Reasoning: 78/100.** GPQA approximately 86 and HLE 25 support strong reasoning; CritPt 1 and negative Omniscience constrain frontier claims.
- **Context window: 75/100.** Verified native 262,144 with measured long-context results; unverified extended-window retrieval prevents a 1M-tier award.
- **Multimodal: 80/100.** Image/video understanding with MMMU-Pro around 75–77; text-only output and no verified native audio cap breadth.
- **Coding: 75/100.** SWE Verified 72 and LiveCodeBench 78.9 are useful, tempered by SciCode approximately 40 and weaker terminal execution.
- **Cost efficiency: 91/100.** Singapore $0.40/$3.20 is economical, with lower regional options; thinking-token consumption and deployment costs remain relevant.
- **Overall Score: 74/100.** (64 + 78 + 75 + 80 + 75) / 5 = 74.4, rounded half-up to 74; a capable open multimodal model with moderate agent reliability.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Three targeted public web searches, official card/provider specifications, independent evaluation and cross-site discrepancy review; normalized scores are interpretations, not official vendor scores.
