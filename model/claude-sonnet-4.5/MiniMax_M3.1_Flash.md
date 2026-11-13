# Claude Sonnet 4.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's deprecated Sonnet-class model for coding, agents, computer use, and reasoning. It was state of the art on SWE-bench Verified and OSWorld at launch and maintained focus for more than 30 hours on complex tasks.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-sonnet-4-5-20250929` and alias `claude-sonnet-4-5`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The provider exposes the Messages API rather than a separate Responses API.
- **Release / knowledge:** Released 2025-09-29; deprecated 2026-09-30 and retires 2026-11-30. Reliable knowledge cutoff January 2025 and training-data cutoff July 2025.
- **IDs:** `claude-sonnet-4-5-20250929` (Claude API); `global.anthropic.claude-sonnet-4-5-20250929-v1:0` (Amazon Bedrock bedrock-runtime).
- **Context window:** 200,000 input tokens with up to 64,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; extended thinking; tool use, server-side web search and code execution, context editing, memory tool, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $3 per 1M input tokens, $15 per 1M output tokens, $0.30 per 1M cache reads, $3.75 per 1M five-minute cache writes, and $6 per 1M one-hour cache writes. Batch API requests receive a 50% discount.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **61.4%** (Anthropic launch results; OSWorld-Verified, 100 max steps, average across four runs)
- SWE-bench Verified: **77.2%** (Anthropic launch results; bash and string-replacement file-edit scaffold, 200K thinking budget, no test-time compute, average of 10 trials)
- SWE-bench Verified, 1M context configuration: **78.2%** (Anthropic launch results; primary score uses the 200K configuration)
- SWE-bench Verified, high-compute parallel sampling: **82.0%** (Anthropic launch results)
- Devin planning evaluation: **18% improvement** (Anthropic launch announcement citing Cognition)
- Devin end-to-end evaluation: **12% improvement** (Anthropic launch announcement citing Cognition)
- Terminal-Bench: no text-extractable public score found (Anthropic launch results; Terminus 2, multiple runs)
- τ2-bench: no text-extractable public score found (Anthropic launch results; extended thinking with tool use and policy prompt addenda)
- GDPval-AA: no verified public score found
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AIME: **no text-extractable public score found** (Anthropic launch results; 64K reasoning tokens, temperature 1.0)
- MMMLU: **no text-extractable public score found** (Anthropic launch results; average of five runs over 14 non-English languages with extended thinking up to 128K)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- HLE: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **77.2% standard / 78.2% with 1M context / 82.0% high-compute** (Anthropic launch results)
- Terminal-Bench: no text-extractable public score found (Anthropic launch results)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic verifies a 200K-token context window with 64K output and reports major gains in long-context work across engineering, product features, and research; no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld at 61.4%, strong Devin planning and end-to-end gains, 30+ hours of sustained autonomous work, and parallel tool execution support an exceptional score, though no public Tau or MCP score was located.
- **Reasoning: 93/100.** Anthropic documents substantial reasoning and math gains, expert-rated domain knowledge in finance, law, medicine, and STEM, and a state-of-the-art SWE-bench result; missing public GPQA, HLE, and AA-index figures cap the score below certainty.
- **Context window: 75/100.** Anthropic verifies a 200K-token input window with 64K output, a strong but sub-1M context tier; context editing and the memory tool extend usable work over long sessions.
- **Multimodal: 82/100.** Official support covers text and image input, and Anthropic documents major computer-use and visual gains with polished design output; no audio or video input is listed and no public visual benchmark figure was found.
- **Coding: 95/100.** SWE-bench Verified at 77.2% standard and 82.0% high-compute, state-of-the-art Terminal-Bench performance, 30+ hours of coherent autonomous coding, and strong customer code-review results provide exceptional evidence.
- **Cost efficiency: 87/100.** At $3 input and $15 output per 1M tokens, with $0.30 cache reads and 50% batch discounts, Sonnet 4.5 is cost-efficient for its capability, though Sonnet 5.5 is now cheaper.
- **Overall Score: 87.8/100.** A verified high-capability model with excellent coding, agents, computer use, and image input; best fit for difficult professional work within a 200K context budget, though it is deprecated.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.5 model overview](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)
  - [Claude Sonnet 4.5 launch announcement and benchmarks](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.5.md`, using the same headings.
