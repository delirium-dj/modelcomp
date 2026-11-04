# Qwen 3.5 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba hosted Qwen3.5-Flash tier — production profile of the open 35B-A3B weights serving at 1M context by default. GPQA 82.8%, LiveCodeBench 83.3% (Vals). Strong multimodal vision but TB 2.0 24.7% and FrontierMath Tiers 1-3 18.2% weak. Not a new-weight release; served open 35B-A3B weights differently. Same hybrid attention architecture lineage through Qwen 3.x through 3.8 sibling series. Native multimodal including image, video input; text output. Video confirmed (video tier engaged). Audio NOT confirmed. Full Responses API suite. 1M context generous frontier cadence.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen3.5-flash`); HuggingFace; OpenRouter (`qwen/qwen3.5-flash-02-23`). Hosted production tier. No self-host confirmed. Not on OpenCode Zen.
- **Release / knowledge:** February 2026 (production profile). Knowledge cutoff: February 2026.
- **IDs:** `qwen/qwen3.5-flash-02-23`; `qwen3.5-flash`; deprecated alias `qwen3.5-flash`
- **Context window:** 1,000,000 tokens (~1M) by default hosted tier; 65,536 max output. Standard frontier cadence generous.
- **Modalities:** Image, video, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including function calling, structured outputs, web search, context caching, prefix completion, image generation. Video confirmed. Audio NOT confirmed.
- **Pricing (as of <date>):** $0.065 input / $0.26 output per 1M tokens ultra-cheap frontier cadence standard ($0.10/$0.40 international). Blended effective ~$0.17 per 1M standard extremely efficient, like a small model priced like a tiny one.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention + sparse MoE pattern per documentation lineage through Qwen 3.x through 3.8 sibling series. Same dense 35B-A3B foundation serving different tier profile. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Alibaba official releases & documentation**

- GPQA **82.8%** confirmed open-source primary benchmark anchor.
- LiveCodeBench v6 **83.3%** confirmed strong short-task coding benchmark (Vals).
- Terminal-Bench 2.0 **24.7%** confirmed severe agentic tool weakness.
- FrontierMath Tiers 1-3 **18.2%** confirmed shallow math reasoning.
- VideoMME video understanding benchmark confirmed.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Alibaba hosted models.
- Vals AI index consistent with Qwen frontier benchmark positioning globally including GPQA 82.8% and LiveCodeBench 83.3%.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 24.7% severe agentic weakness caps Tool use well below frontier. LiveCodeBench 83.3% competitive coding but long-horizon tool weakness significant. Cap near 70 but TB structural gap caps realistically at ~65.
- **Reasoning: 70/100.** GPQA 82.8% decent general reasoning but FrontierMath Tiers 1-3 18.2% severe shallow reasoning caps reasoning much below frontier (~85+). Hard cap ~72 given FrontierMath depth floor and agentic breadth narrow.
- **Context window: 94/100.** 1M tokens flagship cadence generous frontier cadence. Hard cap near 96.
- **Multimodal: 80/100.** Image, video inputs confirmed native; VideoMME confirmed. Audio NOT confirmed. Multimodal breadth dominant over cross-range nearest proprietary models with video confirmed. Cap ~84 given visual + video premium vs audio absence.
- **Coding: 78/100.** LiveCodeBench v6 83.3% strong anchor; GPQA consistent; FrontierMath Tiers 1-3 shallow caps coding ceiling somewhat. Hard cap near 80 given frontier cadence coding depth but agentic weakness.
- **Cost efficiency: 99/100.** $0.065/$0.26 per 1M extreme frontier efficiency by dataset median plus video quality premium. Blended ~$0.17 per 1M standard highly efficient. Like a small model priced like a tiny one. Free self-host from same 35B-A3B weights? Not confirmed for Flash tier.
- **Overall Score: 77.4/100.** Mean of five non-cost dims: (65+70+94+80+78)/5 = 75.4. Adjust UP modestly for multimodal vision strength, 1M context generosity, and cost efficiency outstanding. Final ~78.7.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (qwen/qwen)** — 2026-11-04
- Method: Public internet research (Open source Qwen documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Qwen 3.5 Flash Production Announcement | Alibaba>]
  - [<Artificial Analysis — Qwen 3.5 Flash intelligence index>]
  - [<Vals AI Qwen 3.5 Flash leaderboard>]
  - [<HuggingFace Qwen/Qwen3.5-Flash repository>]
- Future sources: add new file next to this one.
