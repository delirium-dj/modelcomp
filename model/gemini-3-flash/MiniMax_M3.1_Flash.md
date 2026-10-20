# Gemini 3 Flash — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3-flash-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google's December-2025 launch model — "Gemini 3 Flash is priced at $0.50/1M input tokens and $3/1M output tokens (audio input remains at $1/1M input tokens)" — the fastest model in this dataset at **216.9 output t/s** and the base of the whole 3.5/3.6/3.7/3.8 Flash line. It is **legacy**: "Our legacy Flash model, providing baseline speed and intelligence", deprecated by Google in favour of Gemini 3.5 Flash (GitHub Copilot killed it on 2026-07-31).
- **Provider / access:** Gemini API `gemini-3-flash-preview` (preview id only — no GA id, and no `gemini-3-flash` API id exists); AI Studio; OpenRouter `google/gemini-3-flash-preview` (+ `:batch`); OpenCode Zen `opencode/gemini-3-flash` (`https://opencode.ai/inference/google/v1beta/models/gemini-3-flash`).
- **Release / knowledge:** released **2025-12-17** (Google blog; deprecations table). Knowledge cutoff **January 2025** (Gemini 3 family). Google's deprecations page still shows "No shutdown date announced" for the id, while Artificial Analysis marks it deprecated.
- **IDs:** `gemini-3-flash-preview` (Gemini API), `google/gemini-3-flash-preview` (OpenRouter, created 2025-12-17), `opencode/gemini-3-flash` (Zen). AA also tracks a `gemini-3-flash-reasoning` variant.
- **Context window:** **1,048,576** input tokens, **65,536** output tokens.
- **Modalities:** input text, image, video, audio, PDF; output text. Thinking: default on at **high**; levels minimal / low / medium / high. Tools: caching, code execution, computer use, file search, function calling, search and Maps grounding, structured outputs, URL context, Batch/Flex/Priority. No audio/image generation, no Live API.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$0.50** (text/image/video; **$1.00 for audio**), output **$3.00**, cache hit $0.05 (audio $0.10), storage $1.00/1M tokens·hour; Batch **$0.25 / $1.50**; Flex same; Priority $0.90/$5.40. OpenCode Zen lists $0.50 / $3.00 / $0.05.
- **Architecture:** proprietary; no parameter count published; built on the Gemini 3 reasoning foundation with dynamic thinking.

### Raw benchmarks found

> Google's launch-blog and model-card numbers are marked "vendor"; Artificial Analysis (two variants), Vals AI and the BenchLM ledger are independent. The model card's result tables are embedded images, so most vendor numbers are prose-only.

Agent / tool use:

