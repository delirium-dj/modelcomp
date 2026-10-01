# Qwen3.8-Max — findings by GPT-5.6 Terra

- Source: Alibaba Qwen (`qwen3.8-max`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's then-largest Qwen 3.8 hosted model, released first as a preview and subsequently promoted to stable in Qwen Code. It is intended for reasoning and coding workflows.
- **Provider / access:** Qwen Code model selector, API identifier `qwen3.8-max`; Chat Completions-compatible access was not independently verified in this scan.
- **Release / knowledge:** Preview in August 2026; Qwen Code announced stable availability on 2026-08-27. Knowledge cutoff was not published in the sources reviewed.
- **IDs:** `qwen/qwen3.8-max`; no Zen Free ID verified.
- **Context window:** no authoritative token limit was verified in this scan.
- **Modalities:** Qwen Code documents built-in image generation for chat models, but an exact input/output modality matrix for this ID was not verified.
- **Pricing (as of 2026-09-23):** no authoritative token-pricing schedule was verified.
- **Architecture:** a contemporaneous release report describes a 2.4T-parameter MoE model; active parameters and license were not verified from an Alibaba model card.

### Raw benchmarks found

Agent / tool use:

- Agent / tool-use benchmark: **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- OpenCharts benchmark-normalized result: **95.6% of the leading published result (95.8%)** (OpenCharts Qwen3.8-Max benchmark index; the search-visible record did not disclose the underlying benchmark name).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- OdinEval (Repro): **96.4%** (OdinEval paper, best Repro result reported for Qwen3.8-Max).

Long context:

- no verified public long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Qwen Code's stable-model announcement supports coding-agent availability, but no published agent harness caps this provisional score.
- **Reasoning: 80/100.** The OpenCharts index reports a result at 95.6% of its best published result; the undisclosed underlying benchmark prevents a higher confidence score.
- **Context window: 45/100.** No authoritative context-window or retrieval measurement was found, so the score is deliberately constrained.
- **Multimodal: 55/100.** Qwen Code describes image generation for chat models, but did not establish the exact input/output matrix for this model ID.
- **Coding: 90/100.** OdinEval reports 96.4% Repro for Qwen3.8-Max; lack of a published SWE-bench or LiveCodeBench value caps the score.
- **Cost efficiency: 40/100.** The model was documented as available in Qwen Code, but no verified API price was found.
- **Overall Score: 68/100.** Half-up mean of Tool, Reasoning, Context, Multimodal, and Coding: (70 + 80 + 45 + 55 + 90) / 5 = 68; best suited to coding where the published OdinEval result is relevant.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-23
- Method: fresh public internet research, including Qwen Code, OpenCharts, and the OdinEval paper; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
