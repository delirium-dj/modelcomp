# Claude Sonnet 4.5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-sonnet-4.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's late-2025 Sonnet flagship model, setting major milestones in long-horizon autonomous software engineering and desktop computer use; legacy status following the release of Sonnet 4.6 and Sonnet 5.5.
- **Provider / access:** Anthropic API (`claude-sonnet-4-5-20250929`), OpenCode Zen (`opencode/claude-sonnet-4.5`), OpenRouter, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-09-29 release; knowledge cutoff Q3 2025.
- **IDs:** `anthropic/claude-sonnet-4.5`, `opencode/claude-sonnet-4.5`
- **Context window:** 200,000 tokens standard (200K context window; 64,000 max output tokens); 1,000,000 token extended tier.
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; extended thinking with budget controls.
- **Pricing (as of 2026-10-21):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.30 / 1M prompt cache read; $1.50 / $7.50 batch pricing).
- **Architecture:** Dense foundation transformer featuring integrated hybrid reasoning, computer use capability, and multi-step agentic checkpointing.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **61.4%**
- Terminal-Bench: **50.0%**
- Tau3-Banking / Tau2-Bench: **86.2%** ($\tau$-Bench Retail) / **70.0%** ($\tau$-Bench Airline) / **98.0%** ($\tau$-Bench Telecom)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.5%–83.4%**
- HLE: no verified standalone public launch score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **77.2%** (SWE-bench Verified standard) / **82.0%** (with parallel compute/scaffolding)
- LiveCodeBench: **62.0%–71.0%** (pass@1 with thinking mode)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200,000 token standard context window with 1M extended capacity; demonstrated 30+ hour continuous multi-step autonomous task coherence.

### Normalized scores (1–100)

- **Tool use: 86/100.** SOTA computer use and autonomous tool navigation for its generation evidenced by 61.4% on OSWorld, 50.0% on Terminal-Bench, and 86.2% on Tau-Bench Retail.
- **Reasoning: 88/100.** Deep multi-step problem solving and scientific reasoning demonstrated by 82.5%–83.4% on GPQA Diamond.
- **Context window: 82/100.** 200K standard context capacity (extensible to 1M) with 64K maximum output buffer covers extensive codebase refactoring.
- **Multimodal: 70/100.** Reliable document parsing, screenshot analysis, and desktop GUI interaction; text + vision in, text out.
- **Coding: 88/100.** Outstanding autonomous code generation and GitHub issue resolution verified by 77.2%–82.0% on SWE-bench Verified and 62.0%–71.0% on LiveCodeBench.
- **Cost efficiency: 84/100.** Excellent price-to-performance ratio at $3.00 / $15.00 per 1M tokens with prompt caching at $0.30 per 1M tokens.
- **Overall Score: 83/100.** Arithmetic mean of five quality dimensions: (86 + 88 + 82 + 70 + 88) / 5 = 82.8 → 83. Milestone software engineering workhorse that set the standard for long-horizon agentic task execution and computer use.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public documentation, Anthropic release announcements, independent benchmarks, and developer platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
