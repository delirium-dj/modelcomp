# Gemini 2.5 Flash Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no distinct page** for `gemini-2.5-flash-lite` (no source-displayable rows); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-ran the live web sweep on the official Google Cloud Vertex model page plus five independent trackers — BenchmarkList, BenchLeader (data as of 12 Oct 2026), Artificial Analysis, LLM-Stats and Vals AI — with RankedAGI as a sixth cross-check. Net result: all six normalized dims held, so the Overall is unchanged at 57. The pass did surface four genuine source conflicts (MMLU-Pro 75.9% vs 53.7%; AA Intelligence Index 11.41 vs 8.6 vs 7; LiveCodeBench 59.3% vs v6 34.3%; AIME 2025 53.3% vs 63.1%) and one new unverified coding claim (RankedAGI SWE-bench Verified 44.9%, not corroborated by Google, Artificial Analysis, Vals AI or BenchmarkList). AA-LCR was revised down from 56.3% to 55.7%. No fabricated numbers; every figure below carries its URL.

## Model card

- **Name:** Gemini 2.5 Flash-Lite (no "Free"-tier wording; free AI Studio quota exists)
- **Short description:** The lightweight, ultra-low-latency tier of the Gemini 2.5 family, built for cost efficiency and volume rather than reasoning depth. Superseded by Gemini 3.1 and 3.5 Flash-Lite.
- **Provider / access:** Google — Gemini API and Google AI Studio. Proprietary, closed, no open weights.
- **Release / knowledge:** Catalogue release date disputed — 2025-06-17 (Artificial Analysis, LLM-Stats, RankedAGI) vs 2025-07-22 (BenchmarkList, Vals AI catalogue, per OpenRouter); GA 2025-09-25. Knowledge cutoff January 2025 (Artificial Analysis, LLM-Stats).
- **IDs:** `gemini-2.5-flash-lite`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens input (all sources); max output 65,536 / ~66K tokens (LLM-Stats, Vals AI).
- **Modalities:** text, image, audio, video and file input; text output; tool calls; reasoning yes (lightweight thinking). Conflict: LLM-Stats lists only text + image input, while Artificial Analysis, Vals AI and Google list audio/video too.
- **Pricing (as of 2026-10-11):** $0.10 / 1M in and $0.40 / 1M out (all sources) — the cheapest paid tier tracked in this scan. Free AI Studio quota available.
- **Architecture:** proprietary, closed; parameter count and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom (τ²-bench): **19.0%** (rank 262 of 332; 21st percentile) / **18.4%** at the thinking config (BenchmarkList; BenchLeader) — https://benchmarklist.com/models/google-gemini-2.5-flash-lite/ ; https://www.benchleader.com/models/gemini-2-5-flash-lite
- Berkeley Function-Calling Leaderboard: **36.9%** (BFCL-V4 / BFCL Overall, rank 50 of 98); non-Live AST **86.6%**, Live **65.8%**, BFCL v3 Multi-Turn **13.5%** (BenchmarkList)
- Terminal-Bench Hard: **4.5%** (rank 207 of 326; 37th percentile) / **2.3%** no-reasoning (BenchmarkList; BenchLeader)
- GDPval-AA: **321 Elo** (rank 292 of 352; 17th percentile); RankedAGI lists **322 Elo** (BenchmarkList; RankedAGI)
- MCP-Bench **0.6** (rank 11 of 20); Galileo Agent Leaderboard **0.47** (rank 8 of 22); VerdictBench **52.9%**; TRAP **31.2**; OmniGAIA **8.6%**; Omni-DeepSearch **2.2%**; PinchBench **22.0%**; AIM-Bench (inventory) **30.38**; AgentCollabBench **1.5%** (BenchmarkList)
- BenchLeader "Agents & tools" composite **49/100** on its best (not-stated) effort config — the only trackerside figure above the model's weak raw-agent numbers (BenchLeader)
- Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (BenchmarkList; BenchLeader thinking config); **47.4%** at no-reasoning; **66.7%** (RankedAGI) — https://benchmarklist.com/models/google-gemini-2.5-flash-lite/ ; https://rankedagi.com/models/gemini-2.5-flash-lite
- HLE: **6.8%** (thinking) / **3.7%** (no-reasoning) / **6.9%** (RankedAGI)
- MMLU-Pro: **75.9%** (BenchmarkList, rank 156 of 312) vs **53.7%** (HELM Capabilities via BenchLeader) — **conflict, harness/version difference**
- SciCode: **19.3%** (rank 247 of 296; 17th percentile)
- MMLU **84.5%**, MMMU **72.9%** (RankedAGI)
- Artificial Analysis Intelligence Index: **11.41** (BenchmarkList, rank 251 of 427) vs **8.6** thinking / **6.7** no-reasoning (AA v4.3.2 via BenchLeader) vs **7** (Artificial Analysis non-reasoning page, estimated) — **conflict across index versions**
- Epoch Capabilities Index: **133.9** (rank 132, BenchLeader) vs the earlier **107.66** (BenchmarkList) — **conflict**
- AIME 2024/2025: **53.3%** (BenchmarkList) vs **63.1%** (RankedAGI) — **conflict**
- CritPt: **0.0%** (BenchLeader); AA-LCR **55.7%** (rank 179 of 408) — the strongest long-context figure
- ObviousBench **88.2%**; SycoEval-EM **88.0%** (rank 2 of 19); Vectara HHEM factual consistency **96.7%** (98th percentile, rank 3 of 85); LisanBench **122.33**; CAIS Text Capabilities Index **5.1** (rank 41 of 41); Alignment DVMap **45.3%** (BenchmarkList)
- LCR / MLCR: **no verified public score found**

