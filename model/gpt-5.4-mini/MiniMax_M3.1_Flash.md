# GPT-5.4 Mini — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5.4 mini), `gpt-5.4-mini`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's March 2026 small tier — the core GPT-5.4 capability at roughly one third of the price, shipped for high-throughput delegated coding and computer use. Deprecated by Artificial Analysis in favour of GPT-5.6 Terra and retired from Codex (with ChatGPT sign-in) on 2026-08-31, but still served on OpenCode Zen and the OpenAI API.
- **Provider / access:** OpenAI **Responses API and Chat Completions** (`gpt-5.4-mini`; https://developers.openai.com/api/docs/changelog — "Released GPT-5.4 mini and GPT-5.4 nano to the Chat Completions and Responses API"), plus OpenCode Zen `opencode/gpt-5.4-mini` at the native price, and OpenRouter `openai/gpt-5.4-mini` (with a `:batch` variant at half price).
- **Release / knowledge:** **2026-03-17** (launch post "Introducing GPT-5.4 mini and GPT-5.4 nano"). Knowledge cutoff **2025-08-31** (AA, models.dev).
- **IDs:** `gpt-5.4-mini` (OpenAI), `opencode/gpt-5.4-mini` (Zen), `openai/gpt-5.4-mini` (OpenRouter).
- **Context window:** **400,000** tokens total, **272,000** max input, **128,000** max output (models.dev openai + opencode entries, OpenRouter).
- **Modalities:** text, image (and PDF/file) in; text out; reasoning effort none/low/medium/high/xhigh (AA benchmarked the xhigh build); tools: functions, web search, file search, computer use, skills; structured outputs.
- **Pricing (as of 2026-10-20):** **$0.75/M in, $4.50/M out, $0.075/M cached** (launch post, models.dev, OpenRouter, AA). Batch $0.375/$2.25; Priority tier $1.50/$9.00; Flex tier $0.375/$2.25.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (OpenAI launch post) · Terminal-Bench 2.1 (Vals AI): **54.7%** (BenchLM) · Terminal-Bench Hard: **52.3%** (AA)
- Tau2-bench (telecom): **93.4%** (OpenAI launch post) · Tau3-Banking: **25.6%** (AA)
- OSWorld-Verified: **72.1%** (OpenAI launch post)
- GDPval-AA: **1011.97** (AA) · GDPval all-pass: **13.4%** (AA) · AutomationBench partial: **26.2%** (AA) · Apex-Agents: **28.2%** (AA)
- IT-Bench-SRE: **35.2%** (AA) · Toolathlon: **42.9%** (OpenAI launch post) · MCP Atlas: **57.7%** (OpenAI launch post)
- Bench Tool-Agent-User Evaluation: **93.4%** (BenchLM)

Reasoning / knowledge:

- GPQA: **88.0%** (OpenAI launch post) vs **83.1%** (Vals AI) vs **87.5%** (AA) — conflict flagged, harness-dependent
- HLE: **41.5%** with tools / **28.2%** without tools (OpenAI launch post, BenchLM); AA-HLE 28.1%
- MMLU-Pro: **84.6%** (Vals AI) · Artificial Analysis Intelligence Index: **24** (AA) / 24.1 (OpenRouter mirror)
- AA-LCR: **77.0%** (AA) · CritPt: **10%** (AA) · MLCR: **3.9%** (AA) · FrontierMath v2 T1–3: **51.2%**, T4 **9.8%** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **37.5% / 90.2%** (AA)
- Output speed: **315.6 tok/s** (AA, #3/186), TTFT 80.2s

Coding:

- SWE-bench Verified: **73.0%** (Vals AI, via BenchLM) · SWE-bench Pro (public): **54.4%** (OpenAI launch post)
- LiveCodeBench: **81.5%** (Vals AI) · Vibe Code Bench v1.1: **47.97%** (Vals AI) — an unusually strong repo-style score for a mini tier
- SciCode: **52.08%** (AA) · Terminal-Bench 2.1 (Vals): 54.7% · FrontierCode 1.1 Main: **27.0%** (BenchLM)
- ARC-AGI-1 Semi-Private: **63.70%** (BenchLM) · ARC-AGI-2: **18.9%** (BenchLM)

Long context:

- MRCR v2 8-needle: **47.7%** at 64–128K, **33.6%** at 128–256K (OpenAI launch post) — no measurement above 256K despite the 400K window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 60.0% / 2.1 54.7%, OSWorld-Verified 72.1%, τ² 93.4%, Bench Tool-Agent-User 93.4% and GDPval-AA 1012 put it in the upper-mid band; AutomationBench 26.2% and Toolathlon 42.9% cap it below the frontier.
- **Reasoning: 76/100.** GPQA 83–88%, HLE 28–41.5%, MMLU-Pro 84.6% and FrontierMath T1–3 51.2% are solid mid-band results, but an AA Intelligence Index of 24, MLCR 3.9%, FrontierMath T4 9.8% and a 90.2% hallucination rate keep it out of the 90+ band.
- **Context window: 76/100.** 400,000 tokens (272K input / 128K output) maps to the 200K–500K tier; MRCR falls from 47.7% at 64–128K to 33.6% at 128–256K with no data beyond, so the tier midpoint is used.
- **Multimodal: 68/100.** Text, image and PDF input with text output, MMMU-Pro 76.6% (78.0% with a Python harness) — image-in band, no audio or video input.
- **Coding: 75/100.** SWE-bench Verified 73.0%, SWE-bench Pro 54.4%, LiveCodeBench 81.5% and Vibe Code Bench 47.97% are strong mid-band coding numbers for a mini tier, capped by FrontierCode 27.0% and Terminal-Bench 2.1 54.7%.
- **Cost efficiency: 85/100.** $0.75/M in, $4.50/M out and $0.075/M cached sit well below the Claude tier ($3/$15) and near the cheap end of the frontier band; the GPT-5.4 mini is also the cheap route for Codex-style delegated work (≈30% of a GPT-5.4 quota).
- **Overall Score: 74/100.** Mean of the five quality dims = (76 + 76 + 76 + 68 + 75) / 5 = 74.2 → **74**. Best fit: delegated sub-tasks, computer use and high-volume coding inside a larger agent loop — not the planner model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (OpenAI launch post and API changelog/deprecation notes, Artificial Analysis, BenchLM + Vals AI, OpenRouter API, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
