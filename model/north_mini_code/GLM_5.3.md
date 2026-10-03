# North Mini Code — findings by GLM 5.3

- Source: Cohere / Cohere Labs (`opencode/north_mini_code`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (North-Mini-Code-1.0)
- **Short description:** Cohere's first model for developers — an open-weights research release of a 30B-A3B model optimized for code generation, agentic software engineering, and terminal tasks; runs locally in OpenCode via vLLM.
- **Provider / access:** Hugging Face `CohereLabs/North-Mini-Code-1.0` (Apache 2.0; vLLM + SGLang recipes, `cohere_command4` parsers); hosted HF Space; no inference-provider deployment and no per-token API price at time of writing.
- **Release / knowledge:** announced 2026-06-09 ("Introducing North Mini Code: Cohere's First Model For Developers", HF blog); knowledge cutoff not published.
- **IDs:** `opencode/north_mini_code` (repo slug; no Zen ID); `CohereLabs/North-Mini-Code-1.0` (HF).
- **Context window:** 256K context / 64K max output (official model card; vLLM config `--max-model-len 320000`, OpenCode config limit 256000/64000).
- **Modalities:** text only in, text out (official: "Input: Text only"); interleaved thinking supported (best enabled); native tool use via chat templates with JSON-schema tool descriptions; reasoning yes.
- **Pricing (as of 2026-10-02):** no public per-token price — Apache 2.0 open weights, self-host at raw-GPU cost (30B total / 3B active fits small GPU setups, e.g. `vllm serve -tp 2`).
- **Architecture:** decoder-only sparse MoE (cohere2_moe): 30B total / 3B active, 128 experts with 8 activated per token (SwiGLU, sigmoid router), sliding-window attention with RoPE interleaved with global attention at 3:1; two-stage cascaded SFT + RLVR focused on agentic coding; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **36%** (official model-card eval metadata, ReAct/Terminus-2 methodology, 3 seeds, temp 1.0)
- τ²-bench: **37.4%** (Artificial Analysis model benchmarks via BenchLM)
- GDPval-AA: **0.0%** (Artificial Analysis via BenchLM)
- Terminal-Bench Hard / Terminal-Bench 2.1: methodology documented (Terminus-2) but no separate verified value in text
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **75.7%** (Artificial Analysis via BenchLM)
- AA-HLE: **11.1%** (Artificial Analysis via BenchLM)
- CritPt: **0.3%** (Artificial Analysis via BenchLM)
- Artificial Analysis Intelligence Index: **9.9%** (Artificial Analysis via BenchLM)
- AA-Omniscience Index: **-48.6%** (accuracy 18.9%, hallucination rate **83.2%** — Artificial Analysis via BenchLM)
- AA-IFBench (instruction following): **57.6%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **67.6%** (official model-card eval metadata, Swe-Agent harness v1.1.0, 3 seeds)
- SWE-bench Pro: **40.2%** (official model-card eval metadata)
- AA-SciCode: **38.8%** (Artificial Analysis via BenchLM)
- LiveCodeBench v6: methodology listed on the card but no separate verified value in text
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR: **37.3%** (Artificial Analysis via BenchLM); no MRCR / RULER / GraphWalks scores — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 45/100.** Trained specifically for agentic coding with native tool-call support, but measured rows are weak-to-mixed: Terminal-Bench 2.0 36%, τ²-bench 37.4%, GDPval-AA 0.0% — the zero GDPval row caps it hard despite the agentic pedigree.
- **Reasoning: 45/100.** GPQA Diamond 75.7% is respectable for a 3B-active model, but HLE 11.1%, CritPt 0.3%, AA Index 9.9%, and a catastrophic Omniscience Index (-48.6% with 83.2% hallucination rate) show it cannot be trusted for knowledge work — it is a coding specialist, not a reasoner.
- **Context window: 70/100.** 256K total with an unusually generous 64K max output (official card) — 200K–500K tier; weak measured long-context reasoning (AA-LCR 37.3%) keeps it at the tier floor.
- **Multimodal: 15/100.** Text-only input and output, official — text-only convention (cf. Big Pickle 15).
- **Coding: 68/100.** SWE-bench Verified 67.6% is a strong mid-high result for this size class, but SWE-bench Pro 40.2%, Terminal-Bench 2.0 36%, and AA-SciCode 38.8% show the harder agentic-coding tier is where it falls off.
- **Cost efficiency: 85/100.** Apache 2.0 weights with 3B active parameters make this one of the cheapest credible coding agents to self-host (no per-token API price exists; small-GPU friendly, `-tp 2` or less) — near-free at raw serving cost, capped slightly by self-ops overhead.
- **Overall Score: 49/100.** Half-up mean of the five quality dims: (45 + 45 + 70 + 15 + 68) / 5 = 48.6 → 49. A cheap local agentic-coding specialist: good SWE-bench Verified per parameter dollar; keep it away from knowledge, reasoning, and long-horizon general work (83% hallucination rate).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (official Hugging Face model card with eval metadata, Cohere Labs announcement, BenchLM tracker rows sourced to Artificial Analysis model benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
