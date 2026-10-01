# Gemini 3.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (no "Free" wording; a free Google AI Studio API tier exists)
- **Short description:** Google DeepMind's I/O 2026 Flash-tier multimodal model, succeeding Gemini 3 Flash (Dec 2025) with configurable thinking levels. Its distinctive strength is agentic tool orchestration — it recorded the highest MCP Atlas score of any model tracked at launch.
- **Provider / access:** Google — Gemini API, Google AI Studio (free tier with limited rate limits), Vertex AI. Proprietary, closed weights; API only.
- **Release / knowledge:** GA 2026-05-19 (Google I/O). Knowledge cutoff not stated in the sources checked.
- **IDs:** `gemini-3.5-flash`. No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens.
- **Modalities:** text, image, audio, video and PDF input in a single call; text + tool-call output; function calling and structured output, including mixing built-in tools such as Google Search; reasoning yes (thinking levels, default medium).
- **Pricing (as of 2026-10-01):** $1.50 / 1M in and $9.00 / 1M out, cached input $0.15 / 1M (90% off); blended 3:1 ≈$3.38 / 1M — about 3× Gemini 3 Flash. Free AI Studio tier caps quickly at volume.
- **Architecture:** proprietary natively multimodal Transformer; parameter count / dense-vs-MoE undisclosed.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **83.6%** (rank 6 of 44; the highest recorded at launch) (BenchmarkList/HokAI)
- APEX-Agents: **66.1%** (rank 1 of 44); Tau2-Bench Telecom: **95.6%**; Tau3-Banking: **32.2%**
- OSWorld-Verified (computer use): **78.4%**; Terminal-Bench Hard: **46.2%**
- GDPval-AA: **1373 Elo**; APEX-Agents-AA: 47.1%
- Claw-Eval / ClawProBench / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4%**; MMMU-Pro: **84.2%** (launch-leading multimodal reasoning at the time)
- ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%** (Gemini 3.1 Pro 77.1%)
- Artificial Analysis Intelligence Index: **55**; BenchmarkList ECI: **141.14 / 100** (rank 16 of 354)
- HLE / LCR / MLCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **78.8%**; SWE-bench Pro: **55.1%**; LiveCodeBench: **87.6%** (rank 7 of 123); SciCode: **53.1%**
- Terminal-Bench 2.0: **67.4%**; Terminal-Bench 2.1: **78.7%**; DeepSWE 1.1: **37.0%**; Vibe Code Bench v1.1: 48.7%
- WebDev Arena: **1500.72 Elo**
- Output speed: **289 tok/s** median (Artificial Analysis) — ~4× GPT-5.5 and Claude Opus 4.7

Long context:

- long-context recall above 100K tokens was not independently published for the 3.5 generation; the closest proxy is Gemini 3.1 Pro's depth recall, so the 1M window is partly unmeasured.

### Normalized scores (1–100)

- **Tool use: 86/100.** 83.6% on MCP Atlas and rank-1 APEX-Agents (66.1%) plus Tau2-Telecom 95.6%; capped by the absence of Claw/Toolathon numbers.
- **Reasoning: 85/100.** GPQA Diamond 90.4% and MMMU-Pro 84.2% are strong, but ARC-AGI-2 72.1% and an AA index of 55 show a deliberate Pro-tier gap.
- **Context window: 95/100.** 1,048,576 tokens with 65,536 output and full multimodal ingestion; unmeasured recall above 100K keeps it below the maximum.
- **Multimodal: 88/100.** Text, image, audio, video and PDF in one call with a launch-leading MMMU-Pro; text-only output.
- **Coding: 85/100.** LiveCodeBench 87.6%, SWE-bench Verified 78.8% and Terminal-Bench 2.1 78.7% (raised from 80 as the harder harnesses now publish); capped by the 3× price increase.
- **Cost efficiency: 62/100.** $1.50/$9.00 per 1M with a 90%-off cached rate is mid-priced rather than cheap, and 3× the prior Flash generation; free AI Studio candidacy does not scale.
- **Overall Score: 88/100.** Mean of the five quality dims (86+85+95+88+85)/5 = 87.8 → 88. Best fit: MCP-based coding and tool agents that need wide multimodal ingestion and will pay a Flash-plus rate.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Google model page and Artificial Analysis figures via HokAI); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
