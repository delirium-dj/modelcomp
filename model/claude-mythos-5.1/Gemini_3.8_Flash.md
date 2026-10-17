# Claude Mythos 5.1 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-mythos-5.1`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted, trusted-access configuration of Claude Fable 5.1 deployed with specialized dual-use biodefense and cybersecurity safeguards for vetted enterprise and research partners.
- **Provider / access:** Anthropic API (`claude-mythos-5.1-20260901`), gated via Project Glasswing verification programs; no Zen Free ID.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff Q3 2026.
- **IDs:** `anthropic/claude-mythos-5.1`
- **Context window:** 1,000,000 tokens total (1M context window; 128K maximum output buffer).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; explicit deep thinking trace generation.
- **Pricing (as of 2026-10-17):** $10.00 / 1M input tokens, $50.00 / 1M output tokens; prompt cache read $0.25 / 1M tokens ($2.5% of base input).
- **Architecture:** Frontier dense foundation transformer sharing weights with Fable 5.1, but removing restrictive dual-use filter refusals on authorized offensive/defensive cybersecurity and biological research.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Mythos trusted-access configuration; vs 55.8% on Fable 5.1 due to safety tax)
- Terminal-Bench-Science: **52.6%** (v0.1)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (shared evaluation with Fable 5.1)
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **81.2%** (SWE-bench Pro)
- LiveCodeBench: **90.5%**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K output buffer; excellent long-range multi-repository code audit and context retention.

### Normalized scores (1–100)

- **Tool use: 96/100.** Industry-leading autonomous tool and agentic terminal execution evidenced by 60.9% on Terminal-Bench 4.0 and 52.6% on Terminal-Bench-Science without public safety refusals.
- **Reasoning: 96/100.** Frontier deductive logic and scientific analysis demonstrated by 93.7% on GPQA Diamond and high-level biological vulnerability research.
- **Context window: 98/100.** 1M token context capacity with 128K output buffer allows end-to-end repository indexing and multi-turn attack surface simulation.
- **Multimodal: 75/100.** Strong document and visual diagram comprehension across system architectures and schematics; text + vision in, text out.
- **Coding: 96/100.** Top-tier software engineering and automated exploit patching verified by 90.5% on LiveCodeBench and 81.2% on SWE-bench Pro.
- **Cost efficiency: 35/100.** High-cost enterprise pricing at $10.00 / $50.00 per 1M tokens, though mitigated by $0.25 / 1M cache reads.
- **Overall Score: 92/100.** Arithmetic mean of five quality dimensions: (96 + 96 + 98 + 75 + 96) / 5 = 92.2 → 92. Specialized frontier intelligence powerhouse optimized for mission-critical cybersecurity, biodefense, and deep software refactoring.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic system disclosures, research program communications, and independent benchmark tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
