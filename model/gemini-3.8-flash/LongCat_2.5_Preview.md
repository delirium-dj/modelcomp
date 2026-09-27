# Gemini 3.8 Flash — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's most intelligent Flash-tier model (4th Flash release in under four months), built for long-horizon software engineering, autonomous agents, and complex enterprise multimodal workflows at Flash speed and cost.
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-3.8-flash` (Chat Completions-style generateContent API; also OpenAI-compatible `/v1/chat/completions` via some gateways). GA since 2026-09-02.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not re-disclosed (inherits 3.7 Flash lineage; catalog records suggest ~2026-03).
- **IDs:** `google/gemini-3.8-flash` (Vertex), `gemini-3.8-flash` (Gemini API / AI Studio). No Zen Free ID — paid only.
- **Context window:** 1,048,576 tokens input; 65,536 max output (verified via Google AI docs + Vertex guide).
- **Modalities:** Text, image, audio, video, PDF in; text out (no audio/image generation); reasoning yes (low/medium/high thinking levels); tool calls yes; structured outputs, code execution, computer use (preview), caching, search grounding.
- **Pricing (as of 2026-09-27):** $0.75/M in, $3.75/M out (introductory rate through 2026-12-31; standard $1.50/$7.50 from 2027-01-01); cache read $0.075/M. Paid only — no free tier.
- **Architecture:** Proprietary; based on Gemini 3.7 Flash (architecture/training details deferred to the 3.7 Flash model card).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (high thinking, tools; DataLearner/Vals — rank 5/63 on Vals TB2.1; independent DataCamp compile reports 90.8%)
- Terminal-Bench 4.0: **19.1%** resolution (tbench.ai public leaderboard, rank 10/13, mini-SWE-agent harness)
- Tau3-Banking: **45%** (Artificial Analysis, high reasoning; +12 pts over 3.7 Flash)
- GDPval-AA v2: **1545 Elo** (AA public leaderboard, rank 14/25)
- DeepSWE v1.1: **73.7%** (Datacurve public leaderboard, rank 2/34, high thinking)
- SWE-Atlas: **51.9%** (Google launch materials compile)
- OSWorld 2.0: **59.0%** (Vals)
- Vals Finance Agent v2: **61.4%** (rank 1/2); Harvey's Legal Agent: **10.0%** (rank 11/59)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (Vals mirror)
- HLE: **45.4%** (Google launch compile); HLE-Verified: **54.9%** (rank 1/2, DataLearner)
- SimpleBench: **82.4** (rank 2/92)
- Artificial Analysis Intelligence Index: **59** high / 57 medium / 52 low (on par with GPT-5.6 Sol xhigh and Grok 4.6 medium at high)

Coding:

- SWE-bench (Vals): **80.0%**; SWE-Bench Pro: **61.6%** (Google launch compile)
- LiveCodeBench (Vals): **89.5%** (rank 3/143)
- Vibe Code Bench v1.1: rank 13/93 (Vals)

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 89.4% and Tau3-Banking 45% sit at the frontier band (TB2.1 88%+, Tau3 ~50%+); GDPval-AA 1545 Elo is strong but below the 1750+ top mark — capped slightly by GDPval and TB4.0 (19.1%).
- **Reasoning: 90/100.** GPQA Diamond 94.4% and HLE 45.4% are frontier-level; AA Index 59 is one point under the 60+ top band.
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 90/100.** Text/image/audio/video/PDF input with tool use and computer-use preview — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 90/100.** DeepSWE 73.7% (rank 2/34) and TB2.1 89.4% are frontier-tier; SWE-Bench Pro 61.6% and Vibe Code Bench rank 13/93 hold it just under 95.
- **Cost efficiency: 85/100.** $0.75/$3.75 introductory pricing with $0.58 cost per AA task (high) — strong for its intelligence band, but well above the ~$0.60/$2.20 ≈ 92 reference point.
- **Overall Score: 91/100.** Mean of the five quality dims (90+90+95+90+90)/5 = 91. Best-fit: default high-intelligence workhorse for agentic coding and multimodal enterprise workloads when paired with a stronger planner for the hardest terminal tasks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google model card + eval methodology PDF, Artificial Analysis, Vals.ai, DataLearner, tbench.ai leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
