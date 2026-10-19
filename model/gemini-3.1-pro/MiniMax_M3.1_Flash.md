# Gemini 3.1 Pro — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.1-pro-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google's February-2026 **preview** flagship reasoning model — still a preview (no GA id), built for "complex software engineering, deep mathematical and scientific problem solving". It is a distinct model from Gemini 3 Pro and from the Gemini 3.x Flash line, and is *not* the current Gemini flagship (Gemini 4 Argon has since shipped); DeepMind's Pro page carries a "3.5 Pro coming soon" banner.
- **Provider / access:** Gemini API `gemini-3.1-pro-preview` (and `gemini-3.1-pro-preview-customtools`), Google AI Studio; OpenRouter `google/gemini-3.1-pro-preview` (canonical slug `google/gemini-3.1-pro-preview-20260219`); OpenCode Zen `opencode/gemini-3.1-pro` (`https://opencode.ai/inference/google/v1beta/models/gemini-3.1-pro`).
- **Release / knowledge:** released **2026-02-19** (Google blog; model card "Published 19 February 2026"). Lifecycle: **preview** — "We are releasing 3.1 Pro in preview today to validate these updates" and "before we make it generally available soon"; no GA id exists and it is not on the API deprecations page. Knowledge cutoff: **not published** (the model card defers to the Gemini 3 Pro card; OpenRouter `knowledge_cutoff: null`).
- **IDs:** `gemini-3.1-pro-preview`, `gemini-3.1-pro-preview-customtools` (Gemini API); `google/gemini-3.1-pro-preview` + `:batch` (OpenRouter); `opencode/gemini-3.1-pro` (Zen). Thinking levels are a parameter (low / medium / high, **default high**), not separate ids.
- **Context window:** **1,048,576** input tokens, **65,536** output tokens ("Input token limit 1,048,576 / Output token limit 65,536"; card: "a token context window of up to 1M", "Text, with a 64K token output"). OpenRouter agrees (context 1,048,576, `max_completion_tokens` 65,536).
- **Modalities:** input text, image, video, audio, PDF; output text. Tools: function calling, structured outputs, search grounding, code execution, URL context, caching, file search (AI Studio only), Maps grounding. No audio/image generation, no Live API.
- **Pricing (as of 2026-10-19, per 1M tokens):** standard **$2.00 in / $12.00 out** for prompts ≤200K and **$4.00 / $18.00** for prompts >200K; context cache **$0.20 / $0.40**; cache storage $4.50/1M tokens/hour. Batch **$1.00 / $6.00** (≤200K) and $2.00/$9.00 (>200K); Flex $1.00/$6.00; Priority $3.60/$21.60 (≤200K) and $7.20/$32.40 (>200K). **No free tier** ("Input price: Not available"). OpenCode Zen lists the same two tiers: $2.00/$12.00/$0.20 (≤ 200K) and $4.00/$18.00/$0.40 (> 200K).
- **Architecture:** proprietary; no parameter count published. The blog frames it as an update to Gemini 3 Pro with better long-context handling and tool use.

### Raw benchmarks found

