# Claude Haiku 4.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Haiku 4.5 (`anthropic/claude-haiku-4.5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest and most efficient model — near-frontier intelligence at a fraction of larger Claude models' cost and latency, matching Claude Sonnet 4 on reasoning, coding and computer-use tasks. Brought extended thinking to the Haiku line for sub-agents and scaled deployment.
- **Provider / access:** Anthropic API (Claude API, Bedrock, Vertex AI, Azure), OpenRouter, Vercel AI Gateway. Not open weights.
- **Release / knowledge:** Released 2025-10-15; knowledge cutoff not separately published for this ID.
- **IDs:** `claude-haiku-4.5` (Anthropic/OpenRouter); OpenCode Zen tracks it as `opencode/claude-haiku-4.5`. No Zen Free ID.
- **Context window:** 200K tokens (OpenRouter, matching the Sonnet 4.5 / Haiku 4.5 200K group in Anthropic's docs).
- **Modalities:** text and image in; text out. Extended thinking (controllable depth), tool use, bash, web search and computer-use tools.
- **Pricing (as of 2026-10-01):** **$1 / $5 per 1M** in/out.
- **Architecture:** proprietary decoder-only, efficiency tier. Not released.

### Raw benchmarks found

Agent / tool use (Artificial Analysis via OpenRouter, reasoning mode):

- τ²-Bench Telecom: **54.7%**; Terminal-Bench Hard: **27.3%**; IFBench: **54.3%**; Agentic Index: **8.0**; GDPval-AA: **10.9%**
- Claw-Eval / MCP-Atlas / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **67.2%**; HLE: **10.4%**; AA-LCR: **74.3%**; CritPt: **0.0%**; Artificial Analysis Intelligence Index: **16.9**
- AA-Omniscience Accuracy **18.0%** (reasoning)

Coding:

- **SWE-bench Verified >73%** (Anthropic, quoted on the OpenRouter overview — vendor-reported); Coding Index **43.9**; SciCode **42.2%**
- LiveCodeBench / DeepSWE: **no verified public score found**

Long context:

- 200K-token window documented; AA-LCR **74.3%** is the only long-context figure found; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 54.7% and IFBench 54.3% are mid, and Terminal-Bench Hard 27.3% is weak; the low Agentic Index (8.0) and GDPval-AA (10.9%) cap it despite the strong coding/computer-use tool support.
- **Reasoning: 68/100.** GPQA 67.2% and AA-LCR 74.3% are solid for the tier, but HLE 10.4% and an Intelligence Index of 16.9 are far below frontier.
- **Context window: 70/100.** 200K tokens = 70 on the methodology's 200K–500K scale.
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 78/100.** SWE-bench Verified >73% (vendor-reported) and SciCode 42.2% make it a strong coder for its class; the Coding Index of 43.9 keeps it out of the frontier band.
- **Cost efficiency: 88/100.** $1 / $5 per 1M is near the $1.25/$4.25 (~88) reference — good value for near-Sonnet-4 coding capability.
- **Overall Score: 69/100.** (62 + 68 + 70 + 68 + 78) / 5 = 69.2 → 69. Best fit: fast, cheap sub-agents and high-volume coding/computer-use assistance.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page with its Artificial Analysis table and the vendor-quoted SWE-bench figure); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.md`, using the same headings.