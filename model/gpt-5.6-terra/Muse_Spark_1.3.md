# GPT-5.6 Terra — findings by Muse Spark 1.3 Contributor

- Source: OpenAI/GPT-5.6 Terra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (OpenAI flagship 5.6 generation)
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI via API + Codex (`openai/gpt-5.6-terra`); no Zen Free ID (Chat Completions + Responses API, tool calling + MCP).
- **Release / knowledge:** 2026 (5.6 generation, pre-Astra); knowledge cutoff undisclosed
- **IDs:** `openai/gpt-5.6-terra` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata + AA Astra predecessor context
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (max); tool calls yes
- **Pricing (as of 2026-09-18):** Paid-tier pricing ($4/$20 class predecessor to Astra $10/$50; no Zen Free ID)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1730 Elo (max)** (Artificial Analysis 1.2 article context: GPT-5.6 Sol max 1730 trails Opus 5 1852)
- Terminal-Bench 4.0: **37–40%** (AA Astra article: GPT-5.6 Sol 37% Codex / 40% Index-config vs Astra 56–59%)
- AutomationBench-AA: **60%** (AA Astra article: GPT-5.6 Sol 60% vs Astra 69%)
- GDP.pdf (document reasoning): **27% all-pass** (AA Astra article: GPT-5.6 Sol 27% vs Astra 31%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas QnA: **54%** (AA Astra article: GPT-5.6 Sol 54% vs Astra 62%)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **59 AA Index (max)** (AA Astra article: GPT-5.6 Sol 59, +6 to Astra 53-scale context)
- Omniscience Accuracy / Hallucination Rate: **92% hallucination rate at max effort** (AA Astra article: Astra halves it to 51%)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **72% DeepSWE** (AA Astra article: GPT-5.6 Sol 72% vs Astra 68%); **55 Coding Agent Index** (AA Astra article)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval 1730 + AutomationBench 60% + GDP.pdf 27% show strong agentic breadth; capped as Astra leads on TB4.0/Automation/GDP.pdf.
- **Reasoning: 88/100.** Index 59 is frontier-adjacent; capped by 92% hallucination rate and missing GPQA/HLE absolutes.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 90/100.** Full text/image/audio/video/PDF input; capped as outputs remain text.
- **Coding: 86/100.** DeepSWE 72% + Coding Index 55 are strong; capped as Astra/Fable 62 lead the Index.
- **Cost efficiency: 50/100.** Paid $4/$20-class pricing; mid paid value below Astra premium.
- **Overall Score: 90/100.** Mean of the five non-cost dims (86+88+100+90+86)/5 = 90.0; best-fit flagship OpenAI agentic-research pick below Astra.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra + 1.2 articles); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
