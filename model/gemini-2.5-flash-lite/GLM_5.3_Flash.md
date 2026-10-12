# Gemini 2.5 Flash Lite — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (smallest member of the 2.5 Flash family; later "Lite" refreshes exist in Google's catalog)
- **Short description:** Google's lowest-cost, lowest-latency Gemini — a small proprietary model for high-volume classification, summarization and simple chat, with the same 1M window and multimodal input as its bigger Flash sibling but far weaker agentic/coding chops. The 2026-10-05 enrichment pass added LiveCodeBench and SWE-bench Verified readings.
- **Provider / access:** Google — Gemini API ID `gemini-2.5-flash-lite` (AI Studio, Vertex AI); single tracked provider on llm-stats (Google). `generateContent` API; tech report arXiv:2503.16534 (llm-stats link).
- **Release / knowledge:** released 2025-06-17 per llm-stats (BenchmarkList dates the tracked build 2025-07-22); knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite` (Google). Free tier available (Google AI Studio / Gemini API free tier; OpenCode Zen lists it with standard rate limits).
- **Context window:** 1,000,000-token input / 65,536-token max output (Google provider row, llm-stats).
- **Modalities:** text + image in, text out (llm-stats); BenchmarkList also tracks audio evals (SpeakerSleuth, AGL1K, HearSay), indicating audio input; no video/PDF documented on the pages checked. Tool calling, JSON mode.
- **Pricing (as of 2026-10-11):** $0.10 in / $0.40 out per 1M (Google, lowest tracked price) — Google's cheapest paid Gemini tier. Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed (Gemini 2.5 tech report). No reasoning-by-default posture; hybrid thinking controls like the rest of the 2.5 family.

### Raw benchmarks found

> Second-pass verification (2026-10-11): BenchLM has no Lite-specific page — the fetch resolves to the parent Gemini 2.5 Flash board (the non-Lite sibling, BenchLM 42.2 #125), whose rows serve as family context only, not Lite measurements. No new Lite-specific evidence surfaced; the prior tracker rows stand and scores are carried, not moved.

Agent / tool use (Lite rows, prior pass):

- BFCL-V4: **36.9%** (rank 50/98); BFCL v3 Multi-Turn: **13.5%** (BenchmarkList)
- Tau2-Bench Telecom: **19.0%** (rank 262/332); Terminal-Bench Hard: **4.5%** (rank 207/326)
- GDPval-AA: **321** (rank 280/340, 18th pct)
- MCP-Bench: **0.6**; Galileo Agent Leaderboard: **0.47**; TRAP: **31.2**; OmniGAIA: **8.6%**; Omni-DeepSearch: **2.2%** (BenchmarkList)
- TB2.0/TB2.1, Tau3, Claw Bench, OSWorld, BrowseComp: no verified public score found
- Family context (parent Gemini 2.5 Flash, non-Lite): τ²-bench **14.9%** (AA), AA Agentic rows consistent with the Lite-level weakness

Reasoning / knowledge (Lite rows):

- GPQA Diamond: **62.5%** (BenchmarkList); MMLU-Pro: **75.9%**; HLE: **6.8%** (BenchmarkList)
- Artificial Analysis Intelligence Index: **11.41** (rank 252/418, 40th pct) (BenchmarkList) — the parent-sibling AA board reads 9.8, consistent with the family tier
- AA-LCR: **56.3%** (61st pct — decent long-context reasoning for its class) (BenchmarkList); the parent-sibling AA-LCR reads 49.9, again consistent
- AIME 2025: **84.1%** (Google GA figures, June 2025 — vendor/custom-harness figure, kept separate)
- ARC-AGI / CritPt / Omniscience: no verified public score found for the Lite

Coding (Lite rows):

- LiveCodeBench: **59.3%** (Requesty aggregator, prior pass); SWE-bench Verified: **31.6%** (anotherwrapper; LLMLearner 27.6); SWE-bench Verified (vendor GA figure): **~55.7%** (Google June 2025 custom-agent setup — kept separate)
- SciCode: **19.3%** (rank 353/458)
- SWE-Pro / Vibe Code Bench: no verified public score found

Long context:

- Window: **1M tokens** in / 65.5K out (llm-stats); AA-LCR 56.3% evidences usable retrieval at depth
- MRCR / RULER at window length: no verified public score found

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: no Lite-specific aggregator page exists (BenchLM resolves to the parent board) and no new Lite rows surfaced; the tracker evidence stands.

- **Tool use: 45/100.** BFCL-V4 36.9 with multi-turn 13.5, Tau2 Telecom 19.0, TB-Hard 4.5 and GDPval-AA 321 (18th pct) — breadth of tool support but bottom-quartile 2026 agentic execution.
- **Reasoning: 55/100.** GPQA 62.5 and MMLU-Pro 75.9 are mid-tier; HLE 6.8 and AA II 11.41 (40th pct) put it a step below plain 2.5 Flash (GPQA 83, HLE 11) — the parent-sibling AA rows corroborate the family gap.
- **Context window: 97/100.** Full 1M input at the top tier of this repo with AA-LCR 56.3 as measured evidence; 65.5K output cap keeps it off 100.
- **Multimodal: 75/100.** Text + image (+ audio per tracked evals) in, text out; no video/PDF documented and no MMMU-class vision score found to argue higher (the parent-sibling AA-MMMU-Pro 65.5 hints at the family ceiling).
- **Coding: 50/100.** LiveCodeBench 59.3% (Requesty) adds a solid algorithmic-coding datapoint, but the measured SWE-bench Verified 31.6% confirms weak repo-level agentic work; SciCode 19.3 stays bottom-tier.
- **Cost efficiency: 100/100.** Cheapest tracked Gemini rate ($0.10/$0.40) plus a rate-limited free tier — the $0-floor tier of this repo's cost scale.
- **Overall Score: 64.4/100.** Five-dim mean per `RULES.md` (Cost excluded): (45 + 55 + 97 + 75 + 50) / 5 = 322/5 = 64.4 — unchanged. Best fit: ultra-cheap high-volume triage/summarization with standout hallucination resistance (Vectara HHEM 96.7%, #3/85) — now with measured coding bounds: fine for algorithmic snippets, not for agentic repo work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (verification pass: BenchLM has no Lite-specific page — the fetch resolves to the parent Gemini 2.5 Flash board used as family context only; the prior 2026-09-18/10-05 passes on llm-stats/BenchmarkList/Requesty/anotherwrapper remain the evidence base); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
