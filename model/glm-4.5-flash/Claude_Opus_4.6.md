# GLM-4.5-Flash — findings by Claude Opus 4.6

- Source: Zhipu AI / Z.ai (`glm-4.5-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.5-Flash
- **Short description:** Zhipu AI's free-tier, high-speed flash variant of the GLM-4.5 family, optimized for low latency while inheriting the flagship GLM-4.5's reasoning and coding architecture (355B total / 32B active MoE). Text-only model.
- **Provider / access:** Z.ai API (free tier), also available on ModelScope, OpenRouter, cometapi.com, and other aggregators. Chat Completions–compatible.
- **Release / knowledge:** Released mid-2025; knowledge cutoff approximately April 2025.
- **IDs:** `zhipu/glm-4.5-flash` (free tier on Z.ai platform)
- **Context window:** 128K tokens (131,072) input / up to 96K output — confirmed by models.dev and Z.ai docs.
- **Modalities:** Text in; text out only. Supports Thinking Mode (toggleable via `thinking.type: enabled/disabled`) and Non-Thinking Mode. Tool/function calling, structured output (JSON), Context Caching, MCP integrations.
- **Pricing (as of 2026-11-10):** Free on Z.ai API platform. Some third-party providers may charge nominal fees.
- **Architecture:** Derived from GLM-4.5 flagship MoE architecture (355B total / 32B active parameters). Open-weights ecosystem via Hugging Face. Flash variant optimized for latency and throughput.

### Raw benchmarks found

> Note: Official benchmark scores are published for the core GLM-4.5 flagship and Air variants. No standalone Flash-specific benchmark scores were found in independent evaluations. The Flash variant shares the same underlying ARC (Agentic, Reasoning, Coding) architectural logic but is optimized for speed — performance is expected to be at or modestly below the flagship.

Agent / tool use:

- TAU-Bench / BrowseComp: evaluated as part of GLM-4.5 suite (specific Flash scores not broken out)
- Terminal-Bench: no verified public score found for Flash specifically
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge (GLM-4.5 flagship reference scores):

- GPQA Diamond: **~72.2–79.1%** (vals.ai reports 72.2% strict Diamond; Z.ai/Artificial Analysis report 78.2–79.1% with reasoning mode)
- MMLU-Pro: **~81.2–84.6%** (vals.ai 81.2%; Z.ai/OpenRouter 83.5–84.6% with thinking mode)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no standalone Flash score found

Coding (GLM-4.5 flagship reference scores):

- LiveCodeBench: **~72.9–73.8%** (reasoning mode active, GLM-4.5 flagship)
- SWE-bench: evaluated as part of the GLM-4.5 12-benchmark suite (specific Flash scores not broken out)
- SciCode / AA-SciCode: no verified public score found

Long context:

- 128K token context window confirmed. No specific MRCR/RULER/GraphWalks retrieval benchmarks found for Flash variant.

### Normalized scores (1–100)

- **Tool use: 52/100.** The GLM-4.5 family was evaluated on TAU-Bench and BrowseComp, and Flash supports tool calling, MCP, and structured output. However, no standalone Flash-specific tool-use benchmark scores were found. Score derived from family-level capabilities with a discount for the Flash tier's expected latency-optimized tradeoffs.
- **Reasoning: 55/100.** Flagship GLM-4.5 scores GPQA 72–79% and MMLU-Pro 81–85% — solid but not frontier-leading. Flash variant likely sits modestly below flagship. Thinking Mode provides a reasoning boost but the lack of Flash-specific verified numbers caps the score.
- **Context window: 72/100.** 128K tokens input with up to 96K output — a strong window for a free model. Falls below the 200K+ and 1M tiers of flagship models. No long-context retrieval benchmarks to verify utilization quality.
- **Multimodal: 15/100.** Text-only model — no image, audio, or video support.
- **Coding: 55/100.** Flagship GLM-4.5 LiveCodeBench ~73% is respectable. Flash variant expected modestly below. No standalone coding benchmarks published for Flash. Capped by the absence of verified Flash-specific numbers.
- **Cost efficiency: 100/100.** Completely free on Z.ai's API platform. Zero cost for input and output tokens.
- **Overall Score: 50/100.** Mean of (52 + 55 + 72 + 15 + 55) / 5 = 49.8 → 50. A capable free-tier model with strong context window and decent reasoning inherited from the GLM-4.5 flagship, but held back significantly by text-only modality and the absence of standalone Flash-specific benchmark data.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-10
- Method: Public internet research (Z.ai, Hugging Face, models.dev, vals.ai, OpenRouter, Artificial Analysis, arxiv.org GLM-4.5 technical report); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai — GLM-4.5 model family](https://z.ai)
  - [vals.ai — GLM-4.5 evaluation](https://vals.ai)
  - [models.dev — GLM-4.5-Flash specs](https://models.dev)
  - [Hugging Face — GLM-4.5 open weights](https://huggingface.co)
  - [arxiv.org — GLM-4.5 technical report](https://arxiv.org)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
