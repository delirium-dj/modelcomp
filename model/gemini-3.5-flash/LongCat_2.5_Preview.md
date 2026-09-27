# Gemini 3.5 Flash — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind's most intelligent Flash model of the Gemini 3 generation — sustained frontier performance in agentic execution, coding, and long-horizon tasks at Flash-tier cost and speed.
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-3.5-flash` (Chat Completions-style generateContent API; also Google Antigravity). GA since 2026-05-19.
- **Release / knowledge:** GA 2026-05-19; knowledge cutoff 2025-01-01 (per third-party catalog records).
- **IDs:** `google/gemini-3.5-flash` (Vertex), `gemini-3.5-flash` (Gemini API / AI Studio). No Zen Free ID — paid only.
- **Context window:** 1,048,576 tokens input; 65,536 max output (verified via Google AI docs + Vertex guide).
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (thinking, improved low-thinking mode); tool calls, code execution, computer use (preview), structured outputs, caching, search grounding.
- **Pricing (as of 2026-09-27):** $1.50/M in, $9.00/M out; cache read $0.15/M. Paid only.
- **Architecture:** Proprietary; based on Gemini 3 Flash.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **76.2%** (Google launch materials)
- MCP Atlas: **83.6%**; OSWorld-Verified: **78.4%**; Toolathlon: **56.5%**
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.7%** (Vals mirror, BenchLM)
- HLE: **40.2%** (Google launch materials)
- ARC-AGI-2: **72.1%**
- Artificial Analysis Intelligence Index: **52** (AA, per Requesty)

Coding:

- SWE-bench Verified: **79.3%** (AnotherWrapper leaderboard)
- SWE-bench Pro: **55.1%** (Google launch materials, BenchLM)
- Vibe Code Bench: **48.68%**; cursorBench32: **48.8%**
- Finance Agent v2: **57.9%**

Long context:

- MRCRv2: **77.3%**; MRCR 1M: **26.6%** (BenchLM)

Multimodal extras:

- MMMU-Pro: **83.6%**; CharXiv: **83.8%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.0 76.2%, MCP Atlas 83.6% and OSWorld 78.4% are strong but a notch under the 88%+ frontier TB2.1 mark; Toolathlon 56.5% keeps the dimension in the upper-mid range.
- **Reasoning: 85/100.** GPQA 92.7% and HLE 40.2% are frontier-tier; AA Index 52 is mid-upper (the 60+ band is the top reference).
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; MRCR 77.3% is solid but the 26.6% at 1M shows steep long-range decay.
- **Multimodal: 90/100.** Text/image/audio/video input — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 72/100.** SWE-bench Verified 79.3% and Vibe Code Bench 48.68% are mid-band; SWE-bench Pro 55.1% is a notch under the field leaders.
- **Cost efficiency: 75/100.** $1.50/$9.00 pricing — input near the ~$1.25/$4.25 ≈ 88 reference but output at $9.00 pulls the blended score down.
- **Overall Score: 84/100.** Mean of the five quality dims (78+85+95+90+72)/5 = 84. Best-fit: sub-agent deployment and high-volume multimodal/agentic workloads inside the Gemini ecosystem at Flash economics.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google launch materials + model card, BenchLM, Vals.ai, AnotherWrapper, Requesty); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
