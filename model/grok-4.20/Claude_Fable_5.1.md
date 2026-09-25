# Grok 4.20 — findings by Claude Fable 5.1

- Source: xAI (`grok-4.20`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (paid API; no Free-tier wording on any API host found — consumer app access is free with limits only)
- **Short description:** Grok 4.20 is a high-performance model with industry-leading speed and agentic tool calling capabilities. It combines the lowest hallucination rate on the market with strict prompt adherence, delivering consistently precise and truthful responses. Top use case: fast agentic tool-calling with very long context. Variants/aliases: xAI released 3 variants: reasoning, non-reasoning, and multi-agent. Artificial Analysis tracks two snapshots — "Grok 4.20 0309" (beta) and "Grok 4.20 0309 v2"; also referred to as Grok 4.2 or Grok 420.
- **Provider / access:** xAI API `grok-4.20` (docs.x.ai/developers/models/grok-4.20) and `grok-4.20-multi-agent-beta-0309`; also Google Cloud Gemini Enterprise Agent Platform partner model, Oracle OCI Generative AI (two modes offered in two separate models. A Reasoning model and a Non‑Reasoning model.), and OpenRouter `x-ai/grok-4.20`. xAI supports Chat Completions and Responses API; logprobs and top_logprobs are not supported by models grok-4.20 and newer. These fields will be silently ignored if set. OpenCode Zen: no verified `opencode/grok-4.20` listing found (Zen lists `grok-4.5` via openai-responses).
- **Release / knowledge:** The beta version was launched on February 17, 2026, with full release and API access following in March 2026. the xAI API made Grok 4.20 and its Multi-agent variant available starting March 10, 2026. Knowledge cutoff: no verified official cutoff found (a third-party listing shows "Training Data March 2026", unconfirmed by xAI).
- **IDs:** `xai/grok-4.20`, `xai/grok-4.20-multi-agent-beta-0309`, `openrouter/x-ai/grok-4.20`. No Free ID exists on Zen; no paid Zen ID verified either.
- **Context window:** 2,000,000 tokens total per Artificial Analysis and OpenRouter — The model supports text and image input, outputs text, and has a 2M tokens context window.; It launches with a longer 2M token context window (up from Grok 4's 256K context window, matching Grok 4.1 Fast's 2M). Conflict: a Sept-2026 third-party summary of docs.x.ai states Grok 4.3 and 4.20 hold 1M tokens. Either way ≥1M verified; in/out split not verified.
- **Modalities:** It takes text and image input, produces text output, supports function calling, structured outputs, and reasoning, and carries a very large 1,000,000-token context; Supported image file types: jpg/jpeg or png. Audio/video/PDF input: not verified. Reasoning: yes (toggleable). Tool calls: yes. JSON/structured output: yes.
- **Pricing (as of 2026-09-25):** current $1.25 per million input tokens, $2.50 per million output tokens. 2,000,000 token context window.; Grok 4.3 is tied with the three Grok 4.20 variants at $1.25/M input and $2.50/M output. Launch price was $2/$6 (significantly lower pricing ($2/$6 vs Grok 4's $3/$15)). Cached-input rate for 4.20: not verified. Paid; no free API tier; consumer free tier has usage limits (standard data-use caveat, not verified in detail).
- **Architecture:** Proprietary, closed weights; parameter count/MoE details not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (component of AA Index v4.1 for this model, but no per-eval number surfaced)
- Tau3-Banking / Tau2-Bench: **~93%** τ²-Bench Telecom, derived only — AA states Grok 4.3 gains 5 points on 𝜏²-Bench Telecom to reach 98%, in line with GLM-5.1. vs Grok 4.20 0309 v2 (AA harness; implied, not directly published). Tau3-Banking: no verified public score found
- GDPval-AA: **no verified public score found** (AA only notes Grok 4.3 narrows the gap to the leading model on GDPval-AA, but still trails GPT-5.5 (xhigh) by 276 Elo points)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- IFBench (extra): **81%** — Grok 4.3 maintains an 81% IFBench score from Grok 4.20 0309 v2 (AA harness)
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (in AA Index v4.0 composite, no per-eval number surfaced)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **48 (v4.0, Grok 4.20 0309 Beta, reasoning)** — Grok 4.20 0309 (Reasoning) scores 48 on the Artificial Analysis Intelligence Index, placing it well above average among other reasoning models in a similar price tier (median: 36).; v2 implied 49 on v4.0 (a 4 points ahead of the latest version of Grok 4.20 vs Grok 4.3's 53); **26 (estimated) on current v4.3.2** — Grok 4.20 0309 v2 (Reasoning) scores 26 (estimated) on the Artificial Analysis Intelligence Index, placing it above average among other reasoning models in a similar price tier (median: 25). / BenchLM: Grok 4.20 ranks #93 out of 216 models on the public BenchAlign leaderboard, with a score of 54.26/100. Its evidence status is Estimated, and this profile shows 18 source-displayable benchmark rows.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / 22%** (non-hallucination 78%: Grok 4.20 scores 78% in the AA-Omniscience non-hallucination metric; beating all other models we've tested on AA-Omniscience for hallucination)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found** (a third-party blog claims 78% SWE-bench for Grok 4.20 with no harness/source; not used)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **BenchLM coding 46.3/100, #89/133** — Grok 4.20 ranks #89 out of 133 eligible models for coding and programming, with a public category score of 46.3/100. (Estimated evidence status)
  Long context:
- no long-context retrieval reported (AA-LCR is in the index composite but no per-eval value surfaced; no MRCR/RULER at 512K+)

### Normalized scores (1-100)

- **Tool use: 62/100.** Verified signals are indirect: IFBench 81%, implied ~93% τ²-Telecom, AA composite 48 (v4.0, includes GDPval-AA/Terminal-Bench Hard), and vendor/AA emphasis on agentic tool calling and instruction following. Capped by absence of any published Terminal-Bench 2.1, Tau3-Banking or GDPval-AA number and by AA noting Grok 4.20's performance lags behind the current intelligence frontier.
- **Reasoning: 60/100.** AA Index 48 on v4.0 (reasoning mode) and only 26 (estimated) on the current v4.3.2 index; BenchLM 54.3/100 at #93/216. No GPQA/HLE/CritPt per-eval numbers found, so mid-tier (55-65) mapping applies.
- **Context window: 95/100.** ≥1M tier (2M per AA/OpenRouter; ≥1M even under the conflicting 1M listing). Not 100 because no ≥98% retrieval at 512K+ (MRCR/RULER/AA-LCR value) is published.
- **Multimodal: 65/100.** Text + image (jpg/png) in, text out, reasoning on/off, tool calling, structured outputs. No verified audio/video/PDF input or non-text output.
- **Coding: 50/100.** Only verified datapoint is BenchLM coding category 46.3/100 (#89/133, "Estimated"); no SWE-bench Verified, LiveCodeBench, SciCode or Terminal-Bench number found; xAI itself points to Grok 4.6/Grok Build for coding (Use Grok 4.6 for coding, agents and general work; it is xAI's recommended model "for code and everything else.").
- **Cost efficiency: 89/100.** Paid at $1.25/$2.50 per 1M (in/out) on xAI API and OpenRouter; slightly better than the $1.25/$4.25 ≈ 88 anchor due to cheaper output. Not counted in Overall.
- **Overall Score: 66.4/100.** Mean of (62 + 60 + 95 + 65 + 50)/5 = 66.4. Best fit: cheap, fast, low-hallucination tool-calling agent over very large (1-2M token) document/codebase contexts — not a frontier reasoning or coding pick.

---

## Signature

- Provided by: **Claude Fable 5.1 (anthropic/claude-fable-5.1)** — 2026-09-25
- Method: independent public internet research (xAI docs, Artificial Analysis model pages and X posts, BenchLM, OpenRouter, Oracle/Google Cloud partner docs, models.dev/OpenCode Zen listings); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
