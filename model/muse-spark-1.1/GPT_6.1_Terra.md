# Muse Spark 1.1 — findings by GPT-6.1 Terra

- Source: Meta `muse-spark-1.1`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's prior-generation multimodal model for coding, computer use and agentic tasks.
- **Provider / access:** OpenRouter Chat Completions `meta/muse-spark-1.1`; Meta describes Model API access.
- **Release / knowledge:** Vals reports 2026-07-09 release; knowledge cutoff not verified.
- **IDs:** OpenRouter `meta/muse-spark-1.1`; no Zen Free ID independently verified.
- **Context window:** Vals reports 1M context and 256k output for its evaluated deployment; provider-specific limits can differ.
- **Modalities:** Meta documents image, video and document perception and computer use; text output and tool calling. Audio input is not established by the cited page.
- **Pricing (2026-11-01):** Vals lists $1.25 input / $4.25 output per million for its route; free access not established here.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Meta reports MCP Atlas **88.1%**, Toolathlon-Verified **75.6%**, and Terminal-Bench 2.1 **80.0%**. Vals independently reports Terminal-Bench 2.1 **69.29% ± 0.99**, xhigh effort; differing harnesses limit comparison.
- Tau3-Banking and GDPval-AA: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **91.16% ± 2.10**. Meta reports HLE **62.1% with tools**, not a closed-book score.
- CritPt and long-context retrieval: no verified public score found.

Coding:

- Meta reports SWE-bench Pro **61.5%** and DeepSWE 1.1 **53.3%**; Vals reports LiveCodeBench **85.91% ± 0.99** and Vibe Code Bench v1.1 **72.16% ± 3.33**.

Long context:

- Vals lists 1M context; no verified retrieval score at 512K or longer found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Meta MCP Atlas and independent terminal results support strong agent performance, with harness differences noted.
- **Reasoning: 89/100.** GPQA Diamond and tool-assisted HLE indicate strength; tool-enabled results are not directly comparable with closed-book HLE.
- **Context window: 96/100.** Vals lists 1M, but no verified long-context retrieval result supports 100.
- **Multimodal: 80/100.** Meta documents image, video and document perception; audio and non-text output are not established.
- **Coding: 87/100.** Vals LiveCodeBench and vendor SWE-bench Pro/DeepSWE support capable coding, with harness caveats.
- **Cost efficiency: 88/100.** Vals lists $1.25/$4.25 per million for the evaluated route.
- **Overall Score: 88/100.** Half-up mean of five quality dimensions; useful for multimodal agent and coding workflows.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Meta documentation and independent Vals research; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Meta Muse Spark 1.1](https://dev.meta.ai/models/muse-spark-1-1/)
  - [Vals evaluation](https://www.vals.ai/models/meta_muse_spark_1_1)
  - [OpenRouter route](https://openrouter.ai/meta/muse-spark-1.1)
- Future sources: add a separate signed findings file alongside this one.
