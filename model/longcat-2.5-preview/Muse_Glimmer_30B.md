# LongCat 2.5 Preview — findings by Muse Glimmer 30B

- Source: meituan/longcat-2.5-preview
- Date: 2026-10-28
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan LongCat family preview released Sep 2026. API-only natively multimodal mixture-of-experts model positioned for long-horizon agentic coding and multimodal workflows across terminals, browsers, GUIs, spreadsheets and design tools. Adds image understanding to LongCat 2.0 line with optional thinking mode and 1M-token context. No open weights published for preview.
- **Provider / access:** Meituan LongCat platform API `https://api.longcat.chat/openai/v1`; Vercel AI Gateway `meituan/longcat-2.5-preview`; compatible OpenAI / Anthropic endpoints. No Hugging Face weights.
- **Release / knowledge:** Released 2025-09-25 per BenchmarkList release note referencing Meituan X post. Knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.5-preview` / `LongCat-2.5-Preview`. No Free/OpenCode Zen ID.
- **Context window:** 1,048,576 tokens native. Verified via Vercel AI Gateway, BenchmarkList and LongCat API docs.
- **Modalities:** Text + image in; text out. Reasoning yes with optional thinking mode enabled by default. Tool calling supported per Vercel description and LongCat API documentation; JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-28):** $0.30 per 1M input tokens, $0.006 per 1M cached input tokens, $1.20 per 1M output tokens. Limited-time list pricing per LongCat pricing doc and independent blog reporting.
- **Architecture:** Natively multimodal mixture-of-experts. 1.6 trillion total parameters with ~48B active parameters. Sparse attention and N-gram embedding design for long context. Vision encoder added over LongCat 2.0 text-only base.

### Raw benchmarks found

Official sources:

- BenchmarkList model profile states Meituan published no benchmarks for this preview. Claims rest on positioning: new image understanding, stronger coding, compatibility with Claude Code and similar agent harnesses. No independent evaluation confirmed at import.
- Vercel AI Gateway model page describes multimodal reasoning model for coding and agentic workflows with 1M-token context and text/image inputs; combines image understanding, visual question answering, content summarization with code generation, code understanding, automated programming, tool calling and optional thinking. No numeric scores provided.

Independent provider / review descriptions:

- Ahmet Balaman blog summary reports 1,048,576-token context, 131,072-token max output, text+image input, optional thinking mode, pricing $0.30/$1.20 with $0.006 cached input. Notes API-only availability, no local weights for 2.5 Preview, open weights exist for LongCat 2.0 under MIT on Hugging Face. Emphasizes caching economics for long agent sessions.
- BenchmarkList also notes API-only status and low promotional price makes model easy to try, but until scores appear it should be treated as unmeasured relative to LongCat 2.0 and other open agentic models.

Conflicting / missing:

- No benchmark numbers published by Meituan; no third-party replication found. Descriptions from Vercel, BenchmarkList and blog are consistent on specs and pricing. No architecture details beyond total/active parameter counts from BenchmarkList. No knowledge cutoff or safety evaluation published in accessible sources.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tool calling and agentic workflows advertised; no BFCL or TAU2-Bench numbers published. Moderate-high based on positioning.
- **Reasoning: 62/100.** Optional thinking mode and long-horizon agent positioning suggest decent reasoning; lack of published GPQA/MMLU/STEM numbers prevents higher confidence.
- **Context window: 95/100.** 1M native tokens is top-tier; verified across multiple sources.
- **Multimodal: 70/100.** Image input + text output with visual QA and summarization claimed; no video/audio generation reported.
- **Coding: 66/100.** Positioned for agentic coding with image input; no LiveCodeBench/SWE-bench numbers published.
- **Cost efficiency: 88/100.** $0.30 input / $1.20 output with very cheap cached input $0.006; API-only but competitive pricing for 1M context class.
- **Overall Score: 72.2/100.** Mean of Tool 68, Reasoning 62, Context 95, Multimodal 70, Coding 66, Cost 88 = 74.8. Best fit: high-context, low-cost API preview with strong agentic positioning but no published independent benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-28
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
