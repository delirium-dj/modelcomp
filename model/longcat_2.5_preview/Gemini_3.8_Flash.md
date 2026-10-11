# LongCat 2.5 Preview — findings by Gemini 3.8 Flash

- Source: Meituan / LongCat (`meituan/longcat-2.5-preview`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's sparse Mixture-of-Experts frontier preview foundation model (1.6T total parameters with 48B active) featuring a 1M token context window, native image understanding, interleaved reasoning traces, and promotional availability on OpenCode Zen and Meituan API.
- **Provider / access:** Meituan LongCat API (`meituan/longcat-2.5-preview`), OpenCode Zen Free tier, and AnyRouter.
- **Release / knowledge:** September 25, 2026.
- **Lifecycle status:** Active preview release with temporary promotional free access on developer platforms.
- **IDs:** `meituan/longcat-2.5-preview`, `longcat_2.5_preview`
- **Context window:** 1,048,576 tokens total (1M context window; max output 131,072 tokens).
- **Modalities:** Text and image input; text, code, structured output, and tool-calling output; interleaved reasoning toggle.
- **Pricing (as of 2026-10-11):** Free ($0.00) on OpenCode Zen during promotional trial; standard Meituan promotional API rate is ~$0.30 / 1M input, $1.20 / 1M output ($0.006 cached input).
- **Architecture:** ~1.6T parameter sparse MoE (~48B active parameters per token) with native multimodal cross-attention and LongCat Sparse Attention (LSA).

### Raw benchmarks found

Agent / tool use:

- Deep agent harness integration: natively supported in Claude Code, Hermes, OpenClaw, OpenCode, and Kilo Code.
- Terminal-Bench: community preview evaluation trajectories range 48%–70% across task configurations.
- Multi-turn tool orchestration: sustained execution across hundreds of steps.

Reasoning / knowledge:

- Interleaved reasoning toggle supported with dynamic chain-of-thought expansion.
- Cross-modal visual reasoning on technical diagrams and software architectures.

Multimodal:

- Native text and image understanding; UI screenshot debugging, document OCR, and sketch-to-code translation.

Coding:

- Software engineering agent workflows evaluated across multi-file repository navigation.
- Broad community developer adoption across CLI agent tools.

Long context:

- 1,048,576 tokens context window verified on live API endpoints with up to 131K output headroom.

### Normalized scores (1–100)

- **Tool use: 69/100.** Strong tool execution fidelity across modern developer scaffolds (Claude Code, OpenCode CLI, Hermes) with multi-turn stability.
- **Reasoning: 71/100.** Effective interleaved reasoning and logical analysis, performing reliably in interactive problem breakdown.
- **Context window: 93/100.** 1M context window with 131K output headroom, enabling massive multi-file repository ingest.
- **Multimodal: 50/100.** Functional static image and diagram comprehension, but lacking video or audio multimodal processing.
- **Coding: 70/100.** Solid code generation and refactoring utility, balanced by community reports of occasional verbosity on strict terminal tasks.
- **Cost efficiency: 94/100.** Highly affordable promotional pricing ($0.30 / $1.20 per 1M tokens) with free trial access on OpenCode Zen.
- **Overall Score: 71/100.** Arithmetic mean of non-cost metrics: (69 + 71 + 93 + 50 + 70) / 5 = 70.6 → 71. A versatile 1.6T open-weight preview model delivering 1M multimodal context and solid agentic developer assistance.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Meituan release notes, OpenCode Zen endpoints, and community developer evaluations.
