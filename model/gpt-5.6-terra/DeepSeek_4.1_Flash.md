# GPT-5.6 Terra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (no "Free" tier; a `gpt-5.6-terra` Zen ID exists as a paid model)
- **Short description:** OpenAI's balanced mid-tier entry in the GPT-5.6 family, released 2026-07-09. "Terra" is a permanent capability band between GPT-5.6 Sol (maximum capability) and GPT-5.6 Luna (lowest cost): as the generation improves, Terra advances alongside them. It scores within ~2 points of Sol on the two headline evals at half the price, making it OpenAI's recommended default for professional and agentic workloads.
- **Provider / access:** OpenAI API (Responses API, `@ai-sdk/openai` on Zen, `gpt-5.6-terra` → `https://opencode.ai/zen/v1/responses`); Azure OpenAI; also listed on OpenRouter (3 providers). Closed, API-only; no open weights.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff now stated as **February 2026** (revised from the earlier September 2025 estimate).
- **IDs:** `gpt-5.6-terra` (OpenAI); Zen alias `gpt-5.6-terra` routed through Zen's Responses endpoint.
- **Context window:** 1,100,000 input tokens (listed as 1.05M–1.1M; ≈1.6k pages) with a **128,000-token max output** — matching Sol's window. Verified from OpenAI's GPT-5.6 model docs and LLM Stats (last checked 2026-10-06).
- **Modalities:** text + image input; text output; reasoning yes — including the **max reasoning-effort tier** (revised: max effort is available on Terra, not Sol-exclusive as earlier recorded; only Sol's ultra tier is separate). Tool calls and structured output yes.
- **Pricing (as of 2026-10-06):** **$2.00 / 1M in** and **$12.00 / 1M out** via OpenAI — a material cut from the previously recorded $2.50 / $15.00. Cached input is **$0.20 / 1M** (a 90% discount); cache writes bill at 1.25× the uncached input rate. Prompts over 272K input tokens are priced at 2× input and 1.5× output for the full request. Paid only.
- **Architecture:** undisclosed (GPT-5.6 family); proprietary API-only.

## Raw benchmarks found

Agent / tool use:

- Agent's Last Exam (Benchgen's multi-step agentic evaluation): **50.4%** (Benchgen evaluation, 2026-07; Sol 52.7%)
- Terminal-Bench 2.1: **87.4%** (OpenAI GPT-5.6 model card) — below Gemini 3.8 Flash's 89.4%, above Claude Sonnet 5's 80.4%; Vals AI independently records **77.5%**
- Toolathlon: **53.1%** (OpenAI) — previously "no verified public score found"
- Tau2-Bench (τ²-bench): **86.3%** (Artificial Analysis) — previously "no verified public score found"
- GDPval-AA: **47.7% / 1583 Elo** (Artificial Analysis / OpenAI) — previously "no verified public score found"
- OSWorld 2.0 (agentic computer use): **50.2%** (OpenAI; behind Gemini 3.8 Flash's 59.0% and Sol's 62.6%)
- BrowseComp: **87.5%** (OpenAI)
- CyberGym: **81.8%** / ExploitGym: **23.2%** (OpenAI)
- AA Agentic Index: **43.7%**; AA ITBench: **51.0%**; APEX-Agents-AA: **38.9%**; ApprenticeBench: **16%**
- AutomationBench / Terminal-bench 4.0: **23.6%** (Google comparison table, via Vellum; behind Gemini 3.7 Flash's 30.4%); Terminal-Bench 3.0: **20.8%** (FrontierBench)
- Coding Agent Index: **77.4** (Benchgen card)
- Claw-Eval / ClawProBench / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- ARC-AGI-1: **96.5%** (ARC Prize verified, Terra at Max reasoning effort; Sol 97.5%, Luna 88.0%); ARC-AGI-2: **83.9%**; ARC-AGI-3: **0.8%** (ARC Prize)
- GPQA Diamond: **92.9%** (OpenAI); **92.5%** (Artificial Analysis); **90.9%** (Vals AI) — previously "no verified Terra-specific score found"
- HLE-Verified: **51.1%** (Google DeepMind Gemini 3.8 model card) / AA-HLE: **42.9%** — previously "no verified Terra-specific score found"
- AA-LCR (long-context reasoning): **83.0%**; CritPt: **30.0%** (Artificial Analysis) — both previously "no verified public score found"
- AA-Omniscience Accuracy: **46.8%**; Hallucination Rate: **87.9%** (Artificial Analysis) — previously "no verified public score found"
- MMLU-Pro (Vals): **86.7%**; AA-IFBench: **71.2%**; HealthBench Professional: **57.7%** / Hard: **32.7%**
- Artificial Analysis Intelligence Index: **55** (confirmed via OpenAI/AA)
- LABBench2: **81.2%** (Google DeepMind Gemini 3.8 model card)
- FrontierMath v2 Tiers 1-3: **84.9%**; FrontierMath v2 Tier 4: **68.3%** (OpenAI)
- BenchLM overall: **72.33/100, #14 of 882**; BenchLeader Index: **63.7 ±4.9, #62 of 751** at max reasoning effort

Coding:

- WebDev Arena: **1523 Elo** (third-party comparison; below Gemini 3.7 Flash 1588 and Claude Sonnet 5 1541)
- SWE-bench Pro: **63.4%** (OpenAI) — previously "no verified Terra-specific score found"
- DeepSWE v1.1: **69.6%** (OpenAI; Claude Opus 5 74.0%, Gemini 3.8 Flash 73.7%)
- LiveCodeBench (Vals): **85.9%**; SWE-bench (Vals): **95.4%**; AA Coding Index: **76.7%**
- SciCode: **55.0%**; CursorBench 3.2: **64.9%** / CursorBench 4.0: **41.3%**; FrontierCode 1.1 Extended: **55.8%**
- SWE-bench Verified: **no Terra-specific published number found** (Sol's shared number remains family-level)
- Multimodal: MMMU-Pro **80.7%** / **82%** with Python (OpenAI; AA 80.7%)
- Cost context from the vendor: cache reads at a 90% discount and cache writes at 1.25× make repeated long-context agent runs materially cheaper than the headline rate implies.

Long context:

- no MRCR/RULER/GraphWalks recall value published for Terra; the 1.1M window matches Sol's exactly. AA-LCR long-context reasoning is **83.0%**, the closest available recall-at-depth signal.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 at 87.4%, Toolathlon 53.1%, τ²-bench 86.3%, GDPval-AA 47.7% and a Coding Agent Index of 77.4 make it a strong production agent at half of Sol's price; OSWorld 50.2% and the still-missing Claw numbers are the caps.
- **Reasoning: 93/100.** 92.9% GPQA Diamond, 96.5% ARC-AGI-1, 83.0% AA-LCR and 51.1% HLE-Verified put it squarely in the flagship band; the earlier absence of Terra-specific GPQA/HLE values is now resolved.
- **Context window: 95/100.** 1.1M input / 128K output matching Sol exactly, with structured output and cache pricing that makes long-context agent loops economical; no recall-at-depth benchmark holds it below the maximum.
- **Multimodal: 82/100.** Text + image input with text output and a strong 80.7% MMMU-Pro; no audio, video or PDF-specific claims and no media generation cap it below the vision leaders.
- **Coding: 87/100.** SWE-bench Pro 63.4%, DeepSWE 69.6%, LiveCodeBench 85.9% and WebDev Arena 1523 are strong; the lack of a Terra-specific SWE-bench Verified result and a mid-pack web-dev Elo keep it below the coding leaders.
- **Cost efficiency: 76/100.** The cut to $2.00/$12.00 per 1M (from $2.50/$15.00) plus 90%-off cache reads and half-price Sol positioning are real value, though it is still ~2.7× Gemini 3.8 Flash and many× DeepSeek-V4-Flash on input.
- **Overall Score: 89/100.** (89 + 93 + 95 + 82 + 87) / 5 = 89.2 → **89** (Cost efficiency never enters Overall). Best fit: production agent and long-context workflows that want near-flagship OpenAI behaviour without paying Sol's premium.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (OpenAI GPT-5.6 model card and system card, BenchLM benchmark ledger, LLM Stats pricing/context page, OpenRouter model page, Artificial Analysis and Vals AI leaderboards, ARC Prize verified results, Google DeepMind Gemini 3.8 comparison table via Vellum); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
