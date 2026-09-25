# GPT-6 Luna — findings by Muse Spark 1.2

- Source: OpenAI / GPT-6 Luna (openai/gpt-6-luna)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's most efficient GPT-6 volume tier for focused, high-volume tasks — near-frontier DeepSWE at 1/10 cost; 1M context with six reasoning-effort levels.
- **Provider / access:** OpenAI API (Responses + Chat Completions with reasoning=none for function calling) / ChatGPT Work & Codex / GitHub Copilot — API ID `gpt-6-luna` (Chat Completions via Responses API for tool use). OpenCode ID `openai/gpt-6-luna` (paid, no Free ID).
- **Release / knowledge:** Announced/released 2026-09-22 (OpenAI API docs, Apidog, Coursiv, HokAI) alongside GPT-6 Sol/Astra; knowledge cutoff 2026-05-18 (HokAI citing OpenAI API docs).
- **IDs:** `openai/gpt-6-luna` (`gpt-6-luna`)
- **Context window:** 1,050,000 tokens total (922,000 max input + 128,000 max output; long-context billing tier >272K input) — verified via developers.openai.com, llm-stats.com, apidog.com.
- **Modalities:** Text + image (+ file via tools) in; text out; reasoning yes (6 levels: none/low/medium(default)/high/xhigh/max); tool calls (function calling, web/file search, code interpreter, computer use, MCP via Responses API); JSON mode.
- **Pricing (as of 2026-09-25):** **$0.10 / $0.50** per 1M input/output (Standard); cached input $0.01 (90% discount), cache writes $0.125 (1.25x), >272K long-context $0.20/$0.75; Batch/Flex 50%, Fast 2x, regional +10%. Source: developers.openai.com API docs, Apidog, Coursiv. No free API tier; included in ChatGPT Free/Go app limits. Very cheap blended $0.08 (AA 7:2:1) / $0.12 (3:1).
- **Architecture:** Proprietary (not disclosed).

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6 (47 tools, business workflows): **20.7% (HokAI Luna max) / +5.4 pts over GPT-5.6 Luna predecessor at 58% lower cost** (Apidog, Coursiv, Vellum — OpenAI claim; Luna high vs Sol xhigh 33.2%)
- Agents' Last Exam V1 (55 sub-industries, long-horizon professional): **50.9% (HokAI Luna max) / 56.4% Sol max above Opus 5** (HokAI 50.9% Luna, Vellum 56.4% Sol; OpenAI selective)
- DeepSWE v1.1 (real codebase SWE): **66.6% (max)** (Apidog, Coursiv, Vellum — Luna max 66.6% vs Fable 5 xhigh 69.9%, Opus 5 medium comparable; 93% cheaper/task vs Opus, 96% vs Fable; Hitesh Rohira note: Luna max edges Sol high)
- OSWorld 2.0 offline (computer use): **52.7% (HokAI Luna max offline)** (HokAI 52.7 vs GPT-5.6 Sol medium surpassed at 1/10 cost; Sol xhigh 60.5 vs Opus medium 60.3 reference)
- FrontierCode 1.1 Main (merge-ready code): **42.4% (HokAI Luna max)** (HokAI 42.4)
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this ID (not in OpenAI launch set)
- GDPval-AA: **no verified public score found as standalone %** (AA reported 75 Elo regression vs predecessor on GDPval-AA v2.1 — HokAI note)
- MCP Atlas / MCP Mark: **no verified public score found** for Luna (not reported)
- Terminal-Bench 2.0: **no verified public score found** for Luna in this snapshot

Reasoning / knowledge:

