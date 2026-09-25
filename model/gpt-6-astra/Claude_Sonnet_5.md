EXCLUDED — not applicable (benchmarks exist for this model)

# GPT-6 Astra — findings by Claude Sonnet 5

- Source: OpenAI/GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (also shipped as "GPT-6 Astra Pro" for Pro/Business/Enterprise ChatGPT tiers; no separate "free-tier" branding found)
- **Short description:** OpenAI's flagship frontier model, released September 3, 2026, positioned for computer use, coding, cybersecurity, science, and delegated professional/agentic work. First OpenAI model to be classified "Critical" for cybersecurity under OpenAI's Preparedness Framework.
- **Provider / access:** OpenAI API as `gpt-6-astra` (Responses API and Chat Completions API both supported); also on Microsoft Azure/Foundry and AWS Bedrock (`gpt-6-astra`); ChatGPT Plus, Pro, Business, Enterprise. No OpenCode Zen listing found — no Free-tier API ID verified.
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff 2026-04-30 (per OpenAI API model docs, as cited by BenchLM).
- **IDs:** `openai/gpt-6-astra` (API model ID `gpt-6-astra`; also listed on OpenRouter as `openai/gpt-6-astra` and on AWS Bedrock as `gpt-6-astra`)
- **Context window:** 1,050,000 tokens total (up to 922,000 input tokens + up to 128,000 output tokens) — verified via OpenAI's own model documentation page (cited by BenchLM/OpenRouter/Kie AI, cross-confirmed by three independent trackers)
- **Modalities:** text + image in; text out only (no audio/video in, no non-text out reported); explicit reasoning modes (`reasoning.effort`: low/medium/high/xhigh/max); tool calls yes (function calling, hosted shell, code interpreter, computer use, MCP, tool search); structured/JSON outputs yes
- **Pricing (as of 2026-09-24):** $10 / $50 per 1M input/output tokens (paid only); cached input $1/1M; cache write ~1.25x premium; "Fast mode" ~2x price for ~2.5x speed. No free-tier access confirmed (Free API tier explicitly unsupported per rate-limit docs).
- **Architecture:** Proprietary; parameter count not disclosed; weights not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.3%** (Vals AI independent leaderboard run)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- (Supplementary, OpenAI-reported): OSWorld 2.0 **72.6%**; AutomationBench **41.4%**; Agents' Last Exam **59.3%**; BrowseComp **91.5%**; ScreenSpot-Pro **92.7%**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI launch announcement)
- HLE (text-only, no tools): no verified public score found — only "HLE with tools" is published, at **57.2%** (OpenAI announcement; trails Claude Fable 5.1's 65.0% on the same row)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53** (max reasoning effort, official Artificial Analysis article; ties Claude Fable 5.1 "max with fallback" at ~40% of the cost per task)
- Omniscience Accuracy / Hallucination Rate: no verified public AA-Omniscience score found (OpenAI's own internal hallucination benchmark, not the AA-Omniscience eval, reportedly drops from 12.2% to 4.2% vs. GPT-5.6 Sol)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE v1.1: **74.1%** (OpenAI announcement; Meta separately reported 75.4% for Muse Spark 1.3 on the same eval)
- Terminal-Bench 4.0: **57.9%** (OpenAI announcement / BenchLM ledger; trails Claude Opus 5.5's 66.4%)

Long context:

- OpenAI MRCR v2 8-needle: **100.0%** at 256K–512K, **96.3%** at 512K–1M (OpenAI announcement)

### Normalized scores (1-100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 87.3% sits just under the 88% frontier marker, backed by strong OSWorld 2.0 (72.6%) and Agents' Last Exam (59.3%) results, but no verified Tau3-Banking or GDPval-AA score exists for this model, so the composite is held just below frontier.
- **Reasoning: 84/100.** GPQA Diamond (96.0%) is frontier-tier, but the third-party Artificial Analysis Intelligence Index sits at only 53 (below the 60+ frontier line, tied with Claude Fable 5.1) and no text-only HLE or CritPt score is published, so the score is capped below the GPQA-only read.
- **Context window: 97/100.** Verified 1,050,000-token total context (≥1M tier = 95-100); MRCR v2 retrieval is 96.3% at 512K-1M, just short of the ≥98% needed for a full 100.
- **Multimodal: 66/100.** Confirmed input modalities are text + image only, text-out only — no audio/video input, no non-text output — placing it in the "+image in" tier (60-70).
- **Coding: 79/100.** DeepSWE v1.1 (74.1%) clears the frontier marker, but no SWE-bench Verified, LiveCodeBench, or SciCode score has been published for this exact model, leaving the standard coding-benchmark backbone largely unverified.
- **Cost efficiency: 30/100.** $10/$50 per million input/output tokens maps directly to the "$10/$50 = ~30" pricing bucket.
- **Overall Score: 82.2/100.** Mean of (85+84+97+66+79)/5. Best fit for long-context, computer-use/agentic, and math/science-reasoning workloads where GPQA/FrontierMath/MRCR dominate; weakest fit for teams needing head-to-head competitive-coding proof points (SWE-bench Verified/LiveCodeBench/SciCode unpublished) or budget-constrained deployments given the $10/$50 price point.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-09-25
- Method: fresh public web research (OpenAI's official GPT-6 Astra announcement and system card, OpenAI's API model documentation, Artificial Analysis's official benchmarking article, BenchLM's tracked model profile, and Vellum's benchmark breakdown), cross-checked across independent sources; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
