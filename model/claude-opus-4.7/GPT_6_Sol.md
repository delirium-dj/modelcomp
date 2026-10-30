# Claude Opus 4.7 — findings by GPT 6 Sol

- Source: Anthropic / `claude-opus-4-7`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's proprietary, adaptive-reasoning Opus release for long-running coding, tool orchestration, and high-resolution visual work. It is a distinct April 2026 snapshot, now a legacy model rather than the current Opus release.
- **Provider / access:** Anthropic Messages API, model `claude-opus-4-7`; also Amazon Bedrock (`anthropic.claude-opus-4-7`), Google Cloud and Microsoft Foundry. Anthropic's [model page](https://platform.claude.com/docs/en/models/opus-4-7/overview) lists the platform IDs; no separate Free Zen ID verified.
- **Release / knowledge:** Released 2026-04-16; reliable/training knowledge cutoff January 2026 ([Anthropic model page](https://platform.claude.com/docs/en/models/opus-4-7/overview)).
- **IDs:** `anthropic/claude-opus-4-7` (Claude API ID `claude-opus-4-7`); no verified Zen Free ID.
- **Context window:** 1,000,000 total tokens; 128,000 maximum synchronous output (300,000 in Batch API beta), per [Anthropic](https://platform.claude.com/docs/en/models/opus-4-7/overview). A published MRCR result at a shorter range is **not** proof of retrieval across the full window.
- **Modalities:** Text and images in, text out; adaptive thinking, tools/computer-use workflows and high-resolution image input (long edge up to 2,576 pixels), per [Anthropic's announcement](https://www.anthropic.com/news/claude-opus-4-7). No native audio/video output claimed.
- **Pricing (as of 2026-10-30):** Anthropic API $5 input / $25 output / $0.50 cache read per million tokens; 50% Batch API discount ([model page](https://platform.claude.com/docs/en/models/opus-4-7/overview)). Updated tokenizer may turn the same text into about 1.0–1.35× as many tokens, so the effective task cost can rise ([migration notes](https://www.anthropic.com/news/claude-opus-4-7)). No verified free tier.
- **Architecture:** Proprietary, undisclosed parameter count ([Anthropic model page](https://platform.claude.com/docs/en/models/opus-4-7/overview)).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas scaled tool use: **77.3%**, and BrowseComp **79.3%**, Anthropic's [launch comparisons](https://www.anthropic.com/news/claude-opus-4-7) as transcribed in [Vellum's breakdown](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained). BrowseComp is below the same launch table's Opus 4.6 **83.7%**, an important counterexample to blanket agentic superiority.
- OSWorld-Verified: **78.0%** (Anthropic launch evaluation, [Vellum's chart transcription](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)); not comparable to different OSWorld versions.
- Terminal-Bench 2.0: **69.4%** (Anthropic/Terminus-2, thinking disabled, five attempts; [launch notes](https://www.anthropic.com/news/claude-opus-4-7) and [benchmark table](https://benchlm.ai/models/claude-opus-4-7-adaptive)). [Vals AI's independent Terminal-Bench **2.1** run](https://www.vals.ai/models/anthropic_claude-opus-4-7): **68.54% ±1.30**, #31/75; these are different versions/harnesses, not contradictory measurements of one test.
- Claw-Eval / ClawProBench: no verified public score found for this exact ID.

Reasoning / knowledge:

- GPQA Diamond: **94.2%** Anthropic launch (adaptive, [benchmark table](https://benchlm.ai/models/claude-opus-4-7-adaptive)); independent [Vals AI GPQA](https://www.vals.ai/models/anthropic_claude-opus-4-7): **90.15% ±1.54**, #26/138. The 4.05-point difference is reported, not averaged: prompting and evaluation settings differ.
- Humanity's Last Exam: **46.9% without tools / 54.7% with tools** (Anthropic launch, [Vellum's chart transcription](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)); tool-enabled numbers cannot be compared directly with no-tool runs.
- [Vals AI's independent MMLU Pro](https://www.vals.ai/models/anthropic_claude-opus-4-7): **89.87% ±0.30**, #8/138. GDPval-AA and a stable versioned Artificial Analysis Intelligence Index: no independently verified comparable figure recorded here.

Coding:

- SWE-bench Verified: **87.6%** vendor launch ([Anthropic](https://www.anthropic.com/news/claude-opus-4-7), chart transcribed by [BenchLM](https://benchlm.ai/models/claude-opus-4-7-adaptive)); [Vals AI's separate SWE-bench run](https://www.vals.ai/models/anthropic_claude-opus-4-7) scores **82.00% ±1.72**, #22/88. Different scaffolds and sample settings prevent treating the vendor's 87.6% as an independent reproduction.
- SWE-bench Pro: **64.3%** (Anthropic launch chart, [Vellum transcription](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)); vendor's Opus 4.6 comparison is **53.4%** on that chart.
- [Vals AI LiveCodeBench](https://www.vals.ai/models/anthropic_claude-opus-4-7): **85.07% ±1.01**, #36/143; [Vals Vibe Code Bench v1.1](https://www.vals.ai/models/anthropic_claude-opus-4-7): **71.00% ±4.51**, #45/123. These independent results temper claims of universal coding leadership.

Long context and vision:

- MRCR v2 at 128K–256K: **59.2%** attributed to Opus 4.7 by [OpenAI's comparative results as indexed by BenchLM](https://benchlm.ai/models/claude-opus-4-7-adaptive); cross-vendor comparison, not a full-1M retrieval test. No verified 512K+ retrieval result found.
- CharXiv visual reasoning: **82.1% without tools / 91.0% with tools**, Anthropic's launch chart ([Vellum transcription](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)); independently [Vals AI MMMU Pro](https://www.vals.ai/models/anthropic_claude-opus-4-7) **85.55% ±0.84**, #24/93. These are different visual tasks.

### Normalized scores (1–100)

- **Tool use: 92/100.** MCP-Atlas 77.3% and OSWorld 78.0% support strong orchestration; Vals TB2.1 68.54% and the BrowseComp regression cap it.
- **Reasoning: 92/100.** Anthropic GPQA 94.2% and HLE 46.9% without tools are high, but Vals' GPQA 90.15% and lack of a full-window reasoning result warrant caution.
- **Context window: 95/100.** Anthropic documents 1M total and 128K output; not 100 without ≥98% retrieval verified at 512K+ (the cited MRCR covers only 128K–256K).
- **Multimodal: 70/100.** Image input, 2,576-pixel long-edge support and Vals MMMU Pro 85.55% are good vision evidence; text-only output and no native audio/video limit modality breadth.
- **Coding: 94/100.** Vendor SWE-bench Verified 87.6% / Pro 64.3% and Vals LiveCodeBench 85.07% show strength; the separate Vals SWE-bench 82.00% and Vibe 71.00% temper transfer claims.
- **Cost efficiency: 48/100.** Paid $5/$25 per million tokens is considerably above the ~$3/$15 reference tier; $0.50 cached reads and Batch discount help only applicable workloads.
- **Overall Score: 89/100.** Half-up mean of (92 + 92 + 95 + 70 + 94) / 5 = 88.6; strong for coding agents with images and long context, less compelling for cheap or native audio/video work.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-30 UTC
- Method: Three independent web searches (official release/specs, cross-source benchmark coverage, independent evaluations), followed by direct review of Anthropic, Vals AI, Vellum and BenchLM. Vendor and independent scores are separated where harness, effort, or version differs; normalized scores are interpretations, not official scores.
- Reference URLs:
  - [Anthropic Claude Opus 4.7 announcement and evaluation caveats](https://www.anthropic.com/news/claude-opus-4-7)
  - [Anthropic Claude Opus 4.7 model specifications and API pricing](https://platform.claude.com/docs/en/models/opus-4-7/overview)
  - [Vals AI independent model benchmarks](https://www.vals.ai/models/anthropic_claude-opus-4-7)
  - [Vellum comparison and chart transcription](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
  - [BenchLM adaptive-model benchmark/source index](https://benchlm.ai/models/claude-opus-4-7-adaptive)