- Terminal-Bench 2.1: **53.93% ± 1.63** (Vals AI, 52/75) / 53.9% (via BenchLM). Terminal-Bench 2.0: Google's own methodology PDF says "Gemini 3 Flash submission is pending at the time of publication"; a Hacker News post asserts "google's official 47.8%" — **unverified**
- Terminal-Bench 4.0: **no verified public score found** (no row on the official board; AA publishes no 3 Flash value)
- SWE-bench Verified: **78%** (vendor) / **75.00%** (Vals AI, 44/88) / 76.2% (Vals, 2025-12-18: "places first on SWE-bench Verified, with a score of 76.2%")
- Claw-Eval **49.2%**, Gert Labs Composite **56.63%**, JobBench **11.4%** (via BenchLM); Vibe Code Bench v1.1 **20.20%** (Vals) / 20.20% (via BenchLM)
- τ²-bench **43.27%** (AA); τ³-banking: null; MCP Atlas / Toolathlon: **no verified public score found**
- GDPval-AA: null (AA); AutomationBench: null (AA); BrowseComp: not published

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor) / **81.21%** (AA, non-reasoning) / **87.88%** (Vals AI, #15/138) / ~90% (AA launch article)
- HLE: **33.7%** without tools (vendor) / 35% (AA launch) / **14.97%** (AA today) / 33.7% (via BenchLM)
- AIME25 **55.67%** (AA); LiveCodeBench **79.68%** (AA) / 85.59% (Vals) / 85.6% (via BenchLM); MMLU-Pro 89% (AA launch) / **88.59%** (Vals) / 88.6% (via BenchLM)
- CritPt **1.43%** (AA); LCR **55.33%** (AA); IFBench **55.10%** (AA); MLCR-AA 11.67% (AA)
- Artificial Analysis Intelligence Index: **18\*** (non-reasoning, #25/56) / **26\*** (reasoning, #115/217) — both **estimates**; the launch article claimed **71** on the older index
- Omniscience: index **-4.32**, accuracy **45.78%**, hallucination rate **92.41%** (AA)
- FrontierMath v2: Tiers 1–3 **51.228%**, Tier 4 **17.073%** (Epoch AI, via BenchLM)

Coding:

- SWE-bench Verified 75–78% (see above); SWE-bench Pro: not published for 3 Flash
- LiveCodeBench 79.68% (AA) / 85.59% (Vals); Vibe Code Bench 20.20%
- Terminal-Bench 2.1 53.93%; no DeepSWE, no FrontierSWE, no CursorBench rows
- Design Arena Website 1196 Elo (via BenchLM)

Long context:

- GDM's methodology PDF reports MRCR as "a cumulative score … and a pointwise value for 1M context window", but the values are embedded in images — **no official MRCR number is text-extractable**, and no independent long-context measurement exists. 1,048,576-token window, 65,536 output.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 62/100.** The weakest dimension: Terminal-Bench 2.1 53.93% (Vals) — far below the rubric's ~88% frontier anchor — SWE-bench Verified 75–78%, Claw-Eval 49.2%, Gert Labs 56.63%, JobBench 11.4%, Vibe Code Bench 20.20%, τ²-bench 43.27%, and no Terminal-Bench 4.0, MCP Atlas or Toolathlon figure at all. Speed is its strength, not its autonomy.
- **Reasoning: 70/100.** GPQA Diamond 81.21–90.4% (three sources), MMLU-Pro 88.59%, LiveCodeBench 79.68–85.59%, AIME25 55.67%, τ²-bench 43.27%. Capped by the AA Intelligence Index of **18\*/26\*** (estimates only), by HLE at 14.97% (AA) versus the vendor's 33.7%, by CritPt 1.43%, LCR 55.33%, and by FrontierMath v2 51.228% / 17.073%.
- **Context window: 94/100.** 1,048,576 input tokens with a 65,536 output cap — the rubric's top tier (≥1M = 95–100) with the output cap above the 64K line. One point below because **no long-context retrieval number exists** for this model (the MRCR results are image-only) and no independent measurement contradicts that.
- **Multimodal: 90/100.** Text, image, video, audio and PDF input with text output — the rubric's "+audio in = 90–100" band — with MMMU-Pro 78.55% (AA) / **87.63%** (Vals) / 81.2% SOTA (vendor), an LMArena Pareto-frontier claim, and audio input priced separately. Held at 90 because the vision evidence is vendor-and-Vals only and the model's own card tables are images.
- **Coding: 70/100.** SWE-bench Verified 75–78% and LiveCodeBench 79.68–85.59% are respectable, but Terminal-Bench 2.1 at 53.93%, Vibe Code Bench 20.20%, and the complete absence of DeepSWE, FrontierSWE and FrontierCode rows place this model in the mid band rather than the frontier.
- **Cost efficiency: 90/100.** The evaluated route — OpenCode Zen `opencode/gemini-3-flash` — is billed at **$0.50 in / $3.00 out** per 1M with a $0.05 cached read: below the rubric's "~$0.60/$2.20 ≈ 92" anchor, with Batch at $0.25/$1.50. It is the cheapest fully-supported Flash in the dataset and was never an introductory price, so no expiry risk applies.
- **Overall Score: 77.2/100.** (62 + 70 + 94 + 90 + 70) / 5 = 77.2 — best-fit: a **speed-and-price baseline** — 216.9 t/s, $0.50/$3.00, 1M context, full omni-modal input, 88%+ MMLU-Pro and 87.9% GPQA — but an agentic and coding profile (Terminal-Bench 2.1 ~54%, Vibe Code 20.2%) that is two generations behind the 3.7/3.8 Flash line; use it for high-volume multimodal inference, not for agents.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA index 71 (Dec 2025 launch article) vs 18\*/26\* today** — index-version change plus effort variants; both current values are explicitly *estimates* (AA exposes no per-evaluation set for the reasoning variant beyond a few fields).
2. **SWE-bench Verified — 78% (Google) vs 75.00% (Vals) vs 76.2% (Vals, launch-day post).** The independent run is used.
3. **MMMU-Pro — 81.2% "state-of-the-art" (Google) vs 78.55% (AA) vs 87.63% (Vals).** A 9-point spread; AA is the anchor.
4. **GPQA — 90.4% (Google) vs 81.21% (AA) vs 87.88% (Vals).** The AA figure is the outlier and is the one used for the cap.
5. **HLE — 33.7% (Google, no tools) vs 14.97% (AA today) vs 35% (AA launch).** Recorded.
6. **Terminal-Bench 2.0** — Google published no number (submission pending); the "47.8%" in a Hacker News post is treated as unverified and is not used.
7. **Pricing** — $0.50/$3.00 has been the price since launch (not $0.30/$2.50, which is Gemini 2.5 Flash); audio input is $1.00/M, a detail the headline price hides.
8. **Lifecycle** — Google's deprecations table still says "No shutdown date announced" while AA says deprecated and GitHub Copilot retired the model on 2026-07-31; the Zen row is still live.
9. **Identity caution:** the "3.5 Flash DeepSWE 65.3%" figure circulating in aggregators does not belong to Gemini 3 Flash — DeepMind's Flash page discusses **3.8 Flash** on DeepSWE v1.1. Not used here.

### Notes on identity

- `gemini-3-flash-preview` is a distinct preview release (2025-12-17) from `gemini-3-pro-preview` (Nov 2025) and from the later 3.5/3.6/3.7/3.8 Flash line; the id is **preview-only** — there is no GA `gemini-3-flash` API id, and the `gemini-3-flash` string on OpenCode Zen is the gateway's own id for the same preview model.
- AA tracks a separate `gemini-3-flash-reasoning` variant (index 26\*, 219.4 t/s) — the reasoning configuration of the same weights, not a different model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model page, deprecations table, Gemini 3 guide, pricing and thinking docs, the launch blog and the GDM evals-methodology PDF; independent trackers Artificial Analysis (non-reasoning and reasoning variants), Vals AI, the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, and Hacker News coverage. Vendor-vs-independent conflicts — including the index re-baselining and the SWE-bench/MMMU/GPQA spreads — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Flash.md`, using the same headings.
