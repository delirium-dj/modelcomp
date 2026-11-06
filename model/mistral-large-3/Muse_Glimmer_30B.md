# Mistral Large 3 — findings by Muse Glimmer 30B

- Source: Mistral AI / Mistral Large 3
- Date: 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** State-of-the-art general-purpose multimodal granular Mixture-of-Experts model from Mistral AI, with 675B total parameters / 41B active and a 2.5B vision encoder. Positioned as a frontier daily-driver and agentic assistant.
- **Provider / access:** Mistral AI API; OpenCode Zen route `opencode/mistral-large-3`. Hugging Face weights `mistralai/Mistral-Large-3-675B-Instruct-2512`. Chat Completions compatible.
- **Release / knowledge:** Released December 2025 per Artificial Analysis. Knowledge cutoff 2023-10-01 per Hugging Face config.
- **IDs:** `mistralai/Mistral-Large-3-675B-Instruct-2512`; `opencode/mistral-large-3`
- **Context window:** 256k tokens total per Artificial Analysis and Hugging Face model card. Verified via model card.
- **Modalities:** Text in/out, image in. No native audio/video. Native function calling / JSON output, system prompt adherence. Not a dedicated reasoning model.
- **Pricing (as of 2026-11-06):** $0.50 per 1M input tokens, $1.50 per 1M output tokens via Mistral API per Artificial Analysis. Paid tier.
- **Architecture:** 675B total parameters, ~41B active per token MoE granular architecture + 2.5B vision encoder. Apache 2.0 license, open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **67.17%** (Hugging Face Eval Results, Idavidrein/gpqa Diamond, 2025-06)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found, model listed with no publicly available API on Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found; 256k context window reported without published long-context retrieval numbers

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 58/100.** No verified public tool-use benchmark found for this exact ID; score capped by lack of independent agentic evidence and vendor note of best-in-class agentic capabilities without published numbers.
- **Reasoning: 67/100.** GPQA Diamond 67.17% is the only verified reasoning/knowledge number found; caps score at that observed level, no HLE/GPQA broader suite published.
- **Context window: 82/100.** 256k token window verified on model card and Artificial Analysis; score reflects large window tier but capped by absence of published long-context retrieval/needle benchmarks.
- **Multimodal: 55/100.** Image input + text output verified; 2.5B vision encoder present. Score reflects partial multimodal coverage, capped by vendor note that model lags behind vision-first models and no published MMMU/ vision leaderboards found.
- **Coding: 60/100.** No verified public coding benchmark found for this exact ID; score reflects general-purpose coding assistant positioning with no independent SWE-bench/LiveCodeBench numbers, capped by lack of evidence.
- **Cost efficiency: 72/100.** $0.50/$1.50 per 1M tokens per Artificial Analysis; moderate pricing for a 675B MoE frontier class, not free.
- **Overall Score: 64/100.** Mean of the five quality dims (58 + 67 + 82 + 55 + 60) / 5 = 64.4 → 64 half-up; Cost efficiency excluded from mean. Best-fit: capable large multimodal MoE with large context but limited independently verified benchmark coverage.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-06
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Large 3 675B Instruct 2512 – Hugging Face model card](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512)
  - [Mistral Large 3 Intelligence, Performance & Price Analysis – Artificial Analysis](https://artificialanalysis.ai/models/mistral-large-3)
  - [Hugging Face Eval Results – GPQA Diamond 67.17](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512)
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B_v2.md`, using the same headings.
