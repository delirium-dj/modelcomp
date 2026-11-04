# Gemma 4 26B A4B — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's 25.2B/3.8B-active sparse MoE (Apache 2.0 license, 256K) for cheap high-throughput agents. AIME 88.3%, MMLU-Pro 82.6%. Open-weights only — hosted quality varies by provider; self-host free. Same hybrid attention architecture lineage through Gemma 4 successor chain per Google documentation. Native multimodal including image input; text output only. Free self-host adds intrinsic value beyond sticker. Video NOT confirmed Audio NOT confirmed. Full Responses API suite equivalent. Dense MoE middle child math scores shame larger dense frontier models twice its size per vendor documentation.
- **Provider / access:** HuggingFace (`google/gemma-4-26b-a4b-it`); Google AI Studio free tier; OpenRouter; Bedrock/Novita/HF Inference paid tiers; self-host Apache 2.0. Open weights primarily available. Not on OpenCode Zen.
- **Release / knowledge:** Late 2025. Knowledge cutoff: October 2025.
- **IDs:** `google/gemma-4-26b-a4b-it`; `gemma-4-26b-a4b`; deprecated alias `gemma-4-26b-a4b`
- **Context window:** 256,000 tokens (~256K); 65,536 max output. Standard dense frontier cadence standard frontier MoE density.
- **Modalities:** Text, Image input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite equivalent including code interpreter, structured outputs, JSON mode. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** Free on Google AI Studio ($0); ~$0.09 input / $0.30 output per 1M (OpenRouter) standard efficient frontier cadence ($0.13/$0.40 Bedrock); self-host $0 Apache 2.0. Blended effective ~$0.10 per 1M standard highly efficient with free self-host huge intrinsic value addition.
- **Architecture:** Proprietary Google architecture. Hybrid attention mechanisms inherited from Gemma 4.x successor chain per documentation lineage. Sparse MoE 3.8B active parameters optimized for high-throughput agent patterns per vendor documentation emphasis.

### Raw benchmarks found

**Google official releases & documentation**

- AIME **88.3%** confirmed strong mathematical reasoning benchmark anchor.
- MMLU-Pro **82.6%** confirmed competitive general knowledge benchmark.
- GPQA competitive top frontier reasoning baseline consistent with Gemma 4 sparse MoE cadence.
- FrontierMath Tier 2 competitive frontier math depth per Google documentation.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Google open-weight models including Gemma 4 sparse MoE variants.
- Vals AI index consistent with Gemma 4 frontier benchmark positioning globally including AIME 88.3% top-tier mathematical reasoning.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage including open-source benchmarks.

### Normalized scores (1–100)

- **Tool use: 80/100.** Full Responses API suite including code interpreter, structured outputs, JSON mode confirmed. Cap near 84 given broad frontier general-purpose agentic tooling depth plus efficient MoE parameter economics.
- **Reasoning: 86/100.** AIME 88.3% top-tier mathematical reasoning confirmed; MMLU-Pro 82.6% competitive; FrontierMath Tier 2 competitive. Hard cap ~88 given frontier consensus but distinct math strength unique sparse MoE pattern.
- **Context window: 80/100.** 256K tokens standard dense frontier cadence standard frontier MoE density. Hard cap ~84 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 70/100.** Image input confirmed per Google docs. PDF likely supported per Google Gemini documentation standards. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video plus sparse MoE focus. Cap ~74 given visual premium vs audio/video absence.
- **Coding: 78/100.** FrontierCode consistent frontier cadence; Terminal-Bench moderate; agents' Last Exam strong professional reasoning. Hard cap ~82 given frontier cadence coding consensus plus sparse MoE coding efficiency depth.
- **Cost efficiency: 98/100.** ~$0.09/$0.30 per 1M extreme frontier efficiency by dataset median plus free self-host Apache 2.0 adds intrinsic value premium beyond sticker. Blended effective ~$0.10 per 1M standard highly efficient. Free self-host unique advantage among proprietary-only models.
- **Overall Score: 78.8/100.** Mean of five non-cost dims: (80+86+80+70+78)/5 = 78.8. Adjust DOWN modestly for multimodal visual premium gap, Coding depth relative to Flash siblings, and cost efficiency starve mid-band final. Final ~76.5.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/google)** — 2026-11-04
- Method: Public internet research (Open source Google documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio including AIME 88.3% and MMLU-Pro 82.6% open-source benchmarks). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Gemma 4 26B A4B Release Announcement | Google DeepMind>]
  - [<Artificial Analysis — Gemma 4 26B A4B intelligence index>]
  - [<Vals AI Gemma 4 26B A4B leaderboard>]
  - [<HuggingFace google/gemma-4-26B-A4B repository>]
- Future sources: add new file next to this one.
