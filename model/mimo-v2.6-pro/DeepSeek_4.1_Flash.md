# MiMo V2.6 Pro — findings by DeepSeek 4.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Provenance note:** re-written 2026-09-29 after a concurrent external process truncated this file back to a 2,443-byte partial state.

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal sparse MoE from the September 2026 V2.6 series, aimed at long-horizon agentic and professional knowledge work. AA's summary: "amongst the leading models in intelligence and reasonably priced when comparing to other open weight models of similar size" — but "notably slow and somewhat verbose."
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-pro`, OpenAI-compatible Chat Completions); a single serving provider per AA. Weights public at `XiaomiMiMo/MiMo-V2.6-Pro-RL` (collection `XiaomiMiMo/mimo-v26`). An `mimo-v2.6-pro-ultraspeed` variant claims up to 20× inference speed.
- **Release / knowledge:** Released 2026-09-21/22 (vendor Update Time 2026-09-22; llm-stats 2026-09-22) after 6 days of publicly documented live RL training. Knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro`, `mimo-v2.6-pro`, `mimo-v2.6-pro-ultraspeed`. **No OpenCode Zen Free ID** — Zen carries `mimo-v2.6-flash-free` but no Pro entry (live check 2026-09-29).
- **Context window:** 1,048,576 tokens (1M), confirmed by AA and llm-stats. Max output not published.
- **Modalities:** text, image, **speech** and video input; text output (AA technical specifications). Reasoning: yes.
- **Pricing (as of 2026-09-29):** $0.435 / 1M in, $0.87 / 1M out, $0.0036 / 1M cached (99% cache discount); blended $0.18 at 7:2:1; **$0.13 per AA Index task**. Vendor states V2.6 inherits V2.5 pricing and runs 1/20–1/60 of comparable overseas models.
- **Architecture:** sparse MoE, **1.0T (1.02T) total / 42B active**, MIT licence, FP8; technical report published on the HF repo.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index **46** — **#1 of 116** open-weights models, the vendor's headline claim ("surpassing Kimi K3 and Qwen3.8 Max"), still below Fable 5.1 and GPT-6 Astra. The v4.3.2 composite embeds GDPval-AA v2.1, AutomationBench-AA, TB4.0 and AA-Briefcase.
- Vendor claims Pro "has achieved performance on most Agent Benchmarks", but the per-benchmark table is client-side rendered and **did not extract on fetch — no individual agentic row is verified in this pass** (AutomationBench, Toolathlon, OSWorld, TB2.1/TB4.0, GDPval Elo, JobBench all unverified here).
- Ships official harness support plus an end-to-end RL framework (verl, uni-agent, mini-swe-agent) and 7k+ RL task environments.

Reasoning / knowledge:

- AA Intelligence Index **46** (#1/116; class median 18), extended thinking confirmed. **No separate GPQA/HLE/CritPt/LCR figure published — no verified score.**

Coding:

- Visible only through the composite (SciCode, TB4.0). **No standalone SWE-bench/DeepSWE/LiveCodeBench row verified.**
- Sibling only: the 9B Distill-Qwen run reports SWE-bench Verified 61.1 → 66.2, MiMo Cyber Bench 31.3 → 47.0, TB2.1 37.1 → 52.8, MiMo Visual Coding 64.0 → 72.4 — **a different checkpoint, not counted here.**

Long context / serving:

- 1M window verified; **no MRCR/RULER/GraphWalks retrieval accuracy published.**
- **41.1 tokens/s** (#52/116) and TTFT **3.93 s** — AA calls it "notably slow" (median 79 t/s); 140M output tokens on the Index ("somewhat verbose"); llm-stats p95 TTFT 9.05 s.

### Normalized scores (1–100)

- **Tool use: 86/100.** #1-of-116 open-weights Index whose composite embeds the agentic evals, plus harness integrations; capped because no individual agentic row was re-verifiable and serving is slow.
- **Reasoning: 86/100.** Index 46 is an open-weights record (median 18) but sits under the 60+ frontier reference with no separate GPQA/HLE number.
- **Context window: 95/100.** 1,048,576 tokens at the floor of the ≥1M tier; no ≥98% retrieval proof and no published output cap.
- **Multimodal: 95/100.** Text, image, speech and video in with text out clears the "+audio in" band (90–100).
- **Coding: 86/100.** Visible only via the composite plus the vendor's RL-harness release — scored high on the Index, not on a coding number.
- **Cost efficiency: 92/100.** $0.435/$0.87 with a 99% cache discount and $0.13/Index task is below the ~$0.60/$2.20 ≈ 92 anchor; no $0 route.
- **Overall Score: 89.6/100.** (86 + 86 + 95 + 95 + 86) / 5 = 89.6. Best fit: the strongest open-weights pick for omnimodal agentic and knowledge-work pipelines needing self-hostable weights, accepting slow serving and high verbosity.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research (Artificial Analysis MiMo-V2.6-Pro page — Index 46 #1/116, 41.1 t/s, TTFT 3.93 s, $0.435/$0.87, 99% cache discount, $0.13/task, 1.0T/42B, MIT, 1M, text+image+speech+video in; llm-stats — 1,048,576 context, $0.0036 cached, 2026-09-22 release, single provider, technical-report link; Xiaomi MiMo V2.6 release page 2026-09-22 — 6-day live RL, price parity, UltraSpeed 20×, Distill-9B RL deltas; OpenCode Zen live catalogue — no Pro free ID). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
