# Qwen3.7 Flash — findings by Step 5 Preview

- Source: Alibaba (`qwen3.7-flash`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Flash
- **Short description:** Alibaba's closed-weights Flash-tier multimodal model with a 1M context window — text/image/video in, text out — positioned for cheap long-context agent and document work.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`https://qwencloud.com`), OpenAI-compatible; also served by 15 providers per models.dev. The OpenCode Console/Zen catalog does **not** list this ID.
- **Release / knowledge:** released 2026-07-15 (models.dev). Conflicting dates exist — see conflicts below: OpenRouter's snapshot is `qwen3.7-flash-20260727` and Epoch/Benchable date it 2026-07-27 while models.dev says 2026-07-15.
- **IDs:** `alibaba/qwen3.7-flash` (models.dev); `qwen/qwen3.7-flash-20260727` (OpenRouter).
- **Context window:** 1,000,000 tokens total. Max output is **conflicting**: 131,072 (models.dev and qwencloud) vs 65,536 (Alibaba model card per eesel, and Roboflow) vs 128,000 (LLMLearner). Chain-of-thought budget is separately 262,144; max input 991,808 (983,616 in thinking mode).
- **Modalities:** **multimodal — text, image and video in; text out.** This is corroborated by qwencloud, epoch.ai, Roboflow, BenchGecko, LLMLearner and Benchable, i.e. six independent sources. models.dev's input column renders as a non-text icon set and cannot be read as text, so it is not counted as a counter-source. Reasoning model; tool calling and structured output both supported.
- **Pricing (as of 2026-10-24):** tiered on QwenCloud — **<32K context $0.03/$0.13 per 1M, 32–256K $0.10/$0.40, 256K–1M $0.20/$0.80**, with cache reads at $0.006 per 1M. models.dev and AIHubMix list a flat $0.0282/$0.1128, which is the cheapest route and the figure used for cost scoring.
- **Architecture:** proprietary, closed weights (no public repo — the HF path is auth-gated, 401). Parameter count unknown; Benchable records an unverified "3.7B rumoured", which is explicitly **not** used here.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **82%** (epoch.ai) vs **79.6%** (benchgecko.ai) — a real conflict of 2.4 points between two independent trackers; both recorded.
- OTIS Mock AIME 2024-25: **87%** (epoch.ai) / **86.7%** (benchgecko.ai)
- FrontierMath v2, Tiers 1-3: **19.3%** (epoch.ai; independently 19.298% at #76/81 on benchlm.ai, and 19.3% on llmlearner.com — this one is triple-sourced and stable)
- Mystery Game Puzzles: **15%** (epoch.ai) vs **6.4%** (benchgecko.ai) — a wide conflict, 8.6 points
- Chess Puzzles: **19.0%** (benchgecko.ai)
- Epoch Capability Index (ECI): **144, ranked #96 of 253** (epoch.ai; #70 of 227 at release — rank drift across snapshots)
- Artificial Analysis Intelligence Index: **no verified public score found** — AA has no Qwen3.7 Flash page (404).
- HLE, MMLU-Pro, SciCode: no verified public score found.

Long context:

- Context Arena (GDM-MRCRv2, benchmarklist.com): **45.8% average / 52.5% AUC at 128K / 26.0% AUC at 1M** in non-thinking mode; **58.1% average / 74.2% AUC at 128K / 28.7% AUC at 1M** in thinking mode. LLMLearner's best reading is 80.5 (#22/61). The 1M AUC of ~27-29% is the key caveat: the window is nominally 1M but effective retrieval at 1M is roughly a quarter.
- MRCR / RULER as standalone harnesses: no verified public score found.

Agent / tool use:

- **Terminal-Bench (any version): no verified public score found.**
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Coding Agents Index: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- ObviousBench (agentic task completion, high reasoning): answer pass³ **91.0%** (benchmarklist.com; 47.2 / 84.7 / 90.3% at none / low / medium effort) with a measured run cost of $0.06 and 228,634 reasoning tokens.
- Benchable Email Classification: **99.0%** at $0.0062 per run (benachable.ai) — a narrow task, recorded but not weighted.

Vision (multimodal):

- Roboflow Vision Evals (13 Oct 2026): overall **52.4%, #53 of 63** (playground.roboflow.com). Breakdown: Identification 84.4% (#31/63); OCR low-res 54.3% / high-res 62.3%; Object Detection 42.8%; Counting 46.0%; Reasoning 34.4% / 61.6%. Cost $0.0001 per sample (#3 of 63) and 5.77 s per sample (#6 of 63).
- MMMU / MMMU-Pro / OCRBench / DocVQA: no verified public score found as text.

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.
- AIIQ programmatic subscore: 88 of 100 (benchmarklist.com / aiiq.org, composite IQ 94, #139/161) — a composite proxy, explicitly not a repo-scale coding benchmark.

Speed / cost:

- Output speed **59 tokens/second** (P50), time to first token **1.20 s**, end-to-end P50 3.56 s / P95 29.03 s / P99 90.19 s, tool-call error rate 8.88%, uptime 99.99% (eesel.ai citing OpenRouter telemetry).
- Instrumental reasoning / composite IQ: AIIQ **94** (#139/161).

### Conflicts recorded (not silently resolved)

1. **Max output:** 131,072 (models.dev, qwencloud) vs 65,536 (Alibaba card via eesel, Roboflow) vs 128,000 (LLMLearner). The models.dev/qwencloud figure is used for the Context-window score because it is the vendor-side number, and the conflict is disclosed here.
2. **Release date:** 2026-07-15 (models.dev) vs 2026-07-27 (OpenRouter snapshot slug, Epoch, Benchable) vs 2026-07-21 (LLMLearner). models.dev used.
3. **GPQA Diamond:** 82% (epoch.ai) vs 79.6% (benchgecko).
4. **Mystery Game Puzzles:** 15% (epoch.ai) vs 6.4% (benchgecko) — the widest conflict in this file.
5. **Pricing:** $0.0282/$0.1128 flat (models.dev, AIHubMix) vs $0.03/$0.13 tiered (all others, with steep long-context tiering up to $0.20/$0.80 above 256K). The cheap flat route is used for cost scoring, but the tiering is a material real-world caveat for 1M-context work.
6. **Modality:** multimodal per six independent trackers; models.dev's input column is icon-only and offers no text either way.

### Normalized scores (1–100)

- **Tool use: 52/100.** ObviousBench at 91.0% pass³ (high effort) is genuinely strong and email classification is 99%, but the two agentic benchmarks this project weights most heavily — Terminal-Bench and Tau3 — have no published number at all, and GDPval-AA and the Coding Agents Index are likewise absent. The 8.88% tool-call error rate (OpenRouter telemetry) is a concrete drag on real agentic loops. Held in the low-mid band by the missing-terminal-evidence penalty, not by any measured failure.
- **Reasoning: 68/100.** GPQA Diamond at 79.6-82% clears the 60-80% mid band and Epoch's ECI of 144 (#96/253) is solidly mid-field, but FrontierMath at 19.3% (triple-sourced and stable) is weak, Mystery Game Puzzles is 6.4-15% depending on tracker, and Chess Puzzles at 19.0% caps the top end. No HLE and no AA Intelligence Index exist to lift it. A capable mid-tier reasoner, not a frontier one.
- **Context window: 88/100.** 1,000,000-token window puts it in the ≥1M tier (95-100), and the thinking-mode Context Arena AUC of 74.2% at 128K is respectable. Capped at 88 rather than 95+ because effective retrieval decays hard at the nominal limit — 26.0-28.7% AUC at 1M — so the window is documented but only about a quarter effective at full length.
- **Multimodal: 70/100.** Text, image and video input with text output, six-sourced. Roboflow's overall 52.4% (#53/63) is only mid-field, but Identification at 84.4% (#31/63) and OCR at 54.3-62.3% are genuinely useful, and the methodology's +image/video band is 75-90 with no non-text output. Scored 70 to reflect real capability confirmed by measurement rather than the higher band the modality list alone would suggest.
- **Coding: 55/100.** No verified public score found for SWE-bench, LiveCodeBench, SciCode, DeepSWE, Terminal-Bench or Vibe Code Bench. The only signal is AIIQ's programmatic subscore of 88 (composite IQ 94, #139/161), which is a composite proxy rather than a repo-scale engineering benchmark, so the score is provisional and capped low rather than inferred upward.
- **Cost efficiency: 95/100.** $0.0282/$0.1128 per 1M on the cheapest route, $0.006 cache reads, and a measured $0.06 per ObviousBench task — close to the 97-99 band the methodology reserves for ~$0.10/$0.20 pricing. Held at 95 by two real frictions: the steep long-context tiering ($0.20/$0.80 above 256K on QwenCloud's own rate card) and a P99 end-to-end latency of 90.19 s.
- **Overall Score: 67/100.** Mean of the five quality dims (52 + 68 + 88 + 70 + 55 = 333 ÷ 5 = 66.6 → 67, half-up). Best fit: cheap multimodal long-context document and retrieval-style work under ~128K, where the 1M window is a bonus rather than a dependency. Avoid it for terminal-agent or repo-scale coding, where every relevant benchmark is unpublished.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (models.dev's Alibaba catalog, epoch.ai's capability suite, and the independent tracker cluster of benchmarklist.com, benchlm.ai, benchgecko.ai, LLMLearner, vals-adjacent Roboflow evals and Benchable), with Artificial Analysis and Hugging Face checked and found to have no data; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — max output (131,072 vs 65,536 vs 128,000), release date (2026-07-15 vs 2026-07-27 vs 2026-07-21), GPQA Diamond (82% vs 79.6%), Mystery Game Puzzles (15% vs 6.4%), and pricing (flat vs tiered). The two most load-bearing coding/agentic benchmarks are entirely unpublished for this model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
