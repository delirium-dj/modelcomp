# GPT-5.6 Terra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (no "Free" tier; a `gpt-5.6-terra` Zen ID exists as a paid model)
- **Short description:** OpenAI's balanced mid-tier entry in the GPT-5.6 family, released 2026-07-09. "Terra" is a permanent capability band between GPT-5.6 Sol (maximum capability) and GPT-5.6 Luna (lowest cost): as the generation improves, Terra advances alongside them. It scores within ~2 points of Sol on the two headline evals at half the price, making it OpenAI's recommended default for professional and agentic workloads.
- **Provider / access:** OpenAI API (Responses API, `@ai-sdk/openai` on Zen, `gpt-5.6-terra` → `https://opencode.ai/zen/v1/responses`); Azure OpenAI. Closed, API-only; no open weights.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff estimated at September 2025.
- **IDs:** `gpt-5.6-terra` (OpenAI); Zen alias `gpt-5.6-terra` routed through Zen's Responses endpoint.
- **Context window:** ~1,100,000 tokens — exactly the same as Sol's — roughly 800–900 pages per request. Verified from OpenAI's GPT-5.6 announcement as compiled by Benchgen (last updated 2026-07-21).
- **Modalities:** text + image input; text output; reasoning yes (but **no max/ultra effort levels** — those are Sol-exclusive); tool calls and structured output yes.
- **Pricing (as of 2026-09-18):** $2.50 / 1M in and $15.00 / 1M out. Cache writes bill at 1.25× the uncached input rate; cache reads get a 90% discount. Paid only.
- **Architecture:** undisclosed (GPT-5.6 family); proprietary API-only.

### Raw benchmarks found

Agent / tool use:

- Agent's Last Exam (Benchgen's multi-step agentic evaluation): **50.4%** (Benchgen evaluation, 2026-07; Sol 52.7%)
- Terminal-Bench 2.1: **87.4%** (third-party comparison table published alongside Gemini 3.8 Flash material; below Gemini 3.8 Flash's 90.8%, above Claude Sonnet 5's 80.4%)
- AutomationBench: **23.6%** (Google comparison table; behind Gemini 3.7 Flash's 30.4%)
- Coding Agent Index: **77.4** (Benchgen card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- ARC-AGI: **96.5%** (Benchgen evaluation, 2026-07; Sol 97.5%, Luna 88.0%)
- GPQA Diamond / HLE / TerminalBench / SWE-Bench Pro family scores are reported for GPT-5.6 Sol on the shared family card, not broken out per-variant — so **no verified Terra-specific GPQA/HLE score found**
- Artificial Analysis Intelligence Index: **55** (cited in Gemini 3.7 Flash comparison)
- LCR / MLCR / CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- WebDev Arena: **1523 Elo** (third-party comparison; below Gemini 3.7 Flash 1588 and Claude Sonnet 5 1541)
- SWE-bench Verified / SWE-bench Pro: **no verified Terra-specific score found** (Sol's shared number is published at family level)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Cost context from the vendor: cache reads at a 90% discount and cache writes at 1.25× make repeated long-context agent runs materially cheaper than the headline rate implies.

Long context:

- no MRCR/RULER/GraphWalks recall value published for Terra; the 1.1M window matches Sol's exactly, but recall at depth is not separately documented.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 87.4%, Agent's Last Exam 50.4% and a Coding Agent Index of 77.4 make it a strong production agent at half of Sol's price; AutomationBench 23.6% and missing Tau3/GDPval/Claw numbers are the caps.
- **Reasoning: 92/100.** 96.5% ARC-AGI and 50.4% on the multi-step agentic exam sit within ~2 points of OpenAI's top tier; the absence of Terra-specific GPQA/HLE values (family scores are Sol's) keeps it just short of the 90s-plus flagship band.
- **Context window: 95/100.** ~1.1M tokens matching Sol exactly, with structured output and cache pricing that makes long-context agent loops economical; no recall-at-depth benchmark holds it below the maximum.
- **Multimodal: 80/100.** Text + image input with text output; no audio, video or PDF-specific claims and no media generation; Sol-exclusive max/ultra reasoning modes are unavailable here.
- **Coding: 85/100.** Terminal-Bench 87.4% and WebDev Arena 1523 are strong; the lack of any Terra-specific SWE-bench result and a mid-pack web-dev Elo keep it below the coding leaders.
- **Cost efficiency: 72/100.** $2.50/$15 per 1M is mid-tier — ~2× Gemini 3.7/3.8 Flash and 18× DeepSeek-V4-Flash input — though 90%-off cache reads and half-price Sol positioning are real value.
- **Overall Score: 85/100.** (88 + 92 + 95 + 80 + 85 + 72) / 6 = 85.3 → **85**. Best fit: production agent and long-context workflows that want near-flagship OpenAI behaviour without paying Sol's premium.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Benchgen GPT-5.6 Terra model card with OpenAI pricing, third-party comparison tables, OpenCode Zen endpoint list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.