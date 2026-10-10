# DeepSeek V3.2 — findings by Ling 3.1 Flash

- Source: DeepSeek (`deepseek-v3.2`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's open-weights successor to V3.2-Exp, harmonizing high reasoning with tool use via DeepSeek Sparse Attention (DSA, O(L²)→O(Lᵏ) core attention). The balanced "daily driver" at GPT-5-level performance; the high-compute DeepSeek-V3.2-Speciale variant (Gemini-3.0-Pro-level reasoning, gold-medal IMO/CMO/ICPC/IOI 2025) is API-only and separate.
- **Provider / access:** DeepSeek API (`deepseek-v3.2`, thinking mode with tool-use); OpenRouter (`deepseek/deepseek-v3.2`); open weights on Hugging Face (`deepseek-ai/DeepSeek-V3.2`); technical report arXiv 2512.02556.
- **Release / knowledge:** Released 2025-12-01 (V3.2-Exp predecessor); knowledge cutoff not stated.
- **IDs:** `deepseek-v3.2` (DeepSeek API); `deepseek/deepseek-v3.2` (OpenRouter); `deepseek-ai/DeepSeek-V3.2` (HF). No OpenCode Zen Free ID found.
- **Context window:** 128,000 tokens (tech report evaluation setting) — verified in the arXiv report.
- **Modalities:** text in; text out; reasoning yes (thinking mode); tool calls yes (standard function-call format, thinking-in-tool-use); JSON mode per API.
- **Pricing (as of 2026-10-10):** from $0.21 / 1M input, $0.31 / 1M output (OpenRouter providers, GMICloud 28%-off rate $0.2088/$0.3096; cache read $0.0216); provider range up to $1.00/$1.68 (Phala) and $3.00/$4.50 (MARA/SambaNova).
- **Architecture:** MoE with DSA sparse attention (lightning indexer + selected-token core attention); RL post-training budget exceeds 10% of pre-training cost; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.8%** (Artificial Analysis, reasoning version)
- τ²-Bench Telecom: **90.6%** (Artificial Analysis)
- IFBench: **60.7%** (Artificial Analysis)
- SWE-bench Verified: **70%** (HF evaluation results, with context-management technique)
- SWE-bench (Vals AI): **67.6%**; Terminal-Bench 2.0: **36.0%** (Vals AI); Terminal-Bench Hard: **35.6%** (AA)
- MCP-Universe / MCP-Mark / Tool-Decathlon: evaluated in the tech report (internal environments) — exact values not published in the highlights — no verified public score found
- GDPval-AA / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.0%** (AA); **82.4%** (tech report / HF card, Pass@1); Vals AI: 80.3%
- HLE: **24.6%** (AA); **25.1%** (tech report Pass@1); 23.9% with the official HLE template
- AIME 2025: **92.0%** (AA); **93.1%** (tech report); AIME 2026: **94.17%** (HF evaluation results)
- HMMT Feb 2026: **84.09%** (HF); HMMT Feb 2025: **92.5%**; HMMT Nov 2025: **90.2%** (tech report)
- IMOAnswerBench: **78.3%** (tech report)
- MMLU-Pro: **86.2%** (AA; HF card 85; Vals AI 84.9%)
- AA Intelligence Index: **21.5**; AA Math Index: **92.0**
- AA-Omniscience Accuracy: **33.0%**; AA-Omniscience Non-Hallucination Rate: **17.3%**
- CritPt: **2.9%** (AA — very weak); AA-LCR: **73.3%**
- LegalBench: **76.1%**; MedQA: **93.9%**; MGSM: **86.0%** (Vals AI)

Coding:

- LiveCodeBench: **86.2%** (AA); **83.3%** (tech report Pass@1-COT); Vals AI: 80.7%
- Codeforces: **2386** rating (tech report)
- AA Coding Index: **44.2**
- Vibe Code Bench v1.1: **5.1%** (Vals AI — very weak); IOI v1: **10.7%**; ProofBench v1: **4.0%** (Vals AI)
- DeepSWE / SciCode: no verified public score found

Long context:

- AA-LCR 73.3% is the only measured long-context reasoning number (128K window); no MRCR / RULER / GraphWalks value reported — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 90.6% and SWE-bench Verified 70% are strong, but Terminal-Bench 2.1 46.8% and IFBench 60.7% are mid/low, and MCP-Universe / Tool-Decathlon values were not published in accessible highlights — an uneven agentic profile.
- **Reasoning: 70/100.** GPQA 84.0%, AIME 92.0–94.2%, and HMMT 84.1–92.5% are strong, but HLE 24.6% and CritPt 2.9% are weak and the AA Intelligence Index of 21.5 is low — frontier-grade math, thin general frontier reasoning.
- **Context window: 58/100.** 128K tokens — the 100K–200K band; AA-LCR 73.3% is only mid-band retrieval at length.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 70/100.** LiveCodeBench 86.2% and SWE-bench Verified 70% are strong, but the AA Coding Index of 44.2, TB 2.1 46.8%, and Vibe Code Bench 5.1% pull hard — contradictory evidence across suites.
- **Cost efficiency: 96/100.** From $0.21/$0.31 per 1M (OpenRouter, cheapest verified route) — near the top of the pricing scale; open weights allow free self-hosting.
- **Overall Score: 55/100.** Mean of Tool 62, Reasoning 70, Context 58, Multimodal 15, Coding 70 = 55.0. Best-fit: cheap open-weights reasoning-and-tool-use daily driver with frontier-grade math; the 128K window and weak CritPt/HLE limit frontier-reasoning and long-context use.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (DeepSeek launch page, arXiv 2512.02556 technical report, Hugging Face deepseek-ai/DeepSeek-V3.2 card, Artificial Analysis and Vals AI leaderboards via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores. The DeepSeek-V3.2-Speciale variant is scored nowhere here — it is a separate API-only model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
