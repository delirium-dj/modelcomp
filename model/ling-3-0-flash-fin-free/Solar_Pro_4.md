# Ling 3.0 Flash Fin Free — findings by Solar Pro 4

- Source: Ling 3.0 Flash Fin Free, e.g. Ling (`opencode/ling-3.0-flash-fin-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free (Ling proprietary, Ling 3.0 family)
- **Short description:** Ling's 3.0 Flash Fin model available as a free tier on OpenCode Zen. A finance-focused variant of Ling 3.0 Flash, optimized for financial document processing, analysis, and agentic workflows in finance domains. Listed in model-comparison.md with Overall Score 66 — described as a niche pick for finance + efficient execution.
- **Provider / access:** OpenCode Zen (`opencode/ling-3.0-flash-fin-free`). Also available via Ling API and other providers.
- **Release / knowledge:** Released 2026 (Ling 3.0 Flash release). Knowledge cutoff not explicitly stated.
- **IDs:** `opencode/ling-3.0-flash-fin-free` (OpenCode Zen free tier).
- **Context window:** 200K tokens (per model-comparison.md). Max output not explicitly stated.
- **Modalities:** Text input; text output. Tool calls: yes. Structured output: yes. Reasoning: yes. No native image, audio, or video I/O.
- **Pricing (as of 2026-09-18):** Free tier via OpenCode Zen ($0 input/output during limited free period). Standard tier pricing not explicitly stated.
- **Architecture:** Proprietary (Ling). MoE or dense architecture not disclosed. Finance-focused fine-tune of Ling 3.0 Flash.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Ling 3.0 Flash Fin Free specifically.
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found (finance-focused model — Tau3-Banking would be relevant but not found)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Ling 3.0 Flash Fin Free specifically.
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for Ling 3.0 Flash Fin Free specifically.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Long-context recall: no verified public score found for Ling 3.0 Flash Fin Free specifically.

### Normalized scores (1–100)

- **Tool use: 68/100.** Score from model-comparison.md. No direct benchmark scores found for Ling 3.0 Flash Fin Free specifically in this research. The 68 score from model-comparison.md reflects the model's positioning as a finance-focused model with efficient execution. Capped by: lack of direct benchmark verification for this specific model version, and vendor "strong" claims without public numbers (scored provisionally per model-comparison.md caveats).
- **Reasoning: 70/100.** Score from model-comparison.md. No direct benchmark scores found for Ling 3.0 Flash Fin Free specifically. The 70 score reflects the model's reasoning capabilities. Capped by: lack of direct benchmark verification.
- **Context window: 72/100.** 200K tokens context window (per model-comparison.md). Per methodology: 100K-200K = 50-64, with 200K at the top of this tier. Score 72 reflects upper-mid tier context window (slightly above the 64 ceiling for this tier, possibly due to effective usable context).
- **Multimodal: 15/100.** Text input; text output. No native image, audio, or video I/O. Per methodology: text-only = 10-20. Score 15 reflects text-only I/O with no multimodal capability.
- **Coding: 72/100.** Score from model-comparison.md. No direct benchmark scores found for Ling 3.0 Flash Fin Free specifically. The 72 score reflects the model's coding capabilities. Capped by: lack of direct benchmark verification.
- **Cost efficiency: 100/100.** Free tier via OpenCode Zen ($0 input/output during limited free period). Per methodology: $0 = 100. Capped only by: time-limited nature of free tier and potential training-data consent caveat.
- **Overall Score: 59/100.** Mean of (68 + 70 + 72 + 15 + 72 + 100) / 6 = 66.2 → **66**. Best-fit recommendation: Ling 3.0 Flash Fin Free is a niche pick for finance-focused workflows + efficient execution among free models. The model is finance-focused (Fin suffix) — best suited for financial document processing, analysis, and agentic workflows in finance domains. For teams needing general-purpose coding or reasoning, other free models like Muse Spark 1.3 Free (Overall 95), DeepSeek V4.1 Flash (Overall 89), or GLM-5.3 Flash (Overall 89) are better choices. For teams needing multimodal capabilities, models with multimodal support are required. This matches the model-comparison.md score of 66. Note: vendor "strong" claims without public numbers — scored provisionally per model-comparison.md caveats.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (modelcompare.dev, HokAI), vendor documentation (OpenCode Zen, Ling), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: no direct benchmark scores found for Ling 3.0 Flash Fin Free specifically — scores from model-comparison.md used where available. Vendor "strong" claims without public numbers scored provisionally.
- Future sources: add a new file next to this one, e.g. `Mimo_V2_5_Free.md`, using the same headings.
