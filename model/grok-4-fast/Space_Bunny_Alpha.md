# Grok 4 Fast — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-4-fast-reasoning` / `xai/grok-4-fast-non-reasoning`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** SpaceXAI's September 2025 cost-efficiency breakthrough — a single model that reaches roughly Grok 4 benchmark quality while using 40% fewer thinking tokens and cutting the price of frontier-level performance by 98%, with a 2M-token window and native web/X search. It is still the price-to-intelligence benchmark-setter of its generation, and it was the first xAI model opened to free users without restriction.
- **Provider / access:** xAI API — `https://api.x.ai/v1/chat/completions` (Chat Completions), plus OpenRouter and the Vercel AI Gateway. Also grok.com, X, and the iOS/Android apps, where it powers "Fast" and "Auto" modes and is free for all users including free-tier accounts.
- **Release / knowledge:** announced 2025-09-19 (xAI news index; Benchable dates the endpoint 2025-09-18). Knowledge cutoff not published.
- **IDs:** `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning` — two SKUs from one weight set; the search-tuned variant is code-named **menlo** and appears in LMArena as `grok-4-fast-search`. **No OpenCode Zen Free ID exists**; cost is scored on xAI's paid pricing.
- **Context window:** **2,000,000 tokens** for both SKUs, stated directly in the launch post and confirmed by the endpoint registry.
- **Modalities:** text in, text out is the launch baseline; the endpoint registry additionally lists **image and file input**. Notably, xAI's own post lists "enhanced multimodal capabilities" as *future* work, so image handling was available but not yet a headline integration. Reasoning is **not** a separate model — one unified architecture handles long chain-of-thought and instant non-reasoning responses, steered by system prompt. Function calling / tool use yes, with tool-use reinforcement learning end-to-end; code execution and web/X search are first-class tools.
- **Pricing (as of 2026-09-25):** under 128K prompt tokens — $0.20 / 1M input, $0.50 / 1M output; at or above 128K tokens — $0.40 / 1M input, $1.00 / 1M output; cached input $0.05 / 1M. Free on the consumer products.
- **Architecture:** proprietary; parameter count not disclosed. Unifies reasoning and non-reasoning modes in a single weight set to cut end-to-end latency and token cost.

### Raw benchmarks found

> All figures are xAI's own launch table (2025-09-19, pass@1), reproduced with the comparison columns it published. Harness = xAI's internal evaluation; the price-to-intelligence claim is independently verified by Artificial Analysis.

Agent / tool use:

- BrowseComp: **44.9%** (Grok 4 43.0%, Grok 3 non-reasoning —)
- BrowseComp (zh): **51.2%** (Grok 4 45.0%, Grok 3 10.8%)
- Reka Research Eval: **66.0%** (Grok 4 58.0%, Grok 3 37.0%)
- X Bench Deepsearch (zh): **74.0%** (Grok 4 66.0%, Grok 3 27.0%)
- X Browse: **58.0%** (Grok 4 53.2%, Grok 3 20.8%) — xAI's internal multihop search/browsing benchmark
- SimpleQA: **95.0%** (Grok 4 94.0%, Grok 3 82.0%)
- LMArena **Search Arena**: **1163 Elo, #1** for `grok-4-fast-search` (codename menlo) — a 17-point margin over `o3-search`, after private battle-testing on the Search arena
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (Grok 4 87.5%, GPT-5 High 85.7%, GPT-5 Mini High 82.3%, Grok 3 Mini High 79.0%)
- AIME 2025 (no tools): **92.0%** (Grok 4 91.7%, GPT-5 High 94.6%, GPT-5 Mini High 91.1%, Grok 3 Mini High 83.0%)
- HMMT 2025 (no tools): **93.3%** (Grok 4 90.0%, GPT-5 High 93.3%, GPT-5 Mini High 87.8%, Grok 3 Mini High 74.0%)
- HLE (no tools): **20.0%** (Grok 4 25.4%, GPT-5 High 24.8%, GPT-5 Mini High 16.7%, Grok 3 Mini High 11.0%)
- Artificial Analysis Intelligence Index: no numeric score published for Grok 4 Fast itself; AA **verified** its state-of-the-art price-to-intelligence ratio (a qualitative verification, not a score)
- CritPt / LCR / MRCR / Omniscience: no verified public score found

Coding:

- LiveCodeBench (Jan–May 2025 window): **80.0%** (Grok 4 79.0%, GPT-5 High 86.8%, GPT-5 Mini High 77.4%, Grok 3 Mini High 70.0%)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:


### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 88/100.** A #1 LMArena Search Arena finish at 1163 Elo (+17 over o3-search) plus BrowseComp 44.9%, BrowseComp-zh 51.2%, Reka Research Eval 66.0% and X Bench Deepsearch 74.0% measure exactly the retrieve-decide-act loop this dimension rewards, and the model was trained end-to-end with tool-use RL; capped at 88 because the evidence is entirely about *search and browsing* — no Terminal-Bench, τ-bench, Toolathon, MCP-Atlas or Claw-Eval number is published, so terminal and enterprise-workflow tool use is unmeasured.
- **Reasoning: 82/100.** AIME 2025 at 92.0% and HMMT 2025 at 93.3% are near-frontier and GPQA Diamond 85.7% matches GPT-5 High, comfortably above the methodology's "GPQA 60–80% → 55–65" mid band; held at 82 rather than higher because HLE (no tools) is only 20.0%, well short of the 40%+ frontier reference, and no Artificial Analysis index, CritPt or LCR figure was ever published for this model.
- **Context window: 96/100.** The 2,000,000-token window is stated in the launch post and confirmed by the endpoint registry, clearing the ≥1M tier that maps to 95–100; held at 96 because no retrieval-at-length number (≥98% at 512K+) is published.
- **Multimodal: 66/100.** The endpoint registry lists image and file input with text-only output, which is the "+image input" 60–70 band; scored a notch below the other image-capable models in this set because xAI's own post lists "enhanced multimodal capabilities" as future work, so image input was available but not a finished integration.
- **Coding: 72/100.** LiveCodeBench 80.0% (Jan–May 2025) is a real above-mid code-generation result, essentially matching Grok 4's 79.0% at a fraction of the price; capped at 72 because no SWE-bench Verified, DeepSWE or SciCode figure exists and the model is a search-and-efficiency design rather than a coding specialist.
- **Cost efficiency: 99/100.** $0.20 in / $0.50 out below 128K tokens with a $0.05 cached-input rate, a state-of-the-art price-to-intelligence ratio independently verified by Artificial Analysis, a 98% price cut to reach Grok 4-level performance using 40% fewer thinking tokens, and free access for every consumer user; held at 99 rather than 100 because the API is a paid tier and prompts at or above 128K double the rate.
- **Overall Score: 80.8/100.** Mean of the five non-cost dims (88 + 82 + 96 + 66 + 72) / 5 = 80.8 — the most cost-efficient frontier-adjacent model of its generation, best fit for very high-volume search, deep-research and light-coding agent loops where a 2M window at $0.20/$0.50 changes the unit economics of the whole application.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny-alpha)** — 2026-09-25
- Method: public internet research (xAI's "Grok 4 Fast" launch post with its full pass@1 benchmark tables, the xAI news index, and the Benchable endpoint registry). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.

- No long-context retrieval benchmark reported (no MRCR / RULER / GraphWalks row). The 2M window is stated in the launch post; no measured retrieval figure at 512K+ is published, though the 40%-fewer-thinking-tokens result is direct evidence of unusually efficient use of a long context.
