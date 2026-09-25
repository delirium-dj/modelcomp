# Grok 4.3 — findings by DeepSeek 4.1 Flash

- Source: xAI / Grok 4.3 (`grok-4.3`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3. No "Free" wording — closed API-only model, no free Zen ID.
- **Short description:** xAI's current flagship API chat model for agentic tool calling and instruction following, an incremental but markedly cheaper successor to Grok 4.20 0309 v2. Proprietary — no weights are released, unlike Grok 4's open-source predecessor line.
- **Provider / access:** xAI Console first-party plus OpenRouter, Microsoft Foundry, Vercel AI Gateway and AWS Bedrock (5 routes). OpenAI-compatible Chat Completions.
- **Release / knowledge:** released 2026-05-06 (LLM Reference, BenchmarkList); knowledge cutoff 2024-11.
- **IDs:** `grok-4.3` (`meta.json` carries a 128K placeholder row; the verified 1M figure is used below).
- **Context window:** 1,000,000 tokens (LLM Reference, "1 m context"; xAI lists the 1M window on the model card). Cached input supported.
- **Modalities:** text and image in; text out; configurable reasoning; function calling and structured outputs (LLM Reference capability table).
- **Pricing (as of 2026-09-25):** $1.25 in / $2.50 out per 1M, cache read $0.20 (all five routes; xAI batch $1.00/$2.00). OfficeChai notes launch price cuts of ~37.5% (input) and ~58.3% (output) versus Grok 4.20, and a ~$395 full Artificial Analysis suite cost (~20% cheaper than the previous version).
- **Architecture:** proprietary, ~0.5T parameters (LLM Reference estimate); no weights released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **43.4%**; Terminal-Bench 2.1: **41.9%**; Terminal-Bench Hard: **37.9%** (BenchmarkList)
- Tau2-Bench Telecom: **97.7%** (BenchmarkList; 98th percentile, rank 9 of 332) — OfficeChai quotes the vendor-suite figure as **98%** (+5 pts)
- Tau3-Banking: **12.4%**; ITBench-AA: **32.7%**; APEX-Agents-AA: **17.0%** (BenchmarkList)
- GDPval-AA: **1,099 Elo** (BenchmarkList; 77th percentile, rank 80 of 340) vs **1,500 Elo** claimed in the launch suite (OfficeChai; +321 vs Grok 4.20's 1,179) — two suite versions, both listed
- AgentCIBench: **91.5%** (rank 5 of 17); Gert Labs Rankings: **52.2%**; AA-Briefcase: **760**; Vending-Bench 2: **35.26**; SearchGEO: **7.6%**; Workspace-Bench: **36.9%**; Agents' Last Exam: **7.2%**; RuneBench: **3.7**
- Claw-Eval / ClawProBench: no verified public score found; Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.4%** (BenchmarkList; 87th percentile, rank 16 of 117) / **90.1%** (LLM Reference, observed 2026-05-06)
- HLE: **37.2%** (BenchmarkList; 92nd percentile, rank 39 of 466)
- Artificial Analysis Intelligence Index: **53** on v4.0 (OfficeChai launch analysis; 4 pts above Grok 4.20 and above Muse Spark and Claude Sonnet 4.6, behind GPT-5.5's 60, Claude Opus 4.7 and Gemini 3.1 Pro Preview)
- AIIQ Composite IQ: **125** (90th percentile, rank 14 of 126); ObviousBench: **98.6%**; IFBench: **81%** (OfficeChai)
- AA-Omniscience: accuracy up 8 pts, non-hallucination rate down 8 pts vs Grok 4.20 0309 v2 (OfficeChai — direction only, absolute values not published)
- CritPt / LCR: no verified figure captured; GeneBench-Pro **1.5%** (LLM Reference)

Coding:

- SWE-bench Verified: **71.4%** (BenchmarkList; rank 43 of 72)
- LiveCodeBench: **84.5%** (rank 31 of 123); SciCode: **47.3%** (91st percentile)
- Terminal-Bench 2.1: **41.9%**; Terminal-Bench 2.0: **43.4%**; Vibe Code Bench v1.1: **19.4%** (37th percentile)
- BLXBench: **85.5%** (BenchmarkList; rank 1 of 25); ALE-Bench: **944.17**; IOI: **15.3%**; Code Migration: **6.8%**
- AI WebDev Arena: **1356.77 Elo** (27th percentile, rank 77 of 105)

Long context:

- No AA-LCR / MRCR / Ruler measurement was published for Grok 4.3 in the sources reviewed — the 1M window is listing-level, not retrieval-verified.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2-Bench Telecom 97.7–98% and AgentCIBench 91.5% are excellent instruction/agent-following signals, but the harder agentic rows are mid-table: Tau3-Banking 12.4%, GDPval-AA 1,099 Elo, Terminal-Bench 2.1 41.9% — around the 45–60% mid band, i.e. mid-50s to low-60s overall.
- **Reasoning: 86/100.** GPQA Diamond 91.4% meets the 90%+ frontier anchor and HLE 37.2% nearly meets the 40% reference (Intelligence Index 53, 125 AIIQ); the sub-60 index and falling non-hallucination rate keep it under 90.
- **Context window: 95/100.** A 1M-token window is the 95–100 tier; nothing published shows ≥98% retrieval at 512K+, so 100 is not supportable.
- **Multimodal: 62/100.** Text + image in, text out is the 60–70 band; no audio/video input and no non-text output, and no multimodal benchmark scores were published for it.
- **Coding: 72/100.** LiveCodeBench 84.5% and the #1 BLXBench 85.5% are strong, but SWE-bench Verified 71.4%, SciCode 47.3% (<55) and Vibe Code Bench 19.4% hold it in the low 70s.
- **Cost efficiency: 88/100.** $1.25/$2.50 with $0.20 cache reads maps just above the $1.25/$4.25 = 88 anchor thanks to the cheaper output; OfficeChai's Pareto-frontier framing and the ~$395 suite cost support a high-80s value score.
- **Overall Score: 75/100.** (60 + 86 + 95 + 62 + 72) / 5 = 75.0 → 75. Best fit: high-reasoning, long-context text work and instruction-following at a value price — weaker on hard agentic/coding tasks and text-only on the input side.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (BenchmarkList, LLM Reference, OfficeChai launch analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
