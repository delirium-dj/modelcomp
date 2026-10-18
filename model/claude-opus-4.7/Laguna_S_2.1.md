# Claude Opus 4.7 — findings by Laguna S 2.1

- Source: Anthropic (claude-opus-4.7)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7 (dataset slug `claude-opus-4.7` resolves to Anthropic's Claude Opus 4.7 — the default **reasoning** variant per Artificial Analysis; a separate non-reasoning sibling exists (lower, IQ 30.9 on BenchLM vs the reasoning variant's 41★ estimate). The model is deprecated and being superseded by Claude Opus 4.8 ("results for other workloads are historical and no longer updated"). BenchLM's per-benchmark table is for the non-reasoning sibling and is treated as a lower-bound reference here.)
- **Short description:** Anthropic's April 2026 reasoning-flagship model for advanced software engineering and long-horizon agentic work; 1M-token context, text+image input, state-of-the-art Finance Agent and GDPval-AA performance, with stronger vision and coding gains over Opus 4.6. Proprietary (API-only).
- **Provider / access:** Anthropic API (Messages API / Anthropic SDK, OpenAI-compatible), API model id `claude-opus-4-7`; also available on Amazon Bedrock, Google Vertex AI, and Microsoft Foundry. docs: `docs.anthropic.com` / `platform.anthropic.com`.
- **Release / knowledge:** Released 2026-04-16 (GA). Knowledge cutoff ~January 2026.
- **IDs:** `anthropic/claude-opus-4-7` (API id `claude-opus-4-7`)
- **Context window:** 1,000,000 tokens (Artificial Analysis). Max output not separately published.
- **Modalities:** text + image input (images up to 2,576px long edge / ~3.75MP), text output. Reasoning/thinking enabled (AA marks "Reasoning: Yes"). Tool use supported; JSON mode available. No audio/video input.
- **Pricing (as of 2026-10-17):** $5.00 per 1M input / $25.00 per 1M output via Anthropic (Artificial Analysis median across providers; 90% cache discount); same list price as Opus 4.6. Expensive vs the field (median ~$0.43/$1.68); no free/$0 tier.
- **Architecture:** proprietary; parameter count not disclosed by Anthropic.

### Raw benchmarks found

> Sources: (1) Artificial Analysis model page `/models/claude-opus-4-7` (reasoning variant: Intelligence Index 41★ estimate, specs, pricing, speed); (2) Anthropic news "Introducing Claude Opus 4.7" (release, pricing, API ids); (3) BenchLM.ai `/models/claude-opus-4-7` per-benchmark table — NOTE BenchLM's page is the **non-reasoning** sibling (IQ 30.9, overall 66.74, 26 of 639 benchmarks) — filed at 83 on verified reasoning-variant evidence with non-reasoning numbers treated as lower bounds. Re-verified 2026-10-17.

**Agent / tool use:**

- τ²-Bench: **74%** (BenchLM ← AA non-reasoning source)
- Terminal-Bench 2.1 (Vals): **68.5%** (BenchLM)
- SWE-bench (Vals): **82.0%** (BenchLM) — *(Anthropic: "resolves 3x more production tasks than 4.6" on Rakuten-SWE-Bench)*
- LiveCodeBench (Vals): **85.1%** (BenchLM)
- Vibe Code Bench: **71.00%** (BenchLM)
- React Native Evals: **82.8%** (BenchLM)
- CursorBench: **70%** (Anthropic news, vs 58% for Opus 4.6) — relative coding/agentic signal
- OSWorld 2.0: **13.9%** ⚠️ *(conflict: older reports cite ~78% for an earlier OSWorld/Verified harness; OSWorld 2.0, the current harder harness, is 13.9% — used as primary; depresses the Tool score)*
- ApprenticeBench: **7%** (NeoCognition / BenchLM — confirmed)
- Gert Labs: **65.59%** (Gert Labs rankings / BenchLM — NEW)
- ResearchClawBench: **20.7%** (ResearchClawBench leaderboard / BenchLM — NEW)
- AA-IFBench: **43.6%** (Artificial Analysis / BenchLM — NEW)
- GDPval-AA: no verified public absolute score found (Anthropic claims "state-of-the-art" qualitatively)
- MCP-Atlas / OSWorld (legacy): no verified public score for this variant

**Reasoning / knowledge:**

