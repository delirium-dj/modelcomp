# Gemini 3.1 Flash Lite — findings by Big Pickle

- Source: Google DeepMind (`gemini-3.1-flash-lite`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's most cost-efficient model family, billed as the "most cost-effective AI model yet," targeting massive-scale throughput with a full 1M-token context at lite-tier prices.
- **Provider / access:** Google Gemini API (Gemini Developer API / Vertex AI), `gemini-3.1-flash-lite`.
- **Release / knowledge:** Published 2026-03-03 (DeepMind model card); knowledge aligned with the March 2026 release.
- **IDs:** `gemini-3.1-flash-lite` (proprietary; no open weights, `open_weights = false`)
- **Context window:** 1,000,000 tokens (text, image, audio, video input).
- **Modalities:** text, image, audio, video input; text output.
- **Pricing (as of 2026-09-20):** $0.25 in / $1.50 out per 1M tokens; output speed ~363 tokens/s.
- **Architecture:** Proprietary, undisclosed; lite-optimized variant engineered for cost and throughput rather than peak reasoning.

### Raw benchmarks found

Reasoning / knowledge:

- HLE (Humanity's Last Exam, no tools): **16.0%** (DeepMind model card, 2026-03).
- GPQA Diamond (no tools): **86.9%** (DeepMind model card, 2026-03).

Long context:

- MRCR v2: 128K avg **60.1%**; 1M pointwise **12.3%** (DeepMind model card, 2026-03).

Agent / tool use:

- Tool/agentic benchmarks: **no verified public score found**.

Coding:

- Coding benchmarks: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 74/100.** Function-calling support is standard for the Flash Lite tier, but no agentic benchmark results are published; score is a capability-based estimate for a cost-first model.
- **Reasoning: 78/100.** GPQA Diamond 86.9% is excellent for the tier, but HLE 16.0% shows the ceiling drops sharply on frontier-hard questions.
- **Context window: 68/100.** The 1M window is top-tier in span, but MRCR 128K avg 60.1% and 1M pointwise 12.3% show real retrieval degradation at long ranges.
- **Multimodal: 72/100.** Text/image/audio/video input is fully supported; text-only output keeps it below omni models.
- **Coding: 65/100.** No published coding benchmarks; 363 tok/s throughput is well-suited to high-volume generation, but the lite tier is not a coding specialist.
- **Cost efficiency: 92/100.** $0.25/$1.50 per 1M at 363 tok/s makes it arguably the best cost-to-capability ratio on the market.
- **Overall Score: 71/100.** Mean of the five quality dims (74+78+68+72+65)/5 = 71.4. A ruthlessly cost-efficient 1M-context workhorse; quality dims are led by strong GPQA for the price and held back by long-context retrieval and the lack of coding/agentic evals.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (deepmind.google model cards, blog.google, ai.google.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.