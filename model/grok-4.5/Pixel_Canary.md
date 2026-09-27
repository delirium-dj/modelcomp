# Grok 4.5 — findings by Pixel Canary

- Source: xAI / Grok 4.5 (`grok-4.5`, routers list `grok-4-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 — xAI's mid-2026 model for coding, agentic tasks and knowledge work, trained alongside Cursor on tens of thousands of NVIDIA GB300 GPUs with large-scale RL aimed at multi-step software engineering.
- **Short description:** The cheapest "real frontier" endpoint in the cohort: GPQA 93.00% and SWE-Bench Pro 64.70% at $2 / $6 per 1M and 80 tok/s, but an LLMBoard composite (74.8) well below Claude Opus 5.5 (100.0) and GPT-5.6 Sol (89.0).
- **Provider / access:** xAI API (`grok-4.5`); 26 tracked offerings incl. Pioneer, Abacus, 302.AI, Opper at list, OrcaRouter (cheapest third-party $2 / $6), Venice AI `grok-4-5` at $2.27 / $6.80.
- **Release / knowledge:** released 2026-07-16; knowledge cutoff 2026-02-01 (LLMBoard specification block).
- **IDs:** `grok-4.5`, `grok-4-5` (Venice). No Free ID — paid only.
- **Context window:** 500,000 input tokens; max output **not published** by any source consulted (LLMBoard lists Max Output N/A) — no verified public figure.
- **Modalities:** text + image in; text out. Reasoning, function calling and structured outputs supported; no audio/video input, no image or audio generation.
- **Pricing (as of 2026-09-27):** official xAI $2 / 1M input, $6 / 1M output; Venice AI $2.27 / $6.80; cheapest third-party route $2 / $6 (OrcaRouter). Cache-read and batch discounts not published for this ID (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations Aug 24 → 2026-09-27): 30 of 41 rows published, coverage **80% / 12 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **74.8**.

Agent / tool use:

- AutomationBench-AA: **51.40%** (#1/1 — single-entry field, treat cautiously)
- Tau3 Banking (multi-turn tool/Policy agent): **33.00%** (#3/11)
- DeepSWE 1.0: **62.00%** (#1/1); DeepSWE (main table): **53.00%** (#9/13)
- SWE-Marathon: **29.00%** (#5/6) — long-horizon repo work is its weakest agentic result
- LM Arena Agent Tool Hallucination: **0.36%** (#6/39 — low = good); Bash Recovery Steps **6.14%** (#9/39); Steerability **4.30%** (#10/39)
- GDPval-AA, OSWorld 2.0, Terminal-Bench 2.1 / 4.0, τ²-Bench, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA: **93.00%** (#10/250) — genuinely frontier-level science QA
- Artificial Analysis Intelligence Index: **54** (#5/8 in the tracker's AA pool)
- AA-Omniscience Index: **126.00 points** (#1/3); OmniScience **52.00%** (#2/3), non-hallucination rate **46.00%** (#1/1) — anti-hallucination remains weak in absolute terms
- LM Arena Search: **1212.65** (#7/28); Search Factuality **1216.10** (#5/28); Search Style Control **1202.41** (#8/28)
- HLE / MMLU-Pro / AIME / CritPt for this ID: no verified public score found

Coding:

- SWE-Bench Pro: **64.70%** (#7/59) — solid but ~25 points behind Claude Opus 5.5's 89.90%
- DeepSWE **53.00%** (#9/13), DeepSWE 1.0 **62.00%** (#1/1), SWE-Marathon **29.00%** (#5/6)
- SWE-bench Verified / LiveCodeBench / Terminal-Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; only the 500K window is verified (max output unpublished).


### Normalized scores (1-100)

- **Tool use: 78/100.** Tau3 Banking 33.00% (#3/11) and near-zero LM Arena Agent Tool Hallucination (0.36%) show it follows policy and rarely invents calls, but DeepSWE 53.00% (#9/13) and SWE-Marathon 29.00% (#5/6) show long horizons collapse, and Bash recovery (6.14%, #9/39) is weak.
- **Reasoning: 80/100.** GPQA 93.00% (#10/250) is frontier-tier science, yet the Artificial Analysis Intelligence Index is only 54 (#5/8) and OmniScience 52.00% with a 46.00% non-hallucination rate - strong recall of science facts, unreliable on open-world facts.
- **Context window: 76/100.** A 500K window is half the 1M frontier and max output is unpublished for this ID, so long-output agent loops cannot be planned; no retrieval benchmark exists.
- **Multimodal: 66/100.** Text + image input only, and no vision benchmark (MMMU-Pro, Chartography, arena Vision) is published for this ID - image ability is assumed, not measured.
- **Coding: 80/100.** SWE-Bench Pro 64.70% (#7/59) and DeepSWE 1.0 62.00% are respectable for a $6-output model given the Cursor-trained RL, but SWE-Marathon 29.00% (#5/6) says it does not sustain marathon repos.
- **Cost efficiency: 90/100.** $2 / $6 per 1M with 80 tok/s output and 26 competing providers - the best price-performance ratio in this cohort; docked for no published cache/batch discounts and no free tier.
- **Overall Score: 76/100.** Half-up mean of (78 + 80 + 76 + 66 + 80) = 380 / 5 = 76.0, Cost excluded. Cross-check: the independent LLMBoard composite for this model is 74.8, so this estimate sits inside 1.5 points of an unrelated methodology. Best fit: high-volume agentic coding and search-heavy tool loops where throughput and price dominate.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** - 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables); no peer `model/` findings were read - only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Runtime: **80.0 tok/s** on xAI — the fastest endpoint measured in this cohort (Claude Fable 5.1 is 7.4, Opus 5.5 is 17.24); catalog latency not reported.
