# Big Pickle — findings by GPT 5.6 Sol

- Source: OpenCode Console (`opencode/big-pickle`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** An undisclosed, closed-weight stealth reasoning alias served free for a limited time by OpenCode for coding-agent, multi-step problem-solving, and tool-use workloads. Its underlying model can change, so benchmark evidence is a dated route snapshot rather than proof of a particular architecture.
- **Provider / access:** OpenCode's current OpenAI-compatible Chat Completions endpoint as `opencode/big-pickle`; Pi also catalogs the same `big-pickle` route ([OpenCode models](https://opencode.ai/docs/zen), [Pi](https://pi.dev/models/opencode/big-pickle)).
- **Release / knowledge:** Catalog metadata lists release 2025-10-17 and knowledge date 2025-01; no named developer or vendor-authored cutoff was disclosed ([models.dev record](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/big-pickle.toml)).
- **IDs:** `opencode/big-pickle`; the unsuffixed ID is the limited-time free offering, not a separate `big-pickle-free` model ([OpenCode models](https://opencode.ai/docs/zen)).
- **Context window:** 200,000 total tokens, 160,000 maximum input, and 32,000 maximum output; no exact-route long-context retrieval benchmark was found ([models.dev record](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/big-pickle.toml)).
- **Modalities:** Text input and text output, reasoning, tool calls, and structured output. No image, audio, video, or PDF input is advertised ([models.dev record](https://raw.githubusercontent.com/anomalyco/models.dev/dev/providers/opencode/models/big-pickle.toml), [Pi](https://pi.dev/models/opencode/big-pickle)).
- **Pricing (as of 2026-10-17):** $0/M input, output, cached read, and cached write during the limited-time free period. OpenCode states that submitted data may be used to improve the model during this period ([OpenCode models](https://opencode.ai/docs/zen), [Pi](https://pi.dev/models/opencode/big-pickle)).
- **Architecture:** Undisclosed proprietary model; catalog metadata marks it closed-weight. Provider-error speculation is not sufficient to identify its developer, weights, parameter count, or license.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8% (63/124)** using mini-swe-agent 2.4.6, Harbor 0.18.0, the official 124 tasks and verifier, and the exact `big-pickle` OpenCode route ([reproducible evaluation repository](https://github.com/PhillipChaffee/big-pickle-swe-atlas)).
- Strict lower bound when treating six unparseable rubrics as failures: **49.2% (61/124)**. The run used one trial per task rather than the official three and was not executed by Scale, but publishes configurations, per-task results, and verifier logs for audit ([evaluation caveats](https://github.com/PhillipChaffee/big-pickle-swe-atlas)).
- By category: code onboarding **60.7%**, architecture/system design **52.3%**, root-cause analysis **45.9%**, security **45.5%**, and API/library integration **25.0%** ([evaluation results](https://github.com/PhillipChaffee/big-pickle-swe-atlas)).
- Terminal-Bench, Tau, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: no verified public exact-route score found.

Reasoning / knowledge:

- No verified public exact-route GPQA, HLE, LCR, CritPt, Artificial Analysis Intelligence Index, or Omniscience score found. SWE Atlas requires codebase analysis and multi-step reasoning, but is not a general-reasoning benchmark.

Coding:

- SWE Atlas Codebase QnA: **50.8%**, with TypeScript **58.1%**, Python **55.2%**, Go **50.0%**, and C **38.5%** ([evaluation results](https://github.com/PhillipChaffee/big-pickle-swe-atlas)).
- The same-scaffold comparison in the evaluation places this snapshot above GLM 5.2's listed **48.12%**, but the Big Pickle run is a single self-reported trial and should not be treated as an official leaderboard submission ([evaluation context](https://github.com/PhillipChaffee/big-pickle-swe-atlas)).
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: no verified public exact-route score found.

Long context:

- No verified public exact-route MRCR, RULER, GraphWalks, or retrieval-at-length result found; only the 200K catalog limit is verified.

### Normalized scores (1–100)

- **Tool use: 70/100.** The auditable 50.8% SWE Atlas agent run demonstrates useful terminal-assisted codebase work, but its single-trial status and absence of broader tool benchmarks cap the score.
- **Reasoning: 58/100.** Successful codebase QnA provides indirect reasoning evidence, while the lack of any exact-route general-reasoning benchmark requires a substantial cap.
- **Context window: 70/100.** The verified 200K tier maps directly to 70 in the methodology; no retrieval measurement justifies a lift.
- **Multimodal: 15/100.** Current catalogs advertise text input and text output only.
- **Coding: 75/100.** SWE Atlas 50.8% is a solid direct coding/codebase result with reproducible logs, discounted for one trial, self-reporting, and no corroborating SWE-bench or SciCode score.
- **Cost efficiency: 100/100.** The exact route is free during its limited-time preview, with a data-use caveat.
- **Overall Score: 58/100.** The five quality dimensions average 57.6; Big Pickle is best treated as a capable free coding-agent route whose identity and future behavior are not stable guarantees.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Fresh public internet research across OpenCode, models.dev, Pi, search indexes, and the exact-route SWE Atlas reproduction artifacts; no proxy benchmark from a guessed underlying model was used, and scores are normalized 1–100 interpretations rather than official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
