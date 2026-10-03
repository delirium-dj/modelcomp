# Ling 3.1 Flash — findings by Qwen 3.8 27B

- Source: inclusionai/ling-3.1-flash, e.g. OpenRouter `inclusionai/ling-3.1-flash`
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's new-generation hybrid-reasoning mixture-of-experts model (25B active of 560B total) aimed at coding, multi-step analysis, and tool-using agents; successor to Ling 3.0 Flash.
- **Provider / access:** OpenRouter `inclusionai/ling-3.1-flash` (canonical slug `inclusionai/ling-3.1-flash-20261002`), served by Novita (~100% 1-day uptime); also listed on Vercel AI Gateway as `inclusionai/ling-3.1-flash`. Chat-completions style API with tool calling (`tools`, `tool_choice`).
- **Release / knowledge:** released 2026-10-02 (OpenRouter canonical slug / creation timestamp; vendor launch screenshots dated 2026-09-30); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.1-flash` (free, $0/$0 on OpenRouter). No separate paid ID verified; `opencode/ling-3.1-flash` is the folder's curated OpenCode Zen ID.
- **Context window:** 262,144 total tokens; 32,768 max output (OpenRouter API `context_length`/`max_completion_tokens`, confirmed by Vercel AI Gateway listing).
- **Modalities:** text in / text out (OpenRouter architecture `text->text`); hybrid reasoning — reasoning supported and enabled by default, toggleable; tool calls supported; no image/audio/video input.
- **Pricing (as of 2026-10-03):** $0 in / $0 out per 1M tokens (OpenRouter, Novita endpoint — free).
- **Architecture:** MoE, 560B total / 25B active parameters (OpenRouter description, confirmed by Vercel AI Gateway); source type proprietary per BenchLM.

### Raw benchmarks found

Agent / tool use:

- DRACO: **85.5%** (BenchLM, from "Ant Ling: Ling 3.1 Flash launch screenshots", 2026-09-30)
- CyberGym: **87.9%** (BenchLM, same source)
- skillsBench: **68.7%** (BenchLM, same source)
- AutomationBench: **52.5%** (BenchLM, same source)
- Finance Agent v2: **57.9%** (BenchLM, same source)
- SWE Atlas Codebase QnA: **55.9%** (BenchLM, same source)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found (Terminal-Bench 4: **40.4%** noted under Coding as the closest terminal-agent proxy)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no AA model page as of 2026-10-03; BenchLM lists 8 of 645 benchmarks, unranked — provisory proxy: prior-generation Ling 3.0 Flash holds AA Index 20 on the 2026-10-03 AA leaderboard)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- HealthBench Professional: **65.3%** (BenchLM, launch-screenshot source)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Terminal-Bench 4: **40.4%**; SWE Atlas Codebase QnA: **55.9%** (both BenchLM, launch-screenshot source; QnA cross-listed above)

Long context:

- 262K window; no long-context retrieval benchmark (MRCR / RULER) reported for this model yet.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong agentic results on DRACO (85.5%) and CyberGym (87.9%), but skillsBench (68.7%), AutomationBench (52.5%), and Finance Agent v2 (57.9%) sit only in the mid band and Terminal-Bench 4 is weak (40.4%); no Terminal-Bench 2.1 or Tau score verified, which caps the dimension.
- **Reasoning: 55/100.** No verified GPQA Diamond, HLE, AIME, or AA Intelligence Index for this exact model (prior-generation Ling 3.0 Flash indexed 20); only proxy is HealthBench Professional 65.3% plus the hybrid-reasoning design, leaving the score mid-low.
- **Context window: 72/100.** Verified 262,144-token total window with 32,768 max output (OpenRouter API + Vercel AI Gateway) places it in the 200K–500K tier (65–84), slightly above the 200K=70 baseline.
- **Multimodal: 15/100.** Text-only input and output (OpenRouter `text->text`; no image/audio/video/PDF support).
- **Coding: 48/100.** SWE Atlas Codebase QnA 55.9% is mid but Terminal-Bench 4 40.4% is below mid, and no SWE-bench Verified/Pro, LiveCodeBench, or DeepSWE score is verified; the coding/agent positioning is not yet backed by top-tier SWE numbers.
- **Cost efficiency: 100/100.** $0 in / $0 out per 1M on OpenRouter (Novita) — fully free.
- **Overall Score: 52/100.** Mean of 68, 55, 72, 15, 48 = 51.6, rounded half-up to 52. Best fit: free, low-friction agentic tool use and interactive coding loops inside 262K; not a contender for hard reasoning or long-horizon SWE work until independent benchmarks land.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-10-03
- Method: public internet research (OpenRouter API model + endpoint metadata, Vercel AI Gateway model page, BenchLM model page of 2026-10-02, Artificial Analysis LLM leaderboard snapshot of 2026-10-03 for prior-generation reference — all fetched 2026-10-03); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
