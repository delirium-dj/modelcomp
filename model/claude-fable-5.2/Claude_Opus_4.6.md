# Claude Fable 5.2 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-fable-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's frontier Mythos-class successor to Fable 5.1, optimized for long-horizon agentic workflows, advanced codebase engineering, scientific reasoning, and hardware/CAD tasks. Released November 9, 2026.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5.2`), also via Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Chat Completions–compatible and native Claude API.
- **Release / knowledge:** 2026-11-09 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5.2` (no Free ID exists)
- **Context window:** 1,000,000 tokens input / 128,000 tokens output — confirmed by Anthropic docs and OpenRouter.
- **Modalities:** Text + image in; text out. Advanced vision/spatial reasoning for PDFs, schematics, CAD blueprints. Adaptive "Thinking" mode always on (configurable effort: low/medium/high/xhigh/max). Tool calls, JSON mode supported.
- **Pricing (as of 2026-11-10):** $8–$10/1M input, $40–$50/1M output, cache read $0.20–$0.25/1M (sources vary slightly; Anthropic lists $8/$40, some aggregators $10/$50). Paid only.
- **Architecture:** Proprietary. No open weights. Successor to Fable 5.1 with enhanced spatial/visual reasoning and agentic capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.2%** (Anthropic announcement)
- Terminal-Bench Science: **55.7%** (Anthropic announcement)
- FrontierCode 2.0 (maintainer-acceptance): **45.3%** at High effort (rdworldonline.com / Anthropic)
- BenchCAD 2.1: **83.5%** (Anthropic announcement — nearly double Fable 5.1's 44.4%)
- Diode PCB Gym: **69%** (end-to-end circuit board layout, Anthropic)
- SWE-bench Multimodal: **62.3%** (OpenRouter / Anthropic)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~93–96%** (range across evaluation harnesses and effort configurations; near saturation, reported by vals.ai and Artificial Analysis)
- HLE-Diamond Overall: **80.2%** at Max effort (Artificial Analysis)
- HLE-Diamond Reasoning: **85.6%** at Max effort (Artificial Analysis)
- HLE-Diamond Knowledge: **74.8%** (Artificial Analysis)
- HLE (broader): **~74.2–74.3%** (tool-enabled evaluations)
- Artificial Analysis Intelligence Index: **65** (peak, Max effort configuration)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no standalone Fable 5.2 score found (SWE-bench Multimodal 62.3% reported above)
- LiveCodeBench: Fable 5.1 predecessor scored ~90.5%; Fable 5.2 expected at or above this level — exact score not found in independent evaluations
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- 1M token context window confirmed. No specific MRCR/RULER/GraphWalks retrieval numbers found for Fable 5.2. Prior Claude models demonstrate strong long-context retrieval at 1M scale.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 65.2%, BenchCAD 83.5%, Diode PCB Gym 69%, FrontierCode 45.3% — exceptional breadth across agentic, hardware, and code-acceptance tasks. Among the strongest tool-use profiles available. Capped only by the absence of Toolathon/MCP-Atlas scores.
- **Reasoning: 95/100.** GPQA Diamond ~93–96% (near saturation), HLE-Diamond 80.2% (top-tier), Intelligence Index 65 (peak). Frontier-class reasoning across both academic and expert-level evaluations. Capped by the HLE knowledge subscore trailing slightly behind reasoning.
- **Context window: 92/100.** 1M token input is the highest commercially available tier. 128K output is also generous. No specific long-context retrieval benchmark found to verify utilization quality, which caps the score slightly below maximum.
- **Multimodal: 65/100.** Text + image input with advanced spatial/visual reasoning for PDFs, schematics, and blueprints. No audio/video input. No image/audio output. Strong vision capabilities (BenchCAD, Diode PCB) lift it well above text-only, but output-side limitations cap the score.
- **Coding: 93/100.** SWE-bench Multimodal 62.3%, FrontierCode 45.3%, predecessor LiveCodeBench ~90.5%. Demonstrated multi-file, multi-agent autonomous coding (1,000+ subagent orchestration). Leading agentic coding model. Capped by lack of standalone LiveCodeBench/SWE-bench Verified numbers for 5.2 specifically.
- **Cost efficiency: 30/100.** $8–$10/$40–$50 per 1M tokens — premium frontier pricing. No free tier. Intended for high-complexity engineering tasks rather than routine queries.
- **Overall Score: 87/100.** Mean of (92 + 95 + 92 + 65 + 93) / 5 = 87.4 → 87. A top-tier frontier model excelling in reasoning, coding, and agentic workflows, held back from the highest overall by text+image-only multimodal input (no audio/video) and premium pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-10
- Method: Public internet research (Anthropic announcements, Artificial Analysis, vals.ai, OpenRouter, rdworldonline.com, VentureBeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.2 announcement](https://www.anthropic.com/news/claude-fable-5.2)
  - [Anthropic — Pricing](https://www.anthropic.com/pricing)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai)
  - [vals.ai — GPQA benchmark tracking](https://vals.ai)
  - [OpenRouter — Claude Fable 5.2](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
