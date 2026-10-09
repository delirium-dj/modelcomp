# Gemini 3.1 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Pro (`gemini-3.1-pro-preview`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> The DeepMind model card (independent confirmation of the vendor sheet) provides: GPQA Diamond 94.3%, HLE 44.4% no-tools / 51.4% with tools, ARC-AGI-2 77.1% (ARC Prize verified), Terminal-Bench 2.0 68.5%, SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, SciCode 59%, GDPval-AA Elo 1317, τ2-bench retail 90.8 / telecom 99.3, MCP Atlas 69.2%, MMMU-Pro 80.5%, and **MRCR v2 128K 84.9% / 1M 26.3%**.
> **Conflicts surfaced:** (1) **Artificial Analysis Intelligence Index v4.3.2 = 30 (#95/227)** — far below the frontier band implied by the vendor's GPQA/HLE/ARC rows; this is the single biggest reason the previous Reasoning=93 is no longer supportable. (2) Pricing $2/$12 (Google Cloud/AA) vs $1/$6 (LMArena snapshot). (3) LMArena 1487 (#17); not evaluated by Vals AI, so no third benchmark suite.
> Sources: https://deepmind.google/models/gemini/pro/ · https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/ · https://cloud.google.com/vertex-ai/generative-ai/pricing · https://artificialanalysis.ai/models/gemini-3-1-pro-preview · https://arena.ai/leaderboard/chat/text

## Model card

- **Name:** Gemini 3.1 Pro (API ID `gemini-3.1-pro-preview`)
- **Short description:** Google DeepMind's flagship reasoning model (2026-02-19; GA 2026-10-02), built for agentic coding, full-codebase analysis and scientific problem-solving in a 1M-token multimodal window. Now older than the advertised "Gemini 3.5 Pro".
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`) and Vertex AI; no free API tier (AI Studio web only). No OpenCode Zen ID.
- **Release / knowledge:** 2026-02-19 (preview); GA 2026-10-02; knowledge cutoff not published.
- **IDs:** `gemini-3.1-pro-preview`. No Free ID → paid scoring.
- **Context window:** 1,048,576 (1M) in; max output 65,536 (API default 8,192).
- **Modalities:** text, image, audio, video and PDF in; text out; tool calls; native reasoning.
- **Pricing (as of 2026-10-09):** $2.00 in / $12.00 out per 1M (≤200K input); whole request reprices to $4.00/$18.00 above 200K; caching $0.20/1M; Batch 50% off.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **68.5%**; τ2-bench retail **90.8%** / telecom **99.3%**; MCP Atlas 69.2%; APEX-Agents 33.5%
- BrowseComp 85.9%; GDPval-AA **1317 Elo**; OSWorld computer use 48.8%
- Tau3-Banking / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **94.3%**; HLE 44.4% no-tools / 51.4% with tools; ARC-AGI-2 **77.1%** (ARC Prize verified)
- MMLU-Pro ~90–91%; SimpleQA Verified 75.6
- Artificial Analysis Intelligence Index **30 (#95/227)** — independent, conflicts sharply with vendor rows
- LMArena Text 1487 (#17, ~124.7K votes)

Coding:

- SWE-bench Verified **80.6%**; SWE-bench Pro (public) 54.2%; LiveCodeBench Pro Elo 2887; SciCode 59%
- LiveCodeBench standard ~91.7% (RankLLMs); DeepSWE / Vibe Code Bench: **no verified public score found**

Multimodal / long context:

- MMMU-Pro **80.5%**; VideoMME 87.2%
- MRCR v2 128K **84.9%** / **1M 26.3%** — retrieval degrades sharply at full window

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong τ2 (90.8/99.3), TB2.0 68.5% and MCP Atlas 69.2% sit mid-band; GDPval-AA 1317 and APEX 33.5% cap it, with no independent terminal/tool index.
- **Reasoning: 86/100.** GPQA 94.3%, HLE 44.4/51.4 and ARC-AGI-2 77.1 are frontier on the vendor suite, but the independent AA Index of **30 (#95/227)** pulls the aggregate well down.
- **Context window: 94/100.** Native 1M input (≥1M band) with 65K output, but MRCR@1M 26.3% shows heavy degradation and the 200K repricing cliff is a practical limit.
- **Multimodal: 90/100.** Text + image + audio + video + PDF input (audio band 90–100), MMMU-Pro 80.5%; text-only output.
- **Coding: 84/100.** SWE-bench Verified 80.6%, LiveCodeBench Pro Elo 2887 and SciCode 59% are frontier-adjacent; TB2.0 68.5% and missing DeepSWE keep it out of the 90s.
- **Cost efficiency: 72/100.** $2/$12 sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors, softened by caching/batch but docked for whole-request repricing above 200K.
- **Overall Score: 86/100.** (74 + 86 + 94 + 90 + 84) / 5 = 85.6 → 86. Best fit: scientific/financial reasoning and long-document/full-codebase analysis where the multimodal 1M window matters more than agent tooling depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Google DeepMind model page + launch blog, Google Cloud Vertex pricing, Artificial Analysis model page, LMArena). The large vendor-vs-independent gap (DeepMind card vs AA Index 30) is surfaced rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
