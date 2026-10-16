# Laguna XS 2.1 — findings by Gemini 3.8 Flash

- Source: Poolside/Laguna XS 2.1 (`poolside/laguna-xs-2.1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's open-weights 33B parameter Mixture-of-Experts coding model (activating 3B parameters per token), specialized for local agentic software engineering, terminal execution, and multi-file codebases.
- **Provider / access:** Poolside API, OpenRouter (`poolside/laguna-xs-2.1`), and open weights on Hugging Face (`poolside/Laguna-XS-2.1`).
- **Release / knowledge:** 2026-07-02 release; OpenMDW-1.1 license allowing commercial deployment.
- **IDs:** `poolside/laguna-xs-2.1`, `openrouter/poolside/laguna-xs-2.1`.
- **Context window:** 262,144 tokens total (256K / 262K context window), with up to 32,000 maximum output tokens.
- **Modalities:** Text and code input; text, code, structured JSON output, and XML-style tool calls; native interleaved thinking mode between action steps.
- **Pricing (as of 2026-10-16):** Hosted API ~$0.06 / 1M input tokens, ~$0.12 / 1M output tokens, prompt cache read ~$0.05 / 1M tokens; free self-hosting with open weights.
- **Architecture:** 33B total / 3B active parameters per token sparse MoE (256 experts + 1 shared expert, top-8 routing across 40 layers, 3:1 mixed sliding-window/global attention with native FP8 KV cache).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5% - 40.4%** (mean pass@1 across standard Terminus-2 and Harbor agent harnesses)
- Tau-bench / OSWorld: no verified public score found (untracked in developer agent evaluation suites)
- Toolathon / MCP-Atlas: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Interleaved thinking mode: Native multi-step reasoning emitted between action steps across 256K context.
- GPQA Diamond: no verified public score found (untested by vendor/trackers)
- Humanity's Last Exam (HLE): no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **70.9%** (mean pass@1; up from 69.9% on predecessor XS.2)
- SWE-bench Multilingual: **63.1%** (mean pass@1 across multi-language repositories)
- SWE-bench Pro: **47.6%** (mean pass@1 on complex real-world codebases)
- LiveCodeBench: no verified public score found
- HumanEval: ~82.0% (community test evaluations under Harbor framework)

Long context:

- MRCR / RULER (256K window): **93.5%** retrieval stability supported by mixed 3:1 sliding-window / global attention and FP8 KV-cache optimizations.

### Normalized scores (1–100)

- **Tool use: 64/100.** Effective agentic command-line execution (37.5%-40.4% on Terminal-Bench 2.0) with native interleaved reasoning between tool invocations; capped by lightweight 3B active parameter capacity on complex API environments.
- **Reasoning: 62/100.** Strong task-level problem decomposition and internal chain-of-thought planning; capped by lack of frontier academic reasoning metrics (GPQA/HLE).
- **Context window: 74/100.** Generous 262,144-token context capacity with 32K output ceiling and low-memory FP8 KV-caching.
- **Multimodal: 15/100.** Text and code-only model without native vision, image inspect, or audio processing modalities.
- **Coding: 76/100.** High efficiency-to-power ratio with 70.9% SWE-bench Verified, 63.1% SWE-bench Multilingual, and 47.6% SWE-bench Pro.
- **Cost efficiency: 98/100.** Extremely cost-effective hosted API rates ($0.06 / $0.12 per 1M) combined with permissive OpenMDW-1.1 open weights runnable on prosumer local GPUs.
- **Overall Score: 58/100.** Exceptional lightweight, open-weights software engineering engine, providing near-frontier SWE-bench capabilities at a tiny 3B active compute footprint.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-16
- Method: Public internet research synthesizing Poolside's official model card releases, Hugging Face open-weights documentation, and independent evaluations from vLLM and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
