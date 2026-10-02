# Mercury 2.5 — findings by Mimo v2.6 Flash

- Source: Inception Labs/Mercury 2.5 (`inception/mercury-2.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' most capable production diffusion LLM (dLLM) (released 2026-09-08) — generates/refines tokens in parallel instead of sequentially, delivering frontier-adjacent quality at extreme speed (1,107 tokens/s on commodity NVIDIA GPUs); positioned for latency-sensitive coding subagents, search/voice pipelines and agent loops. Successor to Mercury 2; vendor claims +40% intelligence over Mercury 2, comparable to GPT-5.6 Luna (Low) / Gemini 3.5 Flash-Lite / Claude Haiku 4.5.
- **Provider / access:** Inception API (OpenAI-compatible, `model: "mercury-2.5"`), Baseten, OpenRouter; enterprise dedicated capacity available. No $0 free tier found (but launch discount below).
- **Release / knowledge:** 2026-09-08 (benchable/ModelBeat tracking date); knowledge cutoff not published.
- **IDs:** `inception/mercury-2.5` / `mercury-2.5`; no Zen Free ID found.
- **Context window:** **260K tokens** (up from Mercury 2's 128K — Baseten); max output not stated (8,192-token completions in examples).
- **Modalities:** **text only in/out** (no image/audio input documented; Mercury Voice is a separate product); reasoning yes (tunable reasoning levels, `reasoning_effort` parameter); **parallel tool calls** + schema-aligned structured JSON output.
- **Pricing (as of 2026-10-02):** list **$0.20 in / $0.75 out per 1M** (cache $0.02); **launch promo 80% off → $0.04 / $0.15** (cache $0.004) live on Inception and OpenRouter (Baseten/OpenRouter listings; discount duration not published).
- **Architecture:** proprietary diffusion language model — "largest diffusion language model ever trained" (vendor); parameters undisclosed; no open weights.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found".

Agent / tool use:

- Tool calling documented (parallel tool calls, `tools`/`tool_choice`, structured outputs — OpenRouter/Baseten); production agent case: Augment Code reports compaction latency −82% (150s → 27s) and −90% cost using Mercury (vendor-cited customer, no harness score)
- Terminal-Bench / Tau / GDPval-AA / Toolathon: **no verified public score found** (GDPval-AA renders as 0.0% on the AA summary — no usable number)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **12.3** (AA via OpenRouter) — low, cost-optimized tier
- Humanity's Last Exam: **11.8%** (AA/Epoch via ModelBeat)
- AA-LCR (long-context recall): **71.7%**; AA-Omniscience Accuracy 22.7% / Non-Hallucination Rate 19.7% (AA)
- CritPt: 0.0% as rendered (no usable score); GPQA Diamond: no verified public score found
- ModelCap Index: 36.3, rank #131/223 (2026-09-19)

Coding:

- **SciCode: 38.5%** (AA/Epoch via OpenRouter/ModelBeat/BenchLM)
- SWE-bench / LiveCodeBench / DeepSWE / Terminal-Bench: no verified public score found
- Benchable's own harness reports Coding 98.0% / Math 98.0% / Reasoning 96.0% but Instruction Following 0.0% (Benchable internal categories — non-standard harness, treated as secondary)

Long context:

- 260K window (official); **AA-LCR 71.7%** — solid recall at the tested lengths; MRCR/RULER at 260K: no verified public score found

Multimodal:

- Text-only model — no image/audio input or non-text output documented (multimodal = no-data floor per methodology)

### Normalized scores (1–100)

- **Tool use: 55/100.** Native parallel tool calls, schema JSON and real agent-production deployments (Augment Code) are documented, but no Terminal-Bench/Tau/GDPval harness number exists — low-mid band.
- **Reasoning: 52/100.** HLE 11.8% is respectable for the tier, yet AA Intelligence Index 12.3 sits below the mid-band anchor (20–35) and Omniscience non-hallucination is only 19.7% — below the 55–65 mid band overall; AA-LCR 71.7% is the one bright spot.
- **Context window: 72/100.** 260K maps into the 200K–500K band (65–84, 200K = 70) and measured AA-LCR recall of 71.7% supports real usability of the window; output cap not published.
- **Multimodal: 15/100.** Text-only input/output → methodology floor band (10–20).
- **Coding: 60/100.** SciCode 38.5% is the sole standard coding number — squarely in the "SciCode <40%" mid-band marker — with no SWE-bench/LiveCodeBench corroboration despite the coding-subagent positioning; capped below mid-band comfort by the absence of agent-coding harnesses.
- **Cost efficiency: 98/100.** Live launch price $0.04/$0.15 per 1M (cache $0.004) beats the methodology's ~$0.10/$0.20 anchor for 97–99 on both axes; not 100 because it is paid (no $0 tier) and the 80% discount has no published end date (list $0.20/$0.75).
- **Overall Score: 51/100.** (55+52+72+15+60)/5 = 50.8 → 51 (half-up) — best-fit: ultracheap, ultrfast text-only diffusion reasoner for high-volume subagent/compaction/search calls where latency dominates; not a frontier reasoning or multimodal model.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (Inception Labs blog and models page, OpenRouter model page with AA benchmark summary, Baseten library entry, ModelBeat/BenchLM/ModelCap trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
