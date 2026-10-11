# Gemini 2.5 Pro — findings by Ling 3.1 Flash

- Source: Google DeepMind (`opencode/gemini-2.5-pro`; API `gemini-2.5-pro`; Gemini API/AI Studio, Vertex AI, OpenRouter, Vercel AI Gateway)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's June-2025 thinking flagship (knowledge cutoff Jan 2025) — GPQA Diamond 86.4%, AIME 2025 88.0%, Aider Polyglot 82.2–83.1%, LiveCodeBench 69.0–75.6%, MMMU 82.0%, VideoMMMU 83.6% — across a 1M multimodal context at $1.25/$10 per 1M (≤200K); a 16-month-old model now far below the October-2026 frontier (Terminal-Bench 2.0 32.6%, HLE 18.8–21.6%, MRCR v2 16.4% at 1M).
- **Provider / access:** Gemini API (free tier available — data used to improve products; paid tier for production), Google AI Studio, Vertex AI, OpenRouter, Vercel AI Gateway; thinking model (reasoning tokens billed as output).
- **Release / knowledge:** June 2025 (GA model card); knowledge cutoff January 2025.
- **IDs:** `opencode/gemini-2.5-pro` / `gemini-2.5-pro`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1M-token window (64K out) and takes text, image, audio and video input.
- **Context window:** 1,000,000 tokens in; 64,000 out.
- **Modalities:** text, image, audio, video in; text out.
- **Pricing (as of 2026-10-02):** $1.25/$10.00 per 1M input/output (≤200K prompts); $2.50/$15.00 (>200K, whole request); cached input $0.125/M ($0.25 >200K, 10% of input); cache storage $4.50/M tokens/hour; Flex/Batch 50% ($0.625/$5.00); Priority 1.8× ($2.25/$18.00); free Gemini API tier; blended ~$1.34/M (AA, 7:2:1).
- **Architecture:** proprietary Gemini 2.5 family with native thinking; parameter count undisclosed.

### Raw benchmarks found

Vendor (Google launch, June 2025; pass@1 unless noted):

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (single attempt)
- Humanity's Last Exam (no tools): **21.6%** (18.8% with extended thinking per llmreference)
- AIME 2025: **88.0%**; AIME 2024: **92.0%**
- MMLU-Pro: **86.2%**; Global MMLU (Lite): **89.2%**
- SimpleQA: **54.0%**; FACTS grounding: **87.8%**

Coding / agentic:

- LiveCodeBench (UI 2025-01-01→05-01): **69.0%** (single); **75.6%** (v5 pass@1)
- Aider Polyglot: **82.2%** (diff-fenced, 3-trial avg); **83.1%** (preview-06-05, 32K think)
- SWE-bench Verified: **59.6%** (single); **67.2%** (multiple attempts); **63.8%** (custom scaffold, extended thinking)
- HumanEval: **93.1%**
- SWE-bench Verified: **53.6%** (official board, 2025-07-26, UnifyBench) — a third read alongside the card's 59.6% (single) / 67.2% (multiple)
- Vibe Code Bench v1.1: **0.40%** (Vals, BenchLM) — a 2026 benchmark on a June-2025 model; vintage effect, treated as a cap
- Terminal-Bench 2.0 (Terminus-2 agent): **32.6%**
- MCP-Atlas (arXiv 2602.00933, primary source: 36 real MCP servers / 220 tools / 1,000 tasks, claims-based rubric, 78% human-judge agreement): **Pass@1 8.8%** (coverage 30.7%) — near the bottom of the board (Opus 4.5 62.3%, Gemini 3 Pro 54.1%, GPT-5 44.5%, Sonnet 4.5 43.8%, o3 43.6%; ahead of only GPT-4o 7.2% and 2.5 Flash 3.4%); failure profile: tool usage 63.0% of failures, task understanding 26.0%
- τ²-Bench: **54.1%** (BenchLM/AA); BFCL v4: **52.3%** (launch snapshot, UnifyBench); MultiChallenge: **62.3%**

Multimodal:

- MMMU: **82.0%** (single; 81.7% standard pass@1 without thinking); VideoMMMU: **83.6%**; Vibe-Eval (Reka): **67.2%**

Long context:

