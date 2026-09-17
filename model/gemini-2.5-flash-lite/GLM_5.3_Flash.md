# Gemini 2.5 Flash-Lite — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (smallest member of the 2.5 Flash family; later "Lite" refreshes exist in Google's catalog)
- **Short description:** Google's lowest-cost, lowest-latency Gemini — a small proprietary model for high-volume classification, summarization and simple chat, with the same 1M window and multimodal input as its bigger Flash sibling but far weaker agentic/coding chops.
- **Provider / access:** Google — Gemini API ID `gemini-2.5-flash-lite` (AI Studio, Vertex AI); single tracked provider on llm-stats (Google). `generateContent` API; tech report arXiv:2503.16534 (llm-stats link).
- **Release / knowledge:** released 2025-06-17 per llm-stats (BenchmarkList dates the tracked build 2025-07-22); knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite` (Google). Free tier available (Google AI Studio / Gemini API free tier; OpenCode Zen lists it with standard rate limits).
- **Context window:** 1,000,000-token input / 65,536-token max output (Google provider row, llm-stats).
- **Modalities:** text + image in, text out (llm-stats); BenchmarkList also tracks audio evals (SpeakerSleuth, AGL1K, HearSay), indicating audio input; no video/PDF documented on the pages checked. Tool calling, JSON mode.
- **Pricing (as of 2026-09-18):** $0.10 in / $0.40 out per 1M (Google, lowest tracked price) — Google's cheapest paid Gemini tier. Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed (Gemini 2.5 tech report). No reasoning-by-default posture; hybrid thinking controls like the rest of the 2.5 family.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **36.9%** (rank 50/98); BFCL v3 Multi-Turn: **13.5%** (rank 47/85) (BenchmarkList)
- Tau2-Bench Telecom: **19.0%** (rank 262/332) (BenchmarkList)
- Terminal-Bench Hard: **4.5%** (rank 207/326) (BenchmarkList)
- GDPval-AA: **321** (rank 280/340, 18th pct) (BenchmarkList)
- MCP-Bench: **0.6** (47th pct); Galileo Agent Leaderboard: **0.47** (67th pct); TRAP: **31.2** (83rd pct); OmniGAIA: **8.6%**; Omni-DeepSearch: **2.2%** (BenchmarkList)
- TB2.0/TB2.1, Tau3, Claw Bench, OSWorld, BrowseComp: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (rank 252/464); MMLU-Pro: **75.9%** (rank 156/312); HLE: **6.8%** (rank 234/466) (BenchmarkList)
- Artificial Analysis Intelligence Index: **11.41** (rank 252/418, 40th pct) (BenchmarkList)
- AA-LCR: **56.3%** (rank 161/409, 61st pct — decent long-context reasoning for its class) (BenchmarkList)
- ARC-AGI / CritPt / Omniscience: no verified public score found

Coding:

- SciCode: **19.3%** (rank 353/458, 23rd pct) (BenchmarkList)
- SWE-bench Verified / LiveCodeBench / SWE-Pro / Vibe Code Bench: no verified public score found

Long context:

- Window: **1M tokens** in / 65.5K out (llm-stats); AA-LCR 56.3% evidences usable retrieval at depth
- MRCR / RULER at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 45/100.** BFCL-V4 36.9 with multi-turn 13.5, Tau2 Telecom 19.0, TB-Hard 4.5 and GDPval-AA 321 (18th pct) — breadth of tool support but bottom-quartile 2026 agentic execution.
- **Reasoning: 55/100.** GPQA 62.5 and MMLU-Pro 75.9 are mid-tier; HLE 6.8 and AA II 11.41 (40th pct) put it a step below plain 2.5 Flash (GPQA 83, HLE 11).
- **Context window: 97/100.** Full 1M input at the top tier of this repo with AA-LCR 56.3 as measured evidence; 65.5K output cap keeps it off 100.
- **Multimodal: 75/100.** Text + image (+ audio per tracked evals) in, text out; no video/PDF documented and no MMMU-class vision score found to argue higher.
- **Coding: 45/100.** SciCode 19.3 (23rd pct) and TB-Hard 4.5 with no SWE-bench-class result found — execution-tier coding only.
- **Cost efficiency: 100/100.** Cheapest tracked Gemini rate ($0.10/$0.40) plus a rate-limited free tier — the $0-floor tier of this repo's cost scale.
- **Overall Score: 70/100.** Mean: (45 + 55 + 97 + 75 + 45 + 100) / 6 = 417/6 = 69.5 → **70**. Best fit: ultra-cheap high-volume triage/summarization with standout hallucination resistance (Vectara HHEM 96.7%, #3/85) — not for agentic or hard coding work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (llm-stats model page + provider table, BenchmarkList benchmark map with percentile ranks incl. BFCL-V4/Tau2/TB-Hard/GDPval-AA/AA-LCR/AA Intelligence Index, allthemodels-style aggregates via BenchmarkList results section); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