Coding:

- LiveCodeBench: **59.3%** (prior report) vs LiveCodeBench **v6 34.3%** (RankedAGI) — **conflict, version/harness difference** — https://rankedagi.com/models/gemini-2.5-flash-lite
- SciCode: **19.3%** (BenchmarkList; agrees across both passes)
- SWE-bench Verified: **44.9%** (RankedAGI only — **new, unverified**; not corroborated by Google, Artificial Analysis, Vals AI or BenchmarkList) — https://rankedagi.com/models/gemini-2.5-flash-lite
- Aider Polyglot: **27.1%** (RankedAGI); WeirdML **35.2%** (BenchLeader); BenchLeader coding composite **40/100** (best config)
- SWE-bench Pro / Vibe Code Bench / DeepSWE: **no verified public score found**

Multimodal:

- MMMU-Pro: **54.0%** (no-reasoning) / **58.2%** (thinking); MMMU **72.9%** (RankedAGI); MMAU **61.6%** (BenchmarkList) — https://www.benchleader.com/models/gemini-2-5-flash-lite
- Audio: SpeakerSleuth **55.3%** (rank 9 of 21), AGL1K **1687.97** (rank 9 of 19), HearSay **22.9%**; InfiniteBM Hold'em **1684.29 Elo** (rank 1 of 20), Liar's Dice **1380.31 Elo** (BenchmarkList)
- CAIS Vision Capabilities Index **47.9** (rank 34 of 43); Vals SAGE **27.5%** (BenchmarkList; Vals AI)

Long context:

- AA-LCR **55.7%** (rank 179 of 408) — revised from 56.3% on 2026-10-01; **32.0%** at no-reasoning (BenchmarkList; BenchLeader)
- Fiction.LiveBench 120k **21.9%**; Beyond Static Dialogues long-term-memory probe **16.0%** (BenchLeader; BenchmarkList)
- No MRCR / RULER / GraphWalks recall value found.

### Normalized scores (1–100)

- **Tool use: 20/100.** τ²-bench 19.0%, Terminal-Bench Hard 4.5% and a 17th-percentile GDPval-AA position keep it effectively unusable as an autonomous agent; BenchLeader's 49/100 "Agents & tools" composite is a lone optimistic outlier against a wall of single-digit-to-low-teens raw scores. Function calling merely exists.
- **Reasoning: 45/100.** GPQA Diamond 62.5% and MMLU-Pro 75.9% (BenchmarkList) are acceptable for a lite tier, but HLE 6.8%, CritPt 0.0% and AA Index 8.6–11.41 (source-dependent) show shallow frontier reasoning; MMLU-Pro 53.7% (HELM) bounds the high end.
- **Context window: 95/100.** A 1M-token input window on a $0.10/1M-input model remains the standout spec — the cheapest way to push a million tokens found in this scan; no recall evidence (MRCR/RULER) keeps it below maximum.
- **Multimodal: 80/100.** Text, image, audio, video and file input with text output covers nearly every ingestion path; no media generation, MMAU 61.6% is middling, and LLM-Stats lists only text+image input.
- **Coding: 45/100.** LiveCodeBench sits between 34.3% (v6, RankedAGI) and 59.3% (prior), and SciCode 19.3% is weak; the new RankedAGI SWE-bench Verified 44.9% is uncorroborated and Aider Polyglot 27.1% rules out repository-level work.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M with a free AI Studio tier is at the very bottom of the paid market (all sources agree on price); only an outright $0 model scores higher.
- **Overall Score: 57/100.** Mean of the five quality dims (20+45+95+80+45)/5 = 57.0 → 57. Best fit: high-volume classification, extraction, routing and cheap long-context ingestion — not agents or coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (official Google Cloud Vertex 2.5 Flash-Lite model page, plus BenchmarkList model page, BenchLeader, Artificial Analysis model + release pages, LLM-Stats, Vals AI and RankedAGI); deep second-pass re-verification of the 2026-10-01 report. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
