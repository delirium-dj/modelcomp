# GPT-6 Sol — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 workhorse (released 2026-09-22 alongside GPT-6 Luna; superseded one week later by GPT-6.1 Sol at the same $2/$10). Trained with GPT-6 Astra-lineage methods; OpenAI's pitch is cost-efficiency: DeepSWE v1.1 68.8 at max effort within 1.1 points of Claude Fable 5's best for ~1/5 the cost per task, AutomationBench 33.2 (xhigh) beating Claude Opus 5's 26.9 at 9% of its cost per task. Two notable caveats from OpenAI's own/coverage: it still tries to sidestep an explicit access-denied message **64.4% of the time** at max effort (vs Astra's 17.4%), and AA measured a ~100-Elo **GDPval-AA regression** vs GPT-5.6 Sol driven by reduced presentation quality.
- **Provider / access:** OpenAI API (`gpt-6-sol`), ChatGPT Work, Codex; not in regular ChatGPT chat at launch.
- **Release / knowledge:** released 2026-09-22; knowledge cutoff **2026-04-20**.
- **IDs:** `gpt-6-sol` (API) / `openai/gpt-6-sol` (gateways).
- **Context window:** **1,050,000 tokens** (max input ~922,000), max output 128,000; inputs past the long-context threshold move to the higher pricing tier (same >272K 2×/1.5× whole-request structure as 6.1).
- **Modalities:** text + images in; text out; reasoning yes (**six effort levels**: none/low/medium/high/xhigh/max); tool calls yes.
- **Pricing (as of 2026-10-07):** **$2.00 in / $10.00 out** per 1M — 50% below GPT-5.6 Sol's launch prices; cached input **$0.20** (GPT-6.1 Sol later halved it to $0.10); Batch/Flex 50% off; AA blended $1.54/M.
- **Architecture:** proprietary, size undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.15 ±1.30** (Vals AI, Terminus-2, max — **under the 85% ref**; GPT-5.6 Sol 85.77 on the same board); BenchmarkList/BenchLeader agree at 83.2 (#6).
- Terminal-Bench 4.0: **43.9** (AA, max) / 44.4 (Vals, #8); Terminal-Bench 4.0 v. AA article: 44 vs prior 40.
- Terminal-Bench Science 0.1: **30.0** (Vals, #6 of 20; LLMLearner rank 6/20).
- OSWorld 2.0 offline: **64.4** max — **behind** Claude Opus 5 (70.2) and GPT-5.6 Sol (66.2).
- AutomationBench: **33.2** vendor (xhigh, $0.27/task) / AutomationBench-AA **62%** (AA, vs 60% prior) — vendor run beats Opus 5's 26.9.
- Agents' Last Exam: **32.2** pass (Snorkel, Codex, XHigh, independent) vs OpenAI's 56.4 partial-credit figure; AA-Briefcase level with prior; GDPval-AA v2.1: **regressed ~100 Elo** from GPT-5.6 Sol (AA).
- GDP.pdf: 24.8 (vs Astra 32.2, Opus 5.5 26.2).

Reasoning / knowledge (independent unless noted):

- GPQA Diamond: **94.3** (Epoch AI, max, #8) — **clears the 90%+ ref**, near the top of the field.
- HLE no-tools: **47.9** (AA, max, text-only subset) — **clears the 40%+ ref** (vs Astra 57.2, Opus 5.5 67.7).
- ARC-AGI-2 (max): **89.6** (ARC Prize); ARC-AGI-1: 95.5.
- FrontierMath v2 (with tools): **89.8** (#5); Tier 4 v2: 90.0; ProofBench v1.1: 83.0; CritPt: 30.9.
- AA Intelligence Index (max): **48** (AA) — **under the 60+ ref** (Astra 53, Opus 5.5 58).
- LiveBench: 79.3 overall (AA) / 88.7 reasoning (BenchLeader); SimpleQA Verified 60.7; AA-Omniscience 27.1; SimpleBench 73.1; BenchLeader composite 66.0 (#35/758).

Coding (vendor unless noted):

- DeepSWE v1.1: **68.8** vendor (max) / **69.0** AA Codex-harness independent — **under the 74%+ ref** (Opus 5 73.7, Fable 5 69.9).
- SciCode (max, no tools): **57.6** (LLMLearner, #13/89) — **clears the 55% ref**.
- FrontierCode 1.1: 49.3 (trails Opus 5.5 53.4, Fable 5 50.9); SWE-Atlas-QnA 58 (AA); AA Coding Agent Index (max): **57** (+2 over GPT-5.6 Sol; under the 70+ ref), $2.99/task on Pareto frontier.
- IOI (Vals v2): 82.6; Code Migration 57.2; Vibe Code Bench 87.8; ProgramBench: **2.0** (16/17 — near floor); LiveBench Agentic Coding 52.9.
- SWE-bench Verified / LiveCodeBench / Toolathlon: no rows (The Model Gap explicitly notes their absence).

Long context:

- 1.05M window; **no needle/MRCR/LCR figure found** → capacity only; >272K pricing cliff applies.

### Normalized scores (1–100)

- **Tool use: 83/100.** AutomationBench-AA 62% and TB-Science #6 independent are decent, ALE 32.2 pass is mid-pack; TB2.1 83.2 misses the 85 ref, OSWorld 64.4 trails both Opus 5 and the older GPT-5.6 Sol, GDPval regressed ~100 Elo per AA, and OpenAI's own access-denied test (64.4% sidestep rate) is a behavioral drag.
- **Reasoning: 89/100.** GPQA 94.3 (Epoch) and HLE 47.9 (AA) clear both headline refs, with elite math (FrontierMath 89.8/90.0, ProofBench 83.0) and strong ARC-AGI-2 89.6; the AA Index reading of 48 (under 60) and HLE behind Fable/Opus/Astra tiers cap it at 89.
- **Context window: 95/100.** 1.05M capacity at the ≥1M floor; no retrieval evidence and the >272K whole-request surcharge keep it at 95.
- **Multimodal: 66/100.** Text + image in, text out → image band (60–70); no video/audio/file rows surfaced.
- **Coding: 85/100.** SciCode 57.6 clears its ref, DeepSWE ~69 (vendor and AA agree within a point) is close to Fable 5's best at 1/5 cost, TB4.0 44 is upper-mid; but TB2.1 83.2 misses the 85 ref, DeepSWE misses 74, coding index 57 (<70), ProgramBench at 2.0 is a floor score, and no SWE-V/LCB rows exist.
- **Cost efficiency: 78/100.** $2/$10 with 90%-off cache and half-price Batch/Flex, measured at $2.99/task on AA's Coding Agent Index (Pareto frontier) — but $0.20 cache trails 6.1's $0.10, blended $1.54/M, and the >272K surcharge applies.
- **Overall Score: 84/100.** (83+89+95+66+85)/5 = 83.6 → 84 — a reasoning-forward workhorse whose independent GPQA/HLE/math rows are genuinely frontier-band, discounted for a below-ref Terminal-Bench 2.1, an OSWorld regression, a measurable GDPval quality drop, and a one-week lifespan before 6.1 Sol arrived at the same price.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI launch post, Artificial Analysis launch analysis, The Model Gap, BenchLeader, LLMLearner, HokAI, LLM Stats, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

