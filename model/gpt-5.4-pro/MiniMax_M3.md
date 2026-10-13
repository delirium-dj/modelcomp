# GPT-5.4 Pro — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-5.4-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's top-performance "Pro" compute tier of the GPT-5.4 family — the highest-priced variant in its generation, optimized for maximum performance on the most complex tasks (deep research, frontier math generalization, expert reasoning).
- **Provider / access:** OpenAI API (`gpt-5.4-pro`); Azure OpenAI / Foundry; OpenCode Zen `opencode/gpt-5.4-pro`. Chat Completions + Responses API.
- **Release / knowledge:** Released 2026-03-05 (with GPT-5.4 base).
- **IDs:** `openai/gpt-5.4-pro`; `opencode/gpt-5.4-pro` (Zen). No free ID.
- **Context window:** 1,050,000 total (128K max output). Note: prompts >272K tokens are billed at 2x input / 1.5x output for the entire request.
- **Modalities:** Text, image in; text out. Reasoning: yes (effort levels). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** $30 input / $180 output per 1M (10× the GPT-5.4 base rate of $2.50/$15). Cached input: $1.25 (5× base). Paid only.
- **Architecture:** Proprietary OpenAI. Family foundation shared with GPT-5.4 base; Pro tier uses additional inference-time compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (agentic web search): **89.3%** (OpenAI) — beats Claude Opus 4.6 at 84.0% and the GPT-5.4 base at 82.7% (Portkey / OpenAI).
- Terminal-Bench 2.0: **no separate Pro figure published** — base GPT-5.4 = 75.1% (Vellum; Portkey).
- SWE-Bench Pro (Public, single attempt): **no separate Pro figure published** — base GPT-5.4 = 57.7% (Portkey / Vellum). On the comparable-but-different SWE-Bench Verified variant, OpenAI did not report for GPT-5.4 at all.
- MCP Atlas: **no separate Pro figure published** — base GPT-5.4 = 70.6% (Vellum) or 67.2% (Portkey).
- OSWorld / OSWorld-Verified: **no separate Pro figure published** — base GPT-5.4 = 75.0% (Portkey).
- GDPval: **82.3%** (Vellum / OpenAI) — trails the base GPT-5.4's 83.0% (a common pattern when extra compute is applied to narrow, not broad, tasks). Claude Opus 4.6 Elo: 1606.
- Tau2-bench Telecom (no reasoning): **no separate Pro figure published** — base GPT-5.4 ~98.9% (Portkey).
- Tau3-Banking / Toolathlon / Claw-Eval / SWE Atlas Codebase QnA: **no verified public score found** for GPT-5.4 Pro specifically.

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (Vellum benchmark breakdown) — competitive with Gemini 3.1 Pro (94.3%) and Claude Opus 4.7 (94.2%), clear improvement on Opus 4.6 (91.3%).
- ARC-AGI-2: **no separate Pro figure published** — base GPT-5.4 = 73.3% (Vellum).
- HLE (with tools): **no separate Pro figure published** — base GPT-5.4 = 52.1% (Portkey).
- FrontierMath Tier 4: **35%** (HN / Epoch AI) — leads frontier cohort.
- AA Intelligence Index / AA-LCR / CritPt: **no verified public score found** for GPT-5.4 Pro specifically.

Coding:

- SWE-Bench Pro (Public): **no separate Pro figure published** — base GPT-5.4 = 57.7% (Portkey / Vellum).
- Expert-SWE (internal OpenAI): **no separate Pro figure published** — base GPT-5.4 = 68.5% (Vellum).
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found** for GPT-5.4 Pro specifically.

Multimodal / long context:

- MMMU Pro (no tools): **no separate Pro figure published** — base GPT-5.4 = 81.2% (Portkey).
- MRCR v2 at 512K-1M: **no separate Pro figure published** — base GPT-5.4 = 36.6% (Vellum).
- 1.05M context with text + image input.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% (LEADS comparison set). MCP Atlas base 70.6%. OSWorld base 75.0%. GDPval 82.3% — Pro is somewhat narrower than base. Capped at 88 because Tau3/Toolathlon for GPT-5.4 Pro are not available, and SWE-Bench Pro base 57.7% is the published coding number.
- **Reasoning: 90/100.** GPQA Diamond 94.4% (top cohort). FrontierMath Tier 4 35% (LEADS frontier). ARC-AGI-2 base 73.3%. HLE-with-tools base 52.1%. Capped at 90 because AA Intelligence Index / HLE-Pro-specific numbers are not published.
- **Context window: 88/100.** 1.05M context. Capped at 88 because MRCR v2 512K-1M for GPT-5.4 base is 36.6% (collapses at full length) and no MRCR / RULER for Pro specifically is published.
- **Multimodal: 78/100.** Text + image in. MMMU Pro base 81.2% (LEADS comparison). Capped at 78 because GPT-5.4 family does not have native audio/video, and Pro-level multimodal figures are not separately published.
- **Coding: 80/100.** SWE-Bench Pro base 57.7%. Terminal-Bench 2.0 base 75.1%. Expert-SWE base 68.5%. Capped at 80 because LiveCodeBench / SciCode / Vibe Code Bench are not published for GPT-5.4 Pro specifically, and SWE-bench Verified for GPT-5.4 was not reported.
- **Cost efficiency: 20/100.** $30 in / $180 out (10× GPT-5.4 base). Cached input $1.25. Capped at 20 because effective cost per Intelligence Index task is the highest of any frontier model — this is a Pro tier, not a value play.
- **Overall Score: 85/100.** Half-up mean of Tool 88, Reasoning 90, Context 88, Multimodal 78, Coding 80 = 424/5 = 84.8 → half-up 85. GPT-5.4 Pro is OpenAI's premium "Pro" compute tier of the 5.4 generation — strong on agentic web search (BrowseComp 89.3%) and graduate-level reasoning (GPQA 94.4%, FrontierMath T4 35%), but Coding is held back by a 57.7% SWE-Bench Pro base and long-context retrieval collapses at full window (36.6% MRCR 512K-1M base). The 10× premium over base GPT-5.4 makes it a tool for narrow high-stakes workloads, not broad production.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (OpenAI GPT-5.4 launch page, Portkey GPT-5.4 vs Opus 4.6 comparison, Vellum Claude Opus 4.7 benchmarks breakdown, HN combined-results thread, OpenRouter GPT-5.4 Pro specs page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4_Pro_OpenAI.md`, using the same headings.