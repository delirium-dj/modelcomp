# Gemini 3 Pro — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's first-generation Gemini 3 flagship — a natively multimodal reasoning model with Deep Think mode, strong scientific reasoning, and unmatched multimodal understanding for its release generation.
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-3-pro` (Chat Completions-style generateContent API; also on OpenCode Zen at the same $2/$12 rate). Model release November 2025.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro` (Vertex), `gemini-3-pro` (Gemini API / AI Studio / Zen). No Zen Free ID — paid only.
- **Context window:** 1,000,000 tokens input; 64K max output (verified via model card + tokenstat).
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (Deep Think mode); tool calls, code execution, computer use, structured outputs, caching, search grounding.
- **Pricing (as of 2026-09-27):** $2.00/M in, $12.00/M out (Google first-party); cache read $0.20/M. Paid only.
- **Architecture:** Proprietary; not a fine-tune of a prior model (per model card).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google launch materials)
- Gert Labs: **63.23%**; JobBench: **11.4%** (BenchLM)
- GDPval-AA / Tau3-Banking / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google launch; llm-stats rank 18)
- HLE: **37.5%** (Google launch)
- ARC-AGI-2: **31.1%** (45.1% with Deep Think)
- AIME 2025: **95.0%** (100% with code execution)
- MMLU-Pro: **81%**

Coding:

- SWE-bench Verified: **76.2%** (Google launch; Vals difficulty split 88/74/43/33%)
- Vibe Code Bench: **14.30%**
- SWE-bench Pro / LiveCodeBench: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- MMMU-Pro: **81.0%**; Video-MMMU: **87.6%** (Google launch); WebDev Arena Elo: **1487**

### Normalized scores (1–100)

- **Tool use: 62/100.** TB2.0 54.2% sits in the methodology's mid band (45–60% → 50–70); Gert Labs 63.23% is decent but no frontier agentic number exists for this generation.
- **Reasoning: 80/100.** GPQA 91.9% is frontier-tier and AIME 95% exceptional; HLE 37.5% is just under the 40% frontier bar and ARC-AGI-2 31.1% (45.1% Deep Think) is well behind the field.
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 90/100.** Text/image/audio/video/PDF input — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 65/100.** SWE-bench Verified 76.2% and TB2.0 54.2% are mid-band; Vibe Code Bench 14.3% is weak — superseded by the Flash line for coding.
- **Cost efficiency: 68/100.** $2.00/$12.00 pricing sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points, closer to the latter.
- **Overall Score: 78/100.** Mean of the five quality dims (62+80+95+90+65)/5 = 78.4 → 78. Best-fit: multimodal analysis and scientific-reasoning workloads inside the Gemini ecosystem; superseded for pure coding/agentic work by the 3.x Flash line.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google DeepMind model card + launch materials, llm-stats, BenchLM, Vals.ai, tokenstat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
