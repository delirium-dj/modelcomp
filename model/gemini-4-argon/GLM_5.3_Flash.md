# Gemini 4 Argon — findings by GLM 5.3 Flash

- Source: Google (`gemini-4-argon`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's flagship frontier reasoning model (codename "Argon"), built for deep work on complex real-world tasks — software engineering, finance/legal/tax knowledge work, cybersecurity defense, and science. Announced 2026-09-30 to a limited set of trusted cyber defenders (Fairwind Program) and made generally available 2026-10-13; it leads the frontier set on most disclosed benchmarks, including #1 on Vals Index and Scale AI's Humanity's Sixth Sense.
- **Provider / access:** Gemini API `gemini-4-argon` (stable) at `https://generativelanguage.googleapis.com/v1beta` — the documented surface is the new Interactions endpoint (`POST /v1beta/interactions`), used from Google AI Studio as well; also on Vertex AI / Gemini Enterprise Agent Platform (same ID, global and non-global endpoints, non-global +10%), and resold via OpenRouter and Vercel AI Gateway. Not a Chat Completions API: from this release sampling parameters are ignored and `thinking_budget` returns a 400 — thinking is set via `thinking_level` (`low`/`medium`/`high`). Explicitly NOT available on the Gemini API Free tier (paid only).
- **Release / knowledge:** Announced 2026-09-30 (limited Fairwind/trusted-tester rollout); GA 2026-10-13; knowledge cutoff March 2026 (model card, with domain-specific lag warned).
- **IDs:** `google/gemini-4-argon` (Gemini API stable; Vertex AI and OpenRouter use the same slug). No Free ID exists — the model is paid-tier only, so no free-access ID on any gateway.
- **Context window:** 1,048,576 tokens, unified input+output limit; max output 65,536 default (synchronous) / up to 1,048,576 with long decode — verified from the official model page and the "What's new" doc (resolves the previously conflicting 64K/256K/1M output reports). Billing note: from 2026-11-13, completions longer than 32K tokens are billed for retrievable usage even if the request times out.
- **Modalities:** In: text, image, video, audio, PDF (PDF tokens billed at the image rate; agentic video understanding defaults to `static`). Out: text only. Reasoning: yes (tunable thinking levels low/medium/high, default `medium`). Tool calls: yes (function calling, code execution, computer use, file search, URL context, Search grounding — 5,000 free queries/mo then $14/1k — and Google Maps grounding). Structured outputs (JSON): supported. Image/audio generation: not supported. Live API: not supported. Caching: implicit only (explicit caching unsupported; implicit discount 95%). Batch, Flex and Priority inference supported.
- **Pricing (as of 2026-11-01):** Introductory, through 2026-11-30: $2.00 in / $10.00 out (incl. thinking tokens) / $0.10 cached per 1M. From 2026-12-01 the price doubles: $4.00 / $20.00 / $0.20 per 1M (verified on the official pricing page, 2026-10-29 revision). Batch = −50%; Priority ≈ 1.8× ($3.60/$18 → $7.20/$36); Vertex non-global endpoints +10%; Vertex promo credit of 50% back on net provisioned-throughput spend through Nov 30. No free tier; paid-tier content is not used to train Google's products. Artificial Analysis currently lists the $4/$20 standard price.
- **Architecture:** Proprietary, Google-cloud-only; parameter count not disclosed (reported as sparse MoE); tunable thinking (default `medium`); ~82.9 output tok/s on Artificial Analysis (faster than the 81 median) with above-median verbosity (110M tokens across the Intelligence Index vs 70M median).

### Raw benchmarks found

Agent / tool use:

- Vals Index (**group**): **68.9%** — #1 of the frontier set (Vals AI; independently confirmed 68.90 ±0.97, rank 1)
- AutomationBench (Zapier): **51.3%** — #1 (Zapier leaderboard, private set; vs Opus 5.5 42.5%, GPT-6 Astra 41.4%)
- Vals Finance Agent v2: **65.4%** — #1 (Vals AI; vs Opus 5.5 58.6%, Astra 53.5%)
- Harvey Legal Agent Benchmark: **19.6%** — #1, 3.6× the best rival (Vals AI; vs Astra 5.4%, Opus 5.5 3.8%)
- GDPval-AA: **56.2%** (AA-measured, via BenchGap aggregator)
- BFCL v4: **77.1%** (aggregator estimate, medium confidence)
- Terminal-bench 4.0: **57.4%** (Google self-computed) / **57.6% ±2.31** (Vals AI, high effort, mini-swe-agent) / **57.1%** (AA) — last of 4 in Google's table vs Opus 5.5 66.4%
- Terminal-Bench 2.1: no verified public score found — aggregator rows conflict (57.7% vs 85.9%); prefer the TB 4.0 three-source agreement
- Tau3-Banking: **49.3%** (AA run, aggregator-reported, low confidence); Tau2-Bench: no verified public score found
- Agents' Last Exam: **39.5%** — best of the compared set (Google self-computed; ALE-Claw harness, 5-hour window, safety filters on)
- OSWorld-2.0 (offline subset): **69.2%** — 2nd to GPT-6 Astra 72.6% (Google self-computed, best-of-3 runs)
- MCP Atlas: **83.5%** (aggregator estimate, low confidence)
- AA Agentic Index: **52.4%** (aggregator estimate, high confidence)

Reasoning / knowledge:

- GPQA Diamond: **96.4%** (Epoch AI, high effort, 198 questions, SE ±1.2, run 2026-10-13; #1 of 295 tracked configs)
- HLE: **57.1%** (Artificial Analysis, no tools, high effort; #5 on AA's board); HLE-Diamond (Scale SEAL): **53.2% ±3.07** (#3); HLE w/ tools ~70.6% (estimate only)
- ARC-AGI-1: **98.5%** Semi-Private (ARC Prize, verified, high and medium effort; #1 of 257)
- ARC-AGI-2: **91.3%** Semi-Private (ARC Prize, verified, high effort; medium 87.1%, low 42.1%)
- ARC-AGI-3 (RHAE metric): **46.3%** standard harness / **97.3%** provider-adapter (ARC Prize; harness-dependent, not comparable)
- LCR / MLCR: AA-LCR **79.7%** (high effort); no separate MLCR score found
- CritPt: **27.1%** (#34 on AA); CritPt v2 hard subset: **52.5%**
- FrontierMath v2: **86.0%** Tiers 1–3 / **78.0%** Tier 4 (Epoch AI, measured)
- OTIS Mock AIME 2024–25: **100%** (#1); LiveBench 2.0 Reasoning: **95.1%** (#1); SimpleQA Verified: **76.0%** (#1, Epoch); SciCode / AA-SciCode: **61.8%** (high effort, #5)
- Artificial Analysis Intelligence Index: **50** (AA model page, #13 of 58; AA data logs 50.4 measured) — notably slid from 53 (#8) in AA's mid-October refresh after re-baselining
- AA-Omniscience: accuracy **48.3%** / hallucination rate **15.1%** (AA, aggregator-reported)
- Scale AI SEAL: top-3 in 6 of 11 categories; calibration error 53.3 flagged (overconfidence risk)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found — Google does not report them (leads with DeepSWE instead); third-party estimates conflict widely (SWE-V 73.9%–93.6%; SWE-Pro 81.5% aggregator estimate vs 55.2% pre-GA TrustTheBench snapshot); Scale SEAL ranks Argon #2 on SWE-Bench Pro V2 (99.22 ±0.45, SEAL-normalized scale)
- LiveCodeBench: no verified public score found (aggregator estimates conflict: 79.8%–100%)
- DeepSWE v1.1: **77.9%** — claimed SOTA, +3.7 over best rival (Google self-computed, mini-swe-agent harness; rivals' numbers from their own leaderboards/system cards)
- Vibe Code Bench: **91.9%** — #1 (Vals AI, OpenHands harness, scored all four models)
- IOI: **100%** — #1 (Vals AI, of 46 configs)
- FrontierSWE v2: **55.0%** — last of 4 (Proximal leaderboard; vs GPT-6 Astra 65.5%, Opus 5.5 62.3%)
- Terminal-bench 4.0 (agentic coding): **57.4%** — last of 4 in Google's table (see above)
- PostTrainBench v1.1: **45.3%** — 2nd (Google, self-computed for all models; Opus 5.5 49.3%)
- LiveBench coding: **89.7%**
- CursorBench: **52.8%** (Cursor's own measurement at default effort, "on par with Opus 5.5"; aggregator CursorBench 4.0 estimate 49.8%)
- AA Coding Index: **77.5%** (aggregator estimate, low confidence)

Long context:

- GraphWalks BFS (F1): **99.7%** at ≤128K; **84.2%** at 256K–1M (Google self-computed for all four models; best in table, +12.4pp over GPT-6 Astra at 256K–1M)
- MRCRv2: **85.7%** (aggregator estimate, low confidence); OpenAI-MRCR 80.6% (TrustTheBench pre-GA snapshot, 2026-09-12)
- RULER: **88.3%** (TrustTheBench independent snapshot dated 2026-09-12 — pre-GA, treat as provisional)
- AA-LCR: **79.7%**
- Verified window: 1,048,576 tokens unified, with long-decode output up to 1,048,576 (official docs — the measurement-relevant fact is best-in-class retrieval at the 256K–1M band)

Multimodal understanding:

- Chartography: **71.6%** — #1 (Surge leaderboard)
- LVBench (long video): **91.7%** — #1 (Google self-computed; caveat: Argon sampled 1 FPS vs 300–800 frames given to rivals due to API limits)
- ERQA (Embodied Reasoning): **87%** — #1 claim (Google)
- Scale AI Humanity's Sixth Sense: **55.4% ±4.2** — #1 of 29 (vs GPT-6 Astra 53.6%; humans 93.1%): images 62.8% (first model over 60%), long video >10 min 59.1% (no other model above 41%), but short video 43.0% vs Astra 56.4%, video overall 46.2% vs Astra 51.1%, Theory-of-Mind weakest at 39.2%
- AA-MMMU-Pro: **86.4%** (aggregator estimate, medium confidence)

### Normalized scores (1–100)

- **Tool use: 92/100.** Leads the frontier set on Vals Index (68.9%, #1), Zapier AutomationBench (51.3%, #1), Vals Finance Agent v2 (65.4%, #1) and Harvey Legal (19.6%, 3.6× best rival), with best-of-table Agents' Last Exam (39.5%) and strong GDPval-AA (56.2%); capped by last place on Terminal-bench 4.0 (57.4%), OSWorld-2.0 behind GPT-6 Astra (69.2% vs 72.6%) and a middling AA Tau3-Banking (~49.3%).
- **Reasoning: 93/100.** GPQA Diamond 96.4% (Epoch, #1 of 295), ARC-AGI-1 98.5% and ARC-AGI-2 91.3% (ARC Prize-verified), LiveBench reasoning 95.1% (#1), FrontierMath v2 Tiers 1–3 86.0% and HLE 57.1%; capped by the AA Intelligence Index at 50 (#13 of 58 after AA's re-baseline), CritPt 27.1% and mid-pack HLE/SEAL-HLE-Diamond (53.2%).
- **Context window: 95/100.** Verified 1,048,576-token unified window with long-decode output up to 1M (official docs) and best-in-class measured retrieval — GraphWalks 99.7% ≤128K and 84.2% at 256K–1M, +12.4pp over the best rival; capped by the shared 1M platform ceiling (2M-context rivals exist per aggregators) and only aggregator-grade MRCR/RULER numbers (85.7%/88.3%).
- **Multimodal: 88/100.** Full multimodal input (image/video/audio/PDF) and leads every disclosed multimodal benchmark — Chartography 71.6%, LVBench 91.7%, ERQA 87%, plus Scale HSS #1 at 55.4% with the first >60% image score (62.8%); capped by text-only output (no image/audio generation), weak HSS short-video (43.0%) and Theory-of-Mind (39.2%), and the LVBench 1-FPS sampling caveat.
- **Coding: 88/100.** SOTA DeepSWE v1.1 (77.9%), #1 Vibe Code Bench (91.9%, clean four-model Vals harness) and IOI 100%, plus LiveBench coding 89.7%; capped by last-of-4 FrontierSWE v2 (55.0%) and Terminal-bench 4.0 (57.4%) — an even 2–2 agentic-coding split vs peers — and by the absence of any verified SWE-bench Verified/Pro or LiveCodeBench number.
- **Cost efficiency: 60/100.** Paid-only (no free tier): intro $2/$10 per 1M (cached $0.10) through 2026-11-30 doubles to $4/$20 ($0.20) on 2026-12-01 — genuinely good value during intro, but bottom-decile at standard price (AA cost rank #50 of 57, $7.68 per Intelligence-Index task) with above-median verbosity (110M vs 70M tokens) inflating real spend.
- **Overall Score: 91/100.** (92 + 93 + 95 + 88 + 88) / 5 = 456/5 = 91.2 → 91. Best-fit recommendation: the default frontier pick for enterprise deep-work agents (finance/legal/tax), long-context retrieval and multimodal understanding; for pure long-horizon terminal coding, FrontierSWE/Terminal-Bench-stronger rivals (GPT-6 Astra, Claude Opus 5.5) still hold the edge — and budget for the December 1 price doubling.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Argon — Model Card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Gemini 4 Argon is now available for everyone (Google blog, GA announcement 2026-10-13)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)
  - [Gemini 4 Argon — Gemini API model page (ai.google.dev)](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)
  - [Gemini Developer API pricing (ai.google.dev, 2026-10-29 revision)](https://ai.google.dev/gemini-api/docs/pricing)
  - [Gemini 4 Argon (High) — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Gemini 4 Argon Benchmarks: All 19 Rows, How Google Ran Them, and the 5 It Loses (Apidog independent audit)](https://apidog.com/blog/gemini-4-argon-benchmarks/)
