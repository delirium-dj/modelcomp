# GPT-5.1-Codex-Mini — findings by Nemotron 3.5 Super VL 120B A12B

- Source: platform.openai.com/docs/models/gpt-5.1-codex-mini (official OpenAI API docs), developers.openai.com/api/docs/models/gpt-5.1-codex-mini.md (official), openrouter.ai/api/v1/model/openai/gpt-5.1-codex-mini + /endpoints (OpenRouter canonical + pricing), n8n.io/ai-benchmark/gpt-5-1-codex-mini (official n8n AI benchmark, 2026-01-29), benchgecko.ai/model/gpt-5-1-codex-mini (benchmarks), serenitiesai.com/benchmark/compare/gpt-5-1-codex-vs-gpt-5-1-codex-mini (head-to-head vs Codex), llm-stats.com/models/compare/gpt-5.1-2025-11-13-vs-gpt-5.1-codex-mini (LLM Stats), benchmarklist.com/models/openai-gpt-5.1-codex-mini (ECI), artificialanalysis.ai/models/gpt-5-1-codex-mini (AA Intelligence Index 20)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Mini (OpenAI)
- **Short description:** Smaller, more cost-effective, less-capable version of GPT-5.1-Codex; agentic coding-optimized; 400K context window, 128K max output; Sep 30, 2024 knowledge cutoff; reasoning token support; proprietary; released November 2025.
- **Provider / access:** OpenAI API (Responses API); OpenRouter (Azure endpoint); Azure. Deprecated as of fetch date.
- **Release / knowledge:** Released Nov 13, 2025 (OpenRouter canonical slug date; benchgecko Nov 2025); knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-5.1-codex-mini` (OpenAI API/OpenRouter); `openai/gpt-5.1-codex-mini-20251113` (OpenRouter canonical).
- **Context window:** 400,000 tokens (official OpenAI docs; OpenRouter; benchgecko; benchmarklist).
- **Modalities:** Text + image in, text out (image input only — text+image → text); reasoning yes (efforts low/medium/high, default medium); tool calls yes (function calling, web search); structured outputs/JSON mode yes; streaming yes.
- **Pricing (as of 2026-10-16):** $0.25/M input, $2.00/M output, $0.025/M cached input (official OpenAI docs; OpenRouter canonical); ~5× cheaper per token than GPT-5.1 (blended 3:1) per llm-stats.
- **Architecture:** GPT-5.1 codex-optimized, distilled/smaller variant; parameter count undisclosed.

### Raw benchmarks found

Official OpenAI API docs (specs/pricing only — no benchmarks), n8n official AI benchmark (2026-01-29), BenchGecko, Serenities AI head-to-head vs GPT-5.1-Codex, LLM Stats vs GPT-5.1, benchmarklist ECI, Artificial Analysis (Intelligence Index 20), OpenRouter canonical (Design Arena ELOs by category, AA Intelligence Index 20.4).

Agent / tool use:

- Terminal-Bench Hard: **33%** (opper.ai)
- τ²-Bench Telecom: **63%** (opper.ai)
- Tool Use: **39** score (n8n official benchmark, 6th placement)
- Classification: **29** score (n8n, 3rd placement)
- Structured Output: **92** score (n8n, 2nd placement)

Reasoning / knowledge:

- Logic: **84** score (n8n, 5th placement)
- Hallucination: **43** score (n8n, 18th placement)
- Scoring: **34** score (n8n, 14th placement)
- MATH: **78.0%** (Serenities vs Codex)
- GSM8K: **92.0%** (Serenities)
- GPQA Diamond: **52.0%** (Serenities)
- ARC-AGI: **35.0%** (Serenities)
- MMLU-Pro: **72.0%** (Serenities)
- AIME 2025: **42.1%** (llm-stats vs GPT-5.1)
- Artificial Analysis Intelligence Index: **20** (#..., score 20.4 per OpenRouter canonical)
- Chatbot Arena ELO: **1310** (Serenities vs Codex 1395)

Coding:

- HumanEval+: **88.0%** (Serenities vs Codex 96.0%)
- SWE-bench Verified: **55.0%** (Serenities vs Codex 78.0%)
- LiveCodeBench: **65.0%** (Serenities vs Codex 85.0%)
- Aider Polyglot: **60.0%** (Serenities vs Codex 76.0%)
- Design Arena ELO: **1087** (Serenities vs Codex 1197); Website Arena ELO: **1123** (vs 1174)
- BenchGecko coding: **55.0** (#71 globally); LiveBench Coding 69.9, LiveBench Reasoning 64.7, LiveBench Mathematics 76.3
- OpenRouter Design Arena ELOs: codecategories 1098, svg 977, website 1115, uicomponent 1084, dataviz 1100, asciiart 1111, 3d 992

Multimodal & grounded:

- Image input supported; no standard vision benchmark scores isolated (OpenRouter Design Arena svg 977 is directional).

Long context:

- 400K context; AA-LCR not isolated for mini; no public needle-recall curve.

Instruction following:

- Speed: **84** score (n8n, 16th placement)
- Overall (n8n composite): **70** score, 15th placement
- Cost: **94** score (n8n, 7th placement)

### Conflicting results noted

- **Overall composite:** n8n 70/100 vs BenchGecko 63.3 avg vs Serenities (head-to-head, Codex wins 12 of 18) vs LLM Stats (-2.8 vs GPT-5.1's 36.3) — different methodologies; all directional, no single authoritative overall.
- **Codex vs Mini:** Serenities shows full GPT-5.1-Codex beats Mini on 12 of 18 benchmarks (HumanEval+ 96 vs 88, SWE-bench 78 vs 55, LiveCodeBench 85 vs 65, MMLU-Pro 82 vs 72) — expected, Mini is the cheaper/smaller variant.
- **Pricing:** OpenAI docs $0.25/$2 vs OpenRouter canonical $0.00000025/$0.000002 per K (= $0.25/$2 per M) — consistent.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 52/100.** Tool Use 39/100 (n8n), Terminal-Bench Hard 33%, τ²-Bench Telecom 63%, SWE-bench Verified 55.0%; small-variant coding agent; capped by no public Terminal-Bench 2.0/2.1/MCP-Atlas scores.
- **Reasoning: 57/100.** Logic 84 (n8n), MATH 78.0, GSM8K 92.0, ARC-AGI 35.0, GPQA Diamond 52.0, MMLU-Pro 72.0, AA Intelligence Index 20 — solid for a small codex variant; GPQA/ARC cap it.
- **Context window: 80/100.** Declared 400K; no public full-window retrieval curve; compaction not a Mini headline feature (that's Max).
- **Multimodal: 55/100.** Image input supported; OpenRouter Design Arena svg 977 directional only; no standard vision benchmarks isolated.
- **Coding: 58/100.** HumanEval+ 88.0, SWE-bench Verified 55.0, LiveCodeBench 65.0, BenchGecko coding 55.0/LiveBench Coding 69.9 — competent small coder, well below full Codex (SWE-bench 78.0/LiveCodeBench 85.0).
- **Cost efficiency: 90/100.** $0.25/$2 per M (~5× cheaper than GPT-5.1 blended); not counted toward Overall.
- **Overall Score: 60/100.** Half-up mean of (52 + 57 + 80 + 55 + 58) / 5 = 60.4 → 60. Best-fit recommendation: cost-effective small agentic coding model for lightweight software tasks; not for frontier coding complexity.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + n8n official benchmark + BenchGecko + Serenities AI head-to-head + LLM Stats + benchmarklist ECI + Artificial Analysis + OpenRouter canonical); scores are normalized 1–100 interpretations, not official vendor scores. Model is deprecated per OpenAI docs.
- Future sources: add a new file next to this one, using the same headings.
