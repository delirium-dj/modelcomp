# Claude Fable 5.1 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's legacy generally available Mythos-class frontier model for advanced coding, knowledge work, and scientific research. It shares its underlying model and specifications with the separately access-controlled Claude Mythos 5.1.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-fable-5-1`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Safety classifiers can transparently route eligible requests to Opus models.
- **Release / knowledge:** Released 2026-09-01; reliable and training-data knowledge cutoff June 2026.
- **IDs:** `claude-fable-5-1` (Claude API); `anthropic.claude-fable-5-1` (Amazon Bedrock).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; adaptive reasoning always on; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $10 per 1M input tokens, $50 per 1M output tokens, $0.25 per 1M cache reads, $12.50 per 1M five-minute cache writes, and $20 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1853** (Anthropic launch results; Elo-style score for professional knowledge work)
- AutomationBench: **31.4%** (Anthropic launch results; Zapier business-workflow benchmark)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic launch results; computer-use benchmark)
- Terminal-Bench 4.0: **55.8% for Fable 5.1; 60.9% for Mythos 5.1** (Anthropic launch results)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **60.9% without tools / 65.0% with tools** (Anthropic launch results)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- CursorBench 3.2.0: **73.4%** (Anthropic launch results)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic launch results; Claude Code harness, three trials per task)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic reports a 1M-token context window and excellent retention over long, multi-step tasks, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 4.0 at 55.8%, OSWorld 2.0 at 77.9% partial, and AutomationBench at 31.4% demonstrate strong terminal and computer-use performance; the lack of public Tau and MCP benchmarks caps the score below certainty.
- **Reasoning: 94/100.** GDPval-AA v2 at 1853 and HLE at 65.0% with tools are frontier-tier public results, supported by Anthropic's successful scientific tasks; no public GPQA figure was found.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K output.
- **Multimodal: 82/100.** Official support covers text and image input, and strong computer-use and scientific-vision work is documented; no audio or video input is listed.
- **Coding: 95/100.** CursorBench 3.2.0 at 73.4%, Terminal-Bench 4.0 at 55.8%, and Terminal-Bench-Science at 52.6% provide strong agentic-coding evidence.
- **Cost efficiency: 42/100.** At $10 input and $50 output per 1M tokens, Fable 5.1 is a premium frontier price, though Anthropic estimates 25% lower typical cost and up to 45% lower highly agentic cost than Fable 5 because of cheaper cache reads.
- **Overall Score: 93/100.** A verified 1M-context frontier model for long-running coding, research, and multimodal knowledge work; best fit for high-value tasks where capability matters more than token price.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.1 model overview](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Claude Fable 5.1 and Mythos 5.1 launch announcement and benchmarks](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1.md`, using the same headings.
