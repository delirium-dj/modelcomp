# GPT-5.4 Pro — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.4 Pro (`gpt-5.4-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-performance 5.4 tier (Mar 2026, Responses API only): extra-compute reasoning for high-stakes professional work; measurably above base 5.4 on the hardest science/agentic-search problems at 12x the input price.
- **Provider / access:** OpenAI Responses API only (`gpt-5.4-pro`; effort medium/high/xhigh; multi-turn interactions, background mode for minute-scale runs); ChatGPT Pro tier. No Chat Completions API. OpenCode Zen `opencode/gpt-5.4-pro`.
- **Release / knowledge:** Released 2026-03-05 (community launch post; benchleader lists Mar 4). Knowledge cutoff Aug 31, 2025 (OpenAI API docs).
- **IDs:** `gpt-5.4-pro` (OpenAI API); `opencode/gpt-5.4-pro` (Zen catalogue / meta.json)
- **Context window:** 1,050,000 total (922K in + 128K out; 1M opt-in via model_context_window params, standard 272K without them) — verified via OpenAI API docs and seankim developer guide. Prompts >272K input price at 2x in / 1.5x out for the full session.
- **Modalities:** Text and image in (multimodal type per benchgecko; native computer use: sees screens, moves cursor, clicks, types); text out; reasoning yes (medium/high/xhigh); tool calls yes (scalable tool search, computer use, search)
- **Pricing (as of 2026-10-01):** $30.00 per 1M input / $180.00 per 1M output (OpenAI docs + benchmarklist; batch/flex available; regional +10%). Blended ~$67.50 per 1M (benchleader). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary extra-compute reasoning flagship (undisclosed parameters; output speed ~1 tok/s, first token 5.8s per benchleader — slowest quartile)

### Raw benchmarks found

Agent / tool use:

- BenchLM live comparison (base 5.4 measured, Pro pending): Terminal-Bench 2.0 75.1%, OSWorld-Verified 75%, Toolathlon 54.6%, MCP Atlas 70.6%, Tau2 98.9%, Claw-Eval 60.3%, GDPval 83.0% — all base-GPT-5.4 numbers (the-decoder + benchlm compare); Pro column reads "Coming soon" — a different model, NOT transferred, listed here as family context only
- Terminal-Bench 2.0: **no verified Pro-specific score found** (Pro "Coming soon" per benchlm.ai compare)
- OSWorld-Verified: **no verified Pro-specific score found** (Pro "Coming soon"; base 75.0% above human 72.4% is a different model)
- GDPval: **no verified Pro-specific score found**
- Tau3-Banking / Tau2-Bench: **no verified Pro-specific score found**
- Claw-Eval / ClawProBench: **no verified Pro-specific score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified Pro-specific score found** (Pro "Coming soon" on both)

Reasoning / knowledge:

- GPQA Diamond: **94.6%** xhigh (benchleader.com, Epoch AI hub source, #4; benchmarklist launch-post row 94.4% #5/455 99th pct and benchgecko 92.8% alongside — same elite band; vs base 92.8%)
- HLE: **44.3%** (benchleader.com, Scale AI/CAIS source, #3; benchlm compare HLE 58.7% Pro vs 52.1% base and w/o-tools 42.7% vs 39.8% are different-harness slices — noted)
- ARC-AGI-1 / ARC-AGI-2: **94.5% / 83.3%** xhigh (benchleader.com, ARC Prize source, #24 both; seankim guide confirms 83.3% vs base 73.3%)
- CritPt: **30.0%** xhigh (benchleader.com, Artificial Analysis source, #7)
- FrontierScience / Research: **36.7%** Pro (benchlm.ai compare table — Pro-only row)
- FrontierMath T4: **38.0%** Pro (seankim.com guide table; vs base 27.1%)
- Artificial Analysis Intelligence Index: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- BenchLeader Coding category: **56** no-reasoning setting (benchleader.com category score — composite context, not a code-gen harness)
- SWE-Bench Pro / Verified, LiveCodeBench (Pro 87.5%), Vibe 67.42%, SciCode, DeepSWE: base-5.4 numbers only (benchlm compare Pro column "Coming soon") — **no verified Pro-specific score found**, family context only
- LiveCodeBench: **no verified Pro-specific score found**
- SciCode / AA-SciCode: **no verified Pro-specific score found**
- Vibe Code Bench: **no verified Pro-specific score found**
- DeepSWE / Coding Index / other: **no verified Pro-specific score found**

Long context:

- BrowseComp (agentic browsing/search): **89.3%** Pro (benchlm.ai compare winner row + seankim guide; vs base 82.7%)
- No verified Pro-specific MRCR / RULER / GraphWalks score found; 1.05M (922K in + 128K out) is a documented opt-in ceiling only

### Normalized scores (1–100)

- **Tool use: 58/100.** Native computer use, scalable tool search, and multi-turn Responses API are verified capabilities, but zero Pro-specific harnesses exist (every BenchLM Pro cell reads "Coming soon") — capped below mid despite base-model family strength, which is explicitly not transferred.
- **Reasoning: 92/100.** GPQA 94.6% (#4) plus HLE 44.3% (#3), ARC-AGI-2 83.3% (+10 over base), CritPt 30.0% (#7), and FrontierScience 36.7% show max-tier science/reasoning; capped by missing LCR/Index/Omniscience.
- **Context window: 90/100.** 1.05M opt-in ceiling (922K in + 128K out) lands mid-way in the 500K-1M 85-94 tier; capped by zero measured Pro retention and 2x/1.5x long-session price multiplier past 272K.
- **Multimodal: 70/100.** Text + image in with native screen-seeing computer use; BenchLeader Multimodal category 70 supports the upper image-band edge; no MMMU/CharXiv number for this exact ID, no video/audio in or non-text out.
- **Coding: 70/100.** No Pro-specific code-gen harness exists (all "Coming soon"); BenchLeader Coding 56 plus consistent Pro-over-base deltas (+1.8 GPQA, +6.6 HLE/BrowseComp, +10 ARC-AGI-2, +10.9 FrontierMath T4) justify above-base placement with a hard cap — re-score when Pro SWE/LiveCode publish.
- **Cost efficiency: 15/100.** $30.00/$180.00 per 1M is 3x past the $10/$50 = ~30 tier (blended ~$67.50, regional +10%, 2x/1.5x past 272K); slowest-quartile speed (1 tok/s) compounds cost-per-task — maximum quality at maximum price.
- **Overall Score: 76/100.** Mean of the five quality dims (58+92+90+70+70)/5 = 76.0; best fit as max-reasoning enterprise tier for the hardest science stakes; base 5.4 for tool-heavy value until Pro harnesses publish.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5.4 Pro API docs page, community launch post 2026-03-05, benchlm.ai base-vs-Pro live comparison, benchleader.com Pro page with Epoch/ARC/Scale/AA sources, benchgecko.ai model card, benchmarklist.com evals, seankim.com developer guide 2026-03-23, the-decoder.com launch analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
