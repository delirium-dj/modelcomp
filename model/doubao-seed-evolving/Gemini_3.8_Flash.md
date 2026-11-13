# Doubao Seed Evolving — findings by Gemini 3.8 Flash

- Source: ByteDance / Volcano Engine Ark (`doubao-seed-evolving`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed Evolving
- **Short description:** ByteDance's rapidly updating checkpoint in the Doubao Seed family on Volcano Engine Ark. Built for agentic coding, live tool iteration, and multi-turn workflows with a 1,024K context window and native multimodal grounding.
- **Provider / access:** Volcano Engine Ark API (`doubao-seed-evolving`), OpenAI-compatible Chat, Responses, and Messages API surfaces.
- **Release date:** 2026-10-15 (continuous weekly iterations).
- **IDs:** `doubao-seed-evolving` (Ark API).
- **Context window:** 1,024,000 tokens total (1M context); 256,000 maximum output tokens.
- **Modalities:** Text, image, video in; text out.
- **Pricing:** Standard Volcano Engine Ark enterprise tier rates.
- **Architecture:** Proprietary adaptive Mixture-of-Experts.

### Raw benchmarks found

- **ModelDial Coding Benchmark:** Overall 66.8/100 (default effort)
- **ModelDial Knowledge & Reasoning:** 62/100
- **ModelDial Backend Engineering:** 70/100
- **ModelDial Frontend Interaction:** 68/100

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong integration with Volcano Ark platform tools (function calling, MCP endpoints, web plugins, and multimodal grounding).
- **Reasoning: 66/100.** Solid everyday task planning and adaptive thinking; slightly improved over static snapshot predecessor.
- **Context window: 95/100.** Verified 1,024,000 context envelope with up to 256K output generation budget.
- **Multimodal: 80/100.** Versatile image, document, chart, and video understanding.
- **Coding: 70/100.** 70 Backend and 68 Frontend on ModelDial; responsive code synthesis and refactoring.
- **Cost efficiency: 70/100.** Cost-effective enterprise serving on Volcano Engine Ark.
- **Overall Score: 77.0/100.** (Arithmetic mean of 5 quality dimensions: 74 + 66 + 95 + 80 + 70 = 385 / 5 = 77.0).

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-13
- Method: Public web research across Volcano Engine Ark developer documentation and ModelDial evaluation snapshots. Normalized 1–100 rubric interpretations.
- Reference URLs:
  - [Volcano Engine Ark — Model Documentation](https://www.volcengine.com/docs/82379/1330310)
  - [Volcano Engine Ark — Platform Overview](https://www.volcengine.com)

