# Claude Sonnet 5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-sonnet-5
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic’s agentic Sonnet model released 2026-06-30. Built for autonomous coding, tool use and reasoning with a 1M-token context. Positioned as close to Opus 4.8 on agentic tasks at lower price. Succeeded by Sonnet 5.5.
- **Provider / access:** Anthropic Claude API `claude-sonnet-5`; also available via Amazon Bedrock and Google Vertex AI. Chat Completions API.
- **Release / knowledge:** 2026-06-30. Knowledge cutoff not published.
- **IDs:** anthropic/claude-sonnet-5. No Free/OpenCode Zen ID.
- **Context window:** 1,000,000 total tokens; 128K max output per meta.json. Verified via Anthropic announcement and meta.
- **Modalities:** Text, image, file in; text out. Reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-10-20):** $3.00 per 1M input / $15.00 per 1M output standard; introductory $2.00/$10.00 was offered through 2026-08-31 per launch. Paid model, no free tier.
- **Architecture:** Proprietary. Parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic launch figures reported in Apidog 2026-07-01; 80.4% vs Opus 4.8 82.7%)
- OSWorld-Verified: **88.3%** (Silicon Report 2026-06-30; Anthropic launch claim) / 81.2% reported in Apidog 2026-07-01 launch table
- SWE-bench Pro: **63.2%** (Anthropic launch figures reported in Apidog 2026-07-01; 58.1% Sonnet 4.6, 69.2% Opus 4.8)

Reasoning / knowledge:

- GPQA Diamond: **96.2%** (Silicon Report 2026-06-30; Anthropic launch claim, surpasses Gemini 3.1 Pro prior high 94.3%)
- ARC-AGI-2: **84.7%** (Silicon Report 2026-06-30; 7-point improvement over Gemini 3.1 Pro 77.1%)

Coding:

- SWE-bench Verified: **82.1%** (Silicon Report 2026-06-30; first model past 80% at launch, vs Sonnet 4.6 79.6%). GoldieBench 2026-06 cites 82.1% from agentos.guide comparison.
- SWE-bench Pro: **63.2%** (see above)

Long context:

- No independent long-context retrieval report found beyond the 1M context claim.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 80.4% and OSWorld-Verified ~81-88% place Sonnet 5 within 2–3 points of Opus 4.8 on tool-heavy agentic tasks. Caps due to SWE-bench Pro gap vs Opus.
- **Reasoning: 95/100.** GPQA Diamond 96.2% is frontier-range; ARC-AGI-2 84.7% supports strong abstract reasoning. Caps by lack of HLE / CritPt public numbers.
- **Context window: 95/100.** 1M total / 128K output tier maps to 95–100 per methodology; capped at 95 pending verified retrieval at 512K+.
- **Multimodal: 70/100.** Image and file input with text output; no audio/video generation reported.
- **Coding: 88/100.** SWE-bench Verified 82.1% is frontier for Sonnet class; SWE-bench Pro 63.2% shows strong agentic coding with gap to Opus 4.8. Caps by Pro score vs top tier.
- **Cost efficiency: 60/100.** $3/$15 per 1M standard pricing maps to ~60 per methodology; intro $2/$10 improves value but model is paid only.
- **Overall Score: 87/100.** Mean of Tool 87, Reasoning 95, Context 95, Multimodal 70, Coding 88 = 87.0. Best fit: agentic coding / tool use strong value pick, reasoning near frontier, multimodal limited to image/file.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
