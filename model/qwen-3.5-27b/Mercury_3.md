# Qwen3.5-27B — findings by Mercury 3

- Source: Qwen / Alibaba (Qwen3.5-27B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba Qwen team's open-weight dense multimodal foundation model (released 2026-02-24/25), 27.8B parameters with linear attention (Gated Delta Networks + FFN) for fast inference. Combines strong reasoning, coding, multilingual, long-context, and visual understanding in a production-friendly Apache 2.0 package.
- **Provider / access:** Open weights (Hugging Face `Qwen/Qwen3.5-27B`, Apache 2.0); hosted via Alibaba Cloud Model Studio, DeepInfra ($0.26/$2.60), Novita ($0.30/$2.40), SiliconFlow, GMI, OpenRouter.
- **Release / knowledge:** Released 2026-02-24 (llm-stats) / 2026-02-25 (sources); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-27b`.
- **Context window:** 262,144 native (Artificial Analysis/llm-stats); some listings cite ~1M (YaRN extension); max output 262K (DeepInfra) / 65.5K (Novita).
- **Modalities:** text + image (+ video per several listings) input; text output; reasoning on/off variants; Apache 2.0.
- **Pricing (as of 2026-11):** from $0.26 in / $2.60 out per 1M (DeepInfra; Novita $0.30/$2.40); open weights free.
- **Architecture:** dense 27.8B, Gated DeltaNet + FFN layers; unified vision-language.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **41.6%** (apxml/model-card summary)
- BenchLM composite: 49.01/100 (#107/216, estimated); multilingual category score 87.1/100 (#10/17)

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (model-card summary)
- MMLU-Pro: **86.1%** (model-card summary)
- AA Intelligence Index: N/A (not measured in AA's index at research time)

Coding:

- SWE-bench Verified: **72.4%** (model-card summary) — matches GPT-5-mini per independent review; best coding/instruction-following in the Qwen3.5 medium lineup
- Per llm-stats comparison: beats LFM3-1.7B on AA-LCR, GPQA, HLE, IFBench, LiveCodeBench v6, SWE-Bench Verified

Long context:

- 262K native; no independent long-context retrieval benchmark captured

Multimodal:

- Unified vision-language; MMMU-Pro and ITBench-AA present in AA's eval list; no numeric MMMU value captured

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 2.0 41.6% is modest for agentic work; no strong independent MCP/agent index numbers captured.
- **Reasoning: 84/100.** GPQA Diamond 85.5% and MMLU-Pro 86.1% are strong for an open 27B.
- **Context window: 80/100.** 262K native with ~1M extension claims; verified native limit is 262K.
- **Multimodal: 78/100.** Text/image (and video per some listings) input with text output; strong unified vision-language design, no multimodal generation.
- **Coding: 84/100.** SWE-bench Verified 72.4% — excellent for the class and matching GPT-5-mini; capped by weaker terminal-bench result.
- **Cost efficiency: 82/100.** $0.26–0.30/$2.40–2.60 with free Apache 2.0 weights — strong value in the open 27B class.
- **Overall Score: 80/100.** Mean of the five non-cost dims (75+84+80+78+84)/5 = 80.2 → 80. Best-fit: a cost-effective open-weight all-rounder; strongest on coding/bench for its size, weaker on agentic terminal work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: Qwen/Qwen3.5-27B (official weights/card)](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Artificial Analysis: Qwen3.5 27B release page](https://artificialanalysis.ai/models/releases/qwen3-5-27b)
  - [llm-stats: Qwen3.5-27B](https://llm-stats.com/models/qwen3.5-27b)
  - [apxml: Qwen3.5-27B specs/benchmarks/VRAM](https://apxml.com/models/qwen35-27b)
  - [BenchLM: Qwen3.5-27B](https://benchlm.ai/models/qwen3-5-27b)
  - [Awesome Agents: Qwen3.5-27B](https://awesomeagents.ai/models/qwen-3-5-27b/)
  - [OpenRouter: qwen/qwen3.5-27b](https://openrouter.ai/qwen/qwen3.5-27b)
- Future sources: add a new file next to this one using the same headings.
