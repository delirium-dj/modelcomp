# Gemini 3.5 Flash — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.5-flash`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (`gemini-3.5-flash`; speed/cost-optimized tier of the Gemini 3.5 family)
- **Short description:** Google DeepMind's Flash-tier multimodal model for agentic coding and high-volume multimodal workloads — the highest MCP Atlas tool-orchestration score recorded as of June 2026, outputting ~4× faster than GPT-5.5. Trades some abstract-reasoning strength (vs Gemini 3.1 Pro) for speed. Artificial Analysis now flags it deprecated (superseded by Gemini 3.7 Flash).
- **Provider / access:** Gemini API, Google AI Studio (free tier with rate limits), Vertex AI. Function calling + structured output + combined tool use (Google Search grounding + code execution + custom schemas in one request). Free AI Studio tier available.
- **Release / knowledge:** Released 2026-05-19 (GA, Google I/O). Succeeds Gemini 3 Flash (2025-12-17). Knowledge cutoff not explicitly disclosed.
- **IDs:** `gemini-3.5-flash` (+ `-minimal/-medium/-high`; default thinking_level medium). Free AI Studio tier available.
- **Context window:** 1,048,576 (1M) input; 65,536 (64K) max output.
- **Modalities:** Text, image, audio, video, PDF in; text + tool-calls out. No image/audio/video output. Reasoning yes (configurable thinking levels); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $1.50/M in · $9.00/M out · $0.15/M cached in (90% off) — ~3× Gemini 3 Flash's prior rate, still under Claude Opus 4.7. Free AI Studio tier $0.
- **Architecture:** Natively multimodal Transformer; built on Gemini 3 Flash's reasoning foundation with configurable thinking levels. Parameter count undisclosed (proprietary).

### Raw benchmarks found

> Cross-referenced hokai.io (Google + Artificial Analysis) and vectorwire.ai (132 results/75 benchmarks, 29 independent, capability profile). Independent runs noted where available.

- BenchLM composite (2026-10-19): **61.91/100** overall, #50 of 956 models, 51 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **33** (#87/217, v4.3.2 scale), 209.5 tok/s (#12/186), TTFT 16.57s (above the 3.81s median), 120M Index output tokens (verbose vs 85M median), $3.69 per Index task, $1.50/$9.00 with 90% cache discount (blended $1.31/M), 1M context, 1 provider, released 2026-05-19 — DEPRECATED on AA (suggests Gemini 3.7 Flash). BenchLM still shows a stale 50.2% Index row; AA's live page value is 33.

Agent / tool use:

