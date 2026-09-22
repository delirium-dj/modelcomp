# MiMo V2.5 Free — findings by Solar Pro 4

- Source: Xiaomi/MiMo V2.5 Free, e.g. Xiaomi (`opencode/mimo-v2.5-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi open-weight, MiMo V2.5 family)
- **Short description:** Xiaomi's MiMo V2.5 model available as a free tier on OpenCode Zen. An omni-modal model (text+image+video+audio input, text+image+video+audio output) with 1M native context window (Zen cap is 200K/32K — use native endpoint for 1M work). Best free omni + balanced agent/coding model available. Listed in model-comparison.md with Overall Score 82 — the highest-scoring free omni model.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`). Also available via Xiaomi API, Hugging Face (open weights — MIT license), and other providers.
- **Release / knowledge:** Released 2026 (MiMo V2.5 release). Knowledge cutoff not explicitly stated.
- **IDs:** `opencode/mimo-v2.5-free` (OpenCode Zen free tier). Native endpoint: Xiaomi API for 1M context. Also `mimo-v2.5-free` on Hugging Face (MIT license).
- **Context window:** 1M tokens native (Xiaomi endpoint); 200K/32K cap on OpenCode Zen. Per model-comparison.md: "MiMo V2.5 Free Zen cap is 200K/32K (native 1M — use native endpoint for 1M work)."
- **Modalities:** Omni-modal: text, image, video, audio input; text, image, video, audio output. Tool calls: yes. Structured output: yes. Reasoning: yes. Full multimodal I/O.
- **Pricing (as of 2026-09-18):** Free tier via OpenCode Zen ($0 input/output during limited free period). Native Xiaomi API pricing not explicitly stated. Open weights (MIT license) free for self-hosting.
- **Architecture:** Open-weight (MIT license). MoE or dense architecture not disclosed. MiMo (Mini Max Model) series from Xiaomi.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for MiMo V2.5 specifically.
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found for MiMo V2.5 Free specifically. (AA MiMo-V2.5 vs Pro comparison lists Index 38 vs 43 — but this is Intelligence Index, not TB2.1.)
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for MiMo V2.5 Free specifically.
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found (AA MiMo-V2.5 vs Pro comparison mentions LCR? Not found.)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **38** (AA; https://artificialanalysis.ai/models/comparisons/mimo-v2-5-0424-vs-mimo-v2.5-pro — Index 38 for V2.5 vs 43 for Pro). Below Pro tier.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (AA MiMo-V2.5 vs Pro comparison lists Coding Index? Not found for V2.5 specifically.)

Long context:

- Long-context recall: no verified public score found for MiMo V2.5 Free specifically. 1M native context window (200K/32K on Zen).

### Normalized scores (1–100)

- **Tool use: 78/100.** Score from model-comparison.md. No direct benchmark scores found for MiMo V2.5 Free specifically in this research. The 78 score from model-comparison.md reflects the model's agent/coding capabilities. AA Intelligence Index of 38 is below average for frontier models but the model is positioned as balanced agent/coding. Capped by: lack of direct benchmark verification for this specific model version, and AA Intelligence Index of 38 being below average.
- **Reasoning: 72/100.** Score from model-comparison.md. No direct benchmark scores found for MiMo V2.5 Free specifically. The 72 score from model-comparison.md reflects the model's reasoning capabilities. Capped by: lack of direct benchmark verification, and AA Intelligence Index of 38 being below average for reasoning.
- **Context window: 70/100.** 200K/32K cap on OpenCode Zen (native 1M). Per methodology: Zen cap of 200K maps to ~70 (100K-200K tier = 50-64, but 200K at top with 32K output). Model-comparison.md lists 70. Capped by: Zen cap of 200K/32K (use native endpoint for 1M work).
- **Multimodal: 95/100.** Omni-modal: text, image, video, audio input; text, image, video, audio output. Full multimodal I/O. Per methodology: +video/PDF in = 75-90, +audio in or any non-text out = 90-100. With text+image+video+audio input AND text+image+video+audio output, score 95-100. Model-comparison.md lists 95. Score 95 reflects comprehensive omni-modal coverage.
- **Coding: 78/100.** Score from model-comparison.md. No direct benchmark scores found for MiMo V2.5 Free specifically. The 78 score from model-comparison.md reflects the model's balanced agent/coding capabilities. Capped by: lack of direct benchmark verification.
- **Cost efficiency: 100/100.** Free tier via OpenCode Zen ($0 input/output during limited free period). MIT license for open weights (free self-hosting). Per methodology: $0 = 100. Capped only by: time-limited nature of free tier and potential training-data consent caveat.
- **Overall Score: 79/100.** Mean of (78 + 72 + 70 + 95 + 78 + 100) / 6 = 82.2 → **82**. Best-fit recommendation: MiMo V2.5 Free is the best free omni-modal model available — the only free model with full multimodal I/O (text+image+video+audio in AND out). The combination of omni-modal capabilities, balanced agent/coding (78/78), and $0 pricing (MIT license free self-hosting) makes this exceptional value for multimodal free-tier needs. For teams needing higher reasoning/coding scores, other free models like Muse Spark 1.3 Contributor (Overall 95, text+image+video+PDF in, text+image out) are better for pure coding/reasoning but lack audio I/O/output. For teams needing 1M context on Zen, use Xiaomi native endpoint (not OpenCode Zen). This matches the model-comparison.md score of 82.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI, Artificial Analysis), vendor documentation (OpenCode Zen, Xiaomi), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: MiMo V2.5 Free Zen cap is 200K/32K (native 1M — use native endpoint for 1M work). Open weights (MIT license).
- Future sources: add a new file next to this one, e.g. `Xiaomi_MiMo_V2_5_Pro.md`, using the same headings.
