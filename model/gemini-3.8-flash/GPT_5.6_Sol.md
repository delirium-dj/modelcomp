# Gemini 3.8 Flash — findings by GPT 5.6 Sol

- Source: Google DeepMind/Gemini 3.8 Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's proprietary Flash-line reasoning model for high-volume autonomous agents, software engineering, and multimodal enterprise workflows.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI, Gemini Enterprise Agent Platform, the Gemini app, and Google Antigravity; API model ID `gemini-3.8-flash`.
- **Release / knowledge:** Released 2026-09-02; Google reports a March 2026 knowledge cutoff, with some domains limited to January 2025.
- **IDs:** `google/gemini-3.8-flash`; no verified OpenCode Zen Free ID found.
- **Context window:** 1,048,576 input tokens and 65,536 maximum output tokens, per Google's model reference as independently summarized by The Model Gap.
- **Modalities:** Text, image, audio, video, and PDF input; text output; adjustable reasoning, tool use, function calling, and structured output.
- **Pricing (as of 2026-10-04):** Introductory $0.75/1M input and $3.75/1M output through 2026-12-31; $1.50/$7.50 from 2027-01-01. Batch prices are half the corresponding standard rates.
- **Architecture:** Proprietary; Google says it is based on Gemini 3.7 Flash and does not disclose parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding**): **19.70%** (Artificial Analysis independent run; Vals AI independently reports 19.19%).
- Terminal-Bench 2.1: **87.64%** (Artificial Analysis, Terminus 2 harness); Vals AI reports **81.27%**.
- Tau3-Banking: **44.95%** (Artificial Analysis independent run).
- GDPval-AA v2: **1545 Elo** (Google model-card comparison table); Artificial Analysis later reports **1411.95** on GDPval-AA v2.1.
- SkillsBench: **57.99%** (Vals AI independent run).
- OSWorld 2.0: **59.0%** partial score with batch tools enabled (Google model card).

Reasoning / knowledge:

- GPQA Diamond: **94.44%** (Vals AI, rank 4 of 138); Artificial Analysis reports **95.25%**.
- HLE: **47.8%** (Artificial Analysis, independent no-tools run); Google's separate HLE-Verified result is **54.9%**.
- MLCR-AA: **21.67%** (Artificial Analysis).
- CritPt: **18.29%** (Artificial Analysis).
- MMLU Pro: **90.22%** (Vals AI).
- AA-Omniscience: **29.55** (Artificial Analysis).

Coding:

- SWE-bench Verified: **80.00% ±1.79** (Vals AI, bash-only mini-swe-agent, rank 24 of 88).
- SWE-Bench Pro V2 Full / Hard: **94.86% / 58.80%** (Scale AI / SEAL).
- LiveCodeBench: **89.48%** (Vals AI, rank 3).
- SciCode: **56.60%** (Artificial Analysis).
- Vibe Code Bench v1.1: **78.65%** (Vals AI); the separate Artificial Analysis Vibe Code Bench result is **18.77%**.
- DeepSWE v1.1: **73.83%** (Datacurve independent board).

Long context:

- AA-LCR v1.1: **81.33%** (Artificial Analysis) with a documented 1,048,576-token input window.

Multimodal:

- MMMU Pro: **89.08%** (Vals AI) and **85.61%** (Artificial Analysis).
- CharXiv: **86.2%** without tools (Google model card).
- LVBench: **87.8%** agentic and **87.1%** static (Google model card).

Sources: [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/), [Google Gemini API release documentation](https://ai.google.dev/gemini-api/docs/latest-model), [The Model Gap evidence ledger](https://themodelgap.com/models/gemini-3-8-flash), and [AIEvals source index](https://aievals.app/models/gemini-3-8-flash).

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong Terminal-Bench 2.1, OSWorld, and workflow results support frontier-class agency, capped by the much harder Terminal-Bench 4.0 and Tau3 results.
- **Reasoning: 94/100.** GPQA around 95%, HLE near 48%, and MMLU Pro above 90% indicate exceptional reasoning, while CritPt and MLCR prevent a higher score.
- **Context window: 96/100.** The 1,048,576-token window plus 81.33% AA-LCR performance earns a near-top score, capped by imperfect measured long-context retrieval.
- **Multimodal: 95/100.** Native text, image, audio, video, and PDF input with strong MMMU Pro, CharXiv, and LVBench results provides unusually broad and capable multimodality.
- **Coding: 94/100.** LiveCodeBench 89.48%, SWE-bench Verified 80%, and DeepSWE 73.83% show elite coding performance, with harder agentic suites still leaving headroom.
- **Cost efficiency: 94/100.** The introductory $0.75/$3.75 price is outstanding for this measured performance, though it is paid and scheduled to double in 2027.
- **Overall Score: 94/100.** Half-up mean of the five quality dimensions; best suited to multimodal, long-context agents and high-volume coding workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official Google documentation and independent benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
