# Mistral Large 4 — findings by Claude Opus 4.6

- Source: Mistral AI/Mistral Large 4 (`mistral-large-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model (codenamed "le Chonk"), a 1-trillion-parameter granular MoE model designed for complex agentic workflows, coding, and enterprise applications. Currently in public preview with open weights planned for late October 2026.
- **Provider / access:** Mistral Studio API (`mistral-large-4`), OpenRouter. Chat Completions API. Public preview as of 2026-10-06.
- **Release / knowledge:** 2026-10-06 (public preview); open weights scheduled end of October 2026. Knowledge cutoff not publicly specified.
- **IDs:** `mistral/mistral-large-4`
- **Context window:** 1,000,000 tokens (vendor-stated); some independent measurements show effective usage around 524K — verified via Mistral documentation and Artificial Analysis.
- **Modalities:** Text + image in (1.6B vision encoder); text out. Tool/function calls supported. JSON mode supported. 160+ languages. No native audio or video input.
- **Pricing (as of 2026-10-08):** $0.68 / $2.09 per 1M tokens (input / output) — promotional pricing (50% off standard $1.36/$4.18). Cached input: $0.07 per 1M.
- **Architecture:** Granular Mixture-of-Experts (MoE); 1.05 trillion total parameters, ~52B active per token. 1.6B vision encoder. Trained on 3,800 NVIDIA Grace Blackwell GPUs in European datacenters. Open-weight release planned.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **28.3%** (source: early independent evaluations / Artificial Analysis)
- AutomationBench: **59.9%** (source: third-party evaluations)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (v4) (source: Artificial Analysis)
- GPQA Diamond: no verified public score found for Mistral Large 4 specifically
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- FinWorkBench: **67%** (source: Mistral AI)
- Legal Research Bench: **31.73%** (source: early evaluations)

Coding:

- DeepSWE v1.1: **62%** (~61.7% per AA) (source: Mistral AI / Artificial Analysis)
- Coding Agent Index: **~49.8%** (arithmetic mean of DeepSWE, SWE-Atlas-QnA, Terminal-Bench) (source: Artificial Analysis)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M token context claimed; independent evaluations suggest effective context ~524K. No specific MRCR / RULER / GraphWalks retrieval scores found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 at 28.3% is modest but TB4.0 is a harder benchmark version; AutomationBench 59.9% shows solid agentic task completion. Capped by limited tool-use benchmark coverage and early preview status.
- **Reasoning: 75/100.** AA Intelligence Index of 38 places it among the strongest open-weight models but below frontier proprietary models. FinWorkBench 67% shows domain strength. Capped by absence of GPQA/HLE scores and low AA index relative to top models.
- **Context window: 88/100.** 1M tokens claimed by vendor but independent measurements show effective ~524K. Large but with some uncertainty about actual retrieval fidelity at full length.
- **Multimodal: 70/100.** Text + image input with a dedicated 1.6B vision encoder and 160+ languages. No audio or video input. Text-only output. Capped by absence of video/audio modalities.
- **Coding: 80/100.** DeepSWE v1.1 62% is competitive with strong open-weight models. Coding Agent Index ~49.8%. Capped by limited SWE-bench/LiveCodeBench data and being in preview phase.
- **Cost efficiency: 82/100.** $0.68/$2.09 per 1M (promotional) is moderately priced for a 1T-parameter model. Cached input at $0.07 is very efficient. Open weights will enable self-hosting.
- **Overall Score: 78/100.** Mean of (78 + 75 + 88 + 70 + 80) / 5 = 78.2 → 78. A promising frontier-class open-weight model in early preview. Best fit for enterprise and coding workflows requiring open weights and European-hosted infrastructure. Scores may improve as full benchmarks emerge.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (Mistral AI announcements, Artificial Analysis, independent evaluations); scores are normalized 1–100 interpretations, not official vendor scores. Note: model is in public preview as of this date — benchmarks are preliminary.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
