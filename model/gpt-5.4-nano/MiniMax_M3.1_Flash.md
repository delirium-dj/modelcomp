# GPT-5.4 Nano — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5.4 nano), `gpt-5.4-nano-2026-03-17`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's cheapest 5.4 tier ($0.20/$1.25) for classification, extraction, ranking and coding subagents — 400K context with a 128K output cap, a 21 AA Intelligence Index and 159 tok/s, but a sharp drop in terminal and computer use versus GPT-5.4 mini.
- **Provider / access:** OpenAI **Responses and Chat Completions** APIs (`gpt-5.4-nano`, default snapshot `gpt-5.4-nano-2026-03-17`), plus batch. **Live on OpenCode Zen** as `opencode/gpt-5.4-nano` at the native price, and on OpenRouter (`openai/gpt-5.4-nano`, plus `:batch` at half price).
- **Release / knowledge:** **2026-03-17** (launch post "Introducing GPT-5.4 mini and GPT-5.4 nano"). Knowledge cutoff **2025-08-31**.
- **IDs:** `gpt-5.4-nano` / `gpt-5.4-nano-2026-03-17` (OpenAI), `opencode/gpt-5.4-nano` (Zen), `openai/gpt-5.4-nano` (OpenRouter).
- **Context window:** **400,000** tokens total, **272,000** max input, **128,000** max output.
- **Modalities:** text and image input (OpenAI's docs list text+image; some registries add PDF), text out; reasoning effort none/low/medium/high/xhigh; tools, structured outputs, batch. Realtime, audio, video and fine-tuning are not supported.
- **Pricing (as of 2026-10-20):** **$0.20/M input, $1.25/M output, $0.02/M cached input** (+10% for regional-processing endpoints; batch $0.10/$0.625).
- **Architecture:** proprietary.

### Raw benchmarks found

> OpenAI's launch post (xhigh effort) with Vals AI and Artificial Analysis readings.

Agent / tool use:

- Terminal-Bench 2.0: **46.3%** (OpenAI) · Terminal-Bench 2.1: **60.7%** (AA) / **41.6%** (Vals AI) · Terminal-Bench Hard: **42.4%** (AA) · Terminal-Bench 4.0: **0.51%** (AA)
- Tau2-bench: **76.0%** (AA) vs **92.5%** (OpenAI, telecom) · Tau3-Banking: **27.4%** (AA) · IT-Bench-SRE: **24.4%** (AA)
- OSWorld-Verified: **39.0%** (OpenAI) · MCP Atlas: **56.1%** (OpenAI) · Toolathlon: **35.5%** (OpenAI) · APEX-Agents: **24.9%** (AA) · AutomationBench: **6.0%** (AA)
- GDPval-AA: **947.98** (AA) · Bench Tool-Agent-User Evaluation: **92.5%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (OpenAI) vs **81.72%** (AA) / **77.5%** (Vals AI)
- HLE: **37.7%** with tools / **24.3%** without (OpenAI) · AA-HLE: **28.3%** (AA) · MMLU-Pro: **77.2%** (Vals AI)
- Artificial Analysis Intelligence Index: **21** · AA-LCR: **76.7%** · CritPt: **9.3%** · AA-Omniscience Index / Accuracy / Hallucination: **−29.5% / 25.7% / 74.2%** (AA)
- FrontierMath v2 Tiers 1–3: **44.9%** · Tier 4: **12.2%** (BenchLM) · Output speed: **159.0 tok/s**, TTFT 69.2s (AA)

Coding:

- SWE-bench: **69.8%** (Vals AI) · SWE-Bench Pro (Public): **52.4%** (OpenAI) · LiveCodeBench: **84.0%** (Vals AI) · Vibe Code Bench v1.1: **26.10%** (Vals AI) · SciCode: **47.2%** (AA)
- OpenAI publishes no SWE-bench Verified figure for this model.

Long context:

- MRCR v2 8-needle: **44.2%** at 64K–128K, **33.1%** at 128K–256K (OpenAI) · GraphWalks BFS: **73.4%**, parents: **50.8%** at 0–128K

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 76–92.5% and MCP Atlas 56.1% are decent, but Terminal-Bench 2.0 46.3% (Vals 41.6%), OSWorld-Verified 39.0%, Toolathlon 35.5%, APEX-Agents 24.9% and AutomationBench 6.0% show a clear capability drop versus the mini tier.
- **Reasoning: 68/100.** GPQA 77.5–82.8%, MMLU-Pro 77.2% and HLE 24.3–37.7% are mid-band, capped by FrontierMath T1–3 44.9%, an AA Intelligence Index of 21 and a 74.2% hallucination rate.
- **Context window: 74/100.** A 400,000-token window (272K input / 128K output) with MRCR measured at 44.2% (64–128K) and 33.1% (128–256K) — the size is there, the retrieval is not, so the score sits mid-tier.
- **Multimodal: 66/100.** Text and image input with text out, MMMU-Pro 66.1% (69.5% with Python) — the "+image in" band, no audio or video.
- **Coding: 72/100.** LiveCodeBench 84.0%, SWE-bench 69.8% and SWE-Bench Pro 52.4% are solid mid-band coding numbers for the price tier, with Vibe Code Bench 26.1% and SciCode 47.2% capping it.
- **Cost efficiency: 98/100.** $0.20/M in and $1.25/M out with a $0.02/M cache read is one of the cheapest routes in the catalogue — the standout of this entry.
- **Overall Score: 68/100.** Mean of the five quality dims = (58 + 68 + 74 + 66 + 72) / 5 = 67.6 → **68**. Best fit: fleets of cheap subagents for classification, extraction, ranking and light coding — use GPT-5.4 mini when the task needs a terminal or a computer.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (OpenAI launch post and model docs, API changelog, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Luna.md`, using the same headings.
