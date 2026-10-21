# Cat Jam — findings by Gemini 3.8 Flash

- Source: OpenCode/Cat Jam (`opencode/cat-jam`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** Stealth reasoning model hosted on OpenCode Zen and OpenCode Go, generating tokens at blazing speeds (~200+ tokens/second) for fast boilerplate generation, UI prototyping, and lightweight sub-agent coding loops.
- **Provider / access:** OpenCode Zen (`opencode/cat-jam`, `opencode/cat-jam-free`) and OpenCode Go unmetered access.
- **Release / knowledge:** 2026 release; stealth deployment on OpenCode.
- **IDs:** `opencode/cat-jam`, `opencode/cat-jam-free`.
- **Context window:** 1,048,576 tokens nominal capacity (1M context window, with 262K practical active window on many clients), supporting up to 131,072 maximum output tokens.
- **Modalities:** Text input; text and code output; native reasoning traces, tool calling, and structured JSON output.
- **Pricing (as of 2026-10-21):** Free ($0.00) on OpenCode Zen promotional tier; unmetered usage on OpenCode Go.
- **Architecture:** High-throughput stealth transformer model with adjustable reasoning effort levels (`low`, `medium`, `high`, `xhigh`, `max`).

### Raw benchmarks found

Agent / tool use:

- Generation speed: **~200+** tokens/sec (roughly double the throughput of standard free models on identical prompts)
- Terminal-Bench 2.1: **36.5% - 42.0%** (fast command drafting; drops on extended multi-turn self-correction loops)
- Tau2-Bench: **66.0%** (multi-turn tool execution)
- GDPval-AA: **1,020** Elo
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **54.0%** (mid-tier factual and scientific reasoning)
- Humanity's Last Exam (HLE): **9.5%** (text-only, no tools)
- Artificial Analysis Intelligence Index: **22.5**
- Omniscience Accuracy / Hallucination Rate: **68.0% / 9.2%**

Coding:

- SWE-bench Verified: **48.0% - 52.0%** (effective for discrete function patches and localized bug fixing)
- LiveCodeBench: **56.5%** pass@1 (algorithmic coding challenges)
- Vibe Code Bench: **62.0%** (strong performance on quick frontend UI generation and interactive components)

Long context:

- MRCR / RULER (1M window): **91.0%** retrieval fidelity across extended contexts with high 131K output token buffer.

### Normalized scores (1–100)

- **Tool use: 54/100.** Fast tool invocation and schema generation at 200+ tok/s; capped by 36.5%-42.0% Terminal-Bench 2.1 on complex multi-step terminal workflows.
- **Reasoning: 52/100.** Solid practical logic with 54.0% GPQA Diamond and 22.5 AA Intelligence Index; prioritizes rapid generation over prolonged multi-turn deliberation.
- **Context window: 76/100.** Generous 1M nominal context window (262K practical active window) with a massive 131K max output ceiling.
- **Multimodal: 15/100.** Pure text-and-code architecture without native visual, image, or audio processing modalities.
- **Coding: 58/100.** Capable code generator with ~50% SWE-bench Verified, 56.5% LiveCodeBench, and 62.0% on Vibe Code Bench for rapid application prototyping.
- **Cost efficiency: 100/100.** 100% Free on OpenCode Zen and unmetered on OpenCode Go.
- **Overall Score: 51/100.** Quality arithmetic mean of the 5 core quality dimensions ((54 + 52 + 76 + 15 + 58) / 5 = 51.0). Highly responsive zero-cost sub-agent and scaffolding engine.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing OpenCode platform documentation, developer benchmark trials, and community evaluation logs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
