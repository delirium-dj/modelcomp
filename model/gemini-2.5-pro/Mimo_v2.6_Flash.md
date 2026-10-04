# Gemini 2.5 Pro — findings by Mimo v2.6 Flash

- Source: Google / Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's proprietary thinking/reasoning flagship of the 2.5 family, aimed at complex code, math, STEM, and long-document multimodal analysis. Successor line continues as Gemini 3 Pro; 2.5 Pro remains served but is nearing platform retirement windows.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`), Google Cloud Vertex AI / Model Garden, Azure/AWS enterprise listings. Chat-completions-style Gemini API (native Google) plus OpenAI-compatible third-party relays; not OpenCode Zen primary focus in this entry's meta (`opencode/gemini-2.5-pro`).
- **Release / knowledge:** Preview 2025-03-25; GA 2025-06-17 (Vertex); knowledge cutoff January 2025; latest stable update June 2025. Vertex retirement listed as 2026-10-20 on one cloud card.
- **IDs:** `gemini-2.5-pro` (Google); `opencode/gemini-2.5-pro` on Zen. No $0 Free ID scored here — paid API rates used.
- **Context window:** 1,048,576 input tokens; 65,536 max output (Gemini API model page, verified 2026-09).
- **Modalities:** text / image / audio / video / PDF in; text out; thinking (reasoning) yes; function calling, code execution, search grounding, structured JSON outputs yes; no image/audio generation.
- **Pricing (as of 2026-09-23):** $1.25 / $10.00 per 1M in/out for inputs ≤200K; $2.50 / $15.00 above 200K (long-context surcharge); cache read ~$0.125–0.13. Paid, not free.
- **Architecture:** proprietary (Transformer + MoE per technical report; parameter counts undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (model predates TB2.1 leaderboard prominence; not on vals/tbench top rows reviewed)
- Tau3-Banking / Tau2-Bench: no verified public score found in reviewed sources
- GDPval-AA: no verified public score found as a standalone row; AA Intelligence Index for the 2.5 Pro line sits at **23–26** (Artificial Analysis / BazaarLink AA card, 2026) which embeds GDPval among 9 evals
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Function calling / code execution / grounding: supported end-to-end on Gemini API (official model card)

Reasoning / knowledge:

- GPQA Diamond: **84.0%** (Google tech report / DataCamp summary, pass@1) — also listed 83% on BenchLM shared rows, 84.4% on AA harness
- HLE: **17.8%** (Neura Market aggregate) / **18.8–21.64%** no-tools at launch (Google / Benchgen)
- LCR / MLCR: no verified public score found under those names; MRCR long-context scores below
- CritPt: no verified public score found as a standalone row
- Artificial Analysis Intelligence Index: **23–26** (AA, 2025–2026; mid-pack vs frontier 40–60+)
- AIME 2025: **86.7–88.0%** pass@1 (Google tech report via DataCamp / arXiv 2507.06261)
- MMLU-Pro: **84.0%**; SimpleQA 50.8%; ARC-AGI v2 ~5.0%; Chatbot Arena ELO ~1465 (Serenities aggregate)
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this exact model in reviewed rows

Coding:

- SWE-bench Verified: **63.8%** (Google/provider-exact row on BenchLM; 63.2% on an alternate harness)
- LiveCodeBench: **73.6%** (Benchgen launch card) / 70.4% on LCB v5 (DataCamp); official tech report 74.2%
- Aider Polyglot: **74.0–82.2%** (DataCamp whole-file 74%; tech report 82.2%)
- SciCode / AA-SciCode: no verified public standalone score found; AA Coding Index **33.3%** (Requesty/AA card)
- Vibe Code Bench: **0.40%** (Vals AI v1.1 — near-floor; likely harness/mode mismatch, listed as-is)
- DeepSWE / SWE-Pro: no verified public score found

Long context:

- MRCR v2 8-needle: **58.0%** ≤128K; **16.4%** at 1M (Google Gemini 2.5 tech report Table 4)
- LOFT hard retrieval: 87.0% ≤128K; 69.8% at 1M (same tech report)
- RULER: **95.8%** at tested length (Serenities aggregate); LongBench Pro overall **73.42** (top of that leaderboard table, arXiv 2601.02872)
- LongCodeBench: degrades to ~7% success at 1M on hard file-repair tasks (arXiv 2505.07897)

### Normalized scores (1–100)

- **Tool use: 62/100.** Solid function-calling/code-execution/grounding stack and SWE-bench-class agentic coding, but no Terminal-Bench 2.1, Tau, GDPval, or Claw-Eval public rows were found — coverage gap caps the score in the mid tier.
- **Reasoning: 73/100.** GPQA Diamond 84% and AIME 2025 ~87–88% are strong mid-to-upper results, while HLE ~18–22% and AA Intelligence Index 23–26 sit well below current frontier (40–60+); missing CritPt/LCR rows also cap it.
- **Context window: 90/100.** Full 1M input window meets the ≥1M tier (95–100), held back from the top of the band because MRCR v2 8-needle retrieval collapses to 16.4% at 1M (100 requires ≥98% retrieval at 512K+).
- **Multimodal: 93/100.** Native text/image/audio/video/PDF input with audio-understanding SOTA claims in the tech report and no non-text output — scores in the audio-in band (90–100).
- **Coding: 70/100.** SWE-bench Verified 63.8% and LiveCodeBench ~74% are solid mid-pack; Vibe Code Bench 0.40% and the gap to DeepSWE/SWE-Pro-class frontier results keep it out of the 90s.
- **Cost efficiency: 72/100.** $1.25/$10.00 short-context is mid-market, but the 2× long-context surcharge above 200K and $10 output rate drag below the ~$1–4 output sweet spot.
- **Overall Score: 77.6/100.** Mean of the five quality dims (62 + 73 + 90 + 93 + 70) / 5 = 77.6; best-fit as a proven multimodal long-context workhorse when 1M window + audio/video input matter more than frontier agentic scores.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: fresh public web research (Google Gemini API model card, Gemini 2.5 tech report arXiv 2507.06261, BenchLM/Benchgen/AA/Neura/vals aggregates); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
