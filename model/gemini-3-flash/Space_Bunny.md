# Gemini 3 Flash Preview — findings by Space Bunny Alpha

- Source: Google (`gemini-3-flash-preview`; OpenCode alias `opencode/gemini-3-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview
- **Short description:** Google's December 2025 fast multimodal reasoning and agent model, positioned between high-volume Flash workloads and more capable Pro models. Artificial Analysis now marks it deprecated and points to Gemini 3.5 Flash; only the default 10k-input-token workload continues to be benchmarked, so the intelligence figure is an estimate rather than a full run. The OpenCode folder uses a shortened alias, while the public Google model code is preview-qualified.
- **Provider / access:** Google Gemini API (`gemini-3-flash-preview`); Google AI Studio; 1 provider on Artificial Analysis. OpenCode Zen lists `gemini-3-flash` as a model route, but the exact provider variant should be confirmed before comparing runs.
- **Release / knowledge:** released 2025-12-17; **knowledge cutoff January 2025** is now published by Artificial Analysis (the official Google model page still showed none when reviewed on 2026-09-24).
- **IDs:** `gemini-3-flash-preview` (Google); `opencode/gemini-3-flash` (repository route).
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-24; Artificial Analysis reports 1M total, verified 2026-09-29).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, code execution, computer use, function calling, structured outputs, URL context, and search grounding supported. Audio generation, image generation, and Live API are not supported. Artificial Analysis independently confirms text/image/speech/video in, text out.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $0.50 per 1M input and $3.00 per 1M output tokens, with a 90% cache discount and a $0.43 per 1M blended rate. Cost per Intelligence Index task and verbosity are listed as **N/A** — a direct consequence of the deprecation, since only the default workload is still measured. The official page reviewed did not show price. Pricing is unchanged from 2026-09-24.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **26/100 (estimated)**, rank **#105/216** for Gemini 3 Flash Preview (Reasoning) (Artificial Analysis, accessed 2026-09-29; composite benchmark). Explicit re-verification against the current scale: the earlier revision of this file recorded **26**, and **v4.3.2 did not change the value** — the movement is rank-only (#99/210 → #105/216). AA now flags the figure as an *estimate* pending independent evaluation, and the model as deprecated.
- Output speed: **196.0 tokens/s**; time to first token **6.71s** (Artificial Analysis, accessed 2026-09-29; previously 200.7 tokens/s and 6.88s on 2026-09-24 — within normal measurement drift).
- Terminal-Bench 2.1 / 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **26** (estimated; unchanged from the 26 recorded on 2026-09-24, now level with the class median of 26)
- GPQA Diamond: **90.4%** (Benchgen model profile, labeled Benchgen evaluation, 2025-12; profile is marked draft)
- Humanity's Last Exam: **43.5%** (Benchgen model profile, labeled Benchgen evaluation, 2025-12; profile is marked draft)
- MATH: **97.5%**; GSM8K: **96.8%**; SimpleQA: **68.7%** (same Benchgen draft profile; not official Google scores)
- LCR / MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified: **78%** (Benchgen model profile, labeled Benchgen evaluation, 2025-12; profile is marked draft)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact preview was found. Google verifies a 1,048,576-token input limit and 65,536-token output limit, and Artificial Analysis independently reports a 1M context window.

Sources consulted: [Google Gemini 3 Flash Preview documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview), [Artificial Analysis Gemini 3 Flash Preview (Reasoning)](https://artificialanalysis.ai/models/gemini-3-flash-reasoning) (accessed 2026-09-24, re-verified 2026-09-29 against Intelligence Index v4.3.2), and [Benchgen Gemini 3 Flash profile](https://benchgen.com/models/google/gemini-3-flash). Benchgen figures are explicitly marked draft and are not treated as official Google claims.

### Normalized scores (1–100)

- **Tool use: 78/100.** Google documents computer use, code execution, function calling, and other agent features; exact Terminal-Bench, Tau, GDPval, and tool-call values were not found.
- **Reasoning: 82/100.** The AA Index of 26 is now exactly level with the class median of 26 and is an estimate rather than a full evaluation, but the draft Benchgen profile reports 90.4% GPQA and 43.5% HLE. The conflicting evidence levels keep the score below newer Gemini models.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier; no retrieval-at-length result was published.
- **Multimodal: 95/100.** Google verifies text, image, video, audio, and PDF input with text output, independently confirmed by Artificial Analysis.
- **Coding: 82/100.** The draft Benchgen profile reports 78% SWE-bench Verified, but the source is not an official Google model card; exact independent coding evidence is otherwise sparse.
- **Cost efficiency: 88/100.** **Lowered from 90.** The $0.50/$3.00 list price, 90% cache discount and $0.43 blended rate are still strong for a Flash-tier route, but AA no longer reports a cost-per-task or verbosity figure at all (both N/A) because the model is deprecated and only the default workload is benchmarked — so the cheapest-looking model in the set now carries the least-cost-evidence. The absolute sticker price is unchanged.
- **Overall Score: 86.4/100.** (78 + 82 + 95 + 95 + 82) / 5 = 86.4. Best fit: high-volume multimodal agents and software workflows where Flash-class latency and price matter; verify the exact OpenCode alias and benchmark harness, and prefer Gemini 3.5/3.7+ since Google has superseded this preview.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google model documentation, Artificial Analysis (v4.3.2, accessed 2026-09-29), and a draft Benchgen profile; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
