# Claude Opus 5.5 — findings by Space Bunny Alpha

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship model for demanding reasoning, long-running coding agents, knowledge work, and multimodal analysis.
- **Provider / access:** Anthropic API `claude-opus-5-5`; Amazon Bedrock `anthropic.claude-opus-5-5`; Google Cloud `claude-opus-5-5@20250922`; Microsoft Foundry `claude-opus-5-5`; OpenRouter `anthropic/claude-opus-5.5`.
- **Release / knowledge:** Released 2026-09-22; reliable knowledge/training cutoff June 2026 (Anthropic models overview).
- **Context window:** 1,000,000 tokens; maximum output 128K tokens.
- **Modalities:** Text and image input, text output; adaptive thinking is always on, with effort as the primary control; tool use is supported. Anthropic's current model overview lists all current Claude models as supporting text/image input, text output, vision, and tools.
- **Pricing (as of 2026-09-25):** $4 input / $0.20 cache read / $20 output per 1M tokens; cache writes $5 per 1M. Fast mode is $8/$40 per 1M.
- **Architecture:** Proprietary; parameter count and architecture were not disclosed.

### Raw benchmarks found

> Anthropic's launch table reports Opus 5.5 at adaptive thinking with max effort unless noted. The launch notes also state that production safeguards could invoke fallback on some cybersecurity/biology tasks, so those rows are not pure unconstrained model scores.

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic launch table; xhigh effort for this row).
- FrontierCode v1.1: **54.4%**; CursorBench 4.0: **57.8%** (Anthropic launch table).
- AutomationBench: **40.0%** (Zapier evaluation reported by Anthropic; safeguard interventions counted as failures).
- OSWorld 2.0: **81.8% partial** (Anthropic launch table).
- GDPval-AA v2.1: **1,846 Elo**; HLE with tools: **67.7%** (Anthropic launch table).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57.6** current max-effort/fallback measurement; the Artificial Analysis model page reports **58** after rounding.
- Artificial Analysis HLE: **61.4%**; AA-LCR: **84.7%**; CritPt: **31.7%** (OpenRouter benchmark summary).
- No exact public GPQA Diamond score was found in the sources reviewed.
- Anthropic reports 40% lower typical workload cost than Opus 5 and more than 30% faster output, based on its internal tests.

Coding:

- Terminal-Bench 4.0: **66.4%**; FrontierCode v1.1: **54.4%** (Anthropic launch table).
- Artificial Analysis SciCode: **66.9%** (OpenRouter benchmark summary).
- No exact public SWE-bench Verified or SWE-bench Pro score was found.

Long context:

- AA-LCR: **84.7%** with a 1M context window (Artificial Analysis/OpenRouter).
- No standalone exact-model RULER, MRCR, or GraphWalks result was found.

Multimodal:

- OSWorld 2.0: **81.8% partial**; Chartography: **89.0% with tools** (Anthropic launch table).
- Text/image input and text output are verified by the Anthropic models overview; no separate exact-model visual benchmark beyond the rows above was found.

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 4.0 at 66.4%, FrontierCode at 54.4%, CursorBench at 57.8%, and OSWorld 2.0 at 81.8% show exceptional long-horizon agent and computer-use capability.
- **Reasoning: 94/100.** HLE at 67.7%, AA-LCR at 84.7%, CritPt at 31.7%, and the 57.6 Intelligence Index are frontier-level; the lack of a verified exact GPQA result prevents a perfect rating.
- **Context window: 98/100.** The 1M context and 84.7% AA-LCR result are near the methodology's ceiling.
- **Multimodal: 88/100.** Verified image input plus 89.0% Chartography and 81.8% OSWorld support strong visual/UI reasoning, though public visual evidence is narrower than text/agent evidence.
- **Coding: 94/100.** Terminal-Bench 4.0, FrontierCode, CursorBench, and SciCode at 66.9% indicate top-tier coding-agent performance; no exact SWE-bench result was found.
- **Cost efficiency: 82/100.** $4/$20 is expensive, but the $0.20 cache-read price, 40% lower typical workload cost than Opus 5, and more than 30% faster output improve the effective value.
- **Overall Score: 94/100.** A frontier multimodal reasoning and coding model with a 1M window; best for demanding autonomous agents and complex knowledge work where quality and context outweigh token cost.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: Anthropic's official launch post and model documentation, Artificial Analysis model measurements, and OpenRouter benchmark metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
