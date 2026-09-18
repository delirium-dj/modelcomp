# GPT-6 Astra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via OpenAI's staged GPT-6 launch and comparison tables in
> other models' coverage).

## Model card

- **Name:** GPT-6 Astra (staged rollout; a `gpt-6-astra-fast` variant is listed separately at $20/$100 per 1M)
- **Short description:** OpenAI's flagship above GPT-5.6 Sol, rolling out from 2026-09-03 and trained on OpenAI's largest run to date at its Stargate site in Texas. It is the first OpenAI model to reach the Preparedness Framework's **Critical cybersecurity** threshold, so exploit-creation capability is gated behind invite-only Trusted Access/Daybreak programs. OpenAI skipped several standard flagship benchmarks (SWE-bench Verified, AIME 2025, MMLU-Pro, HumanEval) at launch, making external comparison incomplete.
- **Provider / access:** OpenAI hosted API (Responses), ChatGPT subscription tiers, AWS Bedrock and Microsoft Azure; initial access restricted to Trusted Access/Daybreak organizations. Closed, proprietary; no weights and no fine-tuning support.
- **Release / knowledge:** Staged rollout starting 2026-09-03. Knowledge cutoff not disclosed.
- **IDs:** `gpt-6-astra` (OpenAI); Zen alias `gpt-6-astra` via `https://opencode.ai/zen/v1/responses`.
- **Context window:** 1,050,000 tokens (more than 5× Sol's 200K); max output 128,000 tokens. Any request whose input exceeds 272,000 tokens bills the entire request at 2× the input/cache rate and 1.5× the output rate.
- **Modalities:** text + image input, text output; reasoning yes; tool calls yes. No audio, video or PDF-specific claims surfaced.
- **Pricing (as of 2026-09-18):** $10 / 1M in and $50 / 1M out at standard reasoning effort; cached input $1 / 1M, cache writes $12.50 / 1M — roughly double Sol's launch rate, plus the 272K-token surcharge.
- **Architecture:** undisclosed; OpenAI describes only training scale, not parameter count or architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.7%** (vendor) — ahead of Claude Fable 5.1's 55.8% and Sol's 37.3%
- ScreenSpot-Pro (computer use): **92.7%**; OSWorld v2: **72.6** (vendor)
- BrowseComp: **91.5**; ExploitBench: **100** (vendor, gated capability); DeepSWE v1.1: **74.1%**
- BenchCAD / Vision2Code: **95.9%** (vendor)
- Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (vendor; ranked 2nd of 45 tracked models on HokAI against a median which itself sits at 88.9%)
- FrontierMath Tier 4 v2: **97.6%**; HLE: **57.2%** (vendor)
- ARC-AGI-2: **95%**; ARC-AGI-3: **99.9%** (vendor — the ARC-AGI-3 figure holds only in a persistent-memory test configuration across calls, not in ordinary single-shot API use)
- Artificial Analysis Intelligence Index: **61** — tied with GPT-5.6 Sol, five points behind Claude Fable 5.1's 65.7–66
- MMLU-Pro / AIME 2025: **not disclosed at launch**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-bench Pro: **not disclosed at launch** — an unusual gap for a flagship release, so coding parity with Claude Fable 5.1 and Gemini 3.8 Flash is unverified
- DeepSWE v1.1 74.1% and Terminal-Bench 4.0 57.7% are the published substitutes (vendor)
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**
- Cost context: Artificial Analysis rates its coding index roughly on par with Claude Opus 5 and Fable 5 at under half their per-task cost, with an AA blended price of **$7.70 / 1M**

Long context:

- OpenAI reports strong recall deep into the 1.05M window on its own retrieval test, but no MRCR/RULER/GraphWalks value was reproduced; the 272K billing threshold is the practical planning constraint.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 4.0 57.7% (best in this scan), ScreenSpot-Pro 92.7%, OSWorld v2 72.6 and DeepSWE 74.1% make it a top computer-use and coding agent; capped by the gated ExploitBench capability and the absent Tau3/GDPval/Claw results.
- **Reasoning: 94/100.** GPQA Diamond 96.0% (2nd of 45), FrontierMath Tier 4 v2 97.6% and HLE 57.2% are near-frontier, but an AA Intelligence Index of 61 is flat versus Sol and five points behind Fable 5.1.
- **Context window: 95/100.** 1,050,000 tokens with 128K output is the biggest architectural jump over Sol; the 272K-token billing step-up and the missing recall-at-depth benchmark are real caveats.
- **Multimodal: 82/100.** Text and image input with leading computer-use vision scores; no audio or video input and text-only output.
- **Coding: 90/100.** Terminal-Bench 4.0 57.7% and DeepSWE 74.1% are elite, but the deliberate omission of SWE-bench Verified/Pro leaves the strongest standard coding comparison unverified.
- **Cost efficiency: 45/100.** $10/$50 per 1M (2× Sol) with a 2× input surcharge past 272K tokens and only a 90%-off cache read for relief — among the pricier frontier options tracked here.
- **Overall Score: 83/100.** (94 + 94 + 95 + 82 + 90 + 45) / 6 = 83.3 → **83**. Best fit: agentic coding, computer-use automation and authorized security work where Terminal-Bench-class performance matters more than general chat economics.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (OpenAI launch material via HokAI fact page, Anthropic/GPT comparison tables, Artificial Analysis figures, OpenCode Zen endpoint list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.