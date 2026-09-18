# Claude Sonnet 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 5 (`claude-sonnet-5`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (API id `claude-sonnet-5`; no "Free" tier exists)
- **Short description:** Anthropic's most capable Sonnet-class model and the first Sonnet designed explicitly for the agentic era, released 2026-06-30. It narrows the gap to Opus 4.8 on reasoning, tool use, coding and computer use while staying cheaper per token, and it finishes multi-step tasks where Sonnet 4.6 would stop short.
- **Provider / access:** Anthropic — Claude API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Closed, API-only, no open weights.
- **Release / knowledge:** Released 2026-06-30. Knowledge cutoff not disclosed.
- **IDs:** `claude-sonnet-5`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (default and maximum); max output 128,000 tokens. Verified from Anthropic's launch material as compiled by Benchgen; LLM Stats shows 1.0M in / 64.0K out on Anthropic and lists 1.0M/1.0M through DeepInfra at higher rates.
- **Modalities:** text, image and file inputs; text output; tool calls; reasoning yes — **adaptive thinking on by default** with five effort levels (low, medium, high, max, x-high). First Sonnet-tier model with real-time cybersecurity safeguards.
- **Pricing (as of 2026-09-18):** standard $3.00 / 1M in and $15.00 / 1M out, $0.20 cached input; introductory $2.00 / $10.00 (LLM Stats lists the introductory rate as the current one). A new tokenizer produces ~30% more tokens for the same text than Sonnet 4.6, so effective cost per request can rise even though per-token rates did not.
- **Architecture:** proprietary, closed; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (third-party comparison table cited alongside Gemini 3.8 Flash coverage; Gemini 3.8 Flash 90.8%, GPT-5.6 Terra 87.4% in the same table)
- Agent's Last Exam (multimodal desktop tasks): **33.3%** pass rate — ahead of Gemini 3.7 Flash's 26.3% in the same comparison
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- WebDev Arena: **1541 Elo** (third-party comparison: ahead of GPT-5.6 Terra 1523, behind Gemini 3.7 Flash 1588)

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (Anthropic via Benchgen)
- HLE: **39.6%** (Anthropic via Benchgen)
- AA-LCR (long-context reasoning): **70.7%** (Artificial Analysis via OpenRouter/Benchgen)
- CritPt / LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index: **55** (cited in Gemini 3.7 Flash comparison; behind GPT-5.6 Terra and Muse Spark 1.2 at 57, ahead of its own predecessor at 52)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SciCode: **53.6%** (Artificial Analysis via OpenRouter/Benchgen)
- SWE-bench Verified / SWE-bench Pro: **no verified public score found**
- LiveCodeBench / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**
- Latency: **7.83 s p95 time to first token** via Anthropic over a trailing 7-day window (LLM Stats) — the weakest operational signal found.

Long context:

- AA-LCR 70.7% is the only published long-context reasoning figure; no MRCR/RULER/GraphWalks recall value at 1M depth was found, so the million-token window is partly unmeasured.

### Normalized scores (1–100)

- **Tool use: 88/100.** 80.4% on Terminal-Bench 2.1, 33.3% on multimodal desktop tasks and five tunable effort levels make it a strong production agent; capped by missing Tau3/GDPval/Claw evidence and a 7.83 s p95 TTFT.
- **Reasoning: 88/100.** GPQA Diamond 91.1%, HLE 39.6% and AA-LCR 70.7% are near-flagship; an Intelligence Index of 55 trails GPT-5.6 Terra's and Muse Spark 1.2's 57, so it is not the top of the field.
- **Context window: 95/100.** 1M-token window as both default and maximum with 128K output and a strong AA-LCR score; no full-depth recall benchmark holds it below the top tier.
- **Multimodal: 78/100.** Text, image and file inputs with text output and real-time cybersecurity safeguards; no audio or video input and no media generation.
- **Coding: 88/100.** SciCode 53.6% and a 1541 WebDev Arena Elo are solid, and Anthropic positions it within reach of Opus 4.8, but the missing SWE-bench Verified/Pro numbers stop it short of the 90s.
- **Cost efficiency: 65/100.** $3/$15 standard (introductory $2/$10) is mid-tier, and the new tokenizer's ~30% token inflation erodes the headline rate; prompt caching at $0.20 softens repeat-context work.
- **Overall Score: 84/100.** (88 + 88 + 95 + 78 + 88 + 65) / 6 = 83.7 → **84**. Best fit: high-volume agentic pipelines and coding workflows that need near-Opus behaviour at Sonnet prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Anthropic launch material via Benchgen, LLM Stats model page, third-party comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.