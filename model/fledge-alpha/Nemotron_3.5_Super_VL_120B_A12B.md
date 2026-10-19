# Fledge Alpha — findings by Nemotron 3.5 Super VL 120B A12B

- Source: stealthmodels.com/fledge-alpha (specs + StealthMark SVG benchmarks), stealthmodels.com/benchmarks/models/fledge-alpha (StealthMark leaderboard), fellipesoares.com.br (OpenCode stealth models 5-benchmark suite), opencode.ai/data/unknown/fledge-alpha (usage/cost/rank), opencode.ai/data/compare pages (vs GPT-5.6 Luna, Ling 3.0 Flash Fin, GLM-5.3, Kimi K3), models.sulat.com (model info), blog.anyrouter.dev (AnyRouter release note), openvibeeval.com/models/fledge-alpha (accessibility eval)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (stealth / fledge-alpha-free)
- **Short description:** Free stealth preview reasoning model released on OpenCode Zen 2026-10-01, text+image in → text out, tool calling, reasoning effort low/high/max, 1M-token listed context, 131,072-token max output, ~61 output tokens/s. Identity undisclosed ("likely a router" per stealthmodels.com — varying input-token counts for identical prompts suggest shifting underlying models). Preview discontinued/removed from OpenCode Zen (~2026-10-11); no confirmed replacement endpoint.
- **Provider / access:** OpenCode Zen (`opencode/fledge-alpha-free`, free shared pool, rate-limited); AnyRouter BYOK mirror (`stealth/fledge-alpha`, $0/$0 via Novita or OpenRouter). No OpenRouter/Nous native listing.
- **Release / knowledge:** Released 2026-10-01; discontinued ~2026-10-11. Knowledge cutoff undisclosed.
- **IDs:** `fledge-alpha` (OpenCode/OpenCode Data), `fledge-alpha-free` (OpenCode Zen), `stealth/fledge-alpha` (AnyRouter). No HF repo.
- **Context window:** 1,048,576 tokens (listed; stealthmodels.com, models.sulat.com, AnyRouter). Unverified against public retrieval benchmarks.
- **Modalities:** Text + image in, text out (multimodal — image confirmed); text-only reasoning not confirmed otherwise.
- **Reasoning:** yes (selectable low / high / max effort).
- **Tool calls:** yes.
- **Structured output / JSON:** not explicitly advertised.
- **Pricing (as of 2026-10-16):** $0 / $0 / $0 cache (free stealth preview); access via subscription or BYOK on AnyRouter.
- **Architecture:** Undisclosed; no lab, parameter count, or MoE/dense info published.

### Raw benchmarks found

StealthMark (stealthmodels.com, SVG-based fluid/visual intelligence, anti-tuning):

- StealthMark Overall: **35.5 / 100**, rank 31/43 (7 rated results)
- StealthMark General Intelligence: **27.2 / 100**
- StealthMark Visual Intelligence: **45.5 / 100**

Fellipe Soares 5-benchmark suite (2026-10-04, vs Big Pickle / Space Bunny / DeepSeek V4.1 Flash / GLM-5.3-Flash references):

- Omniscience index: **−5** (negative — more wrong answers than right; worst of the five on factual QA, accuracy 37%, hallucination 67%)
- HLE (Humanity's Last Exam): **23%** (100 questions; 28 unanswered counted as wrong)
- SciCode: **52%** correct steps, **4 of 20** whole problems
- Terminal-Bench: **79%**
- SWE-Mini: **75%**
- Cost-equivalent $2.18 (at DeepSeek V4.1 Flash pricing)

StealthModels academic benchmarks (3 October 2026, 206 answered questions):

- GPQA Diamond: **92.0%** (92/100 correct, 95% CI: 85.0–95.9%) — vs Space Bunny 77.0% on same 100 questions
- MMLU-Pro: **92.0%** accuracy (reported in same block)

OpenVibeEval (accessibility/frontend eval, 8 runs 2026-10-03):

- Avg accessibility: **81/100**; individual runs 38–100 (Dashboard 38, CodeSense 100, Crypto Terminal 38, Digital Garden 96, Retro Arcade 100, Scroll Story 83, Vector Canvas 97)

OpenCode Data usage (past 2 months, discontinued):

- Peak ~427B tokens/2026-10-06, 5.4K unique users; dropped to 0 after ~2026-10-09 (discontinuation). Average cost/session $0.0000.

### Conflicting results noted

- **Identity:** "likely a router" hypothesis (stealthmodels.com) — identical tokenizer prompts yielded different input-token counts (7,536 vs 6,499), suggesting shifting underlying models; creator unknown.
- **GPQA/MMLU-Pro both 92.0%** appear in the same StealthModels block with no separate sourcing — treat as one claim.
- **HLE:** Fellipe Soares counts unanswered as wrong (23%); "if only answered counted, ~32%" — both noted; used the conservative all-questions figure.
- **Factual QA vs benchmark scores:** Fledge codes well (Terminal-Bench 79%, SWE-Mini 75%) but is worst on factual knowledge (Omniscience −5, hallucination 67%) — uneven profile.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Identity undisclosed / likely router → low confidence; model discontinued → treat as historical snapshot.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Terminal-Bench 79% and SWE-Mini 75% are solid; tool calling supported; but no public MCP Atlas/BrowseComp/TAU-bench scores and identity undisclosed.
- **Reasoning: 50/100.** GPQA Diamond 92.0% (strong) and MMLU-Pro 92.0% vs HLE 23% and Omniscience −5 with 67% hallucination — extremely spiky; StealthMark General Intelligence 27.2/100 low.
- **Context window: 75/100.** Listed 1M tokens; no public needle-recall/retrieval score to confirm effective window.
- **Multimodal: 46/100.** Image in confirmed; StealthMark Visual Intelligence 45.5/100 (rank ~mid) and OpenVibeEval accessibility mixed (38–100); no standard vision benchmarks (MMMU, ChartQA, etc.) found.
- **Coding: 70/100.** Terminal-Bench 79%, SWE-Mini 75%, SciCode 52% steps/4-of-20 whole; capped by SciCode whole-problem 4-of-20 and no LiveCodeBench/Codeforces/SWE-bench found.
- **Cost efficiency: 95/100.** Free ($0) stealth preview; not counted toward Overall.
- **Overall Score: 60.2/100.** Half-up mean of (60 + 50 + 75 + 46 + 70) / 5 = 60.2 → 60, but low confidence due to undisclosed identity/router hypothesis and discontinuation; treat as directional snapshot.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (stealthmodels.com specs + StealthMark + academic benchmarks + fellipesoares.com.br 5-benchmark suite + OpenCode Data usage + openvibeeval.com accessibility + AnyRouter release note); scores are normalized 1–100 interpretations, not official vendor scores. Identity undisclosed, likely a router, discontinued — low confidence.
- Future sources: if identity or new benchmarks surface, add a new file next to this one using the same headings.
