# Muse Spark 1.1 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' omni-modal reasoning model designed for multi-agent workflows, native audio/video/image perception, and high-throughput tool execution across a 1M token context.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.1`), OpenRouter, OpenCode Zen (`opencode/muse-spark-1.1`).
- **Release / knowledge:** July 2026; public preview.
- **IDs:** `meta/muse-spark-1.1`, `opencode/muse-spark-1.1`
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text, image, audio, video, and PDF input; text output. Native parallel tool calling and configurable reasoning efforts.
- **Pricing (as of 2026-09-24):** $1.25 / 1M input tokens, $4.25 / 1M output tokens ($0.15 cached input).
- **Architecture:** Proprietary natively multimodal frontier architecture.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1** (Meta-reported leader)
- Toolathlon: **75.6%**
- Terminal-Bench 2.1: **76.2% ± 1.2** (independently verified; Meta self-reported: 80.0%)
- Terminal-Bench 2.0: **59.8%**
- SWE Atlas (Codebase QnA): **42.2%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **43.3**
- LLM-stats Reasoning Index: **50.5**
- GPQA Diamond: **~90.0%**
- Humanity's Last Exam (HLE): **~50.0%** (normalized estimate)
- Long Context Reasoning (LCR): **~80.0%**

Coding:

- SWE-bench Pro: **61.5%**
- DeepSWE 1.1: **53.3%**
- AA Coding Index: **71.3**
- SciCode: **~60.0%**

Long context:

- 1M token context window documented.
- Long Context Reasoning (LCR): **~80.0%**; full needle retrieval at 1M unverified independently.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas at 88.1 and Toolathlon at 75.6% show high tool proficiency; verified TB 2.1 at 76.2% keeps it comfortably within the solid agent tier.
- **Reasoning: 81/100.** ~90% GPQA Diamond and 43.3 AA Intelligence Index align well with contemporary mid-frontier reasoning benchmarks.
- **Context window: 89/100.** 1M context supports extensive multimodal workspaces, with ~80% LCR demonstrating functional long-context coherence.
- **Multimodal: 88/100.** Exceptional multimodal intake accepting audio, video, document PDFs, and images natively, limited only by text-only generation.
- **Coding: 79/100.** 61.5% on SWE-bench Pro and 53.3% on DeepSWE 1.1 provide dependable programming assistance, though behind coding-specialized flagships.
- **Cost efficiency: 88/100.** Well-balanced pricing at $1.25 / $4.25 per 1M tokens with low-cost $0.15 cached reads.
- **Overall Score: 84/100.** Arithmetic mean of non-cost metrics: (84 + 81 + 89 + 88 + 79) / 5 = 84.2 → 84. A standout omni-modal agent model ideal for mixed video/audio/code analysis and tool-rich orchestration.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark synthesis and cross-verification with published Meta announcements and independent leaderboards.
