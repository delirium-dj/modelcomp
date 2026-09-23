# GPT-6 Sol — findings by Mimo v2.6 Flash

- Source: OpenAI / GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid/upper GPT-6 tier released with GPT-6 Luna — trained with methods similar to flagship GPT-6 Astra, aimed at complex coding, agentic workflows, and professional work at roughly half the GPT-5.6 Sol token price. Distinct from `gpt-5.6-sol` (prior generation).
- **Provider / access:** OpenAI API / Responses API (`gpt-6-sol`), also surfaced via ChatGPT product tiers and third-party gateways. Chat Completions–compatible relays exist; primary documented surface is OpenAI Responses API.
- **Release / knowledge:** API changelog **2026-09-22** (with GPT-6 Luna); knowledge cutoff **2026-04-20**.
- **IDs:** `gpt-6-sol` (OpenAI). `opencode/gpt-6-sol` on Zen per folder meta. No Free-tier $0 ID scored — paid API rates used.
- **Context window:** **1,050,000** input tokens; max input ~922K; **128,000** max output (OmniaKey/llm-stats/OpenAI catalog).
- **Modalities:** text + image in; text out; reasoning effort `none|low|medium|high|xhigh|max`; tool calls / structured outputs / prompt caching (90% cache-read discount). No audio/video pipeline listed.
- **Pricing (as of 2026-09-23):** **$2.00 / $10.00** per 1M in/out standard (half of GPT-5.6 Sol's $4/$20 promo / $5/$30 list); prompts >272K billed 2× input / 1.5× output; cache write +25%, cache read −90%.
- **Architecture:** proprietary (undisclosed params); GPT-6 family with Astra as top tier.

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **33.2%** at xhigh, **$0.27/task** (OpenAI launch table; beats Claude Opus 5 max 26.9% and GPT-6 Astra low 30.3% on that row)
- AutomationBench-AA: **62%** (vs GPT-5.6 Sol 60%) — Artificial Analysis
- Agents' Last Exam: **56.4%** at max (OpenAI; claimed above Opus 5 best on that eval)
- OSWorld 2.0: **64.4%**
- Terminal-Bench 4.0: **44%** at max (AA; **43%** cited in Coding Agent Index write-up)
- Terminal-Bench 2.1: no verified public score found for `gpt-6-sol` (TB2.1 leaderboards still show GPT-5.6 Sol 88.8% as the Sol-line TB2 row)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: **1487 Elo** at max (AA; ~100 below GPT-5.6 Sol's 1588)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** at max (AA composite of ten evals incl. Briefcase, GDPval-AA v2, AutomationBench-AA, TB4, SciCode, HLE; ~level with GPT-5.6 Sol 47; Opus 5.5 at 58)
- AA Coding Agent Index: **57** at max, **$2.99/task** (DeepSWE v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA via Codex harness)
- GPQA Diamond: no verified public score found for `gpt-6-sol` in reviewed sources
- HLE: no verified public score found for `gpt-6-sol` (embedded inside AA Index only)
- LCR / MLCR / CritPt: no verified public score found
- Omniscience: AA notes GPT-6 Sol declines-or-hallucinates poorly — **~60%** hallucination on questions it should refuse (tosea summary of AA-Omniscience)
- LLM Stats Score: **49.4 (#21 overall)** as of 2026-09-22 (5 tracked evals)

Coding:

- DeepSWE v1.1: **68.8%** at max (OpenAI launch; Claude Fable 5 xhigh 69.9% — within ~1.1 pts at ~80% lower cost/task)
- FrontierCode 1.1: **49.3%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found for `gpt-6-sol` in reviewed sources (GPT-5.6 Sol's 96.2% Verified row is **not** this ID)
- SciCode: embedded in AA Index; no standalone public % captured
- SWE-Atlas-QnA: **58%** (within AA Coding Agent Index components)
- Vibe Code Bench: no verified public score found

Long context:

- 1.05M window with long-context billing surcharge above 272K; no MRCR/RULER retrieval curve published for `gpt-6-sol` — no verified public score found for measured long-context accuracy

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 33.2% (beats Opus 5 on that row), OSWorld 2.0 64.4%, Agents' Last Exam 56.4%, TB4 44%, GDPval 1487 form a solid upper-mid agentic stack; missing TB2.1/Tau/Claw rows and a mid TB4 score cap it below frontier-90s.
- **Reasoning: 80/100.** AA Intelligence Index 48 at max sits mid-upper (frontier references imply 60+ for 90–100 band) with no public GPQA/HLE/CritPt rows for this exact ID; Omniscience refusal weakness also pressures the score.
- **Context window: 95/100.** 1.05M window lands in the ≥1M tier (95–100); no ≥98%-at-512K retrieval evidence, so not 100 — and the >272K price surcharge is noted on cost, not context.
- **Multimodal: 65/100.** Text + image in only (image-in band 60–70); no audio/video/PDF pipeline and text-only output documented.
- **Coding: 83/100.** DeepSWE v1.1 68.8% nearly matches Fable 5 (69.9%) and leads Opus 5 on AutomationBench-class work; FrontierCode 49.3% and Coding Agent Index 57 are strong but still short of DeepSWE 74%+ / Coding Index 70%+ frontier refs — and no SWE-bench Verified/LCB row for this ID.
- **Cost efficiency: 80/100.** $2/$10 undercuts GPT-5.6 Sol and Astra by half/5×, with 90% cache reads and ~$0.27–3/task launch claims; still above the ~$1.25/$4.25 ≈88 value tier and carries a 2× long-prompt surcharge — no $0 Free ID.
- **Overall Score: 80.6/100.** Mean of (80 + 80 + 95 + 65 + 83) / 5 = 80.6; best-fit as OpenAI's value frontier coder/agent when DeepSWE-class quality at half Astra/Opus token cost matters more than absolute Verified SOTA.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: fresh public web research (OpenAI launch coverage, Artificial Analysis via officechai/tosea, llm-stats, TechCrunch/TNW/The Deep View, OmniaKey model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
