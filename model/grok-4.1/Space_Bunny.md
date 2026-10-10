# Grok 4.1 — findings by Space Bunny

- Source: SpaceXAI/xAI (`xai/grok-4.1-fast`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 76.0 → 69.2.** The prior pass was built almost entirely on **launch-era preference and endpoint-registry evidence** and explicitly recorded that "no GPQA Diamond, HLE, CritPt or Artificial Analysis index number exists." Artificial Analysis has now run the endpoint directly, and every one of those gaps is filled: **AA-Intelligence Index 20.4**, **GPQA Diamond 85.3%**, **HLE 19.3%**, **CritPt 2.9%**, and an **Omniscience Hallucination Rate of 73.4%** with an Index of **−29.9%**. Two strong new results and three weak ones: **τ²-bench 93.3%** is the best agentic score in this batch, while **Vibe Code Bench 1.20%**, **IFBench 52.7%**, and **ResearchClawBench 13.5%** are near-floor. Restated: **Tool 75 → 72**, **Reasoning 75 → 62**, **Context 96 → 92**, **Multimodal 67 → 70**, **Coding 67 → 50**, **Cost 99 → 96**.

## Model card

- **Name:** Grok 4.1 (thinking / non-thinking modes; API endpoint `grok-4.1-fast`)
- **Short description:** SpaceXAI's November 2025 flagship consumer model, built on the *same* large-scale RL infrastructure as Grok 4 but retargeted at style, personality, helpfulness and alignment rather than new raw capability. **xAI's positioning as its best agentic tool-calling model is now substantially vindicated — τ²-bench 93.3% — while its reasoning and coding are at the bottom of its own generation.**
- **Provider / access:** xAI API — `grok-4.1-fast` (`https://api.x.ai/v1/chat/completions`, Chat Completions) with reasoning toggled per request; also grok.com, X, and the iOS/Android apps. The dedicated docs page has since been retired from the xAI model index; Artificial Analysis tracks the endpoint as **Grok 4.1 Fast (Reasoning)**, with a separate non-reasoning sibling at a materially lower composite (36.37).
- **Release / knowledge:** announced **2025-11-17** (xAI news index lists 2025-11-19); endpoint released 2025-11-19 after a silent rollout on production traffic (2025-11-01 → 11-14). **Knowledge cutoff still not published** — an unchanged gap.
- **IDs:** `grok-4.1-fast`; OpenRouter-style `x-ai/grok-4.1-fast`. Internal code names **quasarflux** (thinking) and **tensor** (non-thinking, zero thinking tokens). Consumer name "Grok 4.1". **No OpenCode Zen Free ID exists.**
- **Context window:** **2,000,000 tokens**, verified on the xAI endpoint registry (Benchable) and in the model description. **Note a live conflict:** BenchLM's Grok 4.1 Fast (Reasoning) page lists **2M**, while its Grok 4.1 base page lists **1M**. The 2M figure is carried, sourced to the endpoint registry and the vendor description. **AA-LCR at 74.0%** is the first measured retrieval-at-length result.
- **Modalities:** image, text and file in, text out; reasoning **optional**; function calling yes; structured outputs (JSON mode) yes; `logprobs`/`top_logprobs` supported on this pre-`grok-4.20` generation.
- **Pricing (verified 2026-10-10):** **$0.20 / 1M input, $0.50 / 1M output, $0.05 / 1M cached input** — unchanged. Free for all users including free-tier accounts on grok.com, X and the mobile apps.
- **Architecture:** proprietary; parameter count not disclosed. Same RL stack as Grok 4, with frontier agentic models used as reward models to optimise non-verifiable style/alignment signals.

### Raw benchmarks found

**Independent — new this pass (Artificial Analysis, run directly on `grok-4-1-fast-reasoning`):**

Agent / tool use:

- **τ²-bench: 93.3%** — *the strongest agentic score recorded for any model in this batch*
- **IFBench: 52.7%** — *the model drifts from instructions roughly half the time*
- **ResearchClawBench: 13.5%** (ResearchClawBench leaderboard) — *deep-research agent performance with tools, code execution and a file-system workspace; very poor*

Reasoning / knowledge:

- **AA-Intelligence Index: 20.4**; **GPQA Diamond: 85.3%**; **HLE: 19.3%**; **CritPt: 2.9%**
- **AA-Omniscience Index: −29.9%**; **Accuracy: 25.1%**; **Hallucination Rate: 73.4%**
- **AA-LCR: 74.0%** — first exact-model long-context retrieval measurement

Coding:

- **Vibe Code Bench v1.1: 1.20%** (Vals AI) — near-zero

Multimodal:

- **AA-MMMU-Pro: 63.3%** — first measured visual-reasoning result for this model

**Carried from the prior pass (still accurate, and now contextualised):**

- LMArena Text Arena **1483 Elo, #1 overall** in thinking mode (quasarflux); **1465 Elo, #2** in non-reasoning mode. Grok 4 ranked #33 on the same board.
- Blind pairwise preference on live production traffic: **64.78%** preferred over the previous production model
- Benchable battery: General Knowledge **99.5%**, Mathematics **82.0%**, Reasoning **76.0%**, Coding **75.0%**, instruction-following **73.7%**, tool-using success **94% reliability over 8 benchmarks**
- **Hallucinations (Baseline): 0.0%** — the registry reads this as a complete failure to acknowledge uncertainty. **The AA hallucination rate of 73.4% independently confirms the concern.**
- BenchLM composites: **Grok 4.1 Fast (Reasoning) 46.31, #115 of 889**; **Grok 4.1 Fast (non-reasoning) 36.37**; the base `Grok 4.1` entry is **unranked**, with ResearchClawBench 13.5% its only source-displayable row.

**Still absent:** SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode, DeepSWE, Terminal-Bench 2.0/2.1, GDPval-AA, Toolathlon, MCP-Atlas, Claw-Eval.

**xAI family comparison (BenchLM):** Grok 4.6 **67.92** · 4.5 **64.22** · 4.20 **57.33** · 4.3 **53.59** · 4 **51.96** · **4.1 Fast Reasoning 46.31** · 3 Mini **44.80** · 4 Fast Reasoning **43.64** · **4.1 Fast 36.37**. **Grok 4.1 ranks below Grok 4.3, Grok 4, and even below Grok 4 Fast, three generations of product newer than it.**

Sources consulted: [BenchLM Grok 4.1 Fast (Reasoning), updated 2026-10-10](https://benchlm.ai/models/grok-4-1-fast-reasoning), [BenchLM Grok 4.1 base entry](https://benchlm.ai/models/grok-4-1), [Artificial Analysis Grok 4.1 Fast Reasoning](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning), [Vals AI Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code), and [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 72/100.** Down from 75. **τ²-bench at 93.3%** is the headline and it is genuinely excellent — the best agentic result measured for any model in this batch, and it substantiates xAI's "best agentic tool calling model" positioning with a measurement rather than a marketing claim. The score does not go higher because that strength is **narrow**: **IFBench 52.7%** shows the model will silently disregard about half its explicit constraints, and **ResearchClawBench at 13.5%** shows deep-research agent performance with code execution and a file-system workspace is very poor. A model that excels on one tool domain while ignoring half its instructions and failing at autonomous research is a specialist, not a general agentic workhorse.
- **Reasoning: 62/100.** Down from 75. **GPQA Diamond 85.3%** is strong and the LMArena **#1 finish at 1483 Elo** was a real result, so this is not a weak model on its face. But the reliability data is decisive: **Hallucination Rate 73.4%**, **Omniscience Index −29.9%**, **Accuracy 25.1%**, **CritPt 2.9%**, **HLE 19.3%**, **Intelligence Index 20.4**. **The prior pass's own `Hallucinations (Baseline): 0.0%` reading — a complete failure to acknowledge uncertainty — is now corroborated by an independent 73.4% hallucination rate.** The model states wrong answers confidently, and its preference-leadership tuning does not make it more truthful. The LMArena result measures *style and helpfulness preference*, which is exactly what this model was tuned for and exactly what these benchmarks do not measure.
- **Context window: 92/100.** Down from 96. The **2,000,000-token window** is verified at the endpoint level and clears the ≥1M tier. Two things temper it: **BenchLM's own pages conflict** (2M on the reasoning entry, 1M on the base entry), and **AA-LCR at 74.0%** — the first real retrieval measurement — is moderate rather than strong. **No MRCR, RULER, or GraphWalks figure exists.**
- **Multimodal: 70/100.** Up from 67. **MMMU-Pro at 63.3%** is the first measured visual-reasoning result for this model and places it mid-tier, above Grok 4 Fast's 61.8% but well below the 73–77% of Google's Flash line. Image, text and file input with text-only output; **no video or audio input, no non-text output, and this remains the only vision benchmark available.**
- **Coding: 50/100.** Down from 67. **Vibe Code Bench at 1.20%** is effectively zero — a model that cannot drive an open-ended coding session at all. This is corroborated by **ResearchClawBench 13.5%**, a different long-horizon agentic benchmark that fails for the same reason. The only positive code figure anywhere in the evidence is **Benchable's Coding 75.0%**, a proxy-level battery score, and xAI's own launch post is explicitly about creative and collaborative interaction rather than software engineering. **No SWE-bench, LiveCodeBench, SciCode, or DeepSWE result has ever been published.** The prior 67 rested on that single proxy; with two near-floor agentic results now measured, it cannot stand.
- **Cost efficiency: 96/100.** Down from 99. **$0.20 / $0.50 with $0.05 cached input** is unchanged and remains among the cheapest frontier-adjacent prices in this dataset, and the consumer products are free. The reduction is about **eroded value, not cost** — at this price the model competes with GLM 5.3 Flash ($0.15/$0.50), DeepSeek V4.1 Flash ($0.30/$1.20), and several models that are free outright and score higher on nearly every dimension. The model is no longer the price-to-intelligence leader it was in November 2025.
- **Overall Score: 69.2/100.** (72 + 62 + 92 + 70 + 50) / 5 = 346 / 5 = 69.2, down from 76.0. **Best fit: a narrow, high-volume customer-support or telecom-flavoured tool loop where its τ²-bench 93.3% genuinely shows, at $0.20/$0.50 with a 2M window.** That is a real and specific fit. **Four hard limits.** First, **73.4% hallucination rate** — never trust a factual assertion from it and never use it as a pipeline's verifier. Second, **IFBench 52.7%** — it will ignore constraints, so encode them in code rather than prose. Third, **Vibe Code Bench 1.20% and ResearchClawBench 13.5%** — it is not an autonomous agent of any kind. Fourth, and decisively, **do not adopt.** It ranks below Grok 4.3 and Grok 4 on BenchLM, and below Grok 4 Fast — a model released a full year earlier — at 46.31 vs 43.64 is the wrong side of that comparison too. The #1 LMArena finish that made this model famous measures conversational preference, and that is a genuinely useful thing; it is not evidence of accuracy, agency, or coding.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis's Grok 4.1 Fast Reasoning benchmark rows, BenchLM's Grok 4.1 Fast (Reasoning) and base Grok 4.1 pages, Vals AI's Vibe Code Bench v1.1 leaderboard, the ResearchClawBench leaderboard, and xAI's Grok 4.1 launch post and endpoint registry; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior report's evidence base was preference data, and this pass separates preference from capability.** Its Reasoning score of 75 rested on an LMArena **#1 finish at 1483 Elo** plus a Benchable battery; it explicitly noted that "no GPQA Diamond, HLE, CritPt or Artificial Analysis index number exists." All four gaps are now filled, and they are poor. **The prior report's own `Hallucinations (Baseline): 0.0%` observation — read then as "a caveat, not a capability" — is now corroborated by an independent 73.4% hallucination rate and is treated as decisive.** Conversely, **τ²-bench 93.3% is credited as the strongest agentic result in this batch** and confirms xAI's positioning claim; the report does not only move downward. **Coding 67 → 50 is a correction of a prior proxy-based score**: Benchable's 75.0% coding battery figure is retained but cannot outweigh Vibe Code Bench 1.20% and ResearchClawBench 13.5%. **Two unresolved conflicts are carried rather than resolved:** BenchLM lists 2M context on the reasoning entry and 1M on the base entry, and BenchLM assigns the base `Grok 4.1` no composite while assigning its `Grok 4.1 Fast` variants 46.31 and 36.37 — this report scores the documented reasoning endpoint. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Grok_4_1_Recheck.md`, using the same headings.