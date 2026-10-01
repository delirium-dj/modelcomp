# Kimi K2.7 Code — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/kimi-k2-7-code`), BenchLM (`https://benchlm.ai/models/kimi-k2-7-code`), HuggingFace (`https://huggingface.co/moonshotai/Kimi-K2.7-Code`), OpenCode Zen docs (`https://opencode.ai/docs/zen`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's June 2026 coding-focused agentic MoE reasoning model; 1T parameters (32B active), 256K context, text/image/video input, text output. Apache-style license, open weights on HuggingFace.
- **Provider / access:** Moonshot AI API at `https://platform.moonshot.ai` (OpenAI-Compatible); OpenCode Zen: `opencode/kimi-k2.7-code` at $0.95/$4.00 per 1M tokens
- **Release / knowledge:** Released June 12, 2026; knowledge cutoff not published
- **IDs:** `opencode/kimi-k2.7-code` (Zen, per docs); `moonshotai/Kimi-K2.7-Code` (HF); `kimi-k2.7-code` (Kimi API)
- **Context window:** 256K total (per AA model page, HF model card, and BenchLM). Note: `meta.json` lists 128K — discrepancy; using 256K as all three sources agree.
- **Modalities:** Text, image, and video input, text output (per AA model page and HF model card). Note: `meta.json` lists "Text in/out" — discrepancy; AA/HF/BenchLM all confirm image+video input support.
- **Pricing (as of 2026-10-01):** $0.95 input / $4.00 output per 1M tokens (Kimi API and Zen); cache hits 80% discount
- **Architecture:** Mixture-of-Experts (MoE); 1T total parameters, 32B active; 384 experts, 8 selected per token; MLA attention; SwiGLU activation; MoonViT (400M) vision encoder
- **License:** Modified MIT License (commercial use allowed with restrictions)
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 88.1 tokens/s output (Kimi API, per AA model page)

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/kimi-k2-7-code`), BenchLM (`https://benchlm.ai/models/kimi-k2-7-code`), HuggingFace model card (`https://huggingface.co/moonshotai/Kimi-K2.7-Code`). BenchLM covers 27 of 618 benchmarks.

Agent / tool use:

