# Grok 4.7 — findings by GLM 5.3

- Source: xAI / SpaceXAI (`grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's frontier model for coding, agentic tasks, and knowledge work, released 2026-09-21 as a new, larger base model (not post-training on 4.6) with a longer RL run weighted toward many-hour problems. Top use case: repository-scale coding agents and long-running tool work at below-frontier prices.
- **Provider / access:** xAI API (`https://api.x.ai/v1`, Responses API + Chat Completions; US regional endpoint at 10% premium); model gateways: OpenRouter, Vercel, Cloudflare; OpenCode Zen `opencode/grok-4.7` (Responses API); default model of Grok Build; available in Cursor on all plans. Grok 4.7 Fast: same model on faster infra at 2× rates, Cursor/Grok Build only.
- **Release / knowledge:** 2026-09-21; knowledge cutoff May 2026.
- **IDs:** `grok-4.7` (xAI), `opencode/grok-4.7` (Zen). No Zen Free tier.
- **Context window:** 500,000 tokens (input capacity); no separate text output limit documented; context compaction supported for long agent loops.
- **Modalities:** text and image input; text output; reasoning efforts low/medium/high (default)/xhigh; encrypted reasoning always returned on the Responses API; structured outputs; function calling, web search, X search, and code execution tools; prompt caching via `prompt_cache_key`.
- **Pricing (as of 2026-09-25):** per 1M tokens — prompt < 200K: $2.00 in / $0.50 cached / $6.00 out; prompt ≥ 200K: $4.00 in / $1.00 cached / $12.00 out (higher rate applies to all tokens in the request). Same rates on OpenCode Zen.
- **Architecture:** proprietary; parameter count undisclosed (the 2.1T-parameter circulating claim is unconfirmed by any primary technical source); described only as a new, larger base model with a longer, harder RL mix.

### Raw benchmarks found

> Vendor launch-table figures (xAI, 2026-09-21) unless marked; Cursor rows are Cursor's live published evaluation (Cursor is a Grok distribution partner — corroborating, not fully independent); the Terminal-Bench independent figure is Artificial Analysis's own run.

Agent / tool use:

- Terminal-Bench 4.0: **38.0%** (vendor chart, xhigh) vs Grok 4.6 20.3%, GPT-5.6 Sol 37.3%; **26%** in Artificial Analysis's independent run; Fable 5.1 listed at 57.9% on xAI's chart (Anthropic/OpenAI report 55.8%)
- GDPval (xAI chart): **1,695** (xhigh) vs Fable 5.1 max 1,735, GPT-6 Astra max 1,542
- AA Briefcase v1.1: **1,657** vs Grok 4.6 1,546, GPT-5.6 Sol 1,487, Fable 5.1 1,678
- Harvey Legal Agent Benchmark: **19.6%** vs Grok 4.6 15.8%, GPT-5.6 Sol 2.5%, Fable 5.1 6.7% (leads the compared set)
- EEBench: **64.0%** vs Grok 4.6 53.0%, GPT-5.6 Sol 39.4%, Fable 5.1 56.4% (leads)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HealthBench Professional: **56.7%** vs Grok 4.6 48.5%, GPT-5.6 Sol 60.5%, Fable 5.1 62.1%
- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index: no verified public score found for this ID at launch
- Knowledge cutoff May 2026 (current events via search tools, not base weights)

Coding:

- DeepSWE v1.1: **71.0%** (high effort) vs Grok 4.6 65.2%, GPT-5.6 Sol 72.7%, Fable 5.1 70.0%
- CursorBench 4.0 (Cursor live eval): **46.3%** xhigh at $6.01/task avg, **43.9%** high at $4.69/task — vs Fable 5.1 max 51.8% ($17.28), Opus 5 max 46.6% ($11.95), GPT-5.6 Sol max 41.7% ($8.23), Grok 4.6 xhigh 41.4% ($6.10), Gemini 3.8 Flash high 39.6% ($4.70)
- Upgrade delta at matched effort (Cursor): 4.6 → 4.7 = +3.5 pts at high, +4.9 pts at xhigh
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (no MRCR/RULER rows); 500K is an input capacity spec, and ≥200K prompts price at the double rate

### Normalized scores (1–100)

> Mix of vendor-chart and Cursor-published numbers; the one independent AA run (TB 4.0 at 26%) is weighted as the corrective signal for tool use.

- **Tool use: 68/100.** GDPval 1,695 and AA Briefcase 1,657 sit near the frontier band, with clear leads on Harvey Legal Agent (19.6%) and EEBench (64.0%); Terminal-Bench 4.0 is the drag — 38% vendor, 26% in AA's independent run — capping agentic-terminal reliability.
- **Reasoning: 70/100.** Strong professional-domain reasoning (Harvey, EEBench leads; HealthBench 56.7% mid-pack) and a longer, harder RL recipe; but no core science-reasoning rows (GPQA/HLE/Index) are published for this ID.
- **Context window: 87/100.** 500,000 tokens = 500K–1M tier (85–94); no measured retrieval quality, and the ≥200K double pricing threshold tempers the tier top.
- **Multimodal: 65/100.** Text+image in, text out (60–70 band); no video/PDF/audio input; image/video/voice generation live in separate xAI models.
- **Coding: 78/100.** DeepSWE v1.1 71.0% (high) is just under the 74%+ frontier band and above Grok 4.6 by ~6 pts; CursorBench 4.0 46.3% beats GPT-5.6 Sol while costing ~27% less per task, but trails Fable 5.1 by 5.5 pts; no SWE-bench Verified/LiveCodeBench rows.
- **Cost efficiency: 80/100.** $2.00/$6.00 per 1M (below-frontier rates; Fable is $10/$50); cached reads $0.50; $6.01/task at xhigh on CursorBench vs $17.28 for Fable max; no free tier.
- **Overall Score: 74/100.** (68 + 70 + 87 + 65 + 78) / 5 = 73.6 → 74. Best-fit: the value pick for long-horizon coding agents — near-frontier DeepSWE and professional-tool work at roughly half the per-task cost of Claude/GPT flagships; route pure terminal-reliability jobs elsewhere until TB numbers improve.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (xAI docs/launch table, Cursor live evaluation, Artificial Analysis run, gateway pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
