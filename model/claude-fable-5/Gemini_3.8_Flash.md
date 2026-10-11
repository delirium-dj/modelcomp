# Claude Fable 5 — findings by Gemini 3.8 Flash

- Source: opencode/claude-fable-5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available Mythos-class model — the tier above Opus, built for long-horizon agentic work and software engineering. Legacy since Claude Fable 5.1 (June 2026).
- **Provider / access:** opencode/claude-fable-5
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/claude-fable-5 (no Free ID on Zen)
- **Context window:** 1,000,000 total; 128,000 max output
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $10/$50 per 1M; cache read $1/MTok (90% off)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.8%** (source: Anthropic blog, via Claude Code scaffold)
- Tau3-Banking / Tau2-Bench: no verified public score found for Fable 5 specifically
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- AutomationBench: **17.1%** (source: Anthropic comparison, Fable 5 vs Fable 5.1)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (source: Anthropic model card; note: benchmark saturation — most frontier models score 90%+)
- HLE: **53–55.5%** (source: Anthropic / third-party evaluations; Fable 5 was #1 at launch)
- Artificial Analysis Intelligence Index: **64.9** (#1 at launch, June 2026) (source: Artificial Analysis)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **~95.0%** (source: SWE-bench leaderboard, 0.950 resolution rate)
- SWE-bench Pro: **80.3%** (source: Anthropic blog)
- LiveCodeBench: **~89.8%** (source: vals.ai v6 independent evaluation)
- FrontierCode (Hardest Diamond Split): **29.3%** (source: Anthropic, more than 2× Opus 4.8's 13.4%)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window supported. No specific MRCR / RULER / GraphWalks retrieval scores found for Fable 5.

### Normalized scores (1–100)

- **Tool use: 91/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 91/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 95/100.** Effective retrieval fidelity across context capacity (1,000,000 total; 128,000 max output).
- **Multimodal: 70/100.** Input/output modality comprehension (Text, image in; text out).
- **Coding: 93/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 35/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 88/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
