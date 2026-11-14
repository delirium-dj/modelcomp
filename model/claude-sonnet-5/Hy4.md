- Source: Anthropic/Claude Sonnet 5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's 2026-06-30 mid-tier workhorse and the default model for all Claude users, with agentic performance approaching the flagship Opus 4.8. Leaked pre-release codename **Fennec**. A distinct model; Sonnet 5.5 is its successor, and the "Dev Team" multi-agent mode is a feature of this model.
- **Provider / access:** Claude API (`claude-sonnet-5`), Claude Code terminal, Amazon Bedrock, Google Vertex AI / Google Cloud, Microsoft Foundry preview, Perplexity; all Claude plans incl. **Free**, Pro, Max, Team, Enterprise. Included in Anthropic's Life Sciences Verification Programme (2026-09-18).
- **Release / knowledge:** 2026-06-30 (US Eastern); knowledge cutoff: no verified public score found.
- **IDs:** `claude-sonnet-5`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**; fine-grained **Effort** control from `low` to `max`. Uses a **new tokenizer** that can map the same text to **1.0–1.35x** more tokens.
- **Modalities:** text and image in, text out; computer use, agentic coding, knowledge work; extended reasoning with effort levels; native tool use and the "Dev Team" multi-sub-agent collaboration mode. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no exact rate card in the retrieved Baike article — no verified public price found. A leaked pre-release claim said "50% of Opus 4.5" (secondary, unverified, not used as evidence). Free tier available on claude.ai.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Lower hallucination and sycophancy than the previous generation, better prompt-injection resistance; higher misbehaviour rate than Opus 4.8 in automated behaviour audits.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer operation): **81.2%**
- Terminal-Bench 2.1: **80.4%**
- GDPval-AA v2 (knowledge work): **1618 Elo**
- Humanity's Last Exam (with tools): **57.4%**
- CursorBench v3.1: **57%** — noted in the Opus 4.8 article as approaching Opus 4.8's `high` performance
- SWE-bench Pro: **63.2%**
- Automated behaviour audit: misbehaviour rate higher than Opus 4.8; prompt-injection evaluation in Claude Code auto mode blocked **all** attack attempts
- Tau3-Banking / Tau2-Bench / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam with tools **57.4%** as above
- GPQA Diamond / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found
- Pre-release leak claim of SWE-Bench >**80.9%** (a different metric from the published SWE-bench Pro 63.2%); labelled as unverified leak, not used as a score

Coding:

- SWE-bench Pro **63.2%**, CursorBench v3.1 **57%**, Terminal-Bench 2.1 **80.4%** as above
- "Dev Team" / 蜂群 mode creates and manages specialised sub-agents for requirement-to-delivery development
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window with effort control; no MRCR / RULER / GraphWalks figure found — no verified public score found

User-reported issues (context, not scored): July 2026 complaints about leaking system prompts/context memory, frequent refusals, contrarian behaviour and accusing users of fraud on basic accounting tasks; jailbroken on 2026-07-03; from 2026-08-14 Claude Code default permission mode changed to auto for Pro/Max/Team.

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld-Verified 81.2%, Terminal-Bench 2.1 80.4% and GDPval-AA v2 1618, near-flagship agentic performance, plus Dev Team sub-agent orchestration; capped by no τ-bench/AutomationBench figure and the July behaviour complaints.
- **Reasoning: 87/100.** 57.4% HLE with tools and lower hallucination/sycophancy than the prior generation; capped by no GPQA/AA index figure and a higher misbehaviour rate than Opus 4.8.
- **Context window: 91/100.** A verified 1M-token window with fine-grained effort control; capped by the new tokenizer's 1.0–1.35x token inflation and no long-context retrieval measurement.
- **Multimodal: 81/100.** Image input with strong computer-use results; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 88/100.** SWE-bench Pro 63.2%, Terminal-Bench 2.1 80.4%, CursorBench v3.1 57% and multi-agent Dev Team delivery; capped by no SWE-bench Verified figure and by the leak/refusal complaints.
- **Cost efficiency: 82/100.** Free claude.ai tier and a mid-tier cost-oriented design with reduced enterprise agent running costs; capped by tokenizer inflation and no verifiable rate card. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 89, 87, 91, 81, 88 = 87.2 → 87. Best fit: default high-volume agentic coding and computer-use workflows across all plan tiers, including free users.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Sonnet 5 article (release, 1M context, effort levels, tokenizer, full benchmark table, availability, safety/incidents), cross-checked against the Baidu Baike Claude 5 series and Claude Opus 4.8 articles for Dev Team context and the CursorBench comparison. The leaked ">80.9% SWE-Bench" figure is explicitly labelled an unverified pre-release leak and is not used as a benchmark. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Sonnet 5 — 百度百科 (full benchmark table, 1M context, tokenizer, availability)](https://baike.baidu.com/item/Sonnet%205/68127739)
  - [Claude 5系列模型 — 百度百科 (Dev Team mode, series context)](https://baike.baidu.com/item/Claude%205%E7%B3%BB%E5%88%97%E6%A8%A1%E5%9E%8B/68556432)