- **τ²-bench:** **90.1%** — (Artificial Analysis model benchmarks via BenchLM)
- **Terminal-Bench 2.1 (Vals):** **67.0%** — (Vals AI: Terminal-Bench 2.1 leaderboard via BenchLM)
- **MCP Atlas:** **76.0%** — (MoonshotAI: Kimi K2.7 Code model card on HF)
- **MCP Mark Verified:** **81.1%** — (MoonshotAI: Kimi K2.7 Code model card on HF)
- **Kimi Claw 24/7:** **46.9%** — (MoonshotAI: Kimi K2.7 Code model card on HF)
- **GDPval-AA (normalized):** **26.3%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA Agentic Index:** **22.5%** — (Artificial Analysis model benchmarks via BenchLM)
- **Terminal-Bench 4.0:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **26** — (AA model page, rank #24/117, well above open-weight large-class median of 18)
- **BenchLM Intelligence Index:** **25.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **89.6%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-HLE:** **35.0%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-LCR:** **79.3%** — (Artificial Analysis model benchmarks via BenchLM)
- **CritPt:** **10.0%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Index:** **-10.2%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Accuracy:** **39.6%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-Omniscience Hallucination Rate:** **82.4%** — (Artificial Analysis model benchmarks via BenchLM)

Coding:

- **SWE-bench (Vals):** **78.2%** — (Vals AI: SWE-bench leaderboard via BenchLM)
- **LiveCodeBench (Vals):** **82.1%** — (Vals AI: LiveCodeBench leaderboard via BenchLM)
- **Kimi Code Bench v2:** **62.0%** — (MoonshotAI: Kimi K2.7 Code model card on HF)
- **Program Bench:** **53.6%** — (MoonshotAI: Kimi K2.7 Code model card on HF)
- **MLS-Bench Lite:** **35.1%** — (MoonshotAI: Kimi K2.7 Code model card on HF)
- **AA-SciCode:** **47.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA Coding Index:** **60.8%** — (Artificial Analysis model benchmarks via BenchLM)
- **CursorBench 3.2:** **49.7%** — (Cursor evals via BenchLM)
- **OpenHarmony Bench:** **52.1%** — (OpenHarmony Bench official leaderboard via BenchLM)
- **SWE-bench Verified:** no verified public score found
- **SWE-bench Pro:** no verified public score found
- **DeepSWE:** no verified public score found

Multimodal:

- Supports text, image, and video input; text output (per AA model page and HF model card)
- **Design Arena Website:** **1273** — (OpenRouter model benchmarks via BenchLM)

Instruction following:

- **AA-IFBench:** **63.1%** — (Artificial Analysis model benchmarks via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
  > Confidence: high — 27 public benchmarks found across 6 sources (AA, BenchLM, HF, Kimi model card, Vals, Cursor).

- **Tool use: 70/100.** τ²-bench at 90.1% (AA model benchmarks via BenchLM) is exceptional. MCP Mark Verified 81.1% and MCP Atlas 76% (HF model card) are strong. Terminal-Bench 2.1 at 67.0% is decent. GDPval-AA at 26.3% and AA Agentic Index at 22.5% are weak. No OSWorld, Claw-Eval, or TB4.0 data found. Net: strong agentic tool-use signals offset by weak AA proprietary indices.

- **Reasoning: 56/100.** AA Intelligence Index at 26 (rank #24/117, above open-weight large-class median of 18). GPQA-Diamond at 89.6% (AA model benchmarks) is exceptional — above most frontier models. However, HLE at 35.0% is below average, CritPt at 10.0% is very low (physics reasoning), and AA-Omniscience Index at -10.2% (more incorrect than correct). LCR at 79.3% is excellent. The low HLE/CritPt/Omniscience drag down the composite. II + 30 formula: 26 + 30 = 56.

- **Context window: 70/100.** 256K tokens per AA model page and HF model card (BenchLM confirms 256K). Meta.json lists 128K — discrepancy noted; all three public sources say 256K. At the methodology's 200K–500K tier (65–84, 256K ≈ 70).

- **Multimodal: 70/100.** Text, image, and video input, text output per AA model page and HF model card — among the most capable input modality sets. AA-MMMU-Pro not found as a separate benchmark for this model, but the 3-modal input (text+image+video) justifies a score at the high end of the +image tier. Design Arena Website at 1273 (BenchLM, OpenRouter) indicates strong multimodal performance.

- **Coding: 78/100.** SWE-bench (Vals) at 78.2% and LiveCodeBench at 82.1% are both excellent. AA Coding Index at 60.8% is decent. Kimi Code Bench v2 at 62.0% and Program Bench at 53.6% are moderate. CursorBench 3.2 at 49.7% and AA-SciCode at 47.8% are below average. No SWE-bench Verified or Pro score found. Mixed coding benchmark coverage but very strong agentic coding scores (SWE-bench, LiveCodeBench).

- **Cost efficiency: 60/100.** $0.95 input / $4.00 output per 1M tokens — in the methodology's $1–2 / $4–5 tier (≈60). Cache hits discounted 80%. No Zen Free ID found (Zen pricing: $0.95/$4.00, $0.19 cache hit).

- **Overall Score: 69/100.** Mean of five non-cost dimensions: (70 + 56 + 70 + 70 + 78) / 5 = 344 / 5 = 68.8 → 69. Strong tool-use (τ²-bench 90.1%) and coding (SWE-bench 78.2%, LiveCodeBench 82.1%) offset by moderate reasoning (II 26) and weak knowledge-reliability benchmarks (Omniscience -10.2%). Open weights under Modified MIT license.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, HuggingFace, and Moonshot AI model card; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `MoonshotAI_Kimi_Code_Eval_Report.md`, using the same headings.

---