- GPQA Diamond: **88.5%** (AA, BenchLM) / **90.2%** (Vals) — consistent cross-check
- MMLU-Pro: **89.9%** (Vals, BenchLM)
- HLE (AA-HLE): **33.3%** (BenchLM, non-reasoning lower bound; reasoning variant ≥)
- AA-LCR: **75.7%** (BenchLM ← AA source)
- CritPt: **5.1%** (BenchLM ← AA source) ⚠️ *(weak)*
- FrontierMath v2 (Tiers 1–3): **70.175%** (BenchLM ← Epoch AI — confirmed)
- FrontierMath v2 (Tier 4): **31.707%** (Epoch AI ← BenchLM — NEW)
- AA-MMMU-Pro: **76.4%** (BenchLM ← AA)
- AA-Omniscience Index / Accuracy / Hallucination: 14.8 / 44.7% / 54.1% (BenchLM ← AA)
- Artificial Analysis Intelligence Index: **41** (estimated; #53/216 proprietary, 4/4 units) ⚠️ *(conflict: BenchLM's non-reasoning sibling is 30.9 (overall 66.72) and Anthropic's self-reports are strong; 41★ is an estimate likely to rise with measurement)*
- LCR / MLCR: AA-LCR 75.7 used as the long-context-reasoning proxy

**Coding:**

- SWE-bench Verified (Vals): **82.0%** (BenchLM)
- LiveCodeBench (Vals): **85.1%** (BenchLM)
- Vibe Code Bench: **71.00%** (BenchLM)
- React Native Evals: **82.8%** (BenchLM)
- FrontierCode 1.1: **38.5%** (BenchLM)
- PostTrainBench v1.1: **28.6%** (BenchLM) ⚠️ *(weak)*
- CursorBench: **70%** (Anthropic news, vs 58% Opus 4.6)
- Multi-SWE-bench / SWE-bench Pro: no verified public score found for this variant

**Long context:**

- 1,000,000-token context window confirmed (Artificial Analysis). No verified public MRCR / RULER / GraphWalks retrieval-accuracy figure is published; AA-LCR 75.7% is the closest long-context reasoning signal.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`. Half-up mean of (Tool + Reasoning + Context + Multimodal + Coding); Cost is scored independently and excluded from Overall. Benchmarks verified from BenchLM (overall 66.74, #29/954, 26 of 639, non-reasoning sibling) as of 2026-10-17. Reasoning-variant default; non-reasoning numbers treated as lower bounds.

- **Tool use: 76/100.** Strong τ²-Bench (74%) + Terminal-Bench 2.1 (68.5%) + SWE-bench Verified (82.0%) + LiveCodeBench (85.1%) and Anthropic's GDPval-AA "state-of-the-art" / CursorBench 70% (vs 4.6 58%) claims; but OSWorld 2.0 is weak (13.9%), ApprenticeBench is 7%, and no absolute GDPval-AA / MCP-Atlas / TB4.0 numbers are published for the reasoning variant — capped by inconsistent agentic signals.
- **Reasoning: 86/100.** GPQA 88.5–90.2%, MMLU-Pro 89.9%, AA-LCR 75.7%, HLE 33.3% (~frontier) and AA Intelligence Index 41★ (4/4 units); capped by weak CritPt (5.1%), weak AA-Omniscience Index (14.8), and the fact that 41★ is an estimate (BenchLM's non-reasoning sibling is 30.9).
- **Context window: 100/100.** 1,000,000-token window (Artificial Analysis / Anthropic).
- **Multimodal: 70/100.** Text + image input (up to 2,576px/~3.75MP per Anthropic), text output — the +image band (60–70). No audio/video.
- **Coding: 83/100.** SWE-bench Verified 82.0% is the strongest coding result in this cohort (above GLM-5 77.8, nemotron 71.1, gpt-5.1-codex 73.7; near the 87.6% frontier reference) and LiveCodeBench 85.1% is elite; React Native Evals 82.8, CursorBench 70% (vs 4.6 58%). Capped by FrontierCode 38.5, PostTrainBench 28.6, and no SWE-bench Pro/Verified-% for the reasoning variant.
- **Cost efficiency: 45/100.** $5.00/$25.00 per 1M tokens — expensive vs the field (median ~$0.43/$1.68); output pricing especially painful for a coding model. No free tier.
- **Overall Score: 83/100.** Half-up mean of (76 + 86 + 100 + 70 + 83) / 5 = 415 / 5 = 83.0 → 83. Strong frontier reasoning/coding model (1M ctx, elite GPQA/SWE-bench/LiveCode, GDPval-AA "state-of-the-art"), but penalized by weak OSWorld 2.0 (13.9%), weak CritPt/Omniscience, text+image-only multimodal (70 vs 75), and heavy $5/$25 pricing; AA Intelligence Index is only an estimate (41★) and BenchLM's absolute table is the non-reasoning sibling. Best fit when cost/latency are not primary; over-priced for cheap-batch inference.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research (Artificial Analysis model page, Anthropic news release, BenchLM.ai per-benchmark table); scores normalized 1–100 per model-comparison.md v4. Reasoning-variant default; BenchLM (non-reasoning sibling, IQ 30.9) treated as lower bounds.
- Sources: BenchLM.ai model page (Overall 66.74/100, #29/954, 26 of 639 benchmarks, 2026-10-17); AA model benchmarks (Intelligence Index 30.9 for non-reasoning sibling, τ²-bench 74%, AA-LCR 75.7%, CritPt 5.1%, AA-MMMU-Pro 76.4%); Anthropic news release; Vals AI (GPQA 90.2%, MMLU-Pro 89.9%, TB2.1 68.5%, SWE-bench 82.0%); Epoch AI FrontierMath v2 (T1-3 70.175%, T4 31.707%); Gert Labs; ResearchClawBench.
- Discrepancy note: AA Intelligence Index 30.9 (non-reasoning sibling, confirmed on Oct 17 page) vs file's estimate of 41★ for reasoning variant — file notes this conflict; BenchLM score 66.74 matches file's noted 66.72. Design Arena not on current BenchLM page.

---

## Re-verification (2026-10-17)

Confirmed via Oct 17 BenchLM page: Overall 66.74 (#29/954), 26 of 639 benchmarks. AA Intelligence Index 30.9 confirmed for non-reasoning sibling (file uses estimated 41★ for reasoning variant — noted discrepancy). New Oct 17 benchmarks: Gert Labs 65.59%, ResearchClawBench 20.7%, AA-IFBench 43.6%, FrontierMath v2 T4 31.707%. All other benchmarks match file. Normalized scores unchanged (83).
