# Gemini 2.5 Flash Lite — findings by Mimo v2.6 Flash

- Source: Google/`google-gemini-2.5-flash-lite` (OpenCode Zen entry; underlying model `gemini-2.5-flash-lite`)
- Date: 2026-10-09 (UTC; original research 2026-09-26, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite (vendor name: Gemini 2.5 Flash-Lite)
- **Short description:** Google DeepMind's cheapest and fastest Gemini 2.5 family model — thinking off by default, built for high-volume latency-sensitive work (classification, extraction, routing, bulk document/media processing).
- **Provider / access:** OpenCode Zen `opencode/google-gemini-2.5-flash-lite` (Chat Completions) serving Google's `gemini-2.5-flash-lite`; first-party via Gemini API / Google AI Studio / Vertex AI.
- **Release / knowledge:** preview `gemini-2.5-flashlite-preview-06-17` released 2025-06-17 (Google announcement / LLM Stats); stable `gemini-2.5-flash-lite` dated 2025-07-22 in CloudPrice's version table (Awesome Agents reports a 2026-02-19 GA — sources disagree on the stable date). Knowledge cutoff January 2025 (LLM Stats / Google). End-of-life: Vertex retirement 2026-10-20 (ported from 2026-09-22 report, Gemini Enterprise model-versions table).
- **IDs:** `opencode/google-gemini-2.5-flash-lite` (Zen); `gemini-2.5-flash-lite` (Google). No Free/`$0` tier indicated on the entry (`meta.json` = "Standard pricing"); treated as paid.
- **Context window:** 1,048,576 input / 65,536 max output (Google docs via SynthorAI; LLM Stats provider row "1.0M / 65.5K"). Note: this folder's `meta.json` says "128K total" — that contradicts every verified vendor/index source; the verified spec is 1M and the meta looks stale.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes — `thinking_budget` 512–24,576 tokens or `-1` dynamic, **off by default** (only Gemini with thinking off by default; Google Cloud thinking table); tool calls: function calling, Grounding with Google Search, code execution; controlled/structured (JSON) generation (Google intro notebook).
- **Pricing (as of 2026-09-26):** $0.10 in / $0.40 out per 1M via Google; cached input $0.01/M (CloudPrice provider row); cheapest tracked provider Oracle OCI $0.075/$0.30. Paid — no free tier claimed; standard Gemini API data-use terms apply.
- **Architecture:** proprietary; parameter count and architecture not disclosed (Awesome Agents); hosted API only, no self-host/fine-tune.

### Raw benchmarks found

> Measured numbers with (source / harness). Missing rows = no verified public score found.

Agent / tool use:

- τ²-Bench: **30.4%** (Artificial Analysis via Design-for-Online — measured on the *Gemini 2.5 Flash Lite Preview 09-2025* snapshot; closest proxy, marked provisional)
- Terminal-Bench Hard: **7.6%** (same source, same proxy snapshot)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **64.6%** (Awesome Agents; corroborated by AnotherWrapper comparison table)
- HLE: **5.1%** (AnotherWrapper)
- AIME 2025: **49.8%** non-thinking mode (Awesome Agents)
- Global-MMLU-Lite: **81.1%** (Awesome Agents); MMLU **84%** (Tokenando — ported from 2026-09-22 report)
- MMLU-Pro: **79.6%** (Artificial Analysis via Design-for-Online — Preview 09-2025 proxy)
- LCR: **48%** (Artificial Analysis via Design-for-Online — Preview 09-2025 proxy)
- FACTS Grounding: **84.1%** (Awesome Agents)
- Artificial Analysis Intelligence Index: **11.4 / rank #332** (CloudPrice benchmarks API, AA-sourced; index scale differs from the 0–100 scale used elsewhere — use as rank only). **Second-pass AA rows (2026-10-09, via OpenRouter benchmark block, Reasoning variant):** Index **8.5**, Math Index 53.3, GPQA **62.5%**, HLE **6.8%**, IFBench 49.9, τ²-Telecom **18.4%**, AA-LCR **55.7%**, **CritPt 0.0%**, LiveCodeBench **59.3%** (thinking-on mode — vs the 33.7 stable figure above; different effort, both kept), TB-Hard 4.5, MMLU-Pro 75.9, **Omniscience 17.9% acc / 22.6% non-hallucination** — all fills; non-reasoning page reads Index **7** (#56/75, median 9), 261.9 t/s (#2/75), 0.32s TTFT, deprecated (stale successor banner)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **31.6%** (Awesome Agents; corroborated by AnotherWrapper)
- LiveCodeBench: **33.7%** (Awesome Agents); the Preview 09-2025 snapshot shows 64.1% (Artificial Analysis via Design-for-Online) — different snapshot/harness, kept separate, not merged
- HumanEval: **87%** (Tokenando — ported from 2026-09-22 report; sibling 3.1 Flash-Lite card shows 90.5% on a different model)
- SciCode: **28.5%** (Artificial Analysis via Design-for-Online — Preview 09-2025 proxy)
- Terminal-Bench 2.1 / Vibe Code Bench / DeepSWE / SWE-Pro: **no verified public score found**

Long context:

- MRCR v2 @ 128K: **16.6%** (Awesome Agents) — weak middle-of-window retrieval; no retrieval figure published at 512K+ or 1M

Multimodal:

- MMMU: **72.9%** (Awesome Agents)

### Normalized scores (1–100)

> Derived per `model-comparison.md` rubric; each line cites the key evidence and the cap.

- **Tool use: 55/100.** Function calling, Search grounding, and code execution are all verified product features, but no Terminal-Bench 2.1 / Tau3 / GDPval number exists for the stable model and the nearest agentic evidence (τ²-Bench 30.4%, TB-Hard 7.6% on the 09-2025 preview) is weak; missing Claw-Eval noted as N/A per rubric (no hallucinated score). Capped by absent verified agent-bench evidence.
- **Reasoning: 60/100.** GPQA Diamond 64.6% (AA 62.5) and HLE 5.1% (AA 6.8) sit squarely in the documented mid band (GPQA 60–80%, HLE <10% → 55–65); AIME 2025 49.8% non-thinking and Global-MMLU-Lite 81.1% support the placement; the new AA fills (Index 8.5, CritPt 0.0%, Omniscience 17.9%/22.6%) reinforce the band — held (2026-10-09).
- **Context window: 90/100.** 1,048,576 input is the ≥1M tier (95–100), but capped at 90 because measured retrieval is poor: MRCR v2 at only 128K scores 16.6%, nowhere near the ≥98%-at-512K bar required for 100. Max output 65,536 noted as caveat, not separately scored. (Folder `meta.json` "128K" contradicts the verified 1M spec.)
- **Multimodal: 90/100.** Text/image/audio/video/PDF in hits the top coverage tier (+audio in → 90–100); MMMU 72.9% shows solid but not frontier visual understanding, and output is text-only, so no 95+.
- **Coding: 50/100.** SWE-bench Verified 31.6% and LiveCodeBench 33.7% are far below the mid band (LiveCode ~80% → 65–75); fine for high-volume code chores, not for agent-grade repo fixes. The 64.1% LCB figure belongs to a different snapshot; the new AA 59.3% is the thinking-on variant — all three LCB readings kept separate, none changes the band (held 2026-10-09).
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M is at the floor of tracked paid rates (only OCI cheaper at $0.075/$0.30); not 100 because it is not a $0 tier.
- **Overall Score: 69/100.** (55 + 60 + 90 + 90 + 50) / 5 = 69 — best-fit: ultra-cheap 1M-context multimodal workhorse for classification, extraction, translation, and bulk media/document processing; step up to Flash/Pro-tier models for reasoning-heavy coding and agentic work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-09 (original: 2026-09-26; user-approved second pass)
- Method: public internet research (Google/Gemini API documentation, llm-stats.com, Awesome Agents, AnotherWrapper, CloudPrice, Artificial Analysis figures via Design-for-Online); second pass 2026-10-09 re-checked [AA Gemini 2.5 Flash-Lite](https://artificialanalysis.ai/models/gemini-2-5-flash-lite) (deprecated; non-reasoning Index 7, 261.9 t/s) and the [OpenRouter google/gemini-2.5-flash-lite benchmark block](https://openrouter.ai/google/gemini-2.5-flash-lite) (Reasoning-variant fills: Index 8.5, CritPt 0.0, Omniscience 17.9/22.6, τ² 18.4, LCR 55.7, LCB 59.3-thinking); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Gaps closed:** CritPt **0.0%**, Omniscience **17.9%/22.6%**, τ²-Telecom 18.4, AA-LCR 55.7, AA Index 8.5 (Reasoning) / 7 (non-reasoning), thinking-mode LCB 59.3.
- **Confirmed:** $0.10/$0.40 + 90% cache, 1M context, Jan-2025 cutoff, full multimodal input, thinking-off default; retirement (Vertex 2026-10-20) imminent — 11 days out.
- **Stale banners:** AA still suggests the Sep-'25 preview as successor.
- **Scores:** no dimension changed; Overall held at 69.