- MCP Atlas (multi-step MCP workflows): **83.6%** (Google; the highest recorded as of June 2026 — leads tool orchestration)
- τ²-Bench Telecom: **95.32%** (high) / **95.61%** (medium) (Artificial Analysis)
- Output speed: **289 tok/s** (rank #7/49; ~4× faster than GPT-5.5 and Claude Opus 4.7)
- Terminal-Bench 2.1: not surfaced live for 3.5 Flash — treated as provisional
- APEX-Agents Original: **27.5%** (Mercor, independent — reported 2026-10-07) — weak long-horizon agentic
- AutomationBench 1.0.6: **9.0–13.4%** (low→high, Zapier, independent — reported 2026-10-07) — weak real-world automation
- BrowseComp 130-q: **43.3%** (Mercor web-research agent, independent — reported 2026-10-07)
- Toolathlon Verified: **67.3%** (Toolathlon, independent — reported 2026-06-30)
- Vals Index 2.1: **44.8%** (Vals AI, independent — reported 2026-10-06)
- Vibe Code Bench 1.1: **48.7%** (Vals AI, independent — reported 2026-10-06)
- CharXiv: **94.3%** (Mercor single-shot, independent — reported 2026-10-07)
- Vector Wire capability: **Agentic "Capable"** (−18.5% vs leader, 6/7)
- Independent agentic corroboration (2026-10-19): OSWorld-Verified **78.4%** (Google), Finance Agent v2 **57.9%** (Vals AI), APEX-Agents-AA **47.1%** (AA's own run — well above Mercor's 27.5%), Gert Labs **61.85%**, AA EnterpriseOps-Gym **50.1%**, AA Agentic Index **27.3%**, Terminal-Bench 2.1 (Vals) **74.2%** (matches the independent 74.5%/73.8% reads); still weak: ResearchClawBench **18.0%**, MazeBench **0%**; Toolathlon conflict noted — Google launch table **56.5%** vs the independent **67.3%**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (rank #18/50)
- Artificial Analysis Intelligence Index: **55** (trails GPT-5.5's 60)
- ARC-AGI-2: **72.1%** (behind Gemini 3.1 Pro's 77.1% — the hardest abstract reasoning still favors the Pro tier)
- Vector Wire capability: **Reasoning "Capable"** (−13.6% vs leader, 6/6); **Factuality "Strong"** (−7.8%); **Math "Limited"** (−46.0%)
- HLE now surfaced (2026-10-19): **40.2%** (Google launch table) / **42.7%** (AA) — clears the 40% frontier bar on both reads; AA GPQA Diamond **92.2%** (Vals **92.7%**), AA-Omniscience accuracy **51.9%** / index **21.2%** / hallucination-rate metric **60.7%**, MMLU-Pro (Vals) **89.5%**, AA-IFBench **76.3%**
- Math now surfaced (2026-10-19): FrontierMath v2 (Epoch AI) Tiers 1–3 **62.807%** / Tier 4 **26.829%** — a strong math read that conflicts with Vector Wire's Math "Limited" (−46.0%)
- ARC-AGI-1: **92.50%** (ARC Prize verified, 2026-10-19); CritPt **13.1%** (AA); AA-LCR **69.3%** (AA)

Coding:

- SWE-bench Verified: **78%** (rank #16/32 — mid-pack); SWE-bench (Vals) **78.8%** (2026-10-19) corroborates
- SWE-bench Pro now surfaced (2026-10-19): **55.1%** (Google launch table) — behind Claude Opus 4.7's 64.3% lead, as expected
- Vector Wire capability: **Coding "Limited"** (−25.1% vs leader, 7/10) — a clear weakness despite the headline SWE-bench Verified score
- LiveCodeBench now surfaced (2026-10-19): LCB (Vals) **87.6%**; cursorBench 3.1 **49.8%** / CursorBench 3.2 **48.8%** (Cursor evals); AA-SciCode **53.1%**/53.9%; AA Coding Index **70.1%** — mid-tier competitive/agentic coding across the board

Multimodal:

- Text + image + audio + video + PDF in; text out.
- MMMU-Pro: **84.2%** (the highest multimodal reasoning result Artificial Analysis had recorded at launch); Google launch table **83.6%** / AA **84.3%** (2026-10-19) corroborate
- Vector Wire: **Multimodal "Capable"** (−15.3% vs leader, 3/6)
- CharXiv conflict noted (2026-10-19): Google launch table **84.2%** vs Mercor single-shot **94.3%**; Blueprint-Bench 2 **33.6%** (Google) is the weak end; Design Arena Website **1268** (OpenRouter)

Long context:

- **Tool use: 84/100.** MCP Atlas 83.6% (the highest recorded as of June 2026 — leads tool orchestration) and τ²-Bench Telecom 95.3% are strong, with combined built-in + custom tool use and 289 tok/s output. Capped by Vector Wire's Agentic "Capable" (−18.5%) and no live Terminal-Bench/OSWorld row — tool orchestration leads but long-horizon agentic breadth lags.
- **Reasoning: 84/100.** GPQA Diamond 90.4% and AA Intelligence Index 55 with Factuality "Strong" (−7.8%). Capped by ARC-AGI-2 72.1% (behind Gemini 3.1 Pro), Reasoning "Capable" (−13.6%), and Math "Limited" (−46.0%) — a fast Flash-tier reasoner, not a frontier one.
- **Context window: 78/100.** 1M input / 64K output, with the long-context recall now published (2026-10-19): MRCR v2 77.3% at 128K but **26.6% at 1M** — retrieval collapses at the top of the window — and Vector Wire still rates Long Context "Limited" (−25.7%, 2/3). A nominal 1M window with weak top-end recall plus a 64K output cap.
- **Multimodal: 90/100.** Full input coverage (text/image/audio/video/PDF) with MMMU-Pro 84.2% (the highest recorded at launch) — hits the 90–100 input band; held to 90 by text-only output and Multimodal "Capable" (−15.3%, not "Strong"/"Frontier").
- **Coding: 76/100.** SWE-bench Verified 78% (rank #16/32) is mid-pack, SWE-bench Pro trails Claude Opus 4.7's lead, and Vector Wire rates Coding "Limited" (−25.1%, 7/10) — coding is a clear weakness despite the headline SWE-bench Verified score. Strong at MCP tool orchestration, weaker at deep agentic coding.
- **Cost efficiency: 82/100.** $1.50/$9 paid (rubric ~$1.25/$4.25=88, nudged down for the higher output rate) plus a free Google AI Studio tier (rate-limited, training-data caveat); cached input $0.15/M (90% off). ~3× Gemini 3 Flash's prior rate.
- **Overall Score: 82/100.** Mean of the five non-cost dims (84+84+78+90+76)/5 = 82.4. Best fit for MCP-based coding agents, tool-orchestration pipelines, and high-volume multimodal ingestion at ~4× the output speed and a lower per-token cost; pick GPT-5.5/Gemini 3.1 Pro for pure reasoning and Claude Opus 4.7 for the hardest SWE-bench Pro coding.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA now flags the model deprecated (superseded by Gemini 3.7 Flash), Index 33 (#87/217, v4.3.2 scale; BenchLM's 50.2% row is stale), 209.5 tok/s, TTFT 16.57s, 120M token verbosity; BenchLM composite 61.91/100 (#50/956, 51/644 benchmarks) filling the previous gaps — HLE 40.2% (Google) / 42.7% (AA), SWE-bench Pro 55.1%, MRCR v2 77.3% / 1M 26.6%, LCB Vals 87.6%, AA-LCR 69.3%, Epoch FrontierMath v2 T1–3 62.8%/T4 26.8%, ARC-AGI-1 92.5% — plus new agentic rows (OSWorld 78.4%, Finance Agent v2 57.9%, APEX-AA 47.1% vs Mercor 27.5%, Agentic Index 27.3%, Gert Labs 61.9%, MazeBench 0%). All consistent with the existing scores; the published MRCR 1M collapse (26.6%) and mid-tier SWE-Pro 55.1% corroborate Context 78 / Coding 76. No score change warranted. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (43 primary-source results, updated 2026-10-07 — independent APEX-Agents 27.5%, AutomationBench 9.0–13.4%, BrowseComp 43.3%, Toolathlon 67.3%, Vibe Code 48.7%, Vals Index 44.8%, CharXiv 94.3%) — no score change warranted; the independent real-world agentic/coding numbers reinforce the existing Tool use 84 / Coding 76 mid-tier reads. Prior pass (2026-10-08) used Google + Artificial Analysis (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

- 1M input / 64K output. Long-context recall for the 3.5 generation is now published (2026-10-19): MRCR v2 8-needle **77.3%**; **1M pointwise: 26.6%** (Google) — retrieval collapses at the top of the window, the same pattern as 3.1 Pro; AA-LCR **69.3%** (AA)
- Vector Wire: Long Context **"Limited"** (−25.7% vs leader, 2/3)

### Normalized scores (1–100)
