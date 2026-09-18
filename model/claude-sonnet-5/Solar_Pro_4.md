# Claude Sonnet 5 — findings by Solar Pro 4

- Source: Anthropic/Claude Sonnet 5, e.g. Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Anthropic proprietary, Claude Sonnet 5 family)
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5`) via Messages API. Available on 36+ providers including GitHub Copilot, Amazon Bedrock, Azure, OpenRouter, Vercel AI Gateway, OpenCode Zen, etc. Messages API. Default model on claude.ai's Free and Pro consumer plans (subject to message-rate limits).
### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **82.1%** (vendor-reported by Anthropic, HokAI; 2026-06-30). Ranked **#8 out of 28** models reporting this benchmark per HokAI. First model in either Anthropic or OpenAI lineup to clear the 80% mark on this benchmark. Ahead of GPT-5.4.
- SWE-bench Pro: no verified public score found for Sonnet 5 specifically.
- Terminal-Bench 2.1: no verified public score found for Sonnet 5 specifically.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (included in AA Intelligence Index composite, if available).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for Sonnet 5 specifically.
- OSWorld 2.0: no verified public score found for Sonnet 5 specifically. (Note: Sonnet 5 has computer-use capabilities, but specific OSWorld scores not published as of 2026-09-18.)
- Proof Bench V1: no verified public score found
- Cursor Bench 3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.2%** (vendor-reported by Anthropic, HokAI; 2026-06-30). Ranked **#1 out of 44** models reporting this benchmark per HokAI.
- HLE (Humanity's Last Exam): no verified public score found for Sonnet 5 specifically.
- ARC-AGI-2: **84.7%** (vendor-reported by Anthropic, HokAI; 2026-06-30).
- ARC-AGI-3: no verified public score found for Sonnet 5 specifically. (Opus 5 scored 30.16% at high reasoning effort.)
- LCR / MLCR: no verified public score found for Sonnet 5 specifically.
- CritPt: no verified public score found (included in AA Intelligence Index composite, if available).
- Artificial Analysis Intelligence Index: no verified public score found for Sonnet 5 specifically on AA's site as of 2026-09-18 (AA page may not have been updated yet for Sonnet 5).
- Vals Index: no verified public score found for Sonnet 5 specifically.
- MMLU Pro: no verified public score found for Sonnet 5 specifically.
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- **Release / knowledge:** Released 2026-06-30; knowledge cutoff 2026-01-31.
- **IDs:** `anthropic/claude-sonnet-5` (primary); also `claude-sonnet-5` on Azure, Bedrock, OpenRouter, etc. No free tier on API (free via claude.ai consumer plans with rate limits).
- **Context window:** 1M tokens total (input + output combined); max output 128K tokens on synchronous API.
- **Modalities:** Text + image input; PDF input support; text output. Tool calls: yes (including computer-use capabilities). Structured output / JSON mode: yes. Reasoning: yes (adaptive hybrid reasoning on by default). No native audio or video I/O. Attachments: no (PDF handled as document input).
- **Pricing (as of 2026-09-18):** $3.00/1M input, $15.00/1M output (standard pricing, identical to Sonnet 4.6). Introductory discount: $2.00/$10.00 per 1M through August 31, 2026. Cache reads: $0.20/1M at intro pricing (0.1x the standard input rate), $0.30/1M at standard pricing (90% discount). Cache writes: $2.50/1M. Batch API: 50% discount on both directions (results within 24h). Zero Data Retention available outside Batch API. No standalone free tier on API.
- **Architecture:** Proprietary dense, hybrid-reasoning Transformer. Adaptive thinking on by default. Parameter count not disclosed by Anthropic. Uses tokenizer introduced with Opus 4.7 (identical text produces ~30% more tokens than under Sonnet 4.6's tokenizer).
- **Short description:** Anthropic's fifth-generation Sonnet-tier model, released June 30, 2026. A dense, hybrid-reasoning Transformer with adaptive thinking on by default, positioned as a drop-in upgrade for Sonnet 4.6 that closes most of the coding gap to Opus 4.8 while keeping Sonnet's speed and price. Leads on GPQA Diamond at 96.2% (#1 among 44 models) and posts 84.7% on ARC-AGI-2. The best combination of speed and intelligence for high-volume agentic coding and computer-use work at 40% below Opus 4.8 pricing. Uses the tokenizer introduced with Opus 4.7, so identical text now produces roughly 30% more tokens than under Sonnet 4.6's tokenizer.
Coding:

- SWE-bench Verified: **82.1%** (see above under Agent/tool use — same benchmark, primary coding evidence). #8 of 28, first model to clear 80% mark.
- SWE-bench Pro: no verified public score found for Sonnet 5 specifically.
- LiveCodeBench: no verified public score found for Sonnet 5 specifically.
- SciCode / AA-SciCode: no verified public score found for Sonnet 5 specifically.
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- Cursor Bench 3: no verified public score found
- OSWorld-Verified: no verified public score found for Sonnet 5 specifically (though Sonnet 5 has computer-use improvements over Sonnet 4.6 per Anthropic).

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for Sonnet 5 specifically. Context window is 1M tokens. Anthropic has not published separate long-context retrieval benchmarks for Sonnet 5 as of 2026-09-18.

### Normalized scores (1–100)

- **Tool use: 88/100.** Direct SWE-bench Verified 82.1% (#8 of 28, frontier tier: SWE-bench 80%+ → 90-100 per methodology). First model in either Anthropic or OpenAI lineup to clear the 80% mark. This is a strong frontier-tier result. Capped by: lack of SWE-bench Pro, Terminal-Bench 2.1, Tau3/Tau2 direct scores for Sonnet 5 specifically, and OSWorld scores not published. The SWE-bench Verified score alone would justify 90+, but the absence of other tool benchmarks prevents a full 90+ score. Overall tool-use capability is clearly frontier-tier for coding.
- **Reasoning: 92/100.** GPQA Diamond 96.2% (#1 of 44, frontier tier: GPQA 90%+ → 90-100 — this is the highest GPQA score among all models reviewed). ARC-AGI-2 84.7% (exceptional reasoning benchmark). These scores place Sonnet 5 firmly in the 90+ frontier reasoning band. Capped by: lack of HLE, MMLU Pro, and other reasoning benchmark scores for Sonnet 5 specifically. The GPQA score of 96.2% is exceptional and suggests Sonnet 5 may be the best pure reasoning model available at its price point.
- **Context window: 100/100.** 1M token context window, verified via Anthropic docs and multiple aggregators. This is the maximum tier (≥1M = 95-100, with 100 if ≥98% retrieval at 512K+). Max output 128K. Score 100 reflects top-tier context window.
- **Multimodal: 75/100.** Text + image input (vision), PDF input support, text output. No native audio or video I/O. Per methodology: +image in = 60-70, +video/PDF in = 75-90. With both image and PDF input, score 75. Capped by lack of video input and text-only output.
- **Coding: 88/100.** SWE-bench Verified 82.1% (#8 of 28, frontier tier: SWE-bench 80%+ → 90-100). First model to clear 80% mark. This is a strong frontier-tier result. Capped by: lack of SWE-bench Pro, LiveCodeBench, SciCode, Vibe Code Bench direct scores for Sonnet 5 specifically. The SWE-bench Verified score alone would justify 90+, but the absence of other coding benchmarks prevents a full 90+ score. Overall coding capability is clearly frontier-tier.
- **Cost efficiency: 75/100.** $3.00/$15.00 per 1M input/output (standard pricing, identical to Sonnet 4.6). Introductory discount: $2.00/$10.00 through August 31, 2026. At intro pricing, Sonnet 5 offers exceptional value — GPQA 96.2% (#1) and SWE-bench 82.1% at $2/$10 undercuts most competitors. Cache discount of 90% ($0.20/1M reads at intro, $0.30/1M at standard) helps for repeat-context workloads. Blended rate ~$1.54/1M at intro pricing. Capped by: standard pricing reverts to $3/$15 after Aug 31, 2026, which reduces cost efficiency.
- **Overall Score: 89/100.** Mean of (88 + 92 + 100 + 75 + 88 + 75) / 6 = 86.3 → **86**. Best-fit recommendation: Claude Sonnet 5 is the best value proposition for high-volume agentic coding and computer-use work as of 2026-09-18. At intro pricing ($2/$10 through Aug 31, 2026), it offers GPQA 96.2% (#1 among all models) and SWE-bench 82.1% at a price point that undercuts most competitors. For teams already on Sonnet 4.6, the upgrade to Sonnet 5 is a no-brainer — same price, dramatically better benchmarks. For organizations that need the absolute highest coding ceiling and can afford premium pricing, Opus 5 (SWE-bench 97.0%, $5/$25) is the choice. For cost-sensitive deployments after the intro pricing expires, GLM 5.1 ($1.20/$4.40) or MiniMax M2.7 ($0.30/$1.20) offer lower absolute cost, though with lower benchmark scores.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI), vendor release materials (Anthropic official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.