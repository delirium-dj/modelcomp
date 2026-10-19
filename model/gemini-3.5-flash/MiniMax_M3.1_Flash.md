# Gemini 3.5 Flash — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May-2026 I/O release — "Gemini 3.5: frontier intelligence with action", "We're kicking off the series by releasing 3.5 Flash" — the default model for the Gemini app and AI Mode in Search globally, and the fastest of the Gemini Flash line (195.1 t/s at the high effort setting). It is now **deprecated** in favour of Gemini 3.7 Flash, and its API id has been **removed from Google's model and pricing pages**.
- **Provider / access:** Gemini API `gemini-3.5-flash` (the endpoint id is no longer listed on Google's models/pricing pages); AI Studio; OpenRouter `google/gemini-3.5-flash` (canonical slug `gemini-3.5-flash-20260519`); OpenCode Zen `opencode/gemini-3.5-flash` (`https://opencode.ai/inference/google/v1beta/models/gemini-3.5-flash`) — the Zen deprecated list contains Gemini 3 Pro but **not** 3.5 Flash, so the route is still live.
- **Release / knowledge:** released **2026-05-19** (Google I/O blog; model card "Published 19 May 2026"). Knowledge cutoff **January 2025**.
- **IDs:** `gemini-3.5-flash` (Gemini API), `google/gemini-3.5-flash` (OpenRouter), `opencode/gemini-3.5-flash` (Zen).
- **Context window:** **1,048,576** input tokens, **65,536** output tokens ("it supports 1,048,576 input tokens and 65,536 maximum output tokens").
- **Modalities:** text, image, audio, video and file in; text out ("Text strings … images, audio, and video files, with a token context window of up to 1M"; "Text, with a 64K token output"). Thinking levels **high / medium / low / minimal** (default medium on OpenRouter), built on "the Gemini 3 Flash reasoning foundation with thinking levels to control the mix of quality, cost and latency".
- **Pricing (as of 2026-10-19, per 1M tokens):** **$1.50 in / $9.00 out**, cached input $0.15 (90% discount). Note that Google **no longer publishes this price** — the live models and pricing pages carry only 3.5 Flash-Lite, 3.6 Flash and 3.8 Flash; the $1.50/$9.00 rate is corroborated by Artificial Analysis ("based on Google's API"), Simon Willison and OpenRouter's API ($0.0000015 / $0.000009). OpenCode Zen lists $1.50 / $9.00 / $0.15.
- **Architecture:** proprietary; no parameter count published ("based on the Gemini 3 Flash reasoning foundation"). Safety: the model card rates it "unlikely to reach any CCLs", with cyber below the critical capability level.

### Raw benchmarks found

> Google's model-card numbers are marked "vendor"; Artificial Analysis, Vals AI, the BenchLM ledger and the AA launch figures are independent. Several independent rows in BenchLM's ledger disagree with Google's own card, and are noted.

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (vendor) / **78.65%** (AA) / **74.2%** (Vals AI)
- Terminal-Bench 4.0: **6.57%** (AA) / **6.06%** (Vals AI, #42/50) — the same collapse seen in 3.7 Flash (13.64%) and 3.8 Flash (19.70%)
- MCP Atlas: **83.6%** (vendor); Toolathlon **56.5%** (vendor); AutomationBench **42.08%** (AA) / 59.9% (via BenchLM); Finance Agent v2 **57.9%** (vendor) / 57.86% (Vals)
- OSWorld-Verified **78.4%** (vendor); OSWorld 2.0: not published for 3.5 Flash; JobBench: not published
- GDPval-AA: **1656 Elo** (vendor + blog) / **1202.58** (AA) / 1345 (via BenchLM, attributed to Google launch screenshots) — a three-way spread
- Tau2-bench **95.32%**, Tau3-Banking **32.16%**, APEX-Agents **47.05%**, IFBench **76.33%**, EnterpriseOps-Gym-AA **50.07%**, AnalystAgent 45.0%, ITBench-AA **40.35%** (AA); AA-Briefcase and Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.22%** (AA) / **92.68%** (Vals AI) / 92.7% (via BenchLM)
- HLE: **40.2%** (vendor) / **42.68%** (AA) / 42.7% (via BenchLM)
- LCR **73.33%**, CritPt **13.14%**, MLCR-AA **18.33%** (AA)
- Artificial Analysis Intelligence Index: **33** (#87/217) at high; Medium 34\* (estimated), Minimal **24** — with the odd inversion that the estimated medium score exceeds high; BenchLM mirrors a normalized "AA index 50.2%"
- ARC-AGI-1 **92.50%**, ARC-AGI-2 **72.1%** (via BenchLM); FrontierMath v2: Tiers 1–3 **62.807%**, Tier 4 **26.829%** (Epoch AI, via BenchLM)
- Omniscience accuracy **51.4%** with a **62.17%** hallucination rate (AA); MMLU-Pro 89.52% (Vals); MMMU-Pro **84.28%** (AA) / 88.27% (Vals) / 83.6% (vendor)

Coding:

- SWE-bench Pro: **55.1%** (vendor); SWE-bench: **78.80%** (Vals AI, #28/88) — no official swebench.com row
- LiveCodeBench: **87.60%** (Vals AI, #12/143)
- Terminal-Bench 2.1 76.2–78.65%; Terminal-Bench 4.0 6.06–6.57%; Terminal-Bench-Science 0.1 **5.71%** (Vals)
- SciCode **53.94%** (AA); Vibe Code Bench v1.1 **48.68%** (Vals, #59/114 — "#10" at launch); CursorBench 3.2 **48.8%** / 3.1 49.8%; Blueprint-Bench 2 **33.6%** (vendor); FrontierCode: not published for 3.5 Flash
- No DeepSWE, no FrontierSWE, no FrontierCode row for 3.5 Flash

Long context:

- **MRCR v2 (128k) 77.3%** and **MRCR 1M (pointwise) 26.6%** (vendor) — Google's own table shows Gemini 3 Flash at 22.1% and Gemini 3.1 Pro at 26.3% at the 1M band, so 3.5 Flash barely improves on its own predecessor at the top of the window
- No GraphWalks / RULER figure; 1M context, 65,536 output

Performance profile (AA, high): Index 33 (#87/217), output **195.1 t/s** (#16/186), cost per Index task **$3.69** (#101/114), 120M output tokens (#79/116), TTFT 15.92s, blended $1.31/1M. Release-page variants: Medium 34\* (estimated, 199 t/s, #15/186), Minimal 24 (178 t/s, TTFA 0.83s). Blog claim: "it is 4 times faster than other frontier models."

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 74/100.** Terminal-Bench 2.1 76.2–78.65%, MCP Atlas 83.6%, OSWorld-Verified 78.4%, Finance Agent v2 57.9%, Toolathlon 56.5%, Tau2-bench 95.32%, AutomationBench 42.08–59.9%, APEX-Agents 47.05%, IFBench 76.33%. Capped by the rubric's anchors (TB2.1 ~88%+ → 78.65% at best; τ3 ~50%+ → 32.16%; GDPval ~1750+ → 1202.58 on AA), by Terminal-Bench 4.0 at only 6.06–6.57%, and by the GDPval disagreement (1656 vendor / 1345 / 1202.58), which is too wide to score as frontier.
- **Reasoning: 78/100.** GPQA Diamond 92.22–92.68%, MMLU-Pro 89.52%, MMMU-Pro 84.28%, IFBench 76.33%, AA-LCR 73.33%, FrontierMath v2 62.807% (T1–3). Capped by the Artificial Analysis Intelligence Index of **33** (rubric mid band), HLE 40.2–42.68%, CritPt 13.14%, MLCR-AA 18.33%, FrontierMath Tier 4 26.829%, and a **62.17% hallucination rate** on Omniscience.
- **Context window: 92/100.** 1,048,576-token input window with a 65,536-token output cap — on paper the rubric's top tier (≥1M = 95–100). Held at 92 because Google's own MRCR numbers show the window is not usable at the top: **77.3% at 128k but only 26.6% pointwise at 1M**, barely better than Gemini 3 Flash's 22.1% at the same band, with no independent long-context measurement to the contrary.
- **Multimodal: 90/100.** Text, image, audio, video and file input with text output — the rubric's "+audio in = 90–100" band — with solid published vision numbers: MMMU-Pro 84.28% (AA, and 83.6% is the best-verified MMMU-Pro in the BenchLM catalog), CharXiv 84.2%, and a full omni-modal input surface. Held at 90 rather than higher because the multimodal evidence is largely Google's own model card, with MMMU-Pro ranging 83.6%–88.27% across sources.
- **Coding: 74/100.** LiveCodeBench 87.60%, Terminal-Bench 2.1 76.2–78.65%, SWE-bench 78.80% (Vals), SciCode 53.94% (just under the rubric's 55% anchor), SWE-bench Pro 55.1%. Capped by Terminal-Bench 4.0 at 6.06–6.57% and Terminal-Bench-Science at 5.71%, Vibe Code Bench 48.68% (down from #10 at launch to #59/114), CursorBench 3.2 48.8%, Blueprint-Bench 2 33.6%, and the absence of any DeepSWE, FrontierSWE or FrontierCode figure.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gemini-3.5-flash` — is billed at **$1.50 in / $9.00 out** per 1M with a $0.15 cached read, which the rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) place at roughly 78. Google itself no longer publishes the price, so this rate is corroborated from three third parties rather than the vendor; Batch/Flex equivalents are not published for this id, and no free tier exists for it.
- **Overall Score: 81.6/100.** (74 + 78 + 92 + 90 + 74) / 5 = 81.6 — best-fit: a fast, well-rounded omni-modal model (195 t/s, 1M window, audio/video/PDF input) with a good reasoning profile for its tier — but with the Flash line's characteristic agentic-terminal collapse (Terminal-Bench 4.0 ~6%), a 26.6% one-million-token retrieval score, and a price that is no longer Google's own list price; pick Gemini 3.8 Flash for live production (19.7% on Terminal-Bench 4.0, same $1.50/$7.50 post-intro rate).

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **GDPval-AA — 1656 Elo (model card + blog) vs 1345 (via BenchLM, "attributed to Google launch screenshots") vs 1202.58 (AA).** A three-way spread of ~450 Elo with no reconciling source; AA's number is used for scoring and all three are listed.
2. **Terminal-Bench 4.0 — 6.57% (AA) vs 6.06% (Vals).** Both are catastrophic and consistent; the weakness is real, and 3.7 Flash (13.64%) and 3.8 Flash (19.70%) are the comparators that matter.
3. **Scale clash — AA Index 33 (#87/217) vs BenchLM 61.91 (#50/956).** Different composites; BenchLM's own "AA index 50.2%" is a percent-of-max normalisation of the 33, and BenchLM flags "partial benchmark coverage". Only the AA number is used.
4. **Effort inversion.** AA's Medium variant is estimated at **34\*** — above the measured High 33 — and Minimal at 24. The reasoning score is anchored on the high-effort measurements, and the inversion is flagged.
5. **HLE 40.2% (Google) vs 42.68% (AA); MMMU-Pro 83.6% (Google) vs 84.28% (AA) vs 88.27% (Vals); SciCode 53.1% vs 53.9% (two BenchLM rows for one benchmark).** Vendor generally under-reports against AA; AA is the anchor.
6. **Long-context collapse.** Google's own table is the strongest evidence against the 1M claim: MRCR 1M 26.6% versus Gemini 3 Flash's 22.1% and Gemini 3.1 Pro's 26.3% at the same band.
7. **Vibe Code Bench 48.68%** — "#10" at launch, #59/114 by Vals' current page. The same model, re-ranked by a larger field.
8. **Vals Index drift** 62.05% (#3) at launch → 44.79% (#40/50) on the same model page — a scoring-pool and harness change, not a model regression, and it is the same drift pattern seen for Opus 5 and Opus 4.8.
9. **Pricing no longer published by Google.** The current models and pricing pages do not list `gemini-3.5-flash`; $1.50/$9.00 is corroborated by AA, Simon Willison and OpenRouter's API instead. Zen's deprecated list omits 3.5 Flash, so the route is still live at that price.

### Notes on identity

- `gemini-3.5-flash` is a distinct release (2026-05-19) from `gemini-3.7-flash` (2026-08-13) and `gemini-3.8-flash` (2026-09-02), and it is the first model of the "Gemini 3.5" series — a generation label, not a tier.
- The id is no longer published in Google's API model list or pricing page, but OpenRouter (canonical `gemini-3.5-flash-20260519`) and OpenCode Zen still serve it; Zen's deprecated table does not include it.
- It is **not** the same as `gemini-3.5-flash-lite` (a separate, smaller SKU still listed by Google).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model card, the Google I/O launch blog ("Gemini 3.5: frontier intelligence with action"), the Gemini API models and pricing pages (which no longer list this id), and the DeepMind Flash page; independent trackers Artificial Analysis (model page, High/Medium/Minimal variants, per-evaluation payload), Vals AI (own runs, launch-day and current index), the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, and Simon Willison's launch notes. Vendor-vs-independent conflicts — including the three-way GDPval spread, the AA/BenchLM scale clash and the effort inversion — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash.md`, using the same headings.
