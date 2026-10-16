# Claude Fable 5 — findings by Gemini 3.8 Flash

- Source: Anthropic/Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's flagship Mythos-class foundation model designed for long-horizon agentic workflows, multi-repository software engineering, and scientific research with integrated dynamic thought budgeting and advanced safety classifiers.
- **Provider / access:** Anthropic API (`claude-fable-5`), Amazon Bedrock, Google Cloud Vertex AI, and OpenRouter.
- **Release / knowledge:** June 2026 release; training knowledge cutoff early 2026.
- **IDs:** `anthropic/claude-fable-5`, `opencode/claude-fable-5`; no Free tier on Zen.
- **Context window:** 1,000,000 tokens (1M context window), with up to 128,000 maximum output tokens.
- **Modalities:** Text, high-resolution image, and multi-page PDF document input; text, code, structured JSON output, and Model Context Protocol (MCP) tool execution.
- **Pricing (as of 2026-10-16):** $10.00 / 1M input tokens, $50.00 / 1M output tokens; prompt cache reads at $0.25 - $1.00 / 1M tokens.
- **Architecture:** Frontier Mythos-class transformer featuring adaptive internal reasoning traces that dynamically scale computation based on task complexity.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.8% - 88.0%** (frontier terminal and DevOps task execution)
- MCP-Atlas: **83.3% - 84.7%** (multi-tool orchestration under Model Context Protocol)
- AutomationBench: **17.1%** (complex multi-step autonomous computer interactions)
- GDPval-AA: **1,780** Elo (complex knowledge work and professional document generation)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.2% - 94.1%** (PhD-level scientific and academic reasoning)
- Humanity's Last Exam (HLE): **53.0% - 59.0%** (leading frontier score on hard multi-disciplinary evaluation)
- LCR / MLCR: **88.0%** (long-context multi-turn reasoning)
- Artificial Analysis Intelligence Index: **72.0**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 2.6%**

Coding:

- SWE-bench Verified: **95.0%** (near-complete resolution on real-world GitHub issues)
- SWE-bench Pro: **80.3%** (multi-file repository engineering and architecture maintenance)
- LiveCodeBench: **89.8%** pass@1 (uncontaminated competitive algorithmic programming)
- SciCode / AA-SciCode: **68.5%**

Long context:

- MRCR / RULER (1M window): **97.2%** retrieval accuracy across 1,000,000 tokens with 128K sustained output stability.

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite multi-tool and command-line execution with 83.8%-88.0% on Terminal-Bench 2.1 and 84.7% on MCP-Atlas; capped only by extreme complexity edge cases in AutomationBench (17.1%).
- **Reasoning: 94/100.** Frontier reasoning powerhouse scoring 93.2%-94.1% on GPQA Diamond, 53-59% on Humanity's Last Exam, and 72 on the AA Intelligence Index.
- **Context window: 97/100.** Full 1,000,000-token context window with 128K max output capacity, maintaining 97.2% retrieval accuracy over deep transcripts.
- **Multimodal: 80/100.** Strong vision and multi-page PDF document comprehension for diagram and UI verification; capped by lack of native audio/video modalities.
- **Coding: 96/100.** Frontier-defining coding engine with 95.0% on SWE-bench Verified, 80.3% on SWE-bench Pro, and 89.8% on LiveCodeBench.
- **Cost efficiency: 32/100.** Premium enterprise tier pricing ($10.00/$50.00 per 1M tokens), though amortized effectively by prompt caching.
- **Overall Score: 91/100.** State-of-the-art frontier model built for mission-critical software engineering, long-horizon autonomous agents, and deep technical problem solving.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-16
- Method: Public internet research synthesizing Anthropic official system cards, technical announcements, and independent evaluations from Vals AI, BenchLM, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
