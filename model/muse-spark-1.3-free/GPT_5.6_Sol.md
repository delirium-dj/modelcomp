# Muse Spark 1.3 Contributor Free — findings by GPT-5.6 Sol

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free. This is OpenCode Zen’s limited-time free access alias for Meta’s contributor tier, not a separately weighted checkpoint; benchmarks below use the underlying Muse Spark 1.3 max configuration.
- **Short description:** Meta’s proprietary multimodal reasoning model for long-horizon agentic workflows, coding, tool use, and large-repository work. The Free variant trades training-data permission for zero-cost OpenCode Zen access.
- **Provider / access:** Meta Model API `muse-spark-1.3` and `muse-spark-1.3-contributor`, supporting Responses, Chat Completions, and Messages APIs; OpenCode Zen `opencode/muse-spark-1.3-contributor-free` uses the Responses API. Also available through Muse Code.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff: no verified public cutoff found.
- **IDs:** `meta/muse-spark-1.3`, `meta/muse-spark-1.3-contributor`, `opencode/muse-spark-1.3`, `opencode/muse-spark-1.3-contributor-free`; a Free ID exists on Zen. Raw Meta API IDs omit the `meta/` prefix.
- **Context window:** 1,048,576 total tokens, verified in Meta Model API documentation; no verified official input/output split found.
- **Modalities:** Text, image, video, and document/PDF input; text output; reasoning yes; parallel and streamed tool calls; structured JSON output supported. No verified direct audio-input or non-text-output support for this checkpoint.
- **Pricing (as of 2026-09-30):** OpenCode Zen Contributor Free: Free input/output/cached read for a limited time. Meta standard tier: $1.25 input, $4.25 output, $0.15 cached input per 1M tokens, with prompts/completions not used for training. Meta contributor tier: $0.10 input, $0.20 output, $0.002 cached input per 1M tokens, with permission to use prompts and completions to train future Meta models.
- **Architecture:** Proprietary closed weights; parameter count, active parameters, and dense/MoE structure are undisclosed. Meta described an open-weights release as future work rather than part of the 1.3 release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta evaluation, max reasoning, native coding harness and official executable verifier; tied #2/5 in Meta’s comparison table).
- Tau3-Banking / Tau2-Bench: **52%** (Artificial Analysis τ³-Banking harness, max reasoning; #1 among models at publication); Tau2-Bench: no verified public score found.
- GDPval-AA: **1754 Elo** (GDPval-AA v2, Meta report using Artificial Analysis’s Stirrup harness; #2/5 in the report table). Current AA v2.1 reports **1674 Elo** under its revised suite.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathon and MCP-Atlas: no verified public score found; SWE-Atlas Codebase QnA: **59.4%** (Meta, max reasoning, public QnA split with mini-swe-agent; #1/5 in the report table).
  Reasoning / knowledge:
- GPQA Diamond: **94%** (Artificial Analysis launch evaluation, max reasoning; rank not stated).
- HLE: **49%** (Artificial Analysis current evaluation, max reasoning).
- LCR / MLCR: **83%** on AA-LCR v1.1 (Artificial Analysis current evaluation, max reasoning); MLCR: no verified public score found.
- CritPt: **25%** (Artificial Analysis current evaluation, max reasoning).
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #22 of 222** (current AA Index v4.3.2 comparison class, max reasoning); the launch-era AA suite reported **62**. BenchLM overall: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: **44% / no verified public score found** (AA launch-era max accuracy; AA did not publish an exact hallucination-rate value in the retrieved public material).
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: **59%** (Artificial Analysis current SciCode evaluation, max reasoning).
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index / other: **75.4%** DeepSWE v1.1 (Meta, max reasoning with mini-swe-agent; #1/4 scored models in the report table); Coding Index: no verified public score found.
  Long context:
- MRCR v2: **98.5% at 256K–512K** and **98.1% at 512K–1M** (Meta, max reasoning, 8-needle variant with 100 examples per band; #1 among reported models in both bands).

### Normalized scores (1-100)

- **Tool use: 98/100.** Terminal-Bench 2.1 at 88.8%, τ³-Banking at 52% and #1, GDPval-AA v2 at 1754 Elo, OSWorld 2.0 at 66.9% partial/32.0% binary, and AutomationBench at 49.6% place it in the frontier tier; missing Claw/MCP results prevent a perfect score.
- **Reasoning: 92/100.** GPQA Diamond 94% and HLE 49% clear the frontier anchors, supported by AA-LCR v1.1 at 83%; the current AA Index of 48 and CritPt at 25% cap the score below the top of the range.
- **Context window: 100/100.** The verified 1,048,576-token tier qualifies for 95–100, and 98.1% MRCR retrieval in the 512K–1M band satisfies the stated requirement for 100.
- **Multimodal: 88/100.** It accepts text, images, video, and documents/PDFs and produces text; lack of verified direct audio input or non-text output caps it below 90.
- **Coding: 98/100.** DeepSWE 75.4%, Terminal-Bench 2.1 at 88.8%, SciCode at 59%, and SWE-Atlas Codebase QnA at 59.4% meet or exceed the frontier coding anchors; missing SWE-bench Verified and LiveCodeBench results prevent 100.
- **Cost efficiency: 100/100.** OpenCode Zen’s evaluated Contributor Free access is currently $0, though it is limited-time and permits training use of prompts and completions.
- **Overall Score: 95.2/100.** `(98 + 92 + 100 + 88 + 98) / 5 = 95.2`; best suited to long-horizon coding, tool-heavy agents, and very-large-context multimodal repository work when the free tier’s data-use terms are acceptable.

---

## Signature

- Provided by: **GPT-5.6 Sol (`openai/gpt-5.6-sol`)** — 2026-09-30
- Method: fresh public internet research using official Meta documentation and evaluation reports, Artificial Analysis, BenchLM, OpenCode Zen documentation, and Hugging Face records; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
