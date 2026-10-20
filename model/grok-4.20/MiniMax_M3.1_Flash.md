# Grok 4.20 — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (Grok 4.20 0309 and 0309 v2), `grok-4.20-0309-reasoning`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (0309 / 0309 v2, reasoning + non-reasoning + multi-agent variants)
- **Short description:** xAI's March/April 2026 reasoning flagship with a 2M-token window, a multi-agent "leader + 4/16 agents" mode and a "lowest hallucination rate on the market" claim; deprecated in favour of Grok 4.3. **Access note:** never listed on OpenCode Zen (Zen serves only Grok 4.5/4.6/4.7 and Grok Build 0.1 today), so the `opencode/grok-4.20` id in this folder is not a live Zen route — the model is served first-party on xAI and through OpenRouter (`x-ai/grok-4.20`, `x-ai/grok-4.20-multi-agent`).
- **Provider / access:** xAI first-party API (`grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309`, plus `grok-4.20-reasoning-gv2` aliases — https://docs.x.ai/developers/models/grok-4.20); OpenRouter Chat Completions (`x-ai/grok-4.20`). The multi-agent variant is beta: no client-side tools, no `max_tokens`, Chat Completions unsupported.
- **Release / knowledge:** 2026-03-09 (0309 build); 0309 v2 released **2026-04-07** per AA release notes. Knowledge cutoff not published by xAI.
- **IDs:** `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309` (xAI); `x-ai/grok-4.20`, `x-ai/grok-4.20-multi-agent` (OpenRouter).
- **Context window:** **2,000,000** tokens (OpenRouter, Artificial Analysis, BenchLM, Vals AI) vs **1,000,000** with 30,000 max output (xAI docs and models.dev canonical entry) — conflict noted; the larger figure is used, no long-context retrieval test is published.
- **Modalities:** input text, image and file/PDF; output text; reasoning on/off variants with `reasoning_effort` low/medium/high/xhigh; tool calling, structured outputs and batch supported (20% batch discount).
- **Pricing (as of 2026-10-20):** **$1.25/M in, $2.50/M out, $0.20/M cached** under a 200K prompt; **$2.50/M in, $5.00/M out, $0.40/M cached** at ≥200K (whole request billed at the higher tier). Vals AI lists $2.00/$6.00 for its own runs — conflict noted.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (via BenchLM ledger, Meta comparison chart) · Terminal-Bench 2.1 (Vals AI): **44.2%** · Terminal-Bench Hard: **37.9%** (AA 0309 v2)
- Tau2-bench: **92.98%** (AA, 0309 v2 — https://artificialanalysis.ai/models/grok-4-20) · 0309 build: **96.5%** (AA)
- IFBench: **81.2%** (AA 0309 v2) · **82.9%** (AA 0309)
- GDPval-AA: no verified public score found (AA field null; OpenAI-style GDPval not published for Grok 4.20)
- OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Apex-Agents: no verified public score found (null on the 0309 build, 14.2% on the older 0309)

Reasoning / knowledge:

- GPQA Diamond: **91.11%** (AA 0309 v2) vs **88.5%** (Meta chart via BenchLM) vs **88.64%** (Vals AI)
- HLE (no tools): **34.5%** (AA 0309 v2) · **31.6%** (Meta chart) · **32.4%** (AA 0309)
- AA-LCR: **69.0%** (AA 0309 v2) · CritPt: **6.6%** (AA 0309 v2)
- Artificial Analysis Intelligence Index: **26 (estimated), #120/217**; output speed **102.9 tok/s** (non-reasoning 110 tok/s), TTFT 20.4s
- MMLU-Pro: **86.3%** (Meta chart via BenchLM) · AIME: **96.46%** (#5/33, Vals AI)
- ARC-AGI-2: **53.3%** · ARC-AGI-3: **0.1%** (Vals AI) · MMMU-Pro: **83.47%** (Vals AI) vs **75.2%** (Meta chart)

Coding:

- SWE-bench Verified: **76.7%** (Meta chart via BenchLM) vs **74.20%** (Vals AI) vs **72.20%** (Vals SWE-bench split) — conflict flagged
- SWE-bench Pro: **51.8%** (via BenchLM) · LiveCodeBench: **84.3%** (Vals AI) · LiveCodeBench Pro: **74.2%**
- Vibe Code Bench v1.1: **4.06%** (Vals AI) — very low

Long context:

- No MRCR / RULER / GraphWalks measurement published for Grok 4.20 despite the advertised 2M window.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 93.0% and IFBench 81.2% are genuinely strong, but Terminal-Bench 2.0/2.1 at 47.1%/44.2% and Terminal-Bench Hard 37.9% sit in the mid band, and there is no published GDPval or OSWorld number to lift the score — the model is a good tool caller, not a proven agent finisher.
- **Reasoning: 72/100.** GPQA 88.5–91.1%, MMLU-Pro 86.3%, AIME 96.5% and HLE 31.6–34.5% are strong mid-to-high band results, capped by an AA Intelligence Index of only 26 (below average), CritPt 6.6% and ARC-AGI-3 at 0.1%.
- **Context window: 92/100.** Advertised 2M tokens (xAI's own docs say 1M with 30K max output — conflict). Tier ≥1M earns the high band, but no long-context retrieval test is published, so it is not scored 100.
- **Multimodal: 78/100.** Text, image and file/PDF input with text output, measured MMMU-Pro 75–83%; video and audio input are not supported, which keeps it below the 90+ band.
- **Coding: 72/100.** SWE-bench Verified 72–77%, SWE-bench Pro 51.8% and LiveCodeBench 84.3% are mid-band, while Vibe Code Bench 4.06% and Terminal-Bench 2.1 44.2% show weak end-to-end repo work — the mid-tier signature of "good contest coder, mediocre agent".
- **Cost efficiency: 91/100.** $1.25/M in and $2.50/M out under 200K is well below the Claude-tier $3/$15 and near the cheap end of the frontier band; the ≥200K tier doubles it.
- **Overall Score: 76/100.** Mean of the five quality dims = (68 + 72 + 92 + 78 + 72) / 5 = 76.4 → **76**. Best fit: cheap high-throughput reasoning and tool-calling where sub-200K prompts dominate; deprecated by xAI in favour of Grok 4.3.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (xAI developer docs, Artificial Analysis, BenchLM + Vals AI, OpenRouter API, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
