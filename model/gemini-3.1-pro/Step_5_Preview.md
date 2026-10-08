# Gemini 3.1 Pro — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.1-pro`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (`gemini-3.1-pro-preview`; thinking-high default)
- **Short description:** Google DeepMind's flagship reasoning model (top of the Gemini lineup, above 3.1 Flash/Flash-Lite), built for agentic coding, long-context analysis, and scientific problem-solving. Currently preview-tier.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, Gemini Enterprise. Function calling + structured output + search-as-tool + code execution. No programmatic free tier (free only inside AI Studio web UI).
- **Release / knowledge:** Released 2026-02-19. Knowledge cutoff 2025-01-31 (per llmboard). First Gemini line to use a `.1` increment.
- **IDs:** `gemini-3.1-pro-preview` (also `gemini-3.1-pro-preview (high)`). No free/contributor ID.
- **Context window:** 1,048,576 (1M) input; 65,536 (~64K) max output (default `maxOutputTokens` is only 8,192 — must be raised).
- **Modalities:** Text, image, video, audio, PDF in; text out (some model-card icons suggest image/audio out but the LLM output is text). Reasoning yes (thinking-high); tool calls yes; JSON/structured yes.
- **Pricing (as of 2026-10-08):** $2.00/M in · $12.00/M out (≤200K input); reprices to $4.00/$18.00 above 200K input. Cache $0.20/M. Batch half rate. No free API tier.
- **Architecture:** Sparse Mixture-of-Experts Transformer (builds on Gemini 3 Pro); parameter count undisclosed (proprietary).

### Raw benchmarks found

> Cross-referenced Google's official DeepMind benchmark table, llmboard.ai (47 benchmarks), hokai.io, and vectorwire.ai (215 results, 30 independent). Official Google table is the primary source; independent runs noted where available.

Agent / tool use:

- τ2-bench Retail: **90.8%** (Google; rank #1 on llmboard) / **99.3%** Telecom
- MCP Atlas (multi-step MCP workflows): **69.2%** (Google)
- BrowseComp (agentic search): **85.9%** (Google; rank #11/67)
- Terminal-Bench 2.0 (Terminus-2 harness): **68.5%** (Google; ahead of Opus 4.6 65.4%)
- APEX-Agents (long-horizon professional): **33.5%** (Google; rank #6/11, only 50th pct) — the weak agentic signal
- Terminal-Bench 4.0: no verified public score found for 3.1 Pro

Reasoning / knowledge:

- GPQA Diamond: **94.3%** no tools (Google; highest publicly verified frontier result, rank #4/250 on llmboard)
- ARC-AGI-2: **77.1%** (ARC Prize verified; >2× Gemini 3 Pro's 31.1%, rank #3/19)
- Humanity's Last Exam: **44.4%** no tools / **51.4%** search+code (Google; AA HLE Text no-tools 47.03%)
- MMLU-Pro: **90.99%** (highest reported at launch per hokai); MMMLU (multilingual) **92.6%**
- LiveBench: **79.9%** (rank #4/38)
- AA Omniscience Accuracy: **54.85%** (rank #9/201)
- Math: Vector Wire rates Math **"Limited"** (−40.0% vs leader, 5/5) — a clear reasoning blind spot
- AIME 2025: no verified public score found for 3.1 Pro

Coding:

- SWE-bench Verified: **80.6%** single attempt (Google; rank #10/117, 92nd pct) — mid-frontier (Opus 4.6 80.8%, Codex 80.0%)
- LiveCodeBench Pro: **Elo 2887** (rank #1/5, 100th pct) — best-in-class competitive coding
- SWE-bench Pro (Public): **54.2%** (Google) — mid-tier on the harder diverse-agentic suite
- SciCode: **59.0%** (rank #3/26)
- GDPval-AA (Elo): **1317** (Google) — below the ~1750 frontier threshold; Vector Wire "Coding Capable" (−20.4%)
- DeepSWE / Vibe Code Bench: no verified public 3.1-Pro row surfaced live
- Terminal-Bench 2.0 (agentic coding): **68.5%** (see tool use)

Multimodal:

- MMMU-Pro: **80.5%** no tools (rank #4 on llmboard); MMMU **82%**
- VideoMME: **87.2%** (hokai; ~8-pt lead over Claude Opus 4.5)
- Vector Wire: Multimodal **"Strong"** (−8.6% vs leader, 4/6)

Long context:

- MRCR v2 8-needle 128k average: **84.9%**; **1M pointwise: 26.3%** (Google) — retrieval collapses at the top of the window
- Vector Wire: Long Context **"Capable"** (−13.5% vs leader, 2/3)
- **Tool use: 88/100.** τ2-bench Retail 90.8% (#1) and Telecom 99.3%, MCP Atlas 69.2%, BrowseComp 85.9%, and TB2.0 68.5% are strong. Capped by APEX-Agents 33.5% (only 50th pct on long-horizon professional tasks) and Vector Wire's Agentic "Limited" (−28.4% vs leader) — agentic long-horizon is the soft spot despite strong retail/MCP tool scores.
- **Reasoning: 92/100.** GPQA Diamond 94.3% (highest publicly verified) and ARC-AGI-2 77.1% are firmly frontier; HLE 44.4%/51.4% clears the 40% bar. Capped by Vector Wire's Math "Limited" (−40.0%) and no verified AIME row — math is a blind spot that keeps it below the very top.
- **Context window: 88/100.** 1M input puts it in the ≥1M tier, but MRCR retrieval collapses from 84.9% at 128K to 26.3% at 1M, and Vector Wire rates Long Context only "Capable" (−13.5%); the 64K output cap is a further caveat. A nominal 1M window with weak 1M retrieval does not earn the top tier.
- **Multimodal: 92/100.** Full input coverage (text/image/video/audio/PDF) with MMMU-Pro 80.5% and VideoMME 87.2% (8-pt lead over Opus 4.5); Vector Wire rates Multimodal "Strong" (−8.6%). Just under the ceiling because output is text-only.
- **Coding: 82/100.** SWE-bench Verified 80.6% and LiveCodeBench Pro Elo 2887 (#1, best-in-class competitive coding) are strong, but SWE-bench Pro 54.2% and GDPval-AA 1317 Elo (below the 1750 frontier threshold) are mid-tier, and Vector Wire rates Coding "Capable" (−20.4%, rank 10/10). Competitive-coding strength does not carry to real-world agentic coding.
- **Cost efficiency: 78/100.** Paid-only at $2/$12 per 1M (with a 2× repricing above 200K input); no free tier. Sits between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors, weighted toward the cheaper end.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88+92+88+92+82)/5 = 88.4. Best fit for scientific reasoning, competitive coding, and multimodal long-context analysis; not the top pick for the hardest long-horizon agentic coding or math.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced Google's official DeepMind benchmark table, llmboard.ai (47 benchmarks), hokai.io, and vectorwire.ai (215 results, 30 independently verified).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


### Normalized scores (1–100)
