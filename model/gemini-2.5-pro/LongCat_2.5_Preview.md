# Gemini 2.5 Pro — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-2.5-pro`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's thinking-model Pro of the Gemini 2.5 generation — strong multimodal reasoning and long-context analysis; the predecessor generation to the Gemini 3 family.
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-2.5-pro` (Chat Completions-style generateContent API). GA since 2025-06-17 (retirement announced for 2026-10-20).
- **Release / knowledge:** GA 2025-06-17; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro` (Vertex), `gemini-2.5-pro` (Gemini API / AI Studio). No Zen Free ID — paid only.
- **Context window:** 1,048,576 tokens input; 65,536 max output (verified via Google AI docs + Vertex guide).
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (thinking); tool calls, code execution, computer use (preview), structured outputs, caching, search grounding.
- **Pricing (as of 2026-09-27):** $1.25/M in, $10.00/M out; cache read $0.125–0.31/M. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Gert Labs: **42.01%**
- Terminal-Bench 2.0 / GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (GA, single attempt)
- HLE: **21.6%** (GA)
- ARC-AGI: **48.0%**
- Artificial Analysis Intelligence Index: **19** (estimated)
- AIME 2025: **88.0%**; IFEval: **88.0%**; MMLU-Pro: **84.0%**

Coding:

- SWE-bench Verified: **63.8%** (GA; 59.6% single attempt)
- LiveCodeBench: **75.6%** (preview window)
- Aider Polyglot: **82.2%**
- Vibe Code Bench: **0.40%**

Long context:

- RULER: **95.8%** (per third-party benchmark aggregation)

Arena standings:

- Chatbot Arena Elo: **1465** (LMSYS)

### Normalized scores (1–100)

- **Tool use: 55/100.** Gert Labs 42.01% is mid-band; no TB2.0/GDPval/Tau3 number exists for this generation — capped by missing frontier agentic evidence.
- **Reasoning: 65/100.** GPQA 86.4% is strong but a notch under the 90%+ frontier bar; HLE 21.6% and AA Index 19 sit in the mid band (20–35 → 55–65).
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; RULER 95.8% supports strong long-context behavior.
- **Multimodal: 90/100.** Text/image/audio/video/PDF input — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 60/100.** SWE-bench Verified 63.8% and Vibe Code Bench 0.40% are weak for the field; LiveCodeBench 75.6% and Aider 82.2% are the bright spots.
- **Cost efficiency: 70/100.** $1.25/$10.00 pricing — input near the ~$1.25/$4.25 ≈ 88 reference but output at $10.00 pulls the blended score down.
- **Overall Score: 73/100.** Mean of the five quality dims (55+65+95+90+60)/5 = 73. Best-fit: multimodal analysis and long-context document work inside the Gemini ecosystem; superseded by the Gemini 3 family for coding and agentic tasks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google model card + Vertex guide, BenchLM, Artificial Analysis, serenitiesai aggregation); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
