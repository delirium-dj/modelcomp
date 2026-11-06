# Muse Spark Open — findings by Muse Glimmer 30B

- Source: Meta / Muse Spark Open
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight MoE foundation model 816B total / 42B active released Oct 2026 by Meta Superintelligence Labs for agentic coding, developer workflows and long-horizon repository tasks. Natively multimodal with 1M context.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-open`; Hugging Face `meta-models/Muse-Spark-Open-816B-A42B`. Chat Completions via third-party inference providers. Self-hostable open weights.
- **Release / knowledge:** 2026-10-15; knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-open`
- **Context window:** 1,048,576 tokens total; up to 131,072 max output. Verified from Hugging Face model card and meta.json.
- **Modalities:** Input text, image, video, audio; output text. Reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-11-06):** Free open-weight checkpoint BF16/NVFP4 on Hugging Face; hosted serving via OpenCode Zen or self-hosted compute. $0 license cost. Self-host compute costs apply.
- **Architecture:** 816B total / 42B active Mixture-of-Experts Transformer with Perception Encoder. Open weights under Muse Model License.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **76.4%** (Terminus 2 agent, Hugging Face model card)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1401** Elo (GDPVal-AA v2, Hugging Face model card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon Verified: **72.8** (hkust-nlp/Toolathlon, Hugging Face model card)
- MCP-Atlas: **89.2** (Hugging Face model card)
- SWE Atlas Codebase QnA: **58** (SWE-Atlas-QnA Preferred harness, Hugging Face model card)
- JobBench: **61.8** (Hugging Face model card)

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Hugging Face model card)
- HLE: **61.0%** (w/ tools, cais/hle, Hugging Face model card)
- HLE-Diamond (no tools): **26.1%** (Hugging Face model card)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **39** (Artificial Analysis Intelligence Index, Hugging Face model card)
- Omniscience Accuracy / Hallucination Rate: AA Omniscience **25** (Hugging Face model card)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **58.5%** (SciCode, Hugging Face model card)
- Vibe Code Bench: no verified public score found
- DeepSWE 1.1 Preferred harness: **60** (Hugging Face model card)
- DeepSWE / Coding Index / other: Terminal-Bench 2.1 76.4% as above

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 74/100.** MCP-Atlas 89.2 and Toolathlon Verified 72.8 show strong agentic tool use, capped by JobBench 61.8 and lack of Tau benchmarks.
- **Reasoning: 70/100.** GPQA Diamond 89.0 is strong, but HLE-Diamond no-tools 26.1 and Omniscience 25 limit overall reasoning depth.
- **Context window: 90/100.** 1M token context with 131k max output verified; no independent long-context retrieval score caps below top tier.
- **Multimodal: 65/100.** Multimodal inputs verified; BabyVision 80.2 and SimpleVQA 73.6 offset by WorldVQA 49.4 and VideoMMEv2 61.5.
- **Coding: 65/100.** DeepSWE 1.1 60 and SWE-Atlas-QnA 58 with Terminal-Bench 2.1 76.4 show solid coding agent ability, capped by no SWE-bench Verified score.
- **Cost efficiency: 100/100.** $0 license cost open weights; self-host compute required.
- **Overall Score: 73/100.** Mean of Tool 74, Reasoning 70, Context 90, Multimodal 65, Coding 65. Best fit for self-hosted agentic coding with long context.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-06
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark Open Model Card – Hugging Face meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Muse Spark Open Evaluation Methodology – Meta Research](https://research.meta.ai/static/muse-spark-open-evaluation-methodology)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
