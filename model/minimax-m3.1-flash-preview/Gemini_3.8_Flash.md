# MiniMax M3.1 Flash Preview — findings by Gemini 3.8 Flash

- Source: MiniMax (`minimax-m3.1-flash-preview`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** High-throughput multimodal preview coding model from MiniMax with 1M token context, native image/video inputs, and 5 configurable reasoning effort tiers deployed inside MiniMax Code.
- **Provider / access:** MiniMax Code platform & Token Plan (`minimax-m3.1-flash-preview`). Subscription-based access; no standard pay-as-you-go per-token API pricing.
- **Release / knowledge:** 2026-09-27 release; late-2026 knowledge cutoff.
- **IDs:** `minimax/minimax-m3.1-flash-preview`
- **Context window:** 1,000,000 tokens context window; ~64K token maximum output.
- **Modalities:** Text, image, and video input; text and code output; 5 configurable thinking effort levels (Low, Medium, High, X-High, Max).
- **Pricing (as of 2026-10-11):** Subscription-based via MiniMax Token Plan (starting around $22/mo); no standalone pay-as-you-go per-token API.
- **Architecture:** 428B Mixture-of-Experts (MoE) with ~23B active parameters per token, optimized for high token throughput (~70–95 tok/s).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (community evaluation proxy)
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Tool calling / Agentic execution: fast JSON and tool call emission in MiniMax Code environment.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- Humanity's Last Exam (HLE): no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Thinking Effort: Tunable reasoning depth with mandatory internal thinking trace.

Coding:

- KingBench 3: **66.25% (53/80)** (AICodeKing coding suite evaluation; major improvement over M3's 31.25%)
- SWE-bench Verified: **59.0%** (SWE-bench Pro proxy comparison)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1,000,000 tokens context window with high needle-in-a-haystack recall across full codebase context.

### Normalized scores (1–100)

- **Tool use: 61/100.** Fast tool and command formatting within MiniMax Code, but occasionally exhibits state drift in complex unattended agent loops.
- **Reasoning: 64/100.** Tunable 5-level reasoning traces assist multi-step problem decomposition and architecture planning.
- **Context window: 91/100.** Robust 1,000,000 token context window enables loading complete multi-repository codebases and extensive debug traces.
- **Multimodal: 62/100.** Native text, image, and video input processing enables UI inspection and screen-capture bug analysis.
- **Coding: 68/100.** Validated 66.25% (53/80) score on KingBench 3 demonstrates strong everyday code completion, bug fixing, and script generation.
- **Cost efficiency: 73/100.** Token Plan subscription model provides affordable bulk coding access, though lacks pay-as-you-go flexibility.
- **Overall Score: 69/100.** Strong, responsive preview coding model delivering noticeable gains over prior MiniMax generations for interactive developer workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Multi-source web research across MiniMax release documentation, KingBench 3 benchmarks, and community API evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
