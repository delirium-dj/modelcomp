# MiMo V2.5 Pro — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MiMo V2.5 Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** MiMo-V2.5-Pro is the **text-only** flagship of the MiMo-V2.5 family — unlike its omnimodal sibling MiMo-V2.5 (310B/15B, image/video/audio encoders), the Pro has no native vision/audio encoders (per ModelBeats; provider modality columns are empty across registries). The Multimodal score reflects that.

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's April 2026 open-weights flagship — a 1.02T-total/42B-active sparse MoE with hybrid attention, 3-layer multi-token prediction, and 1M context, optimized for very long agentic trajectories (1,000+ tool calls); MIT licensed.
- **Provider / access:** Xiaomi (direct API), OpenRouter (`xiaomi/mimo-v2.5-pro`), HF (`XiaomiMiMo/MiMo-V2.5-Pro`, FP8 E4M3 mixed) and ModelScope; third-party hosts GMICloud (BF16), DeepInfra, AtlasCloud, Novita, DigitalOcean, StreamLake.
- **Release / knowledge:** 2026-04-22 (API) / 2026-04-27 (HF, per llm-registry's "last verified" date). Trained on 27T tokens (llm-stats). Knowledge cutoff not captured.
- **IDs:** `xiaomi/mimo-v2.5-pro` (OpenRouter); `XiaomiMiMo/MiMo-V2.5-Pro` (HF); repo folder `mimo-v2.5-pro`.
- **Context window:** 1,000,000 tokens (1.05M per AI Atlas/OpenRouter listing); Base variant 256K; max output 131,100 (Xiaomi/OpenRouter/Novita) / 1.0M (DeepInfra).
- **Modalities:** Text in, text out only. Reasoning supported (AA Terminal-Bench run used reasoning-on conditions).
- **Pricing (as of 2026-10):** Xiaomi direct $0.435 input / $0.870 output per 1M (cheapest tracked); GMICloud $0.304/$0.609 (BF16, 1.1M ctx); DeepInfra $1.00/$3.00 (cached $0.20); Novita $2.00/$6.00 (cached $0.0043); AtlasCloud $0.435/$0.870; DigitalOcean $0.48/$1.80 (262K ctx); StreamLake $0.522/$1.04.
- **Architecture:** Sparse MoE — 1.02T total / 42B active; 70 layers (1 dense + 69 MoE); hybrid attention (10 full + 60 SWA layers, SWA window 128); 128 heads, 8 KV (GQA); head dim QK 192 / V 128; hidden 6144; 384 routed experts, 8 per token; MoE intermediate 2048; dense intermediate 16384 (layer 0 only); 3 MTP layers. Inherits the MiMo-V2-Flash hybrid-attention + MTP design.

### Raw benchmarks found

**Chat/instruct measurements (third-party):**
- GPQA Diamond (reasoning) **86.6%** (AA, #51; 86.57% per AA; 87% modelgrep; SWEN 87.0).
- SWE-bench Verified **74.0%** (ModelBeats, #47) / **78.9%** (llm-registry, "Verified 2026-04-27") — conflicting values from two aggregators, both claimed verified; unresolved.
- SWE-bench Pro **57.2%** (ModelBeats #24; llm-registry "SWE-bench Pro Agentic 57.2, Verified 2026-04-27").
- Terminal-Bench (hard variant, reasoning on, AA) **43.2%** (obs. 2026-09-16; −22.7 pt vs gpt-5.6-sol).
- IFBench **80.0** (SWEN); HLE **34.0** (SWEN).
- AA Intelligence Index **26.0** (modelgrep, #56/180).
- OpenRouter description claims top rankings on ClawEval, GDPVal, and SWE-bench Pro (no absolute values captured for ClawEval/GDPVal).

**Base-model table (HF card; 5-shot, non-thinking, base checkpoint — NOT chat quality):**
BBH 88.4, MMLU 89.4, MMLU-Redux 92.8, MMLU-Pro 68.5, DROP 86.3, ARC-Challenge 97.2, HellaSwag 89.8, WinoGrande 85.6, TriviaQA 81.3, GPQA-Diamond 66.7, HumanEval+ 75.6, MBPP+ 74.1, LiveCodeBench v6 39.6, SWE-Bench (AgentLess) 35.7. Comparators in the same table: DeepSeek-V4-Pro Base, DeepSeek-V4-Flash Base, Kimi-K2 Base.

## Scores

- **Tool use: 63/100.** Terminal-Bench (hard) 43.2% (AA, reasoning on) is the only tool-use measurement; the model is optimized for 1,000+ tool-call trajectories and claims top ClawEval rankings (unquantified); no Tau-bench/MCP-Atlas score found.
- **Reasoning: 69/100.** GPQA Diamond 86.6% (AA) is frontier-adjacent; HLE 34.0% (SWEN) is decent but below the 40% frontier line; AA Intelligence Index 26.0. Net: upper-mid, below the 2026-10 frontier.
- **Context window: 91/100.** 1M tokens (1.05M per some listings) with hybrid SWA attention; no MRCR-class retrieval benchmark published.
- **Multimodal: 15/100.** Text-only — no native image/video/audio encoders (explicitly distinguished from the omnimodal MiMo-V2.5 sibling).
- **Coding: 71/100.** SWE-bench Verified 74.0–78.9% (conflicting aggregator values, both claimed verified) is frontier-adjacent; SWE-bench Pro 57.2% good; Terminal-Bench hard 43.2% and base LiveCodeBench v6 39.6% are weak; HumanEval+ 75.6% (base). Net: strong but not frontier-leading.
- **Cost efficiency: 96/100.** $0.435/$0.870 per 1M direct (GMICloud $0.304/$0.609), MIT open weights — deep-discount tier for a 1T-class model.
- **Overall Score: 61.8/100.** Mean of Tool use 63, Reasoning 69, Context window 91, Multimodal 15, Coding 71 = 61.8 (Cost efficiency excluded per methodology).

> **Gap vs folder average (72.7): −10.9.** Drivers: the text-only Multimodal score (15) and conservative Reasoning/Coding scores anchored on AA's Index 26.0 and Terminal-Bench hard 43.2%. Peers appear to have weighted the strong SWE-bench Verified result (up to 78.9%) and the 1T/42B scale more heavily. The SWE-bench Verified conflict (74.0 vs 78.9) is reported, not resolved.

## Notes

- Verification trail: HF model card `XiaomiMiMo/MiMo-V2.5-Pro` (architecture table, base-model benchmark table, FP8 precision, 1M/256K variants), ModelBeats (text-only note, GPQA 86.6% #51, SWE-bench Pro 57.2% #24, SWE-bench Verified 74.0% #47), llm-registry (release 2026-04-27, SWE-bench Verified 78.9, SWE-bench Pro 57.2), llm-stats (27T training tokens, DeepInfra pricing), AI Atlas (TB hard 43.2% AA, GPQA 86.6% AA, 1.05M ctx, 30 benchmarks), modelgrep (AA Index 26.0 #56/180, provider table), SWEN (IFBench 80.0, HLE 34.0, GPQA 87.0), OpenRouter ($0.435/$0.870, 1.05M/131.1K).
- Known conflicts: SWE-bench Verified 74.0% (ModelBeats) vs 78.9% (llm-registry); context 1.0M vs 1.05M; GPQA 86.6% (AA) vs 87.0% (SWEN/modelgrep, rounding).
- Open questions: which SWE-bench Verified harness produced 78.9%? Are ClawEval/GDPVal "top rankings" quantified anywhere? What is the HLE score under AA's harness (SWEN's 34.0 is a single source)?
- Future sources: AA model page for mimo-v2.5-pro (full index breakdown), third-party agentic evals, Xiaomi's next MiMo release.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash MiMo V2.5 Pro Overall=61.8 (Tool=63 Reasoning=69 Context=91 Multimodal=15 Coding=71 Cost=96; text-only 1.02T/42B MIT; SWE-bench Verified conflict 74.0 vs 78.9)`
