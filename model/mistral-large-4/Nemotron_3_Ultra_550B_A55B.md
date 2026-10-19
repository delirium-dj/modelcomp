# Mistral Large 4 — findings by Nemotron 3 Ultra 550B A55B

- Source: Mistral (`mistral-large-4`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (Preview)
- **Short description:** Mistral's flagship Large 4 reasoning model with hybrid architecture (1T params), 1M context (AA) / 524K (AA preview), competitive $1.36/$4.18 pricing with 90% cache discount, and strong coding (Vibe Code 78.4%).
- **Provider / access:** Mistral API, OpenCode Zen (`opencode/mistral-large-4` via `https://opencode.ai/inference/openai/v1/chat/completions`), 2 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-10-06 release; knowledge cutoff not publicly disclosed.
- **IDs:** `mistralai/mistral-large-4` (Mistral API), `opencode/mistral-large-4` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 524,000 tokens per AA preview page; 1,000,000 tokens per BenchLM; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (hybrid); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.36/M in, $4.18/M out (AA preview, 50% off). Cache discount 90% (AA). Blended 7:2:1 ≈ $0.79/M (AA). Cost per Intelligence Index task: $1.13 (AA). OpenCode Zen: 50% off Mistral Large 4 ($0.68/$2.09).
- **Architecture:** Hybrid, 1 trillion parameters; parameter count disclosed by AA. License: proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Cybench: **93.0%** (Mistral AI blog)
- Finance Agent v2: **54.7%** (Vals AI)
- GDPval-AA v2: **1422 Elo** (Artificial Analysis) / **46.1%** normalized (Artificial Analysis)
- AA Briefcase Elo: **1392** (Artificial Analysis)
- AA AutomationBench: **59.9%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **26.8%** (Artificial Analysis)
- GDP.pdf: **18.6%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **26.8%** (Artificial Analysis)

Reasoning / knowledge:

- AA Intelligence Index: **38** (rank #66/217) (Artificial Analysis)
- AA HLE: **35.0%** (Artificial Analysis)
- AA LCR: **81.3%** (Artificial Analysis)
- CritPt: **10.6%** (Artificial Analysis)
- STEMBench: **2.50** (Ulam audit)
- AA Omniscience Index: **-5.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **25.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **41.9%** (Artificial Analysis)

Coding:

- Vibe Code Bench: **78.40%** (Vals AI)
- AA-SciCode: **54.2%** (Artificial Analysis)

Multimodal:

- AA MMMU-Pro: **76.4%** (Artificial Analysis)
- Design Arena Website: **1259** (OpenRouter)

Long context:

- AA LCR: **81.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** Cybench 93.0% (exceptional cybersecurity), Finance Agent 54.7%, GDPval 1422 Elo (below 1750+ frontier), AA Briefcase 1392 Elo, AA AutomationBench 59.9%. Capped by TB 4.0 26.8%, GDP.pdf 18.6%, no TB 2.1/OSWorld/MCP Atlas/Toolathlon/Tau2 data.
- **Reasoning: 55/100.** AA LCR 81.3%, AA HLE 35.0% (below 40%+ frontier), AA Intelligence Index 38 (<60 frontier). Capped by CritPt 10.6%, STEMBench 2.50, AA Omniscience Index -5.3% (negative), Omniscience Accuracy 25.8%.
- **Context window: 75/100.** 524K per AA preview / 1M per BenchLM; AA LCR 81.3%. Methodology: 500K-1M = 85-94. Using 524K as conservative figure.
- **Multimodal: 60/100.** Text + image input only; MMMU-Pro 76.4%, Design Arena 1259. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 72/100.** Vibe Code 78.4% (excellent, exceeds 70%+), AA-SciCode 54.2% (near 55%+). Capped by no SWE-bench/DeepSWE/LiveCodeBench/FrontierCode/CursorBench data.
- **Cost efficiency: 85/100.** $1.36/$4.18 per 1M (50% off), blended ~$0.79/M, 90% cache discount, cost/task $1.13. Methodology: $1.25/$4.25 ≈ 88, competitive pricing → 85.
- **Overall Score: 64/100.** Half-up mean of (60 + 55 + 75 + 60 + 72) / 5 = 64.4 → 64. Best-fit: strong cybersecurity and coding value model at competitive pricing; Cybench 93% and Vibe Code 78.4% are standout; limited benchmark coverage and weak HLE/Omniscience hold it back.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Mistral AI blog), independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Vals AI, Ulam STEMBench), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: Context window discrepancy between AA preview (524K) and BenchLM (1M).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.