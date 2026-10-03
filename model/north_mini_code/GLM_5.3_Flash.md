# North Mini Code — findings by GLM 5.3 Flash

- Source: Cohere (`north-mini-code-1.0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (1.0)
- **Short description:** Cohere's first agentic coding model and the debut of its North family — a small, efficient open-weights MoE built for code generation, agentic software engineering, terminal tasks, and private/local deployment in the sovereign developer ecosystem. Not a tier variant: "North Mini Code" is the canonical name; the Zen Free ID `north-mini-code-free` is its $0 tier.
- **Provider / access:** Cohere API (dashboard key, Chat Completions); OpenRouter `cohere/north-mini-code:free` ($0 in / $0 out); OpenCode Zen `north-mini-code-free` (models.dev: `cohere/north-mini-code-1-0`); Cohere Model Vault (managed inference); Hugging Face weights `CohereLabs/North-Mini-Code-1.0` (bf16, fp8, w4a16). Specifically trained for OpenCode compatibility.
- **Release / knowledge:** Announced 2026-06-09 (Cohere blog); OpenRouter lists the model release as 2026-06-17. Knowledge cutoff not published.
- **IDs:** `cohere/north-mini-code-1.0` (Cohere API); Zen Free ID `north-mini-code-free` exists.
- **Context window:** 256K total context; 64K max generation (Cohere blog snapshot table; models.dev 256,000/64,000).
- **Modalities:** text in/out only; reasoning yes; tool calls yes; structured outputs / JSON mode yes (models.dev flags all three).
- **Pricing (as of 2026-10-03):** $0 in / $0 out per 1M on the OpenRouter `:free` route and the Zen Free ID; paid Cohere API / Model Vault pricing applies to production routes. Apache 2.0 open weights — self-hosting on 1× H100 @ FP8/FP4 minimum.
- **Architecture:** 30B total / 3B active sparse Mixture-of-Experts; Apache 2.0 open-weights license (bf16/fp8/w4a16 safetensors on HF); minimum hardware 1× H100.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **31.1%** (Artificial Analysis, success rate, 78th percentile, rank 72/326, 2026-06-10)
- Terminal-Bench 2.1: **35.6%** (AA verified, 50th percentile, rank 92/182, 2026-07-21; weighted cost per task $0)
- Tau2-Bench Telecom: **37.4%** (AA, success rate, 52nd percentile, rank 161/332, 2026-06-10)
- Tau3-Banking: **6.4%** Pass@1 (AA verified, 31st percentile, rank 121/174, 2026-07-21)
- GDPval-AA: **543** Elo (AA verified, 37th percentile, rank 215/340, 2026-09-02; field leader 1861)
- AA-Briefcase: **240** Elo (AA verified, 13th percentile, rank 49/56, 2026-08-27; rubric pass rate 6.2%)
- Cohere harness note: SWE-agent harness for SWE-Bench Verified/Pro, ReAct single-terminal-tool for Terminal Bench v2, Terminus-2 for TB Hard — per-benchmark values published only in the launch chart image
- DuelLab GameBench 2: **27.0** leaderboard score (6th percentile, rank 45/48, 2026-08-27; model-code failure rate 54.2%)

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (64th percentile, rank 166/464, 2026-09-02)
- HLE: **11.1%** (65th percentile, rank 164/466, 2026-09-02)
- AA-LCR: **36.0%** (45th percentile, rank 224/409, 2026-09-02)
- Artificial Analysis Intelligence Index: **20.2** (60th percentile, rank 167/418, 2026-09-02 data); 27.6 at launch per AA's launch article — index drift between versions, both listed
- BenchmarkList ECI: **110.74** (#195/397 overall; #79/158 among open weights)
- LCR / MRCR: no verified public score found beyond AA-LCR above

Coding:

- SciCode: **38.2%** (68th percentile, rank 147/458, 2026-09-02)
- SWE-bench Verified / SWE-Pro: no verified public score found in extractable text (Cohere's own numbers are chart-image-only)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: SciCode above
- Vibe Code Bench: no verified public score found
- AA Coding Index: **33.4** (vendor-linked from the Cohere blog to the AA model page)
- Speed: up to 2.8× higher output throughput than Devstral Small 2 at identical concurrency/hardware; ~30% inter-token-latency advantage (Cohere internal tests)

Long context:

- AA-LCR 36.0% at window length (45th percentile); no MRCR / RULER / GraphWalks value reported

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.1 35.6% sits below the 45–60% mid band, Tau3-Banking 6.4% is weak, GDPval 543 and AA-Briefcase 240 Elo are far below the mid 900–1200 range; Terminal-Bench Hard 31.1% (78th pct) and Tau2 37.4% are the bright spots — a sub-mid agentic score capped by missing high-end agentic results.
- **Reasoning: 62/100.** GPQA Diamond 75.7% sits in the 60–80% band, HLE 11.1% just clears the <10% floor, and AA Intelligence Index 20.2 (27.6 at launch) is at the bottom of the 20–35 mid band; AA-LCR 36% (<40) caps it in the 55–65 range.
- **Context window: 72/100.** 256K total (64K max out) lands in the 200K–500K tier (200K = 70, scaled slightly up for 256K); weak measured long-context retrieval (AA-LCR 36.0%) and the 64K output cap keep it below the 500K–1M band.
- **Multimodal: 15/100.** Text-only input and output per the Cohere snapshot and models.dev; no image/video/PDF input.
- **Coding: 62/100.** SciCode 38.2% (68th pct) is just under the <40 mid trigger and the AA Coding Index of 33.4 is modest versus the 70+ frontier ref; no verified SWE-bench Verified/LiveCodeBench in extractable text, so it caps in the mid band despite strong throughput efficiency.
- **Cost efficiency: 100/100.** $0 in / $0 out per 1M on the OpenRouter `:free` route and the Zen Free ID during the free period; Apache 2.0 self-hosting on a single H100 makes it one of the cheapest agentic coders to run.
- **Overall Score: 52/100.** Mean of the five non-cost dims (48 + 62 + 72 + 15 + 62) / 5 = 51.8 → 52; best fit: a free, fast, self-hostable execution-layer coder for small agentic tasks — not a primary planner (GDPval 543, AA-Briefcase 240) and text-only.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-03
- Method: public internet research (Cohere launch blog, BenchmarkList/Artificial Analysis verified evals, models.dev, OpenRouter, OpenCode Zen catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
