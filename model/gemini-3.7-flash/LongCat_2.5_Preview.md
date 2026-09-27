# Gemini 3.7 Flash — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's high-efficiency agentic workhorse of the Gemini 3 family — Pro-level agentic coding and multimodal reasoning at Flash speed, with tunable thinking levels (low/medium/high).
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-3.7-flash` (Chat Completions-style generateContent API). GA since 2026-08-13.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff ~2026-03 (per third-party catalog records).
- **IDs:** `google/gemini-3.7-flash` (Vertex), `gemini-3.7-flash` (Gemini API / AI Studio). No Zen Free ID — paid only.
- **Context window:** 1,048,576 tokens input; 65,536 max output (verified via Google AI docs + Vertex guide).
- **Modalities:** Text, image, audio (up to 8.4 h/prompt), video (up to 1 h) in; text out; reasoning yes (low/medium/high); tool calls, code execution, computer use, structured outputs, caching, search grounding.
- **Pricing (as of 2026-09-27):** $0.75/M in, $3.75/M out (introductory through 2026-12-31; standard $1.50/$7.50 from 2027-01-01); cache read $0.075/M. Paid only.
- **Architecture:** Proprietary; based on Gemini 3.6 Flash (architecture details deferred to the 3.6 Flash model card).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google eval report, high thinking); Vals TB2.1: **77.5%**
- Terminal-Bench 4.0: **11.2%** resolution (tbench.ai public leaderboard, rank 14)
- OSWorld 2.0: **47.9%**; AutomationBench: **30.4%**; Agents' Last Exam: **26.3%**
- GDPval-AA v2: +103 Elo over 3.6 Flash (AA); absolute score not published
- Tau3-Banking: +3 pts over 3.6 Flash (AA); absolute score not published

Reasoning / knowledge:

- GPQA Diamond (Vals): **93.9%**
- HLE: **47.9%** (AA); HLE-Verified: **53.6%**
- Artificial Analysis Intelligence Index: **56** high / 53 medium / 51 low
- MRCR v2 (64K–128K): **97%**; AA-LCR: **80.0%**; CritPt: **14.3%**

Coding:

- SWE-bench Verified: **80.8%** (Vals/AnotherWrapper)
- DeepSWE v1.1: **65.3%** (Google eval report)
- LiveCodeBench (Vals): **88.7%**
- FrontierCode 1.1 Main: **43.6%**; FrontierSWE v2: **20.3%**

Long context:

- MRCR v2 97% at 64K–128K (BenchLM); no 512K+ retrieval result published for this exact model ID.

Multimodal extras:

- CharXiv: **88.7%**; LVBench: **85.4%**; MMMU-Pro: **85.5%** (BenchLM/AA)

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 85.8% (Google harness) sits just under the 88%+ frontier mark; OSWorld 47.9% and AutomationBench 30.4% lag the field, capping the dimension.
- **Reasoning: 85/100.** GPQA 93.9% and HLE 47.9% are frontier-tier; AA Index 56 is mid-upper (the 60+ band is the top reference), holding the score under 90.
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; MRCR 97% at 64K–128K is strong but no 512K+ retrieval result confirms the top of the band.
- **Multimodal: 90/100.** Text/image/audio/video input — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 85/100.** SWE-bench Verified 80.8%, LiveCodeBench 88.7% and TB2.1 85.8% are strong; DeepSWE 65.3% and FrontierSWE 20.3% keep it out of the frontier band.
- **Cost efficiency: 88/100.** $0.75/$3.75 introductory pricing with $0.40 cost per AA task (high) — near the ~$0.60/$2.20 ≈ 92 reference point.
- **Overall Score: 88/100.** Mean of the five quality dims (85+85+95+90+85)/5 = 88. Best-fit: high-volume agentic coding and multimodal work where Flash-class latency and cost matter more than the last few points of frontier capability.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google model card + eval methodology, Artificial Analysis, Vals.ai, BenchLM, tbench.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
