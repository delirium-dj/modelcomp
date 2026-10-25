# Gemini 2.5 Flash-Lite — findings by Muse Glimmer 30B

- Source: Muse Glimmer 30B
- Date: 2025-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google’s fast, low-cost lightweight multimodal model for high-throughput inference, chat and agentic workflows. Variant of the Gemini 2.5 family optimized for speed and cost.
- **Provider / access:** Google AI Studio / Gemini Developer API `models/gemini-2.5-flash-lite`. Chat Completions API.
- **Release / knowledge:** 2025-07-22 release; knowledge cutoff January 2025 per official model card.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 input tokens / 65,536 output tokens. Verified via official model card.
- **Modalities:** Text / image / audio / video / PDF input; Text output; Reasoning supported; Tool calls supported; JSON mode / structured outputs supported.
- **Pricing (as of 2025-10-25):** $0.10 per 1M input tokens for text/image/video, $0.30 per 1M input audio; $0.40 per 1M output tokens. Context caching $0.10 input / $0.40 output. Paid tier.
- **Architecture:** Proprietary; parameter count undisclosed. MoE-style family, open-weights not available.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- BFCL-V4 (**tool use**): 36.9% (BenchmarkList, rank 54/102, 48th percentile)
- BFCL_v3_MultiTurn (**tool use**): 13.5% (BenchmarkList, rank 47/85, 45th percentile)
- Terminal-Bench Hard (**agent/tool**): 4.5% (BenchmarkList, rank 207/326, 37th percentile)
- GDPval-AA (**economic value**): 321 Elo (BenchmarkList, rank 298/358, 17th percentile)
- Berkeley Function-Calling Leaderboard: 36.9% overall (BenchmarkList, rank 38/85, 56th percentile)

Reasoning / knowledge:

- GPQA Diamond (**reasoning**): 62.5% (BenchmarkList, rank 266/478, 44th percentile)
- MMLU-Pro (**knowledge**): 75.9% (BenchmarkList, rank 156/312, 50th percentile)
- Humanity's Last Exam (**reasoning**): 6.8% (BenchmarkList, rank 256/488, 48th percentile)
- AIME 2025 (**mathematics**): 53.3% (BenchmarkList, rank 119/226, 48th percentile)
- Artificial Analysis Intelligence Index: 11.41 (BenchmarkList, rank 257/433, 41st percentile)

Coding:

- SciCode (**coding**): 19.3% (BenchmarkList, rank 258/307, 16th percentile)
- no verified public SWE-bench Verified / SWE-Pro score found
- no verified public LiveCodeBench score found

Long context:

- AA-LCR (**long context retrieval**): 55.7% (BenchmarkList, rank 190/419, 55th percentile)
- no verified public MRCR / RULER value at 1M reported

Multimodal:

- MMAU (**multimodal**): 61.6% (BenchmarkList, rank 19/33, 44th percentile)
- CAIS Vision Capabilities Index: 47.9 (BenchmarkList, rank 36/45, 20th percentile)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 52/100.** BFCL-V4 36.9% and Berkeley Function-Calling 36.9% place it in mid-tier tool calling, while Terminal-Bench Hard 4.5% caps the score.
- **Reasoning: 55/100.** GPQA Diamond 62.5% and MMLU-Pro 75.9% show solid graduate-level knowledge, but Humanity's Last Exam 6.8% and Intelligence Index 11.41 limit the score.
- **Context window: 95/100.** 1,048,576 input with measured AA-LCR 55.7% retrieval; tier ≥1M with output 65K, caps at 95 per tier mapping.
- **Multimodal: 82/100.** Native text/image/audio/video/PDF input with MMAU 61.6% and Vision Index 47.9; broad input coverage lifts score, output text-only caps below 90.
- **Coding: 38/100.** SciCode 19.3% at 16th percentile with no verified SWE-bench score; low scientific coding performance caps score.
- **Cost efficiency: 98/100.** $0.10/$0.40 per 1M is near low-cost tier; methodology maps ~$0.10/$0.20 = 97–99.
- **Overall Score: 64/100.** Mean of Tool 52 + Reasoning 55 + Context 95 + Multimodal 82 + Coding 38 = 64.4 → 64. Best-fit: efficient multimodal chat/agent with long context and low cost, not a frontier reasoning/coding model.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2025-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