- MRCR v2 (8-needle, the harder protocol Google adopted going forward): **58.0%** at 128K (average); **16.4%** at 1M (pointwise) — weak retrieval at full length
- LOFT (hard): **87.0%** at ≤128K; **69.8%** at 1M (Google tech report, arXiv 2507.06261) — strong hard-retrieval reads at depth
- MRCR v1 (older single-needle protocol, 1M pointwise): **82.9%** — resolves the third-party "MRCR 93%/82.9%" conflict: v1 and v2 are different methodologies (Google switched to the harder 8-needle v2), so 82.9% (v1) and 16.4% (v2) are both genuine

Other:

- Chatbot Arena: **1398 Elo**; 120.4 tok/s (AI Studio), 22.89s TTFT

### Normalized scores (1–100)

- **Tool use: 62/100.** SWE-bench Verified 59.6% (67.2% with multiple attempts) and LiveCodeBench 69.0–75.6% are its strongest agentic-coding signals, but Terminal-Bench 2.0 at 32.6% (Terminus-2) is far under the current frontier, and MCP-Atlas 8.8% (primary-sourced; near the board's bottom), τ² 54.1%, BFCL v4 52.3% and AA Agentic Index 3.5 cap the score.
- **Reasoning: 74/100.** GPQA Diamond 86.4%, AIME 2025 88.0% (AIME 2024 92.0%) and MMLU-Pro 86.2% are strong, but HLE 18.8–21.6% (no tools) is well under the current frontier band and SimpleQA 54.0% caps the score; the model is 16 months old.
- **Context window: 80/100.** 1M-token window (64K out); retrieval at depth spans protocols — MRCR v2 8-needle 58.0% at 128K / 16.4% at 1M (weakest), LOFT hard 69.8% at 1M, MRCR v1 82.9% at 1M, AA-LCR 69% — the hardest protocol and the independent composite read keep this well below the 95+ band despite the window size.
- **Multimodal: 90/100.** Native text/image/audio/video input with text output — the audio-in/video band (90–100); MMMU 82.0% and VideoMMMU 83.6% support, with Vibe-Eval 67.2% the weakest signal.
- **Coding: 70/100.** Aider Polyglot 82.2–83.1% and HumanEval 93.1% are strong, with LiveCodeBench 69.0–75.6% supporting; SWE-bench Verified 59.6% (67.2% multiple attempts) is mid-tier by 2026 standards, Terminal-Bench 2.0 32.6% is far under the current bar, and Vibe Code Bench v1.1 0.40% (Vals) is a 2026-vintage cap.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M (≤200K; blended ~$3.44/M at 3:1) sits between the ~$1.25/$4.25≈88 and ~$3/$15≈60 anchors; a free Gemini API tier (data used to improve products), 10%-of-input cache reads and half-rate Flex/Batch offset, while >200K prompts bill the whole request at $2.50/$15.
- **Overall Score: 75/100.** (62+74+80+90+70)/5 = 75.2 → 75 — a historically important June-2025 thinking model (GPQA 86.4%, AIME 88.0%, Aider 83.1%, 1M audio/video context at $1.25/$10 with a free tier) whose age shows: Terminal-Bench 2.0 32.6%, HLE ~20% and MRCR 16.4% at 1M are all far below the October-2026 frontier.

---

## Update 2026-10-08 (6-day re-research)

Full Artificial Analysis Intelligence Index row found (v4.3.2; fills the composite-index and AA-LCR gaps):

- AA Intelligence Index: **16** (snapshots rank it #173 of 225 up to #292 of 696; 107th of 182 reasoning tools on modelgrep; median for its price tier: 26) — far below the frontier, as expected for a 16-month-old model
- Index sub-scores: AA-Briefcase v1.1 **298**, GDPval-AA v2.1 **459**, AutomationBench-AA **2%**, Terminal-Bench 4.0 **0%**, SciCode **46%**, Humanity's Last Exam **23%**, GDP.pdf **10%**, CritPt **3%**, AA-Omniscience **−16**, AA-LCR v1.1 **69%**
- tokenstat's AA split: Intelligence 16.1, Coding 33.3, Agentic 1.6; HLE (no tools) 18.8%; SWE-bench Verified 63.8%; modelgrep lists GPQA Diamond 84%
- The AA row corroborates the original assessment — TB 4.0 0%, AutomationBench 2%, AA Agentic 1.6 and CritPt 3% are all far below the October-2026 frontier; AA-LCR 69% sits between the MRCR v2 128K (58.0%) and 1M (16.4%) figures, consistent with the Context score of 80
- No score change

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 62 / Reasoning 74 / Context 80 / Multimodal 90 / Coding 70 / Cost 80, Overall stays 75. The pass added primary-sourced rows (Google's tech report, the MCP-Atlas paper) and aggregator boards; every new read is mid-to-weak, consistent with a June-2025 model 16 months into the future:

- **MCP-Atlas (arXiv 2602.00933 — primary source):** 36 real MCP servers, 220 tools, 1,000 tasks, claims-based rubric with 78% human-judge agreement. Gemini 2.5 Pro: **Pass@1 8.8%, mean coverage 30.7%** — near the bottom of the 14-model board (Claude Opus 4.5 62.3%, Gemini 3 Pro 54.1%, GPT-5 44.5%, Sonnet 4.5 43.8%, o3 Pro 43.6%; ahead of only GPT-4o 7.2% and Gemini 2.5 Flash 3.4%). Failure profile: tool usage 63.0% of failures, task understanding 26.0%, response quality 7.0%, logical errors 4.0%.
- **Long-context protocol resolution:** Google's tech report (arXiv 2507.06261) adds **LOFT (hard) 87.0% at ≤128K / 69.8% at 1M** and the older **MRCR v1 82.9% at 1M pointwise** — the latter resolves the third-party "MRCR 93%/82.9%" conflict: Google switched to the harder 8-needle MRCR v2 (16.4% at 1M), so both figures are genuine but measure different protocols. The 16.4% (hardest protocol) and AA-LCR 69% (independent composite) remain the Context anchors.
- **New rows:** τ²-Bench 54.1%; BFCL v4 52.3% (launch snapshot); MultiChallenge 62.3%; OCRBench v2 59.3%; Design Arena Website 1172; SWE-bench Verified 53.6% (official board, 2025-07-26 — a third read); Vibe Code Bench v1.1 0.40% (Vals — a 2026 benchmark on a 2025 model, vintage effect); BenchLM 49.42/100 (#99 of 889, partial coverage); Gert Labs 42.01%; Shawn Hack Arena Elo 1451 (#20 of 51); AA-sourced rows via BenchLM/Shawn Hack/UnifyBench: AA-GPQA Diamond 84.4%, AA-HLE 22.5%, AA-SciCode 46.3%, AA-MMMU-Pro 74.9%, AA-IFBench 48.7%, AA-CritPt 2.6%, AA Coding Index 33.3, AA Agentic Index 3.5, AA-Omniscience −16.3 (accuracy 39.1%, hallucination rate 90.9%), AA TB 2.1 28.5%, AA TB 4.0 0%.
- **Conflicts flagged:** TechBriefly's Intelligence Index 34.6 (March-2026 data) is an older AA index version vs the current v4.3.2 read of 16 — not adopted; its Aider Polyglot 76.5%/72.7% and MMMU 79.6% differ from the card's 82.2%/82.0% (different runs) — card figures stand; BenchLM's GDPval-AA row is internally inconsistent (0.0% vs 616) — the AA comparison page's 459 stands; UnifyBench's MMMU-Pro 68% (launch snapshot) vs AA-MMMU-Pro 74.9% — different protocols, both kept.
- **Historical note:** the June-2025 update fixed the May-2025 regressions and briefly led AA's frontier (MMLU-Pro 86%, GPQA 84%, HLE 21%, LiveCodeBench 80%); the model card's "2M context coming soon" never shipped for 2.5 Pro (1M in, 64K out per the Gemini API docs).
- Still open: Toolathlon, OSWorld, MRCR/RULER at intermediate lengths, any independent re-run of the coding boards.
- Score impact: none — MCP-Atlas 8.8% and Vibe Code 0.40% are new caps that corroborate Tool 62 and Coding 70; LOFT 69.8%@1M and MRCR v1 82.9%@1M add nuance to Context 80 without raising it (the hardest-protocol read is still 16.4% at 1M).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (Google DeepMind model card + tech report arXiv 2507.06261, MCP-Atlas arXiv 2602.00933, Google Cloud pricing, Artificial Analysis, BenchLM, UnifyBench, Shawn Hack, TechBriefly, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_Pro.md`, using the same headings.
