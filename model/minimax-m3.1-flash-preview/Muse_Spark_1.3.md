# MiniMax M3.1 Flash Preview — findings by Muse Spark 1.3

- Source: MiniMax (`MiniMax-M3.1-Flash-Preview`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax preview-tier multimodal coding model (2026-09-27) in MiniMax Code / Token Plan; fast everyday coder with tunable thinking depth.
- **Provider / access:** MiniMax API (`https://api.minimax.io/v1` OpenAI-compatible; `/anthropic` Anthropic-compatible); MiniMax Code product; Token Plan Subscription Key only.
- **Release / knowledge:** 2026-09-27 launch; knowledge cutoff undisclosed.
- **IDs:** `MiniMax-M3.1-Flash-Preview` (selector label; standalone public request ID unannounced — do not send label as `model` value)
- **Context window:** 1,000,000 total per MiniMax model table (M3 ceiling shared); max output undisclosed.
- **Modalities:** Text/image/video in; text out plus thinking stream; reasoning always on (adaptive, five efforts low/max); tool calls yes.
- **Pricing (as of 2026-10-02):** No public per-token price (Token Plan $22 Plus / $55 Max / $132 Ultra; credits 1,000 per $1). Sibling M3 $0.30/$1.20 is M3-only.
- **Architecture:** Proprietary; undisclosed params; no weights or technical report.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld / BrowseComp: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Index / BenchLM overall: **no verified public score found** (BenchLM: 0 of 486, Unranked, "coming soon" 2026-09-27)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- KingBench 3 (AICodeKing video review via Volanea 2026-09-28): **53/80 (66.25%)** across 8 prototype tasks (folding table 9/10 best; lens case 8/10; elevator spawn-passenger fail; archery target/timer faults); +35pp over cited M3 31.25% in same comparison; partial-credit scoring.
- SWE-bench Verified / SWE-Pro: **no verified public score found** (M3 SWE-Pro 59.0 is a different model)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 1M is listing ceiling only.

### Normalized scores (1–100)
- **Tool use: 72/100.** Agentic tool use documented (interleaved thinking, five efforts) but zero verified harness numbers; capped hard.
- **Reasoning: 71/100.** Adaptive reasoning documented; no GPQA/HLE-class number; capped spec-only.
- **Context window: 90/100.** 1M ceiling matches flagship tier; capped for zero measured retention.
- **Multimodal: 55/100.** Text/image/video in per docs; capped for no measured vision benchmark.
- **Coding: 76/100.** KingBench 3 53/80 (66.25%, Sep 2026 third-party video walkthrough; +35pp over cited M3) is a real hands-on run; capped for partial-credit scope, 8-task sample, and prototype reliability faults.
- **Cost efficiency: 80/100.** Subscription-only access with no per-token price; mid-pack pending paid terms.
- **Overall Score: 73/100.** Mean of five non-cost dims (72+71+90+55+76=364/5=72.8, half-up 73); fast 1M multimodal prototyper, verify interactively before product use.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research (MiniMax docs via orcarouter 2026-09-27, Volanea/AICodeKing KingBench walkthrough 2026-09-28, BenchLM page 2026-09-27); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