> Google's model card / blog numbers are marked "vendor"; Artificial Analysis, Vals AI, BenchLM-attributed Epoch AI/ARC Prize runs and the OpenRouter mirror are independent. Note that the AA page tracks **only one variant** for this model (no -low/-medium/-high pages exist).

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (vendor, Terminus-2 harness) / 67.4% (Vals AI) / 70.8% (Terminal-Bench 2.1, Vals, via BenchLM)
- Terminal-Bench 2.1: **73.78%** (AA) / 70.8% (Vals, via BenchLM)
- Terminal-Bench 4.0: **4.04%** (AA) / **2.52%** (Vals AI, #44/50) — catastrophic on the current agentic-terminal benchmark
- Terminal-Bench 3.0: **no verified public score found**
- Tau2-Bench: **95.61%** (AA) / 95.6% (via BenchLM) — the standout agentic result
- Tau3-Banking: **21.44%** (AA)
- GDPval-AA: **791.8** (AA) / **904 Elo** (AA mirror via BenchLM) / **1317 Elo** (vendor)
- AutomationBench: **35.43%** (AA); BrowseComp **85.9%** (vendor); APEX-Agents **33.5%** (vendor) / 32.01% (AA)
- MCP Atlas: **69.2%** (vendor); Claw-Eval **57.8%** (via BenchLM); ResearchClawBench **13.3%**; Gert Labs Composite **56.87%**; IFBench **77.14%** (AA); ITBench-AA **30.33%** (AA)
- Design Arena Website **1254 Elo** (via BenchLM); Hermes Index 38.1%; Bench Tool-Agent-User Evaluation 95.6%
- Claw-Eval / Toolathon: **no verified public score found** for Toolathon; Claw-Eval present (57.8%)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (vendor) / **94.14%** (AA) / **95.45%** (Vals AI, #1/138) / 94.3% (via BenchLM)
- HLE: **44.4%** without tools / 51.4% with search+code (vendor) / **47.03%** (AA) / 45.4% (via BenchLM)
- LCR / MLCR: AA-LCR v1.1 **82.0%** (AA); MLCR-AA **15.56%** (AA)
- CritPt: **17.71%** (AA)
- Artificial Analysis Intelligence Index: **30** (rank **#98 / 217**) / 29.7 (OpenRouter AA mirror) — no launch article exists (`/articles/gemini-3-1-pro` → 404)
- ARC-AGI-2: **77.1%** (vendor, "ARC Prize Verified" — "3.1 Pro achieved a verified score of 77.1%") / 77.1% (via BenchLM); ARC-AGI-3 **0.4%** (via BenchLM, ARC Prize)
- FrontierMath v2: Tiers 1–3 **59.649%**, Tier 4 **26.829%** (Epoch AI, via BenchLM) — far below the frontier
- MMMLU **92.6%** (vendor); Global-MMLU-Lite 93.2% (AA mirror); MMLU-Pro 90.99% (Vals)
- Omniscience index 31.88, accuracy **54.85%**, hallucination rate **50.87%** (AA)

Coding:

- SWE-bench Verified: **80.6%** (vendor, single attempt) / **78.80%** (Vals AI, #29/88) / **69.6%** (Vals AI, launch-day reading)
- SWE-bench Pro (public set): **54.2%** (vendor)
- LiveCodeBench: **88.48%** (Vals AI, #6/143) / LiveCodeBench Pro **2887 Elo** (vendor) / Pro 82.9% (via BenchLM)
- SciCode: **59%** (vendor) / **58.68%** (AA)
- Vibe Code Bench v1.1: **32.03%** (via BenchLM) — far behind Gemini 4 Argon's 91.90%
- DeepSWE: **no verified public score found**; FrontierSWE v2: **no verified public score found**; FrontierCode: **not measured** (AA `frontierCode: null`)
- Terminal-Bench 4.0 2.52–4.04% (see above); Terminal-Bench-Science 0.1 **1.43%** (Vals AI)
- AA Coding Index 68.8 (OpenRouter mirror) / 68.8% (via BenchLM)

Long context:

- MRCR v2 128k: **84.9%** (vendor); MRCR v2 1M **pointwise: 26.3%** (vendor) — the model's own long-context number collapses at the 1M end
- AA-LCR v1.1 82.0% (AA); no RULER / GraphWalks / needle-in-haystack result published
- 1,048,576-token input window, 65,536-token output cap

Performance profile (AA): output **128.7 t/s** (#40/185), TTFT **20.53s**, cost per Intelligence Index task **$1.30**, 67M output tokens (concise, #48/116 verbosity), 1M context, 3 API providers, cache discount 90%.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** τ²-bench 95.61% (AA) is a genuinely excellent agentic-tool result and BrowseComp 85.9% / MCP Atlas 69.2% / Claw-Eval 57.8% / IFBench 77.14% are respectable. But the rubric's frontier anchors are missed: Terminal-Bench 2.1 73.78% (rubric anchor ~88%+), τ³-Banking 21.44% (anchor ~50%+), GDPval-AA 791.8–1317 Elo (anchor ~1750+) — and Terminal-Bench 4.0 collapses to 2.52–4.04%, which is the benchmark that now defines agentic terminal work. Tool use is a February-2026 preview profile that never got refreshed.
- **Reasoning: 76/100.** GPQA Diamond 94.14–95.45% clears the 90% anchor and HLE 44.4–51.4% clears the 40% anchor, with FrontierMath v2 59.649% (T1–3), ARC-AGI-2 77.1% (ARC Prize Verified) and τ²-bench 95.6% on the positive side. Capped by the Artificial Analysis Intelligence Index of only **30** (rubric mid band), CritPt 17.71%, FrontierMath Tier 4 26.829%, ARC-AGI-3 0.4% and MLCR-AA 15.56%.
- **Context window: 90/100.** Advertised 1,048,576 input tokens with a 65,536-token output cap, which puts it in the rubric's top window tier (≥1M = 95–100) on paper. Held at 90 because Google's own MRCR v2 number shows the effective window collapsing at the top end — **84.9% at 128k but only 26.3% pointwise at 1M** — and because no independent RULER / GraphWalks / needle-in-haystack measurement exists to contradict it.
- **Multimodal: 91/100.** Full input coverage (text, image, video, audio, PDF) with text output, the rubric's "+audio in = 90–100" band, and solid independent vision evidence: MMMU-Pro 82.43% (AA) / 80.5% (vendor) / 88.21% (Vals) / 83.9% (chart), CharXiv 80.2%, MedXpertQA 81.3%, SimpleVQA 72.4%, ERQA 69.4%. Held at 91 because ZeroBench is only 29.0% and the model card's own multimodal evaluation methodology is a PDF that could not be read as text.
- **Coding: 72/100.** SWE-bench Verified 80.6% (vendor) / 78.80% (Vals) is solid, LiveCodeBench 88.48% (Vals) and LiveCodeBench Pro 2887 Elo (vendor) are strong, and SciCode 58.68% clears the rubric's 55% anchor. Capped by Terminal-Bench 2.1 73.78% (below the 85% anchor), SWE-bench Pro 54.2% (vs 81.2% for Claude Fable 5.1), **no DeepSWE and no FrontierSWE v2 figure at all**, Vibe Code Bench 32.03% (vs 91.90% for Gemini 4 Argon) and Terminal-Bench-Science 1.43%.
- **Cost efficiency: 72/100.** The evaluated route — OpenCode Zen `opencode/gemini-3.1-pro` — is billed at **$2.00 in / $12.00 out** per 1M for prompts ≤200K and $4.00/$18.00 above 200K, cache read $0.20. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) bracket that at roughly 72, with Batch at $1.00/$6.00 (≈82) as the cheap option. No free tier exists for this SKU ("Input price: Not available"), so no free-tier caveat applies — but the >200K doubling and the low absolute throughput of reasoning-heavy runs limit the real-world value.
- **Overall Score: 80.2/100.** (72 + 76 + 90 + 91 + 72) / 5 = 80.2 — best-fit: a capable *preview-era* reasoning/agentic model (excellent τ²-bench, 94%+ GPQA, 1M window, strong multimodal) whose measured agentic-terminal and coding-agent scores are now two generations behind; use it for multimodal reasoning and long-document work, not for coding agents — prefer Gemini 4 Argon or Gemini 3.8 Flash.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified — 80.6 (Google) vs 78.80 vs 69.6 (Vals AI).** Two Vals readings and a vendor number; the vendor's "single attempt" framing explains part of the gap. All three are listed; the middle value is used.
2. **GDPval-AA — 1317 Elo (vendor) vs 904 (AA mirror) vs 791.8 (AA).** A ~500-Elo spread; the AA figures are used for scoring and the vendor number is reported.
3. **Terminal-Bench 4.0 — 4.04% (AA) vs 2.52% (Vals).** Both are terrible and agree in magnitude; this is a genuine weakness, not a harness artifact.
4. **Terminal-Bench 2.0/2.1 — 68.5 (vendor, Terminus-2) vs 67.4 (Vals) vs 73.78 (AA) vs 70.8 (Vals TB 2.1).** Harness differences only; the AA figure is used.
5. **MMMU-Pro — 80.5 (vendor) vs 82.43 (AA) vs 88.21 (Vals) vs 83.9 (chart).** Vendor under-reports, Vals over-reports; AA is the anchor.
6. **GPQA Diamond — 94.3 vs 94.14 vs 95.45.** Within harness noise; the vendor figure is used.
7. **HLE — 44.4% no tools (vendor) vs 47.03% (AA) vs 45.4% (chart).** All in the same band.
8. **LiveCodeBench — Pro Elo 2887 (vendor) vs Pro 82.9% (via BenchLM) vs 88.48% (Vals, non-Pro).** Different benchmarks (Pro Elo vs pass-rate on the standard set); not merged.
9. **Index scale mismatch.** AA 30 (#98/217) and OpenRouter's mirror 29.7 vs BenchLM 64.74/100 (#38/956) vs Vals Index 33.44% (#46/50) are four different scales; only the AA number is used inside this report's rubric.
10. **Preview status.** The model is still "Preview" with a "3.5 Pro coming soon" banner on the Pro page, and Artificial Analysis has no launch article for it — consistent with a model that was superseded quickly, and the reason its agentic scores lag the 2026-Q4 field.

### Notes on identity

- `gemini-3.1-pro-preview` is a distinct model from `gemini-3-pro` (retired 2026-03-09 per the API deprecations page) and from the Gemini 3.x Flash line; the Zen row is `gemini-3.1-pro`, which resolves to this same preview id.
- "Preview" is a lifecycle label, not a tier: there is no separate GA `gemini-3.1-pro` id in the API docs, and OpenRouter's canonical slug `google/gemini-3.1-pro-preview-20260219` pins the February snapshot.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model page, Gemini API model/pricing/thinking docs, DeepMind model card and Pro page, Google blog launch post; independent trackers Artificial Analysis (model page + embedded per-evaluation data), Vals AI's own runs, the BenchLM evidence ledger (Epoch AI FrontierMath, ARC Prize, Claw-Eval, Design Arena), OpenRouter and OpenCode Zen model/pricing catalogs, and Hacker News launch coverage. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Pro.md`, using the same headings.
