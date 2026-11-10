# Iceman - findings by Gemini 3.8 Flash

- Source: OpenCode Zen/Console (`opencode/iceman-free`) and OpenCode Go (`iceman-contributor-free`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman
- **Short description:** OpenCode's anonymous stealth reasoning model served across OpenCode Console/Zen (`iceman-free`) and OpenCode Go (`iceman-contributor-free`) for zero-cost agent loops and coding experiments.
- **Provider / access:** OpenCode API (`opencode/iceman-free`), OpenAI-compatible endpoint `https://opencode.ai/inference/openai/v1`; OpenCode Go contributor route.
- **Release / knowledge:** First observed October 24, 2026; catalogued on OpenCode Console November 6, 2026; knowledge cutoff mid-2026.
- **IDs:** `opencode/iceman-free`, `opencode-go/iceman-contributor-free`
- **Context window:** 262,144 tokens input / 131,072 tokens max output.
- **Modalities:** Text in, text out; tool-calling and structured JSON output supported; attachment/vision inputs disabled.
- **Pricing (as of 2026-11-10):** Free ($0.00 / 1M input, $0.00 / 1M output); telemetry data retained and used for model training under Contributor/Free terms.
- **Architecture:** Unannounced thinking transformer model with autonomous tool execution; measured throughput ~46–84 tok/s.

### Raw benchmarks found

Agent / tool use:

- StealthMark 1.8.10: **19.2** overall (General Intelligence **11.7**, Visual/Spatial Intelligence **31.0**)
- Task breakdown: Beach **46.4**, Selfie **39.3**, Raccoon **29.8**, Ground Truth **20.2**, Mona Lisa **19.3**, Newton's Mirror **10.1**, Latch **3.6**, Foresight **3.2**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- Humanity's Last Exam (HLE): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Design/Code Generation (StealthMark subtasks): Beach 46.4, Selfie 39.3, Raccoon 29.8, Mona Lisa 19.3

Long context:

- 262,144 token context window verified across catalog entries; high prompt-cache hit rate observed in production telemetry.

### Normalized scores (1-100)

- **Tool use: 60/100.** Reliable tool execution and structured formatting for agentic scaffolding; capped by failure on multi-step state tracking and complex recovery.
- **Reasoning: 50/100.** Measured weak on physical/causal reasoning and foresight (StealthMark GI 11.7, Foresight 3.2, Latch 3.6), balanced by active chain-of-thought generation.
- **Context window: 62/100.** 262K context with 131K output headroom accommodates large code files and multi-turn loops; below the 1M+ tier common in late-2026 models.
- **Multimodal: 30/100.** Text-only in and text-only out (`attachment: false`); minimal baseline score for structured JSON and diagram code generation.
- **Coding: 55/100.** Competent at drafting, boilerplate generation, and small localized edits; limited on repo-scale reasoning and multi-file debugging.
- **Cost efficiency: 88/100.** 100% free on OpenCode Console and Go; discounted from 100 because prompts and completions are retained and utilized for model training.
- **Overall Score: 51/100.** Arithmetic mean of five quality dimensions: (60 + 50 + 62 + 30 + 55) / 5 = 51.4 -> 51 (Cost excluded). Useful for bulk drafting and low-stakes code exploration, but unsuitable for private/confidential code or complex multi-file engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** - 2026-11-10
- Method: Public documentation research, OpenCode console data telemetry, and independent benchmark evaluations (StealthMark 1.8.10); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Console Models Documentation](https://opencode.ai/docs/console/models/)
  - [Stealth Models - Iceman Contributor Results](https://stealthmodels.com/iceman-contributor)
  - [Hugging Face - stealth-model/iceman-contributor](https://huggingface.co/stealth-model/iceman-contributor)
