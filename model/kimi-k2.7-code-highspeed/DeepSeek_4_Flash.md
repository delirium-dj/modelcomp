# Kimi K2.7 Code Highspeed — findings by DeepSeek 4 Flash

- Source: Moonshot AI / Kimi (`opencode/kimi-k2.7-code-highspeed`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** The fast-serving tier of Moonshot's Kimi K2.7 Code — an agentic coding model built on Kimi K2.6 with stronger long-horizon coding and ~30% lower thinking-token use. "Highspeed" denotes a lower-latency serving variant rather than a separate architecture; no Highspeed-specific model card is published, so this report uses the K2.7 Code card/Artificial Analysis data as the closest verified proxy.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.7-code-highspeed`; Moonshot platform API (`platform.moonshot.ai`, OpenAI/Anthropic-compatible) and Kimi Code CLI.
- **Release / knowledge:** Kimi K2.7 Code released 2026-06-12; Highspeed is the fast tier. Knowledge cutoff not stated.
- **IDs:** `opencode/kimi-k2.7-code-highspeed`
- **Context window:** 256K on Kimi K2.7 Code (Artificial Analysis; the repo `meta.json` placeholder lists 128K for this tier).
- **Modalities:** text/image/video input; text output (K2.7 Code, MoonViT vision encoder); reasoning with forced `preserve_thinking`; tool calls.
- **Pricing (as of 2026-10-02):** K2.7 Code list price $0.95 per 1M input / $4.00 per 1M output (80% cache discount); Highspeed is priced/rate-limited separately and was not independently verified.
- **Architecture:** 1T total / 32B active MoE, 61 layers, MLA attention, native INT4, Modified MIT license (K2.7 Code).

### Raw benchmarks found

> PROXY NOTE: values are Kimi K2.7 Code results (its public model card + Artificial Analysis), used as the closest verified proxy for the Highspeed serving tier and labelled provisional.

Agent / tool use:

- MCP-Atlas: **76.0%**
- MCPMark-Verified: **81.1%**
- Kimi Claw 24/7 Bench: **46.9%**
- WildClawBench (HF leaderboard, overall): **46.9**
- Long-Horizon-Terminal-Bench: 3 (solved)
- Terminal-Bench 2.1 / GDPval-AA / Tau2-bench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26** (#24 / 117) — well above the open-weight median of 18
- HLE / GPQA / AIME / FrontierMath: no verified public score found
- Omniscience Accuracy / Hallucination Rate: not publicly available

Coding:

- Kimi Code Bench v2 (in-house): **62.0** (GPT-5.5 69.0, Claude Opus 4.8 67.4)
- Program Bench: **53.6** (GPT-5.5 69.1, Claude Opus 4.8 63.8)
- MLS-Bench-Lite: **35.1**
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- 256K context window; no published MRCR/RULER retrieval figure found.

### Normalized scores (1–100)

> Highspeed-specific numbers are unavailable; scores are the K2.7 Code evidence discounted for a fast/lower-thinking serving mode, so they are provisional.

- **Tool use: 79/100.** MCP-Atlas 76.0% and MCPMark-Verified 81.1% are strong agentic-tool results; the fast tier's lighter default working style caps it.
- **Reasoning: 66/100.** AA Intelligence Index 26 is good for open weights, but Kimi Claw 46.9 and MLS-Bench-Lite 35.1 show long-horizon research limits, and fast mode reduces thinking.
- **Context window: 74/100.** 256K on K2.7 Code (Highspeed tier listed at 128K); no long-context retrieval benchmark.
- **Multimodal: 76/100.** Text/image/video input via the MoonViT encoder; Highspeed is unverified for multimodal input.
- **Coding: 72/100.** Kimi Code Bench v2 62.0 and Program Bench 53.6 trail GPT-5.5/Opus 4.8 but are competitive for open weights; speed-optimized mode trades some depth.
- **Cost efficiency: 74/100.** K2.7 Code at $0.95/$4.00 per 1M is above open-weight median but token-efficient; Highspeed pricing not verified.
- **Overall Score: 73.4/100.** Half-up mean of the five quality dims (79+66+74+76+72)/5 = 73.4. Best-fit recommendation: fast iteration and long-horizon coding agents inside Kimi Code where latency matters.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Kimi K2.7 Code Hugging Face model card and Artificial Analysis page used as the closest published proxy for the Highspeed tier); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
