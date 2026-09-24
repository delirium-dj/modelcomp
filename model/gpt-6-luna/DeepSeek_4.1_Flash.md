# GPT-6 Luna — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** The entry-level tier of OpenAI's GPT-6 family, unveiled alongside the updated GPT-6 Sol on 2026-09-22 — priced and tuned for high-volume, latency-sensitive work (chat, classification, extraction) rather than frontier reasoning, with enough headroom at higher effort for lightweight agentic and software-engineering tasks. Not an alias: GPT-6 Astra (2026-09-03), Sol and Terra are separate IDs and prices.
- **Provider / access:** OpenAI API `gpt-6-luna` on the Responses API (full tool stack: web/file search, code interpreter, computer use, MCP); Chat Completions supports function calling only at `reasoning_effort` none. Also Azure. Included at no extra cost in ChatGPT's Free and Go plans and the desktop app, subject to usage limits — the API itself has no free tier.
- **Release / knowledge:** released 2026-09-22; knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna` (aliases "gpt-6-luna"); Zen route `opencode/gpt-6-luna`. No Free ID verified on the evaluated route → cost scored on paid API pricing.
- **Context window:** 1,050,000 tokens (922,000 of input headroom) with 128,000 max output tokens.
- **Modalities:** text + image in → text out — no audio or video I/O despite the GPT-6 branding; reasoning effort none→max; streaming; function calling; structured outputs.
- **Pricing (as of 2026-09-23):** $0.10 in / $0.50 out per 1M tokens; cache reads $0.01 per 1M (OpenRouter provider rows); ≈$0.20 blended at a 3:1 ratio (HokAI). Tier 1 API accounts are capped at 500 requests / 500K tokens per minute. Zero-data-retention documented.
- **Architecture:** proprietary; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- OpenAI launch results at max reasoning effort (reported by Digital Applied, 2026-09-22): AutomationBench **20.7%**, Agents' Last Exam **50.9%**, OSWorld 2.0 **52.7%** (offline)
- GDPval-AA v2.1: **43.4%** competitive form (Artificial Analysis via OpenRouter); AA flags a **regression of ~75 Elo** on GDPval-AA v2.1 and **~45 Elo** on AA-Briefcase v1.1 versus GPT-5.6 Luna, attributed to weaker presentation and deliverables skipping rubric elements
- Terminal-Bench (any version), Tau3-Banking, τ²-bench, Toolathlon, MCP-Atlas and Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37.3 at max effort** (level with GPT-5.6 Luna max); AA Coding Agent Index **41** (two points below GPT-5.6 Luna's 43)
- HLE: **38.5%**; CritPt: **19.4%**; AA-LCR: **83.3%** (all AA via OpenRouter)
- AA-Omniscience accuracy **43.8%** with non-hallucination rate **23.3%**; factual error rate **7.6%** at max effort (down from GPT-5.6 Luna's 8.5%, OpenAI)
- GPQA Diamond, AIME, MMLU-Pro, FrontierMath, ARC-AGI, IFBench and Epoch Capabilities Index: **no verified public score found** — OpenAI published no traditional academic scores for Luna

Coding:

- DeepSWE 1.1: **66.6%** and FrontierCode 1.1: **42.4%** (OpenAI launch results at max effort, via Digital Applied)
- SciCode: **54.6%** (AA via OpenRouter)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found**
- Speed: 157 output tok/s (HokAI citing AA; rank 13 of 42 tracked models) and 71 tps at 3.27 s P50 latency / 100.00% three-day uptime on OpenAI's OpenRouter endpoint

Long context:

- AA-LCR **83.3%** is the only long-context retrieval measurement found — good, but below the 95%+ frontier reference.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agents' Last Exam 50.9%, OSWorld 2.0 52.7% (offline) and GDPval-AA 43.4% sit in the middle of the mid band, but AutomationBench is only 20.7% and every Terminal-Bench, Tau3 and MCP harness row is missing; AA also records an Elo regression against the previous generation on professional-work evals.
- **Reasoning: 76/100.** HLE 38.5% and CritPt 19.4% at an Intelligence Index of 37.3 place it clearly above the mid band (Index 20–35 → 55–65) — better than a pure flash-tier model — while AA-Omniscience accuracy 43.8% with a 23.3% non-hallucination rate and no GPQA/AIME rows cap it well below frontier.
- **Context window: 94/100.** 1.05M input (922K headroom) / 128K output is the ≥1M tier, scored at its floor because retrieval is good but unsaturated (AA-LCR 83.3%).
- **Multimodal: 68/100.** Text + image in → text only, the bottom of the "+image in = 60–70" band; no audio or video I/O despite the GPT-6 naming.
- **Coding: 78/100.** DeepSWE 1.1 at 66.6% is genuinely good for a budget tier and SciCode 54.6% nearly touches the 55% frontier reference; capped by FrontierCode 1.1 at 42.4% and the complete absence of SWE-bench Verified/Pro and LiveCodeBench rows.
- **Cost efficiency: 97/100.** $0.10 in / $0.50 out with $0.01 cache reads (≈$0.20 blended) is squarely in the ~$0.10/$0.20 = 97–99 anchor zone, plus free consumer usage on ChatGPT Free/Go — the cheapest non-stealth API entry evaluated in this whole research batch.
- **Overall Score: 77/100.** (70 + 76 + 94 + 68 + 78) / 5 = 77.2 → **77**. Best fit: high-volume chat, extraction and classification with OpenAI's full tool stack at near-zero cost — step up to Sol/Astra when the task needs frontier reasoning rather than throughput.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (HokAI vendor-checked model page for specs, pricing, launch results and context; OpenRouter model page for Artificial Analysis benchmark rows, pricing and endpoint performance; Artificial Analysis sibling article reference for the cost-efficiency claim); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
