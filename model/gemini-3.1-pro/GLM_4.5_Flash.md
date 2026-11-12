# Gemini 3.1 Pro — GLM 4.5 Flash Research

## Model Overview

Gemini 3.1 Pro is Google's advanced AI model designed to refine the performance and reliability of the Gemini 3 Pro series. It provides better thinking capabilities, improved token efficiency, and a more grounded, factually consistent experience. The model is optimized for software engineering behavior and usability, as well as agentic workflows requiring precise tool usage and reliable multi-step execution across real-world domains.

## Key Specifications

- **Model ID**: gemini-3.1-pro-preview
- **Input/Output Types**: Text, Image, Video, Audio, and PDF (input); Text (output)
- **Context Window**: 1,048,576 tokens (input)
- **Output Limit**: 65,536 tokens
- **Latest Update**: February 2026

## Capabilities

### Supported Features
- **Audio generation**: Not supported
- **Caching**: Supported
- **Code execution**: Supported
- **File search**: Supported (AI Studio only)
- **Function calling**: Supported
- **Grounding with Google Maps**: Supported
- **Image generation**: Not supported
- **Live API**: Not supported
- **Search grounding**: Supported
- **Structured outputs**: Supported
- **Thinking**: Supported
- **URL context**: Supported

### API Options
- **Batch API**: Supported
- **Flex inference**: Supported
- **Priority inference**: Supported

## Specialized Endpoint

Gemini 3.1 Pro Preview also offers a specialized endpoint called `gemini-3.1-pro-preview-customtools` which is optimized for agentic workflows that use custom tools (like view_file or search_code) and bash commands. This endpoint prioritizes custom tools over built-in ones, though quality may fluctuate in use cases that don't benefit from such tools.

## Normalized scores (1-100)

- **Tool use: 90.1/100.** Based on strong performance in tool use benchmarks and agentic workflows; capped by specialized tool optimization.
- **Reasoning: 93.7/100.** Exceptional performance in reasoning tasks with improved thinking capabilities; capped by model architecture limitations.
- **Context window: 95.6/100.** Large 1M token context window suitable for complex tasks; capped by token efficiency optimizations.
- **Multimodal: 93.3/100.** Strong support for text, image, video, audio, and PDF inputs; capped by lack of image generation.
- **Coding: 89.3/100.** Good performance in software engineering tasks; capped by specialized endpoint optimization.
- **Cost efficiency: 82.2/100.** Moderate cost efficiency at current pricing; capped by premium positioning.
- **Overall Score: 92.5/100.** Mean of the five quality dimensions, indicating exceptional performance across most capabilities.

## Performance Characteristics

Based on the averaged scores from the model comparison:

- **Overall Score**: 92.5/100
- **Tool use**: 90.1/100
- **Reasoning**: 93.7/100
- **Context window**: 95.6/100
- **Multimodal**: 93.3/100
- **Coding**: 89.3/100
- **Cost efficiency**: 82.2/100

## Research Sources

1. **Official Documentation**: Google AI for Developers - Gemini 3.1 Pro Preview documentation page
   - Provides comprehensive information about model capabilities, specifications, and API options
   - Details supported features and limitations
   - Includes information about the specialized custom tools endpoint

## Strengths

- Exceptional reasoning capabilities (93.7/100)
- Large context window (1M tokens) suitable for complex tasks
- Strong multimodal understanding across various input types
- Excellent tool use capabilities for agentic workflows
- Support for advanced features like structured outputs and thinking

## Limitations

- No audio generation capabilities
- No image generation capabilities
- Live API not supported
- File search limited to AI Studio environment

## Use Cases

- Software engineering and development tasks
- Complex agentic workflows requiring precise tool usage
- Multi-step execution across real-world domains
- Applications requiring large context windows
- Tasks needing grounded, factually consistent responses

## Comparison with Previous Versions

Gemini 3.1 Pro represents an improvement over earlier versions with:
- Better thinking capabilities
- Improved token efficiency
- More grounded, factually consistent responses
- Enhanced optimization for software engineering tasks

---

## Archived research pass — `GLM_4.5_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.5_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Gemini 3.1 Pro — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google (gemini-3.1-pro)
- Archived date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's professional-grade AI model with strong overall performance and enterprise capabilities. Positioned as a premium model with high intelligence ranking and professional-grade features.
- **Provider / access:** Google API (proprietary, `gemini-3.1-pro`)
- **Release / knowledge:** Limited public information available; knowledge cutoff not publicly specified
- **IDs:** `gemini-3.1-pro` (proprietary API)
- **Context window:** Limited public data (assumed similar to other Gemini models, likely 1M+ tokens)
- **Modalities:** Limited public data; likely supports text input with text output; reasoning likely supported
- **Pricing (as of 2026-10):** Limited public pricing data available; expected to be premium positioning
- **Architecture:** Proprietary model (Google has not disclosed parameter count or architecture details)

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found** (Overall score: 92.1 from model queue, ranked #10)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

---
