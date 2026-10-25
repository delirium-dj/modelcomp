# Gemini 3.5 Flash — findings by Muse Glimmer 30B

- Source: Google DeepMind / Gemini 3.5 Flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind high-throughput multimodal Flash model for agentic coding, tool use and general reasoning. Marketed as Pro-level reasoning at Flash-tier cost with 1M context.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API `google/gemini-3.5-flash`; OpenCode Zen `google/gemini-3.5-flash`. Chat Completions API.
- **Release / knowledge:** Q1 2026 release. Conflicting reports: self-report Jan 2026 with ~2025 cutoff; third-party trackers cite 19 May 2026 release. Knowledge cutoff ~2025 early 2026.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens input verified by Google developer docs and meta.json. Max output reported as 65,536 tokens in Google docs; self-report claims 1M output. Verified input 1M.
- **Modalities:** Input text, image, audio, PDF; video input claimed by some trackers but not confirmed in official docs. Output text. Reasoning yes, tool calls yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** Free tier available on Google AI Studio and OpenCode Zen with rate limits. Paid tier reported by community pricing pages $1.50 / 1M input, $9.00 / 1M output, cache hit $0.15; batch/flex 50% discount. Self-report claims free tier only. Conflict noted.
- **Architecture:** Proprietary multimodal MoE transformer, Gemini 3.x series.

### Raw benchmarks found

> Sources consulted: Google AI Studio model documentation, DeepMind model cards, Artificial Analysis model pages search, Vals AI comparisons, BenchLM profiles, SWE-bench leaderboard, community trackers. Conflicting numbers are noted.

Agent / tool use:

- Terminal-Bench 2.1: ~76.2% community tracker; 74.8% self-report
- Tau3-Banking / Tau2-Bench: 68.2% self-report; no independent verified public score found
- GDPval-AA: 1425 self-report; no independent verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas 83.6% community; 78.4% self-report

Reasoning / knowledge:

- GPQA Diamond: 92.2% meta.json summary; 80.5% self-report. No independent verified public score found for 3.5 Flash specifically.
- HLE: 28.4% self-report; no independent verified public score found
- LCR / MLCR: 85.5% self-report; no independent verified public score found
- CritPt: 72.1% self-report; no independent verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for exact ID; self-report claims 50 / #25
- Omniscience Accuracy / Hallucination Rate: 87.5% / 3.5% self-report

Coding:

- SWE-bench Verified / SWE-Pro: 78.8% meta.json summary; 55.1% SWE-bench leaderboard community; 38.4% self-report. Conflicting.
- LiveCodeBench: 65.2% self-report; no independent verified public score found
- SciCode / AA-SciCode: 39.5% self-report; no independent verified public score found
- Vibe Code Bench: 64.2% self-report
- DeepSWE / Coding Index / other: 54.2% self-report

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% at 1M context self-report; no independent RULER/GraphWalks publication found.

### Normalized scores (1–100)

- **Tool use: 81/100.** Terminal-Bench ~74-76% and MCP Atlas 83.6% indicate solid agentic tool manipulation. Missing independent Tau3/GDPval caps score below frontier Flash models.
- **Reasoning: 82/100.** GPQA reports 80.5-92.2% with conflicting sources and no independent verification; HLE 28.4% self-report suggests limited extreme reasoning. Mid-strong Flash reasoning.
- **Context window: 96/100.** 1M input verified with strong retrieval claims. Output limit 65K vs 1M claim reduces tier.
- **Multimodal: 85/100.** Text/image/audio/PDF input, text output, tool+JSON. Video input unverified in official docs.
- **Coding: 78/100.** SWE-bench reports vary 38-79% across sources; LiveCodeBench 65.2% self-report and agentic coding signals moderate. Capped by lack of independent SWE-bench Verified.
- **Cost efficiency: 85/100.** Free tier available; paid $1.50/$9.00 is moderate for 1M context Flash class. Efficiency improves with free tier.
- **Overall Score: 84/100.** Mean of five quality dims (81+82+96+85+78)/5 = 84.4 → 84. Well-rounded high-throughput multimodal Flash model; benchmark conflicts and unverified independent scores limit confidence.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
