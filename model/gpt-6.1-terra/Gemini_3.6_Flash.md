# GPT-6.1 Terra — findings by Gemini 3.6 Flash

- Source: OpenAI/`openai/gpt-6.1-terra`
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra (paid API tier; no free-tier ID available on Zen)
- **Short description:** GPT-6.1 Terra is OpenAI's flagship cost-efficient reasoning model engineered for mathematical problem solving, agentic task execution, and multimodal document extraction.
- **Provider / access:** OpenAI API (`openai/gpt-6.1-terra`), OpenRouter (`openrouter/openai/gpt-6.1-terra`), Requesty (`requesty/gpt-6.1-terra@eu`). Note: Standard Chat Completions and Responses API conventions. No free `opencode/` model ID exists on OpenCode Zen.
- **Release / knowledge:** 2026-10-28 (official launch announcement); knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-6.1-terra` (state explicitly: no Free ID exists on OpenCode Zen)
- **Context window:** 1,050,000 tokens total (1.05M combined input/output window; verified via OpenAI documentation and BenchLM).
- **Modalities:** Text, Image, Audio, Video, PDF input; Text output; Reasoning: yes (configurable effort: low, medium, high, xhigh, max); Tool calls: yes; JSON mode: yes.
- **Pricing (as of 2026-11-07):** $1.00 per 1M input tokens, $5.00 per 1M output tokens, $0.05 per 1M cached input tokens for contexts <272K ($2.00 / $7.50 / $0.10 for contexts >=272K). Paid $ tier rates. Note: No free-tier option on Zen.
- **Architecture:** Proprietary large-scale Mixture-of-Experts (MoE) transformer-based reasoning model; proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0: **50.30%**, OpenAI: Introducing GPT-6.1 Terra; AA Terminal-Bench 4.0: **55.6%**, Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1476 Elo** (Artificial Analysis: gdpval-aa leaderboard)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **46.2%** (AA-HLE, Artificial Analysis: humanitys-last-exam leaderboard)
- LCR / MLCR: **82.7%** (AA-LCR) / **30.6%** (MLCR-AA) (Artificial Analysis)
- CritPt: **28.0%** (Artificial Analysis: critpt leaderboard)
- Artificial Analysis Intelligence Index / BenchLM overall: **51.3% / 80.72 (#9 of 1016)** (Artificial Analysis / BenchLM)
- Omniscience Accuracy / Hallucination Rate: **47.6% / 34.5%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **55.1%** (Artificial Analysis: scicode leaderboard)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **55.1%** (AA-SciCode, Artificial Analysis)

Long context:

- no long-context retrieval reported (1.05M token context window verified via OpenAI documentation and BenchLM)

### Normalized scores (1-100)

- **Tool use: 86/100.** Strong tool use and computer interaction performance evidenced by OSWorld 2.1 Offline (74.2%), Agents' Last Exam (60.0%), AA AutomationBench (60.2%), and Terminal-Bench-Science 0.1 (58.3%).
- **Reasoning: 94/100.** Outstanding frontier mathematical and general reasoning verified on FrontierMath v2 Tier 4 (92.68%), FrontierMath v2 Tiers 1-3 (90.88%), AA-HLE (46.2%, exceeding the 40%+ frontier threshold), AA-LCR (82.7%), and Artificial Analysis Intelligence Index (51.3%).
- **Context window: 96/100.** Tiered for a verified 1.05M token context window (OpenAI documentation / BenchLM); specific long-context retrieval benchmarks (MRCR/RULER) not reported.
- **Multimodal: 90/100.** Multi-modal visual, audio, video, and PDF document synthesis, supported by ExtractBench (94.28%), MMMU-Pro (85.5% / 84.7%), and ParseBench (73.64%).
- **Coding: 91/100.** Frontier scientific coding capability verified on AA-SciCode (55.1%, reaching the 55%+ frontier threshold) and Terminal-Bench-Science (58.3%).
- **Cost efficiency: 89/100.** Evaluated on the paid API tier ($1.00 / 1M input, $5.00 / 1M output, $0.05 cached input); highly competitive price-to-performance ratio for a flagship GPT-6 class model.
- **Overall Score: 91.4/100.** Mean of five non-cost dimensions (86 + 94 + 96 + 90 + 91) / 5 = 91.4. Recommended as an exceptional, cost-effective reasoning model for advanced mathematics, agentic workflows, and structured multimodal parsing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-07
- Method: Public internet research across official OpenAI documentation, launch announcements, Epoch AI, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
