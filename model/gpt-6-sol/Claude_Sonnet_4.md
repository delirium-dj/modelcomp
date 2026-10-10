# GPT-6.1 Sol — findings by Claude (anthropic/claude-sonnet-4-20250514)

- Source: OpenAI / GPT-6.1 Sol (`gpt-6.1-sol`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (no free tier)
- **Short description:** GPT-6.1 Sol is an upgrade to GPT-6 Sol that nearly matches GPT-6 Astra's intelligence on agentic coding, computer use, and professional work at one-fifth of Astra's standard input and output token prices. It is OpenAI's mid-tier reasoning model in the GPT-6 series, released on September 29, 2026 as an upgrade to GPT-6 Sol.
- **Provider / access:** The model identifier for API implementation is `gpt-6.1-sol`. It is accessible across ChatGPT Work and Codex workspaces for Plus, Pro, Business, Enterprise, and Education tiers, though OpenAI has not made it available in standard ChatGPT Chat. Also available via OpenRouter at `openai/gpt-6.1-sol` and Azure AI. The Responses API supports tool calling, while Chat Completions is available without tool calling for this model.
- **Release / knowledge:** OpenAI released GPT-6.1 Sol on September 29, 2026 at DevDay. Knowledge cutoff: 30 Apr 2026.
- **IDs:** `openai/gpt-6.1-sol` (no Free ID exists on OpenCode Zen)
- **Context window:** 1,050,000 tokens context; maximum output 128,000 tokens. OpenAI notes a cliff at 272,000 tokens.
- **Modalities:** Text and image in, text out. Reasoning always on: supports low, medium (default), high, xhigh, and max effort. Responses API support spans search, code execution, computer use, MCP, and other agent tools.
- **Pricing (as of 2026-10-10):** $2 input, $0.10 cached input, and $10 output per 1M tokens for short-context requests. Paid only. No free tier.
- **Architecture:** Proprietary, closed-weights. Parameter count not disclosed. Part of the GPT-6 family.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Science 0.1: **57.0%** (max effort, $5.47/task — OpenAI vendor-reported; vs Astra 68.1% at $23.80)
- AutomationBench 1.0.6: **36.1%** (max); **31.7%** (medium) (scores 2.2 percentage points above Claude Opus 5.5 on AutomationBench 1.0.6 at medium reasoning effort — OpenAI vendor-reported)
- OSWorld 2.0 (offline): **71.4%** (OSWorld 2.0 #4 of 22 — anotherwrapper.com); lands within 2.1 percentage points of Astra while running at one-seventh the cost per completed task
- GDPval-AA: **39.9%** (low effort) (Artificial Analysis via OpenRouter)
- Terminal-Bench 2.1: no verified public score found (Terminal-Bench 4.0 referenced in AA Intelligence Index; Terminal-Bench Science 0.1 found above)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.4%** (#3 of 157 — anotherwrapper.com)
- HLE: **47.4%** (low effort) (Artificial Analysis via OpenRouter)
- LCR (AA-LCR): **84.0%** (low effort) (Artificial Analysis via OpenRouter)
- CritPt: **24.9%** (low effort) (Artificial Analysis via OpenRouter)
- Artificial Analysis Intelligence Index v4.3.2: **52** (max effort) (Artificial Analysis); **51** (xhigh); **50** (high); **48** (medium); **42** (low)
- BenchLM overall: **81.4/100, #6 of 216** (BenchLM — strongest eligible category is Reasoning at #2)
- Omniscience Accuracy / Hallucination Rate: factual error rate drops from 11.4% (GPT-6 Sol) to 7.7% at low reasoning effort; across all reasoning settings, the error rate stays within 1.9% of GPT-6 Astra

Coding:

- DeepSWE v1.1: **75.2%** (high effort, $0.65/task) (highest point on OpenAI's DeepSWE chart across all three models and five effort settings — OpenAI vendor-reported); BenchLM uses 71.9% (the max-effort number); best verified overall: Gemini 4 Argon 77.9%
- SWE-bench Verified / SWE-Pro: no verified public score found for this exact model
- LiveCodeBench: no verified public score found
- SciCode: **55.8%** (anotherwrapper.com)
- Vibe Code Bench: **88.9%** (anotherwrapper.com)
- FrontierCode 1.1: **52.1%** (xhigh), **50.2%** (listed) (DataCamp / anotherwrapper.com)
- Arena Code Elo: **1758.72** (anotherwrapper.com)
- AIME 2025: **100%** (#1 of 219 — anotherwrapper.com)
- IOI: **96.9%** (anotherwrapper.com)

Long context:

- 1,050,000-token context window with a cliff at 272,000. No MRCR / RULER / GraphWalks retrieval score found. The 272K cliff implies degraded retrieval beyond that point.

### Normalized scores (1-100)

- **Tool use: 72/100.** AutomationBench 36.1% (max) is mid-range; OSWorld 2.0 at 71.4% (#4) is strong; Terminal-Bench Science 0.1 at 57% is respectable but trails Astra (68.1%) and Opus 5.5 (63.3%). No Terminal-Bench 2.1 or Tau3 scores. The mix of strong OSWorld and moderate AutomationBench/Terminal-Bench places it solidly mid-to-upper range but not frontier on agentic tasks.

- **Reasoning: 85/100.** GPQA Diamond 95.4% (#3 of 157) is firmly frontier. HLE at 47.4% exceeds the 40%+ frontier threshold. AA Intelligence Index of 52 (max) is near the top but 1 point behind Astra. Strong across the board but not #1 on any reasoning measure.

- **Context window: 88/100.** 1,050,000 tokens total context qualifies for the ≥1M tier (95-100), but a cliff at 272,000 means effective high-fidelity retrieval may degrade well before 512K. No MRCR/RULER result to confirm retrieval quality. Downgraded from 95 to 88 due to the documented retrieval cliff.

- **Multimodal: 65/100.** The model supports text and image input, outputs text. Image input puts it in the +image-in tier (60-70). On GDP.pdf, it handles complex PDF documents including tables, charts, diagrams, and fine-print details. File/PDF input adds modest lift. No video, audio in, or non-text out.

- **Coding: 87/100.** DeepSWE v1.1 at 75.2% (high effort) is the highest across all models/efforts in OpenAI's chart. SciCode 55.8% meets the frontier threshold (55%+). Vibe Code Bench 88.9%; AIME 2025 100% (#1 of 219). Very strong but not the absolute best on all axes (Gemini 4 Argon leads DeepSWE at 77.9%). No LiveCodeBench or SWE-bench Verified score found.

- **Cost efficiency: 60/100.** Pricing at $2/$10 per 1M tokens (in/out) with $0.10 cached. This maps approximately to the ~$2/$10 band. Not cheap, but substantially below Astra ($10/$50). Cached input at $0.10 is excellent.

- **Overall Score: 79.4/100.** Mean of (72 + 85 + 88 + 65 + 87) / 5 = 397 / 5 = 79.4. Best fit: cost-efficient near-frontier workhorse for agentic coding, enterprise document workflows, and multi-step automation where Astra quality is needed but Astra pricing is not justified.

---

## Signature

- Provided by: **Claude (anthropic/claude-sonnet-4-20250514)** — 2026-10-10
- Method: public internet research (OpenAI blog, Artificial Analysis, BenchLM, OpenRouter, DataCamp, The New Stack, VentureBeat, anotherwrapper.com, emergent.sh, Vellum, computingforgeeks, X/Twitter posts from @OpenAIDevs and @ArtificialAnlys); scores are normalized 1-100 interpretations, not official vendor scores. All raw numbers traced to cited sources; no interpolation or memory-based scores used.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
