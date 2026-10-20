# Gemini 1.5 Pro — findings by MiniMax M3.1 Flash

- Source: Google (Gemini 1.5 Pro), `gemini-1.5-pro-002`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's February 2024 long-context landmark — the first model with a 2M-token window in production, 99% needle-in-a-haystack recall at 1M, and multimodal text/image/audio/video input. It is **retired** (2025) and kept here as the historical reference for where long-context and multimodal generation started.
- **Provider / access:** Gemini API / AI Studio and Vertex AI (both sunset for this model id); Bedrock and Vertex "legacy" routes only. **Not on OpenCode Zen.**
- **Release / knowledge:** announced **2024-02-15**; `gemini-1.5-pro-001` shipped 2024-05-24, `gemini-1.5-pro-002` on **2024-09-24** (2M context GA). Knowledge cutoff **2024-08-01** (Sep '24 build) / 2023-11-01 (May '24 build).
- **IDs:** `gemini-1.5-pro-001`, `gemini-1.5-pro-002` (Google), `google/gemini-1.5-pro` (OpenRouter, retired).
- **Context window:** **2,000,000** tokens (Vertex input limit raised 1M → 2M on 2024-06-17; 2M GA with the stable `-002` id on 2024-09-24). BenchLM still lists "1M" (the launch-era number) — conflict noted.
- **Modalities:** text, image, speech and video input; text output; non-reasoning (no thinking budget); long-context via Vertex context caching.
- **Pricing (as of 2026-10-20):** retired — last published rate **$1.25/M in, $5/M out** for prompts ≤128K and **$2.50/$10.00** above 128K (BenchLM pricing record); the live Google pricing pages no longer list it.
- **Architecture:** proprietary; Mixture-of-Experts, "most efficient" per Google.

### Raw benchmarks found

> The Gemini 1.5 Pro technical report (arXiv:2403.05530) is the only first-party numeric source; Artificial Analysis adds two later builds.

Reasoning / knowledge:

- MMLU (5-shot): **85.9%** (91.7% maj@32) · MMLU 0-shot CoT: **88.3%** (tech report)
- GPQA (0-shot): **46.2%** · GPQA-Diamond (AA, Sep '24 build): **58.9%** vs **37.1%** (May '24 build)
- MATH (4-shot): **67.7%** (77.9% maj@64) · GSM8K: **90.8%** · BIG-Bench-Hard: **89.2%** · MGSM: **87.5%**
- HLE: **4.64%** (AA, Sep '24) / **3.48%** (May '24) — HLE postdates the model
- Artificial Analysis Intelligence Index: **7.91 (estimated)** (Sep '24) / **6.44** (May '24)
- Artificial Analysis reasoning index (AA): **7.9**, output speed ~60 tok/s

Multimodal:

- MMMU (validation, 0-shot): **62.2%** · MathVista (testmini): **63.9%** · DocVQA: **93.1%** · ChartQA: **87.2%** · TextVQA: **78.7%** · AI2D: **94.4%**
- MMMU-Pro: **55.0%** (AA) · LiveCodeBench: **31.6%** (AA, Sep '24) / **24.4%** (May '24)

Coding:

- HumanEval: **84.1%** (tech report) · SWE-bench: no verified public score found for Gemini 1.5 Pro (the tech report does not cover it)

Long context:

- Needle-in-a-Haystack: **99%** retrieval in 1M-token blocks (launch post); tech report reports NIAH 99.7% average recall for the 3.5/Pro line
- MTOB Kalamang in-context learning: cited qualitatively (no numeric row published)

Agent / tool use:

- Terminal-Bench / Tau2 / GDPval / OSWorld / AutomationBench / Toolathon / MCP-Atlas / Claw-Eval: no verified public score found (the 2024-era evaluation stack did not exist)

### Normalized scores (1–100)

- **Tool use: 32/100.** No agentic benchmark was ever published for this model — no Terminal-Bench, τ², GDPval or OSWorld — so the dimension is scored as unmeasured with a penalty rather than inferred from its chat quality.
- **Reasoning: 45/100.** MMLU 85.9–88.3% and BIG-Bench-Hard 89.2% are respectable 2024-era knowledge results, but GPQA 46.2% (58.9% on the later build), MATH 67.7%, HLE 4.6% and an AA Intelligence Index of 7.9 place it low-mid against modern standards.
- **Context window: 95/100.** A genuine 2,000,000-token window with 99% needle-in-a-haystack recall at 1M is the top tier — and it was the model that made 2M production-grade.
- **Multimodal: 92/100.** Text, image, speech and video input with text out, measured on DocVQA 93.1%, ChartQA 87.2%, AI2D 94.4% and MMMU 62.2% — audio and video input put it in the top multimodal band.
- **Coding: 45/100.** HumanEval 84.1% is a strong 2024 code-gen number, but LiveCodeBench 31.6% on the later build shows the ceiling, and no SWE-bench figure exists.
- **Cost efficiency: 62/100.** The last published rate ($1.25/$5, doubling above 128K) sits in the mid band — and the model is retired, so this is a historical price.
- **Overall Score: 62/100.** Mean of the five quality dims = (32 + 45 + 95 + 92 + 45) / 5 = 61.8 → **62**. Best fit: historical reference — the long-context and multimodal baseline everything since inherits, but for live work use Gemini 3.x.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Gemini 1.5 Pro technical report arXiv:2403.05530, Google launch post, Vertex AI model-versions and release-note pages, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_1.5_Flash.md`, using the same headings.