- GPQA Diamond: **no verified public GPQA % published by OpenAI for Luna** (HokAI explicitly: no traditional academic scores published for Luna) — **no verified public score found** (peer median 88.3% for context, but not this model)
- HLE (Humanity's Last Exam): **no verified public HLE % found for Luna** (factuality proxy: factual error rate 7.6% vs GPT-5.6 Luna 8.5% per HokAI — error rate, not HLE %)
- Artificial Analysis Intelligence Index: **37** (HokAI citing AA Sep 2026 — level with GPT-5.6 Luna max; vs Sol 48, Astra higher)
- AA Coding Index: **41** (HokAI citing AA — trails GPT-5.6 Luna 43 by 2 pts)
- LiveBench composite (ModelMatchbook snapshot): Reasoning 81.8%, Math 89.1%, Coding 79.0%, Agentic Coding 51.2% — dated 2026-06-25 snapshot unclear if Luna-specific calibration; treat as provisional secondary
- MMLU-Pro / HLE / MRCR: **no verified direct MRCR/RULER point score found** (1.05M window verified, but no retrieval % disclosed)
- Factuality matches GPT-5.6 Sol at higher effort at 1/100 cost (OpenAI claim; no independent SimpleQA % extracted)

Coding:

- DeepSWE 66.6% above; FrontierCode 42.4%; OSWorld coding-adjacent above; SWE-bench Verified/Pro: **no verified public SWE-bench % published for Luna** (HokAI flag: -- /28 peer median 78.3% reference, but not this model) — **no verified public score found** for SWEBench on Luna
- LiveCodeBench / SciCode: **no verified public score found** for Luna standalone (AA Coding 41 is composite)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1.05M window verified; caching preserves hit rate across effort/tool toggles (90% discount $0.01 cached) — but **no MRCR v2/RULER retrieval % at 1M found** for Luna (only window size, not measured retrieval)

### Normalized scores (1–100)

- **Tool use: 78/100.** DeepSWE 66.6% at max near frontier 69.9% (frontier ≥74% →90-100 tier threshold) shows strong agentic SWE, AutomationBench 20.7% modest and Agents Last Exam 50.9% solid but not top (Sol 56.4, Astra 59.3); caps well below 88% TB elite because no Terminal-Bench/GDPval/Tau2 elite scores for Luna to lift to 90+.
- **Reasoning: 68/100.** No GPQA/HLE direct % published (AA Index 37 low, median 60+ =90-100 per methodology) and AA flagged 45 Elo presentation regression; capped heavily vs 90+ GPQA 90%/HLE 40% frontier; LiveBench 81.8% reasoning provisional but not model-specific verified.
- **Context window: 98/100.** 1,050,000 total (922K in /128K out) in ≥1M tier (95-100); caching 90% discount, breakpoint control, and 1M > Sol 872K earns high, but no MRCR 98%+ retrieval at 512K+ disclosed prevents 100.
- **Multimodal: 65/100.** Text+image in (file via tools), text out only; no audio/video input generation per API docs (image in only vs video), so falls in +image =60-70 tier (methodology); scored 65 mid-image tier.
- **Coding: 74/100.** DeepSWE 66.6% max near frontier, FrontierCode 42.4% and OSWorld 52.7% moderate, but no SWE-bench Verified/Pro, LiveCodeBench, or SciCode direct verification; caps at 74 vs 90-100 needing 76%+ SWEB+ 68%+ DeepSWE + 55%+ SciCode simultaneously.
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M is cheapest in tracked suite (AA blended $0.08 7:2:1, #10 cheapest), 50-58% below GPT-5.6 Luna promo ($0.20/$1.20) and 90-92% below GPT-5.6 Sol standard $5/$30; cached $0.01 widens gap — near $0=100 free-tier value at paid price.
- **Overall Score: 77/100.** Mean of five quality dims (78+68+98+65+74)/5=76.6 → 77. Best-fit: ultra-cheap 1M agent at volume — choose when DeepSWE 66% at 1/10 cost and 1M context outweighs GPQA/HLE frontier needs.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (OpenAI developers API docs, Apidog, Coursiv, Vellum, HokAI, llm-stats.com, Artificial Analysis via HokAI/analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

